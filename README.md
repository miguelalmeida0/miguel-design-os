# Miguel Design OS

Miguel Design OS is a frontend/design operating system for future coding agents. It converts golden projects, manual preferences, screenshots, scoped feedback, rejected directions, skills, score caps, and lightweight QA scripts into enforceable workflow.

The system's job is not to preserve a look. Its job is to force better product-specific decisions before agents build UI.

## P0 Local Enforcement

Miguel Design OS now includes local enforcement artifacts:

- `schemas/design-brief.schema.json`
- `schemas/visual-concepts.schema.json`
- `schemas/screenshot-report.schema.json`
- `schemas/ui-scorecard.schema.json`
- `schemas/skill-registry.schema.json`
- `templates/*.template.json`
- `skills/skill-registry.json`
- `tools/design-os.mjs`

For visual-heavy work:

1. Create a design brief: `node tools/design-os.mjs new-brief`.
2. Route skills: `node tools/design-os.mjs route --task "<task>"`.
3. Produce 3 concepts from `templates/visual-concepts.template.json`.
4. Validate concepts: `node tools/design-os.mjs validate-concepts visual-concepts.local.json`.
5. Wait for Migi approval.
6. Implement only the approved concept.
7. Capture screenshots.
8. Score the UI.
9. Patch blockers.

## Fast Start

For any future project, paste or read:

1. `design-dna/00_COMPACT_AGENT_CONTEXT.md`
2. `system.md`
3. `design-system.json`
4. `AGENTS.md`
5. only the skill files routed by `AGENTS.md`
6. the files listed by those skills under `Files To Read`

Then classify the task. If the work is visually important, produce 3 design theses and wait for Migi approval before coding:

1. Safe expected direction.
2. More original/art-directed direction.
3. Wild but controlled direction.

After approval, create a Design Intent Record, build the visual shell first, capture screenshots, run the scorecard, patch blockers, and hand off with evidence.

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

They must first produce 3 design theses and wait for Migi approval. References must be reconstructed by composition, focal object, hidden information, emotional hook, material, texture, interaction model, and what is intentionally absent.

The gate does not block small bug fixes, security patches, copy edits, or purely technical refactors.

## Lovable-Equivalent Behaviors

- Persistent knowledge: `system.md`, `design-system.json`, and `design-dna/` are always-on guidance.
- Task skills: `AGENTS.md` routes to narrow `skills/*/SKILL.md` playbooks.
- Design before coding: visual-heavy work requires 3 approved theses before implementation.
- Reference ingestion: source projects, captures, extracted reports, case studies, raw chat input, and inspiration have explicit evidence roles.
- Screenshot review: significant UI work needs `390 / 768 / 1440` proof.
- Scorecard enforcement: hard caps prevent vague "looks good" handoffs.
- Anti-slop checks: generic dashboards, obvious genre cliches, badge soup, card-grid defaults, fake claims, and AI scale inflation are named failure modes.
- Repeatable new-app workflow: routed skills define the loop from intent to final report without context bloat.

## Core Rule

Define the current project's identity first. Then design.

Do not copy old apps literally. Do not force one palette. Do not globalize In The Loop. Do not preserve rejected layouts with new paint. Do not finish without screenshots and a scorecard result when the UI can run.

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
