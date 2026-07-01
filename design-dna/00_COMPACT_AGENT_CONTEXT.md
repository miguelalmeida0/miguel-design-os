# Miguel Design OS Compact Context

Use this before building or reviewing any frontend.

## Mandatory Loop

1. Read `AGENTS.md` as the skill router.
2. Load only the routed `skills/*/SKILL.md` files. Do not load every skill.
3. Read only the files listed by those skills under `Files To Read`, plus `system.md` or `design-system.json` when the selected skill asks for them.
4. Classify the task: bug fix, technical refactor, copy/content edit, frontend QA, visual-heavy UI, new app, redesign, selection/gallery/roster/product-discovery, Tailwind migration, or truthful-state/naming.
5. Inspect the current project type, framework, routes, components, styling system, and tokens.
6. Define a project-specific visual identity before palette/layout.
7. Use golden projects as evidence only; do not copy old apps literally.
8. Use screenshots as evidence for the current UI, not templates.
9. Capture 390, 768, and 1440 px when the UI can run.
10. Run `evaluation/ui-scorecard.md` before finishing.
11. Do not write major UI code until the Design Intent Record is filled and used as the design contract.

Before visually important UI work, do not code. Produce 3 rendered visual concepts first and wait for approval: Safe expected direction, More original/art-directed direction, and Wild but controlled direction. Each concept needs a preview route plus 1440 / 768 / 390 screenshot files for the gate to pass. Visual Concept Gate means 3 rendered visual concepts, not 3 text descriptions. No screenshots, no approval. Do not implement until Migi chooses one visual direction. For references, extract composition, focal object, hidden information, emotional hook, material, texture, interaction model, and what is intentionally absent -- not shallow traits like dark, neon, cards, glass, glow, or big text.

## Design Intent Record

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
Selected rendered concept:
Concept preview screenshots:
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
- Do not default to the obvious genre aesthetic. For any strong theme, define a non-obvious visual thesis before designing.
- No palette cloning: do not inherit navy, warm social colors, terminal dark, editorial portrait treatment, or cinematic AI styling from old apps unless the current product independently calls for it.
- Do not implement before art direction for visual-heavy work. Three rendered concepts, viewport screenshots, and Migi approval come before components.
- Avoid container soup: no nested card stacks as default layout. Use grids, rails, sections, inspectors, and direct object composition.
- For selection-first products, do not start with explanation. Start with desire. The first screen should make the user want to choose, click, compare, or collect. Clean is not enough if the product needs energy. Desire must not come from badge soup or predictable AI-slop styling.
- Build the poster/composition first, then product logic. Lovable-style visual output can beat Codex when the task is art direction first; Codex compensates with a visual-concept phase.
- If inspiration is provided, store or reference it under `docs/inspiration/[project]`, write `docs/inspiration-analysis.md`, and explain what was copied, avoided, and translated.
- Data and claims need proof: source, recency, scope, fallback, or explicit sample/mock labeling.
- Copy must name actions and states. Avoid `Submit`, vague `Continue`, `AI magic`, `seamless`, and unsupported `live/validated/optimized`.
- Responsive proof is required: mobile has no accidental horizontal scroll; tablet is not broken halfway; desktop is not stretched mobile for tools. Overlap/collision is a hard fail unless deliberate, readable, responsive-tested, and necessary.

## Evidence, Not Templates

- Agent Boss: evidence for enterprise control, audit trails, dense action hierarchy.
- Equity: evidence for data terminals, recency/source labels, numeric scanning.
- Ghostwritter: evidence for AI/writing studios with visible input/output/export.
- Ontime: evidence for social coordination only.
- Portfolio: evidence for editorial identity and authored proof.
- In The Loop case study: one app's feedback; use for failure modes, not global tone or layout.
- Robot Skill Forge rejected directions: evidence for selection-first products. Avoid beige catalogs, product brochures, dense terminals, newspaper dashboards, obvious robot-app cliches, badge/glow/stat overload, and overlapping card content when the core loop is choosing or collecting.

## Done Gate

Do not finish until:

- design intent record exists
- Visual Concept Gate was completed with 3 rendered concepts, viewport screenshots, and Migi approval when visual-heavy work required it
- screenshots exist or blocker is documented
- scorecard has been run
- score blockers are fixed or named
- final report includes score, screenshot evidence, and remaining risks

## Handoff Format

```md
Skills used:
Approved rendered concept:
Files changed:
Screenshots:
Scorecard result:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
