---
name: design-start-image-exploration
description: Legacy paid-image direction exploration wrapper. Paid API image generation is disabled by default and requires Migi's exact written approval plus --paid-ok.
---

# Design Start Image Exploration

Use this Codex-compatible wrapper only for the exceptional paid-image direction path. The recommended default is the no-image direction gate:

- `docs/design/direction-options.md`
- `docs/design/direction-layout-maps.md`
- `docs/design/direction-risk-check.md`

Canonical Design OS skill:

```txt
skills/design-start-image-exploration/SKILL.md
```

Local script:

```bash
node .agents/skills/design-start-image-exploration/scripts/generate-design-directions.mjs \
  --project "Project Name" \
  --brief "Brief text" \
  --slug project-slug \
  --paid-ok \
  --approval "I approve paid API image generation for this run."
```

Paid generation fails closed unless both conditions are present:

- Migi explicitly wrote `I approve paid API image generation for this run.`
- the command includes `--paid-ok`

If either is missing, the script writes `blocked-report.md`, does not call the API, and exits nonzero even if `OPENAI_API_KEY` exists.

Paid result:

- `generated/moodboards/<slug>/01-safe-refined.png`
- `generated/moodboards/<slug>/02-artistic-expressive.png`
- `generated/moodboards/<slug>/03-unexpected-high-character.png`
- `generated/moodboards/<slug>/manifest.json`
- `generated/moodboards/<slug>/prompts.md`
- `docs/design/direction-options.md`

If image generation is blocked, use the no-image direction gate. Do not code until Migi selects a direction.
