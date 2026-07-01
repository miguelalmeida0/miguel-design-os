# Miguel Design OS Studio Brief

## Product Thesis

Miguel Design OS Studio is a local visual command center for turning inspiration, screenshots, taste rules, and QA evidence into frontend-agent prompts that cannot fake visual quality.

## Why Studio Exists

The Design OS already has Markdown rules, CLI validators, local schemas, Visual Swarm agents, and QA scripts. Studio makes that workflow visible: what is ready, what is blocked, what proof exists, and what an agent is allowed to do next.

## Relationship To CLI And Scripts

Studio does not replace the CLI. It exposes the workflow state and gives agents/users copyable commands:

- `route-agent`
- `capture-concepts`
- `compare-screenshots`
- `visual-qa`
- `object-swap-check`
- `validate-done-report`
- `compile-agent-prompt`

## Core Workflow

1. Scout inspiration.
2. Render three concepts.
3. Approve one.
4. Enter Literal Target Copy Mode when exact targets exist.
5. Capture visual QA evidence.
6. Validate assets and done reports.
7. Productionize only after the visual shell passes.

## MVP Limitations

- Local React state only.
- No backend.
- No file writes from the browser.
- JSON data is mirrored into TypeScript seed data.
- Visual QA capture still runs through local CLI scripts.
- Browser screenshots require local Playwright outside Studio.

## Future P1/P2

- Read repo artifacts directly through a local API.
- Persist Studio workflow state.
- Display real screenshot thumbnails from run folders.
- Open command results inline.
- Attach done-report validation output to each screen.
- Add an internal visual QA comparison view.
