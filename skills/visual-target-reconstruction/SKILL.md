# visual-target-reconstruction

## Name

visual-target-reconstruction

## Description

Use a screenshot, Lovable prototype, Pinterest image, mockup, or strong visual reference as art-direction evidence without flattening it into shallow style tokens.

## Use When

- Migi provides a screenshot, mockup, prototype, Pinterest image, Lovable output, inspiration image, or strong visual target.
- A design must be compared against a reference.
- The current UI is described as far from the inspiration.

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

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/new-app-generation-rules.md`
- `agent-workflows/visual-target-reconstruction-mode.md`
- `evaluation/ui-scorecard.md`
- `docs/inspiration-analysis.md` if it exists for the project

## Workflow

1. Analyze the reference before implementation.
2. Extract:
   - composition
   - focal object
   - material
   - atmosphere
   - hidden information
   - absent elements
   - information hierarchy
   - interaction model
   - desire mechanism
3. Reject shallow traits as the concept: dark, neon, cards, glow, gradients, glass, rounded panels, or large text.
4. Define what to copy, avoid, and translate.
5. Run Visual Concept Gate v2 if the work is visual-heavy: exactly 3 rendered concepts, preview routes, and `1440 / 768 / 390` screenshot files.
6. Stop for Migi approval after showing the rendered concepts.
7. Build a static visual shell from the approved concept before product logic.
8. Capture or inspect implementation screenshots at `390 / 768 / 1440`.
9. Compare the shell against the reference and approved concept by composition, focal object, hidden information, and emotional hook.
10. Patch the shell before adding feature depth.

## Stop Conditions

- Stop if the reference has not been analyzed.
- Stop if the output preserves only surface styling.
- Stop if the chosen layout contradicts the reference composition.
- Stop if the visual-heavy concept gate is text-only or missing screenshots.
- Stop before product logic if the visual shell does not match the approved direction.

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
Visual shell comparison:
Screenshots:
Patch needed:
```

## Scorecard Blockers

- Inspiration flattened into shallow traits: max score 6.
- Strong reference provided but result preserves only surface styling: max score 6.
- Generic app layout used instead of reference composition: max score 6.
- Primary reference object replaced by grid/cards/dashboard: max score 6.
- Text-only concepts for visual-heavy reference work: max score 5.
- Concept screenshots missing before approval: max score 6.

## Safety/Scope Rules

- Do not copy proprietary layouts, assets, logos, or code.
- Do not add external dependencies as part of this skill.
- Do not expose private inspiration files outside the repo.
- Do not treat inspiration as a universal rule for unrelated projects.
