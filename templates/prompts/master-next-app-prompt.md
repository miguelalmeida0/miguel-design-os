# Master Next App Prompt

Work in:
`{{PROJECT_PATH}}`

Protected folders:

- `source-projects/`
- `captures/`
- `raw-chat-input/`

Design OS requirement:
Use Miguel Design OS from `.design-os` if embedded in the project, otherwise use `/Users/malmeida/Desktop/miguel-design-os`.

## Reading List

1. `AGENTS.md`
2. `design-dna/00_COMPACT_AGENT_CONTEXT.md`
3. `docs/architecture/design-os-operating-model.md`
4. `docs/routing/skill-routing-map.md`
5. `visual-library/README.md`
6. relevant benchmark from `evaluation/benchmarks/`
7. relevant visual-library approved/rejected references

## Mandatory First Step: No-Image Fast Direction Gate

Default to No-Image Fast Direction Gate unless Migi explicitly asks for deep exploration, full strategy, research, benchmark, reference decomposition, or full spec before selection. Read `design-dna/NO_IMAGE_DIRECTION_GATE_CONTEXT.md` and `design-dna/FAST_DIRECTION_GATE_CONTEXT.md` first.

Before implementation, create no-image direction artifacts for:

- Direction A - Safe Refined
- Direction B - Artistic Expressive
- Direction C - Unexpected High-Character

Required:

- `docs/design/direction-options.md`
- `docs/design/direction-layout-maps.md`
- `docs/design/direction-risk-check.md`

Each direction must be concise: name, product thesis, domain palette rationale, layout structure, ASCII/block layout map, navigation model, primary product object, interaction model, what it avoids, likely failure risk, implementation complexity, and recommendation score. Maximum 200 words per direction.

Do not create `docs/design/visual-spec.md`, design-system token docs, color/contrast docs, navigation strategy, motion plan, Unsplash manifest, QA docs, build/lint reports, screenshots, or frontend code before selection unless this prompt is explicitly running Deep Direction Gate.

If all three directions use the same navigation structure, the direction gate fails.

Hard bans:

- no unreadable navigation over images/giant type/changing backgrounds
- no forced app-name/logo/initials chrome
- no decorative circular/orbital/radar/HUD line overlays
- no fake sonar rings or generic orbit graphics
- no decorative hairline/separator ornaments
- no red divider lines as fake editorial detail
- no section-label-plus-line filler
- no cut-off mobile sheets or hidden modal actions
- no active/underline/progress bars overlapping labels
- no selectable chips/items with missing selected state
- no text-only bottom nav in practical mobile product flows unless justified
- no add-new cards styled like content cards
- no badges/counters overlapping nav labels/icons
- no random domain palettes chosen just because they look cool
- no placebo navigation where selected tabs/nav do not change visible product state
- no map/floor-plan/timeline/canvas label collisions
- chart/diagram/canvas system present when charts, maps, timelines, diagrams, or spatial product objects exist
- no desktop command surface that buries the primary product object in card soup

No paid API calls during the default direction gate. Paid image generation may only run if Migi explicitly writes `I approve paid API image generation for this run.` and the command includes `--paid-ok`. Do not code before selection.

## Figma Cost Safety

If Figma work is requested, use only normal Figma Plugin API operations: pages, frames, vectors, shapes, text, variables if available, styles, components, node metadata, and storyboard frames.

Do not use Figma AI, Figma Weave, Figma Make, paid generation, AI credits, Figma Motion, Figma Draw, Dev Mode-only operations, or paid-seat Figma features. If the requested operation requires one, stop and report exactly:

`Blocked: this requires a paid or plan-gated Figma feature.`

After selection, create `docs/design/selected-direction.md`.

## Direction Selection Behavior

- First pass: generate directions and stop.
- User selection: treated as approval to build.
- After selection: create `docs/design/selected-direction.md`, `docs/design/visual-spec.md`, `docs/design/design-system-tokens.md`, `docs/design/color-and-contrast.md` or equivalent palette doc, navigation/motion/preflight docs as applicable, then implement.
- Do not ask again unless user says planning-only.

When Migi chooses A, B, C, or a hybrid, proceed immediately to implementation. Do not stop after selected-direction.md. Do not ask for another confirmation unless Migi explicitly requested planning-only/spec-only/no-code.

## Active Dials

Declare:

- DESIGN_VARIANCE
- MOTION_INTENSITY
- VISUAL_DENSITY
- ART_DIRECTION
- IMAGE_USAGE_PRIORITY
- IMPLEMENTATION_CLARITY
- MOBILE_NATIVE_FEEL when mobile matters
- GRAPH_COMPLEXITY when charts/data matter

## Reference / Image-First Lock

If references are used:

- select exact anchors
- create `docs/design/reference-decomposition.md`
- create `docs/design/design-transfer-spec.md`
- declare image roles
- do not copy screenshots as production assets

## Unsplash Asset Sourcing

If real imagery is required:

- create `docs/design/unsplash-search-plan.md`
- define image roles
- search with query, orientation, optional color, `content_filter`, and `order_by`
- select images based on art direction, crop quality, palette fit, and source truth
- download locally when possible or document remote URLs explicitly
- create `docs/design/unsplash-asset-manifest.md`
- include photographer, source page, download metadata, alt text, crop strategy, and product-truth notes
- verify responsive crops and text safe zones
- do not use placeholder, fake, or generic filler imagery

## Visual Spec

Create `docs/design/visual-spec.md` with:

- Direction Gate Summary
- selected mode
- selected direction
- reference mechanics
- navigation readability strategy
- domain palette fit
- no placebo navigation contract
- spatial label safe zones when maps/floor plans/timelines/canvases exist
- visualization tool routing, data contract, chart-system plan, and data-viz hardening plan when charts/graphs/data visuals exist
- diagram/canvas coordinate system, layer model, object model, label model, collision strategy, selection/inspector behavior, and responsive fallback when spatial product objects exist
- label lanes, callout routes, badge safe zones, construction-line semantics, and performance budget when pattern canvases or dense diagrams exist
- diagram integrity detector plan or blocked reason when runnable spatial UI exists
- desktop command-surface primary object strategy
- identity chrome decision
- decorative geometry strategy
- line/divider strategy
- modal/sheet fit strategy when mobile overlays exist
- mobile nav icon+label strategy for practical product apps
- selection state strategy for chips/tabs/filters/object selectors
- control decoration collision check
- add/create action differentiation
- palette exploration when expressive mode applies
- layout strategy
- responsive strategy
- motion strategy
- benchmark target

## Navigation Exploration

Before implementation:

1. Create `docs/design/navigation-strategy.md`.
2. Propose at least 3 navigation concepts.
3. Select one based on the chosen design direction.
4. Document desktop, tablet, and mobile behavior.
5. Define CTA/nav relationship, active state, focus state, and accessibility notes.
6. Implement only the selected navigation system.

## Design-System Tokens

Define semantic tokens before UI code:

- colors
- typography
- spacing
- radius
- shadow/elevation
- borders/dividers
- chart/state colors
- component variants
- image treatment
- motion rules

## OKLCH/APCA Contrast

Run a palette pass before final palette approval. Repair contrast by changing OKLCH lightness, not random hex guessing.

## Implementation

Build the frontend aha moment first:

- truthful mock data in data files
- visual shell
- core local loop
- visible interactions working locally
- no backend unless requested

## QA

Run build/lint when available. Capture screenshot evidence at required breakpoints. Run the relevant benchmark, scorecard, specialist reviews, and done report.

For post-build review, route:

- `evidence-backed-critique` when Migi asks for critique, screenshots are uploaded for review, or a dogfood UI reaches final state
- `text-clarity-review` before calling copy-heavy product UI final
- `production-hardening-review` before calling product UI production-ready

## Advanced Motion Gate

If the task asks for advanced animations, cinematic motion, artistic motion, Awwwards/Godly/Recent-level motion, scroll animation, appearing while scrolling, or portfolio motion:

1. Read `skills/advanced-motion-choreography/SKILL.md`.
2. Name exact motion references.
3. Create `docs/design/motion-choreography-plan.md`.
4. Choose a tool stack from `design-intelligence/motion-tool-stack-guidance.md`.
5. Implement at least page/section, image/media, typography, navigation/menu, and micro-feedback layers when feasible.
6. Capture a motion sequence with `tools/capture-motion-sequence.mjs` or document the blocker.
7. Run `skills/review-animations/SKILL.md`.
8. Score against `evaluation/benchmarks/motion-cinematic.benchmark.md`.

## Final Response Contract

- skills used
- benchmark used
- direction options / selected direction
- implemented selected direction
- visual spec
- design-system tokens
- OKLCH/APCA palette pass
- interactions verified
- build/lint result
- local dev server URL if running
- Unsplash search plan / asset manifest when applicable
- navigation strategy / selected navigation pattern
- motion-choreography plan / motion evidence when applicable
- screenshots or blocker
- benchmark score
- scorecard caps
- evidence-backed critique / text clarity / production hardening status when relevant
- files changed
- remaining weaknesses
