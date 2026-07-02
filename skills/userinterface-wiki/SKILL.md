---
name: userinterface-wiki
description: Use for broad UI/UX craft review when typography, visual design, UX laws, pseudo-elements, audio feedback, predictive prefetching, animation principles, exit animations, container animation, or interaction quality need routeable guidance.
---

# User Interface Wiki

This is a broad UI craft skill. It does not replace specialist skills.

## Routing

- Animation planning: use `skills/motion-craft-director/SKILL.md`, then this skill for broader context.
- Animation code review: use `skills/review-animations/SKILL.md` as source of truth.
- Palette/contrast: use `skills/oklch-contrast-palette/SKILL.md`.
- Visual art direction: use `skills/frontend-art-director-review/SKILL.md`.
- Dead/stiff interface polish: use `skills/make-interfaces-feel-better/SKILL.md`.

## Files To Read

- `design-intelligence/userinterface-wiki-rules.json`
- `design-intelligence/userinterface-wiki-guidance.md`
- `evaluation/ui-scorecard.md`

## Output Contract

```md
## UI Wiki Review
- categories used:
- strongest applicable rules:
- anti-patterns found:
- routed specialist skills:
- required fixes:
- score caps:
```

## Categories

- animation principles
- timing functions
- exit animations
- CSS pseudo-elements
- audio feedback
- sound synthesis
- morphing icons
- container animation
- laws of UX
- predictive prefetching
- typography
- visual design

## Review Questions

- Do pressable elements provide active feedback?
- Are hit targets comfortable for the platform?
- Does timing match frequency of use?
- Do exit animations preserve spatial/state continuity?
- Are pseudo-elements layered and semantic enough?
- Does audio have a visual equivalent and mute path?
- Is perceived performance improved without lying?
- Do typography choices support scanning, numbers, and hierarchy?
- Do visual grouping rules support proximity, similarity, and common region?

## Stop Conditions

- The UI has pressable surfaces with no feedback.
- High-frequency interactions are slowed by unnecessary animation.
- Audio feedback is added without mute or visual equivalent.
- Data/pricing/dashboard numbers lack tabular alignment.
- Pseudo-elements create inaccessible content or broken layering.
