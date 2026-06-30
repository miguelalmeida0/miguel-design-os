# Equity Style Report

## Product Personality

Equity is a serious research terminal. It should feel like a researcher's command center, not a trading game and not a SaaS marketing dashboard. The useful emotion is confidence: dense data, explicit provenance, stable routes, and no fake urgency.

## Visual System

- Current dominant layer: dark terminal canvas with lime/green command emphasis
- Earlier institutional layer: near-white/soft cream canvas, graphite text, restrained gold
- Typography: Geist/Inter plus JetBrains Mono for metrics and labels
- Surface strategy: low-contrast panels and tables rather than ornamental cards
- Color meaning: green/red for market direction, warning/snapshot states explicitly labeled

## Hierarchy And Composition

The board is the center. The sidebar and command bar are tools, not decoration. The first viewport leads with the route title, compact tape, KPI strip, and the actual stock board. Data rows dominate; secondary modules are below.

Reusable principle: for a research product, the core object should be the data surface itself. Do not hide the table behind a decorative hero.

## Interaction Grammar

- Route navigation is explicit and persistent
- Search has a scoped command surface
- Row interactions are direct and compact
- Status pills are passive unless they behave as controls
- Add/filter controls are visibly buttons, not metadata chips
- External research actions are small and attached to rows/detail context

## Responsive Behavior

The responsive contract is unusually strong:

- Repeated rows define collapse paths
- Metrics move by priority rather than overlap
- Horizontal scrolling is reserved for true tables
- Mobile uses menu panels and reorganized row areas
- Reusable modules are expected to use `minmax(0, 1fr)`, `min-width: 0`, and container-aware behavior

## Reusable Lessons

- Use tables when the product is actually tabular
- Make stale, partial, live, delayed, and fallback states visible
- Keep filters compact and task-oriented
- Avoid retail-trading visuals unless the app is actually for trading
- Build same-origin provider boundaries; do not let browser UI know scraping details
- Use route-stable workspace tabs for serious tools

## Do Not Globalize

Do not force the dark terminal palette or financial data density into every app. The reusable lesson is data truth, compact workspace chrome, and dense-but-calm hierarchy.

