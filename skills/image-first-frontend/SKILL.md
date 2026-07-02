---
name: image-first-frontend
description: Build visual-heavy frontend work from image or section references first, with deep extraction of typography, spacing, component logic, colors, image roles, and anti-drift implementation. Use for image-to-code, screenshots, generated visual references, premium websites, landing pages, artistic UI, or any frontend where visual references are the design source of truth.
---

# Image-First Frontend

Use when visual references or generated images should drive implementation.

## Files To Read

- `skills/image-first-website-to-code/SKILL.md`
- `agent-workflows/image-first-frontend-workflow.md`
- `templates/image-first-website-analysis.template.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/art-directed-palette-exploration.md` for artistic/landing/portfolio/cinematic/experimental work
- `design-dna/landing-page-craft-rules.md` for landing/marketing/portfolio work
- `design-dna/anti-ai-tell-preflight.md` for landing/marketing/portfolio work

## Workflow

1. Select or generate visual references.
2. Prefer section-specific references over compressed boards.
3. For generated landing references, use one horizontal image per section.
4. Analyze text, type, spacing, buttons, colors, images, layout, and unclear details.
5. If no visual direction is approved, create `docs/design/direction-options.md` with 3 distinct directions and stop for Migi.
6. After selection, create `docs/design/selected-direction.md`.
7. Create design-system tokens from the references and selected direction.
8. For expressive modes, explore safe refined, artistic expressive, and unexpected high-character palettes before locking tokens.
9. For landing/portfolio/marketing, define section jobs, composition anchors, background modes, CTA variations, and anti-AI-tell plan.
10. Implement faithful visual shell first.
11. Add interactions only after shell is coherent.
12. Screenshot compare and score.

## Output

Create or update:

- `docs/design/image-first-website-analysis.md` for websites/landing pages
- `docs/design/visual-spec.md` for general visual-heavy work

## Stop Conditions

- no readable reference
- reference is too compressed
- direction gate applies but direction options or selected direction are missing
- expressive mode uses a safe AI-default palette with no exploration
- implementation starts from generic components
- image/text balance drifts
- fake micro-UI clutter appears
- landing references compress multiple sections into one unreadable board
- anti-AI-tell preflight is skipped for landing/portfolio/marketing work
- no screenshot proof
