# Miguel Design OS

Miguel Design OS is a frontend/design operating system for future coding agents. It converts golden projects, manual preferences, screenshots, scoped feedback, rejected directions, skills, score caps, and lightweight QA scripts into enforceable workflow.

The system's job is not to preserve a look. Its job is to force better product-specific decisions before agents build UI.

## P0 Local Enforcement

Miguel Design OS now includes local enforcement artifacts:

- `schemas/design-brief.schema.json`
- `schemas/visual-concepts.schema.json`
- `schemas/screenshot-report.schema.json`
- `schemas/done-report.schema.json`
- `schemas/target-copy-report.schema.json`
- `schemas/asset-manifest.schema.json`
- `schemas/inspiration-manifest.schema.json`
- `schemas/visual-agent-run.schema.json`
- `schemas/visual-qa-report.schema.json`
- `schemas/screenshot-comparison-report.schema.json`
- `schemas/object-swap-report.schema.json`
- `schemas/ui-scorecard.schema.json`
- `schemas/skill-registry.schema.json`
- `templates/*.template.json`
- `skills/skill-registry.json`
- `tools/design-os.mjs`

## Embedded Usage

Miguel Design OS can live inside another project as `.design-os`. From that project root, run:

```sh
node .design-os/tools/design-os.mjs list-skills
node .design-os/tools/design-os.mjs route --task "Build a visual-heavy robot character selection app from inspiration images"
```

The CLI resolves internal Design OS paths such as `skills/`, `schemas/`, `templates/`, `evaluation/`, and `design-dna/` from the location of `.design-os/tools/design-os.mjs`, not from `process.cwd()`.

## Visual Swarm v1

Visual Swarm v1 adds five local Markdown agents:

- `01-inspiration-scout`
- `02-art-direction-concept`
- `03-literal-target-copy`
- `04-visual-qa-anti-slop`
- `05-productionizer`

Run:

```sh
node tools/design-os.mjs list-agents
node tools/design-os.mjs route-agent --task "Build a cinematic robot character selection app from Pinterest inspiration and a Lovable target"
node tools/design-os.mjs new-inspiration-manifest
node tools/design-os.mjs validate-inspiration-manifest inspiration-manifest.local.json
```

The swarm is instruction-only and local. It does not call paid tools, API keys, hosted Lovable, screenshot-to-code generation, Onlook hosted usage, or external model calls.

## Weekend Visual Engine v1

The weekend engine adds local build tools around the swarm:

- `studio-preview/` renders 3 visual concepts at `/concept/1`, `/concept/2`, and `/concept/3`.
- `tools/capture-concepts.mjs` captures rendered concept screenshots.
- `tools/compare-screenshots.mjs` creates target/current comparison reports.
- `tools/visual-qa.mjs` captures app screenshots and creates visual QA reports.
- `tools/object-swap-check.mjs` checks roster/gallery/configurator object swaps.
- `tools/new-inspiration-queue.mjs` and `tools/validate-inspiration-queue.mjs` manage the local inspiration corpus queue.

Immediate flow:

```sh
node tools/design-os.mjs route-agent --task "Build cinematic robot selection app from award-winning inspiration and target screenshots"
node tools/new-inspiration-queue.mjs
node tools/validate-inspiration-queue.mjs inspiration-library/queues/weekend-visual-corpus.queue.json
cd studio-preview && npm run dev
node ../tools/capture-concepts.mjs --url http://localhost:5174
cd ..
node tools/visual-qa.mjs --url http://localhost:5173 --name robotstack-roster
node tools/design-os.mjs validate-done-report done-report.local.json
```

The browser scripts use local Playwright only when available. This repo did not install Playwright during the sprint; if it is missing, capture tools produce clear local setup errors or blocked reports.

## Design OS Studio

`studio/` is the local frontend command center for Miguel Design OS. It is separate from `studio-preview/`, which only renders concept previews.

Run:

```sh
cd studio
npm install
npm run dev
npm run build
```

The dev server defaults to `http://127.0.0.1:5175`. When local Playwright is available, capture Studio evidence with:

```sh
node tools/visual-qa.mjs --url http://localhost:5175 --name design-os-studio
```

Studio includes Command, Inspiration, Concepts, Target Copy, QA Runs, Agents, and Prompts screens. It uses local React state and static sample data in v0; no backend, API keys, hosted Lovable, screenshot-to-code generation, or external AI calls are used.

For visual-heavy work:

1. Create a design brief: `node tools/design-os.mjs new-brief`.
2. Route skills: `node tools/design-os.mjs route --task "<task>"`.
3. Produce 3 rendered concept prototypes from `templates/visual-concepts.template.json`.
4. Add preview routes and `1440 / 768 / 390` screenshot files for each concept.
5. Validate concepts: `node tools/design-os.mjs validate-concepts visual-concepts.local.json`.
6. Show Migi the visuals and wait for approval.
7. Set `approvalStatus: "approved"` and `selectedConceptId`, then run `node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json`.
8. Implement only the approved concept.
9. Capture implementation screenshots.
10. Validate screenshot, asset, target-copy, and done-report evidence when applicable.
11. Score the UI.
12. Patch blockers.

## Fast Start

For any future project, paste or read:

1. `design-dna/00_COMPACT_AGENT_CONTEXT.md`
2. `system.md`
3. `design-system.json`
4. `AGENTS.md`
5. only the skill files routed by `AGENTS.md`
6. the files listed by those skills under `Files To Read`

Then classify the task. If the work is visually important, produce 3 rendered visual concepts and wait for Migi approval before coding:

1. Safe expected direction.
2. More original/art-directed direction.
3. Wild but controlled direction.

Each concept needs a preview route and screenshot files at 1440 / 768 / 390 for the gate to pass. Text-only concepts do not satisfy the gate. No visual screenshots = Visual Concept Gate failed.

After approval, create a Design Intent Record, build the visual shell first, capture implementation screenshots, run the scorecard, validate required evidence reports, patch blockers, and hand off with evidence.

## Evidence Folders

`source-projects/` contains the five golden examples:

- `agent-boss`: evidence for enterprise control, auditability, and dense operational UI
- `equity`: evidence for data terminals, recency/source handling, and numeric scanning
- `ghostwritter`: evidence for AI/writing studios with visible input/output
- `ontime`: evidence for social coordination, not universal warmth
- `portfolio`: evidence for editorial identity and authored presentation

`case-studies/in-the-loop-feedback/` is one app's feedback. Use it for failure modes such as container soup and chip ambiguity, but never as global law.

`extracted/` contains technical inventories and style reports for each golden project.

`captures/` contains screenshots at 390, 768, and 1440 px. Use them as evidence of decisions, not templates to recreate.

`raw-chat-input/` is temporary uncommitted ingestion input.

`docs/inspiration/[project]/` is for project-specific inspiration and visual target evidence.

## Operating Files

`design-dna/` contains the reusable rules.

`system.md` is the top-level operating model.

`design-system.json` is the machine-readable summary of rules, workflow gates, score caps, component roles, and required evidence.

`MIGUEL_DESIGN_OS_MANUAL.md` explains how future agents should use the OS end to end.

`rules/` contains focused operational rules for tokens, components, layout, interactions, anti-patterns, score caps, and new-app workflow.

`skills/` contains narrow routed playbooks. `AGENTS.md` chooses which skill to load. Do not load every skill for every task.

Active skills:

- `visual-concept-gate`
- `visual-target-reconstruction`
- `selection-first-products`
- `anti-ai-slop-review`
- `screenshot-scorecard-review`
- `frontend-art-director-review`
- `tailwind-migration-zero-regression`
- `truthful-state-product-naming`

`agent-workflows/` contains step-by-step workflows for ingestion, generation, review, and elite fix loops.

`agent-workflows/visual-target-reconstruction-mode.md` is the required workflow when Migi provides inspiration images, screenshots, or a strong visual target.

`evaluation/ui-scorecard.md` is the required scoring gate before finishing UI work.

`scripts/` contains optional lightweight helpers for screenshot capture, horizontal scroll checks, overlap heuristics, scale-inflation heuristics, and design report templates. Skills themselves remain instruction-only and do not require scripts or external dependencies.

## Visual Concept Gate

For new apps, major screens, redesigns, selection/gallery/roster/product-discovery experiences, visual-heavy interfaces, or work with inspiration images, agents must not implement immediately.

They must first produce exactly 3 rendered concept prototypes and wait for Migi approval after he reviews the visuals. Each concept needs a short explanation, preview route, and screenshot files at 1440 / 768 / 390 for the gate to pass. References must be reconstructed by composition, focal object, hidden information, emotional hook, material, texture, interaction model, and what is intentionally absent.

Text-only concepts do not satisfy the gate. No visual screenshots = Visual Concept Gate failed.

The gate does not block small bug fixes, security patches, copy edits, or purely technical refactors.

Literal Target Copy Mode also bypasses the gate. When Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, the agent must build the pixel-parity shell first, exclude browser/editor/watermark artifacts, implement only minimum visible interactions, screenshot compare, validate a target-copy report, and report exact differences.

## P0 Evidence Gates

- No done without evidence.
- Build/lint is not visual QA.
- Visual-heavy work requires a validated done report before final handoff.
- Literal Target Copy Mode requires a validated target-copy report.
- Production image-led work requires a validated asset manifest.
- Visual-heavy inspiration work requires an inspiration manifest.
- Visual target screenshots are evidence, not production assets.
- Watermark, editor, or browser artifacts in production UI are hard blockers.
- Literal Target Copy Mode cannot be marked done without a screenshot comparison report.
- Product logic must wait until visual shell parity is approved.

## Lovable-Equivalent Behaviors

- Persistent knowledge: `system.md`, `design-system.json`, and `design-dna/` are always-on guidance.
- Task skills: `AGENTS.md` routes to narrow `skills/*/SKILL.md` playbooks.
- Design before coding: visual-heavy work requires 3 rendered visual concepts, screenshots, and one approved direction before implementation.
- Reference ingestion: source projects, captures, extracted reports, case studies, raw chat input, and inspiration have explicit evidence roles.
- Screenshot review: significant UI work needs `390 / 768 / 1440` proof.
- Scorecard enforcement: hard caps prevent vague "looks good" handoffs.
- Anti-slop checks: generic dashboards, obvious genre cliches, badge soup, card-grid defaults, fake claims, and AI scale inflation are named failure modes.
- Repeatable new-app workflow: routed skills define the loop from intent to final report without context bloat.

## Core Rule

Define the current project's identity first. Then design.

Do not copy old apps literally. Do not force one palette. Do not globalize In The Loop. Do not preserve rejected layouts with new paint. Do not finish without screenshots, required evidence reports, and a scorecard result when the UI can run.

## Required Handoff

```md
Skills used:
Design brief:
Visual concepts:
Approved rendered concept:
Files changed:
Screenshots:
Scorecard result:
Done report:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
