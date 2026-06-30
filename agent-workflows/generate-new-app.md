# Workflow: Generate New App

Use this workflow when building a new frontend or application experience.

## Read First

1. `AGENTS.md`
2. `project-index.md`
3. `manual-preferences/00_global_frontend_principles.md`
4. `design-dna/new-app-generation-rules.md`
5. `design-dna/miguel-style-principles.md`
6. Relevant archetype, layout, component, copy, and responsive rules

## Product Framing

Before coding, identify:

- user
- job to be done
- primary object
- primary action
- domain seriousness
- screen archetype
- layout recipe
- visual asset need
- data/auth constraints

Ask only when a missing answer would materially change the product.

## Build

1. Follow the existing framework and code patterns if working in an existing repo.
2. Define semantic tokens before component styling.
3. Build the first screen as the actual usable experience.
4. Create component states, not just the ideal state.
5. Keep one primary action per zone.
6. Make passive metadata visually distinct from controls.
7. Add responsive behavior intentionally for mobile, tablet, and desktop.

## Verify

1. Run lint/build/tests when available.
2. Start the app.
3. Capture screenshots at 390, 768, and 1440 px.
4. Inspect screenshots for hierarchy, text clipping, overlap, broken sticky UI, and stretched desktop layouts.
5. Score with `evaluation/ui-scorecard.md`.
6. Fix the highest-impact issues and recapture changed screens.

## Delivery

Report:

- what was built
- where the key files are
- what was verified
- any known caveats

Do not claim visual quality without screenshot evidence when the app can run.

