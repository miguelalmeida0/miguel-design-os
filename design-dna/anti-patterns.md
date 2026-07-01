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

## Obvious Theme Literalism

Detect:

- An app about robots becomes dark cyber cards, neon glows, stat badges, and "fighter" language by default.
- A finance product automatically becomes a Wall Street terminal, a health product automatically becomes clinical blue, or a game-adjacent product automatically becomes neon arcade.
- The visual system feels like the first generic app-builder result for the prompt.

Fix:

- Before designing, define a non-obvious visual metaphor.
- Ask: what would a great designer do besides the expected theme treatment?
- Use theme signals only when they support the product concept, not because the noun suggests them.

## Excitement Through Clutter

Detect:

- Energy is created by adding badges, labels, stats, glows, borders, overlays, and micro-panels.
- The interface is visually busy before it is emotionally compelling.
- Decorative "cool" effects compete with the selectable object or primary action.

Fix:

- Create excitement through composition, scale, contrast, motion, selection reward, and object desire.
- Use fewer elements with more intent.
- Let one or two strong signals carry the card instead of badge soup.

## Overlapping Card Content

Detect:

- Badges, labels, stats, text, or controls sit on top of each other.
- Metadata and actions compete for the same zone.
- Image overlays reduce readability or collide at responsive sizes.
- A card only works at one viewport.

Fix:

- Every card needs clear zones: visual, identity, metadata, action.
- Test at 390 / 768 / 1440.
- No accidental collision is acceptable.
- Only use deliberate overlap when it is readable, necessary, and proven responsive.

## Prompt-Generated Genre Default

Detect:

- The UI looks like the first output from a generic app builder after giving it the theme.
- The design follows genre cliches instead of a product thesis.
- It mistakes theme decoration for product concept.

Fix:

- Reject the first obvious genre treatment.
- Produce at least one design thesis that reframes the product.
- Name the obvious route you are avoiding before choosing palette, layout, language, or effects.

## Selection Catalog When Product Needs Desire

Detect:

- The product's core loop is selection, browsing, collecting, gallery exploration, roster choice, or object discovery.
- The first screen organizes objects cleanly but does not make users want to choose, click, compare, or collect.
- Cards look like product listings instead of selectable characters, tools, artifacts, places, or objects.
- Hover and selected states are flat, passive, or purely informational.
- Dense specs, tiny stat rows, product-brochure copy, or technical analysis appear before desire is established.

Fix:

- Turn the first screen into a selection moment, not an information page.
- Make selectable objects visually distinct through image scale, silhouette, rarity/class/tier/vibe labels, personality, role, power, or object-specific traits.
- Give hover and selected states a visible reward: scale, glow, reveal, animation, sound-safe visual feedback, loadout preview, comparison tray, or committed selected panel.
- Use progressive disclosure: excitement first, details second.
- Move dense specs and analysis behind selection, drawer, detail view, comparison mode, or loadout/inspector.

Robot Skill Forge evidence: see `design-dna/rejected-directions.md` for the rejected beige catalog direction.

## Terminal / Newspaper Overload For Selection Products

Detect:

- A selection-first product shows dense terminal panels, newspaper-like information blocks, stats, badges, meters, tabs, and labels before the user chooses an object.
- Dark robotics or AI-terminal styling is used as a generic mood instead of creating desire to pick an object.
- Background grid/cross-line texture reads as generic AI atmosphere.

Fix:

- Start with the selectable objects and the emotional reason to choose among them.
- Put stats, meters, tabs, and technical diagnostics after selection.
- Replace generic terminal mood with object-specific personality, class, rarity, role, or collection logic.

Robot Skill Forge evidence: see `design-dna/rejected-directions.md` for the rejected terminal/newspaper direction.

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
- visible UI elements overlap or collide unintentionally
- app follows the obvious genre aesthetic without a fresh thesis
- selection-first product creates excitement mainly through badges/glows/stats instead of desire and interaction reward
- selection-first product opens as a beige catalog, brochure, dashboard, dense terminal, or obvious genre cliche before creating desire
- mobile screenshot has accidental horizontal scroll
- desktop screenshot is stretched mobile for a non-editorial app
- data claims are unsupported
- no scorecard result
