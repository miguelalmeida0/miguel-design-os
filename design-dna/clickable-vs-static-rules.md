# Clickable Vs Static Rules

This file exists because many weak UIs fail by making passive information look interactive, or real actions look passive.

## Interaction Roles

Every element must have one clear role:

- Action: performs a command.
- Navigation: changes route or screen.
- Selection: changes the current object or mode.
- Filter: changes what is visible.
- Input: accepts user data.
- Status: reports state.
- Metadata: describes an object.
- Decoration: supports atmosphere only.

Do not let one visual style serve all roles.

## Clickable Elements Must Have

- pointer behavior where appropriate
- keyboard focus when reachable
- hover/focus/pressed states
- visible disabled state
- accessible name
- state indicator when selected or active

Examples:

- button
- link
- menu item
- tab
- segmented control item
- filter chip
- row with explicit selection behavior

## Static Elements Must Not Pretend To Click

Passive labels should not have hover lift, pointer cursor, strong button-like borders, or command-style copy.

Examples:

- status tags
- metric labels
- timestamps
- source labels
- role badges
- category labels

## Visual Distinction Checklist

Before shipping, inspect the screen and ask:

1. Can I identify every clickable item without moving the cursor?
2. Can I identify every selected item?
3. Are passive tags calmer than filter chips?
4. Is the primary action visually stronger than all secondary actions?
5. Do table rows only look clickable when they actually select or navigate?
6. Does focus-visible work for keyboard users?

## State Rules

Hover:

- Use for clickable elements only.
- Should confirm affordance, not create layout shift.

Focus:

- Must be visible and high contrast.
- Should not rely on color alone.

Pressed:

- Should give immediate physical feedback.

Selected:

- Must be persistent and distinct from hover.

Disabled:

- Must remain readable.
- Should explain why if the reason is not obvious.

Loading:

- Should preserve size.
- Should prevent duplicate action when needed.

## Copy Rules For Actions

Use verbs:

- "Create plan"
- "Run check"
- "Copy rewrite"
- "Add to watchlist"

Avoid vague labels:

- "Submit"
- "Continue" when destination is unclear
- "Learn more" for core product actions
- "Try it" when the actual action is specific

