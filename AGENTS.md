# Agent Instructions

Miguel Design OS is a simple design memory and frontend-agent instruction system. It is not a product app and does not require a frontend Studio UI.

## Start Here

No-image fast direction gate default: for normal new visual-heavy app/design tests, read `design-dna/NO_IMAGE_DIRECTION_GATE_CONTEXT.md` and `design-dna/FAST_DIRECTION_GATE_CONTEXT.md` first. Paid image generation is disabled by default. Use the full Design OS planning stack only when Migi asks for deep exploration, full strategy, research, benchmark, reference decomposition, or implementation after selection.

For any frontend/design task:

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Inspect `visual-library/README.md`.
3. Check `visual-library/approved/` for relevant references.
4. Check `visual-library/rejected/` for relevant anti-patterns.
5. Classify task mode.
6. Declare active design dials from `design-dna/design-generation-dials.md`.
7. Use `agent-workflows/simple-visual-reference-workflow.md` when visual references matter.
8. Use `agent-workflows/reference-locked-build-mode.md` when Migi asks to base work on a specific visual-library folder or screenshot set.
9. Use `agent-workflows/image-first-frontend-workflow.md` for image/reference-first website or visual-heavy work.
10. For new visual-heavy work with no approved direction, first run the No-Image Fast Direction Gate: create `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, and `docs/design/direction-risk-check.md`. Do not create visual specs, QA docs, build/lint reports, or frontend code before selection.
11. Stop for Migi to choose A, B, C, or a hybrid during the first direction pass.
12. When Migi chooses, treat that as implementation approval unless Migi explicitly says spec only, planning only, do not implement, wait, no code yet, direction selection only, just document it, or do not edit src.
13. After selection, create `docs/design/selected-direction.md` and continue immediately into visual spec, design-system tokens, implementation, validation, and URL handoff when a dev server starts.
14. Create `docs/design/visual-spec.md` from `templates/visual-spec.template.md` before visual-heavy implementation.
15. Define design-system tokens from `design-dna/design-system-first-rules.md` before significant UI implementation.
16. Run an OKLCH/APCA palette pass for significant UI, palette repair, dark mode, chart colors, or contrast-sensitive work.
17. Use `skills/unsplash-asset-sourcing/SKILL.md` when real imagery, Unsplash, or source-image roles are needed.
18. Create `docs/design/navigation-strategy.md` before visual-heavy navigation implementation.
19. Use `agent-workflows/efficient-agent-implementation-workflow.md` for nontrivial implementation.
20. Apply an interface-feel polish pass after the main layout works and before final screenshot review.
21. Use routed skills only when relevant; do not load the whole repo.
22. Run benchmark scoring from `evaluation/benchmarks/` when a mode benchmark exists.
23. For dogfood targets, create a postmortem from `docs/qa/dogfood-postmortem.template.md`.
24. Run `node tools/design-os.mjs route --task "<task>"` when the CLI is useful.
25. Run `evaluation/ui-scorecard.md` before finishing significant frontend work.

## Core Rules

- Never build a generic SaaS dashboard unless Migi explicitly asks for one.
- Miguel Design OS operating model: classify mode, direction gate, selected direction, visual spec, design-system tokens, OKLCH/APCA palette, implementation, screenshot QA, specialist review, benchmark scoring, dogfood postmortem, then Design OS patch only if justified.
- `visual-library/` is the screenshot source of truth. `evaluation/benchmarks/` is the scoring/test layer that references visual-library assets. Do not create duplicate benchmark screenshot folders or copy images out of visual-library.
- Prompt templates in `templates/prompts/` are the standard way to start new app work, direction-only work, post-selection implementation, benchmark review, and postmortem ingestion.
- Chart-rich/dashboard work must route through chart selection: pick chart types from data shape and user decision, not from dashboard decoration.
- Any chart, graph, diagram, map, timeline, floor plan, pattern canvas, node graph, or canvas-like product object must route through the visualization system. Charts need user question, data contract, tool/library rationale, labels, states, responsive behavior, and accessibility. Spatial canvases need coordinate system, layer model, object model, label safe zones, collision strategy, selection/inspector behavior, and responsive fallback. When runnable diagram markup exists, use `tools/diagram-integrity-check.mjs` or record why it is blocked. Broken diagrams cannot be hidden under visual polish.
- Pattern canvases and dense diagrams must meet `design-dna/diagram-canvas-elite-quality-bar.md`: no clipped primary text, no catastrophic overlap, label lanes, callout routes, badge safe zones, measurement hierarchy, construction-line semantics, detector QA, and rendering/performance budget.
- Visual style must be selected deliberately from product fit, reference mode, accessibility, performance, and Migi's rejected directions. Do not use random style roulette.
- Premium website / landing page work should be image-first when generation or strong references are available: section references, deep analysis, implementation, screenshot QA.
- Landing, portfolio, marketing, and redesign work needs a design read before coding: `Reading this as: <page kind/product type> for <audience>, with a <vibe> language, leaning toward <mode/system/aesthetic>.`
- Landing/portfolio/marketing work must run Taste-style anti-AI-tell preflight before handoff: no visible em-dashes, fake screenshots, generic names, fake numbers, CTA wrap, duplicate CTA intent, scroll cues, hero clutter, plain text logo walls, or repeated generic sections.
- Motion must have a product purpose, frequency profile, duration/easing plan, performance budget, and reduced-motion behavior. Do not animate high-frequency actions.
- Advanced/cinematic/artistic/portfolio motion is choreography, not one animation. When Migi asks for advanced animations, cinematic motion, artistic motion, Awwwards/Godly/Recent-level motion, scroll animation, appearing while scrolling, portfolio motion, or motion like Graffico/Manet/UXBert/Podium, route `skills/advanced-motion-choreography/SKILL.md`, create `docs/design/motion-choreography-plan.md`, implement multiple motion layers, capture motion sequence evidence or a blocker, and score `evaluation/benchmarks/motion-cinematic.benchmark.md`.
- New visual-heavy work requires the No-Image Fast Direction Gate by default: create only `docs/design/direction-options.md`, `docs/design/direction-layout-maps.md`, and `docs/design/direction-risk-check.md`; then stop for Migi to choose before coding.
- No paid image generation by default. Do not call `OPENAI_API_KEY`, `gpt-image`, or paid image APIs during the direction gate unless Migi explicitly writes `I approve paid API image generation for this run.` and the command includes `--paid-ok`.
- Figma cost safety is strict. Do not use Figma AI, Figma Weave, Figma Make, paid generation, AI credits, Figma Motion, Figma Draw, Dev Mode-only operations, or paid-seat Figma features. Use only normal Figma Plugin API operations: pages, frames, vectors, shapes, text, variables if available, styles, components, node metadata, and storyboard frames. If a Figma request requires a paid or plan-gated feature, stop and report exactly: `Blocked: this requires a paid or plan-gated Figma feature.`
- No-image direction cards must include layout maps, domain palette rationale, primary product object, nav state effect, interaction promises, risk, complexity, and recommendation score. Vague vibe cards fail the gate.
- Deep Direction Gate is opt-in only for deep exploration, full strategy, research pass, benchmark pass, reference decomposition, or reference-locked planning.
- Direction selection means build. When Migi chooses Direction A, B, C, says use/go with a direction, or selects a hybrid like `B palette + C navigation`, the agent must create/update `docs/design/selected-direction.md` and proceed through visual spec, design-system tokens, implementation, validation, and final URL handoff without asking for another implementation confirmation. Stop only when Migi explicitly says spec only, planning only, do not implement, wait, no code yet, direction selection only, just document it, or do not edit src.
- Required flow after direction selection: `docs/design/selected-direction.md`, `docs/design/visual-spec.md`, `docs/design/design-system-tokens.md`, `docs/design/color-and-contrast.md` or equivalent palette doc, `docs/design/navigation-strategy.md` for visual-heavy work, `docs/design/motion-choreography-plan.md` when advanced motion is requested, `docs/qa/anti-ai-tell-preflight.md`, implementation, build/lint, screenshot/dev-server report if available, final response with URL when a dev server starts.
- Visual-heavy work requires active dials and a visual spec before implementation.
- Significant UI work requires design-system direction before components: semantic colors, typography, spacing, radius, shadow/elevation, borders, chart/state colors, component variants, image treatment, and motion.
- Significant UI work requires OKLCH/APCA contrast logic before final palette approval. Repair contrast by changing OKLCH lightness, not random hex/chroma tweaks.
- Artistic, landing, portfolio, cinematic, creative, editorial, and experimental work requires palette exploration: safe refined, artistic expressive, and unexpected high-character palette directions before locking tokens. Do not default to muddy brown/charcoal/orange, generic blue-grey, AI purple glow, beige premium cliche, terminal green, neon lime, or safe neutrals with one predictable accent.
- Frontend MVPs must create a local aha moment first: truthful mock data in data files, all visible interactions working locally, and no backend unless requested.
- For `01-command-centers-dashboards` or dashboard-folder references, build an image-aware, graph-rich, composed command surface: one attraction zone, varied panel weights, useful chart forms, reference-driven palette, deliberate image/object/media roles, compact scale, mixed materials, optional live/state energy, and calm/busy rhythm. Do not ship same-weight card soup, murky monochrome / terminal-green dashboards, single-accent overuse, text-and-metrics-only dashboards, terminal-ish dark panel spam, decorative charts, or image-starved surfaces.
- Global UI craft matters as much as art direction: navigation labels must be understandable, responsive nav must be deliberately designed, search/actions must align, panels must be scan-first instead of prose-heavy, buttons must be proportionate, layouts must not collide at 1440/768/390, and palettes must feel human/reference-driven rather than machine-generated.
- Product palettes must fit the domain, environment, task pressure, and emotional state. Nav/tabs/filters must not be placebo controls: selected state must change visible content, route, scope, filter, or product state. Maps, floor plans, seating charts, timelines, and canvases need protected label zones. Desktop command surfaces must keep the primary product object central instead of burying it in card soup.
- Navigation is art direction, not a default sticky bar. For visual-heavy apps, landing pages, portfolios, creative/editorial sites, dashboards, and redesigns, create `docs/design/navigation-strategy.md`, explore at least 3 navigation concepts, select a pattern from `design-intelligence/navigation-patterns.json`, and document desktop/tablet/mobile behavior before implementation. Do not default to the same logo-left links-center CTA-right navbar, rounded pill nav, sticky black bar, or mobile top link dump.
- Navigation must survive its background. If nav overlays images, giant typography, video, gradients, or changing scroll states, it needs a designed readability strategy; unreadable floating nav is a hard failure.
- Do not force app name/logo/initials chrome. Migi often wants identity to live in the composition, not in a persistent logo/app-name chip or logo-left habit. Add visible brand chrome only when requested or justified in the visual spec.
- Do not use decorative circular/orbital/radar/HUD line overlays as atmosphere. Fake sonar, orbit, target, and circular arc graphics are rejected unless explicitly requested and functional.
- Do not use decorative separator ornaments: tiny hairlines, red dividers, label rails, corner ticks, or section-label-plus-line filler. Lines must separate real content or be removed.
- Mobile navigation default: apps with 3+ primary destinations use bottom navigation on mobile unless the task is a documentation site, desktop-first enterprise tool, editor software, or scrolling-first website. The top of mobile app screens is for branding, page title, search, context, or hero imagery.
- Mobile product interaction integrity is mandatory: modals/sheets must fit the viewport and safe areas, bottom nav uses icons plus readable labels, selectable chips/items preserve selected state, add/create actions look distinct from content, and control decorations never overlap labels.
- P0 layout integrity comes before taste: text, charts, nav, cards, badges, buttons, forms, and containers must stay inside their intended bounds and remain readable at real viewport sizes. Responsive design must adapt, not squeeze desktop UI until labels collapse or content escapes.
- Do not use fake live/session/status theater. Only show live, monitoring, session, telemetry, or glowing status indicators when they have real product meaning, are understandable to the user, and affect a decision.
- Never claim visual quality without screenshot evidence when the UI can run.
- Screenshots are design evidence, not production assets.
- If Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, use Literal Target Copy Mode.
- If Migi points to a visual-library folder, select the correct Reference Folder Mode before layout and create `docs/design/reference-usage-report.md` before visual-heavy coding.
- If Migi says to use a specific visual-library folder or make it like a set of screenshots, activate Reference-Locked Build Mode: select 3-5 exact reference anchors, create `docs/design/reference-decomposition.md`, create `docs/design/design-transfer-spec.md`, build from that spec, and finish with `docs/qa/reference-match-report.md`.
- If Migi says landing page, creative, artistic, cinematic, editorial, visual-heavy, or image-led, use Landing Page / Artistic Mode: poster logic, image-led composition, sparse copy, no Blogspot structure, and no dashboard furniture.
- Every major image needs a declared role; images are not random decoration.
- When real imagery is needed, use Unsplash Asset Sourcing: create `docs/design/unsplash-search-plan.md`, select images by role/query/orientation/color/content_filter/order_by, and create `docs/design/unsplash-asset-manifest.md` with source, photographer, download metadata, alt text, crop strategy, palette relationship, safe-zone notes, and product-truth notes.
- Unsplash images are mood/atmosphere/source material, not proof of real product operation. Do not use stock photos as real labs, customers, facilities, products, teams, or evidence unless true.
- For artistic, landing-page, cinematic, editorial, or image-led references, decide whether the image is environment or asset. Do not trap immersive scenes in rectangular cards by default.
- Avoid AI scale inflation globally: calibrate text, containers, cards, images, spacing, and above-the-fold density against the selected references. Premium does not mean gigantic.
- Protect contrast globally: important text needs a stable readable background. Text over images requires a deliberate safe zone, scrim, plate, mask, crop, or separation outside the image.
- Interface feel matters: before final visual review, check active/focus states, loading/empty/error states, perceived performance, spacing rhythm, numeric alignment, and dead/stiff surfaces.
- Post-build review layers exist and should not run during Fast Direction Gate: Evidence-Backed Critique for finished UI states, Text Clarity Review for unclear/generic interface copy, Production Hardening Review for long text, empty/error/loading states, i18n, accessibility, slow networks, and responsive stress.
- If Migi says a reference is inspiration, extract principles instead of cloning it exactly.
- If Migi rejects a reference, treat it as an anti-pattern and do not preserve it with new paint.
- Do not build or improve a frontend Studio app unless Migi explicitly reactivates that direction.

## Skill Routing

Use the smallest relevant set.

- Visual-heavy new app, redesign, gallery, roster, character-select, product-discovery, or selection-first work: `skills/visual-concept-gate/SKILL.md`.
- New visual-heavy app, landing page, portfolio, creative/artistic page, mobile product flow, dashboard redesign, or major UI redesign with no approved direction: `skills/design-start-image-exploration/SKILL.md`.
- Screenshot, mockup, Lovable prototype, Pinterest image, or strong visual reference: `skills/visual-target-reconstruction/SKILL.md`.
- Selection-first, gallery, roster, marketplace, card deck, character selection, or object browsing: `skills/selection-first-products/SKILL.md`.
- Existing UI review: `skills/anti-ai-slop-review/SKILL.md`.
- Finished UI critique with screenshot/browser evidence, Nielsen scoring, cognitive load, persona red flags, and persisted snapshots: `skills/evidence-backed-critique/SKILL.md`.
- Unclear, vague, generic, inconsistent, or confusing interface copy after implementation: `skills/text-clarity-review/SKILL.md`.
- Product UI hardening against real-world data, long text, empty/error/loading states, i18n, accessibility, and responsive stress after implementation: `skills/production-hardening-review/SKILL.md`.
- Runnable UI or screenshots: `skills/screenshot-scorecard-review/SKILL.md`.
- Elite redesign critique: `skills/frontend-art-director-review/SKILL.md`.
- Visual spec before coding for visual-heavy tasks: `skills/visual-spec-compiler/SKILL.md`.
- Color tokens, contrast repair, palette scales, dark mode, or color accessibility: `skills/oklch-contrast-palette/SKILL.md`.
- Broad UI/UX craft review, typography, pseudo-elements, audio feedback, predictive prefetching, UX laws, or visual design rules: `skills/userinterface-wiki/SKILL.md`.
- Functionally done UI that feels stiff, dead, generic, unresponsive, or under-polished after implementation and before screenshot review: `skills/make-interfaces-feel-better/SKILL.md`.
- Dashboard graph systems, BI charts, analytics, forecasts, maps, funnels, or monitoring: `skills/dashboard-graph-system/SKILL.md`.
- Data visualization, charts, graphs, analytics, BI, monitoring, forecasting, maps, funnels, or graph-rich dashboards: start with `skills/chart-system-director/SKILL.md`, then use `skills/data-visualization-selection/SKILL.md` when chart type selection needs data-shape guidance.
- Pattern canvases, floor maps, seating charts, node graphs, workflow builders, architecture diagrams, timelines, spatial maps, editors with selectable objects, or canvas-like product surfaces: `skills/diagram-canvas-system/SKILL.md`.
- Implemented charts, diagrams, maps, timelines, legends, axes, labels, tooltips, or canvases needing edge-case stress: `skills/data-viz-hardening-review/SKILL.md`.
- Visual style selection, token/effect direction, style-family fit, or taxonomy-driven art direction: `skills/visual-style-selection/SKILL.md`.
- Landing pages, hero pages, product marketing pages, and poster/image-led pages: `skills/landing-page-pattern-director/SKILL.md`.
- Landing, portfolio, marketing, and redesign craft direction: `skills/landing-page-craft-director/SKILL.md`.
- Final Taste-style preflight for landing/portfolio/marketing UI: `skills/anti-ai-tell-preflight/SKILL.md`.
- Image-first visual implementation from references/screenshots/generated sections: `skills/image-first-frontend/SKILL.md`.
- Unsplash or real photographic asset sourcing: `skills/unsplash-asset-sourcing/SKILL.md`.
- Generating or selecting landing-page visual references: use imagegen-frontend-web logic through `agent-workflows/image-first-frontend-workflow.md` and `skills/landing-page-craft-director/SKILL.md`.
- Motion planning for product/brand UI: `skills/motion-craft-director/SKILL.md`.
- Advanced/cinematic/artistic/award-winning/scroll/portfolio motion: `skills/animation-vocabulary/SKILL.md`, then `skills/advanced-motion-choreography/SKILL.md`, then `skills/motion-craft-director/SKILL.md`, then `tools/capture-motion-sequence.mjs` if possible, then `skills/review-animations/SKILL.md`, `skills/make-interfaces-feel-better/SKILL.md`, and `skills/screenshot-scorecard-review/SKILL.md`.
- Motion code review: `skills/review-animations/SKILL.md`.
- Component polish and invisible UI craft: `skills/emil-design-engineering/SKILL.md`.
- Delight/personality pass for success, empty, loading, milestone, or error states: `skills/delight-opportunity-director/SKILL.md`.
- Naming or specifying motion effects: `skills/animation-vocabulary/SKILL.md`.
- Premium website, landing page, hero, marketing site, product page, editorial/portfolio site, or website image-to-code work: `skills/image-first-website-to-code/SKILL.md`.
- Mobile apps, mobile web flows, onboarding/profile/search/home screens, or mobile reference folders: `skills/mobile-product-flow/SKILL.md`.
- Tailwind/global CSS migration: `skills/tailwind-migration-zero-regression/SKILL.md`.
- Auth, onboarding/login naming, mock data, production states, persistence, or truthful claims: `skills/truthful-state-product-naming/SKILL.md`.
- Figma design/file operations: read `design-dna/figma-cost-safety-rules.md` before using Figma tools. Normal Plugin API operations are allowed; paid/plan-gated Figma features must block with the required message.

## Tool Discipline

- Read useful context first, not the whole repo.
- Do not reread files already available in the current context.
- Batch file reads and searches when possible.
- Inspect before editing.
- Prefer focused search/replace for small changes.
- Use bulk scaffolding only when creating coherent multi-file systems.
- Debug with logs, screenshots, and exact command output before guessing.
- Do not broaden scope mid-task.
- Avoid monolithic files and keep components focused.
- Report concise proof: files changed, commands run, evidence, remaining weaknesses.

## Reference Folder Modes

When Migi points to a visual-library folder, activate the matching mode:

- `01-command-centers-dashboards`: Command Center / Dashboard Mode.
  - Must mean image-aware command surface, not generic admin panel.
  - Define dashboard attraction zone, panel mix, chart forms, palette strategy, graph system, image/object/media strategy, material range, live/motion strategy, and calm/busy rhythm before coding.
- `02-creative-experimental-ui`: Artistic / Creative Mode.
- `03-mobile-consumer-apps` or `mobile-apps`: Mobile Product Flow Mode.
  - For 3+ primary destinations, mobile defaults to bottom navigation with premium spacing, safe-area support, generous touch targets, readable labels, and intentional active state.
- `04-selection-gallery-browse`: Selection / Gallery / Browse Mode.
- `05-landing-hero-pages`: Landing Page / Poster Mode.

For visual-heavy work using these references, create `docs/design/reference-usage-report.md` before coding and declare the role of every major image.

## Reference-Locked Build Mode

When Migi says to use a folder or specific screenshots as the basis for a design, do not proceed from folder vibe. Select 3-5 exact reference anchors and assign each one a role: composition, palette/material, graph/component, image/object/media, or responsive/layout.

Required before coding:

- `docs/design/reference-decomposition.md`
- `docs/design/design-transfer-spec.md`

Required after implementation:

- `docs/qa/reference-match-report.md`

## Protected Folders

- Do not modify `source-projects/` unless explicitly asked.
- Do not delete or modify `captures/` unless explicitly asked.
- Do not modify `raw-chat-input/` unless explicitly asked.

## Required Handoff

```md
Skills used:
Visual references checked:
Reference folder mode:
Reference usage report:
Active dials:
Visual spec:
Design-system direction:
OKLCH / APCA palette pass:
Interface feel pass:
Evidence-backed critique:
Text clarity review:
Production hardening review:
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Image roles:
Unsplash search plan:
Unsplash asset manifest:
Image environment strategy:
Scale calibration:
Contrast / legibility strategy:
Navigation strategy:
Navigation strategy path:
Navigation concepts:
Selected navigation pattern:
Navigation readability:
Identity / brand chrome:
Decorative geometry:
Line / divider strategy:
Toolbar alignment:
Text density:
Button proportions:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Design read:
Anti-AI-tell preflight:
Motion strategy:
Motion choreography plan:
Motion sequence evidence:
Motion benchmark:
Delight strategy:
Palette direction:
Palette exploration:
Domain palette fit:
Placebo navigation avoided:
Spatial label safe zones:
Desktop command-surface primary object:
Visual style selection report:
Chart selection report:
Image-first website analysis:
Direction options:
Direction layout maps:
Direction risk check:
Paid image generation:
Selected direction:
Implemented selected direction:
Frontend aha moment:
Interactions verified:
Reference match report:
Benchmark used:
Benchmark score:
Dogfood postmortem:
Approved/rejected principles used:
Files changed:
Build/lint result:
Local dev server URL:
Screenshots:
Scorecard result:
Done report:
Remaining weaknesses:
```
