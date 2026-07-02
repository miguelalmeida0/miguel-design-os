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
rules + visual-library + prompts + screenshot QA
```

For frontend/design work:

1. Read `AGENTS.md`.
2. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
3. Inspect `visual-library/README.md`.
4. Classify task mode.
5. Declare active design dials.
6. Select references or image-first mode.
7. For new visual-heavy work, create `docs/design/direction-options.md` with 3 directions and stop for Migi's choice.
8. Create `docs/design/selected-direction.md` after Migi chooses.
9. Create `docs/design/visual-spec.md`.
10. Define design-system tokens.
11. Check OKLCH/APCA contrast and palette logic.
12. Implement the frontend aha moment.
13. Apply an interface-feel polish pass.
14. Review motion if present.
15. Verify interactions.
16. Capture screenshot QA.
17. Run scorecard / done report.
18. Patch Design OS from failures.

## Visual Library

`visual-library/` is the main place for Migi's visual taste memory.

- `visual-library/approved/`: references Migi likes.
- `visual-library/rejected/`: references Migi dislikes.
- `visual-library/inspiration/`: useful references that are not yet global rules.
- `visual-library/case-studies/`: lessons from wins, failures, and dogfood targets.
- `visual-library/templates/reference-note.template.md`: note format for every screenshot.

Screenshots are design evidence, not production assets. Future agents should extract composition, hierarchy, density, interaction ideas, and anti-patterns. Do not copy colors, brands, or layouts blindly unless Migi explicitly activates Literal Target Copy Mode.

## Literal Target Copy

When Migi says:

- `copy this exact UI`
- `100% this design`
- `literally what you see`
- `exact visual target`

Literal Target Copy Mode overrides product thinking. The agent should reconstruct the supplied target's visible composition, exclude browser/editor/watermark artifacts, avoid new product ideas, and report exact differences.

When Migi says a screenshot is inspiration, extract principles instead of cloning.

## Three-Direction Mockup Gate

For new visual-heavy apps, landing pages, portfolios, mobile apps, dashboard redesigns, or artistic interfaces with no approved visual direction, agents must create `docs/design/direction-options.md` first, then stop for Migi to choose Direction A, B, C, or a hybrid. Implementation starts only after `docs/design/selected-direction.md` exists.

Each direction must be meaningfully different and include vibe, palette, typography, layout, imagery, motion, mobile strategy, tradeoffs, and what AI default it avoids.

## Landing Page / Artistic Mode

When Migi says landing page, creative, artistic, cinematic, editorial, visual-heavy, image-led, landing-page inspiration, or creative inspiration, agents must use poster logic, image-led composition, sparse copy, and minimal UI chrome. Do not turn these references into Blogspot-style section stacks, generic SaaS grids, feature-card rows, stats blocks, or dashboard furniture.

For these modes, palette exploration is required: one safe refined palette, one artistic expressive palette, and one unexpected high-character palette. Bold color is allowed; unreadable color is not.

## Dashboard Mode

When Migi points to `visual-library/approved/inspiration/01-command-centers-dashboards/`, dashboard means image-aware command surface, not generic admin panel. Future agents must define one attraction zone, varied panel weights, useful chart forms, deliberate image/object/media roles, compact scale, and calm/busy rhythm before coding.

Avoid same-weight card soup, text-and-metrics-only dashboards, terminal-ish dark panel spam, decorative charts, oversized empty dashboard UI, and any dashboard with no memorable visual anchor.

## Ingested World-Class Skills

Three external skill/reference systems are now normalized into repo-local skills:

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
- `design-intelligence/`: distilled recommendation engines for color, charts, style, and landing patterns.
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
