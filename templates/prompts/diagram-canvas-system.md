# Diagram Canvas System Prompt

Work in:
`{{PROJECT_PATH}}`

Target diagram/canvas/map/editor:
`{{TARGET}}`

Primary product object:
`{{PRIMARY_PRODUCT_OBJECT}}`

Use:

- `skills/diagram-canvas-system/SKILL.md`
- `design-intelligence/visualization-tool-routing.md`
- `templates/checklists/visualization-qa-checklist.md`

Produce:

- primary product object definition
- coordinate system
- canvas bounds
- layer model
- object model
- label model
- collision strategy
- selection/inspector model
- zoom/pan model if needed
- responsive fallback
- hardening test cases

If a runnable UI exists, use `tools/diagram-integrity-check.mjs` where practical, or document why it is blocked. Block arbitrary absolute-positioned objects and label collisions.
