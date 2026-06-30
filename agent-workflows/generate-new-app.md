# Workflow: Generate New App

Use when building a new app, screen, or frontend feature.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read relevant `design-dna/` files before touching UI code.
3. Inspect the current project type, framework, routes, components, styling system, and tokens.
4. Define a project-specific visual identity before choosing palette or layout.
5. Name any golden project used as evidence and what will not be copied.
6. Plan screenshots as evidence for the new work, not templates from old apps.
7. Plan to run `evaluation/ui-scorecard.md` before finishing.

## Design Intent Record

Write this before implementation:

```md
Project type:
Primary user:
Primary object:
Primary action:
Archetype:
Layout recipe:
Visual identity words:
Density:
Token direction:
Component contracts:
States:
Responsive risks:
Screenshot targets:
Score target:
```

## Implementation Order

1. Reuse existing framework and local component patterns.
2. Add or map semantic tokens first.
3. Build the primary object and primary action.
4. Add secondary context only after the main path works.
5. Implement states: empty, loading, error, disabled, selected, focus-visible.
6. Make clickable/passive roles distinct in code and visuals.
7. Add responsive behavior for 390, 768, and 1440 px.
8. Add product-specific copy and assets only when they identify the subject, show the product/object, explain state, or help inspection.

## Verification

1. Run available lint/build/tests.
2. Start the app if possible.
3. Capture 390, 768, and 1440 px screenshots.
4. Inspect for Design OS blockers.
5. Score with `evaluation/ui-scorecard.md`.
6. Fix blockers and recapture changed screens.

## Delivery

Report:

- design intent record summary
- key files changed
- screenshot paths
- scorecard result
- blockers or caveats

Do not claim the UI is Miguel-aligned without screenshot evidence and a score.
