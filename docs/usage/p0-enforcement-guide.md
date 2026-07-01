# P0 Enforcement Guide

Miguel Design OS P0 turns the design process into local artifacts that can be checked before implementation.

No paid tools, API calls, model keys, hosted builders, cloud deployment, or external services are required.

## Files Added By P0

- `schemas/design-brief.schema.json`
- `schemas/visual-concepts.schema.json`
- `schemas/screenshot-report.schema.json`
- `schemas/ui-scorecard.schema.json`
- `schemas/skill-registry.schema.json`
- `templates/design-brief.template.json`
- `templates/visual-concepts.template.json`
- `templates/screenshot-report.template.json`
- `templates/ui-scorecard.template.json`
- `skills/skill-registry.json`
- `tools/design-os.mjs`

## Visual-Heavy Workflow

1. Create design brief:

```sh
node tools/design-os.mjs new-brief
```

2. Validate design brief:

```sh
node tools/design-os.mjs validate-brief design-brief.local.json
```

3. Route skills:

```sh
node tools/design-os.mjs route --task "Build a visual-heavy robot character selection app from inspiration images"
```

4. Produce 3 concepts from `templates/visual-concepts.template.json`.

5. Validate concepts:

```sh
node tools/design-os.mjs validate-concepts visual-concepts.local.json
```

6. Check the visual gate:

```sh
node tools/design-os.mjs check-visual-gate design-brief.local.json visual-concepts.local.json
```

7. Wait for Migi approval before implementation.

8. Implement only the approved concept.

9. Capture screenshots at `390 / 768 / 1440`.

10. Create a screenshot report from `templates/screenshot-report.template.json`.

11. Validate screenshot report:

```sh
node tools/design-os.mjs validate-screenshot-report screenshot-report.local.json
```

12. Score UI, apply caps, and patch blockers.

## What The CLI Enforces

- Required design brief fields exist.
- Visual-heavy briefs have `isVisualHeavy: true`.
- Visual-heavy briefs include inspiration sources or visual references.
- Visual-heavy briefs include target screens.
- Visual concepts contain exactly 3 concepts.
- Every concept includes metaphor, composition, focal object, emotional hook, hidden/absent information, cliche avoidance, desire mechanism, responsive strategies, and failure mode.
- Screenshot reports include `390 / 768 / 1440` viewport checks.
- Visual gate fails when visual-heavy work lacks a pending or approved 3-concept artifact.

## What Remains Manual

- Migi approval.
- Whether concepts are genuinely strong and different.
- Whether screenshots emotionally match the approved direction.
- Whether the UI feels elite after blockers are fixed.
- Actual screenshot capture unless the project has local browser tooling available.

## Local-Only Boundary

The P0 CLI reads and writes local JSON files. It does not install packages, call APIs, use paid tools, or contact external services.
