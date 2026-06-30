# Miguel Design OS Compact Context

Use this before building or reviewing any frontend.

## Mandatory Loop

1. Read relevant `design-dna/` files first.
2. Inspect the current project type, framework, routes, components, styling system, and tokens.
3. Define a project-specific visual identity before palette/layout.
4. Use golden projects as evidence only; do not copy old apps literally.
5. Use screenshots as evidence for the current UI, not templates.
6. Capture 390, 768, and 1440 px when the UI can run.
7. Run `evaluation/ui-scorecard.md` before finishing.
8. Do not write major UI code until the Design Intent Record is filled and used as the design contract.

## Design Intent Record

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

## Core Rules

- Primary object first: the screen must clearly center one object, such as a stock, draft, plan, worker, setting, project, or report.
- One primary action per zone: demote extra actions to secondary, tertiary, icon, menu, or link.
- Clickable and passive must differ: buttons/links/filters get states; status tags/metadata get no hover, pointer, or command styling.
- Define semantic tokens before colors: surface, panel, text, border, action, state, focus, shadow.
- No palette cloning: do not inherit navy, warm social colors, terminal dark, editorial portrait treatment, or cinematic AI styling from old apps unless the current product independently calls for it.
- Avoid container soup: no nested card stacks as default layout. Use grids, rails, sections, inspectors, and direct object composition.
- Data and claims need proof: source, recency, scope, fallback, or explicit sample/mock labeling.
- Copy must name actions and states. Avoid `Submit`, vague `Continue`, `AI magic`, `seamless`, and unsupported `live/validated/optimized`.
- Responsive proof is required: mobile has no accidental horizontal scroll; tablet is not broken halfway; desktop is not stretched mobile for tools.

## Evidence, Not Templates

- Agent Boss: evidence for enterprise control, audit trails, dense action hierarchy.
- Equity: evidence for data terminals, recency/source labels, numeric scanning.
- Ghostwritter: evidence for AI/writing studios with visible input/output/export.
- Ontime: evidence for social coordination only.
- Portfolio: evidence for editorial identity and authored proof.
- In The Loop case study: one app's feedback; use for failure modes, not global tone or layout.

## Done Gate

Do not finish until:

- design intent record exists
- screenshots exist or blocker is documented
- scorecard has been run
- score blockers are fixed or named
- final report includes score, screenshot evidence, and remaining risks

