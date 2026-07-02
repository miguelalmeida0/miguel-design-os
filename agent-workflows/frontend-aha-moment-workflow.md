# Frontend Aha Moment Workflow

Use when building a new product UI, MVP shell, demo, or dogfood target.

## Goal

Make the first local frontend version feel like a real product teaser before backend work begins.

## Rules

- Local/mock data is allowed.
- Mock data must be truthful and clearly scoped.
- Mock data belongs in dedicated files such as `data/mock.ts`, `data/mock.js`, or `src/data/mock-*`, not buried in components.
- Every visible interaction must work locally.
- No backend until the frontend loop is compelling unless Migi explicitly requests backend first.
- Stop and ask before backend if backend was not requested.
- The first version must prove the product loop, not just the visual shell.
- For landing, portfolio, or marketing MVPs, the first version must pass anti-AI-tell preflight before extra sections are added.
- For motion-heavy MVPs, the first version must define a motion purpose and reduced-motion behavior.

## Frontend Aha Loop

1. Identify the main local loop.
2. Define the mock data and where it lives.
3. Build only the frontend surface needed to prove the loop.
4. Make all visible controls work locally.
5. Add local persistence only if truthfully represented.
6. Generate or export a useful local artifact when the product implies output.
7. Screenshot QA.
8. Report what is mock, what works locally, and what backend would replace.

## Interaction Proof

Before handoff, verify:

- primary CTA
- selection
- filters/search
- form submit
- export/copy/download if visible
- local state changes
- empty/loading/error states

## Blockers

- visible dead button
- mock data hidden inside component body
- backend implied but not implemented
- "live" or "AI" claims with no local truth
- no core-loop proof
- frontend looks good but product loop is hollow
