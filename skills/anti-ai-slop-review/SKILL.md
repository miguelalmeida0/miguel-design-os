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

## Stop Conditions

- Stop if screenshot evidence is missing and the UI can run.
- Stop if the design has no clear primary object or action.
- Stop if a rejected layout is being polished.

## Output Contract

```md
Visual thesis found:
AI-slop failures:
Score caps applied:
Top structural fix:
Top interaction fix:
Top responsive fix:
Patch recommendation:
```

## Scorecard Blockers

- Same layout with new paint: max score 6.
- Reference flattening: max score 6.
- Obvious genre cliche: max score 7.
- AI scale inflation: max score 7.
- Unintended overlap/collision: max score 6.

## Safety/Scope Rules

- Do not use insults or subjective taste labels without evidence.
- Do not recommend redesign when a small fix is enough.
- Do not add motion, glow, badges, or cards as default fixes.
- Do not globalize a one-app rejection.
