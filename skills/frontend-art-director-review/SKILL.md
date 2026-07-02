# frontend-art-director-review

## Name

frontend-art-director-review

## Description

Ruthless elite redesign critique focused on visual thesis, composition, focal object, material, atmosphere, desire, and interaction reward.

## Use When

- Migi asks for an elite redesign critique.
- The UI needs art-direction judgment, not just QA.
- The product feels safe, generic, flat, boring, or junior.
- A redesign direction needs approval or rejection.

## Do Not Use When

- The task is small bug fixing.
- The user needs implementation details only.
- The design direction is approved and only technical cleanup remains.

## Required Inputs

- Current screenshots or runnable UI.
- Product type.
- Primary object and action.
- Intended audience.
- Inspiration or approved thesis, if any.
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

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/miguel-style-principles.md`
- `design-dna/anti-patterns.md`
- `design-dna/approved-directions.md` when relevant
- `design-dna/rejected-directions.md` when relevant
- `evaluation/ui-scorecard.md`

## Workflow

1. Identify whether the design has an actual visual thesis.
2. Name the focal object and whether it carries the first screen.
3. Judge composition before components.
4. Reject junior card grids when they are the default answer rather than the right structure.
5. Reject safe generic layouts when the product needs art direction.
6. If visual-library references are used, verify:
   - the correct Reference Folder Mode was selected
   - Reference-Locked Build Mode selected 3-5 exact anchors when a folder/screenshot set was the design basis
   - each anchor has a role: composition, palette/material, graph/component, image/object/media, or responsive/layout
   - `docs/design/reference-decomposition.md` extracts canvas, composition, density, typography, charts/data, image/object/media, palette/material, and interaction model
   - `docs/design/design-transfer-spec.md` translates reference mechanics into the target app
   - implementation follows the transfer spec instead of generic mode
   - `docs/qa/reference-match-report.md` compares final output against anchors
   - `docs/design/reference-usage-report.md` exists before implementation
   - Scale Calibration compares text, container, card, image, spacing, and above-the-fold density against the selected references
   - references were prioritized instead of blended equally
   - every major image has a declared role
7. For Command Center / Dashboard Mode, verify:
   - the dashboard has one memorable attraction zone or focal visual/data anchor
   - panel weights vary instead of forming same-weight card soup
   - charts support decisions, status, comparison, or trend instead of acting as decoration
   - the surface mixes useful panel roles: metrics, charts, queues/lists, activity, imagery/content, controls, actions
   - imagery, object, media, avatar, scene, map, or dominant chart use is deliberate when references support it
   - typography and containers are compact, not inflated
   - there is a rhythm between dense operational zones and calmer visual/support zones
   - the design avoids terminal-ish dark panel spam and generic admin layout
   - palette is reference-driven, not murky monochrome or terminal-green by default
   - accent color is selective, not sprayed across every label, border, chart, and button
   - material range exists across base, raised, quiet, active, image/media, and data panels
   - chart variety is strong enough for the product and references
   - major chart communicates state, priority, comparison, or change clearly
   - image/object/media usage is meaningful when the references support it
   - live indicators, transitions, or active-state cues exist when the product represents monitoring, freshness, or activity
   - navigation labels are understandable and not cryptic abbreviations
   - responsive nav is crafted for desktop, tablet, and mobile instead of squeezed
   - search, filters, and action buttons align as one toolbar system
   - panels are scan-first, not paragraph-heavy containers
   - buttons are proportionate and full-width only when justified
   - responsive resizing does not create overlapping panels, pills, controls, or hidden content
   - palette feels human and reference-driven, not machine-generated
   - live/session/status indicators have real product meaning instead of decorative theater
8. For landing-page, creative, artistic, cinematic, editorial, or image-led work, verify:
   - composition was extracted, not just colors
   - image dominance carries the page
   - reference uses image as environment or image as asset
   - immersive references are not boxed into rectangular grid slots
   - page feels composed around the image
   - image is the emotional driver, not decoration
   - text stays sparse
   - dashboard furniture is absent
   - generic section stacking is absent
   - visual mood continues after the hero
   - the screen behaves like a poster/editorial spread
9. Check global scale calibration:
   - Is the UI inflated?
   - Are text sizes calibrated to references?
   - Are containers larger than their content?
   - Is the desktop viewport used well?
   - Is there enough meaningful content visible above the fold?
   - Does the layout feel like a mobile design blown up?
   - Did the agent mistake premium for giant?
10. Check award-level contrast discipline:
   - Is every important text layer readable?
   - Is text over image protected?
   - Are small labels readable?
   - Does contrast survive 1440 / 768 / 390?
   - Are focal objects protected from overlays?
   - Is image treatment consistent?
   - Are gradients/scrims intentional, not emergency fixes?
   - Does any text rely on a lucky crop?
11. Check image environment discipline:
   - Did the agent box an image that should be immersive?
   - Are text safe zones planned?
   - Are focal objects protected?
   - Does the crop feel intentional?
   - Does the page still feel trapped in a grid?
12. Check P0 layout integrity:
   - Does any text escape its card?
   - Are any card titles clipped?
   - Do charts stay inside chart/card containers?
   - Do bars, lines, points, axes, or labels overflow?
   - Do pills, chips, or image badges overlap?
   - Do containers become unreadable when resized?
   - Does the layout adapt or merely squeeze?
   - Are labels still semantic at small widths?
   - Does nav remain understandable at desktop/tablet/mobile?
   - Does the UI survive 1440 / 1280 / 1024 / 768 / 390?
13. Evaluate material, atmosphere, hierarchy, desire, and interaction reward.
14. Separate concept failure from execution failure.
15. If concept failure exists, route to `visual-concept-gate`.
16. If execution failure exists, provide concrete patch priorities.

## Stop Conditions

- Stop if the critique lacks evidence from screenshots or references.
- Stop if the first viewport has no focal object.
- Stop if visual-library references were used with the wrong folder mode or no reference usage report.
- Stop if the agent cannot name the exact reference anchors and their transferred mechanics.
- Stop if Reference-Locked Build Mode is active but reference decomposition or design transfer spec is missing before coding.
- Stop if output copies vibe, color, or category but not anchor composition, density, chart behavior, image/object role, palette/material, and responsive mechanics.
- Stop if Command Center / Dashboard Mode becomes generic admin template, same-weight card soup, text-and-metrics-only dashboard, terminal-ish dark panel spam, murky monochrome dashboard, weak/decorative chart system, or lacks a meaningful attraction zone.
- Stop if dashboard mode produces lifeless same-color panels with weak charts and no visual anchor.
- Stop if navigation is cryptic or responsive nav collides with content.
- Stop if toolbar inputs/buttons are visibly misaligned or collide when wrapping.
- Stop if text-heavy containers kill scanability.
- Stop if fake live/session/status indicators appear without real product meaning.
- Stop if the palette feels robotic, generic, or template-generated.
- Stop if any text escapes a container.
- Stop if any chart overflows its plot/card bounds.
- Stop if any responsive collision exists.
- Stop if any core card becomes unreadable.
- Stop if nav breaks on resize.
- Stop if layout only works at one viewport.
- Stop if major imagery is decoration only.
- Stop if the output only suggests color, spacing, glow, or bigger type.
- Stop if the screenshot feels like giant text, images, cards, or containers attacking the user.
- Stop if any important text is hard to read.
- Stop if the reference is immersive/image-led but the result uses a boxed rectangular image layout.
- Stop if landing-page, creative, artistic, or image-led output looks like a normal landing page with artistic images pasted into sections.

## Output Contract

```md
Verdict:
Visual thesis:
Focal object:
Composition assessment:
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
Material/atmosphere:
Desire mechanism:
Interaction reward:
Concept failures:
Execution failures:
Required redesign move:
Scorecard caps:
```

## Scorecard Blockers

- No visual thesis: cap applies through identity score.
- Junior card grid as default answer: cap through layout/composition.
- Obvious genre cliche: max score 7.
- Same layout with new paint: max score 6.
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
- Dashboard charts are decorative: max score 6.
- Major dashboard chart is decorative or unclear: max score 5.
- Too few meaningful charts despite graph-rich references: max score 6.
- Dashboard imagery/object/media absent despite relevant reference evidence: max score 6.
- Dashboard uses only text/metrics/panels with no image/object/media layer despite reference support: max score 6.
- Static dashboard feels dead despite live/monitoring product concept: max score 7.
- Terminal-ish dark panel spam as dashboard art direction: max score 6.
- Functional but visually forgettable dashboard: max score 6.
- Functional but visually unfinished dashboard: max score 6.
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
- Fake live/session status UI: max score 5.
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
- Missing Scale Calibration for visual-library reference work: max score 6.
- All references treated equally without prioritization: max score 7.
- Image used as decoration only: max score 7.
- AI scale inflation visible: max score 6.
- Giant headline/container attack: max score 6.
- Fewer than 3 meaningful desktop content objects without strong reference justification: max score 6.
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
- Immersive reference reduced to square image asset: max score 5.
- Strong image treated as decoration instead of composition driver: max score 6.
- Page has good image but still feels component-led: max score 7.
- Selection-first product without desire: max score 7.
- Landing-page/artistic request becomes generic SaaS, blog, or grid structure: max score 6.
- Artistic hero followed by generic cards/sections: max score 7.
- Hero follows reference but the rest becomes generic: max score 7.
- Blogspot/content-template structure: max score 5.

## Safety/Scope Rules

- Be direct, but ground critique in visible evidence.
- Do not propose a universal style.
- Do not let a visual-library folder be used as generic inspiration without selecting its mode.
- Do not accept dashboard references translated into plain admin panels, equal-card grids, or text-and-metrics-only tools.
- Do not demand cinematic or playful treatment unless the product calls for it.
- When the product does call for artistic landing-page behavior, do not accept dashboard furniture, feature grids, or text-heavy section stacking as a substitute for composition.
- Do not confuse personal taste with product-specific art direction.
