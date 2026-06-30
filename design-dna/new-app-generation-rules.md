# New App Generation Rules

Use this file before coding a new app, feature, or screen.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read relevant files in `design-dna/`.
3. Inspect the current project type, framework, routes, components, styling system, and existing tokens.
4. Define a project-specific visual identity.
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
Archetype:
Layout recipe:
Visual identity words:
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
