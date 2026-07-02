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
- landing-page/artistic/creative/image-led experience
- reference-folder mode
- dogfood target

Small bug fixes, security patches, copy edits, and purely technical refactors do not require the Visual Concept Gate unless they change a visually important UI direction.

## Mandatory Start

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Read `system.md` and `design-system.json`.
3. Read relevant `rules/*.md`, `skills/*/SKILL.md`, and `design-dna/*.md`.
4. Classify the task.
5. Inspect the current project type, framework, routes, components, styling system, and existing tokens.
6. If Literal Target Copy Mode is active, skip the Visual Concept Gate and build only the target-parity shell.
7. If Migi points to a visual-library reference folder, select the matching Reference Folder Mode before choosing a layout.
8. If Migi asks for landing page, creative, artistic, cinematic, editorial, visual-heavy, image-led, landing-page inspiration, or creative inspiration, activate Landing Page / Artistic Mode before choosing a layout.
9. If visual-heavy work uses visual-library references, create `docs/design/reference-usage-report.md` before coding.
10. Perform a Scale Calibration Pass against the selected reference folder before implementation.
11. If Command Center / Dashboard Mode is selected, define Dashboard Command-Surface Strategy before implementation.
12. Define Image Environment Strategy before implementation when references are artistic, landing-page, cinematic, image-led, or visual-heavy.
13. Define a contrast and legibility strategy before implementation, especially for text over images, gradients, video, or texture.
14. If visual-heavy, run Visual Concept Gate v2 before implementation: 3 rendered concept prototypes, screenshots, and approval.
15. Define a project-specific visual identity and a non-obvious visual thesis.
16. State which source project is relevant evidence and what will not be copied.
17. Plan fresh screenshots for the new UI; old captures are evidence, not templates.
18. Plan to run `evaluation/ui-scorecard.md` before finishing.
19. If the project is a Miguel Design OS dogfood target, state what rule/tool/prompt is being tested before coding and commit to translating every target-app failure back into a Design OS patch or named open gap.
20. State product purpose clarity before implementation: what this app is, what it tests in Miguel Design OS, which rules are being validated, and what success/failure teaches the master system.

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
Reference folder path:
Reference folder mode:
Reference usage report:
Landing Page / Artistic Mode?:
Dashboard attraction zone:
Dashboard panel mix:
Dashboard chart forms:
Dashboard palette strategy:
Dashboard image/object strategy:
Dashboard live/motion strategy:
Dashboard calm/busy rhythm:
Selected skill/playbook:
Selection-first product?:
Archetype:
Layout recipe:
Visual identity words:
Image role strategy:
Image environment strategy:
Scale calibration:
Contrast / legibility strategy:
Navigation strategy:
Toolbar alignment strategy:
Text density strategy:
Button proportion strategy:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Palette direction:
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

## Reference Folder Modes

When Migi points to a visual-library folder, the agent must activate the matching design mode. Do not treat all reference folders as equal moodboards.

Before coding any folder mode, perform a Scale Calibration Pass:

1. Look at selected reference screenshots.
2. Estimate how many meaningful content objects are visible above the fold.
3. Identify the largest text, medium text, and small UI labels.
4. Identify typical card/container density.
5. Identify whether images are hero scenes, thumbnails, proof objects, or background atmosphere.
6. Match the scale relationship, not just the vibe.

Before coding any folder mode, also define a Contrast / Legibility Strategy:

1. Identify every text layer and the background it sits on.
2. Classify the background as flat, image, gradient, video, texture, or mixed.
3. Check whether the local background changes behind the text.
4. Mark text as critical or decorative.
5. Choose contrast protection: safe zone, scrim, plate, blur/backdrop plate, local vignette, mask, deliberate crop, or text outside the image.
6. Plan 1440 / 768 / 390 contrast checks for responsive crops.

Before coding artistic, landing-page, cinematic, editorial, image-led, or visual-heavy work, define Image Environment Strategy:

1. Decide whether the reference uses image as environment or asset.
2. If the image is environment, compose around the image before choosing grid structure.
3. Consider full-bleed background, oversized scene, masked environment, edge-to-edge poster field, layered atmosphere, soft backdrop behind type, or composition-driving crop.
4. State why the image should or should not be boxed.
5. Plan focal object protection, text safe zones, and scrim/mask/plate support.
6. Avoid trapping immersive references inside rectangular card or grid slots.

### Command Center / Dashboard Mode

Use for:

- dashboard folder
- command center references
- dense data/productivity tools
- `visual-library/approved/inspiration/01-command-centers-dashboards/`

Must produce:

- clear hierarchy
- dense but readable surfaces
- meaningful metrics
- command/action clarity
- no random card soup
- one memorable attraction zone or focal visual/data anchor
- graph-rich composition with useful chart forms
- deliberate imagery, object, media, scene, avatar, map, or dominant chart use when references support it
- varied panel scale and function
- compact controlled typography and container sizing
- a clear rhythm between calm zones and busy zones
- visual energy without chaos
- palette discipline with material range
- live or animated state cues when the product represents monitoring, freshness, or activity

Dashboard content rules:

Consider mixing:

- metrics
- charts
- queues
- recent activity
- user/profile/avatar elements
- media/image blocks
- status chips
- object/scene/product visuals
- action modules
- cards with real contrast in function and visual weight
- tables, maps, timelines, or content previews when the product model supports them

Charts should help the dashboard feel alive and useful. Use line charts, bar charts, donut/ring charts, progress tracks, timeline patterns, mini trends, heatmaps, maps, funnels, score indicators, and sparklines only when they support a visible decision or state.

Dashboard visual energy rule:

Dashboard mode must not become lifeless operational furniture. Elite dashboards combine utility with visual energy: useful state, dense but readable information, a memorable attraction zone, graph/chart richness, purposeful imagery/object/media use, color discipline, varied panel weights, and lively but controlled composition.

Dashboard palette discipline:

Dashboard references must drive palette decisions. Do not default to murky dark green, terminal black, neon lime, or purple AI dashboard palettes unless the reference folder clearly supports that direction.

Dashboard palettes can be:

- light premium
- dark premium
- mixed light/dark
- soft neutral with vivid accents
- black/white with one strong accent
- object/image-driven
- glass/soft material
- editorial color systems

Rules:

- Accent color must be used selectively.
- Do not use one accent everywhere.
- Do not let the whole dashboard become one monochrome wash.
- Neutral surfaces need material range: base, raised panel, quiet panel, active panel, image panel, and data panel.
- Color should clarify hierarchy and state, not decorate every surface.

Elite graph system rule:

Dashboard mode must include meaningful, well-designed visualizations when data is part of the product. At least two distinct chart or data-visualization types should be considered for dashboard mode. One major chart can be the visual anchor, but it must communicate clear state.

Preferred graph and visualization types:

- line trends
- bar charts
- stacked bars
- ring/donut charts
- progress tracks
- score meters
- timeline strips
- distribution charts
- comparison matrices
- heat/priority maps
- mini sparklines
- ranked lists with visual scores

Chart rules:

- Charts must map to product concepts.
- Charts must be readable.
- Charts must not be decorative wallpaper.
- Microcharts should support scanability.

Dashboard image and object anchor rule:

Dashboard mode should consider image/object/media elements when the reference folder shows them. Small avatars are not enough if references use stronger image/object systems.

Accepted roles:

- attraction zone
- proof object
- user/entity context
- media/content preview
- product object
- status visualization
- live/animated tile
- environment/scene mini-map

Image/object rules:

- Images/objects must have a role, not be decoration.
- A dashboard can include one strong visual/object anchor.
- Image panels should help hierarchy, memorability, or product comprehension.
- Visual anchors must not dominate like landing-page hero images unless dashboard references support it.

Dashboard live visual layer:

Many elite dashboards feel alive through subtle motion or animated visual regions: animated chart transitions, pulsing live indicators, moving timeline/state strips, animated media tiles, subtle looped image/video surfaces, progress movement, and hover/selection transitions.

Motion rules:

- Motion must communicate state, freshness, selection, progress, or live activity.
- Motion must not be random decoration.
- Animated images or loops can be used as atmosphere or energy only if they have a product role.
- Dashboard should not feel dead if the product represents live signals, activity, or monitoring.

Avoid:

- same-weight widgets
- fake metrics
- generic SaaS dashboards
- purple AI slop
- weak hierarchy
- terminal-ish dark panel spam
- murky monochrome or terminal-green panel systems
- one accent color applied everywhere
- text-and-metrics-only dashboards
- chart-lite dashboards despite graph-rich references
- charts as decoration
- major charts that are decorative or unclear
- no focal object or attraction zone
- image-starved dashboards when references show media/object anchors
- tiny-avatar-only image usage when a stronger visual anchor is needed
- static dead dashboards for live/monitoring products
- everything as a rectangle of the same importance
- oversized empty dashboard cards, headings, charts, action bars, or containers

Scale guidance:

Dashboard / Command Center Mode must be dense but readable. Avoid giant widgets and same-weight cards. Desktop should show multiple useful panels at once plus one memorable attraction zone. Dashboard scale must not inflate text, cards, padding, containers, charts, or action bars. The screen should deliver useful volume quickly.

Contrast guidance:

Dashboard / Command Center Mode requires strong text/background separation. Do not use low-contrast grey labels everywhere.

Image/object guidance:

Imagery in dashboards must be deliberate, not pasted in. It should create a focal anchor, communicate a product/object, enrich browsing, support hierarchy, add user/entity context, provide a media/content preview, or make the surface more memorable. Remove imagery that does not earn one of those roles.

Dashboard craft rule:

A dashboard is not done when it is merely functional. Dashboard mode needs readable navigation, aligned toolbars, scan-first panels, proportionate actions, collision-free responsive behavior, human palette direction, no fake live/session theater, and polish that makes the product feel designed rather than like a start product.

Global UI craft rules:

- No Cryptic Navigation: navigation must be immediately understandable. Do not use unexplained labels such as `CMD`, `SIG`, `CMP`, `BRF`, vague system labels such as `SD LOCAL`, or icon-only nav without labels, tooltips, or obvious context.
- Crafted Responsive Navigation: desktop nav may be top, side, or hybrid; tablet nav must preserve spacing and readability; mobile nav should become a polished bottom nav or compact top system with clear labels, comfortable touch targets, and visible selected state. Nav must never overlap content or become giant cramped pills.
- Toolbar Alignment Discipline: search inputs, filters, and action buttons in the same toolbar should share height or a clear intentional scale relationship, align baselines, use consistent gaps, and wrap gracefully.
- Container Text Weight Limit: panels should be scan-first. Use short labels, values, one-line summaries, metadata chips, and progressive disclosure. Long copy belongs in details, drawers, previews, or expanded states.
- Button Proportion Discipline: button width should usually follow content. Full-width actions are allowed only when layout and context justify them. Avoid long desktop pills that dominate more than the action deserves.
- No Responsive Collision: layouts must survive 1440, 1280, 1024, 768, and 390 checks with no overlapping containers, colliding chips, covered content, broken forms, or horizontal overflow.
- P0 Layout Integrity: a UI cannot be visually good if layout integrity fails. Text must stay inside containers, charts inside plotting/card areas, cards above readable width, nav understandable, chips/pills intentionally wrapped or truncated, image badges collision-free, buttons proportionate, forms readable, and containers adapted instead of squeezed into garbage.
- Responsive Adaptation, Not Squeezing: desktop may be dense, but tablet must reorganize and mobile must use a dedicated simplified structure. Do not keep the same desktop layout until columns, charts, nav, or cards become unreadable.
- Chart Bounds Discipline: bars, lines, points, axes, labels, and markers must remain inside plot/card bounds. Charts need explicit dimensions or responsive containers, controlled SVG overflow, label-aware padding, and simpler representations at smaller breakpoints when needed.
- Semantic Label Integrity: labels cannot collapse into meaningless fragments such as `C`, `U`, or `?` without an obvious legend. Abbreviations are allowed only when standard, explained, or paired with a visible legend.
- Human Palette Direction: palette must be derived from selected references or product mood. Do not default to terminal green, AI purple, neon lime, generic blue/grey, or one dull machine-generated color wash. Accent color should be limited and meaningful.
- No Fake Live / Session Status Slop: do not use live dots, session-only chips, glowing telemetry, or monitoring/status badges unless the product truly has that state, the label is understandable, and it changes user decision-making.

Dashboard-specific layout integrity:

- Dense desktop dashboards may use multi-column layouts, but tablet must reduce columns or reorganize panels.
- Mobile dashboards must become a stack of prioritized command sections.
- Charts must resize, simplify, or change representation instead of overflowing.
- Queues can become compact lists.
- Side rails must convert to bottom or compact nav.
- Cards must not become skinny unreadable columns.

Rejected dashboard layout failures:

- 3-column dashboard squeezed into tablet
- long text cards forced into narrow columns
- charts overflowing because panels got too small
- desktop rail turning into giant mobile pills
- same desktop composition used at every size

### Artistic / Creative Mode

Use for:

- creative folder
- experimental UI
- editorial references
- visual-heavy inspiration
- `visual-library/approved/inspiration/02-creative-experimental-ui/`

Must produce:

- art-directed composition
- memorable first impression
- asymmetry or unusual rhythm
- fewer elements with more impact
- image, type, and space as the main design material

Avoid:

- normal dashboard structure
- boring grids
- safe template layouts
- decorative chaos with no product clarity

Scale guidance:

Creative / Experimental Mode can use scale dramatically, but only with intent. Large type or image treatment must be balanced by visual tension, smaller details, or layered composition. No giant empty slabs.

Contrast guidance:

Creative / Experimental Mode can be unusual, but readability cannot be accidental. If the user cannot read it, it fails.

Image environment guidance:

Creative / Experimental Mode should treat immersive imagery as material for the whole composition, not a rectangular asset, when references use full-scene atmosphere.

### Landing Page / Poster Mode

Use for:

- landing page folder
- hero page references
- cinematic/product story pages
- `visual-library/approved/inspiration/05-landing-hero-pages/`

Must produce:

- image-led composition
- sparse copy
- poster-like hero
- emotional scene
- minimal UI chrome
- visual rhythm beyond the hero

Avoid:

- Blogspot/content-template structure
- repeated feature sections
- lots of cards
- image pasted into generic SaaS page
- text-heavy marketing page

Scale guidance:

Landing Page / Poster Mode allows large hero type only when the image scene and composition justify it. The page must not become one huge headline plus one huge image. Poster logic still needs calibrated supporting content.

Contrast guidance:

Landing Page / Poster Mode must protect sparse copy. Large type can sit near imagery, but small supporting labels and CTAs need stable contrast zones.

Image environment guidance:

Landing Page / Poster Mode should start from the scene when references use dominant imagery. Do not start from a grid and insert the image later.

### Mobile Product Flow Mode

Use for:

- mobile app references
- consumer app flows
- onboarding/profile/search/home screens
- `visual-library/approved/inspiration/03-mobile-consumer-apps/`
- `visual-library/approved/inspiration/mobile-apps/`

Must produce:

- strong mobile hierarchy
- real flow, not fake Dribbble stills
- clear thumb-friendly actions
- polished card/navigation systems
- readable mobile layouts

Avoid:

- tiny unreadable mockups
- overdecorated fake app shots
- beautiful screens with no usable flow

Scale guidance:

Mobile Product Flow Mode must not take mobile screenshot proportions and blow them up on desktop. Desktop presentation needs richer composition, multiple visible frames, or a product context that uses the wider viewport.

Contrast guidance:

Mobile Product Flow Mode is especially vulnerable to responsive crop changes. Avoid important text over uncontrolled image areas.

### Selection / Gallery / Browse Mode

Use for:

- selection/gallery folder
- roster, browse, marketplace, media library, product configurator references
- `visual-library/approved/inspiration/04-selection-gallery-browse/`

Must produce:

- desire to click/select
- strong selected state
- preview/detail relationship
- browse rhythm
- object hierarchy

Avoid:

- boring equal grids
- no selected-state clarity
- cards that all feel equally important
- object/image swaps that break layout

Scale guidance:

Selection / Gallery / Browse Mode must not make one selected object so huge that browsing disappears. Selection-first UI needs preview, options, comparison, and clear selected state visible together.

Contrast guidance:

Selection / Gallery / Browse Mode must keep image-card title, selected state, and key metadata readable. Do not use unreadable overlay text.

## Reference Usage Report Rule

Before coding any visual-heavy task using visual-library references, create `docs/design/reference-usage-report.md`.

It must include:

- references inspected
- folder mode selected
- extracted principles
- what will not be copied
- visual thesis
- layout strategy
- image role strategy
- image environment strategy
- scale calibration
- contrast / legibility strategy
- navigation strategy for dashboard or visual-heavy work
- toolbar alignment strategy for dashboard or visual-heavy work
- text density strategy for dashboard or visual-heavy work
- button proportion strategy for dashboard or visual-heavy work
- responsive collision checks for dashboard or visual-heavy work
- layout integrity contract for visual-heavy work
- responsive breakpoint proof for visual-heavy work
- palette direction for dashboard or visual-heavy work
- dashboard command-surface strategy when Command Center / Dashboard Mode is selected
- dashboard palette strategy when Command Center / Dashboard Mode is selected
- graph system strategy when Command Center / Dashboard Mode is selected
- image / object / media strategy when Command Center / Dashboard Mode is selected
- anti-patterns being avoided

If this report is missing, the work is not ready for implementation.

Required when Command Center / Dashboard Mode is selected:

```md
## Navigation Strategy

- Primary nav labels:
- Why labels are understandable:
- Responsive nav behavior:
- Mobile/lower nav plan:
- Selected-state plan:
- What nav failure is avoided:
```

Required when dashboard or visual-heavy work includes search, filters, or action clusters:

```md
## Toolbar Alignment Strategy

- Input/button groups:
- Height relationship:
- Wrapping behavior:
- Primary action placement:
```

Required when dashboard or visual-heavy panels include descriptive content:

```md
## Text Density Strategy

- Where long copy appears:
- Where content is summarized:
- Scan-first panels:
- Expanded/details behavior:
```

Required when dashboard or visual-heavy work has visible CTAs or repeated actions:

```md
## Button Proportion Strategy

- Primary button sizing:
- Full-width buttons used? why/why not:
- Desktop vs mobile button behavior:
```

Required before visual-heavy implementation:

```md
## Responsive Collision Checks

- 1440:
- 1280:
- 1024:
- 768:
- 390:
- Known collision risks:
- How they are prevented:
```

Required before visual-heavy implementation:

```md
## Layout Integrity Contract

- Minimum desktop card width:
- Tablet layout behavior:
- Mobile layout behavior:
- Chart containment strategy:
- Text truncation / line-clamp strategy:
- Chip/pill wrapping strategy:
- Image/badge collision prevention:
- Nav responsive behavior:
- Form/control wrapping behavior:
- What happens when content is longer than expected:
```

Required before visual-heavy implementation:

```md
## Responsive Breakpoint Proof

Required checks:

- 1440:
- 1280:
- 1024:
- 768:
- 390:

For each:

- Nav readable:
- Toolbar aligned:
- Cards readable:
- Charts contained:
- No overlap:
- No horizontal overflow:
- Primary action reachable:
```

Required before visual-heavy implementation:

```md
## Palette Direction

- Reference palette observed:
- Chosen palette:
- Accent roles:
- Surface system:
- Why it avoids machine/generic color:
```

Required when Command Center / Dashboard Mode is selected:

```md
## Dashboard Command-Surface Strategy

- Attraction zone:
- Panel mix:
- Chart forms and purpose:
- Image/object/media role:
- Palette direction:
- Material range:
- Utility-heavy zone:
- Queue/list/activity zone:
- Control/action zone:
- Calm zones:
- Busy zones:
- How the design avoids same-weight card soup:
- How the design avoids terminal-ish dark panel spam:
```

Required when Command Center / Dashboard Mode is selected:

```md
## Dashboard Palette Strategy

- Reference palette observed:
- Neutral system:
- Accent use:
- State colors:
- Material range:
- What palette failure to avoid:
- Why the selected palette matches references:
```

Required when Command Center / Dashboard Mode is selected:

```md
## Graph System Strategy

- Major chart:
- Supporting charts:
- Microcharts:
- What each chart communicates:
- What would be decorative/fake:
- How chart styling supports composition:
```

Required when Command Center / Dashboard Mode is selected:

```md
## Image / Object / Media Strategy

- Visual anchor:
- Image/object role:
- Media/avatar/content role:
- Whether animation/live media is useful:
- How imagery avoids being pasted in:
- How it supports dashboard hierarchy:
```

Required section:

```md
## Image Environment Strategy

- Does the reference use image as environment or asset?
- Image role selected:
- Why the image should / should not be boxed:
- Crop strategy:
- Focal object protection:
- Text safe zones:
- Scrim/mask/plate strategy:
- How the layout avoids image-trapped-in-grid:
```

Required section:

```md
## Scale Calibration

- Reference density observed:
- Largest text role:
- Supporting text scale:
- Container/card density:
- Image scale role:
- What we will avoid:
- How this implementation prevents AI scale inflation:
```

Required section:

```md
## Contrast / Legibility Strategy

- Text over image? yes/no
- Protection method:
- Safe zones:
- Focal objects protected:
- Small text contrast plan:
- Responsive crop risk:
- What must be checked at 1440 / 768 / 390:
```

## Image Role Rules

Every major image must have one declared role:

- hero scene
- focal object
- proof object
- background atmosphere
- editorial fragment
- selection thumbnail
- texture/material layer

Images must not be used as random decoration. If an image does not clarify composition, identity, proof, mood, selection, or material, remove it or change its role.

## Image As Environment, Not Rectangular Asset

Definition:

In artistic, landing-page, cinematic, editorial, and visual-heavy references, imagery often defines the entire page atmosphere. The image is not merely content inside a card. It is the environment the UI lives inside.

Migi strongly prefers this when the reference folder supports it.

Rule:

When reference screenshots use large atmospheric imagery, agents must explore using the image as:

- full-bleed background
- oversized scene
- masked environment
- edge-to-edge poster field
- layered atmosphere
- soft backdrop behind type
- composition driver

Agents must not default to:

- square image card
- rectangular image block
- image beside text in a rigid two-column grid
- image pasted into a dashboard/card layout
- image trapped inside obvious borders
- image treated as decorative content

The image should feel like the page was composed around it.

## Hero Is Not Enough Rule

If the hero follows the reference but the rest of the page falls back to generic grids, cards, or sections, max score is 70.

For landing/poster, artistic/creative, and image-led work, the visual rhythm must continue beyond the first viewport.

## No AI Scale Inflation

Definition:

AI-generated frontend often makes everything too large: headlines, cards, sections, images, buttons, spacing, and containers. The result feels inflated, empty, childish, and low-information compared to real premium UI references.

Migi strongly rejects this.

Rule:

For every visual-heavy task, calibrate scale against the reference folder before implementation.

Compare:

- headline size
- body text size
- container size
- card density
- image size
- spacing
- number of visible content objects
- amount of meaningful information above the fold

The goal is not "make everything smaller." The goal is controlled scale, useful density, hierarchy with range, content richness, and no giant empty furniture.

Large typography is not banned. It must be justified by the reference and balanced by composition, imagery, and supporting content density.

## Award-Level Contrast Discipline

Migi strongly rejects UI where text is hard to read because it is placed over busy images, low-contrast gradients, washed-out panels, or weak grey-on-dark surfaces.

Every visual-heavy design must define a contrast strategy before implementation.

For every text layer, know:

- what background it sits on
- whether the background is flat, image, gradient, video, or texture
- whether the local background changes behind the text
- whether the text is critical or decorative
- what contrast protection is used

Hard rule:

Important text must never rely on hope. It needs a stable readable background.

## Text On Images Requires Protection

Text may sit over imagery only when at least one protection method is intentionally used:

- dark/light gradient scrim
- solid or translucent text plate
- blur/backdrop plate
- local vignette
- image mask
- safe empty image zone
- deliberate crop that leaves clean negative space
- strong text shadow only as support, not the only protection
- separating text outside the image

Forbidden:

- white/cream text directly on bright or busy photo areas
- small text over high-frequency image detail
- lime/accent labels over bright image areas without backing
- important product copy over faces, eyes, hands, or focal objects
- text whose readability depends on one lucky crop
- gradient overlays that protect one viewport but fail on another

If the image changes or crops responsively, contrast must still hold at 1440, 768, and 390.

## Image-Led Does Not Mean Text-On-Image Chaos

Image-led artistic design should use images as composition drivers, not uncontrolled backgrounds for text.

Correct:

- image as hero scene
- image as focal object
- image as proof object
- text placed in deliberate safe zones
- sparse copy with clear contrast
- image crop protects focal object and text area

Wrong:

- random text floating over noisy image areas
- image cards with unreadable overlays
- important text over dog/person faces
- inconsistent overlays across images
- image treatment changes from section to section without reason

## Landing Page / Artistic Mode

Use when Migi asks for:

- landing page
- creative
- artistic
- cinematic
- editorial
- visual-heavy
- image-led
- based on landing-page inspiration
- based on creative inspiration

This mode means:

- poster logic, not dashboard logic
- image-first, not section-first
- composition-led, not component-led
- sparse copy, not explanatory content blocks
- atmosphere before completeness
- fewer UI objects with stronger visual purpose
- weak or invisible grid when possible
- one dominant visual thesis
- emotional scene before feature explanation

Do not:

- use normal SaaS homepage rhythm
- stack text-heavy content sections
- repeat image-left/text-right blocks
- default to feature-card rows, stats blocks, boxed proof sections, or dashboard furniture
- use images as decoration inside a generic grid
- make only the hero artistic and then fall back to ordinary cards and sections

Required check:

Before implementation, name how the landing page will preserve image-led mood beyond the hero. If the answer is a normal section stack with prettier images, redesign before coding.

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

For landing-page, creative, artistic, cinematic, editorial, or image-led references, extract composition before colors. Preserve image dominance, sparse copy, atmospheric rhythm, and poster/editorial behavior. Do not turn these references into a normal landing page with artistic images pasted into bordered cards or feature sections.

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

For Landing Page / Artistic Mode, product completeness comes after the image-led visual thesis. Preserve artistic rhythm beyond the first viewport before adding extra sections.

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
- use Blogspot/content-template landing structure when Migi asked for landing-page, creative, artistic, cinematic, editorial, visual-heavy, or image-led work
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
Reference folder mode:
Reference usage report:
Image roles:
Image environment strategy:
Scale calibration:
Contrast / legibility strategy:
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
