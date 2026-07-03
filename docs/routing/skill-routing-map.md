# Skill Routing Map

Use the smallest useful skill set. Skills are specialists, not a pile of prompt text to load every time.

## New Visual-Heavy App

1. No-Image Fast Direction Gate by default: read `design-dna/NO_IMAGE_DIRECTION_GATE_CONTEXT.md` and `design-dna/FAST_DIRECTION_GATE_CONTEXT.md`, create `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, and `docs/design/direction-risk-check.md`, then stop.
2. After Migi selects A/B/C/hybrid, selection means build approval: create `docs/design/selected-direction.md` and continue.
3. `visual-spec-compiler`
4. `design-dna/design-system-first-rules.md`
5. `oklch-contrast-palette`
6. `unsplash-asset-sourcing` when real imagery is required
7. mode-specific skill
8. implementation
9. `screenshot-scorecard-review`
10. `anti-ai-slop-review` / `anti-ai-tell-preflight`
11. `text-clarity-review` when copy-heavy product UI exists
12. `production-hardening-review` before calling product UI production-ready
13. `evidence-backed-critique` for full post-build critique
14. `make-interfaces-feel-better`
15. `review-animations` if motion code exists

Deep Direction Gate is opt-in only for deep exploration, full strategy, full spec, research, benchmark, or reference decomposition.

## Landing / Portfolio / Marketing

1. `image-first-frontend`
2. `landing-page-craft-director`
3. `unsplash-asset-sourcing` when real photography or Unsplash assets are needed
4. `anti-ai-tell-preflight`
5. `oklch-contrast-palette`
6. `motion-craft-director` if motion is planned
7. `screenshot-scorecard-review`

## Real Imagery / Unsplash

1. `unsplash-asset-sourcing`
2. `image-first-frontend`
3. `oklch-contrast-palette` for image/palette compatibility
4. `screenshot-scorecard-review` for crop, safe-zone, and broken image checks

Use when real imagery is needed, image-first frontend is active, landing pages depend on photography, Migi asks for Unsplash, or a visual spec includes image roles but no assets.

## Dashboard / Data Product

1. `agent-workflows/reference-locked-build-mode.md`
2. `dashboard-graph-system`
3. `chart-system-director`
4. `data-visualization-selection`
5. `diagram-canvas-system` when maps, floor plans, timelines, canvases, or node graphs are present
6. layout-integrity rules from `design-dna/new-app-generation-rules.md`
7. `data-viz-hardening-review` after implementation
8. `screenshot-scorecard-review`

## Charts / Diagrams / Spatial Canvas

1. `chart-system-director` for charts, graphs, analytics, comparisons, rankings, distributions, timelines, gauges, maps, heatmaps, and data-encoding visuals.
2. `diagram-canvas-system` for pattern canvases, floor maps, seating charts, node graphs, workflow builders, spatial maps, architecture diagrams, and object-based product surfaces.
3. `data-visualization-selection` when chart type selection needs data-shape guidance.
4. `design-intelligence/visualization-tool-routing.md` for D3, Observable Plot, Vega-Lite, ECharts, Recharts, Chart.js, Nivo, React Flow, React Konva/Konva, Mermaid, D2, custom SVG, or CSS/HTML routing.
5. `data-viz-hardening-review` after implementation.
6. `tools/diagram-integrity-check.mjs` for runnable spatial UIs with `data-diagram-*` markup.
7. `screenshot-scorecard-review` for visible label, bounds, tooltip, legend, overlap, and responsive evidence.

## Mobile Product

1. `mobile-product-flow`
2. bottom navigation rules from `design-dna/mobile-navigation-defaults.md`
3. mobile product rules from `design-dna/mobile-product-rules.md`
4. safe-area, modal/sheet fit, icon+label bottom nav, selection persistence, add-action differentiation, and control-indicator collision checks
5. `screenshot-scorecard-review`

## Color / Contrast

1. `oklch-contrast-palette`
2. `design-intelligence/color-guidance.md`
3. `screenshot-scorecard-review`

## Motion

1. `animation-vocabulary` for naming.
2. `advanced-motion-choreography` when Migi asks for advanced animations, cinematic motion, artistic motion, award-winning motion, Awwwards/Godly/Recent-level motion, scroll animations, appearing while scrolling, portfolio motion, or motion like Graffico/Manet/UXBert/Podium.
3. `motion-craft-director` for product motion planning.
4. Implementation.
5. `tools/capture-motion-sequence.mjs` if the UI can run and motion is central.
6. `review-animations` for code review.
7. `make-interfaces-feel-better` for final feel polish.
8. `screenshot-scorecard-review` for evidence.
9. `emil-design-engineering` for craft polish when component details need review.

Advanced motion requires `docs/design/motion-choreography-plan.md`, at least page/section, image/media, typography, navigation/menu, and micro-feedback layers, reduced-motion behavior, and `evaluation/benchmarks/motion-cinematic.benchmark.md` scoring.

## Final Polish

1. `make-interfaces-feel-better`
2. `frontend-art-director-review`
3. `screenshot-scorecard-review`
4. `text-clarity-review` when copy clarity matters
5. `production-hardening-review` when production readiness is claimed
6. `evidence-backed-critique` when Migi asks for critique or a finished dogfood UI needs full review

## Evidence-Backed Critique

Use `evidence-backed-critique` when Migi asks "critique this", uploads screenshots for review, a dogfood app reaches final state, a UI feels wrong but the exact issue is unclear, or post-build quality scoring is needed.

Do not use it when creating first direction options, doing Fast Direction Gate, writing implementation code, or doing quick small fixes.

## Overlap Clusters

Do not merge these yet. Route them intentionally.

### Image-First / Website-To-Code / Landing Craft

- `image-first-frontend` handles image/reference-first implementation.
- `image-first-website-to-code` handles premium website section translation.
- `landing-page-craft-director` handles landing rhythm, section jobs, and anti-Blogspot discipline.

### Landing Pattern / Landing Craft / Anti-AI Preflight

- `landing-page-pattern-director` selects the landing pattern.
- `landing-page-craft-director` directs composition and section rhythm.
- `anti-ai-tell-preflight` blocks generated-page tells before handoff.

### Anti-Slop / Art Director / Screenshot Scorecard

- `anti-ai-slop-review` catches generic AI-builder failure modes.
- `frontend-art-director-review` critiques visual thesis and composition quality.
- `screenshot-scorecard-review` enforces evidence, responsiveness, and hard caps.

### Motion-Craft / Review-Animations / Emil Polish / Delight

- `advanced-motion-choreography` plans award-level page motion.
- `motion-craft-director` plans product motion.
- `review-animations` approves or blocks motion code.
- `emil-design-engineering` checks invisible component craft.
- `delight-opportunity-director` finds earned personality moments.

### Dashboard-Graph-System / Data-Visualization-Selection

- `dashboard-graph-system` defines the command surface and graph system.
- `chart-system-director` defines the visualization intent, data contract, chart/tool choice, states, responsiveness, and accessibility.
- `data-visualization-selection` chooses chart types from data shape and user decision.
- `diagram-canvas-system` defines spatial canvas coordinate/layer/object/label/collision/selection models.
- `data-viz-hardening-review` stress-tests implemented charts, diagrams, labels, legends, tooltips, axes, and canvases.
