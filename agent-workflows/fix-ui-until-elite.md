# Workflow: Fix UI Until Elite

Use this workflow when the goal is not just to make a UI acceptable, but to raise it to a polished, Miguel-aligned standard.

## Loop

1. Capture the current UI at 390, 768, and 1440 px.
2. Score it with `evaluation/ui-scorecard.md`.
3. Identify the top 3 issues blocking quality.
4. Fix the highest-impact issue first.
5. Run the app again.
6. Recapture affected screens.
7. Repeat until the score is 90 or higher, or until a blocker is documented.

## Priority Order

Fix in this order:

1. broken layout, overlap, clipping, blank states
2. unclear primary object or action
3. clickable/passive ambiguity
4. responsive failures
5. weak component states
6. copy vagueness
7. palette or visual polish
8. motion and delight

## Guardrails

- Do not repaint the whole app before fixing hierarchy.
- Do not add more cards to solve a composition problem.
- Do not add copy to solve a layout problem.
- Do not add motion to distract from weak states.
- Do not clone another source project's palette.

## Done Criteria

The UI is elite when:

- the main object is obvious at all three widths
- the primary action is unmistakable
- component roles are clear
- responsive screenshots show intentional compositions
- copy is concise and product-specific
- empty/loading/error states are handled
- score is 90 or higher
- no blocker criteria in the scorecard are present

If a technical blocker prevents completion, document the blocker, the last score, and the exact remaining issues.

