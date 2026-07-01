# New App Generation Rules

Use this file before coding a new app, feature, or screen.

## Task Classification

Classify before work:

- bug fix
- technical refactor
- visual-heavy UI
- new app
- redesign
- selection/gallery/roster/product-discovery experience
- literal target copy
- dogfood target

Small bug fixes, security patches, copy edits, and purely technical refactors do not require the Visual Concept Gate unless they change a visually important UI direction.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read `system.md` and `design-system.json`.
3. Read relevant `rules/*.md`, `skills/*/SKILL.md`, and `design-dna/*.md`.
4. Classify the task.
5. Inspect the current project type, framework, routes, components, styling system, and existing tokens.
6. If Literal Target Copy Mode is active, skip the Visual Concept Gate and build only the target-parity shell.
7. If visual-heavy, run Visual Concept Gate v2 before implementation: 3 rendered concept prototypes, screenshots, and approval.
8. Define a project-specific visual identity and a non-obvious visual thesis.
9. State which source project is relevant evidence and what will not be copied.
10. Plan fresh screenshots for the new UI; old captures are evidence, not templates.
11. Plan to run `evaluation/ui-scorecard.md` before finishing.
12. If the project is a Miguel Design OS dogfood target, state what rule/tool/prompt is being tested before coding and commit to translating every target-app failure back into a Design OS patch or named open gap.
13. State product purpose clarity before implementation: what this app is, what it tests in Miguel Design OS, which rules are being validated, and what success/failure teaches the master system.

## Design Intent Record

Write this before implementation:

```md
Project type:
Task classification:
Primary user:
Primary object:
Primary action:
Visual-heavy work?:
Inspiration/reference provided?:
Selected skill/playbook:
Selection-first product?:
Archetype:
Layout recipe:
Visual identity words:
Visual Concept Gate status:
Selected rendered concept:
Concept preview screenshots:
Non-obvious visual thesis:
Obvious genre route to avoid:
Density:
Token direction:
Components needed:
States needed:
Responsive risks:
Screenshots to capture:
Target score:
Dogfood target?:
Design OS rules under test:
What this app tests in Miguel Design OS:
Success/failure learning:
Core loop:
Core loop proof plan:
Persistence across route changes:
Persistence across refresh:
Persistence across browser reopen:
UI persistence disclosure:
```

## Dogfood Target Rule

Use when a project is created to test Miguel Design OS itself.

Every target-app failure must be translated back into one of:

- a Design OS rule update
- a CLI/tool validation update
- a prompt-template update
- a skill/agent instruction update
- a schema/checklist update
- an explicit open gap with owner and next test

Do not treat dogfood target bugs as isolated product bugs. The target app is the test rig for Miguel Design OS.

## Product Purpose Clarity

Before building a new project, state:

- what this app is
- what it tests in Miguel Design OS
- which Design OS rules are being validated
- what success teaches the master system
- what failure teaches the master system

If the user cannot tell why the target exists in relation to Miguel Design OS, stop and clarify the purpose before continuing.

## Core Loop Proof Rule

If the product's main loop is `upload -> classify -> generate output`, final handoff is blocked unless that loop is manually verified and documented.

The proof must name:

- input used
- classification result shown
- generated output shown
- route/screen where the output appears
- screenshots or blocked screenshot report
- remaining mismatch, if any

This also applies to equivalent loops such as import -> analyze -> recommend, select -> configure -> output, or capture -> summarize -> export.

## Persistence Truth Rule

If user-generated data is part of the product promise, specify whether it persists across:

- route changes
- refresh
- browser reopen

If persistence is local-only, session-only, mock-only, or not guaranteed, the UI must say so. Do not imply durable memory when the app stores only component state or temporary browser state.

State mismatch blocker: if the UI count says `0` while uploaded or user-generated data exists, max score is 40.

## No Parallel-Product Drift

When the current goal is dogfooding rules against a target app, do not build a second control app, Studio feature, dashboard, or surrounding tool instead of evaluating the target. Tooling patches are allowed only when they directly address a target-app failure.

## Visual Concept Gate v2 - Visual Concepts Required

Applies to every new app, major screen, redesign, selection-first product, gallery, roster, visual-heavy interface, or project with inspiration images unless Migi explicitly requests Literal Target Copy Mode.

Do not implement immediately.

First produce exactly 3 visually rendered concept prototypes:

1. Safe expected direction.
2. More original/art-directed direction.
3. Wild but controlled direction.

For each concept include:

- rendered preview route or prototype route
- screenshot files at 1440 / 768 / 390 for the gate to pass
- short explanation
- visual metaphor
- first-screen composition visible in the preview
- focal object
- interaction concept
- typography/scale direction
- color/material direction
- emotional hook
- hidden information
- absent elements
- why it avoids obvious app/theme cliches
- why it creates desire
- how it works at 1440 / 768 / 390
- what would make it fail

Then stop and wait for Migi to review the visuals. Only after Migi approves one rendered concept may implementation begin.

Text-only concepts do not satisfy the gate. No visual screenshots = Visual Concept Gate failed.

## Inspiration Handling

Use when Migi provides inspiration images, screenshots, references, or a strong visual target.

1. Store files under `docs/inspiration/[project]/` when practical.
2. Create or update `docs/inspiration-analysis.md`.
3. Extract composition, focal object, hierarchy, hidden information, absent elements, emotional hook, material/texture, atmosphere, and interaction model.
4. List what to copy, what to avoid, and what to translate.
5. Explain in the final handoff how the implementation used the inspiration without copying it literally, unless Literal Target Copy Mode was explicitly requested.

Do not extract shallow traits only. Dark, neon, cards, glass, glow, gradients, rounded panels, and big text are not a design concept.

## Literal Target Copy Mode

Use when Migi says:

- `copy this exact UI`
- `100% this design`
- `literally what you see`
- `exact visual target`

This mode overrides product thinking.

Do not:

- run the 3-concept gate
- invent new art direction
- expand product features
- run a usefulness pass
- add extra panels
- add extra explanation
- improve the target
- reinterpret the target

The only goal is visual parity with the supplied target.

Required sequence:

1. Identify the target screens.
2. Reconstruct the visible composition.
3. Exclude browser chrome, editor UI, and watermark artifacts.
4. Build the static shell first.
5. Implement only minimum visible interactions.
6. Capture comparison screenshots.
7. Report exact differences.

Product logic waits until the pixel-parity shell is approved.

## Visual Target Reconstruction Mode

Use when Migi provides inspiration images, screenshots, or a strong visual target.

If Literal Target Copy Mode is active, do not translate the reference into new concepts. Copy the visible composition first and report differences.

First analyze:

- composition
- focal object
- information hierarchy
- what is hidden
- what is absent
- emotional hook
- material/texture
- atmosphere
- interaction model
- why the reference creates desire

Then produce:

1. reference analysis
2. 3 rendered art-direction concept prototypes with viewport screenshots
3. approval checkpoint
4. visual shell prototype
5. screenshots
6. comparison against the chosen concept/reference
7. patch loop
8. product logic only after the visual shell works

If a reference shows a cinematic stage, do not build a dashboard. If a reference shows one dominant object, do not build a grid. If a reference hides information, do not expose stats. If a reference is art-directed, do not answer with generic components.

## Build Order

1. Implement only the approved rendered direction when the Visual Concept Gate applies, or only the supplied target when Literal Target Copy Mode applies.
2. Build a visual shell/poster composition before feature depth.
3. Implement or update semantic tokens.
4. Build the primary object and its primary action.
5. Add secondary context only after the primary object works.
6. Add component states: empty, loading, error, disabled, selected, focus-visible.
7. Add responsive behavior for 390, 768, and 1440 px.
8. Add copy that names actions, states, and consequences.
9. Add product logic only after the visual shell works.
10. Verify the core loop and persistence contract before final handoff.

## Selection-First Gate

Use this gate when the product's core loop is selection, browsing, collecting, gallery exploration, roster choice, or object discovery.

Before building:

- set `Selection-first product?: yes` in the Design Intent Record
- choose the Selection Roster archetype or explain why another archetype fits better
- define what makes each selectable object desirable and distinct
- name the obvious genre treatment you are rejecting
- define card zones for visual, identity, metadata, and action
- define hover and selected rewards before styling the card grid
- decide what details stay hidden until after selection

Build:

- first screen creates a "which one do I pick?" moment
- objects are image-led or visually dominant enough to carry desire
- cards expose class, tier, rarity, vibe, role, power, or personality only when those signals clarify desire
- cards avoid accidental overlap and prove clear zones at 390 / 768 / 1440
- selected state feels committed, not just bordered
- detail view feels like a loadout, forge, inspector, or comparison surface, not a product brochure

Do not:

- start with explanation
- start with dense stats, meters, tabs, or technical analysis
- ship clean but boring catalog grids
- use beige/product-listing styling when the product needs energy
- copy game UI universally; apply this only to selection-first products
- default to predictable dark cyber, neon, fighter, stat-badge, or genre-cliche styling
- create excitement through badge/glow/stat overload
- allow text, badges, stats, or controls to collide
- preserve a rejected layout with new paint

Robot Skill Forge evidence: see `design-dna/rejected-directions.md`.

## Visual Identity Rules

Do:

- derive palette, type scale, density, radius, shadows, and motion from the current product
- use semantic tokens
- write down why the identity fits

Do not:

- reuse a source project's palette
- copy a screenshot layout literally unless Migi explicitly requested Literal Target Copy Mode for that supplied target
- use In The Loop warmth unless the product is a social coordination tool
- use generic AI/SaaS gradients or dashboard cards as default
- make a selection-first product feel like a beige catalog, product brochure, dense terminal, or obvious genre cliche before the user chooses
- take the obvious aesthetic route just because the app concept suggests it
- implement visually important UI before the Visual Concept Gate is approved with rendered concepts and screenshots, unless Literal Target Copy Mode is active


## Obvious Theme Gate

Use for any app with a strong noun/theme, such as robotics, finance, medicine, gaming, music, sports, luxury, security, or AI.

Before styling:

- name the obvious genre route
- reject at least one predictable treatment
- define a non-obvious design thesis
- choose visuals that express the product concept, not just the theme noun

Do not:

- assume robotics means dark cyber UI, neon cards, stat badges, grids, and fighter language
- assume AI means glow, blobs, magic copy, or fake intelligence animation
- assume finance means a copied market terminal
- mistake theme decoration for product concept

## Verification Gate

Before final delivery:

1. Run available lint/build/tests.
2. Start the app if possible.
3. Capture 390, 768, and 1440 px screenshots.
4. Run lightweight scripts when practical: `scripts/check-horizontal-scroll.mjs`, `scripts/check-overlap.mjs`, `scripts/check-scale-inflation.mjs`, and `scripts/generate-design-report.mjs`.
5. Inspect screenshots for blockers in `responsive-rules.md`, `rules/*.md`, and `anti-patterns.md`.
6. Score with `evaluation/ui-scorecard.md`.
7. Fix blockers and recapture changed screens.
8. Verify and document core product loop proof when applicable.
9. Verify and document persistence truth for user-generated data.
10. For dogfood targets, document what target failures patch in Miguel Design OS.
11. Report score, screenshots, and known gaps.

If the app cannot run, document the command, error, and best alternative evidence.

## Required Handoff

```md
Approved rendered concept:
Files changed:
Screenshots:
Scorecard result:
Core loop proof:
Persistence truth:
Dogfood learning:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
