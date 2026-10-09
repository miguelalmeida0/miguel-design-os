import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { repositoryRoot } from "./store.mjs";

const INDEX_VERSION = 2;
export const contexts = ["mobile-product", "product-ui", "dense-product", "browse", "editorial"];
const stopWords = new Set(["a", "an", "the", "and", "or", "to", "of", "for", "in", "with", "my", "i"]);

export function terms(text) {
  return [...new Set((String(text || "").normalize("NFKC").toLowerCase().match(/[\p{L}\p{N}]+/gu) || []).filter(term => !stopWords.has(term)))].slice(0, 800);
}

export function referenceKind(reference) {
  if (reference.referenceType === "visual-inspiration" || /^approved\/inspiration\//.test(reference.relative || "")) return "reference";
  if (/^rejected\//.test(reference.relative || "")) return "failure";
  return "project-evidence";
}

function summarize(reference) {
  const observation = reference.observations?.findLast(item => item.author === "agent");
  const ownNote = reference.notes?.find(note => path.basename(note.path || "", ".md") === path.basename(reference.relative || "", path.extname(reference.relative || "")));
  const features = (observation?.principles || []).slice(0, 6).map(value => String(value).slice(0, 600));
  const title = reference.title || path.basename(reference.relative || reference.key, path.extname(reference.key)).replace(/[-_]/g, " ");
  const tags = (reference.tags || []).slice(0, 30);
  let imagePath = reference.key;
  if (path.basename(reference.corpus || "") === "visual-library") {
    const libraryRoot = path.join(repositoryRoot, "visual-library");
    const candidate = path.resolve(libraryRoot, reference.relative || "");
    const relative = path.relative(libraryRoot, candidate);
    if (relative && !relative.startsWith(".." + path.sep) && relative !== ".." && !path.isAbsolute(relative)) imagePath = candidate;
  }
  const row = {
    id: reference.id, title, path: imagePath, context: reference.context, kind: referenceKind(reference),
    tags, features, interpretation: observation?.interpretation || null,
    observationProvenance: observation ? "agent pixel observation; feature preference unconfirmed" : "repository metadata; not verified user preference",
    endorsement: reference.userEndorsement?.author === "user" ? reference.userEndorsement : null,
    source: reference.source || null,
    dimensions: [reference.width || 0, reference.height || 0],
    hash: reference.sha256 || reference.id,
    valid: reference.status === "valid"
  };
  row.terms = terms([title, ...tags, ...features, (ownNote?.text || "").slice(0, 3000)].join(" "));
  return row;
}

export function loadCatalog(store) {
  store.assertPrivate(store.statePath);
  let stat;
  try { stat = fs.statSync(store.statePath); } catch (error) {
    if (error.code === "ENOENT") store.load();
    throw error;
  }
  const stamp = `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeMs}`;
  const indexPath = path.join(store.directory, "index.json");
  try {
    const cached = store.read(indexPath);
    if (cached.version === INDEX_VERSION && cached.sourceStamp === stamp && cached.profile === store.profile && Array.isArray(cached.references) && Array.isArray(cached.preferences)) {
      return { ...cached, cacheHit: true, privateDirectory: store.directory };
    }
  } catch (error) {
    if (error.code !== "ENOENT" && !(error instanceof SyntaxError)) throw error;
  }
  const state = store.load();
  const catalog = {
    version: INDEX_VERSION, sourceStamp: stamp, profile: state.profile, revision: state.revision,
    references: state.references.map(summarize), preferences: state.preferences,
    method: "reference retrieval and explicit preference memory; no model training"
  };
  store.write(indexPath, catalog);
  return { ...catalog, cacheHit: false, privateDirectory: store.directory };
}

export function searchReferences(catalog, { context, query = "", limit = 5, referenceIds = [] } = {}) {
  if (context && !contexts.includes(context)) throw new Error(`Unknown context. Use: ${contexts.join(", ")}`);
  if (!Number.isInteger(limit) || limit < 1 || limit > 20) throw new Error("Reference limit must be 1–20.");
  const queryTerms = terms(query).slice(0, 24);
  const wanted = new Set(referenceIds);
  const candidates = catalog.references.filter(row => row.kind === "reference" && row.valid && (!context || row.context === context) && (!wanted.size || wanted.has(row.id)));
  if (wanted.size && candidates.length !== wanted.size) throw new Error("A requested reference is missing, invalid, or outside this project context.");
  return candidates.map(row => {
    const titleTerms = new Set(terms([row.title, ...row.tags].join(" ")));
    const matchedTerms = queryTerms.filter(term => row.terms.includes(term));
    const score = matchedTerms.reduce((sum, term) => sum + (titleTerms.has(term) ? 4 : 1), 0) + (row.endorsement ? 0.25 : 0);
    const { terms: unused, ...reference } = row;
    return { ...reference, matchedTerms, score };
  }).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, limit).map(reference => {
    const id = reference.source?.library_file_id;
    if (catalog.privateDirectory && /^libfile_[a-zA-Z0-9]+$/.test(id || "") && !fs.existsSync(reference.path)) {
      const restored = path.join(catalog.privateDirectory, "references", `${id}.png`);
      if (fs.existsSync(restored)) return { ...reference, path: restored };
    }
    return reference;
  });
}

export function applicablePreferences(catalog, { context, project, workflow = "design-workflow" } = {}) {
  return catalog.preferences.filter(preference => preference.author === "user" && preference.status === "active" && (
    preference.scope === "global" ||
    (preference.scope === "context" && [context, workflow].filter(Boolean).includes(preference.context)) ||
    (preference.scope === "project" && project && preference.project === project)
  ));
}

export function verifyReference(reference) {
  if (fs.statSync(reference.path).size > 32 * 1024 * 1024) throw new Error("Reference image exceeds 32 MiB.");
  const content = fs.readFileSync(reference.path);
  const hash = createHash("sha256").update(content).digest("hex");
  if (hash !== reference.hash) throw new Error(`Reference changed: ${reference.title}. Re-import the current original before using its notes.`);
  return { ...reference, verifiedHash: hash, pixelInspectionRequired: true };
}
