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

## Implementation Before Art Direction

Detect:

- The agent starts coding components before defining the visual concept.
- A visual-heavy screen begins as page shell, cards, nav, and reusable components before art direction is approved.
- The implementation plan describes components but not metaphor, focal object, emotional hook, hidden information, or what is absent.

Why it fails:

It locks the product into generic component structure before the emotional/product direction is solved.

Correction:

For visual-heavy work outside Literal Target Copy Mode, first create 3 rendered art-direction prototypes with preview routes and 1440 / 768 / 390 screenshot files. Wait for Migi to approve one visual direction, then implement only that approved direction.

## Text-Only Art Direction

Detect:

- The agent gives concept names or descriptions but no rendered visuals.
- Migi is asked to approve direction from text instead of seeing composition, scale, object treatment, and mood.
- A visual-heavy gate artifact has no preview route or missing concept screenshots.

Why it fails:

Migi cannot choose a visual direction from text. Visual design requires seeing composition, scale, rhythm, object treatment, and mood.

Correction:

Create 3 actual visual prototypes and screenshot them before approval. No visual screenshots = Visual Concept Gate failed.

## Reference Flattening

Detect:

- Inspiration is reduced to shallow styling traits: dark theme, neon, glass, cards, large text, glow, gradients, or rounded panels.
- The result copies surface tokens while changing the reference's composition, focal object, or information strategy.

Why it fails:

It copies the surface but misses the design mechanism.

Correction:

Extract composition, focal object, spatial hierarchy, hidden information, emotional hook, material/texture, interaction model, and what is intentionally absent.

## Anti-pattern: Product Thinking During Literal Copy

Detect:

- Migi asked for `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`.
- The agent adds product logic, data panels, useful features, explanatory UI, alternate layouts, or design improvements.
- The result changes the supplied target's composition instead of matching the visible shell.

Why it fails:

Literal Target Copy Mode is not a product-design exercise. The request is visual parity with the supplied target, not a better or more useful product.

Correction:

When Literal Target Copy Mode is active, product logic waits. Build the pixel-parity shell first, implement only minimum visible interactions, screenshot compare against the target, and report exact differences.

## Same Layout With New Paint

Detect:

- A rejected structure is preserved while colors, scale, spacing, glow, cards, motion, or borders change.
- The visual direction changes, but the composition and information hierarchy remain the same.

Why it fails:

If the composition is wrong, styling changes are not progress.

Correction:

When Migi rejects the direction, rethink the structure from first principles. Restart at the Visual Concept Gate instead of polishing the rejected layout.

## Obvious Theme Literalism

Detect:

- An app about robots becomes dark cyber cards, neon glows, stat badges, and "fighter" language by default.
- A finance product automatically becomes a Wall Street terminal, a health product automatically becomes clinical blue, or a game-adjacent product automatically becomes neon arcade.
- The visual system feels like the first generic app-builder result for the prompt.
- Obvious examples: robot app = dark cyber cards; AI app = glowing orb; finance app = dashboard grid; social app = pastel card feed; portfolio = generic hero sections; developer tool = terminal everywhere.

Fix:

- Before designing, define a non-obvious visual metaphor.
- Ask: what would a great designer do besides the expected theme treatment?
- Use theme signals only when they support the product concept, not because the noun suggests them.

## Motion Without Purpose

Detect:

- Animation exists only to make the app feel alive.
- Movement does not clarify selection, hover, state change, transition, hierarchy, progress, spatial relationship, or user feedback.

Why it fails:

Animation is not automatically polish. Decorative motion becomes noise.

Correction:

Motion is only acceptable when it clarifies selection, hover, state change, transition, hierarchy, progress, spatial relationship, or user feedback. If motion does not clarify something, remove it.

## AI Scale Inflation

Detect:

- Giant headings, huge cards, massive containers, oversized spacing, or inflated panels are used to fake drama.
- Every object is large, so no object is actually dominant.
- First load feels physically overwhelming.

Why it fails:

The user feels attacked by scale. Big does not equal premium.

Correction:

Use controlled type scale. Make one object dominant, not every object huge. Create drama through composition, rhythm, imagery, cropping, contrast, and interaction.

## Excitement Through Clutter

Detect:

- Energy is created by adding badges, labels, stats, glows, borders, overlays, and micro-panels.
- The interface is visually busy before it is emotionally compelling.
- Decorative "cool" effects compete with the selectable object or primary action.

Fix:

- Create excitement through composition, scale, contrast, motion, selection reward, and object desire.
- Use fewer elements with more intent.
- Let one or two strong signals carry the card instead of badge soup.
- Prefer strong focal object, material, mood, pacing, progressive disclosure, and interaction reward over more labels/effects.

## Overlap / Collision

Detect:

- Badges, labels, stats, text, or controls sit on top of each other.
- Metadata and actions compete for the same zone.
- Image overlays reduce readability or collide at responsive sizes.
- A card only works at one viewport.

Fix:

- Every card needs clear zones: visual, identity, metadata, action.
- Include a state zone when status/selection/availability matters.
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
- Visual Concept Gate skipped for visual-heavy work when Literal Target Copy Mode was not requested
- visual-heavy work presents only text concepts
- Migi is asked to approve art direction without visual previews
- concept screenshots are missing
- implementation begins before visual concept approval
- inspiration flattened into shallow style traits
- Literal Target Copy Mode requested but the agent changes composition or adds unrelated product UI
- rejected layout preserved with new paint
- strong reference converted into generic components
- motion exists only as decoration
- AI scale inflation overwhelms the product
- visible UI elements overlap or collide unintentionally
- app follows the obvious genre aesthetic without a fresh thesis
- selection-first product creates excitement mainly through badges/glows/stats instead of desire and interaction reward
- selection-first product opens as a beige catalog, brochure, dashboard, dense terminal, or obvious genre cliche before creating desire
- mobile screenshot has accidental horizontal scroll
- desktop screenshot is stretched mobile for a non-editorial app
- data claims are unsupported
- no scorecard result
