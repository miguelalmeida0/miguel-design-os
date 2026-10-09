import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";

export const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const MAX_STATE_BYTES = 32 * 1024 * 1024;

export function createStore(profile = "miguel", privateRoot = process.env.DESIGN_OS_PRIVATE_DIR || path.join(repositoryRoot, ".design-os-private")) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/.test(profile)) throw new Error("Invalid profile name.");
  const root = path.resolve(privateRoot);
  const directory = path.join(root, profile);
  const statePath = path.join(directory, "state.json");

  function assertPrivate(target) {
    const resolved = path.resolve(target);
    const relative = path.relative(directory, resolved);
    if (relative.startsWith(".." + path.sep) || relative === ".." || path.isAbsolute(relative)) {
      throw new Error("Write refused: reference material and design packets must stay in the private directory.");
    }
    let current = path.parse(resolved).root;
    for (const part of resolved.slice(current.length).split(path.sep).filter(Boolean)) {
      if (part) current = path.join(current, part);
      try {
        if (fs.lstatSync(current).isSymbolicLink()) throw new Error("Private paths must not contain symbolic links.");
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    return resolved;
  }

  function read(target) {
    const resolved = assertPrivate(target);
    const descriptor = fs.openSync(resolved, fs.constants.O_RDONLY | fs.constants.O_NOFOLLOW);
    try {
      if (fs.fstatSync(descriptor).size > MAX_STATE_BYTES) throw new Error("Private JSON exceeds the 32 MiB limit.");
      return JSON.parse(fs.readFileSync(descriptor, "utf8"));
    } finally {
      fs.closeSync(descriptor);
    }
  }

  function write(target, value, { exclusive = false } = {}) {
    const resolved = assertPrivate(target);
    const serialized = typeof value === "string" ? value : JSON.stringify(value) + "\n";
    if (Buffer.byteLength(serialized) > MAX_STATE_BYTES) throw new Error("Private output exceeds the 32 MiB limit; the existing file was preserved.");
    fs.mkdirSync(path.dirname(resolved), { recursive: true, mode: 0o700 });
    assertPrivate(resolved);
    const temporary = `${resolved}.${randomUUID()}.tmp`;
    let descriptor;
    try {
      descriptor = fs.openSync(temporary, "wx", 0o600);
      fs.writeFileSync(descriptor, serialized);
      fs.fsyncSync(descriptor);
      fs.closeSync(descriptor);
      descriptor = undefined;
      if (exclusive) fs.linkSync(temporary, resolved);
      else fs.renameSync(temporary, resolved);
    } finally {
      if (descriptor !== undefined) fs.closeSync(descriptor);
      try { fs.unlinkSync(temporary); } catch (error) { if (error.code !== "ENOENT") throw error; }
    }
  }

  function load() {
    let state;
    try { state = read(statePath); } catch (error) {
      if (error.code === "ENOENT") throw new Error("No saved profile. Run: node tools/design-os.mjs taste import --from <private-state.json>");
      throw error;
    }
    validateState(state, profile);
    return state;
  }

  function update(change) {
    assertPrivate(directory);
    fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
    const lock = path.join(directory, ".write.lock");
    let descriptor;
    try { descriptor = fs.openSync(lock, "wx", 0o600); } catch (error) {
      if (error.code === "EEXIST") throw new Error("Profile is being written by another process; no changes were made.");
      throw error;
    }
    try {
      let state;
      try { state = load(); } catch (error) {
        if (!error.message.startsWith("No saved profile.")) throw error;
        state = { version: 1, profile, revision: 0, references: [], preferences: [], runs: [] };
      }
      const result = change(state);
      if (result?.changed === false) return result;
      validateState(state, profile);
      state.revision += 1;
      write(statePath, state);
      return result;
    } finally {
      fs.closeSync(descriptor);
      fs.unlinkSync(lock);
    }
  }

  return { profile, root, directory, statePath, assertPrivate, read, write, load, update };
}

export function validateState(state, profile) {
  if (state?.version !== 1 || state.profile !== profile || !Number.isSafeInteger(state.revision) || state.revision < 0) {
    throw new Error("Unsupported profile or state version; the saved file was preserved.");
  }
  for (const field of ["references", "preferences", "runs"]) {
    if (!Array.isArray(state[field])) throw new Error(`Profile is missing ${field}; the saved file was preserved.`);
  }
  if (state.references.length > 5000) throw new Error("Profile exceeds the 5,000-reference limit.");
  for (const reference of state.references) {
    if (!reference || typeof reference.id !== "string" || typeof reference.key !== "string") throw new Error("Invalid reference record; the saved file was preserved.");
  }
}
