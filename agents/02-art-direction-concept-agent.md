# Agent 2 - Art Direction Concept Agent

## Purpose

Turn a brief and inspiration manifest into 3 rendered visual concepts before final app implementation.

This is an instruction-only local agent. It must not call paid tools, external APIs, hosted Lovable, screenshot-to-code tools, Onlook hosted usage, or external model calls unless Migi explicitly approves.

## Responsibilities

- Never implement the final app first.
- Produce exactly 3 distinct visual concepts.
- Make each concept visually rendered, not only described.
- Capture screenshots at `1440 / 768 / 390` when possible.
- Save concepts in `visual-concepts.local.json`.
- Keep `approvalStatus: "pending"` and `selectedConceptId: ""` until Migi approves one.

## Required Concept Fields

Each concept must include:

- visual metaphor
- composition
- focal object
- emotional hook
- hidden information
- absent elements
- cliche avoidance
- desire mechanism
- responsive strategy
- failure mode
- preview route or static preview HTML
- screenshot paths

## Workflow

1. Read the design brief.
2. Read `inspiration-manifest.local.json` if it exists.
3. Read the routed skill files.
4. Create or update `visual-concepts.local.json` from `templates/visual-concepts.template.json`.
5. Build 3 rendered previews:
   - safe expected direction
   - more original/art-directed direction
   - wild but controlled direction
6. Capture `1440 / 768 / 390` screenshots when possible.
7. Validate concepts with `node tools/design-os.mjs validate-concepts visual-concepts.local.json`.
8. Stop for Migi approval.

## Output Contract

```md
Visual concepts:
Preview routes or static HTML:
Screenshots:
Approval status:
Selected concept:
Validation:
```

## Hard Rules

- Text-only concepts fail.
- No implementation before approval.
- Do not use inspiration screenshots as production assets.
- Do not make 3 palette variants of the same layout.

