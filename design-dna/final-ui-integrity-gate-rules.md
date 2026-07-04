# Final UI Integrity Gate

No frontend/design task may be handed off until final UI integrity passes.

Build/lint is not visual proof.
Component splitting is not visual proof.
Reports are not visual proof.
Screenshots and DOM geometry are required.

## Hard Blockers

- clipped text
- cut words
- nav overflow
- button/CTA clipping
- card title/body clipping
- media over text
- container overlap over text
- fixed/sticky overlay covering content
- text hidden with overflow hidden
- accidental huge blank viewport areas
- unresolved user complaint

If a blocker appears in any required screenshot, final verdict is failed.

## No Overlap Without Permission

Visual overlap is allowed only when all are true:

- overlap is intentional
- overlap is documented
- overlapped object is decorative or protected
- no readable text is covered
- z-index/layers are defined
- screenshot proof shows readability

Otherwise container overlap is a blocker.

## No Hidden Text Fixes

Do not use overflow hidden, clip, max-height, fixed height, or masking to hide a text-fit failure.

If text is intentionally truncated:

- it must be non-critical
- it must have a title/aria/full-detail path
- it must be documented
- it must not be CTA/nav/card title text

## Text Wins Over Visual Objects

If text and media/shape/card/animation compete:

- text wins
- CTA wins
- navigation wins
- readable card content wins
- visual object moves, docks, resizes, or exits

## Final Handoff Rule

If final UI integrity is `failed` or `blocked`, final handoff must say so and cannot claim success. Fix the UI, rerun screenshots and DOM geometry validation, then rerun the gate.
## Final UI Integrity Gate v2

The final UI gate must test a matrix of viewport widths, scroll positions, and interactive states.

Fixed breakpoint checks are not enough.

Required viewport matrix:

- 390
- 430
- 640
- 768
- 900
- 1024
- 1180
- 1280
- 1366
- 1440
- 1536
- 1728
- 1920

Required scroll samples:

- 0
- 0.10
- 0.20
- 0.35
- 0.50
- 0.65
- 0.80
- 0.90
- 1.00

Required state samples where applicable:

- default
- nav active states
- selected card/detail panel open
- sticky/pinned active section
- compact nav state
- reduced motion state if practical

Hard rule: if a layout failure appears at any sampled width, scroll point, or state, final handoff is blocked.

Hard blockers:

- any clipped/cut critical text
- text hidden by overflow
- card/sticker/label covering critical text
- floating label/container drifting into another container
- media/image/video/SVG over text
- fixed/sticky overlay covering content
- nav label overflow
- compact nav abbreviation fallback
- CTA clipping
- card title/body clipping
- body horizontal overflow, unless it is intentional controlled horizontal scroll and documented
- accidental blank viewport area
- user's original complaint remains visible

Score caps:

- final gate v2 not run on visual frontend work: max score 4
- final gate v2 failed but handoff claimed success: max score 2
- layout failure appears at any sampled width: max score 3
- floating container overlaps another container: max score 3
- cut text remains after gate: max score 2
- final report lacks screenshot matrix evidence: max score 4
- final report does not include failed/passed viewport list: max score 4

Final report must include finalUiIntegrityVerdict, viewport matrix tested, scroll samples tested, blocker count, screenshot evidence directory, passed states, failed states, and whether any original user complaint remains visible.

# Final UI Integrity Gate v3

Final UI Integrity Gate v3 supersedes v2 for visual/frontend handoff.

The final UI gate must perform a viewport resize sweep, not only fixed breakpoint checks.

## Required Width Sweep

- minimum: 360
- maximum: 1920
- step: 40px or smaller if practical

## Required Height Samples

- 720
- 844
- 900
- 1080

At minimum, test:

- 360x720
- 390x844
- 430x844
- 640x900
- 768x900
- 900x900
- 1024x900
- 1180x900
- 1280x900
- 1366x900
- 1440x900
- 1536x900
- 1728x1080
- 1920x1080

## Required Scroll Samples

- 0
- 0.10
- 0.20
- 0.35
- 0.50
- 0.65
- 0.80
- 0.90
- 1.00

## Required State Samples

- default
- nav active states
- selected card/detail open
- compact nav state
- sticky/pinned stage
- reduced-motion if practical

## Hard Rule

If any blocker appears at any sampled width, height, scroll position, or state, final handoff is blocked.

## V3 Hard Blockers

- cut text
- viewport-edge clipping
- partially visible critical containers
- overlapping containers
- floating-object drift
- accidental huge blank space
- horizontal scroll showing unreadable partial content
- user complaint still visible

## Final Report Must Include

- viewport widths tested
- heights tested
- scroll samples tested
- passed states
- failed states
- blocker count
- screenshot evidence directory
- final handoff allowed true/false

## V3 Score Caps

- final gate v3 not run on visual frontend work: max score 4
- final gate v3 failed but handoff claimed success: max score 2
- fixed breakpoint-only evidence for final handoff: max score 4
- width sweep evidence missing: max score 4
- viewport-edge clipping remains: max score 2
- active card/panel partially unreadable: max score 3
- horizontal scroll shows partial critical content at rest: max score 3
- floating object drifts or overlaps after resize: max score 3
- blank scroll state remains: max score 4
- user complaint remains visible: max score 2
