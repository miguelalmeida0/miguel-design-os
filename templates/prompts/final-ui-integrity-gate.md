# Final UI Integrity Gate Prompt

Use this before final handoff for any frontend/design task.

## Inputs

- Local URL:
- Width sweep: 360:1920:40
- Heights: 720, 844, 900, 1080
- Scroll samples: 0, 0.10, 0.20, 0.35, 0.50, 0.65, 0.80, 0.90, 1.00
- Interaction states: default, nav active states, selected/open detail panel, sticky/pinned active section, compact nav, reduced motion when practical
- Screenshot paths:
- User's original complaint:
- Changed files:
- Build/lint result:

## Required Command

```bash
node tools/final-ui-integrity-check.mjs --url <local-url> --out docs/qa/final-ui-integrity/ --width-sweep 360:1920:40 --heights 720,844,900,1080 --scroll-samples 0,0.1,0.2,0.35,0.5,0.65,0.8,0.9,1
```

## Review

Inspect screenshots and report table:

| Check | Evidence | Result | Severity | Required Fix |
|---|---|---|---|---|
| clipped text |  |  |  |  |
| text overflow |  |  |  |  |
| nav overflow |  |  |  |  |
| container overlap |  |  |  |  |
| floating object drift/overlap |  |  |  |  |
| viewport-edge clipping |  |  |  |  |
| horizontal scroll partial content |  |  |  |  |
| blank scroll state |  |  |  |  |
| fixed/sticky overlay collision |  |  |  |  |
| media over text |  |  |  |  |
| huge blank viewport |  |  |  |  |
| horizontal overflow |  |  |  |  |
| compact nav clarity |  |  |  |  |
| detail reveal disconnected from trigger |  |  |  |  |
| mobile route nav disappears on scroll |  |  |  |  |
| mobile bottom nav safe-area/accessibility |  |  |  |  |

## Rule

If any blocker appears at any sampled width, height, scroll point, or state, final handoff is blocked. Fix and rerun.

## Required Done-Report Fields

- `finalUiIntegrityGateVersion: "v3"`
- `widthSweepTested`
- `heightMatrixTested`
- `viewportMatrixTested`
- `scrollSamplesTested`
- `interactionStatesTested`
- `finalUiIntegrityBlockerCount`
- `finalUiIntegrityScreenshotDir`
- `failedViewportStates`
- `passedViewportStates`
- `floatingOverlapRemaining`
- `viewportEdgeClippingRemaining`
- `floatingObjectDriftRemaining`
- `horizontalScrollPartialContentRemaining`
- `blankScrollStateRemaining`
- `textClipRemaining`
- `mediaTextCollisionRemaining`
- `navOverflowRemaining`
- `fixedOverlayCollisionRemaining`
- `finalHandoffAllowed`

## Anchored Detail Reveal And Mobile Bottom Nav

Final handoff is blocked if any selected detail panel is spatially lost from its trigger, lacks `data-detail-for`, opens below the fold without focus/scroll context, or uses an unconnected default modal where a designed reveal was required.

Final handoff is blocked if mobile route/app navigation appears only at the top, disappears after scroll, lacks a persistent bottom/bottom-accessible controller, lacks safe-area handling, or lacks accessible full labels.
