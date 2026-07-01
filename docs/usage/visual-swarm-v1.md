# Visual Swarm v1

Visual Swarm v1 creates five local instruction agents for moving Miguel Design OS closer to "Lovable inside the repo" without paid tools or external model calls.

The swarm is not a Studio UI and not a screenshot-to-code system. It is a local workflow made of Markdown agents, schemas, templates, and CLI routing.

## Flow

1. Inspiration Scout collects references.
2. Art Direction Concept Agent creates 3 rendered visual concepts.
3. Migi approves one rendered concept.
4. Literal Target Copy Agent reconstructs the target if exact copy mode is requested.
5. Visual QA Anti-Slop Agent blocks fake done reports.
6. Productionizer Agent adds interactions only after the visual shell passes.

## Agent Commands

```sh
node tools/design-os.mjs list-agents
node tools/design-os.mjs route-agent --task "Build a cinematic robot character selection app from Pinterest inspiration and a Lovable target"
```

Embedded:

```sh
node .design-os/tools/design-os.mjs list-agents
node .design-os/tools/design-os.mjs route-agent --task "Build a cinematic robot character selection app from Pinterest inspiration and a Lovable target"
```

## Agent Outputs

### Inspiration Scout

- `inspiration-manifest.local.json`
- local screenshots under `inspiration-library/screenshots/`
- top references, composition patterns, and anti-patterns

### Art Direction Concept Agent

- `visual-concepts.local.json`
- preview routes or static preview HTML
- screenshots at `1440 / 768 / 390`
- approval status pending until Migi chooses

### Literal Target Copy Agent

- `target-copy-report.local.json`
- target/current screenshots
- exact differences
- remaining mismatches

### Visual QA Anti-Slop Agent

- `screenshot-report.local.json`
- `done-report.local.json`
- visual QA markdown report
- blockers list
- scorecard result

### Productionizer Agent

- files changed
- architecture notes
- interaction checklist
- screenshot QA after product logic
- done report

## Hard Rules

- No done without evidence.
- Build/lint is not visual QA.
- Text-only concepts fail.
- Visual target screenshots are evidence, not production assets.
- Literal Target Copy Mode requires a target-copy report.
- Production image-led work requires an asset manifest.
- Screenshots are local by default.
- No paid tools, API keys, hosted Lovable, screenshot-to-code generation, Onlook hosted usage, or external model calls.

## Evidence Checklist

Before final handoff on visual work, verify:

- inspiration manifest exists for visual-heavy work
- rendered concepts exist when the Visual Concept Gate applies
- target-copy report exists when Literal Target Copy Mode applies
- asset manifest exists when production imagery is used
- screenshot report exists
- done report validates
- scorecard caps are applied

