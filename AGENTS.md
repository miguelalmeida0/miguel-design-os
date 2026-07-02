# Agent Instructions

Miguel Design OS is a simple design memory and frontend-agent instruction system. It is not a product app and does not require a frontend Studio UI.

## Start Here

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
10. For new visual-heavy work with no approved direction, create `docs/design/direction-options.md` and stop for Migi to choose.
11. After Migi chooses, create `docs/design/selected-direction.md`.
12. Create `docs/design/visual-spec.md` from `templates/visual-spec.template.md` before visual-heavy implementation.
13. Define design-system tokens from `design-dna/design-system-first-rules.md` before significant UI implementation.
14. Run an OKLCH/APCA palette pass for significant UI, palette repair, dark mode, chart colors, or contrast-sensitive work.
15. Use `agent-workflows/efficient-agent-implementation-workflow.md` for nontrivial implementation.
16. Apply an interface-feel polish pass after the main layout works and before final screenshot review.
17. Use routed skills only when relevant; do not load the whole repo.
18. Run `node tools/design-os.mjs route --task "<task>"` when the CLI is useful.
19. Run `evaluation/ui-scorecard.md` before finishing significant frontend work.

## Core Rules

- Never build a generic SaaS dashboard unless Migi explicitly asks for one.
- Chart-rich/dashboard work must route through chart selection: pick chart types from data shape and user decision, not from dashboard decoration.
- Visual style must be selected deliberately from product fit, reference mode, accessibility, performance, and Migi's rejected directions. Do not use random style roulette.
- Premium website / landing page work should be image-first when generation or strong references are available: section references, deep analysis, implementation, screenshot QA.
- Landing, portfolio, marketing, and redesign work needs a design read before coding: `Reading this as: <page kind/product type> for <audience>, with a <vibe> language, leaning toward <mode/system/aesthetic>.`
- Landing/portfolio/marketing work must run Taste-style anti-AI-tell preflight before handoff: no visible em-dashes, fake screenshots, generic names, fake numbers, CTA wrap, duplicate CTA intent, scroll cues, hero clutter, plain text logo walls, or repeated generic sections.
- Motion must have a product purpose, frequency profile, duration/easing plan, performance budget, and reduced-motion behavior. Do not animate high-frequency actions.
- New visual-heavy work requires a Three-Direction Mockup Gate: create `docs/design/direction-options.md` with Safe Refined, Artistic Expressive, and Unexpected High-Character directions, then stop for Migi to choose before coding.
- Visual-heavy work requires active dials and a visual spec before implementation.
- Significant UI work requires design-system direction before components: semantic colors, typography, spacing, radius, shadow/elevation, borders, chart/state colors, component variants, image treatment, and motion.
- Significant UI work requires OKLCH/APCA contrast logic before final palette approval. Repair contrast by changing OKLCH lightness, not random hex/chroma tweaks.
- Artistic, landing, portfolio, cinematic, creative, editorial, and experimental work requires palette exploration: safe refined, artistic expressive, and unexpected high-character palette directions before locking tokens. Do not default to muddy brown/charcoal/orange, generic blue-grey, AI purple glow, beige premium cliche, terminal green, neon lime, or safe neutrals with one predictable accent.
- Frontend MVPs must create a local aha moment first: truthful mock data in data files, all visible interactions working locally, and no backend unless requested.
- For `01-command-centers-dashboards` or dashboard-folder references, build an image-aware, graph-rich, composed command surface: one attraction zone, varied panel weights, useful chart forms, reference-driven palette, deliberate image/object/media roles, compact scale, mixed materials, optional live/state energy, and calm/busy rhythm. Do not ship same-weight card soup, murky monochrome / terminal-green dashboards, single-accent overuse, text-and-metrics-only dashboards, terminal-ish dark panel spam, decorative charts, or image-starved surfaces.
- Global UI craft matters as much as art direction: navigation labels must be understandable, responsive nav must be deliberately designed, search/actions must align, panels must be scan-first instead of prose-heavy, buttons must be proportionate, layouts must not collide at 1440/768/390, and palettes must feel human/reference-driven rather than machine-generated.
- Mobile navigation default: apps with 3+ primary destinations use bottom navigation on mobile unless the task is a documentation site, desktop-first enterprise tool, editor software, or scrolling-first website. The top of mobile app screens is for branding, page title, search, context, or hero imagery.
- P0 layout integrity comes before taste: text, charts, nav, cards, badges, buttons, forms, and containers must stay inside their intended bounds and remain readable at real viewport sizes. Responsive design must adapt, not squeeze desktop UI until labels collapse or content escapes.
- Do not use fake live/session/status theater. Only show live, monitoring, session, telemetry, or glowing status indicators when they have real product meaning, are understandable to the user, and affect a decision.
- Never claim visual quality without screenshot evidence when the UI can run.
- Screenshots are design evidence, not production assets.
- If Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, use Literal Target Copy Mode.
- If Migi points to a visual-library folder, select the correct Reference Folder Mode before layout and create `docs/design/reference-usage-report.md` before visual-heavy coding.
- If Migi says to use a specific visual-library folder or make it like a set of screenshots, activate Reference-Locked Build Mode: select 3-5 exact reference anchors, create `docs/design/reference-decomposition.md`, create `docs/design/design-transfer-spec.md`, build from that spec, and finish with `docs/qa/reference-match-report.md`.
- If Migi says landing page, creative, artistic, cinematic, editorial, visual-heavy, or image-led, use Landing Page / Artistic Mode: poster logic, image-led composition, sparse copy, no Blogspot structure, and no dashboard furniture.
- Every major image needs a declared role; images are not random decoration.
- For artistic, landing-page, cinematic, editorial, or image-led references, decide whether the image is environment or asset. Do not trap immersive scenes in rectangular cards by default.
- Avoid AI scale inflation globally: calibrate text, containers, cards, images, spacing, and above-the-fold density against the selected references. Premium does not mean gigantic.
- Protect contrast globally: important text needs a stable readable background. Text over images requires a deliberate safe zone, scrim, plate, mask, crop, or separation outside the image.
- Interface feel matters: before final visual review, check active/focus states, loading/empty/error states, perceived performance, spacing rhythm, numeric alignment, and dead/stiff surfaces.
- If Migi says a reference is inspiration, extract principles instead of cloning it exactly.
- If Migi rejects a reference, treat it as an anti-pattern and do not preserve it with new paint.
- Do not build or improve a frontend Studio app unless Migi explicitly reactivates that direction.

## Skill Routing

Use the smallest relevant set.

- Visual-heavy new app, redesign, gallery, roster, character-select, product-discovery, or selection-first work: `skills/visual-concept-gate/SKILL.md`.
- Screenshot, mockup, Lovable prototype, Pinterest image, or strong visual reference: `skills/visual-target-reconstruction/SKILL.md`.
- Selection-first, gallery, roster, marketplace, card deck, character selection, or object browsing: `skills/selection-first-products/SKILL.md`.
- Existing UI review: `skills/anti-ai-slop-review/SKILL.md`.
- Runnable UI or screenshots: `skills/screenshot-scorecard-review/SKILL.md`.
- Elite redesign critique: `skills/frontend-art-director-review/SKILL.md`.
- Visual spec before coding for visual-heavy tasks: `skills/visual-spec-compiler/SKILL.md`.
- Color tokens, contrast repair, palette scales, dark mode, or color accessibility: `skills/oklch-contrast-palette/SKILL.md`.
- Broad UI/UX craft review, typography, pseudo-elements, audio feedback, predictive prefetching, UX laws, or visual design rules: `skills/userinterface-wiki/SKILL.md`.
- Functionally done UI that feels stiff, dead, generic, unresponsive, or under-polished after implementation and before screenshot review: `skills/make-interfaces-feel-better/SKILL.md`.
- Dashboard graph systems, BI charts, analytics, forecasts, maps, funnels, or monitoring: `skills/dashboard-graph-system/SKILL.md`.
- Data visualization, chart systems, analytics, BI, monitoring, forecasting, maps, funnels, or graph-rich dashboards: `skills/data-visualization-selection/SKILL.md`.
- Visual style selection, token/effect direction, style-family fit, or taxonomy-driven art direction: `skills/visual-style-selection/SKILL.md`.
- Landing pages, hero pages, product marketing pages, and poster/image-led pages: `skills/landing-page-pattern-director/SKILL.md`.
- Landing, portfolio, marketing, and redesign craft direction: `skills/landing-page-craft-director/SKILL.md`.
- Final Taste-style preflight for landing/portfolio/marketing UI: `skills/anti-ai-tell-preflight/SKILL.md`.
- Image-first visual implementation from references/screenshots/generated sections: `skills/image-first-frontend/SKILL.md`.
- Generating or selecting landing-page visual references: use imagegen-frontend-web logic through `agent-workflows/image-first-frontend-workflow.md` and `skills/landing-page-craft-director/SKILL.md`.
- Motion planning for product/brand UI: `skills/motion-craft-director/SKILL.md`.
- Motion code review: `skills/review-animations/SKILL.md`.
- Component polish and invisible UI craft: `skills/emil-design-engineering/SKILL.md`.
- Delight/personality pass for success, empty, loading, milestone, or error states: `skills/delight-opportunity-director/SKILL.md`.
- Naming or specifying motion effects: `skills/animation-vocabulary/SKILL.md`.
- Premium website, landing page, hero, marketing site, product page, editorial/portfolio site, or website image-to-code work: `skills/image-first-website-to-code/SKILL.md`.
- Mobile apps, mobile web flows, onboarding/profile/search/home screens, or mobile reference folders: `skills/mobile-product-flow/SKILL.md`.
- Tailwind/global CSS migration: `skills/tailwind-migration-zero-regression/SKILL.md`.
- Auth, onboarding/login naming, mock data, production states, persistence, or truthful claims: `skills/truthful-state-product-naming/SKILL.md`.

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
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Image roles:
Image environment strategy:
Scale calibration:
Contrast / legibility strategy:
Navigation strategy:
Toolbar alignment:
Text density:
Button proportions:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Design read:
Anti-AI-tell preflight:
Motion strategy:
Delight strategy:
Palette direction:
Palette exploration:
Visual style selection report:
Chart selection report:
Image-first website analysis:
Direction options:
Selected direction:
Frontend aha moment:
Interactions verified:
Reference match report:
Approved/rejected principles used:
Files changed:
Screenshots:
Scorecard result:
Done report:
Remaining weaknesses:
```
