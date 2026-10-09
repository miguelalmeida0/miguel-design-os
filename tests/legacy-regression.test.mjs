import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { repositoryRoot } from "../tools/engine/store.mjs";

const fixtures = JSON.parse(fs.readFileSync(new URL("./fixtures/legacy-command-contracts.json", import.meta.url), "utf8"));
const digest = text => createHash("sha256").update(text.replaceAll(repositoryRoot, "<ROOT>")).digest("hex");

for (const fixture of fixtures) {
  test(`legacy behavior: ${fixture.tool} ${fixture.args.join(" ")}`, () => {
    const result = spawnSync(process.execPath, [path.join(repositoryRoot, "tools", fixture.tool), ...fixture.args], { cwd: repositoryRoot, encoding: "utf8" });
    assert.equal(result.status, fixture.exit, result.stderr);
    assert.equal(digest(result.stdout), fixture.stdoutSha256);
    assert.equal(digest(result.stderr), fixture.stderrSha256);
  });
}

test("PNG dimension inspection reads only 24 bytes and always closes the file", () => {
  const source = fs.readFileSync(path.join(repositoryRoot, "tools/compare-screenshots.mjs"), "utf8");
  const functionSource = source.match(/function pngDimensions\(filePath\) \{[\s\S]*?\n\}/)[0];
  let readBytes = 0;
  let closeCount = 0;
  const file = Buffer.alloc(6 * 1024 * 1024);
  file.write("PNG", 1, "ascii");
  file.writeUInt32BE(1440, 16);
  file.writeUInt32BE(900, 20);
  const fakeFs = {
    openSync: name => { if (name === "missing") throw new Error("missing"); return name; },
    readSync: (name, buffer, offset, length) => {
      readBytes += length;
      const data = name === "short" ? file.subarray(0, 12) : name === "other" ? Buffer.alloc(24) : file;
      data.copy(buffer, offset, 0, length);
      return Math.min(data.length, length);
    },
    closeSync: () => closeCount++
  };
  const inspect = vm.runInNewContext(`(${functionSource})`, { fs: fakeFs, Buffer });
  assert.deepEqual(JSON.parse(JSON.stringify(inspect("valid"))), { width: 1440, height: 900, known: true });
  for (const name of ["short", "other", "missing"]) assert.equal(inspect(name).known, false);
  assert.equal(readBytes, 72);
  assert.equal(closeCount, 3);
});
