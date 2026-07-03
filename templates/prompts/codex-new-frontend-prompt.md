# Codex New Frontend Prompt

Work in:
`{{PROJECT_PATH}}`

Protected folders:
`source-projects/`, `captures/`, `raw-chat-input/`

Selected mode:
`{{SELECTED_MODE}}`

Active dials:

- DESIGN_VARIANCE: `{{DESIGN_VARIANCE}}`
- MOTION_INTENSITY: `{{MOTION_INTENSITY}}`
- VISUAL_DENSITY: `{{VISUAL_DENSITY}}`
- ART_DIRECTION: `{{ART_DIRECTION}}`
- IMAGE_USAGE_PRIORITY: `{{IMAGE_USAGE_PRIORITY}}`
- IMPLEMENTATION_CLARITY: `{{IMPLEMENTATION_CLARITY}}`
- MOBILE_NATIVE_FEEL: `{{MOBILE_NATIVE_FEEL}}`
- GRAPH_COMPLEXITY: `{{GRAPH_COMPLEXITY}}`

Required files to read:

- `AGENTS.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/brief-inference-rules.md` for visual-heavy landing, portfolio, marketing, or redesign work
- `design-dna/anti-ai-tell-preflight.md` for landing, portfolio, marketing, or redesign work
- `design-dna/motion-and-delight-rules.md` when motion or delight is planned
- `design-dna/design-generation-dials.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/art-directed-palette-exploration.md` for artistic, cinematic, landing, portfolio, creative, editorial, or experimental work
- `design-dna/unsplash-asset-sourcing-rules.md` when real imagery, Unsplash, or source-image roles are needed
- `design-dna/oklch-contrast-and-palette-rules.md` when palette, contrast, dark mode, or chart colors matter
- `design-dna/interface-feel-rules.md` before final visual review
- `agent-workflows/frontend-aha-moment-workflow.md`
- `agent-workflows/efficient-agent-implementation-workflow.md`
- `agent-workflows/image-first-frontend-workflow.md` when image/reference-first
- `design-dna/NO_IMAGE_DIRECTION_GATE_CONTEXT.md` for new visual-heavy work with no approved direction
- relevant `skills/*/SKILL.md`

Reference anchors:
`{{REFERENCE_ANCHORS}}`

Before coding:

1. Declare the design read: `Reading this as: <page kind/product type> for <audience>, with a <vibe> language, leaning toward <mode/system/aesthetic>.`
2. If no visual direction is approved, run the No-Image Fast Direction Gate: create `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, and `docs/design/direction-risk-check.md` with Direction A Safe Refined, Direction B Artistic Expressive, and Direction C Unexpected High-Character, then stop and wait for Migi to choose A, B, C, or a hybrid.
   - Each direction must include a distinct navigation concept, desktop nav behavior, mobile nav behavior, CTA/nav relationship, and default nav pattern avoided.
   - If all three directions use the same top bar, the direction gate fails.
   - Do not call paid image APIs. Paid image generation is allowed only if Migi explicitly writes `I approve paid API image generation for this run.` and the command includes `--paid-ok`.
   - Each direction must include navigation readability, identity chrome, decorative geometry, and line/divider strategy.
   - Hard bans: no unreadable nav over images/giant type/changing backgrounds, no forced app-name/logo/initials chrome, no decorative circular/orbital/radar/HUD overlays, no fake sonar rings, no generic orbit graphics, no decorative hairline/separator ornaments, no red divider lines as fake editorial detail, no section-label-plus-line filler.
3. When Migi chooses A, B, C, or a hybrid, proceed immediately to implementation. Do not stop after selected-direction.md. Do not ask for another confirmation unless Migi explicitly requested planning-only/spec-only/no-code.
4. After Migi chooses, create `docs/design/selected-direction.md`.
5. Create `docs/design/visual-spec.md` from `templates/visual-spec.template.md`.
6. Create `docs/design/design-system-tokens.md` before UI implementation.
7. For expressive modes, include 3 palette directions and do not pick the safe option automatically.
8. Create `docs/design/color-and-contrast.md` or an equivalent palette doc with OKLCH/APCA logic for significant UI: semantic tokens, APCA/WCAG targets, lightness repair, numeric scale, and dark-mode mapping.
9. If references are used, create reference usage/decomposition artifacts required by Design OS.
10. If real imagery is required, create `docs/design/unsplash-search-plan.md`, define image roles, source images by query/orientation/color/content_filter/order_by, select based on art direction and crop quality, and create `docs/design/unsplash-asset-manifest.md` with photographer/source/download metadata, alt text, crop strategy, text safe zones, palette relationship, and product-truth notes.
11. Create `docs/design/navigation-strategy.md` when navigation is present; propose at least 3 nav concepts, select one, and document desktop/tablet/mobile behavior, CTA behavior, active/focus states, and generic nav default avoided.
12. Document navigation readability strategy, identity chrome decision, decorative geometry strategy, and line/divider strategy.
13. Document Domain Palette Fit for product UIs: domain, user environment, task pressure, emotional state, state color semantics, and random palette rejected.
14. Document No Placebo Navigation: every nav/tab/filter/segmented control must change visible content, route, scope, filter, or product state.
15. If the product uses a map, floor plan, seating chart, route board, timeline, diagram, pattern canvas, node graph, or canvas-like product object, route `skills/diagram-canvas-system/SKILL.md` and document coordinate system, layer model, object model, label model, collision strategy, selection/inspector behavior, responsive fallback, and diagram-integrity detector plan.
16. If this is a desktop command surface, document the primary product object and how panels support rather than bury it.
17. If landing, portfolio, marketing, or redesign work is involved, create `docs/qa/anti-ai-tell-preflight.md` and run Taste anti-AI-tell preflight before implementing.
18. If motion is planned, define its purpose, frequency profile, durations, reduced-motion behavior, and review route.
19. If delight is planned, define earned moments and what will be avoided.
20. If charts are used, route `skills/chart-system-director/SKILL.md`, define the data contract, choose the visualization/tool from `design-intelligence/visualization-tool-routing.md`, and create chart-selection rationale/report.
21. After implementing charts, diagrams, maps, timelines, or canvases, route `skills/data-viz-hardening-review/SKILL.md` before calling the UI final. For runnable spatial UI, run `tools/diagram-integrity-check.mjs` where practical or save a blocked report.
22. If mobile is primary, create or fill `docs/design/mobile-flow-spec.md` and define 390-first flow, modal/sheet fit strategy, bottom nav icon+label strategy, selection state strategy, add/create action differentiation, control decoration collision check, safe-area check, and 390 px proof.

Mobile/product hard bans:

- cut-off mobile sheets or hidden modal actions
- active/underline/progress bars overlapping labels
- selectable chips/items with no persistent selected state
- text-only bottom nav in practical mobile product flows unless justified
- add-new cards styled like content cards
- badges/counters overlapping nav labels/icons
- generic mobile template behavior
- random domain palette for the product environment
- placebo nav/tabs/filters with no visible state change
- map/floor-plan/timeline/canvas labels covered by objects/cards/glows
- chart/diagram/canvas lacks data contract, layer model, label model, collision strategy, or hardening pass
- desktop command surface collapsing into generic card soup

Implementation order:

1. Visual shell and navigation.
2. Frontend aha moment with local/mock data.
3. Working visible interactions.
4. Interface-feel polish: active/focus states, loading/empty/error states, perceived performance, spacing rhythm, and no dead surfaces.
5. Responsive adaptation.
6. Screenshot QA and scorecard.
7. Run post-build review layers when relevant: text clarity for copy-heavy product UI, production hardening before production-ready claims, and evidence-backed critique when Migi asks for critique or a dogfood/final UI needs full review.

Run:

- build/lint/test commands available in the project
- screenshot QA when UI can run

Final response contract:

- files changed
- build/lint result
- local dev server URL if running
- design read
- anti-AI-tell preflight status
- direction options / selected direction
- direction layout maps / risk check
- visual spec path
- design-system tokens summary
- palette exploration
- OKLCH/APCA palette pass
- Unsplash search plan / asset manifest when applicable
- navigation strategy / selected navigation pattern
- domain palette fit
- no-placebo navigation behavior
- spatial label safe zones when applicable
- desktop command-surface primary object when applicable
- modal/sheet fit, bottom nav icons+labels, selection state, add/create, and control-indicator checks when mobile/product work applies
- interface-feel polish pass
- motion/delight strategy if applicable
- interactions verified
- screenshots or blocker
- scorecard/done report status
- evidence-backed critique / text clarity / production hardening status when relevant
- remaining weaknesses
