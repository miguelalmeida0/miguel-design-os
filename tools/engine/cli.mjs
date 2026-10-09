import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { isDeepStrictEqual } from "node:util";
import { createStore, validateState } from "./store.mjs";
import { applicablePreferences, loadCatalog, searchReferences } from "./catalog.mjs";
import { compileBrief, renderPacket } from "./brief.mjs";
import { recordFeedback } from "./feedback.mjs";

function options(args, names, booleans = []) {
  const allowed = new Set([...names, "profile"]);
  const flags = {};
  for (let index = 0; index < args.length; index += 1) {
    const flag = args[index];
    const name = flag.startsWith("--") ? flag.slice(2) : "";
    if (booleans.includes(name)) { flags[name] = true; continue; }
    if (!allowed.has(name) || !args[index + 1] || args[index + 1].startsWith("--")) throw new Error(`Unknown option or missing value: ${flag}`);
    if (name in flags) throw new Error(`Repeated option: ${flag}`);
    flags[name] = args[++index];
  }
  return flags;
}

function readInput(file) {
  if (!file) throw new Error("Provide the input file.");
  const descriptor = fs.openSync(path.resolve(file), "r");
  try {
    if (fs.fstatSync(descriptor).size > 32 * 1024 * 1024) throw new Error("Input exceeds 32 MiB.");
    return JSON.parse(fs.readFileSync(descriptor, "utf8"));
  } finally { fs.closeSync(descriptor); }
}

function output(value) { console.log(JSON.stringify(value, null, 2)); }

export async function run(args) {
  const [command, ...rest] = args;
  if (command === "references") {
    const flags = options(rest, ["query", "context", "limit"]);
    const store = createStore(flags.profile);
    const catalog = loadCatalog(store);
    const references = searchReferences(catalog, { query: flags.query, context: flags.context, limit: flags.limit === undefined ? 5 : Number(flags.limit) });
    output({ references, preferences: applicablePreferences(catalog, { context: "reference-browsing", workflow: "reference-browsing" }), cacheHit: catalog.cacheHit });
    return;
  }
  if (command === "feedback") {
    const flags = options(rest, ["quote", "scope", "context", "project", "key", "source"]);
    output(recordFeedback(createStore(flags.profile), flags));
    return;
  }
  if (command === "start") {
    const flags = options(rest, ["brief", "out"]);
    const store = createStore(flags.profile);
    const brief = readInput(flags.brief);
    const packet = compileBrief(loadCatalog(store), brief);
    const text = renderPacket(packet);
    if (Buffer.byteLength(text) > 20 * 1024) throw new Error("The packet exceeds 20 KiB. Narrow the reference selection or consolidate repeated corrections before designing.");
    const directory = flags.out ? path.resolve(flags.out) : path.join(store.directory, "runs", randomUUID());
    store.assertPrivate(directory);
    const packetPath = path.join(directory, "packet.json");
    const promptPath = path.join(directory, "prompt.md");
    // A run is append-only so a new request cannot silently replace prior work.
    fs.mkdirSync(path.dirname(directory), { mode: 0o700, recursive: true });
    fs.mkdirSync(directory, { mode: 0o700, recursive: false });
    store.write(packetPath, packet);
    store.write(promptPath, text);
    output({ status: packet.status, project: packet.project, questions: packet.questions, references: packet.references.map(reference => ({ id: reference.id, title: reference.title, path: reference.path })), packet: packetPath, prompt: promptPath, promptBytes: Buffer.byteLength(text), nextAction: packet.nextAction || "Answer only the missing project questions, then rerun start." });
    return;
  }
  if (command !== "taste") throw new Error("Unknown engine command.");
  const [operation, ...remaining] = rest;
  if (!operation || operation === "help") {
    console.log(`Personal design engine\n\n  taste import --from <private-state.json> [--merge] [--profile miguel]\n  taste status [--profile miguel]\n  references --context <context> --query "..." --limit 5\n  start --brief <project-brief.json> [--out <new-private-run-directory>]\n  feedback --quote "<exact user correction>" --scope <global|context|project> --key <topic> --source "<message/date>" [--context <context>] [--project <project>]\n  taste export --out <private-file.json>\n\nReferences and corrections stay private. This retrieves reference evidence; it does not train a model. Legacy commands remain available through this same CLI.`);
    return;
  }
  const flags = options(remaining, operation === "import" ? ["from"] : operation === "export" ? ["out"] : [], operation === "import" ? ["merge"] : []);
  const store = createStore(flags.profile);
  if (operation === "import") {
    const incoming = readInput(flags.from);
    validateState(incoming, store.profile);
    const result = store.update(state => {
      if (!state.references.length && !state.preferences.length && !state.runs.length) {
        Object.assign(state, structuredClone(incoming));
        return { added: incoming.references.length + incoming.preferences.length + incoming.runs.length, changed: true };
      }
      if (state.references.length || state.preferences.length || state.runs.length) {
        if (!flags.merge) throw new Error("Profile already contains work. Use --merge to retain it; import never replaces existing records.");
      }
      for (const preference of incoming.preferences) {
        const existing = state.preferences.find(item => item.id === preference.id);
        if (existing && !isDeepStrictEqual(existing, preference)) throw new Error("Import conflicts with an existing correction event. The saved profile was preserved; use the current authoritative profile rather than merging contradictory snapshots.");
      }
      let added = 0;
      for (const field of ["references", "preferences", "runs"]) {
        const identityOf = item => field === "references" ? item.key : item.id || JSON.stringify(item);
        const identities = new Set(state[field].map(identityOf));
        for (const item of incoming[field]) {
          const identity = identityOf(item);
          if (!identities.has(identity)) { state[field].push(item); identities.add(identity); added += 1; }
        }
      }
      if (added) state.revision = Math.max(state.revision, incoming.revision);
      return { added, changed: added > 0 };
    });
    output({ ...result, profile: store.profile, privateDirectory: store.directory });
    return;
  }
  if (operation === "status") {
    const catalog = loadCatalog(store);
    const counts = { references: 0, failureEvidence: 0, projectEvidence: 0 };
    for (const row of catalog.references) counts[row.kind === "reference" ? "references" : row.kind === "failure" ? "failureEvidence" : "projectEvidence"] += 1;
    output({ profile: store.profile, revision: catalog.revision, ...counts, explicitCorrections: catalog.preferences.filter(preference => preference.author === "user" && preference.status === "active").length, cacheHit: catalog.cacheHit, method: catalog.method });
    return;
  }
  if (operation === "export") {
    if (!flags.out) throw new Error("Export requires --out inside the private directory.");
    if (["state.json", "index.json", ".write.lock"].includes(path.basename(flags.out))) throw new Error("Export cannot target internal engine files.");
    store.write(flags.out, store.load(), { exclusive: true });
    output({ exported: path.resolve(flags.out) });
    return;
  }
  throw new Error(`Unknown taste operation: ${operation}`);
}
