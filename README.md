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
4. Check `visual-library/approved/` for references Migi likes.
5. Check `visual-library/rejected/` for anti-patterns Migi dislikes.
6. Extract principles for the current product.
7. Use relevant skills from `skills/` only when needed.
8. Implement only after the design direction is clear.
9. Capture screenshot QA before claiming done.

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

## Useful Files

- `AGENTS.md`: short router for future Codex agents.
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`: compact always-read design context.
- `design-dna/`: reusable design rules.
- `visual-library/`: approved/rejected/inspiration references and notes.
- `skills/`: focused playbooks for visual concepting, target reconstruction, QA, selection-first products, and truthful state.
- `templates/prompts/`: Codex prompt templates.
- `templates/`: report and checklist templates.
- `evaluation/ui-scorecard.md`: scoring and hard caps.
- `tools/design-os.mjs`: local CLI for routing and validation.
- `tools/visual-qa.mjs`: local screenshot QA with fallback reporting.
- `tools/playwright-doctor.mjs`: local browser capture diagnosis.
- `tools/import-manual-screenshots.mjs`: app-only manual screenshot import.

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
