import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { createStore, repositoryRoot } from "../tools/engine/store.mjs";
import { applicablePreferences, loadCatalog, searchReferences } from "../tools/engine/catalog.mjs";
import { compileBrief, renderPacket } from "../tools/engine/brief.mjs";
import { recordFeedback } from "../tools/engine/feedback.mjs";

const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6ZWsAAAAASUVORK5CYII=", "base64");
const hash = createHash("sha256").update(png).digest("hex");

function fixture(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "design-engine-test-"));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const image = path.join(directory, "reference.png");
  fs.writeFileSync(image, png);
  const store = createStore("test", path.join(directory, "private"));
  const reference = { id: hash, key: image, relative: "approved/inspiration/mobile/reference.png", context: "mobile-product", title: "Warm tactile onboarding", status: "valid", width: 1, height: 1, tags: ["warm", "tactile"], observations: [{ author: "agent", principles: ["A tactile object is the focal point."] }] };
  store.update(state => {
    state.references.push(reference);
    state.preferences.push({ id: "known-rule", author: "user", scope: "global", quote: "Never use handwritten typography.", status: "active" });
  });
  return { directory, image, store, reference };
}

test("normal reference results exclude generated project and failure evidence", t => {
  const { store, reference } = fixture(t);
  store.update(state => state.references.push(
    { ...reference, id: "generated", relative: "approved/apps/generated/result.png", title: "Warm tactile onboarding app QA" },
    { ...reference, id: "failure", relative: "rejected/example.png", title: "Warm tactile failure" }
  ));
  const catalog = loadCatalog(store);
  assert.deepEqual(searchReferences(catalog, { context: "mobile-product", query: "warm" }).map(item => item.id), [hash]);
});

test("a matching feature outranks an endorsed but unrelated reference", t => {
  const { store, reference } = fixture(t);
  store.update(state => state.references.push({ ...reference, id: "unrelated", title: "Space flight", tags: [], observations: [], userEndorsement: { author: "user", quote: "standout" } }));
  assert.equal(searchReferences(loadCatalog(store), { query: "warm" })[0].id, hash);
});

test("context filter prevents mixing mobile and editorial taste", t => {
  const { store, reference } = fixture(t);
  store.update(state => state.references.push({ ...reference, id: "editorial", context: "editorial" }));
  assert.deepEqual(searchReferences(loadCatalog(store), { context: "mobile-product" }).map(item => item.context), ["mobile-product"]);
});

test("pixel observations never become explicit preferences", t => {
  const { store } = fixture(t);
  const catalog = loadCatalog(store);
  assert.equal(applicablePreferences(catalog).length, 1);
  assert.equal(catalog.references[0].endorsement, null);
  assert.match(catalog.references[0].observationProvenance, /unconfirmed/);
});

test("a project correction is recalled in a fresh CLI process and stays in that project", t => {
  const { store, directory } = fixture(t);
  recordFeedback(store, { quote: "Keep the result action beside the selected item.", scope: "project", project: "a", key: "result-action", source: "test user message" });
  for (const project of ["a", "b"]) {
    const input = path.join(directory, `${project}.json`);
    fs.writeFileSync(input, JSON.stringify({ project, audience: "reader", primaryObject: "result", primaryAction: "select", context: "mobile-product" }));
    const run = spawnSync(process.execPath, [path.join(repositoryRoot, "tools/design-os.mjs"), "start", "--profile", "test", "--brief", input], { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: store.root }, encoding: "utf8" });
    assert.equal(run.status, 0, run.stderr);
    const packet = JSON.parse(fs.readFileSync(JSON.parse(run.stdout).packet, "utf8"));
    assert.equal(packet.preferences.some(item => item.key === "result-action"), project === "a");
    assert.equal(packet.preferences.some(item => item.id === "known-rule"), true);
  }
});

test("reference-browsing correction does not leak into unrelated design contexts", t => {
  const { store } = fixture(t);
  recordFeedback(store, { quote: "Just references.", scope: "context", context: "reference-browsing", key: "presentation", source: "test message" });
  const catalog = loadCatalog(store);
  assert.equal(applicablePreferences(catalog, { context: "editorial" }).some(item => item.key === "presentation"), false);
  assert.equal(applicablePreferences(catalog, { context: "reference-browsing" }).some(item => item.key === "presentation"), true);
});

test("duplicate feedback is a no-op and leaves cache valid", t => {
  const { store } = fixture(t);
  const correction = { quote: "Readable selected labels.", scope: "global", key: "selection", source: "test message" };
  recordFeedback(store, correction);
  loadCatalog(store);
  const before = fs.statSync(store.statePath);
  const result = recordFeedback(store, correction);
  assert.equal(result.created, false);
  assert.equal(fs.statSync(store.statePath).ino, before.ino);
  assert.equal(loadCatalog(store).cacheHit, true);
});

test("supersession preserves history and only affects its exact scope", t => {
  const { store } = fixture(t);
  for (const [project, quote] of [["a", "old"], ["b", "other"], ["a", "new"]]) recordFeedback(store, { quote, scope: "project", project, key: "palette", source: "test" });
  const history = store.load().preferences.filter(item => item.key === "palette");
  assert.equal(history.length, 3);
  assert.equal(history[0].status, "superseded");
  assert.deepEqual(applicablePreferences(loadCatalog(store), { project: "a" }).filter(item => item.key === "palette").map(item => item.quote), ["new"]);
  assert.deepEqual(applicablePreferences(loadCatalog(store), { project: "b" }).filter(item => item.key === "palette").map(item => item.quote), ["other"]);
});

test("cache invalidates after a correction even if the quote is the same length", t => {
  const { store } = fixture(t);
  loadCatalog(store);
  recordFeedback(store, { quote: "dark", scope: "global", key: "palette", source: "test" });
  assert.equal(loadCatalog(store).cacheHit, false);
  recordFeedback(store, { quote: "warm", scope: "global", key: "palette", source: "test" });
  assert.equal(loadCatalog(store).cacheHit, false);
  assert.equal(applicablePreferences(loadCatalog(store)).find(item => item.key === "palette").quote, "warm");
});

test("brief questions cover missing project facts without re-asking taste", t => {
  const { store } = fixture(t);
  const packet = compileBrief(loadCatalog(store), { project: "a", audience: "reader" });
  assert.equal(packet.status, "needs-brief");
  assert.deepEqual(packet.questions.map(item => item.field), ["primaryObject", "primaryAction", "context"]);
  assert.equal(packet.preferences[0].quote, "Never use handwritten typography.");
});

test("complete brief requires pixels before implementation and produces a compact packet", t => {
  const { store } = fixture(t);
  const packet = compileBrief(loadCatalog(store), { project: "a", audience: "reader", primaryObject: "item", primaryAction: "select", context: "mobile-product" });
  assert.equal(packet.status, "needs-reference-inspection");
  assert.equal(packet.references[0].verifiedHash, hash);
  assert.equal(packet.references[0].pixelInspectionRequired, true);
  assert.match(packet.directionPolicy, /one grounded direction/);
  assert.ok(Buffer.byteLength(renderPacket(packet)) < 6000);
});

test("changed reference cannot reuse stale pixel observations", t => {
  const { store, image } = fixture(t);
  fs.appendFileSync(image, "test change");
  assert.throws(() => compileBrief(loadCatalog(store), { project: "a", audience: "reader", primaryObject: "item", primaryAction: "select", context: "mobile-product" }), /Reference changed/);
});

test("private writes reject escaping and symbolic links", t => {
  const { store, directory } = fixture(t);
  assert.throws(() => store.write(path.join(directory, "published.json"), {}), /private directory/);
  const link = path.join(store.directory, "escape");
  fs.symlinkSync(directory, link);
  assert.throws(() => store.write(path.join(link, "leak.json"), {}), /symbolic links/);
  assert.equal(fs.existsSync(path.join(directory, "leak.json")), false);
});

test("invalid profile, scope and reference bounds fail before mutation", t => {
  const { store } = fixture(t);
  assert.throws(() => createStore("../other", store.root), /profile name/);
  assert.throws(() => recordFeedback(store, { quote: "x", scope: "project", key: "x", source: "test" }), /requires --project/);
  assert.throws(() => searchReferences(loadCatalog(store), { limit: 100 }), /1–20/);
  assert.throws(() => searchReferences(loadCatalog(store), { context: "unknown" }), /Unknown context/);
});

test("write lock prevents a second process from losing updates", t => {
  const { store } = fixture(t);
  const before = fs.readFileSync(store.statePath, "utf8");
  const lock = path.join(store.directory, ".write.lock");
  fs.writeFileSync(lock, "another process");
  assert.throws(() => recordFeedback(store, { quote: "x", scope: "global", key: "x", source: "test" }), /another process/);
  assert.equal(fs.readFileSync(store.statePath, "utf8"), before);
  assert.equal(fs.readFileSync(lock, "utf8"), "another process");
});

test("import preserves duplicate image paths and existing work; repeated merge is a no-op", t => {
  const { store, directory } = fixture(t);
  const source = store.load();
  source.references.push({ ...source.references[0], key: source.references[0].key + "-second-path" });
  const incoming = path.join(directory, "incoming.json");
  fs.writeFileSync(incoming, JSON.stringify(source));
  const invoke = more => spawnSync(process.execPath, [path.join(repositoryRoot, "tools/design-os.mjs"), "taste", "import", "--from", incoming, "--profile", "test", ...more], { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: store.root }, encoding: "utf8" });
  assert.equal(invoke([]).status, 1);
  assert.equal(store.load().references.length, 1);
  assert.equal(invoke(["--merge"]).status, 0);
  assert.equal(store.load().references.length, 2);
  const before = fs.statSync(store.statePath).ino;
  assert.equal(invoke(["--merge"]).status, 0);
  assert.equal(fs.statSync(store.statePath).ino, before);
});

test("start never overwrites an existing run", t => {
  const { store, directory } = fixture(t);
  const brief = path.join(directory, "brief.json");
  fs.writeFileSync(brief, JSON.stringify({ project: "a", audience: "reader" }));
  const out = path.join(store.directory, "run");
  const args = [path.join(repositoryRoot, "tools/design-os.mjs"), "start", "--profile", "test", "--brief", brief, "--out", out];
  const config = { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: store.root }, encoding: "utf8" };
  assert.equal(spawnSync(process.execPath, args, config).status, 0);
  const before = fs.readFileSync(path.join(out, "packet.json"), "utf8");
  assert.equal(spawnSync(process.execPath, args, config).status, 1);
  assert.equal(fs.readFileSync(path.join(out, "packet.json"), "utf8"), before);
});

test("incomplete briefs still recall known context corrections", t => {
  const { store } = fixture(t);
  recordFeedback(store, { quote: "Keep mobile controls within thumb reach.", scope: "context", context: "mobile-product", key: "controls", source: "test" });
  const packet = compileBrief(loadCatalog(store), { project: "a", context: "mobile-product" });
  assert.equal(packet.status, "needs-brief");
  assert.equal(packet.preferences.some(item => item.key === "controls"), true);
});

test("null optional scope fields do not prevent supersession", t => {
  const { store } = fixture(t);
  store.update(state => state.preferences.push({ id: "old-null", author: "user", scope: "global", context: null, project: null, key: "density", quote: "old", status: "active" }));
  recordFeedback(store, { quote: "new", scope: "global", key: "density", source: "test" });
  assert.deepEqual(applicablePreferences(loadCatalog(store)).filter(item => item.key === "density").map(item => item.quote), ["new"]);
});

test("oversized outputs and writes into other profiles preserve existing files", t => {
  const { store } = fixture(t);
  const target = path.join(store.directory, "existing.json");
  store.write(target, { original: true });
  const before = fs.readFileSync(target, "utf8");
  assert.throws(() => store.write(target, "x".repeat(32 * 1024 * 1024 + 1)), /32 MiB/);
  assert.equal(fs.readFileSync(target, "utf8"), before);
  assert.throws(() => store.write(path.join(store.root, "other/state.json"), {}), /private directory/);
});

test("export cannot overwrite packets, engine state or another profile", t => {
  const { store } = fixture(t);
  const target = path.join(store.directory, "prompt.md");
  store.write(target, "original prompt");
  for (const out of [target, store.statePath, path.join(store.root, "other/export.json")]) {
    const result = spawnSync(process.execPath, [path.join(repositoryRoot, "tools/design-os.mjs"), "taste", "export", "--profile", "test", "--out", out], { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: store.root }, encoding: "utf8" });
    assert.equal(result.status, 1);
  }
  assert.equal(fs.readFileSync(target, "utf8"), "original prompt");
});

test("symbolic links above the private root are rejected", t => {
  const { directory } = fixture(t);
  const link = path.join(directory, "linked-parent");
  fs.symlinkSync(directory, link);
  const store = createStore("test", path.join(link, "new-private"));
  assert.throws(() => store.write(store.statePath, {}), /symbolic links/);
  assert.equal(fs.existsSync(path.join(directory, "new-private")), false);
});

test("invalid brief input does not rebuild or write the index", t => {
  const { store } = fixture(t);
  const result = spawnSync(process.execPath, [path.join(repositoryRoot, "tools/design-os.mjs"), "start", "--profile", "test", "--brief", "/missing-brief"], { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: store.root }, encoding: "utf8" });
  assert.equal(result.status, 1);
  assert.equal(fs.existsSync(path.join(store.directory, "index.json")), false);
});

test("reverting a correction preserves unique events through a merge", t => {
  const { store, directory } = fixture(t);
  for (const quote of ["Dense", "Sparse", "Dense"]) recordFeedback(store, { quote, scope: "global", key: "density", source: "test message" });
  const state = store.load();
  const history = state.preferences.filter(item => item.key === "density");
  assert.equal(new Set(history.map(item => item.id)).size, 3);
  assert.deepEqual(history.map(item => item.status), ["superseded", "superseded", "active"]);
  const input = path.join(directory, "full-history.json");
  fs.writeFileSync(input, JSON.stringify(state));
  const destination = createStore("test", path.join(directory, "merge-destination"));
  destination.update(target => target.preferences.push(history[0]));
  const result = spawnSync(process.execPath, [path.join(repositoryRoot, "tools/design-os.mjs"), "taste", "import", "--profile", "test", "--merge", "--from", input], { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: destination.root }, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(destination.load().preferences.filter(item => item.key === "density").length, 3);
  assert.deepEqual(applicablePreferences(loadCatalog(destination)).filter(item => item.key === "density").map(item => item.quote), ["Dense"]);
});

test("contradictory snapshots cannot silently retain an obsolete active correction", t => {
  const { store, directory } = fixture(t);
  const previous = recordFeedback(store, { quote: "Dense", scope: "global", key: "density", source: "test" }).preference;
  const incoming = store.load();
  incoming.preferences.find(item => item.id === previous.id).status = "superseded";
  incoming.preferences.push({ ...previous, id: "different-event", quote: "Sparse", status: "active" });
  const file = path.join(directory, "conflict.json");
  fs.writeFileSync(file, JSON.stringify(incoming));
  const before = fs.readFileSync(store.statePath, "utf8");
  const result = spawnSync(process.execPath, [path.join(repositoryRoot, "tools/design-os.mjs"), "taste", "import", "--profile", "test", "--merge", "--from", file], { env: { ...process.env, DESIGN_OS_PRIVATE_DIR: store.root }, encoding: "utf8" });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /conflicts with an existing correction event/);
  assert.equal(fs.readFileSync(store.statePath, "utf8"), before);
});

test("new workspace restores private originals using stable IDs even with a warm index", t => {
  const { store, reference, image } = fixture(t);
  store.update(state => { state.references[0] = { ...reference, key: "/missing-old-workspace/reference.png", source: { library_file_id: "libfile_fixture" } }; });
  loadCatalog(store);
  const destination = path.join(store.directory, "references/libfile_fixture.png");
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(image, destination);
  const catalog = loadCatalog(store);
  assert.equal(catalog.cacheHit, true);
  const selected = searchReferences(catalog, { context: "mobile-product", limit: 1 });
  assert.equal(selected[0].path, destination);
  assert.equal(compileBrief(catalog, { project: "a", audience: "reader", primaryObject: "item", primaryAction: "select", context: "mobile-product" }).references[0].verifiedHash, hash);
});

test("repository references rebase to this checkout without changing profile records", t => {
  const { store, reference } = fixture(t);
  store.update(state => { state.references[0] = { ...reference, key: "/old-workspace/visual-library/example.png", corpus: "/old-workspace/visual-library", relative: "approved/inspiration/example.png" }; });
  assert.equal(loadCatalog(store).references[0].path, path.join(repositoryRoot, "visual-library/approved/inspiration/example.png"));
  assert.equal(store.load().references[0].key, "/old-workspace/visual-library/example.png");
});
