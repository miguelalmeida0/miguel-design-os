---
name: dashboard-graph-system
description: Design or review graph-rich dashboard systems with meaningful chart selection, dashboard attraction zones, chart bounds, data-shape rationale, accessibility fallbacks, palette/material discipline, and anti-decorative-chart enforcement. Use for dashboards, command centers, BI, analytics, monitoring, forecasts, heatmaps, funnels, KPIs, and operational data products.
---

# Dashboard Graph System

Use when a dashboard or command center needs charts, graph systems, KPIs, timelines, maps, heatmaps, forecasts, anomaly states, or comparison views.

## Files To Read

- `skills/data-visualization-selection/SKILL.md`
- `design-intelligence/chart-guidance.md`
- `design-intelligence/chart-recommendation-matrix.json`
- `design-dna/layout-recipes.md`
- `templates/chart-selection-report.template.md`

## Workflow

1. Identify dashboard attraction zone.
2. If visual direction is uncertain for a dashboard redesign, confirm `docs/design/direction-options.md` and `docs/design/selected-direction.md` exist before implementation.
   - Direction A should be Safe Refined.
   - Direction B should be Artistic Expressive.
   - Direction C should be Unexpected High-Character.
   - The three directions must differ in composition, palette, graph emphasis, media/object strategy, and motion/live energy.
3. Identify user decisions.
4. Select chart data shapes.
5. Choose one major chart or map only if it communicates core state.
6. Choose supporting charts only when they add distinct meaning.
7. Define accessibility fallback for every chart.
8. Define chart bounds and responsive adaptations.
9. Integrate chart color with design-system state and palette.
10. Reject decorative chart wallpaper.

## Output

For dashboard work, include in `docs/design/visual-spec.md`:

- graph system strategy
- direction options / selected direction when dashboard visual direction was not already approved
- major chart
- supporting charts
- microcharts
- data shape and decision for each
- accessibility fallback
- chart bounds strategy
- responsive chart behavior

## Stop Conditions

- chart type does not match data shape
- no chart rationale
- dashboard visual direction is uncertain but no direction gate occurred
- dashboard directions are minor variations of the same card grid, palette, or chart layout
- implementation starts before Migi selects a dashboard direction
- chart is decorative
- dashboard is graph-lite despite graph-rich references
- chart overflows its card
- chart relies on color alone
