# Agent Boss Technical Inventory

## Snapshot

- Source: `source-projects/agent-boss`
- Role in design OS: golden enterprise/workbench example
- Framework: custom Fastify server plus a large static browser workspace under `workforce/` and `assets/`
- Language: TypeScript for server/runtime modules; vanilla browser JavaScript for the static workspace shell
- Package manager: npm, with `package-lock.json`
- Primary run command: `npm run dev`
- Observed local URL: `http://127.0.0.1:3002/workforce/`
- Capture status: ran successfully after cache-only dependency install; captured `mobile`, `tablet`, and `desktop` as `captures/agent-boss/*/primary.png`

## Dependency Notes

`npm ci` failed under the current Node/npm pair because the lockfile was rejected as out of sync around `@emnapi/core` and `@emnapi/runtime`. A cache-only install with `npm install --prefer-offline --no-audit --ignore-scripts --package-lock=false --legacy-peer-deps` installed dependencies without changing the lockfile and allowed the dev server to run.

## Routes

The server serves the static workforce shell at:

- `/`
- `/workforce`
- `/workforce/`
- `/workforce/*`
- `/assets/*`

The static workspace contains many route directories under `workforce/`, including:

- `/workforce/`
- `/workforce/command-center/`
- `/workforce/ai-workspaces/`
- `/workforce/mission-room/`
- `/workforce/pilot-setup/`
- `/workforce/pilot-run/`
- `/workforce/control-lab/`
- `/workforce/commerce-control/`
- `/workforce/authority-layer/`
- `/workforce/action-contracts/`
- `/workforce/tool-gateway/`
- `/workforce/risk-treasury/`
- `/workforce/policies/`
- `/workforce/decision-intelligence/`
- `/workforce/agent-economics/`
- `/workforce/ai-work-ledger/`
- `/workforce/evidence/`
- `/workforce/reports/`
- `/workforce/settings/`

API routes are registered through `src/api/routes.ts` and `src/api/runtime-api-composition.ts`, with domain route modules for runtime, workspace, evidence, control graph, pilot, commerce, trust boundary, UI owner actions, and related operational systems.

## Components

The strongest component source is `src/components/primitives/`:

- `PageShell`
- `PageHeader`
- `Section`
- `Bento`
- `Col`
- `Tile`
- `TileHead`
- `StatTile`
- `DataRow`
- `RowList`
- `GuidedWorkflowList`
- `GuidedWorkflowRow`
- `Toolbar`
- `Pill`
- `Eyebrow`
- `Mono`
- `Empty`
- `DSButton`

The static shell also has browser modules for route rendering, sidebar behavior, drawer runtime, disclosure runtime, route registries, local API fallback, action dispatching, and route-specific renderers.

## Styling System

- Primary design source: `src/styles/design-system.css`
- Static CSS buckets: `assets/styles/tokens.css`, `base.css`, `primitives.css`, `cinematic.css`, `legacy.css`, and `visual-reference.css`
- Visual language name in source: Navy Trust Design System
- Core idea: every route should compose from primitives rather than bespoke page containers
- Tokens use CSS custom properties for spacing, type, color, tone, radius, shadow, duration, and easing
- Tone vocabulary: `neutral`, `navy`, `allow`, `hold`, `stop`
- Components expose `data-variant-*` attributes for component, tone, emphasis, state, and density

## Tailwind And Theme Config

- Tailwind config: `tailwind.config.mjs`
- Tailwind content scans `index.html`, `workforce/**/*.html`, `assets/agent-boss.js`, and `src/**/*`
- Theme maps Tailwind colors, spacing, radius, shadow, font size, and motion durations to CSS variables
- The config does not invent a palette; it exposes semantic tokens from the design system

## Layout Patterns

- Persistent left navigation rail for enterprise workspace routes
- Sticky top command/search bar
- Page shell with max width and controlled gutters
- Editorial page headers with eyebrow, title, lede, and actions
- Bento grid with 12-column desktop, 6-column tablet, and 2-column mobile collapse
- Hero operational card paired with proof/status panel
- Section blocks separated by typography, rules, and spacing rather than nested cards
- Disclosure rows for guided workflows
- Dense system snapshot rows with tone rails and compact status pills

## Reusable UI Patterns

- Semantic status tones rather than raw red/green decoration
- One primary action per operational zone, usually attached to the proof/action object
- Strong distinction between buttons, passive pills, rows, and tiles
- `data-interactive="true"` gates hover affordances
- Rail accents communicate tone without turning every tile into a loud card
- Compact all-caps eyebrows and mono captions provide operational precision
- Responsive grid spans are explicit, not incidental
- Empty states are dashed, quiet, and centered

## Run And Capture Evidence

- Install attempted: `npm ci --prefer-offline --no-audit --ignore-scripts` failed due lockfile sync issue
- Cache-only dependency install succeeded without lockfile writes
- Run command: `npm run dev`
- Server status: success at `http://127.0.0.1:3002`
- Screenshots:
  - `captures/agent-boss/mobile/primary.png`
  - `captures/agent-boss/tablet/primary.png`
  - `captures/agent-boss/desktop/primary.png`

