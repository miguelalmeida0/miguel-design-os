# visual-concept-gate

## Name

visual-concept-gate

## Description

Pre-implementation gate for visual-heavy frontend work. It forces art direction before components so the agent does not lock the product into a generic layout.

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
4. Produce 3 radically different art-direction concepts:
   - Safe expected direction.
   - More original/art-directed direction.
   - Wild but controlled direction.
5. For each concept include:
   - visual metaphor
   - composition
   - focal object
   - emotional hook
   - what is hidden
   - what is absent
   - cliche avoidance
   - desire mechanism
   - `1440 / 768 / 390` strategy
   - what would make it fail
6. Wait for Migi approval.
7. After approval, implement only the approved direction.

## Stop Conditions

- Stop before UI implementation if no concept has been approved.
- Stop and ask for approval after presenting the 3 concepts.
- Stop polishing if Migi rejects the visual direction; return to concept generation.

## Output Contract

```md
Design Intent Record:
Obvious cliche to avoid:
Concept 1 - Safe expected direction:
Concept 2 - More original/art-directed direction:
Concept 3 - Wild but controlled direction:
Recommendation:
Approval needed before implementation: yes
```

## Scorecard Blockers

- Visual Concept Gate skipped for visual-heavy work: max score 6.
- Same rejected layout with new paint: max score 6.
- Obvious genre cliche without a fresh thesis: max score 7.
- No project-specific visual identity: cap applies.

## Safety/Scope Rules

- Do not code major UI before approval.
- Do not turn one rejected app direction into a universal style ban.
- Do not force every future app to be dark, cinematic, game-like, glassy, or playful.
- Do not copy a source project or inspiration reference literally.
