# anti-ai-slop-review

## Name

anti-ai-slop-review

## Description

Review an existing UI for common AI-builder failure modes and produce concrete fixes instead of vague taste commentary.

## Use When

- Reviewing existing UI.
- Migi asks if a design feels generic, safe, boring, or AI-generated.
- The work needs anti-slop checks before completion.

## Do Not Use When

- No UI exists yet.
- The task is purely backend, data, or infrastructure.
- The user asks only for implementation of an already approved design.

## Required Inputs

- Screenshots or runnable UI.
- Product type.
- Primary object and primary action.
- Any inspiration or approved direction.
- Any rejected direction.
- Reference folder mode and `docs/design/reference-usage-report.md` when visual-library references are used.
- Reference-Locked Build Mode artifacts when a visual-library folder or screenshot set is the design basis: selected anchors, anchor roles, `docs/design/reference-decomposition.md`, `docs/design/design-transfer-spec.md`, and `docs/qa/reference-match-report.md`.
- Dashboard Command-Surface Strategy when Command Center / Dashboard Mode is used.
- Dashboard Palette Strategy, Graph System Strategy, and Image / Object / Media Strategy when Command Center / Dashboard Mode is used.
- Image Environment Strategy when image-led, artistic, landing-page, cinematic, or visual-heavy references are used.
- Scale Calibration section when visual-library references are used.
- Contrast / Legibility Strategy when image-led or visual-library references are used.
- Navigation Strategy, Navigation Art-Direction Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, and Palette Direction for dashboard or visual-heavy work.
- Layout Integrity Contract and Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390 for visual-heavy work.
- Image role strategy for major images.
- Unsplash search plan and asset manifest when real imagery or Unsplash assets are used.
- Done report artifact before final handoff when visual UI work is reviewed.
- Target-copy report when reviewing Literal Target Copy Mode output.
- Asset manifest when reviewing production image-led output.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/anti-patterns.md`
- `design-dna/rejected-directions.md`
- `design-dna/anti-ai-tell-preflight.md` for landing/portfolio/marketing work
- `design-dna/unsplash-asset-sourcing-rules.md` when real imagery or Unsplash assets are used
- `design-intelligence/navigation-pattern-guidance.md` when navigation affects composition
- `design-dna/motion-and-delight-rules.md` when motion exists
- `rules/anti-patterns.md`
- `evaluation/ui-scorecard.md`

## Workflow

1. Identify the product's actual visual thesis.
2. Check for:
   - obvious theme literalism
   - AI scale inflation
   - giant headline/container attack
   - text sizes not calibrated to references
   - containers larger than their content
   - poor desktop viewport use
   - too few meaningful content objects above the fold
   - mobile design blown up on desktop
   - premium mistaken for giant
   - hope-based contrast
   - text over image without protection
   - weak grey-on-dark labels
   - CTA/nav text with weak contrast
   - responsive crop contrast failures
   - focal objects covered by overlays
   - inconsistent image overlay treatments
   - image trapped in grid
   - immersive reference reduced to boxed image asset
   - image treated as content instead of environment
   - component-led layout despite image-led reference
   - motion without purpose
   - same layout with new paint
   - badge soup
   - container soup
   - reference flattening
   - wrong reference folder mode
   - missing reference usage report
   - visual-library folder used with no selected reference anchors
   - reference decomposition missing before coding
   - design transfer spec missing before coding
   - output copies mood but not anchor composition
   - output copies color but not structure
   - Three-Direction Mockup Gate skipped for new visual-heavy work
   - direction options are minor variants of the same layout or palette
   - implementation started before Migi selected a direction
   - agent stopped after selected-direction.md despite Migi choosing A, B, C, or a hybrid
   - agent asked for redundant implementation confirmation after explicit direction selection
   - selected direction ignored during implementation
   - image/object/chart behavior from selected anchors ignored
   - missing final reference-match report
   - references blended equally with no priority
   - major images used as decoration only
   - overlap/collision
   - generic dashboard energy
   - cryptic navigation labels such as `CMD`, `SIG`, `CMP`, `BRF`, or vague system labels
   - generic logo-left links-center CTA-right nav used without exploration
   - sticky pill nav, sticky black bar, or generic SaaS top bar used by default
   - nav pasted over a hero or image-led composition instead of integrated
   - nav unreadable over images, giant type, video, gradients, or scroll-state background changes
   - forced app-name/logo/initials chrome used without justification
   - decorative circular/orbital/radar/HUD overlays used as fake atmosphere
   - decorative separator hairlines, red ticks, label rails, or section-line filler
   - all direction options use the same nav shape
   - broken responsive navigation, cramped mobile nav, or nav overlapping content
   - desktop/top navigation copied directly onto mobile despite 3+ primary destinations
   - top navigation stealing mobile vertical space that should hold brand, title, search, context, or hero imagery
   - generic, cramped, oversized, poorly aligned, or safe-area-hostile bottom navigation
   - text-only bottom navigation in practical mobile product flows
   - bottom nav icons missing, semantically unclear, inconsistent, or crowded by badges
   - duplicated top and bottom navigation for the same primary destinations
   - mobile modal/sheet cut off, too low, hiding actions, ignoring safe areas, unable to scroll, or colliding with bottom nav
   - active/progress/underline bar overlapping button, chip, tab, segmented-control, or nav label
   - selectable chip/item/tab that does not preserve selected state after tap
   - add/create card masquerading as normal content
   - misaligned search/filter/action toolbar controls
   - text-heavy containers that feel like prose boxes
   - oversized full-width buttons without layout justification
   - responsive collisions: overlapping containers, colliding pills, covered content, or horizontal overflow
   - content escaping containers
   - clipped card titles
   - chart bars/lines/points escaping chart/card bounds
   - squeezed card garbage where labels collapse or content becomes unreadable
   - semantic label collapse into fragments such as `C`, `U`, or `?`
   - fake live/session/status/telemetry UI with no user-facing product meaning
   - machine-generated palette: dull robotic color, terminal green, AI purple, neon lime, or generic blue/grey defaults
   - random domain palette: color that looks cool but does not fit product domain, user environment, task pressure, emotional state, or state semantics
   - placebo navigation: nav, tabs, filters, or segmented controls that change active visual state without changing visible content, route, scope, filter, or product state
   - spatial label collision on maps, floor plans, seating charts, route boards, timelines, or canvases
   - primary object buried by cards in desktop command surfaces
   - dark dashboard regression where a product surface becomes generic card soup
   - safe AI-default palette in expressive modes: muddy brown, dull charcoal, beige, grey-blue, orange accent, purple glow, terminal green, neon lime, or safe neutral plus predictable accent
   - no palette exploration for artistic, cinematic, landing, portfolio, creative, editorial, or experimental work
   - image-first page uses no real images or documented image source when real imagery is required
   - Unsplash or source imagery lacks source/photographer manifest
   - major sourced image has no role, alt text, crop strategy, palette relationship, or safe-zone notes
   - generic filler stock or misleading product-proof imagery
   - broken remote image URLs
   - dashboard-specific slop:
     - generic SaaS/admin template
     - same-weight card/widget field
     - no attraction zone or focal visual/data anchor
     - text-and-metrics-only dashboard
     - terminal-ish dark panel spam
     - decorative charts
     - weak chart variety or charts with no decision purpose
     - absent image/object/media use despite relevant dashboard references
     - utility-only layout with no visual gravity
     - no calm/busy rhythm
     - murky monochrome or terminal-green palette
     - single accent color overused everywhere
     - major chart that is decorative or unclear
     - image-starved surface where references show media/object anchors
     - lifeless static surface for live/monitoring product concepts
     - one repeated material style across every panel
     - functional but visually unfinished dashboard craft
   - Blogspot/content-template landing structure when the request was landing, creative, artistic, cinematic, editorial, visual-heavy, or image-led
   - dashboard furniture inside artistic landing pages
   - artistic hero followed by generic section stacking
   - landing/artistic reference handling:
     - composition extracted, not just colors
     - image dominance preserved
     - text kept sparse
     - dashboard furniture avoided
     - generic section stacking avoided
     - visual mood continued after the hero
      - screen treated like a poster/editorial spread
   - Taste-style AI tells for landing/portfolio/marketing:
     - em-dashes in visible UI copy
     - fake div-based screenshots
     - generic names or fake-perfect numbers
     - duplicate CTA intent
     - CTA wrapping on desktop
     - repeated same-family sections
     - hero clutter and scroll cues
     - logo walls made of plain text wordmarks
     - fake status/session/live chips
   - motion/delight slop:
     - animation with no purpose
     - ease-in UI motion
     - scale(0) entrances
     - transition: all
     - high-frequency controls animated
     - delight blocking the task
3. Apply score caps before giving praise.
4. Convert each failure into a concrete correction.
5. Prioritize structural fixes before color or animation.
6. If the design lacks a thesis, route back to `visual-concept-gate`.
7. Confirm build/lint is not being treated as visual QA.
8. Run `node tools/visual-qa.mjs --url <url> --name <name>` when the UI can run.
9. Run `node tools/object-swap-check.mjs --url <url> --objects "<objects>" --name <name>` for selection, roster, gallery, or configurator products.
10. Validate target-copy, comparison, or asset-manifest evidence when those modes apply.
11. Before final handoff on visual UI work, run `node tools/design-os.mjs validate-done-report done-report.local.json`.

## Stop Conditions

- Stop if screenshot evidence is missing and the UI can run.
- Stop if a new visual-heavy app, landing page, portfolio, mobile app, dashboard redesign, or artistic interface skipped `docs/design/direction-options.md` and no visual direction was already approved.
- Stop if implementation starts before Migi chooses A, B, C, or a hybrid.
- Stop if Migi chose A, B, C, or a hybrid and the agent did not proceed into visual spec, tokens, implementation, and validation unless Migi explicitly requested planning-only/spec-only/no-code.
- Stop if `docs/design/selected-direction.md` is missing after Migi chooses.
- Stop if the design has no clear primary object or action.
- Stop if a rejected layout is being polished.
- Stop if visual-library references were used with the wrong folder mode or no reference usage report.
- Stop if Migi asked to use a folder/screenshot set as the design basis and the agent cannot name exact reference anchors, anchor roles, and transferred mechanics.
- Stop if Reference-Locked Build Mode is active but reference decomposition or design transfer spec is missing before coding.
- Stop if final Reference-Locked handoff lacks `docs/qa/reference-match-report.md`.
- Stop if Command Center / Dashboard Mode has no Dashboard Command-Surface Strategy.
- Stop if Command Center / Dashboard Mode has no Dashboard Palette Strategy or Graph System Strategy.
- Stop if dashboard references become generic SaaS/admin, same-weight card soup, terminal-ish dark panel spam, murky monochrome panels, text-and-metrics-only panels, decorative charts, image-starved surfaces, or a surface with no focal attraction zone.
- Stop if dashboard mode produces lifeless same-color panels with weak charts and no visual anchor.
- Stop if navigation is cryptic.
- Stop if a visual-heavy app uses generic top navigation without `docs/design/navigation-strategy.md`.
- Stop if navigation feels pasted on top of the page composition.
- Stop if navigation becomes unreadable over images, giant type, or changing scroll backgrounds.
- Stop if app-name/logo/initials chrome appears without visual-spec justification.
- Stop if decorative circular/orbital/radar/HUD overlays appear without explicit Migi approval and functional meaning.
- Stop if decorative hairline/separator filler appears without function.
- Stop if an app with 3+ primary destinations uses desktop/top navigation on mobile without justification.
- Stop if bottom navigation feels generic, cramped, oversized, poorly aligned, or unsafe around gestures.
- Stop if practical mobile product bottom nav has no icons or unclear icons.
- Stop if a mobile modal/sheet is visibly cut off, hides primary actions, ignores safe areas, cannot scroll, or collides with bottom nav.
- Stop if a control indicator overlaps a label/content.
- Stop if selectable controls do not preserve selected state.
- Stop if add/create action looks like content.
- Stop if responsive layout collides or nav overlaps content.
- Stop if any text escapes a container.
- Stop if any chart overflows its plot/card bounds.
- Stop if any core card becomes unreadable.
- Stop if layout only works at one viewport.
- Stop if fake session/live/status UI appears without real product meaning.
- Stop if text-heavy containers kill scanability.
- Stop if toolbar controls are visibly misaligned.
- Stop if the palette feels robotic, generic, or template-generated.
- Stop if the palette feels random for the product domain.
- Stop if nav/tabs/filters change active styling but no visible content or product state changes.
- Stop if map/floor-plan/timeline/canvas labels are covered by objects, cards, glows, or badges.
- Stop if a desktop command surface loses the primary product object to generic cards.
- Stop if an expressive mode uses a dull generated-app palette with no documented palette exploration.
- Stop if Image Environment Strategy is missing for image-led/artistic/landing references.
- Stop if real imagery is required but `docs/design/unsplash-search-plan.md` or `docs/design/unsplash-asset-manifest.md` is missing.
- Stop if stock imagery is generic filler, missing source metadata/alt text, fights the palette, breaks responsive crops, or creates false product proof.
- Stop if Scale Calibration is missing for visual-library reference work.
- Stop if Contrast / Legibility Strategy is missing for image-led or visual-library reference work.
- Stop if major images have no declared role.
- Stop if the screenshot feels like giant text, images, cards, or containers attacking the user.
- Stop if any important text is hard to read.
- Stop if the reference is immersive/image-led but the result uses a boxed rectangular image layout.
- Stop if landing-page, creative, artistic, or image-led output looks like a normal landing page with artistic images pasted in.
- Stop if visual UI work has no validated done report before final handoff.
- Stop if target-copy or asset-manifest evidence is missing for the applicable mode.
- Stop if Literal Target Copy Mode has no screenshot comparison report.
- Stop if landing/portfolio/marketing work fails anti-AI-tell preflight.
- Stop if motion lacks purpose, reduced-motion behavior, or performance discipline.

## Output Contract

```md
Visual thesis found:
Reference folder mode:
Reference usage report:
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Reference match report:
Dashboard command-surface strategy:
Dashboard palette strategy:
Graph system:
Image/object/media strategy:
Image roles:
Image environment:
Scale calibration:
Contrast / legibility:
Navigation strategy:
Selected navigation pattern:
Toolbar alignment:
Text density:
Button proportions:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Palette direction:
Domain palette fit:
Placebo navigation:
Spatial label safe zones:
Primary product object:
AI-slop failures:
Score caps applied:
Top structural fix:
Top interaction fix:
Top responsive fix:
Done report:
Target-copy report:
Asset manifest:
Visual QA report:
Object-swap report:
Patch recommendation:
```

## Scorecard Blockers

- Same layout with new paint: max score 6.
- Reference flattening: max score 6.
- Wrong reference folder mode used: max score 6.
- No reference usage report for visual-heavy visual-library work: max score 6.
- Visual-library folder used but no reference anchors selected: max score 5.
- No reference decomposition before coding: max score 5.
- No design transfer spec before coding: max score 5.
- Output uses generic mode instead of selected anchor mechanics: max score 5.
- Agent copies mood but not composition: max score 6.
- Agent copies colors but not structure: max score 6.
- Agent ignores image/object/chart behavior from anchors: max score 6.
- No final reference-match report: max score 6.
- Missing Dashboard Command-Surface Strategy for Command Center / Dashboard Mode: max score 6.
- Missing Dashboard Palette Strategy for Command Center / Dashboard Mode: max score 6.
- Missing Graph System Strategy for Command Center / Dashboard Mode: max score 6.
- Missing Image / Object / Media Strategy for Command Center / Dashboard Mode: max score 7.
- Dashboard feels like generic SaaS/admin template: max score 6.
- Dashboard has no meaningful attraction zone when references show one: max score 6.
- Murky monochrome / terminal-green palette without reference justification: max score 5.
- Single accent color overused everywhere: max score 6.
- Same-weight dashboard card/widget field: max score 6.
- Text-and-metrics-only dashboard despite richer references: max score 6.
- Dashboard charts are decorative: max score 6.
- Major dashboard chart is decorative or unclear: max score 5.
- Too few meaningful charts despite graph-rich references: max score 6.
- Dashboard imagery/object/media absent despite relevant reference evidence: max score 6.
- Dashboard uses only text/metrics/panels with no image/object/media layer despite reference support: max score 6.
- Static dashboard feels dead despite live/monitoring product concept: max score 7.
- Terminal-ish dark panel spam as dashboard art direction: max score 6.
- Functional but visually forgettable dashboard: max score 6.
- Missing Scale Calibration for visual-library reference work: max score 6.
- All references treated equally without prioritization: max score 7.
- Image used as decoration only: max score 7.
- Obvious genre cliche: max score 7.
- AI scale inflation: max score 6.
- Giant headline/container attack: max score 6.
- Fewer than 3 meaningful desktop content objects without strong reference justification: max score 6.
- Oversized image used as filler: max score 7.
- Desktop layout feels like enlarged mobile: max score 6.
- Dense controlled reference output becomes sparse/giant: max score 5.
- Important text hard to read over image: max score 5.
- Small text over busy image without protection: max score 5.
- CTA/nav text weak contrast: max score 5.
- Text readable in one viewport but failing another: max score 6.
- Image-led UI without contrast strategy: max score 6.
- Focal object darkened/covered until emotional impact is lost: max score 7.
- Inconsistent image-card overlay treatments without reason: max score 7.
- Contrast depends on a lucky crop: max score 6.
- Image-led reference implemented as boxed/card image without justification: max score 6.
- Artistic landing page uses rigid two-column image/text grid despite immersive references: max score 6.
- Strong image treated as decoration instead of composition driver: max score 6.
- Full-scene reference reduced to square image asset: max score 5.
- Image trapped in visible grid/card structure loses emotional impact: max score 6.
- Page has good image but layout still feels component-led: max score 7.
- Unintended overlap/collision: max score 6.
- Missing validated done report for visual UI work: max score 6.
- Missing target-copy report during Literal Target Copy Mode: max score 6.
- Missing screenshot comparison report during Literal Target Copy Mode: max score 6.
- Missing asset manifest for production image-led work: max score 6.
- Build/lint used as visual QA proof: max score 6.
- Watermark/editor/browser artifact: max score 4.
- Landing-page/artistic request becomes generic SaaS, blog, or grid structure: max score 6.
- Artistic hero followed by generic cards/sections: max score 7.
- Hero follows reference but the rest becomes generic: max score 7.
- Imagery used as filler instead of composition driver: max score 7.
- Text-heavy image-led page: max score 6.
- Blogspot/content-template structure: max score 5.
- Cryptic primary navigation: max score 5.
- Nav abbreviations without obvious meaning: max score 6.
- Icon-only nav without labels/tooltips/context: max score 6.
- Broken responsive nav or nav overlap: max score 5.
- Mobile app using desktop navigation without justification: max score 5.
- Poor bottom navigation craftsmanship: max score 5.
- Top navigation stealing vertical space on mobile: max score 5.
- Bottom navigation with poor spacing/alignment: max score 5.
- Generic mobile navigation with no personality: max score 6.
- Visual-heavy page uses generic top navbar without navigation exploration: max score 6.
- Creative/portfolio/landing page defaults to logo-left links-center CTA-right without justification: max score 5.
- Three direction options all use the same navigation structure: max score 5.
- Navigation feels pasted on top of the composition: max score 6.
- Navigation competes with the hero instead of supporting it: max score 6.
- CTA placement in navigation is generic or visually disconnected: max score 7.
- Navigation has no documented responsive behavior: max score 6.
- Navigation lacks clear active/focus states: max score 7.
- Mobile nav cryptic or cramped: max score 6.
- Misaligned search/action toolbar: max score 7.
- Toolbar controls collide or wrap badly: max score 6.
- Too much text inside dashboard containers: max score 6.
- Cards feel like prose boxes: max score 6.
- Oversized full-width button without justification: max score 7.
- Button proportions feel clumsy/amateur: max score 6.
- Overlapping containers, pills, or covered content on resize: max score 5.
- Horizontal overflow on core screens: max score 5.
- Fake live/session status UI: max score 5.
- Status indicator with no user meaning: max score 6.
- Decorative telemetry/status chips: max score 6.
- Palette feels machine-generated/generic: max score 6.
- Random domain palette: max score 5.
- Placebo navigation: max score 3.
- Spatial label collision: max score 4.
- Primary product object buried by support cards/panels: max score 5.
- Desktop command surface regresses into generic card soup: max score 5.
- Artistic/landing/portfolio page uses safe AI-default muddy palette without exploration: max score 6.
- Palette feels machine-generated/generic despite expressive mode: max score 5.
- No palette exploration documented for artistic/cinematic mode: max score 6.
- Color palette is readable but conceptually boring in an art-directed page: max score 7.
- Palette chosen without relation to imagery, references, or concept: max score 6.
- Bold palette used but contrast/readability fails: max score 5.
- Agent defaults to charcoal/brown/orange generated-app palette again: max score 5.
- Visual-heavy new app implemented without direction-options gate: max score 6.
- Agent provides only one direction when direction is not approved: max score 6.
- Three directions are minor variations of same layout/palette: max score 5.
- Agent codes before Migi selects direction: max score 5.
- Direction options lack palette/image/layout/motion strategy: max score 6.
- Agent ignores selected direction during implementation: max score 5.
- No selected-direction.md after Migi chooses: max score 7.
- Dull robotic palette despite expressive references: max score 5.
- Text visibly escapes container: max score 2.
- Chart bars/lines escape chart/card bounds: max score 2.
- Containers overlap on resize: max score 3.
- Card content clipped/cut off: max score 4.
- Dashboard cards become too narrow to read: max score 4.
- Labels collapse into meaningless fragments: max score 5.
- Responsive design only works at one viewport: max score 5.
- Nav breaks/overlaps/becomes unreadable on resize: max score 5.
- Image badges/pills overlap unintentionally: max score 4.
- Form fields/buttons become clipped or unreadable: max score 4.
- Core screen has horizontal overflow: max score 5.
- Chart is attractive but structurally broken: max score 4.

## Safety/Scope Rules

- Do not use insults or subjective taste labels without evidence.
- Do not recommend redesign when a small fix is enough.
- Do not add motion, glow, badges, or cards as default fixes.
- Do not accept visual-library folder work without a selected Reference Folder Mode.
- Do not accept dashboard work that reduces Migi's references to a plain admin panel, equal-card grid, or dark terminal surface.
- Do not accept dashboard work that uses murky monochrome palette, overused accent color, weak charts, or tiny-avatar-only media when references show richer systems.
- Do not accept visual-library reference work without Scale Calibration.
- Do not accept visual-library folder work that cannot name exact anchors and transferred mechanics.
- Do not accept image-led work without a Contrast / Legibility Strategy.
- Do not accept image-led/artistic/landing work without Image Environment Strategy.
- Do not accept cryptic nav, misaligned toolbars, text-heavy cards, oversized unjustified buttons, responsive collisions, fake live/session/status theater, or machine palettes as acceptable dashboard polish.
- Do not accept text escaping containers, chart overflow, clipped card titles, squeezed cards, semantic label collapse, or one-viewport responsive behavior.
- Do not accept major imagery that has no declared role.
- Do not accept huge text, huge cards, huge images, or giant empty containers as a shortcut to premium.
- Do not accept important text over imagery without deliberate protection.
- Do not accept immersive references reduced to boxed image/card/grid layouts by default.
- Do not fix an artistic landing page by adding more sections, cards, stats, or explanatory content.
- Do not accept advanced/cinematic/portfolio motion that is only one background animation, fade-up everywhere, or random hover scale.
- Do not accept motion that has no named technique, no section-by-section map, no reduced-motion plan, or no evidence when motion is central.
- Do not globalize a one-app rejection.
- Do not claim done from anti-slop review unless visual evidence is captured and the done report validates.
- Treat visual target screenshots as evidence only; production UI must not contain watermark/editor/browser artifacts.

## Post-Build Review Escalation

- If the UI needs a full finished-state critique, route to `skills/evidence-backed-critique/SKILL.md` and require screenshot/browser evidence, Nielsen scoring, cognitive load assessment, persona red flags, priority fixes, and a saved critique snapshot when possible.
- If AI slop appears through vague, generic, confusing, or inconsistent copy, route to `skills/text-clarity-review/SKILL.md` for before/after rewrites.
- If the UI works only with perfect demo data, route to `skills/production-hardening-review/SKILL.md` for long-text, empty/error/loading, i18n, accessibility, concurrency, and responsive stress checks.
- These escalation reviews happen after implementation or screenshot review, not during Fast Direction Gate.

## Visualization / Diagram Slop

Flag as AI slop:

- decorative chart wallpaper with no user question
- fake or unlabeled chart data
- random donuts, gauges, heatmaps, line charts, or waveforms
- charts with hidden units or unreadable axes
- maps, pattern canvases, timelines, or diagrams with hand-placed overlapping objects
- labels clipped by objects, selected outlines, badges, glows, or card edges
- selectable canvas objects that do not update inspector/details

Route charts to `skills/chart-system-director/SKILL.md`, spatial canvases to `skills/diagram-canvas-system/SKILL.md`, and implemented visualizations to `skills/data-viz-hardening-review/SKILL.md`. For runnable spatial UIs, ask for `tools/diagram-integrity-check.mjs` output or a blocked report.
