# visual-concept-gate

## Name

visual-concept-gate

## Description

Pre-implementation gate for visual-heavy frontend work. It forces rendered visual art direction before components so the agent does not lock the product into a generic layout.

## Use When

- New app.
- Major screen.
- Major redesign.
- Visual-heavy interface.
- Inspiration-image driven work.
- Gallery, roster, character-select, product-discovery, or selection-first experience.
- Migi asks for a stronger visual direction.
- Visual Swarm v1 art-direction work.

## Do Not Use When

- Small bug fix.
- Security patch.
- Copy-only edit.
- Pure technical refactor.
- Tailwind migration where visual parity is the goal.
- Existing approved concept only needs implementation cleanup.

## Required Inputs

- Product type.
- Primary user.
- Primary object.
- Primary action.
- Existing UI state, if any.
- Inspiration or references, if any.
- Inspiration manifest for visual-heavy work when references are used.
- Reference folder mode, especially Command Center / Dashboard Mode when dashboard references are used.
- Reference-Locked Build Mode plan when a visual-library folder or screenshot set is the design basis: exact anchors, anchor roles, reference decomposition, and design transfer spec.
- Global UI craft plan for dashboard or visual-heavy concepts: navigation clarity, responsive nav, toolbar alignment, text density, button proportions, collision checks, and palette direction.
- Layout Integrity Contract and Responsive Breakpoint Proof plan for 1440, 1280, 1024, 768, and 390.
- Known rejected directions, if any.

## Files To Read

- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/new-app-generation-rules.md`
- `design-dna/anti-patterns.md`
- `design-dna/rejected-directions.md` when the product has prior rejection evidence
- `evaluation/ui-scorecard.md`

## Workflow

1. Stop before implementation.
2. Classify the task and record the Design Intent Record.
3. If inspiration is used, create or validate `inspiration-manifest.local.json`.
4. Name the obvious genre cliche the design must avoid.
   - For dashboard/command-center references, explicitly avoid generic admin template, same-weight card soup, text-and-metrics-only dashboard, murky monochrome / terminal-green palette, single-accent overuse, terminal-ish dark panel spam, decorative charts, chart-lite systems, image-starved surfaces, and no focal attraction zone.
   - Also avoid cryptic nav, misaligned toolbar controls, prose-heavy panels, clumsy full-width buttons, responsive collisions, fake live/session/status theater, and machine-generated palettes.
5. If Reference-Locked Build Mode is active, select 3-5 exact anchors, assign anchor roles, create `docs/design/reference-decomposition.md`, and create `docs/design/design-transfer-spec.md` before concepts are rendered.
6. Produce exactly 3 radically different rendered art-direction concept prototypes:
   - Safe expected direction.
   - More original/art-directed direction.
   - Wild but controlled direction.
7. For each concept include:
   - preview route
   - screenshot files at `1440 / 768 / 390`
   - short explanation
   - visual metaphor
   - composition
   - focal object
   - emotional hook
   - hidden information
   - absent elements
   - cliche avoidance
   - desire mechanism
   - responsive strategy for `1440 / 768 / 390`
   - layout integrity strategy for `1440 / 1280 / 1024 / 768 / 390`
   - what would make it fail
   - for dashboard concepts: attraction zone, panel mix, chart forms, palette strategy, image/object/media role, live/motion strategy, material range, and calm/busy rhythm
   - for dashboard or visual-heavy concepts: navigation strategy, toolbar alignment, text density, button proportions, responsive collision risks, and human palette direction
8. Save the artifact using `templates/visual-concepts.template.json`.
9. Use a project-local preview route, static HTML, or another lightweight local render when a concept needs a visual preview. The archived `deprecated/studio-preview/` experiment is not the default workflow.
10. Capture rendered concepts with available screenshot QA or document a blocked capture honestly.
11. Validate it with `node tools/design-os.mjs validate-concepts visual-concepts.local.json` or the captured run artifact when the CLI is available.
12. Stop and show Migi the visuals.
13. After Migi approves one rendered direction, set `approvalStatus: "approved"` and `selectedConceptId`.
14. Check the gate with `node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json`.
15. After the gate passes, implement only the approved direction.

## Stop Conditions

- Stop before UI implementation if no concept has been approved.
- Stop if Reference-Locked Build Mode is active but exact anchors, reference decomposition, or design transfer spec are missing.
- Stop if concepts are generated from folder vibe instead of selected anchor mechanics.
- Stop if concepts are text-only.
- Stop if dashboard concepts are only dark cards, metrics, and generic charts with no attraction zone, panel-role variation, palette strategy, graph system, or image/object/media strategy.
- Stop if dashboard concepts use lifeless same-color panels with weak charts and no visual anchor.
- Stop if dashboard concepts rely on cryptic navigation, fake status theater, misaligned toolbars, prose-heavy cards, clumsy full-width buttons, or robotic palette direction.
- Stop if concepts do not explain how cards, charts, labels, nav, badges, forms, and buttons preserve layout integrity across 1440 / 1280 / 1024 / 768 / 390.
- Stop if a concept depends on squeezing the desktop layout until cards, charts, labels, or nav become unreadable.
- Stop if any concept is missing a preview route or screenshot paths.
- Stop if `tools/capture-concepts.mjs` cannot produce screenshots and no blocker is documented.
- Stop if visual-heavy inspiration work has no inspiration manifest.
- Stop and ask for approval only after presenting the 3 rendered concepts.
- Stop polishing if Migi rejects the visual direction; return to concept generation.

## Output Contract

```md
Design Intent Record:
Obvious cliche to avoid:
Reference-Locked Build Mode:
Reference anchors:
Reference decomposition:
Design transfer spec:
Dashboard command-surface strategy when applicable:
Dashboard palette / graph / media strategy when applicable:
Navigation / toolbar / text density / button / collision / palette craft strategy when applicable:
Layout integrity contract:
Responsive breakpoint proof:
Concept artifact:
- concept count: 3
- preview routes:
- screenshots at 1440 / 768 / 390:
Concept 1 - Safe expected direction preview:
Concept 2 - More original/art-directed direction preview:
Concept 3 - Wild but controlled direction preview:
Recommended concept:
Approval needed before implementation: yes
```

## Scorecard Blockers

- Visual Concept Gate skipped for visual-heavy work: max score 6.
- Text-only concepts for visual-heavy work: max score 5.
- Migi asked to approve art direction without visual previews: max score 5.
- Concept screenshots missing: max score 6.
- Implementation started before visual concept approval: max score 6.
- All 3 concepts share basically the same layout: max score 6.
- Visual-library folder used but no reference anchors selected: max score 5.
- No reference decomposition before concept/build work: max score 5.
- No design transfer spec before concept/build work: max score 5.
- Concept copies mood but not anchor composition/mechanics: max score 6.
- Same rejected layout with new paint: max score 6.
- Obvious genre cliche without a fresh thesis: max score 7.
- Dashboard concept is generic admin/card soup: max score 6.
- Dashboard concept has no attraction zone: max score 6.
- Dashboard concept uses decorative charts instead of useful visualization: max score 6.
- Dashboard concept uses murky monochrome / terminal-green palette: max score 5.
- Dashboard concept has too few meaningful chart forms despite graph-rich references: max score 6.
- Dashboard concept is image-starved despite reference evidence: max score 6.
- Dashboard concept has cryptic nav, fake status theater, or machine-generated palette: max score 6.
- Dashboard concept has misaligned toolbar, prose-heavy panels, clumsy full-width buttons, or responsive collision risks with no plan: max score 6.
- Concept has no layout integrity strategy for cards/charts/nav/labels across breakpoints: max score 6.
- Concept relies on squeezed cards, clipped labels, or one-viewport responsiveness: max score 5.
- No project-specific visual identity: cap applies.
- No inspiration manifest for visual-heavy inspiration work: max score 7.

## Safety/Scope Rules

- Do not code major UI before approval.
- Do not turn one rejected app direction into a universal style ban.
- Do not force every future app to be dark, cinematic, game-like, glassy, or playful.
- Do not copy a source project or inspiration reference literally.
- Do not use inspiration screenshots as production assets.
- Do not build or revive a frontend Studio app just to satisfy this gate. A project-local static preview or screenshot-backed reference note is enough when it proves the visual direction.
