# Miguel Design OS Compact Context

Use this before building or reviewing any frontend.

## Mandatory Loop

1. Read `AGENTS.md` as the skill router.
2. Load only the routed `skills/*/SKILL.md` files. Do not load every skill.
3. Read `visual-library/README.md`, then inspect relevant approved/rejected references and notes.
4. Read only the files listed by routed skills under `Files To Read`, plus `system.md` or `design-system.json` when the selected skill asks for them.
5. Classify the task: bug fix, technical refactor, copy/content edit, frontend QA, visual-heavy UI, new app, redesign, selection/gallery/roster/product-discovery, reference-folder mode, Tailwind migration, or truthful-state/naming.
6. Inspect the current project type, framework, routes, components, styling system, and tokens.
7. Define a project-specific visual identity before palette/layout.
8. Declare active design dials from `design-dna/design-generation-dials.md`.
9. If Migi points to a visual-library reference folder, activate the matching Reference Folder Mode before choosing layout.
10. If Migi asks to use a specific visual-library folder or screenshots as the design basis, activate Reference-Locked Build Mode before coding.
11. For new visual-heavy apps, landing pages, portfolios, mobile apps, dashboard redesigns, or artistic interfaces with no approved direction, create `docs/design/direction-options.md`, then stop for Migi to choose A, B, C, or a hybrid.
12. After Migi chooses, create `docs/design/selected-direction.md`.
13. For visual-heavy work, route `skills/visual-spec-compiler/SKILL.md` and create `docs/design/visual-spec.md` before implementation.
14. For significant UI work, define design-system direction from `design-dna/design-system-first-rules.md` before components.
15. For artistic, cinematic, landing, portfolio, creative, editorial, or experimental work, read `design-dna/art-directed-palette-exploration.md` and include 3 palette directions before locking tokens.
16. For significant UI palettes, contrast repair, dark mode, or chart/state colors, route `skills/oklch-contrast-palette/SKILL.md` and check OKLCH/APCA before final palette approval.
17. For frontend MVP/new app work, use `agent-workflows/frontend-aha-moment-workflow.md`: local truthful mock data, working visible interactions, and no backend unless requested.
18. For landing, portfolio, marketing, or redesign work, read `design-dna/brief-inference-rules.md` and state the design read before coding.
19. For visual-heavy work using visual-library references, create `docs/design/reference-usage-report.md` before coding.
20. If charts, analytics, BI, monitoring, forecast, maps, funnels, or graph-rich dashboards are involved, route chart skills and create a chart-selection report before implementing meaningful charts.
21. If the task needs a deliberate style family or taxonomy-driven art direction, route `skills/visual-style-selection/SKILL.md` and create a visual-style selection report before tokens are locked.
22. If the task is a premium website, landing page, hero, marketing site, product page, editorial/portfolio page, or website image-to-code task, use `agent-workflows/image-first-frontend-workflow.md`, route image-first skills, and create image-first website analysis before coding.
23. For landing, portfolio, marketing, and redesign work, route `skills/landing-page-craft-director/SKILL.md` and `skills/anti-ai-tell-preflight/SKILL.md`.
24. If motion is planned or animation code changes, route `skills/motion-craft-director/SKILL.md` or `skills/review-animations/SKILL.md`; use `skills/animation-vocabulary/SKILL.md` only to name/specify motion.
25. If adding delight/personality, route `skills/delight-opportunity-director/SKILL.md`.
26. If broad UI/UX craft, typography, pseudo-elements, audio feedback, predictive prefetching, UX laws, or visual design rules are relevant, route `skills/userinterface-wiki/SKILL.md`.
27. After main layout exists and before screenshot review, route `skills/make-interfaces-feel-better/SKILL.md` when the UI feels stiff, dead, generic, unresponsive, or under-polished.
28. If the task is mobile-first, read `design-dna/mobile-product-rules.md` and create or fill `docs/design/mobile-flow-spec.md`.
29. Use golden projects and visual-library screenshots as evidence only; do not copy old apps literally unless Literal Target Copy Mode is active.
30. Use screenshots as evidence for the current UI, not templates.
31. Capture 390, 768, and 1440 px when the UI can run.
32. Run `evaluation/ui-scorecard.md` before finishing.
33. Do not write major UI code until the Design Intent Record is filled and used as the design contract.
34. No done without evidence: visual UI work requires a validated done report before final handoff.
35. Dogfood targets are feedback loops: if a project is created to test Miguel Design OS, every target-app failure must become a Design OS rule, tool, prompt, schema, checklist, or explicit open gap.

Literal Target Copy Mode overrides product thinking. When Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, do not run the 3-concept gate, create new art direction, expand features, add useful panels, reinterpret, or improve. The only goal is visual parity with the supplied target: identify target screens, reconstruct visible composition, exclude browser chrome/editor/watermark artifacts, build the static shell first, implement only minimum visible interactions, screenshot compare, validate a target-copy report, and report exact differences. Product logic waits until the pixel-parity shell is approved.

Landing Page / Artistic Mode overrides dashboard and product-app habits. When Migi asks for a landing page, creative, artistic, cinematic, editorial, visual-heavy, image-led, landing-page inspiration, or creative inspiration, use poster logic, not dashboard logic. The page must be image-first, composition-led, sparse, atmospheric, and emotionally directed. Do not answer with normal SaaS/homepage grids, feature-card rows, stats blocks, bordered proof sections, dashboard furniture, or lots of explanatory copy. Preserve the image-led rhythm beyond the hero.

Reference Folder Mode is mandatory when Migi points to a visual-library folder. `01-command-centers-dashboards` means Command Center / Dashboard Mode; `02-creative-experimental-ui` means Artistic / Creative Mode; `03-mobile-consumer-apps` or `mobile-apps` means Mobile Product Flow Mode; `04-selection-gallery-browse` means Selection / Gallery / Browse Mode; `05-landing-hero-pages` means Landing Page / Poster Mode. Wrong folder mode caps the score at 6.

Reference-Locked Build Mode is mandatory when Migi says to use a specific folder or make the design like a set of screenshots. Do not summarize folder vibe and start coding. Select 3-5 exact reference anchors, assign each an anchor role, create `docs/design/reference-decomposition.md`, create `docs/design/design-transfer-spec.md`, build from that spec by segments, and finish with `docs/qa/reference-match-report.md`.

Migi's dashboard mode does not mean generic admin panel. `01-command-centers-dashboards` means an image-aware, graph-rich, composition-led command surface with one memorable attraction zone, varied panel weights, useful chart forms, deliberate image/object/media use when references support it, compact controlled scale, and a calm/busy rhythm. Reject lifeless terminal panels, murky monochrome palettes, overused lime/neon accents, same-weight card soup, text-and-metrics-only dashboards, weak or decorative charts, no focal anchor, and oversized empty dashboard UI. Dashboard mode should feel visually alive, not like one-color operational furniture.

Migi strongly rejects AI scale inflation: giant text, giant cards, giant containers, huge empty spaces, and low desktop density. Match the scale and density of the selected references. Premium does not mean oversized.

Migi strongly rejects poor contrast and unreadable text over images. Artistic/image-led design must still be readable. Every image-led UI needs a contrast strategy: safe zones, scrims, plates, masks, or text outside the image. Award-level UI never makes users fight to read.

Migi strongly rejects cryptic navigation, fake live/session indicators, misaligned toolbars, text-heavy cards, oversized full-width buttons, responsive collisions, and machine-looking color palettes. Every app must have understandable nav, crafted responsive navigation, aligned input/action groups, scan-first containers, proportionate buttons, collision-free resizing, and a human reference-driven palette.

Migi treats layout integrity as P0. Text escaping containers, chart bars overflowing, clipped card titles, overlapping badges, unreadable squeezed cards, broken responsive nav, labels collapsing into meaningless fragments, or any collision on resize are hard failures before taste is evaluated. Responsive design must adapt, not squeeze.

Migi's chart rule is now data-shape first. Charts must be selected from user decision, data shape, volume, accessibility, and interaction need. Decorative chart wallpaper, chart-lite dashboards, inaccessible color-only charts, and graphs that overflow their containers are blockers.

Migi's style rule is now taxonomy-constrained. Pick one primary style family and at most one supporting treatment from product fit, reference mode, accessibility, performance, and rejected directions. Do not mash aesthetics together or use a style because it looks cool in isolation.

For premium websites and landing pages, image-first workflow is preferred when image generation or strong visual references are available: section references first, deep extraction second, implementation third. Avoid compressed multi-section boards, cropped section cutouts, nested-card prisons, fake micro-UI clutter, and coded drift away from the reference.

World-class local builder loop: classify task mode, declare active dials, select references/image-first mode, create 3 direction options and stop for Migi when direction is not already approved, document selected direction, compile `docs/design/visual-spec.md`, define design-system tokens, check OKLCH/APCA contrast, implement a frontend aha moment, apply interface-feel polish, review motion if present, verify interactions, screenshot QA, scorecard/done report, and patch Design OS from failures.

Three-Direction Mockup Gate: for new visual-heavy apps, landing pages, portfolios, mobile apps, dashboard redesigns, and artistic interfaces, Migi expects 3 distinct mockup/design directions first: Safe Refined, Artistic Expressive, and Unexpected High-Character. Each needs vibe, palette, layout, imagery, motion, tradeoffs, and risks. The agent must stop for selection before coding. No direct implementation unless the visual direction is already approved.

Design-system-first is a hard gate for significant UI: semantic color tokens, typography roles, spacing scale, radius logic, shadow/elevation, borders/dividers, chart colors, state colors, component variants, image treatment, and motion rules must exist before implementation.

OKLCH/APCA color rule: significant UI palettes need semantic tokens, numeric scales, documented foreground/background contrast targets, and lightness-based repairs. APCA is the default perceptual model; WCAG 2 remains required for formal compliance claims. Do not repair contrast by random hex or chroma tweaks.

Art-directed palette exploration rule: for artistic, cinematic, landing, portfolio, creative, editorial, and experimental interfaces, the palette must be actively designed. Explore safe refined, artistic expressive, and unexpected high-character palettes before locking tokens. Avoid muddy generated-app browns, generic charcoal/orange, AI purple glow, blue-grey SaaS, beige premium cliche, terminal green, neon lime, and predictable one-accent neutrals.

Frontend aha moment rule: local/mock data is allowed, but it must be truthful and live in data/mock files, not buried in components. Every visible interaction must work locally. Do not add backend until the frontend loop is compelling unless Migi requested backend.

Interface feel rule: after the main layout and interactions exist, run a polish pass for active/focus states, loading/empty/error states, perceived performance, spacing rhythm, numeric alignment, dead surfaces, and jank before screenshot scorecard review.

Taste preflight rule: landing, portfolio, marketing, and redesign work must declare a design read, avoid common AI tells, use one horizontal image/reference per generated section, keep CTA intent clean, avoid visible em-dashes, fake screenshots, generic names, fake numbers, section-number eyebrows, scroll cues, hero clutter, and repeated generic sections.

Motion craft rule: motion must serve feedback, state, spatial continuity, hierarchy, storytelling, explanation, or perceived performance. High-frequency actions should not animate. UI motion should generally stay under 300ms, avoid ease-in, avoid scale(0), avoid transition all, and define reduced-motion behavior.

When Migi asks for artistic, landing-page, cinematic, or image-led work, do not trap imagery in rectangular cards by default. If references use immersive image scenes, treat the image as the page environment: full-bleed, oversized, masked, layered, or composition-driving. Image-led means the page is built around the image, not that an image is inserted into a grid.

Evidence gates: build/lint is not visual QA; visual target screenshots are evidence, not production assets; watermark/editor/browser artifacts in production UI are hard blockers; production image-led work requires an asset manifest; Literal Target Copy Mode requires a target-copy report; visual-heavy work requires a done report before final handoff.

Visual Swarm v1 agents in `agents/`: Inspiration Scout creates `inspiration-manifest.local.json`; Art Direction Concept creates 3 rendered concepts; Literal Target Copy creates `target-copy-report.local.json`; Visual QA Anti-Slop validates screenshot/done evidence; Productionizer adds interactions only after shell approval. Use `list-agents` and `route-agent` when available.

Miguel Design OS is not a product app or frontend Studio. The primary workflow is rules + `visual-library/` + prompts + screenshot QA. Frontend experiments are archived under `deprecated/` and are not the default workflow.

Optional local/free tools exist for validation: `tools/compare-screenshots.mjs`, `tools/visual-qa.mjs`, `tools/playwright-doctor.mjs`, `tools/import-manual-screenshots.mjs`, `tools/object-swap-check.mjs`, and Design OS validators. Generated runs under `docs/qa-runs/`, `docs/comparisons/`, `docs/concept-runs/`, and `docs/object-swap/` are local evidence and gitignored by default. Playwright is optional; if unavailable, capture tools must report a clear local setup blocker.

Before visually important UI work, do not code unless Literal Target Copy Mode is active. Produce 3 rendered visual concepts first and wait for approval: Safe expected direction, More original/art-directed direction, and Wild but controlled direction. Each concept needs a preview route plus 1440 / 768 / 390 screenshot files for the gate to pass. Visual Concept Gate means 3 rendered visual concepts, not 3 text descriptions. No screenshots, no approval. Do not implement until Migi chooses one visual direction. For references, extract composition, focal object, hidden information, emotional hook, material, texture, interaction model, and what is intentionally absent -- not shallow traits like dark, neon, cards, glass, glow, or big text.

## Design Intent Record

```md
Project type:
Task classification:
Primary user:
Primary object:
Primary action:
Visual-heavy work?:
Inspiration/reference provided?:
Reference folder mode:
Reference usage report:
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Active design dials:
Direction options:
Selected direction:
Design read:
Visual spec:
Design-system direction:
Dashboard attraction zone:
Dashboard panel mix:
Dashboard chart forms:
Dashboard palette strategy:
Dashboard image/object strategy:
Dashboard live/motion strategy:
Dashboard calm/busy rhythm:
Chart selection report:
Chart data shapes:
Chart accessibility fallback:
Visual style selection report:
Primary style family:
Style token plan:
Image-first website analysis:
Image-first workflow:
Anti-AI-tell preflight:
Motion strategy:
Delight strategy:
Section references:
Section extraction status:
Mobile product rules:
Mobile flow spec:
Frontend aha moment:
Mock data location:
Visible interactions verified:
Selected skill/playbook:
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
Palette exploration:
OKLCH / APCA palette pass:
Interface feel pass:
Visual Concept Gate status:
Selected rendered concept:
Concept preview screenshots:
Density:
Token direction:
Responsive risks:
Screenshot targets:
Score target:
Dogfood target?:
Design OS rules under test:
What this app teaches Miguel Design OS:
Core loop to prove:
Persistence contract:
```

## Core Rules

- Primary object first: the screen must clearly center one object, such as a stock, draft, plan, worker, setting, project, or report.
- One primary action per zone: demote extra actions to secondary, tertiary, icon, menu, or link.
- Clickable and passive must differ: buttons/links/filters get states; status tags/metadata get no hover, pointer, or command styling.
- Define semantic tokens before colors: surface, panel, text, border, action, state, focus, shadow.
- Do not default to the obvious genre aesthetic. For any strong theme, define a non-obvious visual thesis before designing.
- No palette cloning: do not inherit navy, warm social colors, terminal dark, editorial portrait treatment, or cinematic AI styling from old apps unless the current product independently calls for it.
- Do not implement before art direction for visual-heavy work. Three rendered concepts, viewport screenshots, and Migi approval come before components.
- Literal Target Copy Mode is the exception: exact visual target copying skips concept generation and focuses only on pixel-parity reconstruction.
- Landing Page / Artistic Mode is the other hard router: for landing, creative, artistic, cinematic, editorial, visual-heavy, or image-led requests, stop using dashboard/product-app structure. Use one dominant visual thesis, image-first composition, sparse copy, restrained UI chrome, and curated rhythm after the hero.
- Reference Folder Mode is not optional: when a folder is cited, use its mode instead of treating all references as equal mood images.
- Reference-Locked Build Mode is not optional when a folder or screenshot set is the basis for the design: select 3-5 exact anchors, decompose them, translate them into a Design Transfer Spec, and compare the final output back to those anchors.
- Dashboard references require a composed command surface: one attraction zone plus useful metrics, charts, queues/lists, imagery/content, controls, and actions. Do not ship generic admin templates, same-weight widget fields, text-and-metrics-only panels, murky terminal-green palettes, decorative chart wallpaper, tiny-avatar-only media use, or dark terminal card spam.
- Dashboard Visual Energy Rule: utility is not enough. Dashboard mode needs graph richness, palette discipline, purposeful image/object/media anchors, varied material surfaces, and live-state signals when the product represents monitoring, activity, or freshness.
- Data Visualization Selection Rule: every meaningful chart must match data shape and user decision. Choose line, bar, stacked/waffle, scatter, heatmap, map, funnel/Sankey, bullet/gauge, confidence band, anomaly line, treemap, waterfall, radar, candlestick, network, box plot, decomposition tree, streaming, sentiment list, or process visualization only when the matrix supports it.
- Visual Style Selection Rule: use the style taxonomy as a constraint system. Choose a primary style family, define tokens/effects, reject mismatched styles, and check accessibility/performance/mobile fit before implementation.
- Image-First Website Rule: for premium website/landing work, generate or select large section-specific references, analyze text/type/spacing/buttons/colors/images, then code faithfully. Do not code first from generic web templates when visual quality is central.
- Visual Spec Rule: visual-heavy implementation is blocked until `docs/design/visual-spec.md` exists and names mode, dials, references, visual thesis, layout, design system, interactions, responsive strategy, and evidence plan.
- Direction Gate Rule: visual-heavy implementation is blocked until `docs/design/direction-options.md` exists, Migi chooses a direction, and `docs/design/selected-direction.md` documents the selection or hybrid.
- Design-System-First Rule: no significant UI before semantic tokens and component variants are defined. Avoid random Tailwind color chaos and one-off component styling.
- Frontend Aha Rule: the first local version should prove the product loop with truthful mock data and working interactions before backend expansion.
- Every major image needs a declared role: hero scene, focal object, proof object, background atmosphere, editorial fragment, selection thumbnail, or texture/material layer. Images must not be random decoration.
- Image as Environment, Not Rectangular Asset: when references use a dominant atmospheric scene, explore full-bleed, oversized, masked, layered, edge-to-edge, or backdrop treatment before defaulting to a boxed image. The image should feel like the page was composed around it.
- No AI Scale Inflation: calibrate headline size, body text, containers, cards, images, spacing, visible content objects, and meaningful information above the fold against the selected reference folder. The goal is controlled scale, useful density, hierarchy with range, and no giant empty furniture.
- Award-Level Contrast Discipline: every important text layer needs a stable readable background. For text over imagery, use deliberate protection such as a scrim, plate, vignette, mask, safe image zone, deliberate crop, or move text outside the image.
- No Cryptic Navigation: primary navigation must be immediately understandable. Do not ship unexplained abbreviations like `CMD`, `SIG`, `CMP`, `BRF`, vague labels like `SD LOCAL`, or icon-only navigation without clear labels, tooltips, or obvious context.
- Mobile Navigation Defaults: for applications with 3+ primary destinations, mobile navigation defaults to a bottom navigation bar. Desktop may use top nav or left sidebar; tablet adapts; mobile top nav is reserved for documentation sites, desktop-first enterprise tools, editor software, or scrolling-first websites. The top of app screens should hold branding, page title, search, context, or hero imagery, not primary navigation.
- Crafted Responsive Navigation: desktop, tablet, and mobile navigation must each be intentionally designed. Mobile bottom nav must be beautifully proportioned, safe-area aware, readable, touch-generous, never cramped, never oversized, and never generic.
- Toolbar Alignment Discipline: search inputs, filters, and action buttons in one toolbar need a clean height/baseline system, consistent gaps, and graceful wrapping.
- Container Text Weight Limit: product/dashboard panels should be scan-first. Use labels, values, summaries, metadata chips, and progressive disclosure instead of paragraphs inside boxes.
- Button Proportion Discipline: button width should usually follow content. Full-width buttons are allowed only when the layout clearly supports them; long desktop pills that dominate more than their action deserves are a craft failure.
- No Responsive Collision: layouts must survive 1440, 1280, 1024, 768, and 390 without overlapping containers, colliding pills, covered content, broken forms, or horizontal overflow.
- P0 Layout Integrity: visual quality is impossible if text, charts, nav, cards, badges, buttons, forms, or containers visibly break. Content must stay inside its intended bounds, charts must stay inside plot/card areas, cards must not collapse below readable width, labels must remain semantic, and image badges/chips must not collide.
- Responsive Adaptation, Not Squeezing: desktop can be dense, but tablet must reorganize and mobile must use a dedicated simplified structure. If a card, chart, nav, or form cannot preserve meaning at a width, change the layout instead of clipping or squeezing it.
- Chart Bounds Discipline: bars, lines, points, axes, labels, and markers must stay inside the chart's plot/card bounds. If the chart cannot fit, change dimensions, margins, clipping, or chart type at that breakpoint.
- Semantic Label Integrity: labels cannot collapse into meaningless fragments such as `C`, `U`, or `?` unless there is an obvious legend. If the label cannot remain understandable, the layout must change.
- Human Palette Direction: palettes must come from the references or product mood. Do not default to terminal green, AI purple, neon lime, generic blue/grey, or one dull machine-generated color wash.
- No Fake Live / Session Status Slop: do not add live dots, session-only chips, glowing telemetry, or monitoring badges unless they have real product meaning, are understandable, and change user decision-making.
- Hero is not enough: if the first viewport follows the reference but the rest of the page falls back to generic grids, cards, or sections, max score is 7.
- Avoid container soup: no nested card stacks as default layout. Use grids, rails, sections, inspectors, and direct object composition.
- For selection-first products, do not start with explanation. Start with desire. The first screen should make the user want to choose, click, compare, or collect. Clean is not enough if the product needs energy. Desire must not come from badge soup or predictable AI-slop styling.
- Build the poster/composition first, then product logic. Lovable-style visual output can beat Codex when the task is art direction first; Codex compensates with a visual-concept phase.
- If inspiration is provided, store or reference it under `docs/inspiration/[project]`, write `docs/inspiration-analysis.md`, and explain what was copied, avoided, and translated.
- Data and claims need proof: source, recency, scope, fallback, or explicit sample/mock labeling.
- Product purpose clarity is mandatory for new apps: state what the app is, what it tests in Miguel Design OS, which rules are being validated, and what success or failure teaches the master system.
- If the app's main loop is `upload -> classify -> generate output`, final handoff is blocked until that loop is manually verified and documented.
- If user-generated data is part of the product promise, state whether it persists across route changes, refresh, and browser reopen. If not durable, the UI must say local/session-only.
- If UI count says `0` while uploaded or user-generated data exists, the score is capped at 40.
- Copy must name actions and states. Avoid `Submit`, vague `Continue`, `AI magic`, `seamless`, and unsupported `live/validated/optimized`.
- Responsive proof is required: 1440, 1280, 1024, 768, and 390 must preserve readable nav, aligned toolbars, readable cards, contained charts, no overlap, no horizontal overflow, and reachable primary action. Overlap/collision, content escaping containers, clipped titles, or labels collapsing into nonsense are hard fails.
- No parallel-product drift: do not build a second control app, Studio feature, or surrounding tool when the current goal is dogfooding rules against a target app.

## Evidence, Not Templates

- Agent Boss: evidence for enterprise control, audit trails, dense action hierarchy.
- Equity: evidence for data terminals, recency/source labels, numeric scanning.
- Ghostwritter: evidence for AI/writing studios with visible input/output/export.
- Ontime: evidence for social coordination only.
- Portfolio: evidence for editorial identity and authored proof.
- In The Loop case study: one app's feedback; use for failure modes, not global tone or layout.
- Robot Skill Forge rejected directions: evidence for selection-first products. Avoid beige catalogs, product brochures, dense terminals, newspaper dashboards, obvious robot-app cliches, badge/glow/stat overload, and overlapping card content when the core loop is choosing or collecting.
- `visual-library/approved/`: Migi-approved references. Extract composition and principles, not production assets.
- `visual-library/approved/inspiration/01-command-centers-dashboards/`: Command Center / Dashboard Mode. Image-aware, graph-rich, dense but readable command surfaces with one memorable attraction zone, varied panel hierarchy, meaningful metrics, useful charts, palette range, material range, deliberate image/object/media use, and action clarity. No random card soup, murky monochrome cockpit, or decorative chart wallpaper.
- `visual-library/approved/inspiration/02-creative-experimental-ui/`: Artistic / Creative Mode. Art-directed composition, unusual rhythm, memorable first impression, fewer elements with more impact.
- `visual-library/approved/inspiration/03-mobile-consumer-apps/` and `visual-library/approved/inspiration/mobile-apps/`: Mobile Product Flow Mode. Thumb-friendly hierarchy, real flow, polished mobile navigation/cards, readable screens.
- `visual-library/approved/inspiration/04-selection-gallery-browse/`: Selection / Gallery / Browse Mode. Desire to click, strong selected state, preview/detail relationship, browse rhythm, object hierarchy.
- `visual-library/approved/inspiration/05-landing-hero-pages/`: evidence for artistic landing pages. These references teach image-led composition, atmosphere, poster-like structure, minimal chrome, and sparse copy. They are not permission to create generic feature-section pages.
- `visual-library/rejected/`: Migi-rejected references. Treat as anti-patterns and do not preserve them with new paint.
- `visual-library/inspiration/`: useful references that are not yet global taste rules.

## Reference-Locked Build Mode

Activate when Migi says `use dashboard folder`, `use creative folder`, `use landing-page folder`, `base it on these screenshots`, `make it like these references`, or `follow the same approach as these apps`.

Required before implementation:

- select 3-5 exact reference anchors
- assign anchor roles: composition, palette/material, graph/component, image/object/media, responsive/layout
- create `docs/design/reference-decomposition.md`
- create `docs/design/design-transfer-spec.md`

Implementation must follow the transfer spec by segments: shell/nav, attraction zone, chart/data system, queue/list system, action/output system, responsive adaptation.

Required after implementation:

- create `docs/qa/reference-match-report.md`
- compare density, composition, palette, chart behavior, image/object/media behavior, and responsiveness against the selected anchors

## Done Gate

Do not finish until:

- design intent record exists
- `docs/design/reference-usage-report.md` exists when visual-heavy work uses visual-library references
- reference usage report includes Scale Calibration when visual-library references are used
- Reference-Locked Build Mode includes 3-5 exact anchors when a visual-library folder or screenshot set is the basis for the design
- `docs/design/reference-decomposition.md` exists before coding when Reference-Locked Build Mode is active
- `docs/design/design-transfer-spec.md` exists before coding when Reference-Locked Build Mode is active
- implementation follows the transfer spec by build segment
- `docs/qa/reference-match-report.md` exists before final handoff when Reference-Locked Build Mode is active
- reference usage report includes Image Environment Strategy when image-led, artistic, landing-page, cinematic, or visual-heavy references are used
- reference usage report includes Contrast / Legibility Strategy when image-led or visual-library references are used
- reference usage report includes Navigation Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, and Palette Direction for dashboard or visual-heavy work
- reference usage report includes Layout Integrity Contract and Responsive Breakpoint Proof for visual-heavy work
- reference usage report includes Dashboard Command-Surface Strategy when Command Center / Dashboard Mode is used
- reference usage report includes Dashboard Palette Strategy, Graph System Strategy, and Image / Object / Media Strategy when Command Center / Dashboard Mode is used
- chart-selection report exists before meaningful dashboard/analytics charts are implemented
- visual-style selection report exists before style-family/taxonomy-driven visual implementation
- image-first website analysis exists before premium website/landing image-to-code implementation
- visual spec exists before visual-heavy implementation
- design-system direction exists before significant UI implementation
- frontend aha moment has local/mock data path and verified visible interactions before backend handoff
- Visual Concept Gate was completed with 3 rendered concepts, viewport screenshots, and Migi approval when visual-heavy work required it, or Literal Target Copy Mode was explicitly requested and screenshot comparison reports exact differences
- screenshots exist or blocker is documented
- done report validates for visual UI work
- target-copy report validates when Literal Target Copy Mode applies
- screenshot comparison report exists when Literal Target Copy Mode applies
- asset manifest validates for production image-led work
- inspiration manifest validates when visual-heavy work uses inspiration
- visual QA report exists when the UI can run
- core product loop is manually verified and documented when the app depends on upload, classification, generation, selection, or persistence
- persistence truth is documented for user-generated data across route changes, refresh, and browser reopen
- dogfood target failures are translated back into Miguel Design OS patches or named open gaps
- scorecard has been run
- score blockers are fixed or named
- final report includes score, screenshot evidence, and remaining risks

## Handoff Format

```md
Skills used:
Approved rendered concept:
Reference usage report:
Reference folder mode:
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Reference match report:
Dashboard attraction zone:
Dashboard panel mix:
Dashboard chart forms:
Dashboard palette strategy:
Dashboard image/object strategy:
Dashboard live/motion strategy:
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
Files changed:
Screenshots:
Scorecard result:
Done report:
Core loop proof:
Persistence truth:
Dogfood learning:
Blockers fixed:
Remaining weaknesses:
Patched after review: yes/no
```
