# Design OS Studio Build Report

## Setup Status

`studio/` was created as a new Vite React TypeScript Tailwind app. It is separate from `studio-preview/`.

## Screens Implemented

- Command Center
- Inspiration
- Concepts
- Target Copy
- QA Runs
- Agents
- Prompts

## Interactions Implemented

- Top navigation route switching
- Source filtering by trust level
- Source selection, shortlisting, note editing, and summary copy
- Concept selection, approval, rejection, and implementation brief copy
- Target/current screenshot path editing
- Target-copy difference editing
- Blocking/non-blocking mismatch toggling
- QA check cycling
- Blocker adding and resolving
- Agent selection and command/prompt copy
- Prompt generation, prompt copy, markdown export, workflow JSON export, CLI command copy

## Truthful-State Notes

- Studio uses local mock/static TypeScript data.
- It does not claim to read or write repo files from the browser.
- Visual QA harness availability is shown as blocked when Playwright is unavailable.
- Playwright doctor, browser mode, capture mode, blocked reason, screenshot requirement, score threshold, and done-report final status are visible in QA Runs.
- Screenshots remain evidence, not production assets.

## Visual QA Status

Visual QA screenshots were not captured because local Playwright is unavailable in this workspace.

Command run:

```sh
node tools/playwright-doctor.mjs --url http://localhost:5175 --browser auto
node tools/visual-qa.mjs --url http://localhost:5175 --name design-os-studio --browser auto --tmpdir .tmp/playwright
```

Result:

- Blocked reports are acceptable when they include the exact failure chain.
- Latest blocked Studio auto report: `docs/qa-runs/2026-07-01T17-47-09-327Z-design-os-studio/visual-qa-report.json`.
- Latest doctor report: `docs/qa-runs/playwright-doctor-latest.json`.
- Manual import smoke passed with generated placeholder PNGs at `docs/qa-runs/2026-07-01T17-48-12-096Z-smoke-manual-import/visual-qa-report.json`.
- No screenshots were fabricated.
- Manual app-only screenshot import is now available as a fallback.

## Validation Results

```sh
cd studio
npm install
npm install -D @types/react @types/react-dom
npm run build
```

Result: passed. TypeScript completed and Vite produced `studio/dist/`.

```sh
cd studio
npm run lint --if-present
```

Result: no lint script is configured for Studio v0, so no lint command ran.

```sh
node tools/design-os.mjs list-agents
node tools/design-os.mjs route-agent --task "Use Design OS Studio to manage visual workflow"
node tools/design-os.mjs doctor
```

Result: passed. Agent routing selected the Visual QA Anti-Slop Agent for the Studio workflow task, and `doctor` passed.

## Screenshot Commands To Run

```sh
# Terminal 1
cd studio
npm run dev

# Terminal 2, from repo root
node tools/playwright-doctor.mjs --url http://localhost:5175 --browser auto
node tools/visual-qa.mjs --url http://localhost:5175 --name design-os-studio --browser auto --tmpdir .tmp/playwright
node tools/import-manual-screenshots.mjs --name design-os-studio --390 path/to/390.png --768 path/to/768.png --1440 path/to/1440.png
node tools/visual-qa.mjs --manual --input-dir docs/qa-runs/<run>/screenshots --name design-os-studio
```

## Known Limitations

- Browser state is not persisted across reloads.
- Export writes downloads only; it does not commit files.
- Studio mirrors local JSON data instead of importing every repo artifact live.
- No backend exists yet.
- No lint script is configured in v0.
- Visual screenshots require local Playwright, which is not installed in this workspace.

## Remaining Weaknesses

- Needs screenshot review after the dev server runs.
- Needs a persisted workflow store in a later version.
- Needs live file-backed artifact status in a later version.
