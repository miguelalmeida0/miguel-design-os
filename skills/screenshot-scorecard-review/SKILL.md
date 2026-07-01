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

## Do Not Use When

- No UI surface exists.
- The task is documentation-only.
- The work is backend-only.

## Required Inputs

- Screenshots at `390`, `768`, and `1440`, or a runnable UI.
- Route or screen under review.
- Product type.
- Design Intent Record.
- Approved rendered concept when relevant.
- Visual Concept Gate artifact when visual-heavy work applies.

## Files To Read

- `evaluation/ui-scorecard.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/responsive-rules.md`
- `design-dna/clickable-vs-static-rules.md`

## Workflow

1. Capture or inspect `390`, `768`, and `1440`.
2. For visual-heavy work, verify the Visual Concept Gate had exactly 3 rendered concepts with preview routes and concept screenshots before implementation.
3. Check mobile first for horizontal scroll, clipping, sticky collision, and unreadable UI.
4. Check tablet for cramped desktop or broken mobile layout.
5. Check desktop for stretched mobile, empty expanses, or inflated scale.
6. Check every viewport for overlap/collision.
7. Run `evaluation/ui-scorecard.md`.
8. Apply caps.
9. Patch blockers before completion when implementation is in scope.
10. Re-check changed screens.

## Stop Conditions

- Stop if a required viewport is missing and the UI can run.
- Stop if visual-heavy work asks for approval from text-only concepts or missing concept screenshots.
- Stop if horizontal scroll appears in the primary mobile flow.
- Stop if unintended overlap or unreadable UI appears.
- Stop if scorecard blockers remain but the task claims completion.

## Output Contract

```md
Screenshots inspected:
Concept screenshots inspected:
390 result:
768 result:
1440 result:
Scorecard result:
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
- Unintended overlap/collision: max score 6.
- Mobile horizontal scroll: cap applies.
- Unreadable or clipped primary UI: prevents elite.
- Missing scorecard result: prevents elite.

## Safety/Scope Rules

- Do not claim "responsive" without viewport evidence.
- Do not rely on old Design OS captures as proof for the current UI.
- Do not add external screenshot dependencies inside this skill.
- If the UI cannot run, report the run command, error, and best alternate evidence.
