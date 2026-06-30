# Anti-Patterns

Use this file as a defect list. If one of these appears in screenshots or code, fix it before delivery or document the product constraint that requires it.

## Palette Cloning

Detect:

- New app uses a source project's palette without a product-specific reason.
- Tokens are named after colors instead of roles, such as `navyCard`, `creamBg`, or `purpleGlow`.

Fix:

- Define semantic tokens first.
- Choose colors from the current product's domain, audience, and risk level.
- State what source-project palette you are explicitly not copying.

## Generic Dashboard

Detect:

- First viewport is a grid of generic stat cards.
- Page title is "Dashboard" or "Overview" but the user's next action is unclear.
- Charts exist without a decision they support.

Fix:

- Replace the stat grid with the primary object plus its next action.
- Keep metrics only if they change prioritization, trust, or decision-making.

## Container Soup

Detect:

- Three or more nested rounded/bordered containers in a primary zone.
- Every section is a card, including page shell, hero, nav, and repeated items.
- Borders are doing the work that spacing and hierarchy should do.

Fix:

- Remove one wrapper layer.
- Convert page-level containers to bands, rails, split panes, or direct layout.
- Reserve cards for repeated objects, tools, and modals.

## CTA Soup

Detect:

- More than one same-weight filled button in a zone.
- A modal, card, or hero contains primary, secondary, and tertiary actions that look equal.

Fix:

- Keep one primary action.
- Move secondary actions to outline/ghost/text/icon/menu treatments.
- Put destructive actions in a separate confirmation zone.

## Chip Soup

Detect:

- Pills are used for filters, statuses, nav tabs, metrics, categories, and actions.
- Passive tags have pointer cursor or hover styles.

Fix:

- Assign role-specific components: `StatusTag`, `FilterChip`, `Tab`, `Button`, `MetadataLabel`.
- Give only interactive chips selected/hover/focus states.

## In-The-Loop Overfit

Detect:

- New apps inherit warm social copy, avatars, invite mechanics, bottom nav, or playful planning language when they are not social planning products.

Fix:

- Treat the case study as failure-mode evidence only.
- Keep consumer planning patterns only when the current project coordinates people, time, places, or invitations.

## App-Specific Evidence Used As Global Law

Detect:

- "Use terminal dark UI" because Equity did.
- "Use bottom nav" because Ontime did.
- "Use portrait media" because Portfolio did.
- "Use dense navy shell" because Agent Boss did.
- "Use cinematic AI gradients" because Ghostwritter did.

Fix:

- Translate the source project into a principle, such as "data products need source/recency and numeric alignment."
- Apply the principle with a new visual identity.

## Fake Form Energy

Detect:

- A fast creation flow starts with a long form before value is visible.
- Labels and helper text repeat obvious instructions.

Fix:

- Start with the minimum input needed to produce the first result.
- Use defaults, segmented controls, inline pickers, and progressive disclosure.
- Show preview/result as soon as possible.

## Data Theater

Detect:

- "Live", "validated", "safe", "optimized", confidence, or performance claims have no source, timestamp, or fallback.
- Empty states pretend data exists.

Fix:

- Add recency/source/status labels.
- Label mock/sample data.
- Provide loading, empty, and error states.

## Stretched Mobile Desktop

Detect:

- Desktop is a centered mobile column for a tool that needs comparison, inspection, or context.
- Buttons become very wide on desktop without adding value.

Fix:

- Add a side rail, inspector, preview, comparison column, or denser table where the product benefits from context.
- Keep editorial pages narrow only when reading is the primary task.

## Decorative Motion

Detect:

- Animation does not communicate route change, generated output, filter state, loading, selection, or feedback.

Fix:

- Remove it or tie it to state.
- Keep dense reading/data surfaces still.

## Final Blocker List

Do not finish while any are true:

- main object unclear
- primary action hidden or competing
- passive metadata looks clickable
- source-project palette copied literally
- mobile screenshot has accidental horizontal scroll
- desktop screenshot is stretched mobile for a non-editorial app
- data claims are unsupported
- no scorecard result
