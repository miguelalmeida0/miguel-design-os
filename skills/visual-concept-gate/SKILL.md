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
3. Name the obvious genre cliche the design must avoid.
4. Produce exactly 3 radically different rendered art-direction concept prototypes:
   - Safe expected direction.
   - More original/art-directed direction.
   - Wild but controlled direction.
5. For each concept include:
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
6. Save the artifact using `templates/visual-concepts.template.json`.
7. Validate it with `node tools/design-os.mjs validate-concepts visual-concepts.local.json` when the CLI is available.
8. Stop and show Migi the visuals.
9. After Migi approves one rendered direction, set `approvalStatus: "approved"` and `selectedConceptId`.
10. Check the gate with `node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json`.
11. After the gate passes, implement only the approved direction.

## Stop Conditions

- Stop before UI implementation if no concept has been approved.
- Stop if concepts are text-only.
- Stop if any concept is missing a preview route or screenshot paths.
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

## Safety/Scope Rules

- Do not code major UI before approval.
- Do not turn one rejected app direction into a universal style ban.
- Do not force every future app to be dark, cinematic, game-like, glassy, or playful.
- Do not copy a source project or inspiration reference literally.
