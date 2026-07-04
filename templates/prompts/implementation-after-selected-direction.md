# Implementation After Selected Direction Prompt

Work in:
`{{PROJECT_PATH}}`

Protected folders:
`source-projects/`, `captures/`, `raw-chat-input/`

Preconditions:

- `docs/design/direction-options.md` exists.
- `docs/design/direction-layout-maps.md` exists.
- `docs/design/direction-risk-check.md` exists.
- Migi selected A, B, C, or a hybrid.
- `docs/design/selected-direction.md` exists or must be created before implementation.

When Migi chooses A, B, C, or a hybrid, proceed immediately to implementation. Do not stop after selected-direction.md. Do not ask for another confirmation unless Migi explicitly requested planning-only/spec-only/no-code.

Required reading:

- `AGENTS.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `docs/architecture/design-os-operating-model.md`
- `docs/routing/skill-routing-map.md`
- relevant benchmark from `evaluation/benchmarks/`
- relevant skills for the selected mode

Before coding:

1. Confirm selected direction.
2. Create or update `docs/design/selected-direction.md`.
3. Confirm the no-image direction gate artifacts exist and identify the selected layout map as the implementation north star.
4. Create `docs/design/visual-spec.md`.
5. Create `docs/design/design-system-tokens.md`.
6. Create `docs/design/color-and-contrast.md` or an equivalent palette doc with OKLCH/APCA reasoning.
7. If real imagery is required, create `docs/design/unsplash-search-plan.md` and `docs/design/unsplash-asset-manifest.md` before implementation.
8. Create `docs/design/navigation-strategy.md` when navigation is present; implement only the selected navigation system.
9. If advanced/cinematic/scroll/portfolio motion is requested, create `docs/design/motion-choreography-plan.md`, choose a tool stack, and define reduced-motion behavior before implementation.
10. Create `docs/qa/anti-ai-tell-preflight.md` for landing, portfolio, marketing, or redesign work.
11. Document navigation readability, identity chrome, decorative geometry, and line/divider decisions in the visual spec or related docs.
12. Document domain palette fit, no-placebo navigation behavior, chart/diagram data contracts, visualization tool routing, spatial canvas coordinate/layer/object/label/collision models, diagram-integrity detector plan, and desktop command-surface primary object strategy when applicable.
13. Define screenshot QA targets.

Hard bans:

- no unreadable navigation over images/giant type/changing backgrounds
- no forced app-name/logo/initials chrome
- no decorative circular/orbital/radar/HUD line overlays
- no fake sonar rings or generic orbit graphics
- no decorative hairline/separator ornaments
- no red divider lines as fake editorial detail
- no section-label-plus-line filler
- no cut-off mobile sheets or hidden modal actions
- no active/underline/progress bars overlapping labels
- no selectable chips/items with missing selected state
- no text-only bottom nav in practical mobile product flows unless justified
- no add-new cards styled like content cards
- no badges/counters overlapping nav labels/icons
- no random domain palettes chosen just because they look cool
- no placebo navigation where selected tabs/nav do not change visible product state
- no map/floor-plan/timeline/canvas label collisions
- no decorative/fake charts, arbitrary canvas object placement, missing data contracts, missing layer models, or missing data-viz hardening review
- no desktop command surface that buries the primary product object in card soup

Implementation:

1. visual shell
2. core local aha moment
3. visible interactions
4. mobile/product integrity when applicable: sheet fit, icon+label bottom nav, persistent selection, distinct add/create affordance, no control indicator overlap
5. responsive adaptation
6. polish pass

QA:

- build/lint when available
- screenshots at benchmark-required breakpoints
- motion sequence capture or blocker when motion is central
- specialist review
- text clarity review when copy-heavy product UI exists
- production hardening review before production-ready claims
- evidence-backed critique when Migi asks for critique or the UI is a dogfood/final state
- benchmark scoring
- done report

Final response:

- selected direction
- direction layout maps / risk check
- Unsplash search plan / asset manifest when applicable
- navigation strategy / selected navigation pattern
- motion-choreography plan / motion evidence when applicable
- files changed
- build/lint result
- local dev server URL if running
- interactions verified
- screenshots or blocker
- benchmark score
- scorecard caps
- evidence-backed critique / text clarity / production hardening status when relevant
- remaining weaknesses

## Required Layout Integrity Final Checks

Before final handoff, verify:

- no text clipping
- no words cut
- no nav label overflow
- no sticker/card covering headline words
- no accidental blank viewport area
- no floating label/card/sticker drift or overlap at intermediate widths
- no detail panel disconnected from clicked/selected trigger
- no mobile route/app navigation that disappears on scroll
- mobile route/app navigation uses persistent bottom nav or bottom-accessible controller by default
- final UI integrity v3 width sweep checked from 360 to 1920 at 40px steps or smaller when practical
- height matrix checked at 720, 844, 900, and 1080
- scroll samples checked at 0, 0.10, 0.20, 0.35, 0.50, 0.65, 0.80, 0.90, and 1.00 when scroll/sticky/pinned content exists

Run `skills/layout-integrity-review/SKILL.md` after screenshots exist. Screenshot contradiction beats agent self-report.

## Late Check FM Media Placement Guardrails

- Apply the hero-only media default: video belongs in the top stage unless a later role is explicit.
- Enforce media never over text: media cannot cover headline, body, CTA, nav, labels, captions, or card content.
- Enforce no container thinning to fit media: content cards keep readable minimum widths.
- Content wins over media: text, CTAs, nav, and card readability beat any media object or scroll gimmick.
- Persistent video overlay is a hard blocker unless a reserved media lane, protected-zone map, and screenshot proof exist.

## Compact Navigation Icon Fallback

- compact nav must use icon fallback or a real menu pattern
- no arbitrary two-letter nav abbreviations
- active compact nav item must be understandable
- accessible labels are required for icon-only or visually-shortened items
- small-screen screenshots are required at 768 and 390

## Anchored Detail Reveal

- detail reveal must be anchored to clicked item or use an explicit sheet/drawer/full-screen pattern with selected-item context
- use `data-detail-trigger`, `data-detail-panel`, `data-detail-for`, and `data-selected-item` where practical
- final handoff is blocked if the detail panel is spatially lost

## Persistent Mobile Bottom Navigation

- mobile app/route nav must be persistent bottom by default
- mobile nav must remain accessible after scroll
- bottom nav must respect safe area and preserve accessible full labels
- final handoff is blocked if mobile route nav disappears on scroll

## Final UI Integrity Gate

Before final handoff:

1. Run build/lint.
2. Capture screenshots/checks across the final UI integrity v3 width sweep, height matrix, and required scroll samples.
3. Run scroll-choreography-review if scroll-heavy.
4. Run layout-integrity-review.
5. Run final-ui-integrity-gate.
6. Run final scorecard.

Do not claim success if clipped text, viewport-edge clipping, partially visible active panels, horizontal scroll partial content, overlap, floating object drift, nav overflow, media/text collision, accidental blank space, fixed overlay collision, or the user's original complaint remains visible at any sampled width, height, scroll position, or state. If the final UI integrity gate is failed or blocked, fix the UI and rerun validation before responding.
