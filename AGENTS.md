# Agent Instructions

This repo is a Design OS for future frontend work. Treat it as operating guidance, not inspiration.

## Required Start For Any UI Task

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read `system.md` and `design-system.json`.
3. Read relevant files in `rules/`, `skills/`, and `design-dna/`.
4. Classify the task: bug fix, technical refactor, copy/content edit, frontend QA, visual-heavy UI, new app, redesign, or selection/gallery/roster/product-discovery experience.
5. Inspect the current project type, framework, routes, components, styling system, and existing tokens.
6. If visual-heavy, run the Visual Concept Gate before implementation.
7. Define a project-specific visual identity before choosing palette, layout, or assets.
8. Name source-project evidence only as evidence. Do not copy old apps literally.
9. Use screenshots as evidence for the current UI, not templates.
10. Run `evaluation/ui-scorecard.md` before finishing.

## Source Hierarchy

Use:

1. `design-dna/00_COMPACT_AGENT_CONTEXT.md`
2. `system.md`
3. `design-system.json`
4. `manual-preferences/00_global_frontend_principles.md`
5. `rules/*.md`
6. `skills/*/SKILL.md`
7. `design-dna/*.md`
8. `extracted/{project}/*.md`
9. `captures/{project}/.../*.png`
10. `case-studies/in-the-loop-feedback/`
11. `docs/inspiration/[project]/`

The case study is scoped to one app. Do not globalize its warm social tone, avatar patterns, invite mechanics, bottom navigation, or palette.

## Design Intent Record

Before building or reviewing, record:

```md
Project type:
Task classification:
Primary user:
Primary object:
Primary action:
Visual-heavy work?:
Inspiration/reference provided?:
Selected skill/playbook:
Archetype:
Layout recipe:
Visual identity words:
Visual Concept Gate status:
Selected design thesis:
Density:
Token direction:
Responsive risks:
Screenshot targets:
Score target:
```

## Build Rules

- For visually important UI work, do not code first. Produce 3 design theses and wait for Migi approval: Safe expected direction, More original/art-directed direction, and Wild but controlled direction.
- For inspiration references, extract composition, focal object, hidden information, emotional hook, material, texture, interaction model, and what is absent. Do not flatten to dark/neon/cards/glow/big text.
- Store project-specific inspiration under `docs/inspiration/[project]/` and write `docs/inspiration-analysis.md` when references materially drive the direction.
- Build the visual shell/poster composition before feature depth.
- Primary object must be visible in the first viewport.
- Primary action must attach to the primary object.
- One primary action per zone.
- Clickable and passive elements must have different components or states.
- Semantic tokens come before color choices.
- Cards are for repeated objects, tools, and modals, not every section.
- Data, AI, safety, and live claims need source, recency, scope, or fallback.
- Empty, loading, error, disabled, selected, and focus-visible states are required for core flows.

## Verification Rules

When the UI can run:

- capture 390 px
- capture 768 px
- capture 1440 px
- inspect for blockers
- score with `evaluation/ui-scorecard.md`
- run lightweight scripts in `scripts/` when practical
- fix blockers before final response

If the UI cannot run, report the command, error, and alternative evidence.

## Non-Negotiables

- Do not modify `source-projects/` unless explicitly asked.
- Do not delete `captures/`.
- Do not modify `raw-chat-input/` unless explicitly asked.
- Do not copy a golden app's palette or layout literally.
- Do not apply In The Loop social/planning patterns to unrelated products.
- Do not claim "responsive", "high-quality", or "Miguel-style" without screenshots and score.
- Do not preserve a rejected layout with new paint.
- Do not use decorative motion unless it clarifies state, hierarchy, transition, selection, or feedback.
- When Migi provides a visual target, use `agent-workflows/visual-target-reconstruction-mode.md`.

## Required Handoff

```md
Design thesis used:
Files changed:
Screenshots:
Scorecard result:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
