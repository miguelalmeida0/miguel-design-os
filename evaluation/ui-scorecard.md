# UI Scorecard

Use this before finishing any generated app, UI review, source-project ingestion, or fix-until-elite loop.

## Required Inputs

Before scoring, record:

- project type
- task classification
- skills used
- primary user
- primary object
- primary action
- intended visual identity
- approved rendered concept when visual-heavy work applies
- inspiration manifest when visual-heavy work uses inspiration
- Visual Concept Gate status, preview routes, concept screenshots, and Migi approval when visual-heavy work applies
- Literal Target Copy Mode status and target-difference report when exact visual copying is requested
- screenshot evidence at 390, 768, and 1440 px, or a documented blocker
- validated done report for visual UI work
- validated target-copy report when Literal Target Copy Mode applies
- validated asset manifest for image-led target reconstruction or production image-led work

Score the current UI against its own product identity. Do not score higher because it resembles a golden project.

## Score Caps

Apply caps before final score.

Caps are written as 100-point score with 10-point shorthand in parentheses.

- no screenshots and no documented blocker: max 60
- no inspiration manifest for visual-heavy work that uses inspiration: max 70 (7/10)
- no validated done report for visual UI work: max 60 (6/10)
- no done report for visual UI work: max 60 (6/10)
- no visual QA evidence for visual work: max 60 (6/10)
- missing visual screenshots for visual work: max 60 (6/10)
- missing target-copy report during Literal Target Copy Mode: max 60 (6/10)
- missing asset manifest for image-led target reconstruction or production image-led work: max 60 (6/10)
- build/lint is presented as visual QA without screenshot evidence and done-report validation: max 60 (6/10)
- no 390/768/1440 proof for significant frontend work: max 80 (8/10)
- required routed skill skipped for applicable task: max 80
- screenshots missing for one viewport: max 80
- no project-specific visual identity: max 82
- copied source-project palette/layout literally: max 74
- 3-concept Visual Concept Gate skipped for visual-heavy work when Literal Target Copy Mode was not requested: max 60 (6/10)
- visual-heavy task produced only text concepts: max 50 (5/10)
- no rendered visual concepts for visual-heavy concept work: max 50 (5/10)
- Migi was asked to approve art direction without visual previews: max 50 (5/10)
- concept screenshots are missing: max 60 (6/10)
- all 3 concepts share basically the same layout: max 60 (6/10)
- implementation starts before visual concept approval: max 60 (6/10)
- inspiration flattened into shallow styling traits: max 60 (6/10)
- rejected layout kept with new paint: max 60 (6/10)
- strong visual reference provided but result preserves only surface styling: max 60 (6/10)
- output uses generic app layout instead of reference composition: max 60 (6/10)
- primary object in reference is replaced by grid/cards/dashboard: max 60 (6/10)
- Literal Target Copy Mode requested but the result changes composition or adds unrelated product UI: max 50 (5/10)
- main object unclear: max 64
- primary action unclear: max 64
- clickable/passive ambiguity in primary flow: max 70 (7/10)
- unsupported live/data/safety/AI claims: max 79
- mobile accidental horizontal scroll in primary flow: max 79
- visible UI elements overlap or collide unintentionally: max 60 (6/10)
- dead button in the primary UI: max 60 (6/10)
- external watermark, editor artifact, browser chrome, or copied tooling artifact visible in production UI: max 40 (4/10)
- text on button or unintended button/control overlap: max 50 (5/10)
- animation exists only for decoration and does not clarify state/interaction/hierarchy: max 70 (7/10)
- oversized AI-app typography or containers overwhelm the product: max 70 (7/10)
- user feels attacked by scale on first load: max 70 (7/10)
- design follows the most obvious genre cliche without a fresh thesis: max 70 (7/10)
- first-screen information wall before the user has a reason to care: max 70 (7/10)
- excitement is created mainly through badges/glows/stats instead of composition and interaction: max 70 (7/10)
- selection-first product does not make objects desirable to click: max 70 (7/10)

## Categories

Total: 100.

Elite: 90 to 100. Pass: 80 to 89. Needs work: 65 to 79. Fail: below 65.

### 1. Product Fit And Identity - 15

- 5: visual identity is named and fits current project type
- identity check: strong themes have a non-obvious visual thesis and avoid the first genre cliche
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
- overlap check: text, badges, controls, stats, and imagery do not collide at tested viewports
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
- first screen is an information wall before desire, action, or object clarity
- source-project palette/layout copied literally
- In The Loop social patterns applied to a non-social product
- text overlap or clipping in primary flow
- text on button or unintended button/control overlap
- accidental mobile horizontal scroll
- build/lint used as visual QA proof without screenshots and done-report validation
- no done without evidence: visual UI work is missing a validated done report
- visual-heavy inspiration work is missing an inspiration manifest
- visual work is missing visual QA evidence
- Literal Target Copy Mode is missing a validated target-copy report
- image-led target reconstruction or production image-led work is missing a validated asset manifest
- dead button in the primary UI
- external watermark, editor artifact, browser artifact, or copied tooling artifact visible in production UI
- unsupported live/data/safety/AI claim
- visible UI elements overlap or collide unintentionally
- obvious genre cliche without a fresh thesis
- Visual Concept Gate skipped when required
- text-only art direction for visual-heavy work
- art direction approval requested without visual previews
- missing concept screenshots
- all 3 visual concepts use basically the same layout
- implementation started before visual concept approval
- reference flattened into shallow traits
- same rejected layout with new paint
- Literal Target Copy Mode requested but composition changes or unrelated product UI is added
- decorative motion that clarifies nothing
- AI scale inflation overwhelms the product
- selection-first product lacks object desire or relies on badge/glow/stat clutter for excitement
- missing scorecard result
- required routed skill skipped for the task

## Required Report

Always report:

- skills used
- approved rendered concept
- total score after caps
- category scores
- concept screenshots used when visual-heavy work applies
- screenshots used
- done report path and validation result for visual UI work
- target-copy report path and validation result when Literal Target Copy Mode applies
- asset manifest path and validation result for image-led target reconstruction or production image-led work
- exact target differences when Literal Target Copy Mode applies
- top 3 fixes
- blockers
- verification gaps
- whether the UI was patched after review
