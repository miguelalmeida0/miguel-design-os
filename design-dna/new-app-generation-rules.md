# New App Generation Rules

Future agents should read this before building any new frontend in this repo.

## Required Read Order

1. `AGENTS.md`
2. `project-index.md`
3. `manual-preferences/00_global_frontend_principles.md`
4. `design-dna/miguel-style-principles.md`
5. Relevant files in `design-dna/`
6. Relevant source project reports in `extracted/`

Read the case study only when the task resembles the original in-the-loop product or when looking for known failure modes.

## Before Building

Write down:

- product domain
- target user
- primary object
- primary action
- screen archetype
- tone
- density level
- data truth requirements
- responsive risks

If these cannot be inferred, ask a short clarifying question.

## Choose Identity Before Palette

Pick a visual identity from the product brief, not from a favorite source project.

Decide:

- should it feel operational, editorial, social, creative, analytical, or something else?
- should density be high, medium, or low?
- should imagery be central, supporting, or absent?
- should motion be expressive, restrained, or mostly functional?

Then define semantic tokens.

## Build The Actual Experience

Do not make a marketing landing page when the user asks for an app, tool, game, or workflow. The first screen should be usable.

Exceptions:

- portfolio/editorial sites
- brand/product pages explicitly requested
- public marketing sites explicitly requested

## Component Requirements

Every app needs:

- button hierarchy
- clickable/passive distinction
- loading states
- empty states
- error states
- focus-visible states
- responsive navigation behavior
- copy that matches domain

Add abstractions only when they reduce real duplication or match the framework's existing pattern.

## Layout Requirements

Choose a layout recipe:

- focused hero interaction
- dense calm workspace
- data terminal
- composer studio
- editorial brand page
- social plan flow
- detail with inspector
- auth gate

Then adapt it to the product.

## Visual Asset Requirements

Use visual assets when they help the user inspect, feel, or understand the subject. Avoid generic atmospheric visuals.

For frontend builds:

- product/place/person/object pages need meaningful first-viewport imagery or object signal
- enterprise tools can use structure and state instead of decorative imagery
- games and interactive tools need real visual assets or rich canvas/3D scenes

## Verification Requirements

Before final delivery:

1. Run the app if possible.
2. Capture screenshots at 390, 768, and 1440 px.
3. Inspect screenshots for overlap, clipping, blank areas, and broken hierarchy.
4. Score the UI with `evaluation/ui-scorecard.md`.
5. Fix high-impact issues and recapture when changed.

If the app cannot run, document why and use the best available static or code-level evidence.

## Do Not

- copy one golden app literally
- force one color palette
- default to generic dashboard cards
- make passive tags look clickable
- hide the main action
- overexplain the UI
- ship without responsive proof when running is possible
- invent live data, auth state, or claims

