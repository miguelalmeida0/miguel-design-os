---
name: review-animations
description: Review animation and motion code only. Use when motion implementation changed, Migi asks for animation review, UI motion feels off, or a frontend needs exact animation quality gates. Load STANDARDS.md for exact durations, easing, physicality, performance, gestures, stagger, and accessibility rules.
---

# Review Animations

Default to flagging. Approval is earned.

## Required File

Read `skills/review-animations/STANDARDS.md` before reviewing motion.

## Scope

Review only:

- transitions
- keyframes
- motion libraries
- gestures
- scroll animation
- hover/press feedback
- reduced-motion behavior
- performance implications

Do not redesign the whole UI unless motion cannot be evaluated without layout context.

## Required Findings Table

| Severity | File:Line | Issue | Fix | Standard |
| --- | --- | --- | --- | --- |

Use file/line references where possible.

## Verdict

End with one:

- `APPROVE`
- `BLOCK`
- `APPROVE WITH NOTES`

Block if:

- high-frequency actions animate
- UI uses ease-in
- elements animate from scale(0)
- `transition: all` is used in production UI
- motion lacks purpose
- reduced motion is missing
- animation causes jank or layout work
- delight blocks the task
- advanced motion was requested but `docs/design/motion-choreography-plan.md` is missing
- advanced motion was requested but only one animation layer exists
- every section uses the same fade-up or reveal pattern
- section-by-section motion map is missing
- no motion benchmark review or capture blocker exists when motion is central

## Advanced Motion Review

When reviewing advanced/cinematic/artistic/portfolio motion, compare the implementation against:

- `docs/design/motion-choreography-plan.md`
- `design-intelligence/motion-tool-stack-guidance.md`
- `evaluation/benchmarks/motion-cinematic.benchmark.md`

Approval requires named techniques, at least page/section, image/media, typography, navigation/menu, and micro-feedback layers where the plan calls for them, plus reduced-motion behavior.
