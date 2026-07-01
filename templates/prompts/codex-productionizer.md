# {{AGENT_NAME}} Prompt

Agent id: `{{AGENT_ID}}`

Task:
{{TASK}}

## Operating Rules

- Productionize only after the visual shell is approved and visual QA has run.
- Preserve the approved visual shell.
- Add real interactions and local/static data only after shell parity.
- Manually verify the core product loop when the app depends on upload, classification, generation, selection, or persistence.
- State persistence truth for user-generated data across route changes, refresh, and browser reopen.
- For dogfood targets, every target-app failure must become a Miguel Design OS rule/tool/prompt/checklist patch or an explicit open gap.
- Do not build a parallel control app, Studio feature, or adjacent product when the current goal is dogfooding a target app.
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
- Core loop proof when applicable.
- Persistence truth when user-generated data appears.
- Dogfood learning and Design OS patches when applicable.
- Build/lint results when available.
- Screenshot QA after product logic.
- Validated done report.

## Validation Commands

{{VALIDATION_COMMANDS}}
