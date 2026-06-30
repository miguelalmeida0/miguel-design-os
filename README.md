# Miguel Design OS

Miguel Design OS is a personal frontend/design memory system for future agents. It captures how Miguel's best apps think, not just how they look.

The goal is to help future builds feel specific, polished, useful, and alive without copying one source app literally or forcing one palette everywhere.

## Read Order For Future Agents

1. `AGENTS.md`
2. `project-index.md`
3. `manual-preferences/00_global_frontend_principles.md`
4. `design-dna/miguel-style-principles.md`
5. Relevant `design-dna/` rule files
6. Relevant `extracted/{project}/` reports
7. `case-studies/` only when useful as scoped feedback

## What Is In This Repo

`manual-preferences/` contains global frontend principles written directly as preference guidance.

`source-projects/` contains the five golden example projects:

- `agent-boss`: enterprise agent-control workspace
- `equity`: financial research and market terminal
- `ghostwritter`: AI writing and rewrite studio
- `ontime`: social planning app
- `portfolio`: editorial personal portfolio

`extracted/` contains per-project technical inventories and style reports.

`captures/` contains Playwright screenshots at mobile, tablet, and desktop widths where capture was possible.

`design-dna/` contains reusable principles, recipes, screen archetypes, responsive rules, copy rules, and generation rules.

`agent-workflows/` contains repeatable workflows for ingesting projects, generating apps, reviewing UI, and fixing UI until it reaches a high bar.

`evaluation/ui-scorecard.md` contains the 100-point scoring rubric.

## Capture Notes

Screenshots were created for all five projects:

- mobile: 390 px
- tablet: 768 px
- desktop: 1440 px

Run caveats:

- `equity` could not bind its local server in this sandbox, so captures were made through a Playwright static-file route against the built public files.
- `ontime` ran, but unauthenticated captures landed on the login gate. Its authenticated design references remain in the source project.
- `agent-boss`, `ghostwritter`, and `portfolio` ran with local dev servers and were captured directly.

## Core Rule

Extract principles. Do not clone artifacts.

The golden projects show how to reason about identity, hierarchy, components, responsiveness, copy, and interaction grammar. They are not a shared theme pack.
