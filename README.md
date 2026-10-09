# Miguel Design OS

A personal design engine that prepares project-specific reference evidence and remembers Miguel's explicit corrections for AI-assisted implementation.

The goal is a working interface in Miguel's taste, with less repeated review. References, scoped memory and specialist engineering guidance support the coding host; this is not a trained model or a frontend Studio.

## Start here

Agents read [AGENTS.md](AGENTS.md). The current default is brief → relevant references and corrections → pixel inspection → implementation → browser verification → Miguel's feedback.

One grounded direction is sufficient when the evidence supports it. Different project contexts retain different visual approaches.

## Commands

Node 22 or newer is required. The engine has no external runtime dependencies.

```sh
node tools/design-os.mjs taste import --from /absolute/private/miguel-personal-engine-state.json
node tools/design-os.mjs taste status
node tools/design-os.mjs references --context mobile-product --query "warm onboarding" --limit 5
node tools/design-os.mjs start --brief /absolute/private/project-brief.json
```

Use [the small brief template](templates/project-brief.template.json). Missing audience, object, action or context produces project questions before design. Known preferences are recalled rather than re-asked. `start` creates an append-only private packet and lists the original images the host must inspect. It does not claim to generate a working interface.

```sh
node tools/design-os.mjs feedback --quote "EXACT USER CORRECTION" --scope project --project PROJECT_ID --key TOPIC --source "Miguel, message/date"
node tools/design-os.mjs taste help
```

Feedback must come from Miguel, with an explicit scope. Agent observations remain separate. A duplicate correction is a no-op; superseded corrections remain in history.

## Where things belong

| Path | Role |
| --- | --- |
| `.design-os-private/` | Ignored personal originals/profile, derived index, client briefs and run packets |
| `visual-library/` | Preserved existing references and historical QA evidence |
| `tools/engine/` | Small private storage, retrieval, brief and correction modules |
| `skills/` | Existing specialist guidance, loaded on demand |
| `tools/` | Existing screenshot, integrity and validation tools |
| `docs/archive/` | Historical material, excluded from default startup |

The existing collection has 116 inspiration images. Other screenshots are project or failure evidence, excluded from the normal reference result. Original files and legacy paths remain intact. Recent private uploads belong in the personal profile rather than the public repository.

## Verification

```sh
node --test tests/engine.test.mjs tests/legacy-regression.test.mjs
node tools/design-os.mjs doctor
node tools/benchmark-engine.mjs
```

[Engine details and limits](docs/engine.md) explain provenance, cache invalidation, context selection and private storage. Legacy CLI commands keep their existing behavior. No model API, paid pipeline, deployment or publication is part of this local engine.

Built by [Miguel Almeida](https://github.com/miguelalmeida0).

[Cleanup and preservation record](docs/CLEANUP_2026-10-09.md)
