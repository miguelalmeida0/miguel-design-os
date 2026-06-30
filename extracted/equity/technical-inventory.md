# Equity Technical Inventory

## Snapshot

- Source: `source-projects/equity`
- Role in design OS: golden dense research/workspace example
- App name in source: Research Studio / Tickerbase
- Framework: plain Node server plus static HTML/CSS/JavaScript
- Language: JavaScript, HTML, CSS
- Package manager: npm, with `package-lock.json`
- Primary run command: `npm start`
- Expected URL: `http://127.0.0.1:3000` or `PORT=<port> npm start`
- Capture status: real server run was blocked by `listen EPERM` in this sandbox; screenshots were captured through a Playwright virtual-static file route

## Dependency Notes

The app itself has no runtime dependencies. Its dev dependency is Playwright. `npm ci` attempted to fetch `playwright-core` from the network because that tarball was not cached, and network access is restricted.

## Routes

Route map lives in `public/src/app/routes.js`.

- `/`
- `/index.html`
- `/board`
- `/stocks`
- `/watchlists`
- `/performance`
- `/growth`
- `/news`
- `/timeline`
- `/tape`

The server explicitly treats those as app routes and serves `index.html`; missing static assets and unknown API routes keep normal error behavior.

## Components And Modules

Main static shell:

- `public/index.html`
- `public/app.js`
- `public/src/app/dom-elements.js`
- `public/src/app/state.js`
- `public/src/app/routes.js`

Feature modules:

- `stocks-board`
- `watchlists`
- `performance`
- `growth`
- `news`
- `market-tape`
- `earnings-events`
- `inspector`
- `discovery`
- `read-through`
- `external-research`
- `lovable-terminal`

Shared UI:

- `renderButton`
- `renderBadge`
- `renderEmptyState`
- `renderMetricCard`
- button, badge, card, and empty-state CSS

## Styling System

- Entry CSS: `public/styles.css`
- Token layer: `public/src/shared/design-system/tokens.css`
- Legacy shell layers: `public/src/styles/legacy/*.css`
- Current terminal layer: `public/src/features/lovable-terminal/lovable-terminal.css`
- Additional news terminal layer: `public/src/features/news/components/news-terminal.css`

The app has two visible style eras:

- A soft institutional light/cream system in legacy tokens
- A dark high-density terminal system in the Lovable handoff layer

Both are organized through variables, not Tailwind.

## Tailwind And Theme Config

No Tailwind config is present. Styling is CSS-first with custom properties and feature-level stylesheets.

## Layout Patterns

- Persistent desktop sidebar
- Sticky command bar with market tape and universe lookup
- Route tabs as real URL-backed views
- High-density table shell for portfolio rows
- Theme separator rows inside tables
- Compact KPI strip above the working area
- Mobile menu panel instead of squeezing desktop navigation
- Inspector pattern for focused company detail
- Table wrappers for true two-dimensional data

## Reusable UI Patterns

- Rows are the main unit, not cards
- Market status is rendered as compact pills
- Theme grouping uses colored rails/dots and section rows
- Search is compact and scoped
- Green/red are reserved for market movement or risk, not generic branding
- Empty, partial, stale, and fallback states are explicit product states
- Dense tables use mono numerals and right-aligned metrics

## Run And Capture Evidence

- Run command attempted: `PORT=3101 npm start`
- Result: blocked by `listen EPERM: operation not permitted 127.0.0.1:3101`
- Best-effort screenshots were captured with Playwright by intercepting `http://equity.capture/stocks` and serving static files from `public/`
- Screenshots:
  - `captures/equity/mobile/primary.png`
  - `captures/equity/tablet/primary.png`
  - `captures/equity/desktop/primary.png`

