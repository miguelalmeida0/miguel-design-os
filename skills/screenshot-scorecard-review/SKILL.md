# screenshot-scorecard-review

## Name

screenshot-scorecard-review

## Description

Evidence-based screenshot review for responsive quality, overlap, readability, scorecard blockers, and final handoff readiness.

## Use When

- Screenshots exist.
- The UI can run.
- The task is frontend QA, final verification, review, or fix-until-elite.
- The user asks to prove responsiveness or quality.
- Visual Swarm v1 reaches the Visual QA Anti-Slop phase.

## Do Not Use When

- No UI surface exists.
- The task is documentation-only.
- The work is backend-only.

## Required Inputs

- Screenshots at `390`, `768`, and `1440`, or a runnable UI; include `1024` and `1280` for dashboard or visual-heavy work when practical.
- Route or screen under review.
- Product type.
- Design Intent Record.
- Approved rendered concept when relevant.
- Reference folder mode, reference usage report, and Scale Calibration when visual-library references are used.
- Reference-Locked Build Mode artifacts when a visual-library folder or screenshot set is the design basis: selected anchors, anchor roles, `docs/design/reference-decomposition.md`, `docs/design/design-transfer-spec.md`, and `docs/qa/reference-match-report.md`.
- Dashboard Command-Surface Strategy when Command Center / Dashboard Mode is used.
- Dashboard Palette Strategy, Graph System Strategy, and Image / Object / Media Strategy when Command Center / Dashboard Mode is used.
- Contrast / Legibility Strategy when image-led or visual-library references are used.
- Navigation Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, and Palette Direction for dashboard or visual-heavy work.
- Domain Palette Fit for product UIs.
- Spatial Label Safe Zones for maps, floor plans, seating charts, timelines, and canvases.
- No Placebo Navigation contract when nav/tabs/segmented controls are present.
- Layout Integrity Contract and Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390 for visual-heavy work.
- Visual Concept Gate artifact when visual-heavy work applies.
- Done report artifact before final handoff.
- Core loop proof when the product depends on upload, classification, generation, selection, or persistence.
- Persistence truth for user-generated data across route changes, refresh, and browser reopen.
- Dogfood target checklist when the app exists to test Miguel Design OS.
- Asset manifest for production image-led work.
- Unsplash search plan and asset manifest when real imagery or Unsplash assets are used.
- Navigation strategy when visual-heavy work includes navigation.
- Mobile product interaction strategy when mobile product work is involved: modal/sheet fit, icon+label bottom nav, selection state, control-indicator collision, and add/create action differentiation.
- Target-copy report when Literal Target Copy Mode applies.

## Files To Read

- `evaluation/ui-scorecard.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/responsive-rules.md`
- `design-dna/clickable-vs-static-rules.md`
- `design-dna/anti-ai-tell-preflight.md` for landing/portfolio/marketing screenshots
- `design-dna/unsplash-asset-sourcing-rules.md` when real imagery or Unsplash assets are visible
- `design-intelligence/navigation-pattern-guidance.md` when navigation is visually important
- `design-dna/motion-and-delight-rules.md` when screenshots are part of motion/polish review

## Workflow

1. Capture or inspect `390`, `768`, and `1440`; inspect or capture `1024` and `1280` for dashboard or visual-heavy work when practical.
2. Prefer local capture with `node tools/visual-qa.mjs --url <url> --name <name>` when the UI can run.
3. Run `node tools/object-swap-check.mjs --url <url> --objects "<objects>" --name <name>` for roster, gallery, configurator, and selection-first products.
4. For visual-heavy work, verify the Visual Concept Gate had exactly 3 rendered concepts with preview routes and concept screenshots before implementation.
5. For Reference-Locked Build Mode, verify:
   - exact reference anchors were selected
   - each anchor has a role
   - reference decomposition happened before coding
   - design transfer spec happened before coding
   - final output compares against anchors in `docs/qa/reference-match-report.md`
   - screenshot output does not copy vibe only
6. For Three-Direction Mockup Gate work, verify:
   - `docs/design/direction-options.md` exists when visual direction was not already approved
   - three directions are meaningfully different
   - Migi selected A, B, C, or a hybrid before coding
   - `docs/design/selected-direction.md` exists after selection
   - the agent proceeded to implementation after selection unless Migi explicitly requested planning-only/spec-only/no-code
   - the final response included the UI URL when a dev server was started
   - screenshots/implementation follow the selected direction
   - nav remains readable over images, giant type, and scroll-state backgrounds
   - visible app-name/logo/initials chrome is justified in the visual spec
   - decorative orbital/radar/HUD circles are absent unless functional
   - decorative separator hairlines and label rails are absent unless functional
7. Check mobile first for horizontal scroll, clipping, sticky collision, and unreadable UI.
   - If the app has 3+ primary destinations, confirm mobile uses bottom navigation or documents a valid exception.
   - Confirm the top of mobile screens is not wasting space on primary navigation when it should hold brand, title, search, context, or hero imagery.
   - Confirm bottom nav is premium, aligned, safe-area aware, readable, not cramped, and not oversized.
   - Confirm practical mobile product bottom nav uses semantic icons plus readable labels.
   - Confirm bottom nav badges/counters do not crowd icons or labels.
   - Confirm modals/bottom sheets fit the viewport, respect safe areas, and keep primary actions visible/reachable.
   - Confirm long sheets scroll internally instead of clipping.
   - Confirm active bars, progress strips, underlines, and selection indicators do not overlap labels/content.
   - Confirm selectable chips/items preserve selected state after tap.
   - Confirm add/create actions are visually distinct from content cards and use plus/create affordance.
8. Check tablet for cramped desktop or broken mobile layout.
9. Check desktop for stretched mobile, empty expanses, or inflated scale.
10. Check scale calibration:
   - Is the UI inflated?
   - Are text sizes calibrated to references?
   - Are containers larger than their content?
   - Is the desktop viewport used well?
   - Are at least 3 meaningful content objects visible above the fold, unless the reference strongly justifies fewer?
   - Does the layout feel like mobile blown up?
   - Did the agent mistake premium for giant?
11. For Command Center / Dashboard Mode, check dashboard composition:
   - Is there one memorable attraction zone or focal visual/data anchor?
   - Are panel weights varied?
   - Are charts useful and integrated into the composition?
   - Does the surface mix metrics, charts, queues/lists, imagery/content, controls, and actions?
   - Is imagery/object/media use deliberate when the references support it?
   - Does the dashboard avoid same-weight card soup, text-and-metrics-only layout, terminal-ish dark panel spam, and decorative charts?
   - Is there a clear rhythm between calm zones and busy zones?
   - Is the palette reference-driven rather than murky monochrome or terminal green?
   - Is accent color used selectively?
   - Are there at least two useful visualization types when graph-rich references apply?
   - Is the major chart readable and meaningful?
   - Is there an image/object/media anchor when references support one?
   - Does the dashboard feel alive when the product represents monitoring, freshness, or activity?
   - Are nav labels understandable?
   - Is responsive nav polished at 390 and 768?
   - Are toolbar inputs and buttons aligned?
   - Are panels scan-first rather than prose-heavy?
   - Are buttons proportionate to their role?
   - Is the palette reference-driven and human rather than robotic/generic?
   - Does the palette fit the product domain, user environment, task pressure, and emotional state?
   - Do state colors map to actual product state?
   - Are live/session/status indicators real and understandable instead of decorative?
   - Does each nav/tab/filter selected state change visible content, route, scope, filter, or product state?
   - If there is a map, floor plan, seating chart, timeline, or canvas, do labels stay protected from object/card/glow overlap?
   - Is the primary product object central, or has it been buried by cards?
12. Check palette exploration for artistic, cinematic, landing, portfolio, creative, editorial, or experimental work:
   - Did the agent explore multiple palette directions?
   - Does the palette feel authored or generated?
   - Is the palette tied to the concept?
   - Does the palette create identity?
   - Is it readable?
   - Does it avoid the same muddy AI backgrounds?
   - Is the accent overused?
   - Do image colors and UI colors work together?
   - Did OKLCH/APCA or contrast logic guide the final palette?
13. Check contrast and text-on-image discipline:
   - Is every important text layer readable?
   - Is text over image protected?
   - Are small labels readable?
   - Does contrast survive 1440 / 768 / 390?
   - Are focal objects protected from overlays?
   - Is image treatment consistent?
   - Are gradients/scrims intentional, not emergency fixes?
   - Does any text rely on a lucky crop?
14. Check every viewport for overlap/collision, including nav, toolbars, chips, badges, forms, panels, and image overlays.
15. Check P0 layout integrity:
   - Does any text escape its card?
   - Are any card titles clipped?
   - Do charts stay inside chart containers?
   - Do bars, lines, points, axes, or labels overflow?
   - Do pills/chips overlap?
   - Do image badges collide?
   - Do containers become unreadable when resized?
   - Does the layout adapt or merely squeeze?
   - Are labels still semantic at small widths?
   - Does nav remain understandable at desktop/tablet/mobile?
   - Should this become bottom navigation?
   - Is valuable vertical space being wasted?
   - Does this feel like a premium mobile product?
   - Is the bottom navigation crafted or generic?
   - Does practical mobile bottom nav include icons plus labels?
   - Do modal sheets fit the viewport and safe area?
   - Do selectable controls preserve selected state?
   - Do control indicators overlap labels?
   - Is add/create visually distinct from content?
   - Does the UI survive 1440 / 1280 / 1024 / 768 / 390?
16. Manually verify the core loop when it is upload -> classify -> generate output, import -> analyze -> recommend, select -> configure -> output, or equivalent.
15. Verify persistence claims for user-generated data across route changes, refresh, and browser reopen.
16. For dogfood targets, map every target-app failure back to a Miguel Design OS rule/tool/prompt/checklist patch or explicit open gap.
17. Run `evaluation/ui-scorecard.md`.
18. For landing/portfolio/marketing screenshots, run anti-AI-tell checks: em-dashes, hero clutter, CTA wrap, duplicate CTA intent, fake screenshots, logo wall misuse, repeated section family, and scroll cues.
19. For real imagery or Unsplash assets, verify:
   - `docs/design/unsplash-search-plan.md` exists
   - `docs/design/unsplash-asset-manifest.md` exists
   - every meaningful image has source/photographer metadata and alt text
   - crop is robust at 1440 / 768 / 390
   - text overlays have safe zones, scrims, plates, or separation
   - stock imagery is not used as factual product proof
20. For navigation, verify:
   - `docs/design/navigation-strategy.md` exists for visual-heavy work
   - nav placement supports the hero/composition
   - selected pattern is documented
   - CTA/nav relationship is intentional
   - active/focus states are visible
   - mobile behavior is not a desktop link dump
21. For motion review, verify the screenshot evidence is paired with motion rationale or code review when animation changed.
22. Apply caps.
23. Validate `asset-manifest.local.json` when production image-led work is involved.
24. Validate `target-copy-report.local.json` when Literal Target Copy Mode applies.
25. Create or update `done-report.local.json`.
26. Run `node tools/design-os.mjs validate-done-report done-report.local.json`.
27. Patch blockers before completion when implementation is in scope.
28. Re-check changed screens.

## Stop Conditions

- Stop if a required viewport is missing and the UI can run.
- Stop if visual-heavy work asks for approval from text-only concepts or missing concept screenshots.
- Stop if Reference-Locked Build Mode has no exact anchors, no reference decomposition, no design transfer spec, or no final reference-match report.
- Stop if Three-Direction Mockup Gate applies but direction options, Migi selection, or selected-direction documentation is missing.
- Stop if Migi selected A, B, C, or a hybrid and the agent stopped after `docs/design/selected-direction.md` without explicit planning-only/no-code instructions.
- Stop if the agent asks for implementation confirmation after explicit direction selection.
- Stop if implementation ignores the selected direction.
- Stop if the screenshot output copies folder vibe but not anchor composition, density, chart behavior, image/object role, palette/material, and responsive mechanics.
- Stop if horizontal scroll appears in the primary mobile flow.
- Stop if unintended overlap or unreadable UI appears.
- Stop if dashboard references produce same-weight card soup, terminal-ish dark panel spam, murky monochrome panels, text-and-metrics-only admin layout, decorative charts, weak chart system, image-starved surfaces, or no attraction zone.
- Stop if dashboard mode produces lifeless same-color panels with weak charts and no visual anchor.
- Stop if navigation is cryptic or responsive nav overlaps content.
- Stop if navigation becomes unreadable over imagery, giant type, video, or changing scroll backgrounds.
- Stop if visible app-name/logo/initials chrome appears without visual-spec justification.
- Stop if decorative circular/orbital/radar/HUD overlays appear without explicit Migi approval and functional meaning.
- Stop if decorative hairline/separator filler appears without function.
- Stop if a mobile app with 3+ primary destinations uses desktop/top navigation without justification.
- Stop if bottom navigation is generic, cramped, oversized, poorly aligned, or lacks safe-area support.
- Stop if practical mobile product bottom nav has labels but no icons, unclear icons, inconsistent icon family, or badges crowding labels/icons.
- Stop if a modal or bottom sheet is cut off, opens awkwardly, hides primary actions, ignores safe areas, lacks internal scroll when long, or visually collides with bottom nav.
- Stop if active bars, progress strips, underlines, or selected indicators overlap control labels/content.
- Stop if selectable chips/items/tabs do not visibly preserve selected state.
- Stop if add/create action looks like a normal content item or lacks plus/create affordance.
- Stop if toolbar controls misalign or collide when wrapping.
- Stop if text-heavy containers kill scanability.
- Stop if buttons become oversized full-width bars without justification.
- Stop if any text escapes a container.
- Stop if primary headings or important UI text are clipped/cut off above, below, or sideways.
- Stop if any chart overflows its plot/card bounds.
- Stop if any core card becomes unreadable.
- Stop if labels collapse into meaningless fragments.
- Stop if layout only works at one viewport.
- Stop if fake live/session/status UI appears without real product meaning.
- Stop if palette feels robotic, generic, or template-generated.
- Stop if palette feels random for the product domain.
- Stop if navigation selected state changes without visible content or product-state change.
- Stop if spatial labels collide with map/floor-plan/timeline/canvas objects.
- Stop if a pattern canvas has catastrophic overlap between pieces, labels, badges, callouts, measurements, ruler text, or construction lines.
- Stop if a desktop command surface buries the primary object inside generic card soup.
- Stop if expressive mode uses a dull generated-app palette with no documented exploration.
- Stop if real imagery is required but source plan or Unsplash asset manifest is missing.
- Stop if a meaningful image has no alt text, broken remote URL, bad responsive crop, unsafe text overlay, or misleading product-proof claim.
- Stop if visual-heavy navigation has no documented navigation strategy.
- Stop if nav is pasted on top of the composition, competes with the hero, or repeats a generic top bar without justification.
- Stop if the screenshot feels like giant text, images, cards, or containers attacking the user.
- Stop if desktop layout feels like enlarged mobile without strong reference justification.
- Stop if any important text is hard to read.
- Stop if scorecard blockers remain but the task claims completion.
- Stop if an upload/classify/generate core loop is not manually verified and documented.
- Stop if user-generated data persistence is not specified across route changes, refresh, and browser reopen.
- Stop if UI count says `0` while uploaded or user-generated data exists.
- Stop if browser chrome, dock, desktop, or editor UI is used as screenshot proof.
- Stop if a dogfood target failure is not translated back into a Miguel Design OS patch or explicit open gap.
- Stop if work drifts into a parallel product, Studio feature, or control app while the active goal is dogfooding a target app.
- Stop if visual UI work has no validated done report before final handoff.
- Stop if visual UI work has no visual QA report when the UI can run.
- Stop if Literal Target Copy Mode has no validated target-copy report.
- Stop if production image-led work has no validated asset manifest.
- Stop if landing/portfolio/marketing screenshots fail Taste preflight.
- Stop if animation changed but no motion standards review was performed.

## Output Contract

```md
Screenshots inspected:
Concept screenshots inspected:
390 result:
768 result:
1440 result:
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Reference match report:
Scale calibration:
Dashboard command-surface strategy:
Dashboard palette strategy:
Graph system:
Image/object/media strategy:
Contrast / legibility:
Navigation strategy:
Toolbar alignment:
Text density:
Button proportions:
Modal / sheet fit:
Mobile nav icons + labels:
Selection state persistence:
Control indicator collision:
Add/create action differentiation:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Palette direction:
Domain palette fit:
Placebo navigation:
Spatial label safe zones:
Primary product object:
Scorecard result:
Done report:
Target-copy report:
Asset manifest:
Core loop proof:
Persistence truth:
Dogfood learning:
Caps applied:
Blockers:
Patch pass completed: yes/no
Remaining verification gaps:
```

## Scorecard Blockers

- No `390 / 768 / 1440` proof: max score 8.
- Text-only concepts for visual-heavy work: max score 5.
- Art direction approval requested without visual previews: max score 5.
- Missing concept screenshots: max score 6.
- Implementation before visual concept approval: max score 6.
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
- Dashboard charts are decorative: max score 6.
- Major dashboard chart is decorative or unclear: max score 5.
- Too few meaningful charts despite graph-rich references: max score 6.
- Dashboard imagery/object/media absent despite relevant reference evidence: max score 6.
- Dashboard uses only text/metrics/panels with no image/object/media layer despite reference support: max score 6.
- Static dashboard feels dead despite live/monitoring product concept: max score 7.
- Terminal-ish dark panel spam as dashboard art direction: max score 6.
- AI scale inflation visible: max score 6.
- Giant headline/container attack: max score 6.
- Fewer than 3 meaningful desktop content objects without strong reference justification: max score 6.
- Oversized image used as filler: max score 7.
- Desktop layout feels like enlarged mobile: max score 6.
- Containers much larger than their content: max score 6.
- Dense controlled reference output becomes sparse/giant: max score 5.
- Hero consumes the screen and hides core product loop without justification: max score 6.
- Important text hard to read over image: max score 5.
- Small text over busy image without protection: max score 5.
- CTA/nav text weak contrast: max score 5.
- Text readable in one viewport but failing another: max score 6.
- Image-led UI without contrast strategy: max score 6.
- Focal object darkened/covered until emotional impact is lost: max score 7.
- Inconsistent image-card overlay treatments without reason: max score 7.
- Contrast depends on a lucky crop: max score 6.
- Unintended overlap/collision: max score 6.
- Mobile horizontal scroll: cap applies.
- Unreadable or clipped primary UI: prevents elite.
- Missing scorecard result: prevents elite.
- Missing validated done report for visual UI work: max score 6.
- Missing target-copy report during Literal Target Copy Mode: max score 6.
- Missing asset manifest for production image-led work: max score 6.
- Dead button in primary UI: max score 6.
- Watermark/editor/browser artifact: max score 4.
- UI count says 0 while uploaded/user data exists: max score 4.
- Upload/classify/generate core loop unverified: max score 6.
- User-generated persistence unspecified: max score 6.
- Browser chrome/dock/desktop/editor UI used as proof: max score 6.
- Dogfood target with no Design OS learning patch: max score 6.
- Parallel-product drift during target dogfood: max score 6.
- Cryptic primary navigation: max score 5.
- Nav abbreviations without obvious meaning: max score 6.
- Icon-only nav without labels/tooltips/context: max score 6.
- Broken responsive nav or nav overlap: max score 5.
- Mobile app using desktop navigation without justification: max score 5.
- Poor bottom navigation craftsmanship: max score 5.
- Top navigation stealing vertical space on mobile: max score 5.
- Bottom navigation with poor spacing/alignment: max score 5.
- Generic mobile navigation with no personality: max score 6.
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
- Agent stops after selected-direction.md despite Migi choosing a direction: max workflow score 5.
- Agent asks for implementation confirmation after explicit direction selection: max workflow score 5.
- Direction gate requires redundant approval step: max workflow score 6.
- Direction options lack palette/image/layout/motion strategy: max score 6.
- Decorative circular/orbital line overlay used as atmosphere: max score 5.
- Nav unreadable over image/type/background: max score 4.
- Forced app name/logo chrome without justification: max score 5.
- Decorative separator/hairline used without function: max score 5.
- Agent ignores selected direction during implementation: max score 5.
- No selected-direction.md after Migi chooses: max score 7.
- Text visibly escapes container: max score 2.
- Primary heading or important text clipped/cut off: max score 3.
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

- Do not claim "responsive" without viewport evidence.
- Do not rely on old Design OS captures as proof for the current UI.
- Do not accept browser chrome, dock, desktop, or editor UI screenshots as app QA evidence.
- Do not claim a product loop works until it has been manually verified from input through output.
- Do not claim persistence unless route changes, refresh, and browser reopen behavior are known and disclosed.
- Do not let dogfood target failures remain only in the target app; patch Miguel Design OS or name the open gap.
- Do not add external screenshot dependencies inside this skill.
- Do not claim done from build/lint alone; visual work needs screenshot evidence and a validated done report.
- Treat visual target screenshots as evidence only, never production assets.
- If the UI cannot run, report the run command, error, and best alternate evidence.

## Advanced Motion Evidence

When advanced/cinematic/artistic/portfolio motion is central, screenshot review must ask:

- Does `docs/design/motion-choreography-plan.md` exist?
- Is there a motion sequence report from `tools/capture-motion-sequence.mjs` or an honest capture blocker?
- Do static screenshots show distinct scroll states rather than the same page repeated?
- Did `skills/review-animations/SKILL.md` review the motion code?
- Was `evaluation/benchmarks/motion-cinematic.benchmark.md` used?

Hard stop: do not accept "advanced motion" from a single background animation or repeated fade-up.

## Post-Build Review Escalation

- Use `skills/evidence-backed-critique/SKILL.md` for finished-state critique when Migi asks for a critique, uploads review screenshots, or a dogfood UI needs a full score with Nielsen heuristics, cognitive load, persona red flags, and persisted snapshots.
- Use `skills/text-clarity-review/SKILL.md` before calling copy-heavy product UI final when CTAs, forms, states, errors, empty screens, settings, dashboards, or onboarding copy are visible.
- Use `skills/production-hardening-review/SKILL.md` before calling product UI production-ready, especially for dashboards, forms, modals, mobile flows, tables, maps, settings, async states, and real-world data stress.
- These reviews run after implementation or screenshot evidence, not during Fast Direction Gate.

## Visualization / Diagram Checks

- For charts, graphs, maps, diagrams, timelines, floor plans, pattern canvases, node graphs, or spatial product objects, require evidence that `skills/chart-system-director/SKILL.md` or `skills/diagram-canvas-system/SKILL.md` was used before implementation.
- Check whether labels, axes, legends, tooltips, values, units, pattern-piece names, section labels, and selected states stay readable and inside bounds.
- Check whether pattern-canvas label lanes, callout routes, badge safe zones, measurements, rulers, and construction lines remain readable without catastrophic overlap.
- Check whether selection updates inspector/details instead of acting as decoration.
- Check whether a runnable diagram/canvas used `tools/diagram-integrity-check.mjs` or documented why the detector was blocked.
- Route to `skills/data-viz-hardening-review/SKILL.md` when long labels, many objects, no data, async states, narrow widths, or accessibility stress could break the visualization.
- Stop if the chart/diagram is decorative, fake, clipped, label-colliding, color-only, or lacks a visible product question.
- Stop if the canvas feels janky, overdrawn, or performance-heavy and no rendering/performance budget is documented.
