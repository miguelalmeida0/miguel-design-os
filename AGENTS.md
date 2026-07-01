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

For visual-heavy work:

1. Create a brief: `node tools/design-os.mjs new-brief`.
2. Validate it: `node tools/design-os.mjs validate-brief design-brief.local.json`.
3. Route skills from task text.
4. Produce a 3-concept artifact using `templates/visual-concepts.template.json`.
5. Validate it: `node tools/design-os.mjs validate-concepts visual-concepts.local.json`.
6. Check the gate: `node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json`.
7. Wait for Migi approval before implementation.
8. Implement only the approved concept.
9. Capture screenshots, score the UI, and patch blockers.

## Skill Routing

Use the smallest relevant set. Do not load unrelated skills.

1. If the task is visual-heavy, new app, major redesign, inspiration-image driven, gallery, roster, character-select, product-discovery, or selection-first:
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
- Use source projects, captures, extracted reports, case studies, and inspiration as evidence, not templates.
- Do not copy a golden app's palette or layout literally.
- Do not globalize In The Loop or Robot Skill Forge into unrelated products.
- Do not claim "responsive", "high-quality", or "Miguel-style" without screenshot evidence and scorecard result when the UI can run.

## Protected Folders

- Do not modify `source-projects/` unless explicitly asked.
- Do not delete or modify `captures/` unless explicitly asked.
- Do not modify `raw-chat-input/` unless explicitly asked.

## Required Handoff

```md
Skills used:
Design brief:
Visual concepts:
Design thesis used:
Files changed:
Screenshots:
Scorecard result:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
