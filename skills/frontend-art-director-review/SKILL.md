# frontend-art-director-review

## Name

frontend-art-director-review

## Description

Ruthless elite redesign critique focused on visual thesis, composition, focal object, material, atmosphere, desire, and interaction reward.

## Use When

- Migi asks for an elite redesign critique.
- The UI needs art-direction judgment, not just QA.
- The product feels safe, generic, flat, boring, or junior.
- A redesign direction needs approval or rejection.

## Do Not Use When

- The task is small bug fixing.
- The user needs implementation details only.
- The design direction is approved and only technical cleanup remains.

## Required Inputs

- Current screenshots or runnable UI.
- Product type.
- Primary object and action.
- Intended audience.
- Inspiration or approved thesis, if any.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/miguel-style-principles.md`
- `design-dna/anti-patterns.md`
- `design-dna/approved-directions.md` when relevant
- `design-dna/rejected-directions.md` when relevant
- `evaluation/ui-scorecard.md`

## Workflow

1. Identify whether the design has an actual visual thesis.
2. Name the focal object and whether it carries the first screen.
3. Judge composition before components.
4. Reject junior card grids when they are the default answer rather than the right structure.
5. Reject safe generic layouts when the product needs art direction.
6. Evaluate material, atmosphere, hierarchy, desire, and interaction reward.
7. Separate concept failure from execution failure.
8. If concept failure exists, route to `visual-concept-gate`.
9. If execution failure exists, provide concrete patch priorities.

## Stop Conditions

- Stop if the critique lacks evidence from screenshots or references.
- Stop if the first viewport has no focal object.
- Stop if the output only suggests color, spacing, glow, or bigger type.

## Output Contract

```md
Verdict:
Visual thesis:
Focal object:
Composition assessment:
Material/atmosphere:
Desire mechanism:
Interaction reward:
Concept failures:
Execution failures:
Required redesign move:
Scorecard caps:
```

## Scorecard Blockers

- No visual thesis: cap applies through identity score.
- Junior card grid as default answer: cap through layout/composition.
- Obvious genre cliche: max score 7.
- Same layout with new paint: max score 6.
- Selection-first product without desire: max score 7.

## Safety/Scope Rules

- Be direct, but ground critique in visible evidence.
- Do not propose a universal style.
- Do not demand cinematic or playful treatment unless the product calls for it.
- Do not confuse personal taste with product-specific art direction.
