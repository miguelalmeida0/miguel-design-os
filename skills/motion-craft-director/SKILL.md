---
name: motion-craft-director
description: Plan and evaluate motion as part of product experience. Use when defining motion strategy, product transitions, brand motion, hover/press feedback, signature animation moments, reduced-motion behavior, or when animation risks becoming fade-and-rise noise.
---

# Motion Craft Director

Motion communicates state, feedback, hierarchy, and continuity.

## Rule

One signature motion moment is better than scattered motion everywhere.

## Motion Plan

Create:

```md
## Motion Strategy
- should motion exist?
- frequency profile:
- motion purpose:
- hero/signature moment:
- feedback layer:
- transition layer:
- delight layer:
- reduced-motion behavior:
- performance budget:
```

## Timing Defaults

- product transitions: 150-250ms
- button feedback: 100-160ms
- popovers/tooltips: 125-200ms
- modals/drawers: 200-500ms
- brand motion can be longer when it does not block tasks

## Avoid

- fade-and-rise everywhere
- animation with no purpose
- ease-in UI motion
- scale(0) entrances
- `transition: all`
- motion on high-frequency actions
- hover motion on touch devices
- animation fatigue

## Required

- reduced-motion behavior
- transform/opacity default
- explicit purpose per animation
- performance budget
- consistency with product mood

## Advanced Motion Escalation

If the task asks for advanced animations, cinematic motion, artistic motion, award-winning motion, Awwwards/Godly/Recent-level motion, scroll animations, appearing while scrolling, or portfolio motion, route to `skills/advanced-motion-choreography/SKILL.md` before implementation.

Advanced motion requires `docs/design/motion-choreography-plan.md`, not only this lightweight motion strategy.

Block final handoff when:

- advanced motion was requested but only one animation exists
- page/section choreography is missing
- image/media choreography is missing despite reference need
- typography or navigation/menu motion is missing despite reference need
- no reduced-motion fallback exists
- no motion benchmark review or motion evidence exists when motion is central
