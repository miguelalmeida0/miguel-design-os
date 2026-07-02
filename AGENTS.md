# Agent Instructions

Miguel Design OS is a simple design memory and frontend-agent instruction system. It is not a product app and does not require a frontend Studio UI.

## Start Here

For any frontend/design task:

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Inspect `visual-library/README.md`.
3. Check `visual-library/approved/` for relevant references.
4. Check `visual-library/rejected/` for relevant anti-patterns.
5. Use `agent-workflows/simple-visual-reference-workflow.md` when visual references matter.
6. Use routed skills only when relevant; do not load the whole repo.
7. Run `node tools/design-os.mjs route --task "<task>"` when the CLI is useful.
8. Run `evaluation/ui-scorecard.md` before finishing significant frontend work.

## Core Rules

- Never build a generic SaaS dashboard unless Migi explicitly asks for one.
- For `01-command-centers-dashboards` or dashboard-folder references, build an image-aware, graph-rich, composed command surface: one attraction zone, varied panel weights, useful chart forms, reference-driven palette, deliberate image/object/media roles, compact scale, mixed materials, optional live/state energy, and calm/busy rhythm. Do not ship same-weight card soup, murky monochrome / terminal-green dashboards, single-accent overuse, text-and-metrics-only dashboards, terminal-ish dark panel spam, decorative charts, or image-starved surfaces.
- Global UI craft matters as much as art direction: navigation labels must be understandable, responsive nav must be deliberately designed, search/actions must align, panels must be scan-first instead of prose-heavy, buttons must be proportionate, layouts must not collide at 1440/768/390, and palettes must feel human/reference-driven rather than machine-generated.
- P0 layout integrity comes before taste: text, charts, nav, cards, badges, buttons, forms, and containers must stay inside their intended bounds and remain readable at real viewport sizes. Responsive design must adapt, not squeeze desktop UI until labels collapse or content escapes.
- Do not use fake live/session/status theater. Only show live, monitoring, session, telemetry, or glowing status indicators when they have real product meaning, are understandable to the user, and affect a decision.
- Never claim visual quality without screenshot evidence when the UI can run.
- Screenshots are design evidence, not production assets.
- If Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, use Literal Target Copy Mode.
- If Migi points to a visual-library folder, select the correct Reference Folder Mode before layout and create `docs/design/reference-usage-report.md` before visual-heavy coding.
- If Migi says landing page, creative, artistic, cinematic, editorial, visual-heavy, or image-led, use Landing Page / Artistic Mode: poster logic, image-led composition, sparse copy, no Blogspot structure, and no dashboard furniture.
- Every major image needs a declared role; images are not random decoration.
- For artistic, landing-page, cinematic, editorial, or image-led references, decide whether the image is environment or asset. Do not trap immersive scenes in rectangular cards by default.
- Avoid AI scale inflation globally: calibrate text, containers, cards, images, spacing, and above-the-fold density against the selected references. Premium does not mean gigantic.
- Protect contrast globally: important text needs a stable readable background. Text over images requires a deliberate safe zone, scrim, plate, mask, crop, or separation outside the image.
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
- Tailwind/global CSS migration: `skills/tailwind-migration-zero-regression/SKILL.md`.
- Auth, onboarding/login naming, mock data, production states, persistence, or truthful claims: `skills/truthful-state-product-naming/SKILL.md`.

## Reference Folder Modes

When Migi points to a visual-library folder, activate the matching mode:

- `01-command-centers-dashboards`: Command Center / Dashboard Mode.
  - Must mean image-aware command surface, not generic admin panel.
  - Define dashboard attraction zone, panel mix, chart forms, palette strategy, graph system, image/object/media strategy, material range, live/motion strategy, and calm/busy rhythm before coding.
- `02-creative-experimental-ui`: Artistic / Creative Mode.
- `03-mobile-consumer-apps` or `mobile-apps`: Mobile Product Flow Mode.
- `04-selection-gallery-browse`: Selection / Gallery / Browse Mode.
- `05-landing-hero-pages`: Landing Page / Poster Mode.

For visual-heavy work using these references, create `docs/design/reference-usage-report.md` before coding and declare the role of every major image.

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
Palette direction:
Approved/rejected principles used:
Files changed:
Screenshots:
Scorecard result:
Done report:
Remaining weaknesses:
```
