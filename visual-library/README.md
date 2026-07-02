# Visual Library

This folder is Migi's lightweight visual memory.

It exists so future frontend agents can quickly inspect what Migi likes, what Migi rejects, and what principles should guide a new interface.

## Folders

- `approved/`: UI references Migi likes. These teach composition, taste, interaction feel, hierarchy, and restraint.
- `rejected/`: UI references Migi dislikes. These teach anti-patterns and failure modes.
- `inspiration/`: useful references that are not yet approved as global taste.
- `case-studies/`: short writeups about specific wins, failures, and dogfood lessons.
- `templates/`: note templates for documenting screenshots.

## Rules

- Screenshots are design evidence, not production assets.
- Approved references teach composition and taste; they are not palettes or brands to clone blindly.
- Rejected references are valuable because they name what future agents must avoid.
- Each reference folder activates a design mode. Select the folder mode before choosing layout.
- If Migi asks to use a folder or screenshot set as the basis for a design, activate Reference-Locked Build Mode. Select 3-5 exact reference anchors, decompose them, create a design transfer spec, and compare the result back to those anchors.
- Do not proceed from folder vibe. Future agents must name the exact reference files and what each one contributes: composition, palette/material, graph/component, image/object/media, or responsive/layout mechanics.
- The dashboard folder activates an image-aware command-surface mode, not a generic admin template. Extract attraction zone, panel mix, chart forms, palette strategy, image/object/media roles, material range, density, live/state energy, and calm/busy rhythm.
- Visual references also teach craft details: readable navigation, responsive nav behavior, toolbar rhythm, text density, button proportions, collision-free layout, and human palette direction. Do not copy only color/mood and miss these systems.
- Visual references also teach layout integrity: containment, minimum card widths, chart bounds, label semantics, badge spacing, and how the design adapts across desktop, tablet, and mobile. Do not squeeze layouts until content breaks.
- Do not use cryptic navigation, fake live/session/status chips, decorative telemetry, misaligned toolbars, prose-heavy panels, clumsy full-width desktop buttons, or machine-generated palettes as substitutes for polish.
- Text escaping containers, chart overflow, clipped titles, overlapping badges, squeezed unreadable cards, and labels collapsing into nonsense are P0 failures before taste is evaluated.
- For visual-heavy work using visual-library references, create `docs/design/reference-usage-report.md` before coding.
- When using any folder, extract scale and density, not just color or mood. Many approved desktop references show more meaningful information at once than AI-generated apps usually produce.
- Avoid inflated type, huge empty containers, oversized filler images, and low desktop density unless the reference clearly supports that scale relationship.
- When using image-led references, extract contrast strategy too. Text over images must use safe zones, scrims, plates, masks, deliberate crops, or be separated outside the image.
- Award-level UI never makes users fight to read. Artistic mood does not excuse weak contrast, washed-out labels, or text over noisy image detail.
- Every major image needs a declared role: hero scene, focal object, proof object, background atmosphere, editorial fragment, selection thumbnail, or texture/material layer.
- For artistic, landing-page, cinematic, editorial, or image-led references, decide whether the image is environment or asset. Do not trap immersive scenes in rectangular cards by default.
- If the reference uses a dominant background scene, compose around the image first: full-bleed, oversized, masked, layered, edge-to-edge, soft backdrop, or composition-driving crop.
- Every screenshot should have a matching `.md` note using `templates/reference-note.template.md`.
- Do not copy colors, brands, logos, proprietary assets, or product layouts blindly.
- Extract principles unless Migi explicitly says Literal Target Copy Mode is active.
- If Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, use Literal Target Copy Mode and copy only the supplied visual target while excluding browser/editor/watermark artifacts.

## Reference Folder Modes

| Folder | Mode | Use For | Must Produce | Avoid |
| --- | --- | --- | --- | --- |
| `approved/inspiration/01-command-centers-dashboards/` | Command Center / Dashboard Mode | dashboard folders, command centers, dense data/productivity tools | image-aware graph-rich command surface, one attraction zone, varied panel hierarchy, meaningful metrics, useful charts, palette/material range, deliberate image/object/media use, live/state energy when relevant, command/action clarity | random card soup, murky monochrome or terminal-green palettes, overused accent color, same-weight widgets, text-and-metrics-only admin panels, decorative charts, chart-lite systems, image-starved surfaces, no focal anchor, generic SaaS dashboards, terminal-ish dark panel spam |
| `approved/inspiration/02-creative-experimental-ui/` | Artistic / Creative Mode | creative folders, experimental UI, editorial references, visual-heavy inspiration | art-directed composition, memorable first impression, unusual rhythm, fewer elements with more impact | normal dashboard structure, boring grids, safe template layouts, decorative chaos with no product clarity |
| `approved/inspiration/05-landing-hero-pages/` | Landing Page / Poster Mode | landing page folders, hero page references, cinematic/product story pages | image-led composition, sparse copy, poster-like hero, emotional scene, minimal chrome, visual rhythm beyond the hero | Blogspot/content-template structure, repeated feature sections, lots of cards, image pasted into generic SaaS page |
| `approved/inspiration/03-mobile-consumer-apps/` and `approved/inspiration/mobile-apps/` | Mobile Product Flow Mode | mobile app references, consumer flows, onboarding/profile/search/home screens | strong mobile hierarchy, real flow, thumb-friendly actions, polished card/navigation systems | tiny unreadable mockups, overdecorated fake app shots, beautiful screens with no usable flow |
| `approved/inspiration/04-selection-gallery-browse/` | Selection / Gallery / Browse Mode | selection/gallery folders, rosters, browse, marketplace, media library, configurators | desire to click/select, strong selected state, preview/detail relationship, browse rhythm, object hierarchy | boring equal grids, unclear selected state, equally important cards, swaps that break layout |

## What To Extract

- exact reference anchors selected
- role of each anchor
- reference mechanics transferred into the target product
- composition
- focal object
- dashboard attraction zone when using command-center references
- dashboard panel mix, palette strategy, chart forms, graph system, image/object/media roles, material range, live/state layer, and calm/busy rhythm
- navigation clarity and responsive nav behavior
- toolbar alignment and action/input rhythm
- panel text density and scanability
- button proportion rules
- responsive collision risks
- layout integrity and responsive breakpoint proof
- chart bounds and fallback chart forms
- semantic label strategy
- palette direction and accent discipline
- density
- scale relationships
- number of meaningful content objects above the fold
- largest text, supporting text, and small label roles
- card/container density
- image scale role
- image environment vs asset strategy
- crop strategy and why the image should or should not be boxed
- contrast and legibility strategy
- text-over-image protection method
- safe zones and focal-object protection
- visual hierarchy
- interaction model
- what is hidden or delayed
- what makes the screen desirable
- what future agents should not repeat

## Reference-Locked Build Mode Outputs

When active, the project must include:

- `docs/design/reference-decomposition.md`
- `docs/design/design-transfer-spec.md`
- `docs/qa/reference-match-report.md`

The final UI must be compared against the selected anchors for density, composition, palette, chart behavior, image/object/media behavior, and responsiveness.

The goal is not to make a museum. The goal is to make future work faster, sharper, and less generic.
