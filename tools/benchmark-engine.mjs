#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { createStore, repositoryRoot } from "./engine/store.mjs";
import { applicablePreferences, loadCatalog, searchReferences } from "./engine/catalog.mjs";
import { compileBrief, renderPacket } from "./engine/brief.mjs";

const source = createStore(process.argv[2] || "miguel");
const state = source.load();
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "design-os-benchmark-"));
try {
  const store = createStore(state.profile, temporary);
  store.update(target => Object.assign(target, structuredClone(state)));
  const coldStart = performance.now();
  const catalog = loadCatalog(store);
  const coldIndexMs = performance.now() - coldStart;
  const samples = [];
  for (let index = 0; index < 30; index += 1) {
    const begin = performance.now();
    searchReferences(loadCatalog(store), { context: "mobile-product", query: "wellness tactile onboarding", limit: 5 });
    samples.push(performance.now() - begin);
  }
  samples.sort((a, b) => a - b);
  const packet = compileBrief(catalog, { project: "benchmark-only", audience: "person starting a wellness flow", primaryObject: "onboarding", primaryAction: "choose a topic", visualIntent: "wellness tactile", context: "mobile-product" });
  const promptBytes = Buffer.byteLength(renderPacket(packet));
  const currentEntryBytes = fs.statSync(path.join(repositoryRoot, "AGENTS.md")).size;
  const archiveRoot = path.join(repositoryRoot, "docs/archive/deprecated/2026-09-instruction-snapshot");
  const priorEntryBytes = ["docs/internal/automation/AGENTS.md", "design-dna/00_COMPACT_AGENT_CONTEXT.md"].reduce((sum, name) => sum + fs.statSync(path.join(archiveRoot, name)).size, 0);
  console.log(JSON.stringify({
    environment: { node: process.version, platform: process.platform, samples: samples.length },
    profileReferences: catalog.references.length,
    inspirationReferences: catalog.references.filter(row => row.kind === "reference").length,
    fullStateBytes: fs.statSync(source.statePath).size,
    compactIndexBytes: fs.statSync(path.join(store.directory, "index.json")).size,
    coldIndexMs: Number(coldIndexMs.toFixed(2)),
    warmLookupMedianMs: Number(samples[Math.floor(samples.length / 2)].toFixed(2)),
    warmLookupP95Ms: Number(samples[Math.ceil(samples.length * 0.95) - 1].toFixed(2)),
    priorEntryBytes, currentEntryBytes, samplePromptBytes: promptBytes,
    entryAndPacketReductionPercent: Number((100 * (1 - (currentEntryBytes + promptBytes) / priorEntryBytes)).toFixed(1)),
    referenceBrowsingRules: applicablePreferences(catalog, { context: "reference-browsing", workflow: "reference-browsing" }).map(preference => preference.quote),
    limits: "This measures local retrieval and context bytes, not model generation, design quality or Miguel's acceptance time. The source profile is not modified."
  }, null, 2));
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
