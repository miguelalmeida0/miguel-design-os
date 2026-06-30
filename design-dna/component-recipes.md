# Component Recipes

Use these recipes as starting points, then adapt tone, density, and styling to the product.

## Button System

Purpose: make action hierarchy instantly legible.

Required variants:

- Primary: one per zone, strongest fill or contrast.
- Secondary: visible but quieter, often outline or tinted surface.
- Tertiary: text or ghost style for lower-risk actions.
- Icon: compact tool actions, with tooltip when meaning is not obvious.
- Danger: destructive or high-risk, never reused for marketing emphasis.

Rules:

- Buttons must have hover, focus-visible, active, disabled, and loading states.
- Labels should be verbs or verb phrases.
- Do not use pill status styling for buttons.
- On desktop, avoid full-width buttons unless the surrounding layout demands it.

## Passive Tag

Purpose: label metadata, status, category, or source.

Rules:

- No hover lift.
- No pointer cursor unless it filters or navigates.
- Use smaller type and calmer contrast than buttons.
- Pair status color with text, icon, or semantic placement.

## Filter Chip Or Segmented Control

Purpose: let users change a view.

Rules:

- Must show selected, hover, focus, and disabled states.
- Use segmented controls for mutually exclusive options.
- Use filter chips for additive filters.
- Keep labels short and scannable.

## Page Shell

Purpose: establish app identity and navigation behavior.

Common ingredients:

- persistent app/header region
- contextual nav or breadcrumbs
- main content with clear max-width or grid
- responsive safe-area padding
- status or account controls where relevant

Rules:

- Do not wrap the whole page in a decorative card.
- Let the shell match product density: enterprise can be denser than editorial pages.

## Hero Object

Purpose: show the screen's main object.

Examples:

- portfolio portrait and name
- current draft and rewrite controls
- current stock and market signals
- current meetup or plan
- current workforce/control state

Rules:

- The hero object should be inspectable, not just decorative.
- Support it with one primary action and concise context.
- On mobile, preserve the object before secondary content.

## Data Row

Purpose: support scanning, comparison, and selection.

Required anatomy:

- primary label
- secondary metadata
- key metric or state
- optional source/time
- optional action affordance

Rules:

- Align numbers consistently.
- Use tabular numerals where available.
- Make selection and row actions visually distinct.
- Avoid turning every row into a heavy card on desktop.

## Card Or Tile

Purpose: frame repeated objects or compact tools.

Rules:

- One card equals one object or decision.
- Avoid cards inside cards.
- Give the most important card stronger hierarchy.
- Use cards sparingly on editorial and hero screens.

## Drawer Or Inspector

Purpose: reveal detail without losing context.

Use for:

- evidence trails
- route details
- settings detail
- stock/company context
- generated output history
- safety explanation

Rules:

- Keep the triggering object visible when possible.
- Include a clear close affordance.
- Preserve scroll position in the source list.

## Composer And Result Pair

Purpose: handle input-to-output workflows, especially AI or creative tools.

Anatomy:

- input composer
- tone/mode controls
- primary generation action
- output preview
- playback/history or variants
- copy/export action

Rules:

- The result should feel like a first-class object, not a toast.
- Explain failures inline.
- Do not hide the original input once output appears.

## Bottom Navigation

Purpose: mobile-first navigation for apps with repeated daily use.

Rules:

- Use only when the product benefits from thumb navigation.
- Keep 3 to 5 destinations.
- Reserve safe-area padding.
- Do not combine with a competing sticky CTA unless spacing is proven in screenshots.

## Empty, Loading, And Error States

Purpose: maintain trust when data is unavailable or work is in progress.

Rules:

- Empty states should offer one next action.
- Loading states should preserve layout where possible.
- Error states should say what happened and what the user can do.
- Do not use cheerful filler copy for serious failures.

