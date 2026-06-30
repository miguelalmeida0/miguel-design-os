# Responsive Rules

Responsive design in this repo means each breakpoint has a deliberate composition, not merely fluid widths.

## Required Capture Widths

For new apps and UI reviews, capture:

- mobile: 390 px wide
- tablet: 768 px wide
- desktop: 1440 px wide

Use full-page screenshots where page length matters. Use viewport screenshots where app shells or fixed dashboards are the target.

## Mobile Rules

At 390 px:

- Put the main object before secondary context.
- Use one dominant action per zone.
- Avoid horizontal scroll except for intentional data tables or carousels.
- Keep sticky bars clear of safe areas.
- Keep tap targets at least 44 px where practical.
- Make labels wrap cleanly without clipping.
- Avoid tiny multi-column grids.

## Tablet Rules

At 768 px:

- Do not leave the layout in awkward mobile stretch.
- Use two columns only when both columns have enough room.
- Preserve reading rhythm.
- Let secondary context appear earlier than mobile.
- Watch for nav collisions and half-broken desktop shells.

## Desktop Rules

At 1440 px:

- Use the available width for context, comparison, inspectors, previews, or richer composition.
- Do not stretch mobile CTAs across huge widths.
- Avoid single narrow columns unless the product is intentionally editorial.
- Keep line lengths readable.
- Align dense data with consistent columns.

## Fixed And Sticky UI

Rules:

- Reserve space for bottom navs, sticky CTAs, and floating controls.
- Test fixed headers with long content.
- Ensure drawers/modals fit on short screens.
- Do not let sticky elements hide form fields or primary actions.

## Text And Containers

Rules:

- Use `min-width: 0` in flex/grid children that contain text.
- Prefer responsive constraints over viewport-scaled font sizes.
- Do not use negative letter spacing.
- Let long labels wrap or shorten them.
- Use stable dimensions for toolbars, boards, tiles, counters, and icon buttons.

## Data On Small Screens

Rules:

- Collapse comparison grids into prioritized stacks.
- Keep tables as tables only when comparison matters.
- Use horizontal scroll for dense financial/operational data only when clearly intentional.
- Preserve source, time, and status context.

## Media

Rules:

- Use meaningful focal points.
- Test object-fit crops at all widths.
- Avoid dark, blurred, or atmospheric images when inspection matters.
- Provide dimensions or aspect-ratio to prevent layout shift.

## Proof Standard

Do not claim a UI is responsive until screenshots have been captured and inspected at 390, 768, and 1440 px.

