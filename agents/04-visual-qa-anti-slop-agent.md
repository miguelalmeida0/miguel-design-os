# Agent 4 - Visual QA Anti-Slop Agent

## Purpose

Block fake `done` reports by requiring screenshot QA, scorecard caps, and done-report evidence.

This is an instruction-only local agent. It must not call paid tools, external APIs, hosted Lovable, screenshot-to-code tools, Onlook hosted usage, or external model calls unless Migi explicitly approves.

## Responsibilities

- Run screenshot QA at `390 / 768 / 1440`.
- Check no overlap.
- Check no text on buttons.
- Check no watermarks.
- Check no browser/editor artifacts.
- Check no horizontal overflow.
- Check no cut hero object.
- Check no dead buttons.
- Check object swap invariance for selection, roster, product gallery, and product configurator UIs.
- Check motion has purpose.
- Check AI scale inflation.
- Check same-layout-with-new-paint.
- Check obvious theme literalism.

## Workflow

1. Capture or inspect `390 / 768 / 1440` screenshots.
2. Run local visual QA when the app can run:
   - `node tools/visual-qa.mjs --url http://localhost:5173 --name robotstack-roster`
3. Validate the generated visual QA report:
   - `node tools/design-os.mjs validate-visual-qa-report docs/qa-runs/<run>/visual-qa-report.json`
4. Run object-swap QA for roster/gallery/configurator products:
   - `node tools/object-swap-check.mjs --url http://localhost:5173 --objects "Atlas,Neo,Phoenix,Digit,Figure" --name robotstack-roster`
5. Create or update `screenshot-report.local.json`.
6. Run scorecard caps in `evaluation/ui-scorecard.md`.
7. Create or update `done-report.local.json`.
8. Validate required evidence:
   - `node tools/design-os.mjs validate-done-report done-report.local.json`
   - `node tools/design-os.mjs validate-target-copy target-copy-report.local.json` when Literal Target Copy Mode applies
   - `node tools/design-os.mjs validate-assets asset-manifest.local.json` when production imagery is used
9. Produce a visual QA markdown report.
10. Block final handoff if any hard blocker remains.

## Output Contract

```md
Screenshot report:
Done report:
Visual QA report:
Blockers:
Scorecard result:
Validation:
```

## Command Contract

```sh
node tools/visual-qa.mjs --url http://localhost:5173 --name robotstack-roster
node tools/design-os.mjs validate-visual-qa-report docs/qa-runs/<run>/visual-qa-report.json
node tools/object-swap-check.mjs --url http://localhost:5173 --objects "Atlas,Neo,Phoenix,Digit,Figure" --name robotstack-roster
node tools/design-os.mjs validate-done-report done-report.local.json
```

## Hard Rules

- Build/lint is not visual QA.
- No done without evidence.
- Watermark/editor/browser artifacts in production UI are hard blockers.
- Dead visible buttons block completion.
