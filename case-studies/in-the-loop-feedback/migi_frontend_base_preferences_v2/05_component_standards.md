# 05 — Component Standards

These are implementation-quality standards for reusable frontend components.

## Tokens

Use semantic tokens instead of raw one-off classes.

Recommended categories:
- color.background
- color.surface
- color.surfaceElevated
- color.text
- color.textMuted
- color.primary
- color.secondary
- color.success
- color.warning
- color.danger
- color.border
- radius.sm/md/lg/xl/full
- shadow.sm/md/lg
- spacing scale
- typography scale

Do not hardcode a universal palette.
Each project can map tokens to its own palette.

## Button system

Create variants:
- primary
- secondary
- tertiary
- ghost
- icon
- danger

For each define:
- default
- hover
- active
- focus
- disabled
- loading

Desktop primary CTAs should usually be content-sized, not stretched, unless the layout intentionally calls for it.

## Chip system

Separate:
- selectable chip
- filter tab
- passive tag
- status badge
- counter badge

Do not use one Chip component for everything unless variants make roles visually distinct.

## Cards / Surfaces

Cards should exist for hierarchy, not as default wrappers.

Before adding a card, ask:
- Does this need a separate surface?
- Can spacing/typography solve it?
- Does the card create another equal-weight block?

## Image / Avatar component

Requirements:
- support object-fit modes
- support object-position / focal point
- avoid face cutoffs
- stable fallback
- no random changes per render
- avoid white frames unless explicitly part of the design

## Modals / Sheets

Modals should be for focused tasks.

Rules:
- no modal chains
- no overexposed settings
- one primary action
- clear close affordance
- focus trap
- escape to close
- mobile-friendly sheet version

## Navigation

Bottom/global nav must:
- never overlap primary content
- respect safe areas
- have clear active state
- not use ambiguous labels

## Empty states

Empty states should:
- guide the next action
- be visually light
- avoid giant blank cards
- avoid generic “No data found” copy

## Loading states

Avoid weird full-screen “Preparing your screen” unless it is truly needed.
Use skeletons or route-local loading where possible.

