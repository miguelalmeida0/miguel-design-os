# Design Start Image Exploration Wrapper

This wrapper exists so Codex can run the exceptional paid-image direction script from a copied `tooling/tooling/agents/catalog/runtime/skills` folder while the canonical instructions remain in `skills/design-start-image-exploration/SKILL.md`.

Paid image generation is disabled by default. The normal Design OS direction gate is no-image.

Run:

```bash
node tooling/tooling/agents/catalog/runtime/skills/design-start-image-exploration/scripts/generate-design-directions.mjs \
  --project "Project" \
  --brief "Brief" \
  --slug project \
  --paid-ok \
  --approval "I approve paid API image generation for this run."
```

Requires Migi's exact written approval, `--paid-ok`, `OPENAI_API_KEY`, and an available OpenAI SDK. `DESIGN_OS_IMAGE_MODEL` may override the default image model.
