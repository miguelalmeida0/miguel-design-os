# visual-target-reconstruction

## Name

visual-target-reconstruction

## Description

Use a screenshot, Lovable prototype, Pinterest image, mockup, or strong visual reference as art-direction evidence without flattening it into shallow style tokens.

If Migi asks for an exact copy, this skill enters Literal Target Copy Mode instead of art-direction translation.

## Use When

- Migi provides a screenshot, mockup, prototype, Pinterest image, Lovable output, inspiration image, or strong visual target.
- A design must be compared against a reference.
- The current UI is described as far from the inspiration.
- Migi points to a visual-library reference folder.
- Migi asks for landing-page, creative, artistic, cinematic, editorial, visual-heavy, or image-led work from visual references.
- Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`.

## Do Not Use When

- No visual reference exists.
- The task is backend-only or copy-only.
- The reference is only a loose mood note and Migi asks not to follow it closely.

## Required Inputs

- Reference image, screenshot, URL, or description.
- Reference folder path and selected Reference Folder Mode when using visual-library folders.
- `docs/design/reference-usage-report.md` for visual-heavy work using visual-library references.
- Dashboard Command-Surface Strategy when Command Center / Dashboard Mode is selected.
- Dashboard Palette Strategy, Graph System Strategy, and Image / Object / Media Strategy when Command Center / Dashboard Mode is selected.
- Image Environment Strategy when image-led, artistic, landing-page, cinematic, or visual-heavy references are used.
- Scale Calibration section when visual-library references are used.
- Contrast / Legibility Strategy when image-led or visual-library references are used.
- Navigation Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, and Palette Direction for dashboard or visual-heavy work.
- Layout Integrity Contract and Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390 for visual-heavy work.
- Current product type.
- Primary object and primary action.
- Current UI screenshots, if available.
- Implementation constraints.
- Inspiration manifest when target/inspiration research is used.
- Done report artifact before final handoff.
- Target-copy report for Literal Target Copy Mode.
- Asset manifest for production image-led reconstruction.
- Product purpose clarity for new/dogfood apps.
- Core loop proof when the visual target supports an upload/classify/generate or equivalent product promise.
- Persistence truth when uploaded or user-generated data is shown.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/new-app-generation-rules.md`
- `agent-workflows/visual-target-reconstruction-mode.md`
- `evaluation/ui-scorecard.md`
- `docs/inspiration-analysis.md` if it exists for the project

## Workflow

### Literal Target Copy Mode Override

When Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, stop all product reasoning. Do not run the 3-concept gate, invent new art direction, expand features, run a usefulness pass, add panels, add explanations, improve, or reinterpret.

The only goal is visual parity with the supplied target.

Required sequence:

1. Identify the target screens.
2. Reconstruct the visible composition.
3. Exclude browser chrome, editor UI, and watermark artifacts.
4. Build the static shell first.
5. Implement only minimum visible interactions.
6. Capture comparison screenshots.
7. Validate `target-copy-report.local.json`.
8. Validate `asset-manifest.local.json` when production imagery is used.
9. Report exact differences.

Product logic waits until the pixel-parity shell is approved.

### Standard Visual Target Reconstruction

1. Analyze the reference before implementation.
2. If Migi points to a visual-library folder, select the correct Reference Folder Mode:
   - `01-command-centers-dashboards`: Command Center / Dashboard Mode
   - `02-creative-experimental-ui`: Artistic / Creative Mode
   - `03-mobile-consumer-apps` or `mobile-apps`: Mobile Product Flow Mode
   - `04-selection-gallery-browse`: Selection / Gallery / Browse Mode
   - `05-landing-hero-pages`: Landing Page / Poster Mode
3. If visual-heavy work uses visual-library references, create `docs/design/reference-usage-report.md` before coding.
4. If visual-library references are used, complete Scale Calibration in `docs/design/reference-usage-report.md`:
   - reference density observed
   - largest text role
   - supporting text scale
   - container/card density
   - image scale role
   - what will be avoided
   - how the implementation prevents AI scale inflation
5. If image-led, artistic, landing-page, cinematic, or visual-heavy references are used, complete Image Environment Strategy in `docs/design/reference-usage-report.md`:
   - whether the reference uses image as environment or asset
   - image role selected
   - why the image should or should not be boxed
   - crop strategy
   - focal object protection
   - text safe zones
   - scrim/mask/plate strategy
   - how the layout avoids image-trapped-in-grid
6. If image-led or visual-library references are used, complete Contrast / Legibility Strategy in `docs/design/reference-usage-report.md`:
   - whether text sits over images
   - protection method
   - safe zones
   - focal objects protected
   - small text contrast plan
   - responsive crop risk
   - what must be checked at 1440 / 768 / 390
7. If Command Center / Dashboard Mode is selected, complete Dashboard Command-Surface Strategy in `docs/design/reference-usage-report.md`:
   - attraction zone or focal visual/data anchor
   - panel mix across metrics, charts, queues/lists, activity, imagery/content, controls, and actions
   - chart forms and what each chart helps decide
   - image/object/media role when references support one
   - utility-heavy zone
   - queue/list/activity zone
   - control/action zone
   - calm zones and busy zones
   - how the design avoids same-weight card soup
   - how the design avoids terminal-ish dark panel spam
8. If Command Center / Dashboard Mode is selected, complete dashboard visual-energy strategies:
   - Dashboard Palette Strategy: reference palette observed, neutral system, accent use, state colors, material range, palette failure to avoid, and why the palette matches references
   - Graph System Strategy: major chart, supporting charts, microcharts, what each chart communicates, what would be decorative/fake, and how chart styling supports composition
   - Image / Object / Media Strategy: visual anchor, image/object role, media/avatar/content role, whether animation/live media is useful, how imagery avoids being pasted in, and how it supports dashboard hierarchy
9. For dashboard or visual-heavy work, complete global UI craft strategy:
   - Navigation Strategy: primary labels, why they are understandable, responsive behavior, mobile/lower nav plan, selected state, and avoided nav failure
   - Toolbar Alignment Strategy: input/button groups, height relationship, wrapping behavior, and primary action placement
   - Text Density Strategy: long-copy location, summarized content, scan-first panels, and expanded/details behavior
   - Button Proportion Strategy: primary button sizing, full-width button justification, and desktop/mobile behavior
   - Responsive Collision Checks: 1440, 1280, 1024, 768, 390, known collision risks, and prevention plan
   - Layout Integrity Contract: minimum card widths, tablet/mobile behavior, chart containment, truncation/line-clamp, chip wrapping, badge collision prevention, nav behavior, form/control wrapping, and long-content behavior
   - Responsive Breakpoint Proof: 1440, 1280, 1024, 768, and 390 checks for nav readability, toolbar alignment, card readability, chart containment, overlap, horizontal overflow, and primary-action reachability
   - Palette Direction: reference palette, chosen palette, accent roles, surface system, and why it avoids machine/default color
10. If references come from discovery work, create or validate `inspiration-manifest.local.json`.
11. Extract:
   - composition
   - focal object
   - material
   - atmosphere
   - hidden information
   - absent elements
   - information hierarchy
   - interaction model
   - desire mechanism
12. Declare the role of every major image: hero scene, focal object, proof object, background atmosphere, editorial fragment, selection thumbnail, or texture/material layer.
13. Decide whether major imagery should be environment or asset. If the reference uses a strong background scene, start from the scene before grid/layout.
14. Reject shallow traits as the concept: dark, neon, cards, glow, gradients, glass, rounded panels, or large text.
15. Reject dashboard flattening: command-center references must not become generic admin panels, same-weight card fields, text-and-metrics-only dashboards, terminal-ish dark panel spam, murky monochrome palettes, decorative chart collections, image-starved surfaces, cryptic nav, misaligned toolbars, fake live/session status theater, or machine-generated palettes.
16. Reject scale-only drama: giant headlines, giant images, huge empty containers, and low desktop density are not premium.
17. Reject hope-based contrast: important text over imagery needs a safe zone, scrim, plate, mask, vignette, crop, or separation outside the image.
18. Reject background image fear: immersive references should not be reduced to boxed rectangular assets.
19. For landing-page, creative, artistic, cinematic, editorial, or image-led references, explicitly check:
   - composition was extracted, not just colors
   - image dominance is preserved
   - image is used as environment when the reference supports it
   - text stays sparse
   - dashboard furniture is absent
   - generic section stacking is absent
   - visual mood continues after the hero
   - the screen behaves like a poster/editorial spread
20. Define what to copy, avoid, and translate.
21. Run Visual Concept Gate v2 if the work is visual-heavy: exactly 3 rendered concepts, preview routes, and `1440 / 768 / 390` screenshot files.
22. Stop for Migi approval after showing the rendered concepts.
23. Build a static visual shell from the approved concept before product logic.
24. Capture or inspect implementation screenshots at `390 / 768 / 1440`.
25. Compare target/current screenshots with `node tools/compare-screenshots.mjs --target <target.png> --current <current.png> --name <name>` when exact target copy applies.
26. Compare the shell against the reference and approved concept by composition, focal object, hidden information, emotional hook, image environment, scale/density, contrast strategy, navigation clarity, toolbar alignment, text density, button proportions, layout integrity, responsive breakpoint proof, responsive collision behavior, palette direction, dashboard command-surface strategy, dashboard palette strategy, graph system, and image/object/media strategy when applicable.
27. Validate `asset-manifest.local.json` when production imagery is used.
28. Verify the core loop before claiming the visual shell supports the product promise.
29. Verify persistence truth for uploaded or user-generated data.
30. Create or update `done-report.local.json` from screenshot evidence.
31. Run `node tools/design-os.mjs validate-done-report done-report.local.json`.
32. Patch the shell before adding feature depth.

## Stop Conditions

- Stop if the reference has not been analyzed.
- Stop if a visual-library folder was provided and no Reference Folder Mode was selected.
- Stop if visual-heavy work uses visual-library references but `docs/design/reference-usage-report.md` is missing.
- Stop if Image Environment Strategy is missing for image-led/artistic/landing references.
- Stop if Scale Calibration is missing for visual-library reference work.
- Stop if Contrast / Legibility Strategy is missing for image-led or visual-library reference work.
- Stop if Command Center / Dashboard Mode has no Dashboard Command-Surface Strategy.
- Stop if Command Center / Dashboard Mode has no Dashboard Palette Strategy or Graph System Strategy.
- Stop if dashboard or visual-heavy work has no Navigation Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, or Palette Direction.
- Stop if visual-heavy work has no Layout Integrity Contract or Responsive Breakpoint Proof.
- Stop if command-center references become generic SaaS/admin, same-weight card soup, terminal-ish dark panel spam, murky monochrome panels, text-and-metrics-only panels, decorative charts, image-starved surfaces, or no focal attraction zone.
- Stop if dashboard mode produces lifeless same-color panels with weak charts and no visual anchor.
- Stop if nav is cryptic, responsive layout collides, fake session/live status appears, text-heavy containers kill scanability, toolbar controls misalign, or palette feels robotic/generic.
- Stop if any text escapes a container.
- Stop if any chart overflows its plot/card bounds.
- Stop if any core card becomes unreadable.
- Stop if nav breaks on resize.
- Stop if layout only works at one viewport.
- Stop if discovered inspiration has no validated inspiration manifest.
- Stop if the output preserves only surface styling.
- Stop if the screenshot feels like giant text, images, cards, or containers attacking the user.
- Stop if any important text is hard to read.
- Stop if the reference is immersive/image-led but the result uses a boxed rectangular image layout.
- Stop if major images are used as decoration with no declared role.
- Stop if the chosen layout contradicts the reference composition.
- Stop if landing-page, creative, artistic, or image-led output looks like a normal landing page with artistic images pasted into cards or sections.
- Stop if the visual-heavy concept gate is text-only or missing screenshots when Literal Target Copy Mode is not active.
- Stop before product logic if the visual shell does not match the approved direction.
- Stop if Literal Target Copy Mode is active and the implementation changes composition, adds unrelated product UI, or explains instead of copying the visible shell.
- Stop if visual target work has no validated done report before final handoff.
- Stop if the app's purpose in Miguel Design OS is unclear for a dogfood target.
- Stop if upload/classify/generate or equivalent core loop proof is missing.
- Stop if uploaded/user-generated data appears in one area but counts, Memory, or summaries contradict it.
- Stop if persistence for uploaded/user-generated data is not labeled across route changes, refresh, and browser reopen.
- Stop if dogfood target failures do not produce Design OS rule/tool/prompt/checklist updates or explicit open gaps.
- Stop if Literal Target Copy Mode has no validated target-copy report.
- Stop if Literal Target Copy Mode has no screenshot comparison report.
- Stop if a target screenshot is used as a production asset.
- Stop if production image-led reconstruction has no validated asset manifest.

## Output Contract

```md
Reference analyzed:
Composition:
Focal object:
Material/atmosphere:
Hidden information:
Absent elements:
Interaction model:
Copy:
Avoid:
Translate:
Reference folder mode:
Reference usage report:
Dashboard command-surface strategy:
Dashboard palette strategy:
Graph system:
Image/object/media strategy:
Image role strategy:
Image environment strategy:
Scale calibration:
Contrast / legibility:
Navigation strategy:
Toolbar alignment:
Text density:
Button proportions:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Palette direction:
Rendered concepts:
Approved concept:
Literal Target Copy Mode:
Visual shell comparison:
Exact differences:
Screenshots:
Done report:
Target-copy report:
Asset manifest:
Core loop proof:
Persistence truth:
Dogfood learning:
Patch needed:
```

## Scorecard Blockers

- Inspiration flattened into shallow traits: max score 6.
- Wrong reference folder mode used: max score 6.
- No reference usage report for visual-heavy visual-library work: max score 6.
- Missing Dashboard Command-Surface Strategy for Command Center / Dashboard Mode: max score 6.
- Missing Dashboard Palette Strategy for Command Center / Dashboard Mode: max score 6.
- Missing Graph System Strategy for Command Center / Dashboard Mode: max score 6.
- Missing Image / Object / Media Strategy for Command Center / Dashboard Mode: max score 7.
- Dashboard feels like generic SaaS/admin template: max score 6.
- Dashboard has no meaningful attraction zone when references show one: max score 6.
- Murky monochrome / terminal-green palette without reference justification: max score 5.
- Single accent color overused everywhere: max score 6.
- Same-weight dashboard widget field: max score 6.
- Dashboard charts are decorative: max score 6.
- Major dashboard chart is decorative or unclear: max score 5.
- Too few meaningful charts despite graph-rich references: max score 6.
- Dashboard imagery/object/media absent despite relevant reference evidence: max score 6.
- Dashboard uses only text/metrics/panels with no image/object/media layer despite reference support: max score 6.
- Static dashboard feels dead despite live/monitoring product concept: max score 7.
- Terminal-ish dark panel spam as dashboard art direction: max score 6.
- Missing Scale Calibration for visual-library reference work: max score 6.
- All references treated equally without prioritization: max score 7.
- Image used as decoration only: max score 7.
- AI scale inflation visible: max score 6.
- Giant headline/container attack: max score 6.
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
- Strong reference provided but result preserves only surface styling: max score 6.
- Generic app layout used instead of reference composition: max score 6.
- Primary reference object replaced by grid/cards/dashboard: max score 6.
- Landing-page/artistic request becomes generic SaaS, blog, or grid structure: max score 6.
- Artistic hero followed by generic cards/sections: max score 7.
- Hero follows reference but the rest becomes generic: max score 7.
- Blogspot/content-template structure: max score 5.
- Text-only concepts for visual-heavy reference work: max score 5.
- Concept screenshots missing before approval: max score 6.
- Literal Target Copy Mode requested but composition changes or unrelated product UI is added: max score 5.
- Missing validated done report for visual target work: max score 6.
- Missing target-copy report during Literal Target Copy Mode: max score 6.
- Missing screenshot comparison report during Literal Target Copy Mode: max score 6.
- Missing asset manifest for image-led target reconstruction: max score 6.
- Watermark/editor/browser artifact in reconstructed UI: max score 4.
- UI count says 0 while uploaded/user data exists: max score 4.
- Cryptic primary navigation: max score 5.
- Nav abbreviations without obvious meaning: max score 6.
- Broken responsive nav or nav overlap: max score 5.
- Misaligned search/action toolbar: max score 7.
- Toolbar controls collide or wrap badly: max score 6.
- Too much text inside dashboard containers: max score 6.
- Oversized full-width button without justification: max score 7.
- Overlapping containers, pills, or covered content on resize: max score 5.
- Fake live/session status UI: max score 5.
- Decorative telemetry/status chips: max score 6.
- Palette feels machine-generated/generic: max score 6.
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
- Core upload/classify/generate loop unverified: max score 6.
- Persistence truth missing for uploaded/user data: max score 6.
- Dogfood target without Design OS learning patch: max score 6.

## Safety/Scope Rules

- Do not copy proprietary assets, logos, or code.
- Only use Literal Target Copy Mode for a target Migi supplies or explicitly approves.
- Do not add external dependencies as part of this skill.
- Do not expose private inspiration files outside the repo.
- Do not treat inspiration as a universal rule for unrelated projects.
- Do not treat all visual-library folders as the same moodboard.
- Do not reduce command-center/dashboard references to dark mode, cards, charts, and rounded corners.
- Do not default command-center/dashboard references to murky green, terminal black, overused lime, or purple AI palettes without reference justification.
- Do not let dashboard charts or media anchors become decorative proof of effort.
- Do not use major images without a declared role.
- Do not mistake premium, cinematic, or artistic direction for making everything huge.
- Do not place important text over imagery without deliberate contrast protection.
- Do not reduce immersive image references to boxed rectangular assets by default.
- Do not convert landing-page, creative, artistic, cinematic, editorial, or image-led references into dashboard furniture or Blogspot-style section stacks.
- Do not claim visual parity from build/lint alone; screenshot evidence and a validated done report are required.
- Do not claim a target-inspired product works until the core product loop has been verified.
- Do not imply durable Memory or persistence for uploaded examples unless route, refresh, and browser-reopen behavior is known and disclosed.
- Do not let dogfood work drift into building adjacent tools instead of evaluating the target app.
- Visual target screenshots are evidence, not production assets.
- Run `tools/compare-screenshots.mjs` for target/current parity evidence.
