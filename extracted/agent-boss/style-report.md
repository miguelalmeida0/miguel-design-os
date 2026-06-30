# Agent Boss Style Report

## Product Personality

Agent Boss feels like an enterprise trust cockpit: serious, controlled, operational, and proof-oriented. It does not try to look playful. The visual confidence comes from strong hierarchy, dense information, and a clear relationship between action, proof, and risk.

## Visual System

- Canvas: quiet neutral background with high-contrast dark navigation
- Type: compact sans-serif, no negative tracking, strong page titles
- Color: navy and semantic status tones; color is used as meaning, not decoration
- Surfaces: restrained white panels with hairline borders and soft shadows
- Radius: moderate and consistent, with larger radius reserved for hero objects
- Motion: small lift/translate interactions, not decorative animation

## Hierarchy And Composition

The first viewport is organized around a dominant operational object: "Run one safe AI action." Supporting proof cards sit inside that object instead of becoming separate competing panels. The left nav is dense but stable; the main canvas has a page header, a clear get-started section, and system snapshot below.

Reusable principle: an enterprise workspace can be dense without becoming generic dashboard soup if each route has one primary operating object and the rest of the page explains evidence, state, and next action.

## Interaction Grammar

- Primary actions are filled and attached to the decision object
- Secondary actions are adjacent but quieter
- Passive pills are small, uppercase, and tone-coded
- Data rows use rails and hover movement when interactive
- Disclosure rows provide progressive detail without spraying every fact into the first view

## Responsive Behavior

The design system has explicit breakpoints:

- 12 columns on desktop
- 6 columns around tablet widths
- 2 columns on mobile

Rows and workflow summaries collapse to one column under narrow widths. Action bars wrap instead of overflowing.

## Reusable Lessons

- Build a primitive layer before building route-specific surfaces
- Use semantic tone contracts for status-heavy products
- Make proof visible near risky actions
- Use bento grids for operational variety, but keep the first viewport focused
- Use route-level navigation when the app has many durable workspaces
- Favor compact, confident copy over explanatory filler

## Do Not Globalize

Do not copy the black sidebar, navy palette, or enterprise proof language into unrelated consumer tools. The reusable lesson is not "make everything Navy Trust." The reusable lesson is disciplined primitives, semantic state, and proof-adjacent actions.

