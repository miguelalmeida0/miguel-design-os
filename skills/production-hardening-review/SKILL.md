---
name: production-hardening-review
description: Post-implementation review that hardens product UIs against long text, missing data, errors, loading, slow networks, i18n, accessibility, large datasets, concurrency, and responsive stress.
---

# Production Hardening Review

Use after implementation and before calling a product UI production-ready. It is especially relevant for apps, dashboards, forms, editors, tables, maps, settings, modals, and mobile flows.

Do not use during Fast Direction Gate, early concept selection, or pure visual mood exploration.

## Hardening Dimensions

1. Text overflow and wrapping: long names, empty strings, emoji, accents, CJK, RTL, German expansion, truncation, line clamp, `min-width: 0`.
2. Empty states: first run, no items, no search results, no permissions, no saved data, clear next action.
3. Error states: offline, timeout, 400/401/403/404/429/500, validation, permission, partial failure, retry path.
4. Loading states: initial load, refresh, pagination, long-running actions, skeleton/progress, no layout jump.
5. Internationalization: German +30%, RTL, CJK, dates/times, numbers/currencies, pluralization.
6. Large datasets: many items/options, pagination, virtualization, search/filter.
7. Concurrent operations: double submit, pending disabled states, optimistic update rollback, refresh mid-flow.
8. Accessibility resilience: keyboard, visible focus, ARIA labels, semantic HTML, non-color status cues, reduced motion, high contrast, 200% zoom.
9. Responsive resilience: 1440, 1280, 1024, 768, 390; no overflow, clipping, modal cut-off, squeezed controls.
10. Browser/performance resilience: slow network, image loading, cleanup timers/listeners, abort requests, debounced handlers.

## Hard Rules

- Designs that only work with perfect data are not production-ready.
- Fixed-width text containers are suspicious.
- Flex/grid children that contain text need `min-width: 0`.
- Every async state needs loading, success, error, and retry behavior.
- Every empty state needs context and next action.
- Destructive/concurrent actions need protection.
- Product UI must survive long text and translation expansion.
- Icon-only controls need accessible labels.
- Modals/sheets must survive small viewport and long content.

## Required Output

```md
## Production Hardening Review

### Production-Ready Verdict

### Hardening Audit
| Area | Edge Case | Current Risk | Required Fix | Severity |
|---|---|---|---|---|

### Edge-Case Test Matrix
| Test | Example Input/Scenario | Expected UI Behavior | Pass/Fail |
|---|---|---|---|

### CSS/Layout Resilience Checklist
### Empty/Loading/Error Checklist
### I18n Checklist
### Accessibility Checklist
### Concrete Fixes
```

## Scorecard Caps

- text escapes container: max hardening score 4
- long translation breaks layout: max hardening score 5
- no empty state for primary list: max hardening score 6
- no error recovery for async action: max hardening score 5
- double-submit possible on destructive action: max hardening score 5
- modal clips content on small viewport: max hardening score 4
- icon-only controls lack accessible labels: max hardening score 5
- color-only status indicators: max hardening score 5
- large dataset has no pagination/search/virtualization plan: max hardening score 6
- no reduced-motion support for animated interface: max hardening score 6

## Visualization Hardening Escalation

When charts, diagrams, maps, timelines, floor plans, pattern canvases, or spatial product objects are present, also route `skills/data-viz-hardening-review/SKILL.md`.

Check:

- long labels, German expansion, CJK, RTL, and emoji labels
- missing, zero, huge, negative, and null values
- many series, many points, or many objects
- no-data, loading, and API-error states
- legend wrapping/collapse
- tooltip viewport containment
- units and abbreviation explanations
- color-independent encoding
- 1440 / 1280 / 1024 / 768 / 390 and 200% zoom
