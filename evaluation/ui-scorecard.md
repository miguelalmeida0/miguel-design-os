# UI Scorecard

Use this before finishing any generated app, UI review, source-project ingestion, or fix-until-elite loop.

## Required Inputs

Before scoring, record:

- project type
- primary user
- primary object
- primary action
- intended visual identity
- screenshot evidence at 390, 768, and 1440 px, or a documented blocker

Score the current UI against its own product identity. Do not score higher because it resembles a golden project.

## Score Caps

Apply caps before final score:

- no screenshots and no documented blocker: max 60
- screenshots missing for one viewport: max 80
- no project-specific visual identity: max 82
- copied source-project palette/layout literally: max 74
- main object unclear: max 64
- primary action unclear: max 64
- passive elements look clickable in primary flow: max 78
- unsupported live/data/safety/AI claims: max 79
- mobile accidental horizontal scroll in primary flow: max 79

## Categories

Total: 100.

Elite: 90 to 100. Pass: 80 to 89. Needs work: 65 to 79. Fail: below 65.

### 1. Product Fit And Identity - 15

- 5: visual identity is named and fits current project type
- 4: palette/tokens are project-specific, not copied
- 3: density matches task complexity
- 3: source-project influence is marked as evidence, not template

### 2. Primary Object And Action - 15

- 5: primary object is visible in the first viewport
- 4: primary action is attached to that object
- 3: secondary content supports the object
- 3: page title/nav does not replace the actual object

### 3. Interaction Grammar - 15

- 4: clickable and passive roles are visually distinct
- 3: one primary action per zone
- 3: hover/focus/active/selected states exist where relevant
- 3: disabled/loading states are implemented without layout shift
- 2: component choice matches role

### 4. Layout And Composition - 15

- 4: no container soup in primary regions
- 3: desktop adds actionable context for non-editorial tools: inspector, preview, comparison, table density, or source rail
- 3: spacing/alignment supports scanning without extra wrappers
- 3: layout recipe matches archetype
- 2: visual hierarchy works without reading all labels

### 5. Responsive Evidence - 15

- 5: 390 px mobile has no clipping, accidental horizontal scroll, or sticky collision
- 4: 768 px tablet is not broken mobile or cramped desktop
- 4: 1440 px desktop uses width appropriately
- 2: screenshots prove the above

### 6. Copy And Data Truth - 10

- 3: action labels are specific verbs
- 2: helper copy changes a decision or explains state
- 2: status/data claims include source, recency, scope, or fallback
- 2: empty/error/loading copy is present where needed
- 1: tone matches product type

### 7. Component Completeness - 10

- 2: button variants and states complete
- 2: tags/chips/tabs have distinct roles
- 2: rows/cards/drawers match the object model
- 2: async states preserve layout
- 2: focus-visible and accessible names are present for key controls

### 8. Asset And Motion Use - 5

- 2: imagery/assets identify the subject, show the product/object, explain state, or help inspection
- 2: motion communicates state or feedback
- 1: no generic AI/SaaS decoration

## Blockers

Any blocker prevents elite:

- main object unclear
- primary action unclear
- passive metadata looks clickable in the primary flow
- source-project palette/layout copied literally
- In The Loop social patterns applied to a non-social product
- text overlap or clipping in primary flow
- accidental mobile horizontal scroll
- unsupported live/data/safety/AI claim
- missing scorecard result

## Required Report

Always report:

- total score after caps
- category scores
- screenshots used
- top 3 fixes
- blockers
- verification gaps
