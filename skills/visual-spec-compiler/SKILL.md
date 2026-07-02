---
name: visual-spec-compiler
description: Convert a product brief, visual references, active design dials, design-system rules, chart/color/style/landing intelligence, and Miguel Design OS constraints into a buildable visual specification before coding. Use for visual-heavy tasks, new frontend apps, redesigns, dashboards, landing pages, mobile flows, reference-locked builds, or any work where no visual spec should mean no implementation.
---

# Visual Spec Compiler

Use this before significant visual UI implementation.

## Files To Read

- `design-dna/design-generation-dials.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/brief-inference-rules.md`
- `design-dna/anti-ai-tell-preflight.md` for landing, portfolio, marketing, or redesign work
- `design-dna/motion-and-delight-rules.md` when motion or delight is involved
- `design-dna/landing-page-craft-rules.md` when landing pages are involved
- `design-dna/art-directed-palette-exploration.md` when artistic, cinematic, landing, portfolio, creative, editorial, or experimental mode is active
- `design-intelligence/color-guidance.md`
- `design-intelligence/chart-guidance.md` when charts/data are involved
- `design-intelligence/style-taxonomy.md` when style direction is open
- `design-intelligence/landing-pattern-guidance.md` when landing pages are involved
- `templates/visual-spec.template.md`

## Hard Rule

No visual spec = no implementation for visual-heavy tasks.

Literal Target Copy Mode is the exception; it uses a target-copy report and comparison report instead of a new art-direction spec.

## Workflow

1. Classify task mode.
2. Declare active design dials.
3. Verify `docs/design/direction-options.md` and `docs/design/selected-direction.md` exist when the Three-Direction Mockup Gate applies.
4. Select references or image-first source.
5. Choose visual mode and layout recipe.
6. Define visual thesis.
7. Define design-system token direction.
8. For expressive modes, include safe refined, artistic expressive, and unexpected high-character palette directions.
9. Define image, chart, motion, mobile, contrast, and responsive strategies.
10. Name forbidden drift and scorecard risks.
11. Write `docs/design/visual-spec.md`.

## Output Contract

Create `docs/design/visual-spec.md` with:

- task mode
- active dials
- Direction Gate Summary
- reference anchors
- visual thesis
- layout skeleton
- design-system tokens
- palette exploration when required
- image role strategy
- chart strategy
- mobile strategy
- interaction strategy
- responsive strategy
- QA/evidence plan
- forbidden drift

For visual-heavy landing, portfolio, marketing, and redesign work, also include:

```md
## Design Read
- page kind:
- audience:
- vibe:
- reference signals:
- selected mode/system:
- quiet constraints:

## Active Dials
- DESIGN_VARIANCE:
- MOTION_INTENSITY:
- VISUAL_DENSITY:
- ART_DIRECTION:
- IMAGE_USAGE_PRIORITY:
- IMPLEMENTATION_CLARITY:

## Direction Gate Summary
- directions proposed:
- selected direction:
- what was rejected:
- what was hybridized:
- why this direction won:

## Palette Exploration
- Palette Direction A: Safe Refined:
- Palette Direction B: Artistic Expressive:
- Palette Direction C: Unexpected High-Character:
- Selected Palette:
- OKLCH/APCA contrast notes:
- what AI-default palette it avoids:

## Anti-AI-Tell Plan
- likely AI defaults for this task:
- banned patterns:
- how the spec avoids them:

## Motion Strategy
- should motion exist?
- frequency profile:
- motion purpose:
- hero/signature moment:
- feedback layer:
- transition layer:
- reduced-motion behavior:

## Delight Strategy
- earned delight moments:
- personality register:
- what delight is avoided:

## Preflight Checklist
- top hard checks before implementation:
```

## Stop Conditions

Stop before coding when:

- active dials are missing
- Three-Direction Mockup Gate applies but `docs/design/direction-options.md` is missing
- Migi has not selected a direction before implementation
- `docs/design/selected-direction.md` is missing after selection or hybrid direction
- design-system direction is missing
- artistic/landing/portfolio/cinematic/experimental work lacks palette exploration
- references are vague when a folder was specified
- charts lack rationale
- mobile behavior is unspecified for mobile work
- visual-heavy implementation starts without `docs/design/visual-spec.md`
- landing/portfolio/redesign work lacks a design read
- motion is planned without purpose, frequency profile, or reduced-motion behavior
- anti-AI-tell preflight is skipped for landing/portfolio/marketing work
