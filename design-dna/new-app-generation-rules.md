# New App Generation Rules

Use this file before coding a new app, feature, or screen.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read relevant files in `design-dna/`.
3. Inspect the current project type, framework, routes, components, styling system, and existing tokens.
4. Define a project-specific visual identity and a non-obvious visual thesis.
5. State which source project is relevant evidence and what will not be copied.
6. Plan fresh screenshots for the new UI; old captures are evidence, not templates.
7. Plan to run `evaluation/ui-scorecard.md` before finishing.

## Design Intent Record

Write this before implementation:

```md
Project type:
Primary user:
Primary object:
Primary action:
Selection-first product?:
Archetype:
Layout recipe:
Visual identity words:
Non-obvious visual thesis:
Obvious genre route to avoid:
Density:
Token direction:
Components needed:
States needed:
Responsive risks:
Screenshots to capture:
Target score:
```

## Build Order

1. Implement or update semantic tokens.
2. Build the page shell/navigation behavior.
3. Build the primary object and its primary action.
4. Add secondary context only after the primary object works.
5. Add component states: empty, loading, error, disabled, selected, focus-visible.
6. Add responsive behavior for 390, 768, and 1440 px.
7. Add copy that names actions, states, and consequences.
8. Add visual assets only when they identify the subject, show the product/object, explain state, or help the user inspect something.

## Selection-First Gate

Use this gate when the product's core loop is selection, browsing, collecting, gallery exploration, roster choice, or object discovery.

Before building:

- set `Selection-first product?: yes` in the Design Intent Record
- choose the Selection Roster archetype or explain why another archetype fits better
- define what makes each selectable object desirable and distinct
- name the obvious genre treatment you are rejecting
- define card zones for visual, identity, metadata, and action
- define hover and selected rewards before styling the card grid
- decide what details stay hidden until after selection

Build:

- first screen creates a "which one do I pick?" moment
- objects are image-led or visually dominant enough to carry desire
- cards expose class, tier, rarity, vibe, role, power, or personality only when those signals clarify desire
- cards avoid accidental overlap and prove clear zones at 390 / 768 / 1440
- selected state feels committed, not just bordered
- detail view feels like a loadout, forge, inspector, or comparison surface, not a product brochure

Do not:

- start with explanation
- start with dense stats, meters, tabs, or technical analysis
- ship clean but boring catalog grids
- use beige/product-listing styling when the product needs energy
- copy game UI universally; apply this only to selection-first products
- default to predictable dark cyber, neon, fighter, stat-badge, or genre-cliche styling
- create excitement through badge/glow/stat overload
- allow text, badges, stats, or controls to collide

Robot Skill Forge evidence: see `design-dna/rejected-directions.md`.

## Visual Identity Rules

Do:

- derive palette, type scale, density, radius, shadows, and motion from the current product
- use semantic tokens
- write down why the identity fits

Do not:

- reuse a source project's palette
- copy a screenshot layout literally
- use In The Loop warmth unless the product is a social coordination tool
- use generic AI/SaaS gradients or dashboard cards as default
- make a selection-first product feel like a beige catalog, product brochure, dense terminal, or obvious genre cliche before the user chooses
- take the obvious aesthetic route just because the app concept suggests it


## Obvious Theme Gate

Use for any app with a strong noun/theme, such as robotics, finance, medicine, gaming, music, sports, luxury, security, or AI.

Before styling:

- name the obvious genre route
- reject at least one predictable treatment
- define a non-obvious design thesis
- choose visuals that express the product concept, not just the theme noun

Do not:

- assume robotics means dark cyber UI, neon cards, stat badges, grids, and fighter language
- assume AI means glow, blobs, magic copy, or fake intelligence animation
- assume finance means a copied market terminal
- mistake theme decoration for product concept

## Verification Gate

Before final delivery:

1. Run available lint/build/tests.
2. Start the app if possible.
3. Capture 390, 768, and 1440 px screenshots.
4. Inspect screenshots for blockers in `responsive-rules.md` and `anti-patterns.md`.
5. Score with `evaluation/ui-scorecard.md`.
6. Fix blockers and recapture changed screens.
7. Report score, screenshots, and known gaps.

If the app cannot run, document the command, error, and best alternative evidence.
