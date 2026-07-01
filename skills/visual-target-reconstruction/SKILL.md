# visual-target-reconstruction

## Name

visual-target-reconstruction

## Description

Use a screenshot, Lovable prototype, Pinterest image, mockup, or strong visual reference as art-direction evidence without flattening it into shallow style tokens.

If Migi asks for an exact copy, this skill enters Literal Target Copy Mode instead of art-direction translation.

## Use When

- Migi provides a screenshot, mockup, prototype, Pinterest image, Lovable output, inspiration image, or strong visual target.
- A design must be compared against a reference.
- The current UI is described as far from the inspiration.
- Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`.

## Do Not Use When

- No visual reference exists.
- The task is backend-only or copy-only.
- The reference is only a loose mood note and Migi asks not to follow it closely.

## Required Inputs

- Reference image, screenshot, URL, or description.
- Current product type.
- Primary object and primary action.
- Current UI screenshots, if available.
- Implementation constraints.
- Inspiration manifest when target/inspiration research is used.
- Done report artifact before final handoff.
- Target-copy report for Literal Target Copy Mode.
- Asset manifest for production image-led reconstruction.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/new-app-generation-rules.md`
- `agent-workflows/visual-target-reconstruction-mode.md`
- `evaluation/ui-scorecard.md`
- `docs/inspiration-analysis.md` if it exists for the project

## Workflow

### Literal Target Copy Mode Override

When Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, stop all product reasoning. Do not run the 3-concept gate, invent new art direction, expand features, run a usefulness pass, add panels, add explanations, improve, or reinterpret.

The only goal is visual parity with the supplied target.

Required sequence:

1. Identify the target screens.
2. Reconstruct the visible composition.
3. Exclude browser chrome, editor UI, and watermark artifacts.
4. Build the static shell first.
5. Implement only minimum visible interactions.
6. Capture comparison screenshots.
7. Validate `target-copy-report.local.json`.
8. Validate `asset-manifest.local.json` when production imagery is used.
9. Report exact differences.

Product logic waits until the pixel-parity shell is approved.

### Standard Visual Target Reconstruction

1. Analyze the reference before implementation.
2. If references come from discovery work, create or validate `inspiration-manifest.local.json`.
3. Extract:
   - composition
   - focal object
   - material
   - atmosphere
   - hidden information
   - absent elements
   - information hierarchy
   - interaction model
   - desire mechanism
4. Reject shallow traits as the concept: dark, neon, cards, glow, gradients, glass, rounded panels, or large text.
5. Define what to copy, avoid, and translate.
6. Run Visual Concept Gate v2 if the work is visual-heavy: exactly 3 rendered concepts, preview routes, and `1440 / 768 / 390` screenshot files.
7. Stop for Migi approval after showing the rendered concepts.
8. Build a static visual shell from the approved concept before product logic.
9. Capture or inspect implementation screenshots at `390 / 768 / 1440`.
10. Compare the shell against the reference and approved concept by composition, focal object, hidden information, and emotional hook.
11. Validate `asset-manifest.local.json` when production imagery is used.
12. Create or update `done-report.local.json` from screenshot evidence.
13. Run `node tools/design-os.mjs validate-done-report done-report.local.json`.
14. Patch the shell before adding feature depth.

## Stop Conditions

- Stop if the reference has not been analyzed.
- Stop if discovered inspiration has no validated inspiration manifest.
- Stop if the output preserves only surface styling.
- Stop if the chosen layout contradicts the reference composition.
- Stop if the visual-heavy concept gate is text-only or missing screenshots when Literal Target Copy Mode is not active.
- Stop before product logic if the visual shell does not match the approved direction.
- Stop if Literal Target Copy Mode is active and the implementation changes composition, adds unrelated product UI, or explains instead of copying the visible shell.
- Stop if visual target work has no validated done report before final handoff.
- Stop if Literal Target Copy Mode has no validated target-copy report.
- Stop if a target screenshot is used as a production asset.
- Stop if production image-led reconstruction has no validated asset manifest.

## Output Contract

```md
Reference analyzed:
Composition:
Focal object:
Material/atmosphere:
Hidden information:
Absent elements:
Interaction model:
Copy:
Avoid:
Translate:
Rendered concepts:
Approved concept:
Literal Target Copy Mode:
Visual shell comparison:
Exact differences:
Screenshots:
Done report:
Target-copy report:
Asset manifest:
Patch needed:
```

## Scorecard Blockers

- Inspiration flattened into shallow traits: max score 6.
- Strong reference provided but result preserves only surface styling: max score 6.
- Generic app layout used instead of reference composition: max score 6.
- Primary reference object replaced by grid/cards/dashboard: max score 6.
- Text-only concepts for visual-heavy reference work: max score 5.
- Concept screenshots missing before approval: max score 6.
- Literal Target Copy Mode requested but composition changes or unrelated product UI is added: max score 5.
- Missing validated done report for visual target work: max score 6.
- Missing target-copy report during Literal Target Copy Mode: max score 6.
- Missing asset manifest for image-led target reconstruction: max score 6.
- Watermark/editor/browser artifact in reconstructed UI: max score 4.

## Safety/Scope Rules

- Do not copy proprietary assets, logos, or code.
- Only use Literal Target Copy Mode for a target Migi supplies or explicitly approves.
- Do not add external dependencies as part of this skill.
- Do not expose private inspiration files outside the repo.
- Do not treat inspiration as a universal rule for unrelated projects.
- Do not claim visual parity from build/lint alone; screenshot evidence and a validated done report are required.
- Visual target screenshots are evidence, not production assets.
