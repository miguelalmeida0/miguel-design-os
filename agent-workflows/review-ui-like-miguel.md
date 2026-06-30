# Workflow: Review UI Like Miguel

Use for UI critique, QA, or design review.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read relevant `design-dna/` files before judging the UI.
3. Inspect the current project type, user, primary object, primary action, framework, and styling system.
4. Define the project-specific visual identity from the product, not from a source app.
5. Identify any source-project evidence used and reject literal copying as a review goal; do not copy old apps literally.
6. Capture or request screenshots; old Design OS captures are evidence, not templates.
7. Score with `evaluation/ui-scorecard.md` before finishing.

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
- palette is not copied from a golden app
- app-specific evidence is marked as evidence only

Interaction:

- clickable/passive roles are distinct
- one primary action per zone
- focus, selected, disabled, and loading states exist

Composition:

- no container soup
- no generic dashboard unless the task is operational scanning
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

- scorecard total and category scores
- blockers
- top 3 fixes
- verification gaps

Do not reward a UI for matching an old screenshot. Reward it for applying the right principle to the current product.
