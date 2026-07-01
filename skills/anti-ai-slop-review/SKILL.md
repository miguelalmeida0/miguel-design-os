# anti-ai-slop-review

## Name

anti-ai-slop-review

## Description

Review an existing UI for common AI-builder failure modes and produce concrete fixes instead of vague taste commentary.

## Use When

- Reviewing existing UI.
- Migi asks if a design feels generic, safe, boring, or AI-generated.
- The work needs anti-slop checks before completion.

## Do Not Use When

- No UI exists yet.
- The task is purely backend, data, or infrastructure.
- The user asks only for implementation of an already approved design.

## Required Inputs

- Screenshots or runnable UI.
- Product type.
- Primary object and primary action.
- Any inspiration or approved direction.
- Any rejected direction.
- Done report artifact before final handoff when visual UI work is reviewed.
- Target-copy report when reviewing Literal Target Copy Mode output.
- Asset manifest when reviewing production image-led output.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/anti-patterns.md`
- `design-dna/rejected-directions.md`
- `rules/anti-patterns.md`
- `evaluation/ui-scorecard.md`

## Workflow

1. Identify the product's actual visual thesis.
2. Check for:
   - obvious theme literalism
   - AI scale inflation
   - motion without purpose
   - same layout with new paint
   - badge soup
   - container soup
   - reference flattening
   - overlap/collision
   - generic dashboard energy
3. Apply score caps before giving praise.
4. Convert each failure into a concrete correction.
5. Prioritize structural fixes before color or animation.
6. If the design lacks a thesis, route back to `visual-concept-gate`.
7. Confirm build/lint is not being treated as visual QA.
8. Run `node tools/visual-qa.mjs --url <url> --name <name>` when the UI can run.
9. Run `node tools/object-swap-check.mjs --url <url> --objects "<objects>" --name <name>` for selection, roster, gallery, or configurator products.
10. Validate target-copy, comparison, or asset-manifest evidence when those modes apply.
11. Before final handoff on visual UI work, run `node tools/design-os.mjs validate-done-report done-report.local.json`.

## Stop Conditions

- Stop if screenshot evidence is missing and the UI can run.
- Stop if the design has no clear primary object or action.
- Stop if a rejected layout is being polished.
- Stop if visual UI work has no validated done report before final handoff.
- Stop if target-copy or asset-manifest evidence is missing for the applicable mode.
- Stop if Literal Target Copy Mode has no screenshot comparison report.

## Output Contract

```md
Visual thesis found:
AI-slop failures:
Score caps applied:
Top structural fix:
Top interaction fix:
Top responsive fix:
Done report:
Target-copy report:
Asset manifest:
Visual QA report:
Object-swap report:
Patch recommendation:
```

## Scorecard Blockers

- Same layout with new paint: max score 6.
- Reference flattening: max score 6.
- Obvious genre cliche: max score 7.
- AI scale inflation: max score 7.
- Unintended overlap/collision: max score 6.
- Missing validated done report for visual UI work: max score 6.
- Missing target-copy report during Literal Target Copy Mode: max score 6.
- Missing screenshot comparison report during Literal Target Copy Mode: max score 6.
- Missing asset manifest for production image-led work: max score 6.
- Build/lint used as visual QA proof: max score 6.
- Watermark/editor/browser artifact: max score 4.

## Safety/Scope Rules

- Do not use insults or subjective taste labels without evidence.
- Do not recommend redesign when a small fix is enough.
- Do not add motion, glow, badges, or cards as default fixes.
- Do not globalize a one-app rejection.
- Do not claim done from anti-slop review unless visual evidence is captured and the done report validates.
- Treat visual target screenshots as evidence only; production UI must not contain watermark/editor/browser artifacts.
