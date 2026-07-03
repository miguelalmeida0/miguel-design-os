# Miguel Design OS

Miguel Design OS is a simple, powerful design memory system for future frontend agents.

It helps Codex quickly understand:

1. Migi's design rules.
2. Migi's approved UI examples.
3. Migi's rejected UI examples.
4. Prompts, skills, templates, and QA gates for future projects.

## What It Is

- a design memory system
- a visual reference library
- a frontend agent instruction system
- a collection of rules, skills, prompts, schemas, and screenshot QA tools

## What It Is Not

- not a product app
- not a frontend Studio app
- not a replacement for visual judgment
- not a gallery of production assets

The previous frontend Studio experiment has been deprecated under `deprecated/studio/`. The previous local concept preview experiment has been deprecated under `deprecated/studio-preview/`. They are not part of the current primary workflow.

## Primary Workflow

Use this repo as:

```txt
rules + visual-library + prompt templates + screenshot QA + benchmark scoring
```

For frontend/design work:

No-Image Fast Direction Gate is the default for normal new visual-heavy tests. Read `design-dna/NO_IMAGE_DIRECTION_GATE_CONTEXT.md` and `design-dna/FAST_DIRECTION_GATE_CONTEXT.md` first, create only `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, and `docs/design/direction-risk-check.md`, then stop for Migi selection. Use Deep Direction Gate only when Migi explicitly asks for deep exploration, full strategy, research, benchmark, or reference decomposition.

1. Read `AGENTS.md`.
2. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
3. Inspect `visual-library/README.md`.
4. Classify task mode.
5. Declare active design dials.
6. Select references or image-first mode.
7. For new visual-heavy work, run the No-Image Fast Direction Gate: create concise direction cards, layout maps, and risk checks, then stop for Migi's choice.
8. When Migi chooses A, B, C, or a hybrid, treat the selection as approval to build unless Migi explicitly says planning-only, spec-only, wait, or no-code.
9. Create `docs/design/selected-direction.md` and continue immediately into implementation planning.
10. Create `docs/design/visual-spec.md`.
11. Define design-system tokens.
12. Check OKLCH/APCA contrast and palette logic.
13. If real imagery is required, create Unsplash search and asset-manifest artifacts.
14. Create `docs/design/navigation-strategy.md` for visual-heavy navigation.
15. Implement the frontend aha moment.
16. Apply an interface-feel polish pass.
17. Review motion if present.
18. For advanced/cinematic/artistic/scroll/portfolio motion, create `docs/design/motion-choreography-plan.md`, use `skills/advanced-motion-choreography/SKILL.md`, capture a motion sequence if possible, and score `evaluation/benchmarks/motion-cinematic.benchmark.md`.
19. Verify interactions.
20. Capture screenshot QA.
21. Run benchmark scoring from `evaluation/benchmarks/` when a mode benchmark exists.
22. Run post-build review layers when relevant: evidence-backed critique, text clarity, production hardening, screenshot scorecard, and anti-AI slop.
23. Run scorecard / done report.
24. For dogfood targets, write a postmortem.
25. Patch Design OS from failures only when the postmortem shows a system-level gap.

## Operating Model

The full local operating model is documented in `docs/architecture/design-os-operating-model.md`.

## Fast Direction Gate

New visual-heavy apps, landing pages, portfolios, creative sites, mobile flows, dashboard redesigns, and major UI redesigns use No-Image Fast Direction Gate by default. It is intentionally short: direction cards, layout maps, and risk checks.

Create:

- `docs/design/direction-options.md`
- `docs/design/direction-layout-maps.md`
- `docs/design/direction-risk-check.md`

Paid image generation is disabled by default. It may only run if Migi explicitly writes `I approve paid API image generation for this run.` and the paid script is called with `--paid-ok`. Do not create visual specs, navigation plans, QA docs, build/lint reports, or frontend code until Migi selects a direction.

## Post-Build Review Layers

These run after implementation or when Migi asks for review, not during Fast Direction Gate:

- `skills/evidence-backed-critique/SKILL.md`: finished UI critique with design judgment, screenshot/browser evidence, Nielsen scoring, cognitive load, persona red flags, and critique snapshots.
- `skills/text-clarity-review/SKILL.md`: UX writing review for unclear, vague, generic, inconsistent, or confusing interface copy.
- `skills/production-hardening-review/SKILL.md`: production resilience review for long text, empty/error/loading states, i18n, accessibility, slow networks, large data, and responsive stress.

## Direction Selection Means Build

After the direction gate, Migi's selection is implementation approval. If Migi says Direction A, Direction B, Direction C, use A, go with B, selected direction is X, or chooses a hybrid such as `B palette + C navigation`, the agent must create/update `docs/design/selected-direction.md`, continue into `docs/design/visual-spec.md`, define design-system tokens, implement, validate, and return the local UI URL when a dev server is started.

The agent stops after `selected-direction.md` only when Migi explicitly says spec only, planning only, do not implement, wait, no code yet, direction selection only, just document it, or do not edit src. Do not ask "ready for implementation?" after a direction has already been selected.

Required post-selection flow: `docs/design/selected-direction.md`, `docs/design/visual-spec.md`, `docs/design/design-system-tokens.md`, `docs/design/color-and-contrast.md` or equivalent palette doc, `docs/design/navigation-strategy.md` for visual-heavy work, `docs/design/motion-choreography-plan.md` when advanced motion is requested, `docs/qa/anti-ai-tell-preflight.md`, implementation, build/lint, screenshot/dev-server report if available, and final response with URL when a dev server starts.

- `visual-library/` is the screenshot source of truth.
- `evaluation/benchmarks/` is the scoring/test layer that references visual-library assets.
- `skills/` are routeable specialists.
- `templates/prompts/` are the standard reusable interface for future agents.

Do not duplicate screenshot libraries for benchmarks. Benchmark files should point back to existing visual-library paths.

## Benchmark Layer

Mode benchmarks live in `evaluation/benchmarks/`:

- `landing-artistic.benchmark.md`
- `dashboard-command.benchmark.md`
- `mobile-product.benchmark.md`
- `portfolio-experimental.benchmark.md`

Use benchmark review after screenshot QA to compare a target against gold and rejected mechanics from the visual library.

## Dogfood Postmortems

Use `docs/qa/dogfood-postmortem.template.md` when a target app is testing Miguel Design OS itself. Postmortems decide whether a failure should become project-specific feedback, a prompt fix, a skill check, a scorecard cap, a benchmark update, or a global rule.

## Visual Library

`visual-library/` is the main place for Migi's visual taste memory.

- `visual-library/approved/`: references Migi likes.
- `visual-library/rejected/`: references Migi dislikes.
- `visual-library/inspiration/`: useful references that are not yet global rules.
- `visual-library/case-studies/`: lessons from wins, failures, and dogfood targets.
- `visual-library/templates/reference-note.template.md`: note format for every screenshot.

Screenshots are design evidence, not production assets. Future agents should extract composition, hierarchy, density, interaction ideas, and anti-patterns. Do not copy colors, brands, or layouts blindly unless Migi explicitly activates Literal Target Copy Mode.

Rejected mobile product evidence now includes `visual-library/rejected/case-studies/shelf-circle-mobile-product-failures/`. Use it to catch cut-off mobile sheets, active indicators crossing labels, nonpersistent selection chips, text-only bottom navigation, and add cards that look like content.

## Literal Target Copy

When Migi says:

- `copy this exact UI`
- `100% this design`
- `literally what you see`
- `exact visual target`

Literal Target Copy Mode overrides product thinking. The agent should reconstruct the supplied target's visible composition, exclude browser/editor/watermark artifacts, avoid new product ideas, and report exact differences.

When Migi says a screenshot is inspiration, extract principles instead of cloning.

## Three-Direction Mockup Gate

For new visual-heavy apps, landing pages, portfolios, mobile apps, dashboard redesigns, or artistic interfaces with no approved visual direction, agents must create `docs/design/direction-options.md` first, then stop for Migi to choose Direction A, B, C, or a hybrid. Once Migi chooses, the selection is approval to build unless the message explicitly says planning-only or no-code. Implementation starts after `docs/design/selected-direction.md` exists, and the agent must not request a redundant approval step.

Each direction must be meaningfully different and include vibe, palette, typography, layout, imagery, motion, mobile strategy, tradeoffs, and what AI default it avoids.

## Landing Page / Artistic Mode

When Migi says landing page, creative, artistic, cinematic, editorial, visual-heavy, image-led, landing-page inspiration, or creative inspiration, agents must use poster logic, image-led composition, sparse copy, and minimal UI chrome. Do not turn these references into Blogspot-style section stacks, generic SaaS grids, feature-card rows, stats blocks, or dashboard furniture.

For these modes, palette exploration is required: one safe refined palette, one artistic expressive palette, and one unexpected high-character palette. Bold color is allowed; unreadable color is not.

## Unsplash Asset Sourcing

Use `skills/unsplash-asset-sourcing/SKILL.md` when real photography or Unsplash assets are needed for landing pages, portfolios, creative/editorial sites, image-first frontend, or product concepts.

Required project artifacts:

- `docs/design/unsplash-search-plan.md`
- `docs/design/unsplash-asset-manifest.md`

Every selected image needs a role, source/photographer/download metadata, alt text, crop strategy, palette relationship, text safe-zone notes, and product-truth notes. Unsplash imagery is atmosphere/source material, not proof of actual product operation.

## Navigation Art Direction

Navigation is part of the page's art direction. For visual-heavy apps, landing pages, portfolios, creative/editorial sites, dashboards, and redesigns, create `docs/design/navigation-strategy.md` before implementation.

Use `design-intelligence/navigation-patterns.json` and `design-intelligence/navigation-pattern-guidance.md` to choose between patterns such as split corner navigation, centered wordmark navigation, oversized typographic menus, spatial/canvas navigation, portfolio index navigation, floating contact anchors, and crafted mobile bottom navigation.

Do not default to the same logo-left links-center CTA-right navbar, sticky pill, sticky black bar, or mobile top link dump unless the concept explicitly earns it.

Navigation must remain readable over every background it crosses. Do not use forced app-name/logo chrome, decorative circular/orbital/HUD line overlays, fake sonar rings, or decorative hairline/separator ornaments unless the visual spec documents functional meaning and Migi has explicitly accepted the motif.

## Dashboard Mode

When Migi points to `visual-library/approved/inspiration/01-command-centers-dashboards/`, dashboard means image-aware command surface, not generic admin panel. Future agents must define one attraction zone, varied panel weights, useful chart forms, deliberate image/object/media roles, compact scale, and calm/busy rhythm before coding.

Avoid same-weight card soup, text-and-metrics-only dashboards, terminal-ish dark panel spam, decorative charts, oversized empty dashboard UI, and any dashboard with no memorable visual anchor.

## Visualization And Diagram Systems

Any chart, graph, diagram, map, timeline, pattern canvas, node graph, floor plan, seating chart, or canvas-like product object needs a real model before implementation.

- `skills/chart-system-director/`: visualization intent, data contract, chart type, library/tool routing, labels, states, responsiveness, and accessibility.
- `skills/diagram-canvas-system/`: coordinate system, canvas bounds, layer model, object model, label safe zones, collision strategy, selection/inspector behavior, and responsive fallback.
- `skills/data-viz-hardening-review/`: post-build stress testing for long labels, missing values, many series/items, no data, async states, tooltips, legends, zoom, high contrast, reduced motion, and keyboard access.
- `design-intelligence/visualization-tool-routing.md`: D3, Observable Plot, Vega-Lite, ECharts, Recharts, Chart.js, Nivo, React Flow, React Konva/Konva, Mermaid, D2, custom SVG, and CSS/HTML routing.
- `tools/diagram-integrity-check.mjs`: optional Playwright geometry check for runnable diagrams/canvases marked with `data-diagram-*` attributes.

Broken diagrams cannot be hidden under visual polish. Primary product objects must have a model, not just composition.

## Ingested World-Class Skills

External skill/reference systems are normalized into repo-local skills:

- `skills/chart-system-director/`: chart intent, data contracts, library recommendation, and anti-decorative-chart enforcement.
- `skills/diagram-canvas-system/`: spatial product object, canvas, map, and diagram system planning.
- `skills/data-viz-hardening-review/`: chart/diagram/canvas edge-case hardening.
- `skills/data-visualization-selection/`: chart type selection, accessibility fallback, rendering strategy, and graph usefulness.
- `skills/visual-style-selection/`: style taxonomy selection, token planning, effect limits, accessibility/performance fit, and rejected-style checks.
- `skills/image-first-website-to-code/`: image-first website workflow, section-specific references, deep extraction, and anti-drift implementation.

Use these through `AGENTS.md` and `skills/skill-registry.json`; do not paste raw source tables into project prompts. The goal is deliberate selection, report artifacts, and scorecard enforcement.

## AI UI Builder Research Upgrade

Research inputs are archived under `research-input/ai-ui-builders/raw/` with manifests in `research-input/ai-ui-builders/`.

The transferable mechanisms now live as:

- `docs/research/ai-ui-builder-research-synthesis.md`
- `docs/research/ai-builder-operating-model.md`
- `design-dna/design-generation-dials.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/mobile-product-rules.md`
- `agent-workflows/frontend-aha-moment-workflow.md`
- `agent-workflows/efficient-agent-implementation-workflow.md`
- `agent-workflows/image-first-frontend-workflow.md`
- `docs/design/mobile-flow-spec.md`
- `design-intelligence/`
- `skills/visual-spec-compiler/`
- `skills/dashboard-graph-system/`
- `skills/landing-page-pattern-director/`
- `skills/image-first-frontend/`
- `skills/mobile-product-flow/`
- `skills/landing-page-craft-director/`
- `skills/anti-ai-tell-preflight/`
- `skills/motion-craft-director/`
- `skills/review-animations/`
- `skills/emil-design-engineering/`
- `skills/delight-opportunity-director/`
- `skills/animation-vocabulary/`
- `design-dna/brief-inference-rules.md`
- `design-dna/anti-ai-tell-preflight.md`
- `design-dna/motion-and-delight-rules.md`
- `design-dna/landing-page-craft-rules.md`

## Useful Files

- `AGENTS.md`: short router for future Codex agents.
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`: compact always-read design context.
- `design-dna/`: reusable design rules.
- `design-intelligence/`: distilled recommendation engines for color, charts, visualization tool routing, style, and landing patterns.
- `visual-library/`: approved/rejected/inspiration references and notes.
- `skills/`: focused playbooks for visual concepting, target reconstruction, QA, selection-first products, OKLCH/APCA color, UI craft, interface-feel polish, data visualization, style selection, image-first website work, and truthful state.
- `templates/prompts/`: Codex prompt templates.
- `templates/`: report and checklist templates.
- `evaluation/ui-scorecard.md`: scoring and hard caps.
- `tools/design-os.mjs`: local CLI for routing and validation.
- `tools/visual-qa.mjs`: local screenshot QA with fallback reporting.
- `tools/playwright-doctor.mjs`: local browser capture diagnosis.
- `tools/import-manual-screenshots.mjs`: app-only manual screenshot import.

## Taste + Motion Ingestion

Taste, Emil design-engineering, imagegen frontend web, and animation vocabulary sources are archived under `research-input/taste-motion-skills/raw/` with manifests and a local zip pack in `research-input/taste-motion-skills/`.

Distilled mechanisms now live in Design OS as:

- brief inference before visual work
- anti-AI-tell preflight for landing/portfolio/marketing
- landing-page craft rules
- motion and delight rules
- motion review standards
- landing craft, anti-AI, motion, delight, Emil polish, and animation vocabulary skills

## External UI Skill Ingestion

The requested external skill install pass is documented in `docs/qa/external-skill-install-log.md`.

The sandbox could not fetch the upstream packages, so `research-input/external-ui-skills/raw/` contains install-blocked source capsules rather than full upstream raw skill archives. The Miguel-native distilled mechanisms live in:

- `skills/oklch-contrast-palette/`
- `skills/userinterface-wiki/`
- `skills/make-interfaces-feel-better/`
- `design-dna/oklch-contrast-and-palette-rules.md`
- `design-dna/interface-feel-rules.md`
- `design-intelligence/contrast-thresholds.json`
- `design-intelligence/oklch-palette-generation.json`
- `design-intelligence/userinterface-wiki-rules.json`
- `design-intelligence/interface-feel-checklist.json`

## Dogfooding Miguel Design OS

`visual-taste` is the first target app used to test whether Miguel Design OS actually improves frontend output.

Every dogfood failure must feed back into this repo as one of:

- a design rule
- a skill instruction
- a prompt update
- a schema/tool validation update
- a checklist item
- an explicit open gap

Use `templates/dogfood-target-checklist.template.md` for future dogfood targets.

## Embedded Usage

Miguel Design OS can live inside another project as `.design-os`. From that project root:

```sh
node .design-os/tools/design-os.mjs list-skills
node .design-os/tools/design-os.mjs route --task "Build a visual-heavy robot character selection app from inspiration images"
```

The CLI resolves internal Design OS paths from the location of `.design-os/tools/design-os.mjs`, not from `process.cwd()`.

## Validation

Useful local commands:

```sh
node tools/design-os.mjs doctor
node tools/design-os.mjs route --task "<task>"
node tools/design-os.mjs list-agents
node tools/design-os.mjs validate-done-report done-report.local.json
node tools/playwright-doctor.mjs --url http://localhost:5173 --browser auto
node tools/visual-qa.mjs --url http://localhost:5173 --name <project-name> --browser auto --tmpdir .tmp/playwright
node tools/import-manual-screenshots.mjs --name <project-name> --390 path/to/390.png --768 path/to/768.png --1440 path/to/1440.png
```

Build/lint is not visual QA. Desktop screenshots with browser chrome, dock, editor UI, or watermarks are not valid QA evidence.

## Protected Folders

- `source-projects/`: golden source projects; do not modify unless explicitly asked.
- `captures/`: existing screenshots; do not modify unless explicitly asked.
- `raw-chat-input/`: temporary ingestion input; do not modify unless explicitly asked.
