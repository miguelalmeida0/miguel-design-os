# selection-first-products

## Name

selection-first-products

## Description

Design and review products where the core loop is choosing, browsing, collecting, comparing, or opening one object from a set.

## Use When

- Gallery.
- Roster.
- Marketplace.
- Discovery interface.
- Card deck.
- Character selection.
- Product/object browsing.
- Template picker, robot selector, model chooser, portfolio gallery, or item catalog where desire matters.

## Do Not Use When

- The primary task is editing one object after selection.
- The screen is an operational dashboard where urgency matters more than desire.
- The task is a minor bug fix or copy edit.

## Required Inputs

- Primary selectable object.
- Desired post-selection action.
- Object attributes that create desire.
- Existing card/list/gallery patterns, if any.
- Rejected directions, if any.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/screen-archetypes.md`
- `design-dna/layout-recipes.md`
- `design-dna/rejected-directions.md`
- `evaluation/ui-scorecard.md`

## Workflow

1. Define why the selectable objects are desirable.
2. Make the first screen create desire before details.
3. Make objects visually distinct enough to compare, choose, or collect.
4. Avoid boring catalog grids when the product needs energy.
5. Do not expose dense stats, meters, tabs, or technical analysis before selection.
6. Use progressive disclosure after choice.
7. Define hover and selected-state rewards before styling cards.
8. Make the detail view feel like the product world, not a brochure.
9. Verify `390 / 768 / 1440` layouts if screenshots exist or the app can run.

## Stop Conditions

- Stop if the first screen does not create a "which one do I choose?" moment.
- Stop if cards feel passive.
- Stop if details overwhelm desire before selection.
- Stop if selected state is only a border or color change and selection is central.

## Output Contract

```md
Selection-first object:
Desire mechanism:
First-screen choice moment:
Hidden until after selection:
Hover reward:
Selected reward:
Detail view model:
Screenshots/evidence:
Blockers:
```

## Scorecard Blockers

- Selection-first app without desire-to-click: max score 7.
- First-screen information wall: max score 7.
- Excitement created mainly through badges/glows/stats: max score 7.
- Clickable/passive ambiguity: max score 7.

## Safety/Scope Rules

- Do not make every app game-like.
- Do not force Robot Skill Forge's direction onto unrelated products.
- Do not use fake rarity, power, or live labels unless the product truth supports them.
- Do not hide information required for safety, pricing, consent, or critical decisions.
