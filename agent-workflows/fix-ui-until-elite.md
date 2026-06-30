# Workflow: Fix UI Until Elite

Use when iterating an existing UI until it clears the Design OS bar.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read relevant `design-dna/` files before editing.
3. Inspect the current project type, framework, routes, components, styling system, and tokens.
4. Define or restate the project-specific visual identity.
5. Name any source-project evidence and what must not be copied literally.
6. Capture current screenshots as evidence; do not treat old captures as templates.
7. Score with `evaluation/ui-scorecard.md` before choosing fixes.

## Iteration Loop

1. Capture 390, 768, and 1440 px screenshots.
2. Score with `evaluation/ui-scorecard.md`.
3. List blockers and the top 3 score-limiting defects.
4. Fix the highest-impact defect.
5. Run lint/build/tests where available.
6. Restart or refresh the app.
7. Recapture affected screenshots.
8. Rescore.
9. Repeat until score is 90+ with no blockers, or document the blocker.

## Fix Priority

Fix in this order:

1. layout breakage, overlap, clipping, blank primary states
2. unclear primary object or action
3. source-project palette/layout copying
4. clickable/passive ambiguity
5. responsive failures
6. missing component states
7. unsupported claims or fake data
8. vague copy
9. visual refinement and motion

## Constraints

- Do not repaint before fixing hierarchy.
- Do not add containers to solve hierarchy.
- Do not add explanatory copy to solve poor layout.
- Do not add motion to hide weak state handling.
- Do not import In The Loop social patterns unless the product is social coordination.

## Done

Elite requires:

- score 90+
- no scorecard blockers
- screenshots at 390, 768, and 1440 px
- project-specific visual identity preserved
- no literal source-app copying
- final report includes score, screenshots, and remaining risks

