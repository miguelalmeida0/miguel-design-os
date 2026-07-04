# Final UI Integrity Report

## Summary

- URL:
- Created:
- Gate version: v3
- Width sweep tested:
- Height matrix tested:
- Legacy viewports tested:
- Scroll samples tested:
- Interaction states tested:
- Blocker count:
- Screenshot evidence directory:
- Failed viewport states:
- Passed viewport states:
- Final handoff allowed: yes / no
- Verdict: passed / partial / failed / blocked

## Findings

| Check | Evidence | Result | Severity | Required Fix |
|---|---|---|---|---|
| clipped text |  |  |  |  |
| text overflow |  |  |  |  |
| nav overflow |  |  |  |  |
| card/container overlap |  |  |  |  |
| floating object drift/overlap |  |  |  |  |
| viewport-edge clipping |  |  |  |  |
| horizontal scroll partial content |  |  |  |  |
| blank scroll state |  |  |  |  |
| fixed/sticky overlay covering content |  |  |  |  |
| media/image/video over text |  |  |  |  |
| accidental huge blank viewport |  |  |  |  |
| body horizontal overflow |  |  |  |  |
| viewport clipping |  |  |  |  |
| unreadable or hidden content |  |  |  |  |
| scroll-state collision |  |  |  |  |
| mobile/compact nav clarity |  |  |  |  |
| mobile route nav disappears on scroll |  |  |  |  |
| mobile bottom nav safe-area/accessibility |  |  |  |  |
| top-only mobile route nav |  |  |  |  |
| CTA/button label fit |  |  |  |  |
| detail panel fit |  |  |  |  |
| detail reveal disconnected from trigger |  |  |  |  |
| selected detail missing panel |  |  |  |  |
| card title/body fit |  |  |  |  |

## Gate Rule

Final handoff is forbidden unless verdict is `passed`, blocker count is `0`, `failedViewportStates` is empty, width sweep and height matrix evidence exist, and `finalHandoffAllowed` is `true`. If verdict is `failed` or `blocked`, fix and rerun validation. Do not report a failed or blocked gate as passed.

Detail reveals must be anchored to clicked/selected triggers or use explicit focus/scroll/sheet context. Mobile route/app navigation must remain bottom-accessible after scroll. Either failure blocks handoff.
