# Final UI Integrity Checklist

Run before final handoff for every frontend/design task.

## Evidence

- Build/lint completed.
- Screenshots captured.
- Scroll states captured at 0, 0.10, 0.20, 0.35, 0.50, 0.65, 0.80, 0.90, 1.00 when scroll/media-heavy.
- Width sweep checked: 360 through 1920 at 40px steps or smaller when practical.
- Height samples checked: 720, 844, 900, 1080.
- Minimum viewport states checked: 360x720, 390x844, 430x844, 640x900, 768x900, 900x900, 1024x900, 1180x900, 1280x900, 1366x900, 1440x900, 1536x900, 1728x1080, 1920x1080.
- Interaction states checked where applicable: default, nav active states, selected/open detail panel, sticky/pinned active section, compact nav, reduced motion.
- Passed and failed sampled viewport states are listed.
- Screenshot evidence directory is present.

## Blocker Checks

- No clipped critical text.
- No cut words.
- No nav label overflow.
- No CTA/button label clipping.
- No card title/body clipping.
- No media/image/video over readable text.
- No container covering important text.
- No floating label, sticker, card, badge, prop, or container drifting into another container.
- No viewport-edge clipping of critical content.
- No active card/panel partially unreadable.
- No horizontal scroll showing partial critical content at rest.
- No blank scroll state without intentional marker.
- No fixed/sticky overlay covering content.
- No uncontrolled body horizontal overflow.
- No accidental huge blank viewport areas.
- No unresolved user complaint visible in screenshots.

## Verdict

- `passed`
- `partial`
- `failed`
- `blocked`

Only `passed` with zero blockers, no failed viewport states, and `finalHandoffAllowed: true` can support a success claim.
