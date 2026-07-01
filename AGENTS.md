# Agent Instructions

This repo is a routed Design OS for future frontend work. `AGENTS.md` is a thin router. Do not load the whole repo by default.

## Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Classify the task.
3. Run `node tools/design-os.mjs route --task "<task>"` when the CLI is available.
4. Load only the matching skill files below.
5. Read any files listed in those skills under `Files To Read`.
6. Inspect the current project type, framework, routes, components, styling system, and tokens when UI work is involved.
7. Run `evaluation/ui-scorecard.md` before finishing significant frontend work.

## P0 Enforcement Loop

For visual-heavy work, unless Literal Target Copy Mode is active:

1. Create a brief: `node tools/design-os.mjs new-brief`.
2. Validate it: `node tools/design-os.mjs validate-brief design-brief.local.json`.
3. Route skills from task text.
4. Produce exactly 3 rendered concept prototypes using `templates/visual-concepts.template.json`.
5. Add each concept's preview route and `1440 / 768 / 390` screenshot files. No concept screenshots means the gate failed.
6. Validate it: `node tools/design-os.mjs validate-concepts visual-concepts.local.json`.
7. Show Migi the rendered concepts and wait for approval.
8. Set `approvalStatus: "approved"` and `selectedConceptId` only after Migi chooses one.
9. Check the gate: `node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json`.
10. Implement only the approved concept.
11. Capture implementation screenshots, score the UI, validate required evidence reports, and patch blockers.

## P0 Evidence Gates

- No done without evidence.
- Build/lint is not visual QA.
- Visual-heavy work requires a validated done report before final handoff.
- Production image-led work requires a validated asset manifest.
- Visual target screenshots are evidence, not production assets.
- Watermark, editor, or browser artifacts in production UI are hard blockers.
- Literal Target Copy Mode requires a validated target-copy report.

## Visual Swarm v1

For visual-heavy work, use the local Markdown agents in `agents/` when their phase applies:

1. Inspiration Scout Agent collects and classifies references into `inspiration-manifest.local.json`.
2. Art Direction Concept Agent creates 3 rendered visual concepts before implementation.
3. Literal Target Copy Agent reconstructs exact targets and validates `target-copy-report.local.json`.
4. Visual QA Anti-Slop Agent blocks fake done reports with screenshot QA and scorecard caps.
5. Productionizer Agent adds interactions only after the visual shell passes.

Use `node tools/design-os.mjs list-agents` and `node tools/design-os.mjs route-agent --task "<task>"` when the CLI is available.

## Weekend Visual Engine v1

Use these local/free tools when the matching phase applies:

- Inspiration queue: `node tools/new-inspiration-queue.mjs` and `node tools/validate-inspiration-queue.mjs inspiration-library/queues/weekend-visual-corpus.queue.json`.
- Rendered concepts: `studio-preview/` plus `node tools/capture-concepts.mjs --url http://localhost:5174`.
- Literal target comparison: `node tools/compare-screenshots.mjs --target <target.png> --current <current.png> --name <name>`.
- Visual QA: `node tools/visual-qa.mjs --url http://localhost:5173 --name <name>`.
- Object swap: `node tools/object-swap-check.mjs --url http://localhost:5173 --objects "Atlas,Neo,Phoenix" --name <name>`.

Generated run folders under `docs/qa-runs/`, `docs/comparisons/`, `docs/concept-runs/`, and `docs/object-swap/` are local evidence and gitignored by default.

## Literal Target Copy Mode

When Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, Literal Target Copy Mode overrides product thinking and the P0 concept gate.

Rules:

- no 3-concept gate
- no new art direction
- no product feature expansion
- no usefulness pass
- no extra panels
- no extra explanation
- no improvements
- no reinterpretation

The only goal is visual parity with the supplied target. Identify the target screens, reconstruct the visible composition, exclude browser chrome/editor/watermark artifacts, build the static shell first, implement only minimum visible interactions, screenshot compare, validate a target-copy report, and report exact differences. Product logic waits until the pixel-parity shell is approved.

## Skill Routing

Use the smallest relevant set. Do not load unrelated skills.

1. If the task is visual-heavy, new app, major redesign, inspiration-image driven, gallery, roster, character-select, product-discovery, or selection-first, unless Literal Target Copy Mode is active:
   use `skills/visual-concept-gate/SKILL.md`.

2. If a screenshot, Lovable prototype, Pinterest image, mockup, or strong visual reference is provided:
   use `skills/visual-target-reconstruction/SKILL.md`.

3. If the app is selection-first, gallery, roster, marketplace, discovery, card deck, character selection, or object browsing:
   use `skills/selection-first-products/SKILL.md`.

4. If reviewing existing UI:
   use `skills/anti-ai-slop-review/SKILL.md`.

5. If screenshots exist or the UI can run:
   use `skills/screenshot-scorecard-review/SKILL.md`.

6. If asked for an elite redesign critique:
   use `skills/frontend-art-director-review/SKILL.md`.

7. If doing Tailwind/global CSS migration:
   use `skills/tailwind-migration-zero-regression/SKILL.md`.

8. If dealing with auth, onboarding/login naming, mock data, production states, or error boundaries:
   use `skills/truthful-state-product-naming/SKILL.md`.

## Core Guardrails

- Skills are instruction-only. Do not add scripts or external dependencies inside skill files.
- Use source projects, captures, extracted reports, case studies, and inspiration as evidence, not templates, unless Migi explicitly activates Literal Target Copy Mode for a supplied target.
- Do not copy a golden app's palette or layout literally.
- Do not globalize In The Loop or Robot Skill Forge into unrelated products.
- Do not claim "responsive", "high-quality", or "Miguel-style" without screenshot evidence and scorecard result when the UI can run.
- Do not claim "done" on visual UI work without a validated done report, and use asset/target-copy reports when those gates apply.

## Protected Folders

- Do not modify `source-projects/` unless explicitly asked.
- Do not delete or modify `captures/` unless explicitly asked.
- Do not modify `raw-chat-input/` unless explicitly asked.

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
