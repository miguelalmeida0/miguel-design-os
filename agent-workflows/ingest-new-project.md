# Workflow: Ingest New Project

Use this workflow when adding another source project to the memory system.

## Goal

Turn a finished or representative project into reusable evidence without overfitting to it.

## Steps

1. Read the project root files:
   - package manifest
   - framework config
   - route files
   - styling/theme files
   - README or design notes

2. Identify technical inventory:
   - framework
   - package manager
   - run command
   - routes
   - components
   - styling system
   - Tailwind/theme config
   - layout patterns
   - reusable UI patterns

3. Run the app:
   - install dependencies using the project's package manager
   - use the documented dev/start command
   - record any required environment variables or blockers

4. Capture screenshots if it runs:
   - `captures/{project}/mobile/primary.png` at 390 px
   - `captures/{project}/tablet/primary.png` at 768 px
   - `captures/{project}/desktop/primary.png` at 1440 px

5. Write extracted reports:
   - `extracted/{project}/technical-inventory.md`
   - `extracted/{project}/style-report.md`

6. Synthesize cautiously:
   - promote patterns only when they align with global principles or recur across projects
   - mark project-specific quirks as local, not global
   - never turn a single palette, layout, or copy tone into a universal rule

## Report Standards

The technical inventory should be concrete and file-backed.

The style report should cover:

- identity
- palette/tokens
- typography
- spacing/composition
- components
- interaction patterns
- responsive behavior
- what to reuse as principle
- what not to copy literally

## Completion Check

The project is ingested when:

- both extracted reports exist
- screenshots exist or a run blocker is documented
- any design-dna updates are explicitly justified by evidence

