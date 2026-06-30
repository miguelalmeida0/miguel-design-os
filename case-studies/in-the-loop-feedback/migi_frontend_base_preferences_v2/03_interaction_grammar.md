# 03 — Interaction Grammar

A recurring problem: users cannot tell what is clickable. This file defines a universal interaction grammar.

## Component roles must be visually distinct

### Primary Action
Use for the main action on the screen.

Examples:
- Send
- Save
- Open
- Run
- Create
- Confirm

Visual requirements:
- strong fill or unmistakable emphasis
- high contrast
- clear hover/active/focus states
- not confused with status tags

### Secondary Action
Use for alternative or support actions.

Examples:
- Customize
- Deal again
- More
- Change
- Add place

Visual requirements:
- lighter than primary
- still clearly clickable
- outlined or tinted surface
- consistent hover/focus behavior

### Tertiary Action / Text Link
Use for low-priority actions.

Examples:
- Edit details
- Undo
- View all
- Learn more

Visual requirements:
- visible but quiet
- not invisible
- clear hover/focus state

### Selectable Chip / Toggle / Filter
Use for choices or filters.

Examples:
- Dinner / Coffee / Hang
- Status modes
- Tabs/filters

Visual requirements:
- unselected state clearly interactive
- selected state unmistakable
- cursor/tap affordance
- not styled like passive metadata

### Passive Status Tag
Use for information only.

Examples:
- Live
- Quiet
- 3 around
- Low pressure
- Running late

Visual requirements:
- smaller
- quieter
- not button-like
- no hover behavior if non-interactive

## Hard rules

1. Passive tags must not look like buttons.
2. Buttons must not look like passive tags.
3. Selected chips must not look like error states.
4. Every visible action must work.
5. No dead buttons.
6. No modal chain unless explicitly justified.
7. Main action should be visible near the decision point.
8. Keep one primary action per zone.

## Good example

```txt
Status: 3 active                passive metadata
Filters: All / Live / Past      selectable tabs
CTA: Open room                  primary button
More                            tertiary action
```

## Bad example

```txt
3 active / All / Open / Live / More all rendered as the same rounded pill style.
```

## Hover/pressed/focus expectations

Every interactive element needs:
- pointer cursor on desktop
- visible hover state
- visible pressed state
- visible focus ring
- accessible target size
- disabled state if applicable

## Motion expectations

Motion should clarify state, not decorate randomly.

Good motion:
- selected card lifts
- preview updates with a small snap/fade
- send action shows success state
- carousel/deck transitions smoothly

Bad motion:
- random bounce
- casino slot-machine energy
- confetti spam
- heavy glass/blur animations

