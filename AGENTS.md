# Agent Instructions

This repo is a design memory system. Before building, reviewing, or changing a frontend, read the guidance and use it as taste infrastructure.

## Required Read Order

1. `project-index.md`
2. `manual-preferences/00_global_frontend_principles.md`
3. `design-dna/miguel-style-principles.md`
4. Task-relevant files in `design-dna/`
5. Task-relevant reports in `extracted/`

Read `case-studies/in-the-loop-feedback/` only as scoped feedback from one app. Do not treat that case study as global truth.

## Source Of Truth

Manual preferences are global.

The five source projects are golden examples:

- Agent Boss
- Equity
- Ghostwritter
- Ontime
- Portfolio

Their repeated patterns can become principles. Their local palettes, copy tone, layouts, and product mechanics should not be copied blindly.

## Build Rules

- Give every app its own identity.
- Name the primary object before designing the screen.
- Make one primary action obvious per zone.
- Make clickable and passive elements visually distinct.
- Avoid generic dashboard energy unless the product truly needs a dashboard.
- Avoid container soup, CTA soup, and chip soup.
- Use semantic tokens instead of hard-coding a favorite palette.
- Build the actual app or tool as the first screen unless a landing page is explicitly requested.
- Match copy tone to the domain.
- Design responsive layouts intentionally for mobile, tablet, and desktop.

## Review And Verification

When an app can run, capture screenshots at:

- 390 px
- 768 px
- 1440 px

Inspect screenshots before claiming the UI is finished. Check for clipping, overlap, weak hierarchy, stretched desktop layouts, and unclear controls.

Use `evaluation/ui-scorecard.md` for reviews and fix loops.

## Workflow Files

Use:

- `agent-workflows/ingest-new-project.md` when adding a source project
- `agent-workflows/generate-new-app.md` when building a new app
- `agent-workflows/review-ui-like-miguel.md` when reviewing UI
- `agent-workflows/fix-ui-until-elite.md` when iterating quality upward

## Non-Negotiables

- Do not copy one app literally.
- Do not force one color palette.
- Do not globalize the case study.
- Do not ship passive elements that look clickable.
- Do not invent data, auth state, or proof.
- Do not call a UI responsive without screenshot evidence when running is possible.
