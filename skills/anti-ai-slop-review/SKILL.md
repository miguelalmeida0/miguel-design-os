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
- Navigation Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, and Palette Direction for dashboard or visual-heavy work.
- Layout Integrity Contract and Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390 for visual-heavy work.
- Image role strategy for major images.
- Done report artifact before final handoff when visual UI work is reviewed.
- Target-copy report when reviewing Literal Target Copy Mode output.
- Asset manifest when reviewing production image-led output.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/anti-patterns.md`
- `design-dna/rejected-directions.md`
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
   - image/object/chart behavior from selected anchors ignored
   - missing final reference-match report
   - references blended equally with no priority
   - major images used as decoration only
   - overlap/collision
   - generic dashboard energy
   - cryptic navigation labels such as `CMD`, `SIG`, `CMP`, `BRF`, or vague system labels
   - broken responsive navigation, cramped mobile nav, or nav overlapping content
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
- Stop if responsive layout collides or nav overlaps content.
- Stop if any text escapes a container.
- Stop if any chart overflows its plot/card bounds.
- Stop if any core card becomes unreadable.
- Stop if layout only works at one viewport.
- Stop if fake session/live/status UI appears without real product meaning.
- Stop if text-heavy containers kill scanability.
- Stop if toolbar controls are visibly misaligned.
- Stop if the palette feels robotic, generic, or template-generated.
- Stop if Image Environment Strategy is missing for image-led/artistic/landing references.
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
Toolbar alignment:
Text density:
Button proportions:
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Palette direction:
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
- Do not globalize a one-app rejection.
- Do not claim done from anti-slop review unless visual evidence is captured and the done report validates.
- Treat visual target screenshots as evidence only; production UI must not contain watermark/editor/browser artifacts.
