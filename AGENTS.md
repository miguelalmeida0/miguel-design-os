# Agent Instructions

This repo is a Design OS for future frontend work. Treat it as operating guidance, not inspiration.

## Required Start For Any UI Task

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read relevant files in `design-dna/`.
3. Inspect the current project type, framework, routes, components, styling system, and existing tokens.
4. Define a project-specific visual identity before choosing palette, layout, or assets.
5. Name source-project evidence only as evidence. Do not copy old apps literally.
6. Use screenshots as evidence for the current UI, not templates.
7. Run `evaluation/ui-scorecard.md` before finishing.

## Source Hierarchy

Use:

1. `design-dna/00_COMPACT_AGENT_CONTEXT.md`
2. `manual-preferences/00_global_frontend_principles.md`
3. `design-dna/*.md`
4. `extracted/{project}/*.md`
5. `captures/{project}/.../*.png`
6. `case-studies/in-the-loop-feedback/`

The case study is scoped to one app. Do not globalize its warm social tone, avatar patterns, invite mechanics, bottom navigation, or palette.

## Design Intent Record

Before building or reviewing, record:

```md
Project type:
Primary user:
Primary object:
Primary action:
Archetype:
Layout recipe:
Visual identity words:
Density:
Token direction:
Responsive risks:
Screenshot targets:
Score target:
```

## Build Rules

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
- fix blockers before final response

If the UI cannot run, report the command, error, and alternative evidence.

## Non-Negotiables

- Do not modify `source-projects/` unless explicitly asked.
- Do not delete `captures/`.
- Do not copy a golden app's palette or layout literally.
- Do not apply In The Loop social/planning patterns to unrelated products.
- Do not claim "responsive", "high-quality", or "Miguel-style" without screenshots and score.
