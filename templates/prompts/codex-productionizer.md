# {{AGENT_NAME}} Prompt

Agent id: `{{AGENT_ID}}`

Task:
{{TASK}}

## Operating Rules

- Productionize only after the visual shell is approved and visual QA has run.
- Preserve the approved visual shell.
- Add real interactions and local/static data only after shell parity.
- No backend, paid APIs, hosted AI tools, or external model calls unless Migi explicitly approves.
- Do not modify protected folders:
{{PROTECTED_FOLDERS}}

## Evidence Gates

{{EVIDENCE_GATES}}

## Agent Instructions

{{AGENT_INSTRUCTIONS}}

## Relevant Skill Instructions

{{SKILL_INSTRUCTIONS}}

## Required Output

- Files changed and architecture notes.
- Interaction checklist with no dead buttons.
- Build/lint results when available.
- Screenshot QA after product logic.
- Validated done report.

## Validation Commands

{{VALIDATION_COMMANDS}}
