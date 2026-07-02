---
name: make-interfaces-feel-better
description: Use after visual spec, design-system tokens, and main layout exist when the UI is functionally present but feels stiff, dead, generic, unresponsive, or under-polished. Focuses on invisible details, feedback, perceived performance, states, spacing, and micro-polish before screenshot review.
---

# Make Interfaces Feel Better

This is a polish pass, not an art-direction replacement.

## Use After

- `docs/design/visual-spec.md` exists for visual-heavy work
- design-system tokens exist
- the main layout/shell exists
- visible interactions mostly work

## Use Before

- final screenshot-scorecard review
- done report validation
- claiming visual quality

## Files To Read

- `design-dna/interface-feel-rules.md`
- `design-intelligence/interface-feel-checklist.json`
- `design-dna/design-system-first-rules.md`
- `evaluation/ui-scorecard.md`

## Output Contract

```md
## Interface Feel Pass
- dead/stiff surfaces found:
- feedback improvements:
- perceived performance improvements:
- typography/spacing improvements:
- empty/loading/error states:
- focus/active states:
- jank risks:
- fixes applied:
- remaining manual checks:
```

## Checks

- Pressable controls have hover, focus, active, disabled, and loading states.
- Focus rings are visible and not ugly afterthoughts.
- Empty, loading, and error states are specific to the product.
- Spacing uses a consistent scale.
- Numeric/data text scans cleanly.
- State changes acknowledge the user quickly.
- Skeletons/progress states are truthful.
- Surfaces do not feel like dead rectangles.
- Motion, if present, is purposeful and reduced-motion aware.
- The UI has a few crafted details without becoming noisy.

## Stop Conditions

- Functionally working UI still feels dead, stiff, or generic.
- Visible controls have no active feedback.
- Loading/empty/error states are missing or generic.
- Spacing is arbitrary.
- The polish pass tries to hide a broken core loop.
