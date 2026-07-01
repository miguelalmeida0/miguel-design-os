# Miguel Design OS Compact Context

Use this before building or reviewing any frontend.

## Mandatory Loop

1. Read `AGENTS.md` as the skill router.
2. Load only the routed `skills/*/SKILL.md` files. Do not load every skill.
3. Read `visual-library/README.md`, then inspect relevant approved/rejected references and notes.
4. Read only the files listed by routed skills under `Files To Read`, plus `system.md` or `design-system.json` when the selected skill asks for them.
5. Classify the task: bug fix, technical refactor, copy/content edit, frontend QA, visual-heavy UI, new app, redesign, selection/gallery/roster/product-discovery, Tailwind migration, or truthful-state/naming.
6. Inspect the current project type, framework, routes, components, styling system, and tokens.
7. Define a project-specific visual identity before palette/layout.
8. Use golden projects and visual-library screenshots as evidence only; do not copy old apps literally unless Literal Target Copy Mode is active.
9. Use screenshots as evidence for the current UI, not templates.
10. Capture 390, 768, and 1440 px when the UI can run.
11. Run `evaluation/ui-scorecard.md` before finishing.
12. Do not write major UI code until the Design Intent Record is filled and used as the design contract.
13. No done without evidence: visual UI work requires a validated done report before final handoff.
14. Dogfood targets are feedback loops: if a project is created to test Miguel Design OS, every target-app failure must become a Design OS rule, tool, prompt, schema, checklist, or explicit open gap.

Literal Target Copy Mode overrides product thinking. When Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, do not run the 3-concept gate, create new art direction, expand features, add useful panels, reinterpret, or improve. The only goal is visual parity with the supplied target: identify target screens, reconstruct visible composition, exclude browser chrome/editor/watermark artifacts, build the static shell first, implement only minimum visible interactions, screenshot compare, validate a target-copy report, and report exact differences. Product logic waits until the pixel-parity shell is approved.

Evidence gates: build/lint is not visual QA; visual target screenshots are evidence, not production assets; watermark/editor/browser artifacts in production UI are hard blockers; production image-led work requires an asset manifest; Literal Target Copy Mode requires a target-copy report; visual-heavy work requires a done report before final handoff.

Visual Swarm v1 agents in `agents/`: Inspiration Scout creates `inspiration-manifest.local.json`; Art Direction Concept creates 3 rendered concepts; Literal Target Copy creates `target-copy-report.local.json`; Visual QA Anti-Slop validates screenshot/done evidence; Productionizer adds interactions only after shell approval. Use `list-agents` and `route-agent` when available.

Miguel Design OS is not a product app or frontend Studio. The primary workflow is rules + `visual-library/` + prompts + screenshot QA. Frontend experiments are archived under `deprecated/` and are not the default workflow.

Optional local/free tools exist for validation: `tools/compare-screenshots.mjs`, `tools/visual-qa.mjs`, `tools/playwright-doctor.mjs`, `tools/import-manual-screenshots.mjs`, `tools/object-swap-check.mjs`, and Design OS validators. Generated runs under `docs/qa-runs/`, `docs/comparisons/`, `docs/concept-runs/`, and `docs/object-swap/` are local evidence and gitignored by default. Playwright is optional; if unavailable, capture tools must report a clear local setup blocker.

Before visually important UI work, do not code unless Literal Target Copy Mode is active. Produce 3 rendered visual concepts first and wait for approval: Safe expected direction, More original/art-directed direction, and Wild but controlled direction. Each concept needs a preview route plus 1440 / 768 / 390 screenshot files for the gate to pass. Visual Concept Gate means 3 rendered visual concepts, not 3 text descriptions. No screenshots, no approval. Do not implement until Migi chooses one visual direction. For references, extract composition, focal object, hidden information, emotional hook, material, texture, interaction model, and what is intentionally absent -- not shallow traits like dark, neon, cards, glass, glow, or big text.

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
Dogfood target?:
Design OS rules under test:
What this app teaches Miguel Design OS:
Core loop to prove:
Persistence contract:
```

## Core Rules

- Primary object first: the screen must clearly center one object, such as a stock, draft, plan, worker, setting, project, or report.
- One primary action per zone: demote extra actions to secondary, tertiary, icon, menu, or link.
- Clickable and passive must differ: buttons/links/filters get states; status tags/metadata get no hover, pointer, or command styling.
- Define semantic tokens before colors: surface, panel, text, border, action, state, focus, shadow.
- Do not default to the obvious genre aesthetic. For any strong theme, define a non-obvious visual thesis before designing.
- No palette cloning: do not inherit navy, warm social colors, terminal dark, editorial portrait treatment, or cinematic AI styling from old apps unless the current product independently calls for it.
- Do not implement before art direction for visual-heavy work. Three rendered concepts, viewport screenshots, and Migi approval come before components.
- Literal Target Copy Mode is the exception: exact visual target copying skips concept generation and focuses only on pixel-parity reconstruction.
- Avoid container soup: no nested card stacks as default layout. Use grids, rails, sections, inspectors, and direct object composition.
- For selection-first products, do not start with explanation. Start with desire. The first screen should make the user want to choose, click, compare, or collect. Clean is not enough if the product needs energy. Desire must not come from badge soup or predictable AI-slop styling.
- Build the poster/composition first, then product logic. Lovable-style visual output can beat Codex when the task is art direction first; Codex compensates with a visual-concept phase.
- If inspiration is provided, store or reference it under `docs/inspiration/[project]`, write `docs/inspiration-analysis.md`, and explain what was copied, avoided, and translated.
- Data and claims need proof: source, recency, scope, fallback, or explicit sample/mock labeling.
- Product purpose clarity is mandatory for new apps: state what the app is, what it tests in Miguel Design OS, which rules are being validated, and what success or failure teaches the master system.
- If the app's main loop is `upload -> classify -> generate output`, final handoff is blocked until that loop is manually verified and documented.
- If user-generated data is part of the product promise, state whether it persists across route changes, refresh, and browser reopen. If not durable, the UI must say local/session-only.
- If UI count says `0` while uploaded or user-generated data exists, the score is capped at 40.
- Copy must name actions and states. Avoid `Submit`, vague `Continue`, `AI magic`, `seamless`, and unsupported `live/validated/optimized`.
- Responsive proof is required: mobile has no accidental horizontal scroll; tablet is not broken halfway; desktop is not stretched mobile for tools. Overlap/collision is a hard fail unless deliberate, readable, responsive-tested, and necessary.
- No parallel-product drift: do not build a second control app, Studio feature, or surrounding tool when the current goal is dogfooding rules against a target app.

## Evidence, Not Templates

- Agent Boss: evidence for enterprise control, audit trails, dense action hierarchy.
- Equity: evidence for data terminals, recency/source labels, numeric scanning.
- Ghostwritter: evidence for AI/writing studios with visible input/output/export.
- Ontime: evidence for social coordination only.
- Portfolio: evidence for editorial identity and authored proof.
- In The Loop case study: one app's feedback; use for failure modes, not global tone or layout.
- Robot Skill Forge rejected directions: evidence for selection-first products. Avoid beige catalogs, product brochures, dense terminals, newspaper dashboards, obvious robot-app cliches, badge/glow/stat overload, and overlapping card content when the core loop is choosing or collecting.
- `visual-library/approved/`: Migi-approved references. Extract composition and principles, not production assets.
- `visual-library/rejected/`: Migi-rejected references. Treat as anti-patterns and do not preserve them with new paint.
- `visual-library/inspiration/`: useful references that are not yet global taste rules.

## Done Gate

Do not finish until:

- design intent record exists
- Visual Concept Gate was completed with 3 rendered concepts, viewport screenshots, and Migi approval when visual-heavy work required it, or Literal Target Copy Mode was explicitly requested and screenshot comparison reports exact differences
- screenshots exist or blocker is documented
- done report validates for visual UI work
- target-copy report validates when Literal Target Copy Mode applies
- screenshot comparison report exists when Literal Target Copy Mode applies
- asset manifest validates for production image-led work
- inspiration manifest validates when visual-heavy work uses inspiration
- visual QA report exists when the UI can run
- core product loop is manually verified and documented when the app depends on upload, classification, generation, selection, or persistence
- persistence truth is documented for user-generated data across route changes, refresh, and browser reopen
- dogfood target failures are translated back into Miguel Design OS patches or named open gaps
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
Done report:
Core loop proof:
Persistence truth:
Dogfood learning:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
