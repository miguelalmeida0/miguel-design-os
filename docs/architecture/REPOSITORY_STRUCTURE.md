# Repository structure

**Repository role:** Design-memory and visual-QA knowledge system

The public root is product-first: runtime code, framework configuration,
tests, project docs and legal metadata stay visible. Agent runtime material,
historical planning and generated QA output live in explicit internal
namespaces.

## Rules

1. Product/runtime architecture owns the root.
2. Claude/Codex/agent material lives under `docs/internal/automation/` or `tooling/`.
3. Local agent conventions are recreated with `scripts/dev/bootstrap-local-tooling.sh`.
4. Generated output is not a root architectural concept.
5. Historical material lives under `docs/archive/`.
6. Framework-required configuration stays at root.

## Moved

- `.agents` -> `tooling/agents/runtime`
- `AGENTS.md` -> `docs/internal/automation/AGENTS.md`
- `agents` -> `tooling/agents/catalog`
- `agent-workflows` -> `tooling/workflows`
- `deprecated` -> `docs/archive/deprecated`

## Notes

- `done-report.template.json` root duplicate archived; `templates/done-report.template.json` remains canonical.

## Root before

```text
.agents/
.gitignore
AGENTS.md
README.md
agent-workflows/
agents/
captures/
case-studies/
deprecated/
design-dna/
design-intelligence/
docs/
done-report.template.json
evaluation/
examples/
extracted/
figma-snippets/
generated/
inspiration-library/
manual-preferences/
research-input/
schemas/
skills/
templates/
tools/
visual-library/
```

## Root after

```text
.gitignore
README.md
captures/
case-studies/
design-dna/
design-intelligence/
docs/
evaluation/
examples/
extracted/
figma-snippets/
generated/
inspiration-library/
manual-preferences/
research-input/
schemas/
scripts/
skills/
templates/
tooling/
tools/
visual-library/
```
