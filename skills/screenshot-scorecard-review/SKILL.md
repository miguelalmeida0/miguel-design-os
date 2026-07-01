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
- Selected design thesis when relevant.

## Files To Read

- `evaluation/ui-scorecard.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/responsive-rules.md`
- `design-dna/clickable-vs-static-rules.md`

## Workflow

1. Capture or inspect `390`, `768`, and `1440`.
2. Check mobile first for horizontal scroll, clipping, sticky collision, and unreadable UI.
3. Check tablet for cramped desktop or broken mobile layout.
4. Check desktop for stretched mobile, empty expanses, or inflated scale.
5. Check every viewport for overlap/collision.
6. Run `evaluation/ui-scorecard.md`.
7. Apply caps.
8. Patch blockers before completion when implementation is in scope.
9. Re-check changed screens.

## Stop Conditions

- Stop if a required viewport is missing and the UI can run.
- Stop if horizontal scroll appears in the primary mobile flow.
- Stop if unintended overlap or unreadable UI appears.
- Stop if scorecard blockers remain but the task claims completion.

## Output Contract

```md
Screenshots inspected:
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
- Unintended overlap/collision: max score 6.
- Mobile horizontal scroll: cap applies.
- Unreadable or clipped primary UI: prevents elite.
- Missing scorecard result: prevents elite.

## Safety/Scope Rules

- Do not claim "responsive" without viewport evidence.
- Do not rely on old Design OS captures as proof for the current UI.
- Do not add external screenshot dependencies inside this skill.
- If the UI cannot run, report the run command, error, and best alternate evidence.
