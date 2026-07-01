# Agent Instructions

Miguel Design OS is a simple design memory and frontend-agent instruction system. It is not a product app and does not require a frontend Studio UI.

## Start Here

For any frontend/design task:

1. Read `design-dna/00_COMPACT_AGENT_CONTEXT.md`.
2. Inspect `visual-library/README.md`.
3. Check `visual-library/approved/` for relevant references.
4. Check `visual-library/rejected/` for relevant anti-patterns.
5. Use `agent-workflows/simple-visual-reference-workflow.md` when visual references matter.
6. Use routed skills only when relevant; do not load the whole repo.
7. Run `node tools/design-os.mjs route --task "<task>"` when the CLI is useful.
8. Run `evaluation/ui-scorecard.md` before finishing significant frontend work.

## Core Rules

- Never build a generic SaaS dashboard unless Migi explicitly asks for one.
- Never claim visual quality without screenshot evidence when the UI can run.
- Screenshots are design evidence, not production assets.
- If Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, use Literal Target Copy Mode.
- If Migi says a reference is inspiration, extract principles instead of cloning it exactly.
- If Migi rejects a reference, treat it as an anti-pattern and do not preserve it with new paint.
- Do not build or improve a frontend Studio app unless Migi explicitly reactivates that direction.

## Skill Routing

Use the smallest relevant set.

- Visual-heavy new app, redesign, gallery, roster, character-select, product-discovery, or selection-first work: `skills/visual-concept-gate/SKILL.md`.
- Screenshot, mockup, Lovable prototype, Pinterest image, or strong visual reference: `skills/visual-target-reconstruction/SKILL.md`.
- Selection-first, gallery, roster, marketplace, card deck, character selection, or object browsing: `skills/selection-first-products/SKILL.md`.
- Existing UI review: `skills/anti-ai-slop-review/SKILL.md`.
- Runnable UI or screenshots: `skills/screenshot-scorecard-review/SKILL.md`.
- Elite redesign critique: `skills/frontend-art-director-review/SKILL.md`.
- Tailwind/global CSS migration: `skills/tailwind-migration-zero-regression/SKILL.md`.
- Auth, onboarding/login naming, mock data, production states, persistence, or truthful claims: `skills/truthful-state-product-naming/SKILL.md`.

## Protected Folders

- Do not modify `source-projects/` unless explicitly asked.
- Do not delete or modify `captures/` unless explicitly asked.
- Do not modify `raw-chat-input/` unless explicitly asked.

## Required Handoff

```md
Skills used:
Visual references checked:
Approved/rejected principles used:
Files changed:
Screenshots:
Scorecard result:
Done report:
Remaining weaknesses:
```
