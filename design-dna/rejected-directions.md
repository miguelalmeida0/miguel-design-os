# Rejected Directions

Use this file as negative evidence. These directions were rejected for specific products and should prevent future agents from repeating the same mistakes. Do not globalize a rejected direction beyond its stated scope.

## Robot Skill Forge Meta-Lesson: Same Layout With New Paint

Robot Skill Forge showed that Codex agents tend to preserve existing structure and make "same layout with new paint" unless explicitly forced into art-direction mode. Future agents must not mistake implementation progress for design progress.

If Migi says a UI is realities away from the inspiration, stop polishing and rethink the visual concept. Do not keep the same structure and adjust color, glow, spacing, cards, borders, or motion.

Lovable-style visual output can beat Codex when the task is art direction first. Codex must compensate by doing a visual-concept phase before implementation. Text-only concepts are not enough. Do not build the app first. Build and screenshot the poster/composition first.

Correction:

- run Visual Concept Gate v2
- produce 3 radically different rendered art-direction prototypes
- screenshot each concept at 1440 / 768 / 390 for the gate to pass
- wait for Migi to approve one visual direction after seeing the previews
- build the visual shell before feature depth
- compare screenshots against the approved concept/reference
- add product logic only after the visual shell works

## System Rejected Direction: Text-Only Visual Concept Gate

Context:

The first Visual Concept Gate allowed agents to submit 3 written theses without showing rendered concepts. That made the workflow sound disciplined while still forcing Migi to choose art direction from words.

Rejected because:

- text does not show composition, scale, rhythm, object treatment, density, or mood
- agents can describe "art direction" while preserving a generic layout
- Migi cannot approve a visual direction he cannot see
- implementation can start before the visual idea has been proven on screen

New rule:

For visual-heavy work, exactly 3 rendered concept prototypes are required before implementation. Each concept needs a preview route and screenshots at 1440 / 768 / 390 for the gate to pass. No visual screenshots = Visual Concept Gate failed.

## Robot Skill Forge v4: Obvious AI Robot App / Overlapping Character Cards

Context:

Robot Skill Forge was redesigned into a dark "choose your fighter" robot roster. The direction improved energy compared to the beige catalog version, but it still failed because it used the obvious robot-app visual route and introduced unacceptable overlapping/clutter.

Rejected because:

- UI elements overlap or sit on top of each other
- overlapping text, badges, stats, or controls is absolutely unacceptable
- the card system feels cluttered
- the design feels like an obvious AI-generated "cool robot app"
- it looks like a first Lovable/Emergent result after prompting "make a cool robot app"
- it follows the predictable robot theme route: dark background, glowing cards, badges, stats, fighter language
- it feels like generic AI slop dressed as excitement
- it lacks true out-of-the-box product/design thinking
- it mistakes theme decoration for product concept
- the interface is visually busy before it is emotionally compelling
- the cards try to create excitement through cliches instead of desire

Durable design lesson:

When the product has an obvious theme, future agents must not choose the most predictable visual language for that theme. Robotics does not automatically mean dark cyber UI, neon glows, badge soup, grids, stats, and "fighter" language. A strong frontend agent must reinterpret the theme through a fresh visual metaphor.

New global rule:

Do not take the obvious aesthetic route just because the app concept suggests it. First define a non-obvious design thesis.

New selection-first rule:

For gallery/roster/selection products, excitement must come from desire, composition, personality, and interaction reward -- not from badge overload, dark theme cliches, or decorative "cool" effects.

New layout rule:

Overlapping UI is a hard fail unless deliberately designed, readable, responsive-tested, and necessary. Text, badges, controls, and stats must not collide. Every card needs clear content zones and responsive proof.

Future agents must:

- define a non-obvious visual thesis before picking palette, language, or effects
- reject the first predictable genre treatment for strong themes
- make selection objects desirable through composition, personality, and interaction reward
- use fewer card elements with stronger intent
- reserve badges/stats for clear information architecture, not excitement filler
- test cards at 390 / 768 / 1440 before accepting the layout
- treat accidental overlap as a blocker, not a polish issue

Avoid:

- obvious robot-app cyber styling
- neon/glow/badge/stat overload
- "fighter" language unless the product concept truly earns it
- dark cards as the default robotics answer
- prompt-generated genre defaults
- clutter presented as energy
- overlapping labels, controls, text, or stats

Scope:

This applies globally as an anti-obvious-theme rule, and specifically to selection-first products where excitement must come from object desire rather than cliche decoration. It does not mean every app must avoid dark palettes or badges; it means those choices must be earned by a non-obvious design thesis and clean layout proof.

## Robot Skill Forge v2: Beige Catalog / No Character-Select Energy

Context:

Robot Skill Forge should feel like a premium robot character-selection experience: Pinterest robot gallery plus collectible card roster plus game character select. The rejected redesign became clean but boring.

Rejected because:

- too calm
- too beige
- too polite
- feels like a catalog, not a game roster
- robot cards do not feel collectible
- zero excitement
- zero "choose your character" energy
- detail page feels like a product brochure
- skill cards are clean but boring
- the app does not create desire to click robots
- there is no visual reward when selecting a robot
- no sense of rarity, class, power, or personality
- no playful interaction layer
- no dramatic selected state
- no game page energy
- too much whitespace without emotional payoff
- cards feel like product listings instead of characters
- the first screen does not create a "which one do I pick?" moment

Design lesson:

For apps where the core experience is selection, discovery, gallery, roster, browsing, or collecting, the first screen must create desire. It should not merely organize information cleanly.

New rule:

A selection-first app must make the selectable objects feel desirable, distinct, and rewarding to choose.

For Robot Skill Forge specifically:

The first screen is not an information page. It is a character-select moment.

Future agents must:

- make the first screen feel like choosing a character
- use collectible card energy
- make robot cards visually distinct
- create stronger robot personality per card
- use class, tier, rarity, vibe, power, or role labels
- use bigger image-led cards
- make hover and selected states feel rewarding
- use progressive disclosure: excitement first, details second
- hide dense technical analysis until after selection
- make the selected robot feel like "I picked this one"
- make the detail view feel like a forge/loadout screen, not a brochure
- create playful but premium interaction, not childish UI

Avoid:

- beige catalog pages
- product brochure detail pages
- boring clean card grids
- tiny stat rows as the main excitement
- passive cards with no emotional reward
- flat selected states
- over-politeness
- excessive calmness when the product needs energy
- treating character/robot selection like a SaaS settings page

Scope:

This is not a universal rule that every app must look like a game. It applies when the app's core experience is selection, browsing, collecting, gallery exploration, character choice, or object discovery.

## Robot Skill Forge v1: Terminal / Newspaper / AI-Slop Direction

Context:

Robot Skill Forge also rejected an earlier dense robotics-terminal/newsprint direction.

Rejected because:

- too much information visible immediately
- looks like a newspaper or dense terminal
- too many panels and containers
- top header has too many tags
- crossed-line or grid background texture feels like AI slop
- dark robotics terminal palette feels ugly and generic
- too many stats, badges, meters, tabs, and labels before the user chooses anything
- no emotional "choose your robot" moment
- concept became a dashboard instead of a fun robot-card experience

Design lesson:

When selection is the core loop, do not front-load analysis, stats, meters, dense labels, or terminal atmosphere before the user wants to pick something. Desire comes before diagnostics.

Avoid for selection-first products:

- newspaper layouts
- dense terminal panels
- generic dark robotics palettes
- crossed grid textures as atmosphere
- dashboards before selection
- stats/badges/tabs as the first emotional hook
