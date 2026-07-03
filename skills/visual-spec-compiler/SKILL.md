---
name: visual-spec-compiler
description: Convert a product brief, visual references, active design dials, design-system rules, chart/color/style/landing intelligence, and Miguel Design OS constraints into a buildable visual specification before coding. Use for visual-heavy tasks, new frontend apps, redesigns, dashboards, landing pages, mobile flows, reference-locked builds, or any work where no visual spec should mean no implementation.
---

# Visual Spec Compiler

Use this before significant visual UI implementation.

## Files To Read

- `design-dna/design-generation-dials.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/brief-inference-rules.md`
- `design-dna/anti-ai-tell-preflight.md` for landing, portfolio, marketing, or redesign work
- `design-dna/motion-and-delight-rules.md` when motion or delight is involved
- `design-dna/landing-page-craft-rules.md` when landing pages are involved
- `design-dna/mobile-product-rules.md` when mobile product flow is involved
- `design-dna/art-directed-palette-exploration.md` when artistic, cinematic, landing, portfolio, creative, editorial, or experimental mode is active
- `design-dna/unsplash-asset-sourcing-rules.md` when real imagery, Unsplash, or source-image roles are needed
- `design-intelligence/navigation-pattern-guidance.md`
- `design-intelligence/navigation-patterns.json`
- `design-intelligence/composition-originality-guidance.md`
- `design-intelligence/color-guidance.md`
- `design-intelligence/domain-palette-fit-guidance.md`
- `design-intelligence/desktop-command-surface-guidance.md` for desktop command surfaces
- `design-intelligence/visualization-tool-routing.md` when charts, diagrams, maps, canvases, timelines, node graphs, or spatial product objects are involved
- `design-intelligence/spatial-map-ui-patterns.json` when maps, floor plans, seating charts, canvases, or timelines are involved
- `design-intelligence/chart-guidance.md` when charts/data are involved
- `design-intelligence/style-taxonomy.md` when style direction is open
- `design-intelligence/landing-pattern-guidance.md` when landing pages are involved
- `design-intelligence/mobile-product-guidance.md` when mobile product flow is involved
- `templates/visual-spec.template.md`

## Hard Rule

No visual spec = no implementation for visual-heavy tasks.

Literal Target Copy Mode is the exception; it uses a target-copy report and comparison report instead of a new art-direction spec.

Direction selection means build: when Migi chooses A, B, C, says use/go with a direction, or selects a hybrid, that choice is implementation approval unless Migi explicitly says spec only, planning only, do not implement, wait, no code yet, direction selection only, just document it, or do not edit src. The visual spec must treat `docs/design/selected-direction.md` as the implementation source of truth, not as another permission checkpoint.

## Workflow

1. Classify task mode.
2. Declare active design dials.
3. Verify `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, `docs/design/direction-risk-check.md`, and `docs/design/selected-direction.md` exist when the No-Image Fast Direction Gate applies.
4. Select references or image-first source.
5. Choose visual mode and layout recipe.
6. Define visual thesis.
7. Define design-system token direction.
8. For expressive modes, include safe refined, artistic expressive, and unexpected high-character palette directions.
9. If real imagery is needed, define Unsplash asset sourcing strategy, image roles, search plan, manifest path, crop strategy, alt text, and product-truth notes.
10. If navigation is present in visual-heavy work, require `docs/design/navigation-strategy.md`, 3 navigation concepts, selected pattern, desktop/tablet/mobile behavior, CTA behavior, active state, focus state, and generic nav default avoided.
11. Define Domain Palette Fit: product domain, user environment, task pressure, emotional state, state color semantics, and random palette avoided.
12. Define No Placebo Navigation: every nav/tab/filter/segmented control must change visible product state, route, content, scope, or filter.
13. For charts, graphs, maps, diagrams, timelines, canvases, or visual encodings, route `skills/chart-system-director/SKILL.md` and define visualization intent, data contract, chart/tool choice, labels, legends, states, responsiveness, and accessibility.
14. For maps, floor plans, seating charts, timelines, diagrams, pattern canvases, node graphs, or canvas-like product objects, route `skills/diagram-canvas-system/SKILL.md` and define coordinate system, bounds, layer model, object model, label model, collision rules, selection-to-inspector behavior, and whether `tools/diagram-integrity-check.mjs` can run after implementation.
15. For desktop command surfaces, define the primary product object and how support panels stay subordinate.
16. Define image, chart, motion, mobile, contrast, and responsive strategies.
17. For mobile product work, define modal/sheet fit, bottom nav icon+label strategy, selection-state persistence, control-indicator collision prevention, add/create action differentiation, safe-area behavior, and 390 px proof.
18. Name forbidden drift and scorecard risks.
19. Write `docs/design/visual-spec.md`.
20. If Migi has already selected a direction, continue into `docs/design/design-system-tokens.md`, `docs/design/color-and-contrast.md` or equivalent palette doc, navigation/motion/preflight docs as applicable, and implementation after writing the spec unless the request was explicitly planning-only/no-code.

## Output Contract

Create `docs/design/visual-spec.md` with:

- task mode
- active dials
- Direction Gate Summary
- reference anchors
- visual thesis
- layout skeleton
- design-system tokens
- palette exploration when required
- image role strategy
- Unsplash asset sourcing strategy when real imagery is needed
- navigation strategy and selected navigation pattern
- navigation readability strategy when nav overlaps image/type/changing backgrounds
- domain palette fit
- no placebo navigation contract
- spatial label safe zones when maps/floor plans/timelines/canvases exist
- desktop command-surface primary object strategy
- identity / brand chrome decision
- decorative geometry strategy
- line / divider strategy
- chart strategy
- visualization tool routing / library recommendation when charts, diagrams, maps, timelines, canvases, or spatial product objects exist
- data contract for every chart or data-encoding diagram
- diagram/canvas coordinate, layer, object, label lane, callout route, badge-safe-zone, collision, performance, and selection model when spatial UI exists
- diagram integrity QA plan or blocked reason when runnable spatial UI exists
- mobile strategy
- modal / sheet fit strategy for mobile overlays
- mobile navigation icon strategy for practical mobile product bottom nav
- selection state strategy for chips/tabs/filters/object selectors
- control decoration collision check
- add / create action strategy
- interaction strategy
- responsive strategy
- QA/evidence plan
- forbidden drift

For visual-heavy landing, portfolio, marketing, and redesign work, also include:

```md
## Design Read
- page kind:
- audience:
- vibe:
- reference signals:
- selected mode/system:
- quiet constraints:

## Active Dials
- DESIGN_VARIANCE:
- MOTION_INTENSITY:
- VISUAL_DENSITY:
- ART_DIRECTION:
- IMAGE_USAGE_PRIORITY:
- IMPLEMENTATION_CLARITY:

## Direction Gate Summary
- directions proposed:
- selected direction:
- what was rejected:
- what was hybridized:
- why this direction won:

## Palette Exploration
- Palette Direction A: Safe Refined:
- Palette Direction B: Artistic Expressive:
- Palette Direction C: Unexpected High-Character:
- Selected Palette:
- OKLCH/APCA contrast notes:
- what AI-default palette it avoids:

## Anti-AI-Tell Plan
- likely AI defaults for this task:
- banned patterns:
- how the spec avoids them:

## Motion Strategy
- should motion exist?
- frequency profile:
- motion purpose:
- hero/signature moment:
- feedback layer:
- transition layer:
- reduced-motion behavior:

## Delight Strategy
- earned delight moments:
- personality register:
- what delight is avoided:

## Preflight Checklist
- top hard checks before implementation:

## Unsplash Asset Sourcing
- real imagery required?:
- image roles:
- search plan path:
- asset manifest path:
- local/remote image policy:
- crop strategy:
- text safe zones:
- alt text plan:
- source/photographer metadata plan:
- product-truth constraints:

## Navigation Strategy
- primary destinations:
- secondary destinations:
- navigation concept options:
- selected navigation pattern:
- desktop behavior:
- tablet behavior:
- mobile behavior:
- CTA behavior:
- active state:
- focus state:
- accessibility:
- what generic nav default is avoided:

## Navigation Readability Strategy
- does nav overlap images/type?:
- background states:
- contrast protection:
- scroll-state behavior:
- active/focus state:
- mobile behavior:
- readability risk:
- screenshot checks:

## Domain Palette Fit
- product domain:
- user environment:
- task pressure:
- emotional state:
- domain colors to use:
- domain colors to avoid:
- state color semantics:
- why the palette fits this product:
- what random/cool palette was rejected:

## No Placebo Navigation Contract
- nav/tabs/segmented controls:
- visible content change for each:
- route/scope/filter/state change for each:
- unimplemented destinations removed or disabled:
- active state matches visible product state:

## Spatial Label Safe Zones
- spatial surface type:
- labels needing protection:
- object/card collision risks:
- safe-zone rules:
- z-index/layer rules:
- dynamic collision strategy:
- screenshot checks:

## Desktop Command Surface Primary Object
- primary product object:
- why it owns the screen:
- support panels:
- inspector/queue/control roles:
- how panels avoid burying the object:
- generic card-soup route avoided:

## Identity / Brand Chrome Decision
- visible logo/name needed? yes/no:
- why:
- where identity appears:
- what identity chrome is removed:
- does nav need the app name?:
- does hero already carry identity?:
- Migi preference considered:

## Decorative Geometry Strategy
- are decorative circles/orbits/radar lines used?:
- if yes, are they functional?:
- what do they represent?:
- did Migi explicitly request them?:
- if decorative only, remove them:
- alternative background/composition strategy:

Default answer for Migi projects: Decorative circular/orbital overlays are not used.

## Line / Divider Strategy
- are lines used?:
- functional or decorative?:
- what do they separate?:
- do they align to real layout boundaries?:
- are any decorative hairlines removed?:
- alternative hierarchy method:

Default answer: No decorative hairline ornaments are used.

## Modal / Sheet Fit Strategy
- modal type:
- viewport max-height:
- internal scroll behavior:
- action placement:
- safe-area handling:
- close/dismiss behavior:
- relationship to bottom nav:
- 390px check:
- failure risks:

## Mobile Navigation Icon Strategy
- nav destinations:
- icon family:
- icon per destination:
- label per destination:
- active state:
- badge/counter behavior:
- touch target:
- safe-area handling:

## Selection State Strategy
- selectable controls:
- selected state:
- hover state:
- pressed state:
- focus state:
- disabled state if any:
- persistence behavior:
- accessibility attributes:
- local state source:

## Control Decoration Collision Check
- active indicators:
- underlines/progress strips:
- label safe zones:
- long-label behavior:
- alternative state treatment if bars do not fit:

## Add / Create Action Strategy
- where add action lives:
- visual treatment:
- how it differs from content cards:
- icon:
- label:
- interaction:
- empty state:
- risk of confusion:
```

## Stop Conditions

Stop before coding when:

- active dials are missing
- Three-Direction Mockup Gate applies but `docs/design/direction-options.md` is missing
- Strict 3-Image Direction Gate applies but generated direction images, rendered previews, or explicit Migi-approved blocked fallback are missing
- visual-heavy work has no generated image manifest when image generation succeeded
- Migi has not selected a direction before implementation
- `docs/design/selected-direction.md` is missing after selection or hybrid direction
- Migi selected a direction but the agent treats the spec as awaiting another implementation approval
- design-system direction is missing
- artistic/landing/portfolio/cinematic/experimental work lacks palette exploration
- real imagery is required but Unsplash/search/source plan is missing
- visual spec includes major image roles but no asset manifest/source-truth plan
- references are vague when a folder was specified
- charts lack rationale
- mobile behavior is unspecified for mobile work
- visual-heavy implementation starts without `docs/design/visual-spec.md`
- visual spec starts before the no-image direction gate has produced `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, and `docs/design/direction-risk-check.md`
- visual spec treats paid generated images as required for the default workflow
- landing/portfolio/redesign work lacks a design read
- motion is planned without purpose, frequency profile, or reduced-motion behavior
- advanced/cinematic/artistic/portfolio motion is requested but `docs/design/motion-choreography-plan.md` is not required
- advanced motion lacks at least page/section, image/media, typography, navigation/menu, and micro-feedback layers
- motion is central but no motion benchmark/evidence plan exists
- anti-AI-tell preflight is skipped for landing/portfolio/marketing work
- navigation overlaps images, giant type, video, or changing backgrounds without a readability strategy
- domain palette fit is missing for a product UI
- random domain palette is selected because it looks cool
- navigation/tabs/filters change active style without changing visible product state
- chart, graph, map, timeline, or diagram has no data contract
- chart or diagram has no library/tool routing rationale
- chart/diagram state plan lacks empty, loading, or error states when async
- diagram/canvas has no coordinate system, layer model, label model, or collision strategy
- canvas object positions are arbitrary or undocumented
- selectable spatial objects do not update inspector/details
- spatial labels collide with objects/cards/glows or have no safe-zone strategy
- desktop command surface has no central primary product object
- primary product object is buried by support panels/cards
- forced app-name/logo chrome appears without visual-spec justification
- decorative orbital/circular/radar/HUD overlays appear without explicit Migi approval and functional meaning
- decorative separator hairlines or label rails appear without functional line/divider strategy
- mobile modal or bottom sheet fit strategy is missing when mobile overlays exist
- practical mobile product bottom nav lacks an icon+label strategy
- selectable controls lack selected-state persistence strategy
- add/create action differentiation is missing when creating content is part of the product
- control indicators, active bars, or progress strips have no collision-prevention plan

## Advanced Motion Addendum

When advanced motion is requested, the visual spec must point to `docs/design/motion-choreography-plan.md` and summarize:

- exact motion references
- selected motion tool stack
- signature motion moment
- five motion layers
- section-by-section motion map
- reduced-motion behavior
- motion sequence evidence plan
- `evaluation/benchmarks/motion-cinematic.benchmark.md` review plan

## Direction Gate Summary

The visual spec must include:

```md
## Direction Gate Summary
- direction options:
- direction layout maps:
- direction risk check:
- selected direction:
- what was rejected:
- what was hybridized:
- why selected:
- selected layout map / direction card as source of truth:
- paid/generated images used? yes/no:
- if paid images were used, approval and `--paid-ok` evidence:
- what parts of generated images, if any, must not be copied literally:
```

If no no-image direction options, layout maps, risk check, or selected direction exists, the visual spec is blocked unless Migi explicitly approved skipping the gate. Paid image generation is never required for a valid direction gate.

## Post-Build Review Plan

For product UI or finished-state review, the visual spec should identify whether these post-build layers are required after implementation:

- Evidence-Backed Critique: yes/no and why.
- Text Clarity Review: yes/no and copy-heavy surfaces.
- Production Hardening Review: yes/no and likely edge-case risks.

Do not run these reviews during Fast Direction Gate. They belong after implementation, screenshots, or browser review.
