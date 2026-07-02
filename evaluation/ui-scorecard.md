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
- design read for visual-heavy landing, portfolio, marketing, or redesign work
- active design dials
- `docs/design/visual-spec.md` for visual-heavy work
- `docs/design/direction-options.md` before visual-heavy implementation when visual direction is not already approved
- `docs/design/selected-direction.md` after Migi chooses or hybridizes a direction
- Direction Gate Summary inside visual spec
- Palette Exploration section for artistic, cinematic, landing, portfolio, creative, editorial, or experimental work
- design-system direction for significant UI work
- frontend aha moment and local/mock data location for new frontend MVPs
- visible interactions verified locally
- reference folder mode when visual-library references are used
- `docs/design/reference-usage-report.md` when visual-heavy work uses visual-library references
- Reference-Locked Build Mode status when a visual-library folder or screenshot set is the requested basis
- 3-5 selected reference anchors and their roles when Reference-Locked Build Mode is active
- `docs/design/reference-decomposition.md` before coding when Reference-Locked Build Mode is active
- `docs/design/design-transfer-spec.md` before coding when Reference-Locked Build Mode is active
- `docs/qa/reference-match-report.md` before final handoff when Reference-Locked Build Mode is active
- Dashboard Command-Surface Strategy when Command Center / Dashboard Mode is used
- dashboard attraction zone, panel mix, chart forms, image/object strategy, and calm/busy rhythm when dashboard references are used
- Dashboard Palette Strategy when Command Center / Dashboard Mode is used
- Graph System Strategy when Command Center / Dashboard Mode is used
- Image / Object / Media Strategy when Command Center / Dashboard Mode is used
- Dashboard live/motion strategy when the product represents monitoring, freshness, activity, or queues
- chart-selection report when meaningful charts, analytics, BI, monitoring, forecasts, maps, funnels, networks, or graph-rich dashboard systems are used
- chart data shape, user decision, accessibility fallback, rendering strategy, and chart bounds strategy
- visual-style selection report when a style family/taxonomy direction is used
- selected primary style family, rejected styles, token plan, effect limits, accessibility/performance/mobile risks
- image-first website analysis when building premium websites, landing pages, hero sections, marketing sites, product pages, editorial/portfolio pages, or website image-to-code outputs
- section references and extraction notes before website implementation when image-first workflow applies
- anti-AI-tell preflight for landing, portfolio, marketing, and redesign work
- motion strategy when animation exists or motion is planned
- animation review when motion code changed
- delight strategy when personality/delight is added
- Scale Calibration section from `docs/design/reference-usage-report.md` when visual-library references are used
- Image Environment Strategy from `docs/design/reference-usage-report.md` when image-led, artistic, landing-page, cinematic, or visual-heavy references are used
- Contrast / Legibility Strategy from `docs/design/reference-usage-report.md` when image-led or visual-library references are used
- Navigation Strategy for dashboard or visual-heavy work
- Toolbar Alignment Strategy for dashboard or visual-heavy work with search, filters, or action clusters
- Text Density Strategy for dashboard or visual-heavy panels
- Button Proportion Strategy for visible CTAs and repeated actions
- Responsive Collision Checks at 1440, 1280, 1024, 768, and 390
- Layout Integrity Contract for visual-heavy work
- Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390
- Palette Direction explaining why the color system avoids machine/default color
- design-system token quality: semantic colors, type roles, spacing, radius, shadow/elevation, borders, chart colors, state colors, component variants, image treatment, and motion rules
- OKLCH/APCA palette pass for significant UI: APCA targets, WCAG targets when formal compliance is claimed, lightness repairs, numeric scale, dark-mode mapping, and hue-drift risk
- palette intelligence from references/product reasoning or `design-intelligence/product-color-matrix.json`
- UI Wiki review when broad interaction, typography, pseudo-element, audio, UX-law, or perceived-performance rules apply
- Interface Feel Pass after main layout exists and before final screenshot review
- chart intelligence from data shape/user decision or `design-intelligence/chart-recommendation-matrix.json`
- style intelligence from selected style family or `design-intelligence/style-taxonomy.json`
- landing pattern when landing pages are built or reviewed
- mobile platform fit when mobile work is involved
- mobile navigation default/exception when the app has 3+ primary destinations
- implementation workflow/tool discipline when code is changed
- brief inference quality: page kind, audience, vibe, reference signals, mode/system, quiet constraints
- landing/portfolio craft: section jobs, composition anchors, background modes, CTA variation, and section rhythm
- motion craft: purpose, frequency, duration, easing, reduced motion, performance
- delight appropriateness: earned moment, domain register, no task delay
- image role strategy for every major image
- product purpose: what the app is, what it tests in Miguel Design OS, which rules are being validated, and what success/failure teaches the system
- core loop proof when the product depends on upload, classification, generation, selection, or persistence
- persistence truth for user-generated data across route changes, refresh, and browser reopen
- dogfood learning when the app is a Miguel Design OS test target
- approved rendered concept when visual-heavy work applies
- inspiration manifest when visual-heavy work uses inspiration
- Visual Concept Gate status, preview routes, concept screenshots, and Migi approval when visual-heavy work applies
- Literal Target Copy Mode status and target-difference report when exact visual copying is requested
- screenshot evidence at 390, 768, and 1440 px, or a documented blocker
- validated done report for visual UI work
- validated target-copy report when Literal Target Copy Mode applies
- validated asset manifest for image-led target reconstruction or production image-led work
- screenshot comparison report when Literal Target Copy Mode applies
- visual QA report from local capture when the app can run

Score the current UI against its own product identity. Do not score higher because it resembles a golden project.

## Score Caps

Apply caps before final score.

Caps are written as 100-point score with 10-point shorthand in parentheses.

Large typography is not banned. It must be justified by the reference and balanced by composition, imagery, and supporting content density.

Artistic style never excuses poor readability. Award-level UI protects legibility while preserving mood.

Layout integrity caps apply before taste scoring. A broken layout cannot be award-level.

- no screenshots and no documented blocker: max 60
- visual-heavy new app implemented without direction-options gate: max 60 (6/10)
- agent provides only one direction when direction is not approved: max 60 (6/10)
- three directions are minor variations of same layout or palette: max 50 (5/10)
- agent codes before Migi selects direction: max 50 (5/10)
- direction options lack palette, image, layout, or motion strategy: max 60 (6/10)
- agent ignores selected direction during implementation: max 50 (5/10)
- no `docs/design/selected-direction.md` after Migi chooses: max 70 (7/10)
- artistic/landing/portfolio page uses safe AI-default muddy palette without exploration: max 60 (6/10)
- palette feels machine-generated/generic despite expressive mode: max 50 (5/10)
- no palette exploration documented for artistic/cinematic mode: max 60 (6/10)
- color palette is readable but conceptually boring in an art-directed page: max 70 (7/10)
- palette chosen without relation to imagery, references, or concept: max 60 (6/10)
- bold palette used but contrast/readability fails: max 50 (5/10)
- agent defaults to charcoal/brown/orange generated-app palette again: max 50 (5/10)
- no APCA/WCAG contrast check for final palette: max 70 (7/10)
- normal text below APCA `Lc 60` without reason: max 60 (6/10)
- UI component contrast below APCA `Lc 30`: max 60 (6/10)
- palette repaired by changing chroma instead of lightness: max 70 (7/10)
- HSL ramp shows hue drift greater than `10deg` and remains uncorrected: max 60 (6/10)
- palette feels robotic because no perceptual color system was used: max 60 (6/10)
- no numeric palette scale for a design system: max 70 (7/10)
- dark mode created by random color picking instead of mapped tokens: max 60 (6/10)
- multi-hue palette has uneven perceived brightness: max 60 (6/10)
- foreground/background token lacks documented contrast target: max 70 (7/10)
- pressable elements have no active feedback: max 70 (7/10)
- interactive target below comfortable size without compensation: max 60 (6/10)
- typography lacks tabular numbers where data aligns: max 70 (7/10)
- user-initiated UI animation exceeds 300ms without reason: max 60 (6/10)
- keyboard or high-frequency interaction is slowed by animation: max 50 (5/10)
- motion ignores frequency-of-use: max 60 (6/10)
- pseudo-elements used without correct layering/content: max 70 (7/10)
- audio feedback has no visual equivalent or mute control: max 50 (5/10)
- UI works but feels dead or unresponsive: max 60 (6/10)
- loading/empty/error states are generic or missing: max 60 (6/10)
- spacing scale feels arbitrary: max 60 (6/10)
- pure black shadows make elevation feel harsh or fake: max 70 (7/10)
- visual hierarchy violates proximity, similarity, or common-region principles: max 60 (6/10)
- micro-polish pass missing before final visual review: max 70 (7/10)
- visual-heavy task has no design read: max 60 (6/10)
- no visual spec for visual-heavy work: max 60 (6/10)
- no active dials declared for visual-heavy or new frontend work: max 70 (7/10)
- no design-system tokens for significant UI: max 70 (7/10)
- visible UI generated before design-system direction exists: max 70 (7/10)
- no frontend aha moment proof for new frontend MVP: max 60 (6/10)
- landing/portfolio page violates major Taste preflight checks: max 60 (6/10)
- visible UI copy contains em-dashes after preflight: max 70 (7/10)
- repeated generic sections or same layout family overused: max 60 (6/10)
- hero overstuffed with micro-labels, trust, pricing, features, or prose: max 60 (6/10)
- CTA wraps on desktop: max 60 (6/10)
- duplicate CTA intent: max 70 (7/10)
- fake div-based screenshot used as product visual: max 50 (5/10)
- generated landing references compress multiple sections into one unreadable image: max 50 (5/10)
- plain text logo wall used as social proof when logos are required: max 60 (6/10)
- generic AI names, fake-perfect numbers, or generic avatar eggs are visible: max 70 (7/10)
- section-number eyebrows, decorative scroll cues, or hero version labels used without real purpose: max 70 (7/10)
- animation has no purpose: max 60 (6/10)
- ease-in on UI motion: max 50 (5/10)
- scale(0) entrance animation: max 50 (5/10)
- missing prefers-reduced-motion on movement: max 50 (5/10)
- high-frequency action animated: max 40 (4/10)
- `transition: all` in production UI: max 50 (5/10)
- delight delays or blocks core task: max 40 (4/10)
- delight mismatches domain seriousness: max 60 (6/10)
- no local core-loop interaction in frontend MVP: max 60 (6/10)
- mock data buried in components: max 70 (7/10)
- code is monolithic/spaghetti: max 60 (6/10)
- implementation ignores efficient-agent workflow and makes broad uninspected edits: max 70 (7/10)
- no inspiration manifest for visual-heavy work that uses inspiration: max 70 (7/10)
- no reference usage report for visual-heavy work using visual-library references: max 60 (6/10)
- missing Scale Calibration for visual-library reference work: max 60 (6/10)
- image-led UI without a contrast strategy: max 60 (6/10)
- image-led/artistic/landing reference work missing Image Environment Strategy: max 60 (6/10)
- wrong reference folder mode used: max 60 (6/10)
- visual-library folder used but no reference anchors selected: max 50 (5/10)
- no reference decomposition before coding: max 50 (5/10)
- no design transfer spec before coding: max 50 (5/10)
- output uses generic mode instead of selected anchor mechanics: max 50 (5/10)
- agent copies mood but not composition: max 60 (6/10)
- agent copies colors but not structure: max 60 (6/10)
- agent ignores image/object/chart behavior from anchors: max 60 (6/10)
- no final reference-match report: max 60 (6/10)
- Command Center / Dashboard Mode used without Dashboard Command-Surface Strategy: max 60 (6/10)
- dashboard feels like generic SaaS/admin template: max 60 (6/10)
- dashboard has no meaningful visual anchor or attraction zone when references show one: max 60 (6/10)
- Dashboard uses murky monochrome / terminal-green palette without reference justification: max 50 (5/10)
- Dashboard overuses one accent color everywhere: max 60 (6/10)
- Dashboard lacks palette strategy in reference report: max 60 (6/10)
- Dashboard lacks graph system strategy: max 60 (6/10)
- Dashboard lacks image/object/media strategy: max 70 (7/10)
- dashboard is a same-weight widget/card field: max 60 (6/10)
- dashboard is text-and-metrics only despite image-aware or graph-rich references: max 60 (6/10)
- dashboard has too few meaningful charts despite graph-rich references: max 60 (6/10)
- dashboard has too few useful chart forms for the product state: max 60 (6/10)
- dashboard charts are decorative or do not support visible decisions: max 60 (6/10)
- meaningful chart implemented with no chart-selection report: max 60 (6/10)
- no chart rationale for dashboard charts: max 60 (6/10)
- chart type does not match data shape: max 50 (5/10)
- chart relies on color alone without value labels, patterns, line styles, or table fallback: max 50 (5/10)
- inaccessible chart type used as primary representation with no fallback: max 50 (5/10)
- real-time chart has motion without pause/reduced-motion behavior: max 60 (6/10)
- major dashboard chart is decorative or unclear: max 50 (5/10)
- dashboard imagery/object/media is absent despite relevant reference evidence: max 60 (6/10)
- dashboard uses only text/metrics/panels with no image/object/media layer despite reference support: max 60 (6/10)
- no visual/object/media attraction zone despite reference evidence: max 60 (6/10)
- dashboard imagery is random/pasted-in instead of supporting hierarchy or memorability: max 70 (7/10)
- dashboard density is low because text, cards, charts, padding, or containers are oversized: max 60 (6/10)
- dashboard lacks compositional rhythm between calm and busy zones: max 70 (7/10)
- dashboard is functional but visually forgettable: max 60 (6/10)
- functional but visually unfinished dashboard: max 60 (6/10)
- dashboard lacks polish despite working interactions: max 60 (6/10)
- dashboard feels like a start product, not a designed product: max 60 (6/10)
- dashboard uses many boxes but little crafted hierarchy: max 60 (6/10)
- static dashboard feels dead despite live/monitoring product concept: max 70 (7/10)
- terminal-ish dark panel spam used as dashboard art direction: max 60 (6/10)
- cryptic primary navigation: max 50 (5/10)
- navigation abbreviations without obvious meaning: max 60 (6/10)
- icon-only nav without labels, tooltips, or obvious context: max 60 (6/10)
- broken responsive nav: max 50 (5/10)
- nav overlaps content on resize: max 50 (5/10)
- mobile app using desktop navigation without justification: max 50 (5/10)
- top navigation stealing vertical space on mobile: max 50 (5/10)
- poor bottom navigation craftsmanship: max 50 (5/10)
- bottom navigation with poor spacing/alignment: max 50 (5/10)
- duplicated top and bottom navigation for the same primary destinations: max 50 (5/10)
- generic mobile navigation with no personality: max 60 (6/10)
- mobile nav is cryptic or cramped: max 60 (6/10)
- desktop rail simply becomes giant mobile pills: max 60 (6/10)
- visibly misaligned search/action toolbar: max 70 (7/10)
- toolbar controls collide or wrap badly: max 60 (6/10)
- primary action misaligned from input group: max 70 (7/10)
- too much text inside dashboard containers: max 60 (6/10)
- cards feel like prose boxes: max 60 (6/10)
- scanability weak because every panel is text-heavy: max 60 (6/10)
- oversized full-width button without justification: max 70 (7/10)
- button visually dominates more than its action deserves: max 70 (7/10)
- button proportions feel clumsy/amateur: max 60 (6/10)
- text visibly escapes container: max 20 (2/10)
- chart bars/lines escape chart/card bounds: max 20 (2/10)
- containers overlap on resize: max 30 (3/10)
- card content is clipped/cut off: max 40 (4/10)
- dashboard cards become too narrow to read: max 40 (4/10)
- labels collapse into meaningless fragments: max 50 (5/10)
- responsive design only works at one viewport: max 50 (5/10)
- nav breaks, overlaps, or becomes unreadable on resize: max 50 (5/10)
- image badges/pills overlap unintentionally: max 40 (4/10)
- form fields/buttons become clipped or unreadable: max 40 (4/10)
- any core screen has horizontal overflow: max 50 (5/10)
- chart is visually attractive but structurally broken: max 40 (4/10)
- stat pills/badges collide: max 40 (4/10)
- responsive layout hides or covers content: max 50 (5/10)
- fake live/session status UI: max 50 (5/10)
- status indicator with no user meaning: max 60 (6/10)
- decorative telemetry/status chips: max 60 (6/10)
- palette feels machine-generated/generic: max 60 (6/10)
- visual style chosen by vibe only with no style-selection report: max 60 (6/10)
- palette selected without reference/product reasoning: max 60 (6/10)
- incompatible visual style systems mashed together without hierarchy: max 60 (6/10)
- style family conflicts with product purpose or reference mode: max 60 (6/10)
- style effects damage accessibility or performance without mitigation: max 60 (6/10)
- dull robotic palette despite expressive references: max 50 (5/10)
- palette not explained in reference report: max 60 (6/10)
- all references treated equally without prioritization: max 70 (7/10)
- no validated done report for visual UI work: max 60 (6/10)
- no done report for visual UI work: max 60 (6/10)
- no visual QA evidence for visual work: max 60 (6/10)
- missing visual screenshots for visual work: max 60 (6/10)
- missing target-copy report during Literal Target Copy Mode: max 60 (6/10)
- missing asset manifest for image-led target reconstruction or production image-led work: max 60 (6/10)
- missing screenshot comparison report during Literal Target Copy Mode: max 60 (6/10)
- build/lint is presented as visual QA without screenshot evidence and done-report validation: max 60 (6/10)
- no 390/768/1440 proof for significant frontend work: max 80 (8/10)
- dogfood target with no back-propagated Design OS rule/tool/prompt/checklist learning: max 60 (6/10)
- new project missing product purpose clarity: max 70 (7/10)
- upload/classify/generate core loop not manually verified: max 60 (6/10)
- user-generated data persistence not specified across route changes, refresh, and browser reopen: max 60 (6/10)
- UI count says 0 while uploaded or user-generated data exists: max 40 (4/10)
- browser chrome, dock, desktop, or editor UI used as informal screenshot proof: max 60 (6/10)
- parallel product, Studio feature, or control app built instead of dogfooding the active target: max 60 (6/10)
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
- landing-page / artistic / creative / image-led request becomes a generic SaaS, blog, or grid page: max 60 (6/10)
- premium website/landing task skips image-first analysis when visual references or image generation are available: max 60 (6/10)
- multi-section website reference compressed into one unreadable board: max 60 (6/10)
- implementation drifts from section references into generic coded layout: max 60 (6/10)
- hero cluttered with fake pills, system labels, or micro-UI during website image-to-code work: max 60 (6/10)
- artistic hero followed by generic cards, stacked sections, or normal content blocks: max 70 (7/10)
- imagery is used as filler instead of the composition driver: max 70 (7/10)
- image used as decoration only: max 70 (7/10)
- page is text-heavy despite image-led references: max 60 (6/10)
- strong grids or cards dominate an artistic landing direction without reference support: max 60 (6/10)
- result feels like Blogspot or content-template structure: max 50 (5/10)
- hero is good but the rest becomes generic: max 70 (7/10)
- AI scale inflation visible: max 60 (6/10)
- giant headline/container attack: max 60 (6/10)
- desktop viewport shows fewer than 3 meaningful content objects without strong reference justification: max 60 (6/10)
- oversized image used as filler: max 70 (7/10)
- desktop layout feels like enlarged mobile layout: max 60 (6/10)
- mobile app looks like scaled-down website: max 50 (5/10)
- mobile flow lacks native-feeling nav, safe areas, or thumb-safe actions: max 60 (6/10)
- containers much larger than their content: max 60 (6/10)
- reference folder has dense controlled UI but output is sparse/giant: max 50 (5/10)
- hero consumes the screen and hides core product loop without justification: max 60 (6/10)
- important text hard to read over image: max 50 (5/10)
- small text over busy image without protection: max 50 (5/10)
- CTA text or navigation text has weak contrast: max 50 (5/10)
- text readable in one viewport but failing in another: max 60 (6/10)
- focal image/object is darkened or covered until emotional impact is lost: max 70 (7/10)
- multiple image cards use inconsistent overlay treatments without reason: max 70 (7/10)
- contrast depends on a lucky crop: max 60 (6/10)
- image-led reference implemented as boxed/card image without justification: max 60 (6/10)
- artistic landing page uses rigid two-column image/text grid despite immersive references: max 60 (6/10)
- strong image treated as decoration instead of composition driver: max 60 (6/10)
- full-scene reference reduced to square image asset: max 50 (5/10)
- image is trapped in visible grid/card structure and loses emotional impact: max 60 (6/10)
- text is readable but image is over-darkened until focal object loses emotion: max 70 (7/10)
- page has good image but layout still feels component-led: max 70 (7/10)
- main object unclear: max 64
- primary action unclear: max 64
- clickable/passive ambiguity in primary flow: max 70 (7/10)
- unsupported live/data/safety/AI claims: max 79
- mobile accidental horizontal scroll in primary flow: max 79
- visible UI elements overlap or collide unintentionally: max 60 (6/10)
- dead button in the primary UI: max 60 (6/10)
- external watermark, editor artifact, browser chrome, or copied tooling artifact visible in production UI: max 40 (4/10)
- target screenshots used as production assets: max 40 (4/10)
- product logic added before visual shell parity approval: max 60 (6/10)
- text on button or unintended button/control overlap: max 50 (5/10)
- animation exists only for decoration and does not clarify state/interaction/hierarchy: max 70 (7/10)
- oversized AI-app typography or containers overwhelm the product: max 60 (6/10)
- user feels attacked by scale on first load: max 60 (6/10)
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
- dashboard check: command-center work has one attraction zone, varied panel weights, useful chart forms, and calm/busy rhythm
- 3: spacing/alignment supports scanning without extra wrappers
- overlap check: text, badges, controls, stats, and imagery do not collide at tested viewports
- 3: layout recipe matches archetype
- 2: visual hierarchy works without reading all labels

### 5. Responsive Evidence - 15

- 5: 390 px mobile has no clipping, accidental horizontal scroll, or sticky collision
- 4: 768 px tablet is not broken mobile or cramped desktop
- 2: 1024/1280 intermediate widths do not squeeze cards, labels, charts, nav, or forms into unreadable states
- 2: 1440 px desktop uses width appropriately
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

## Additional Required Lenses

These do not change the 100-point total, but they can trigger caps and blockers.

### Design System Quality

- semantic color tokens exist before implementation
- typography roles are defined
- spacing/radius/shadow/border logic is coherent
- chart colors and state colors are intentional
- component variants are consistent
- image treatment and motion rules are named

### Visual Spec Completeness

- active dials are declared
- references and selected mode are named
- layout skeleton and visual thesis exist
- interaction and responsive strategy are buildable
- evidence plan is explicit

### Palette Intelligence

- palette is reference/product-driven
- accent has a defined role
- state colors are not confused with brand color
- contrast risks are named and mitigated

### Chart Intelligence

- chart type matches data shape
- chart answers a user decision
- accessibility fallback exists
- chart bounds and responsive behavior are planned

### Mobile Platform Fit

- mobile is not a scaled-down website
- nav is thumb-safe and readable
- safe areas and touch targets are planned
- 390 px proof exists or blocker is documented

### Frontend Aha Moment

- local/mock data is truthful and isolated in data files
- core loop works locally
- visible controls are not dead
- backend is not added unless requested or contract is approved

### Tool Discipline

- useful context was read first
- edits are scoped
- components are not monolithic
- logs/screenshots/errors guide debugging
- final proof is concise and concrete

### Brief Inference Quality

- design read names page kind/product type
- audience is specific
- vibe language is explicit
- selected mode/system/aesthetic fits the brief
- quiet constraints are named

### Anti-AI-Tell Compliance

- visible UI copy has zero em-dashes
- no generic names, fake-perfect numbers, or generic avatars
- no fake div screenshots
- no decorative fake status/session/live chips
- no scroll cues, section-number eyebrows, or hero version labels without purpose
- CTA intent and label system are clean

### Landing / Portfolio Craft

- every section has a job
- generated references are one horizontal image per section
- section rhythm varies
- palette and typography stay locked
- hero stack is disciplined
- image usage is structural, not decorative

### Motion Craft

- each animation has a purpose
- frequency profile matches the control
- duration/easing follows motion standards
- reduced-motion behavior exists
- performance avoids layout animation and `transition: all`

### Delight Appropriateness

- delight is earned by user moment
- personality register fits domain seriousness
- delight never blocks or delays core task
- errors and high-stakes flows stay clear before charming

## Blockers

Any blocker prevents elite:

- main object unclear
- primary action unclear
- passive metadata looks clickable in the primary flow
- first screen is an information wall before desire, action, or object clarity
- source-project palette/layout copied literally
- In The Loop social patterns applied to a non-social product
- text overlap or clipping in primary flow
- important text hard to read over image, gradient, video, texture, or washed-out panel
- text over image has no deliberate protection method
- CTA or navigation text has weak contrast
- text contrast passes one viewport but fails another
- text on button or unintended button/control overlap
- accidental mobile horizontal scroll
- build/lint used as visual QA proof without screenshots and done-report validation
- dogfood target failure not translated back into a Miguel Design OS patch or explicit open gap
- product purpose is unclear for a new app or dogfood target
- upload/classify/generate core loop is unverified in an app whose product promise depends on that loop
- user-generated data persistence is unstated or contradicted by the UI
- UI count says 0 while uploaded or user-generated data exists
- browser chrome, dock, desktop, or editor UI is used as screenshot proof
- a parallel product, Studio feature, or control app is built while the active goal is dogfooding a target app
- no done without evidence: visual UI work is missing a validated done report
- visual-heavy inspiration work is missing an inspiration manifest
- visual-heavy work using visual-library references is missing `docs/design/reference-usage-report.md`
- visual-library folder or screenshot set is used as the basis, but Reference-Locked Build Mode did not select 3-5 exact anchors
- Reference-Locked Build Mode is active, but `docs/design/reference-decomposition.md` is missing before coding
- Reference-Locked Build Mode is active, but `docs/design/design-transfer-spec.md` is missing before coding
- implementation ignores the design transfer spec and falls back to generic mode
- final handoff in Reference-Locked Build Mode lacks `docs/qa/reference-match-report.md`
- Command Center / Dashboard Mode is missing Dashboard Command-Surface Strategy
- Command Center / Dashboard Mode is missing Dashboard Palette Strategy or Graph System Strategy
- dashboard reference work has no attraction zone, focal object, dominant chart, media/object block, scene, map, or equivalent visual gravity
- dashboard reference work becomes generic SaaS/admin template or same-weight card soup
- dashboard charts are decorative filler instead of supporting decisions, status, comparison, or trend
- dashboard major chart is decorative or unclear
- dashboard uses murky monochrome / terminal-green palette without reference justification
- dashboard overuses one accent color everywhere
- dashboard uses only text, metrics, and panels despite image/object/media reference support
- dashboard lacks live/state energy when the product represents monitoring, activity, or freshness
- dashboard density is low because scale, cards, charts, or padding are inflated
- cryptic primary navigation or unexplained nav abbreviations
- responsive navigation overlaps content, becomes cramped, or loses label clarity
- search/filter/action toolbar is visibly misaligned or collides on wrap
- text, charts, bars, chips, badges, controls, or card titles escape/cut off their containers
- chart bars, lines, points, axes, or labels escape plot/card bounds
- labels collapse into meaningless fragments without a legend
- dashboard cards become too narrow to read instead of reorganizing
- responsive design only works at one viewport
- dashboard panels are prose-heavy enough to kill scanability
- primary actions are oversized full-width buttons without layout justification
- fake live/session/telemetry/status UI appears with no real product meaning
- palette feels machine-generated, robotic, or generic despite reference evidence
- dashboard is only functional and still visually unfinished
- visual-library reference work is missing Scale Calibration
- image-led or visual-library reference work is missing Contrast / Legibility Strategy
- image-led/artistic/landing reference work is missing Image Environment Strategy
- wrong reference folder mode used
- major images have no declared role or are decoration only
- all references treated equally with no prioritization
- visual work is missing visual QA evidence
- Literal Target Copy Mode is missing a validated target-copy report
- image-led target reconstruction or production image-led work is missing a validated asset manifest
- Literal Target Copy Mode is missing a screenshot comparison report
- target screenshots are used as production assets
- product logic was added before visual shell parity approval
- dead button in the primary UI
- external watermark, editor artifact, browser artifact, or copied tooling artifact visible in production UI
- unsupported live/data/safety/AI claim
- visible UI elements overlap or collide unintentionally
- responsive resize causes overlapping containers, colliding pills, covered content, or horizontal overflow on a core screen
- content escapes containers or chart bounds on any tested core viewport
- card titles, form fields, or primary controls are clipped/cut off
- labels lose semantic meaning due to responsive squeezing
- obvious genre cliche without a fresh thesis
- Visual Concept Gate skipped when required
- text-only art direction for visual-heavy work
- art direction approval requested without visual previews
- missing concept screenshots
- all 3 visual concepts use basically the same layout
- implementation started before visual concept approval
- reference flattened into shallow traits
- same rejected layout with new paint
- landing-page / artistic / creative / image-led request turned into generic SaaS, blog, grid, or dashboard furniture
- artistic hero followed by generic cards or section stacking
- hero follows the reference but the rest of the page becomes generic
- image-led reference used as decoration instead of composition driver
- Literal Target Copy Mode requested but composition changes or unrelated product UI is added
- decorative motion that clarifies nothing
- AI scale inflation overwhelms the product
- giant headline/container attack overwhelms the product
- desktop viewport has fewer than 3 meaningful content objects without strong reference justification
- desktop layout feels like enlarged mobile
- hero consumes the screen and hides the core product loop without justification
- hope-based contrast: important text relies on a lucky crop or noisy background
- focal image/object is covered or darkened until emotional impact is lost
- immersive image-led reference reduced to boxed/card/grid image treatment
- strong image is present but the page still feels component-led
- selection-first product lacks object desire or relies on badge/glow/stat clutter for excitement
- missing scorecard result
- required routed skill skipped for the task

## Required Report

Always report:

- skills used
- approved rendered concept
- reference folder mode and reference usage report when visual-library references are used
- Reference-Locked Build Mode status, selected anchors, anchor roles, reference decomposition, design transfer spec, and reference-match report when a folder or screenshot set is the requested basis
- Image Environment Strategy when image-led/artistic/landing references are used
- Scale Calibration summary when visual-library references are used
- Contrast / Legibility Strategy when image-led or visual-library references are used
- image role strategy for major images
- Navigation Strategy for dashboard or visual-heavy work
- Toolbar Alignment Strategy for visible search/filter/action groups
- Text Density Strategy for dense panels
- Button Proportion Strategy for CTAs and repeated actions
- Responsive Collision Checks at 1440, 1280, 1024, 768, and 390
- Layout Integrity Contract for visual-heavy work
- Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390
- Palette Direction and why it avoids machine/default color
- total score after caps
- category scores
- concept screenshots used when visual-heavy work applies
- screenshots used
- core loop proof and persistence truth when applicable
- dogfood target learning and Design OS patches when applicable
- done report path and validation result for visual UI work
- target-copy report path and validation result when Literal Target Copy Mode applies
- asset manifest path and validation result for image-led target reconstruction or production image-led work
- exact target differences when Literal Target Copy Mode applies
- dashboard attraction zone, panel mix, chart forms, image/object strategy, and calm/busy rhythm when dashboard references are used
- top 3 fixes
- blockers
- verification gaps
- whether the UI was patched after review
