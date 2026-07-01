# Workflow: Review UI Like Miguel

Use for UI critique, QA, or design review.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read `system.md`, `design-system.json`, `rules/scorecard.md`, and `skills/screenshot-review/SKILL.md`.
3. Read relevant `design-dna/` files before judging the UI.
4. Classify the task: bug fix, technical refactor, copy/content edit, frontend QA, visual-heavy UI, new app, redesign, or selection/gallery/roster/product-discovery experience.
5. Inspect the current project type, user, primary object, primary action, framework, and styling system.
6. If visual-heavy work was involved, verify the Visual Concept Gate happened before implementation and name the selected thesis.
7. Define the project-specific visual identity from the product, not from a source app.
8. Identify any source-project evidence used and reject literal copying as a review goal; do not copy old apps literally.
9. Capture or request screenshots; old Design OS captures are evidence, not templates.
10. Score with `evaluation/ui-scorecard.md` before finishing.

## Evidence To Capture

Capture or inspect:

- 390 px mobile
- 768 px tablet
- 1440 px desktop
- current route or primary flow
- hover/focus/selected states when possible
- empty/loading/error states when present

If screenshots are unavailable, state the blocker and lower confidence.

## Review Checklist

Purpose:

- primary object visible in first viewport
- primary action attached to that object
- secondary content does not compete

Identity:

- visual identity fits current project type
- Visual Concept Gate was completed for visual-heavy work
- inspiration references were reconstructed by composition/focal object/hidden information, not flattened into style traits
- palette is not copied from a golden app
- app-specific evidence is marked as evidence only

Interaction:

- clickable/passive roles are distinct
- one primary action per zone
- focus, selected, disabled, and loading states exist

Composition:

- no container soup
- no generic dashboard unless the task is operational scanning
- no same rejected layout with new paint
- no generic app layout replacing a strong reference composition
- no accidental overlap/collision
- desktop adds actionable context for tools/workspaces: inspector, preview, comparison, table density, or source rail
- mobile has no accidental horizontal scroll

Copy:

- labels use specific verbs
- helper copy changes a decision
- claims have source, recency, or visible basis

## Output

Lead with findings ordered by severity. Each finding includes:

- severity
- screenshot/file evidence
- violated Design OS rule
- concrete fix

Then include:

- design thesis used, if applicable
- scorecard total and category scores
- whether Visual Concept Gate was required and completed
- blockers
- top 3 fixes
- verification gaps
- whether the UI was patched after review

Do not reward a UI for matching an old screenshot. Reward it for applying the right principle to the current product.
