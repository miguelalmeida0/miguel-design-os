# Portfolio Technical Inventory

## Snapshot

- Source: `source-projects/portfolio`
- Role in design OS: golden editorial/personal-brand example
- Framework: SvelteKit
- Language: TypeScript, Svelte, CSS
- Package manager: npm, with `package-lock.json`
- Primary run command: `npm run dev`
- Observed local URL: `http://127.0.0.1:3010/`
- Capture status: ran successfully; captured `mobile`, `tablet`, and `desktop` as `captures/portfolio/*/primary.png`

## Routes

SvelteKit routes:

- `/`
- `/story`
- `/cv`
- `/out/linkedin`
- `/portfolio.pdf`
- Error route through `+error.svelte`

Root route server/load files:

- `src/routes/+layout.svelte`
- `src/routes/+layout.ts`
- `src/routes/+page.svelte`
- `src/routes/+page.server.ts`

## Components

Revamp components:

- `SiteHeader`
- `Hero`
- `CinematicIntro`
- `Marquee`
- `Stats`
- `Manifesto`
- `SelectedWork`
- `Approach`
- `Experience`
- `ConversationStarter`
- `StatusBar`
- `ThemeToggle`
- `DevelopingImage`
- `RevealHeading`

Shared components:

- `ActionLink`
- `ButtonLink`
- `CopyEmailAction`
- `FadeIn`
- `Reveal`

Content and design sources:

- `src/lib/content/portfolio.ts`
- `src/lib/content/folio.ts`
- `src/lib/design/tokens.ts`

## Styling System

- Global CSS: `src/app.css`
- Tailwind v4 entry with `@import "tailwindcss"` and `@theme inline`
- Design token class map: `src/lib/design/tokens.ts`
- Light/dark mode via CSS custom properties and `.dark`
- Fonts mapped in CSS: Libre Baskerville, Source Sans 3, JetBrains Mono in `app.css`; token map also uses Cormorant Garamond-style display classes in utility strings

## Tailwind And Theme Config

No standalone Tailwind config is present. Tailwind is configured through CSS `@theme inline`, with additional reusable class bundles in `tokens.ts`.

Token categories include:

- page shell and atmospheric layers
- motion timings and pointer buckets
- layout regions
- typography scales
- surface variants
- hero patterns
- work rows
- form elements
- journey rail

## Layout Patterns

- Fixed header with transparent-to-blurred state on scroll
- Cinematic first viewport with oversized name typography and portrait object
- Editorial marquee
- Compact stats grid
- Manifesto split layout
- Selected work as full-width interactive rows
- Approach/index cards as a 3-column concept set
- Experience rows as structured timeline/list
- Conversation/contact terminal at the end

## Reusable UI Patterns

- Real responsive portrait assets with AVIF/WebP/JPG fallbacks
- Huge display type only in true hero/editorial moments
- Mono microcopy for metadata, dates, and section labels
- Interactive buttons and surfaces have consistent hover, active, focus, and reduced-motion behavior
- Tokenized class bundles prevent utility drift
- Strong page identity without a generic SaaS landing layout

## Run And Capture Evidence

- Install: `npm ci --prefer-offline --no-audit --ignore-scripts` succeeded
- Run command: `npm run dev`
- Server status: success at `http://127.0.0.1:3010`
- Runtime note: Vite warned that `.svelte-kit/tsconfig.json` was initially missing, then started successfully
- Screenshots:
  - `captures/portfolio/mobile/primary.png`
  - `captures/portfolio/tablet/primary.png`
  - `captures/portfolio/desktop/primary.png`

