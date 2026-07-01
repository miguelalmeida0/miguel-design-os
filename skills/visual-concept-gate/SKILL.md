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
5. Produce exactly 3 radically different rendered art-direction concept prototypes:
   - Safe expected direction.
   - More original/art-directed direction.
   - Wild but controlled direction.
6. For each concept include:
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
   - what would make it fail
7. Save the artifact using `templates/visual-concepts.template.json`.
8. Use `studio-preview/` or a project-local preview route when a local renderer is needed.
9. Capture rendered concepts with `node tools/capture-concepts.mjs --url http://localhost:5174`.
10. Validate it with `node tools/design-os.mjs validate-concepts visual-concepts.local.json` or the captured run artifact when the CLI is available.
11. Stop and show Migi the visuals.
12. After Migi approves one rendered direction, set `approvalStatus: "approved"` and `selectedConceptId`.
13. Check the gate with `node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json`.
14. After the gate passes, implement only the approved direction.

## Stop Conditions

- Stop before UI implementation if no concept has been approved.
- Stop if concepts are text-only.
- Stop if any concept is missing a preview route or screenshot paths.
- Stop if `tools/capture-concepts.mjs` cannot produce screenshots and no blocker is documented.
- Stop if visual-heavy inspiration work has no inspiration manifest.
- Stop and ask for approval only after presenting the 3 rendered concepts.
- Stop polishing if Migi rejects the visual direction; return to concept generation.

## Output Contract

```md
Design Intent Record:
Obvious cliche to avoid:
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
- Same rejected layout with new paint: max score 6.
- Obvious genre cliche without a fresh thesis: max score 7.
- No project-specific visual identity: cap applies.
- No inspiration manifest for visual-heavy inspiration work: max score 7.

## Safety/Scope Rules

- Do not code major UI before approval.
- Do not turn one rejected app direction into a universal style ban.
- Do not force every future app to be dark, cinematic, game-like, glassy, or playful.
- Do not copy a source project or inspiration reference literally.
- Do not use inspiration screenshots as production assets.
- Use `studio-preview/` only as a local concept renderer, not as the final product app.
