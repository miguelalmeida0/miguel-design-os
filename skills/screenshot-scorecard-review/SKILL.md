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
- Dashboard Command-Surface Strategy when Command Center / Dashboard Mode is used.
- Dashboard Palette Strategy, Graph System Strategy, and Image / Object / Media Strategy when Command Center / Dashboard Mode is used.
- Contrast / Legibility Strategy when image-led or visual-library references are used.
- Navigation Strategy, Toolbar Alignment Strategy, Text Density Strategy, Button Proportion Strategy, Responsive Collision Checks, and Palette Direction for dashboard or visual-heavy work.
- Layout Integrity Contract and Responsive Breakpoint Proof at 1440, 1280, 1024, 768, and 390 for visual-heavy work.
- Visual Concept Gate artifact when visual-heavy work applies.
- Done report artifact before final handoff.
- Core loop proof when the product depends on upload, classification, generation, selection, or persistence.
- Persistence truth for user-generated data across route changes, refresh, and browser reopen.
- Dogfood target checklist when the app exists to test Miguel Design OS.
- Asset manifest for production image-led work.
- Target-copy report when Literal Target Copy Mode applies.

## Files To Read

- `evaluation/ui-scorecard.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/responsive-rules.md`
- `design-dna/clickable-vs-static-rules.md`

## Workflow

1. Capture or inspect `390`, `768`, and `1440`; inspect or capture `1024` and `1280` for dashboard or visual-heavy work when practical.
2. Prefer local capture with `node tools/visual-qa.mjs --url <url> --name <name>` when the UI can run.
3. Run `node tools/object-swap-check.mjs --url <url> --objects "<objects>" --name <name>` for roster, gallery, configurator, and selection-first products.
4. For visual-heavy work, verify the Visual Concept Gate had exactly 3 rendered concepts with preview routes and concept screenshots before implementation.
5. Check mobile first for horizontal scroll, clipping, sticky collision, and unreadable UI.
6. Check tablet for cramped desktop or broken mobile layout.
7. Check desktop for stretched mobile, empty expanses, or inflated scale.
8. Check scale calibration:
   - Is the UI inflated?
   - Are text sizes calibrated to references?
   - Are containers larger than their content?
   - Is the desktop viewport used well?
   - Are at least 3 meaningful content objects visible above the fold, unless the reference strongly justifies fewer?
   - Does the layout feel like mobile blown up?
   - Did the agent mistake premium for giant?
9. For Command Center / Dashboard Mode, check dashboard composition:
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
   - Are live/session/status indicators real and understandable instead of decorative?
10. Check contrast and text-on-image discipline:
   - Is every important text layer readable?
   - Is text over image protected?
   - Are small labels readable?
   - Does contrast survive 1440 / 768 / 390?
   - Are focal objects protected from overlays?
   - Is image treatment consistent?
   - Are gradients/scrims intentional, not emergency fixes?
   - Does any text rely on a lucky crop?
11. Check every viewport for overlap/collision, including nav, toolbars, chips, badges, forms, panels, and image overlays.
12. Check P0 layout integrity:
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
   - Does the UI survive 1440 / 1280 / 1024 / 768 / 390?
13. Manually verify the core loop when it is upload -> classify -> generate output, import -> analyze -> recommend, select -> configure -> output, or equivalent.
14. Verify persistence claims for user-generated data across route changes, refresh, and browser reopen.
15. For dogfood targets, map every target-app failure back to a Miguel Design OS rule/tool/prompt/checklist patch or explicit open gap.
16. Run `evaluation/ui-scorecard.md`.
17. Apply caps.
18. Validate `asset-manifest.local.json` when production image-led work is involved.
19. Validate `target-copy-report.local.json` when Literal Target Copy Mode applies.
20. Create or update `done-report.local.json`.
21. Run `node tools/design-os.mjs validate-done-report done-report.local.json`.
22. Patch blockers before completion when implementation is in scope.
23. Re-check changed screens.

## Stop Conditions

- Stop if a required viewport is missing and the UI can run.
- Stop if visual-heavy work asks for approval from text-only concepts or missing concept screenshots.
- Stop if horizontal scroll appears in the primary mobile flow.
- Stop if unintended overlap or unreadable UI appears.
- Stop if dashboard references produce same-weight card soup, terminal-ish dark panel spam, murky monochrome panels, text-and-metrics-only admin layout, decorative charts, weak chart system, image-starved surfaces, or no attraction zone.
- Stop if dashboard mode produces lifeless same-color panels with weak charts and no visual anchor.
- Stop if navigation is cryptic or responsive nav overlaps content.
- Stop if toolbar controls misalign or collide when wrapping.
- Stop if text-heavy containers kill scanability.
- Stop if buttons become oversized full-width bars without justification.
- Stop if any text escapes a container.
- Stop if any chart overflows its plot/card bounds.
- Stop if any core card becomes unreadable.
- Stop if labels collapse into meaningless fragments.
- Stop if layout only works at one viewport.
- Stop if fake live/session/status UI appears without real product meaning.
- Stop if palette feels robotic, generic, or template-generated.
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

## Output Contract

```md
Screenshots inspected:
Concept screenshots inspected:
390 result:
768 result:
1440 result:
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
Responsive collision checks:
Layout integrity contract:
Responsive breakpoint proof:
Palette direction:
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
