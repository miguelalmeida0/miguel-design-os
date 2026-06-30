# Ontime Technical Inventory

## Snapshot

- Source: `source-projects/ontime`
- Role in design OS: golden consumer/social workflow example
- Framework: Next.js app router
- Language: TypeScript, React, CSS
- Package manager: npm, with `package-lock.json`
- Primary run command: `npm run dev`
- Observed local URL: `http://127.0.0.1:3030`
- Capture status: ran successfully after cache-only dependency install; `/home` redirected to `/login` without an authenticated actor, so fresh captures show the login gate

## Dependency Notes

`npm ci` failed because the lockfile was rejected as out of sync around `@emnapi/core` and `@emnapi/runtime`, and the package declares Node `22.x`. A cache-only install with `npm install --prefer-offline --no-audit --ignore-scripts --package-lock=false --legacy-peer-deps` installed dependencies without changing the lockfile. The dev wrapper then switched from Node 26 to Node 22 as intended.

## Routes

Primary app routes:

- `/`
- `/login`
- `/auth`
- `/reset-password`
- `/onboarding`
- `/home`
- `/new`
- `/create`
- `/plans`
- `/plan/[id]`
- `/meetup/[id]`
- `/around`
- `/pull`
- `/you`
- `/profile`
- `/settings`
- `/safety`
- `/safety-circle`
- `/safety-circle/setup`
- `/safety-circle/ready`
- `/crisis`
- `/recipient/[id]`
- `/share/[token]`

Legacy owner route group:

- `/(legacy-owner)/home`
- `/(legacy-owner)/create`
- `/(legacy-owner)/history`
- `/(legacy-owner)/group/[id]`

API and health routes include `/api/v1/state`, `/api/v1/meetups`, `/api/v1/sessions`, `/api/v1/safety-circles`, `/api/v1/safety-sessions`, `/health/live`, and `/health/ready`.

## Components

Major product areas:

- `components/home/*`
- `components/create/*`
- `components/meetup/*`
- `components/social-board/*`
- `components/safety/*`
- `components/safety-circle/*`
- `components/settings/*`
- `components/recipient/*`
- `components/auth/*`

Shared UI:

- `Button`
- `BottomNav`
- `BottomNavShell`
- `ScreenShell`
- `AppChrome`
- `Avatar`
- `Input`
- `LocationField`
- `FeedbackToast`
- `DivaCelebration`
- `ProfileCornerLink`
- `SocialPresenceSummary`
- `RouteTransitionShell`
- `StaggerContainer`

## Styling System

- Global CSS: `app/globals.css`
- Tokens: `styles/tokens.css`
- Tailwind config: `tailwind.config.ts`
- Fonts: Manrope, Plus Jakarta Sans, Inter, Instrument Sans style stack through CSS variables
- Token families: page width, z-index, colors, semantic text, role colors, status colors, font sizes, spacing, control heights, radii, shadows, transitions, nav, button, chip, row, and surface tokens

## Tailwind And Theme Config

Tailwind maps project tokens into:

- `colors.canvas`, `ink`, `muted`, `line`, `panel`, `primary`, `success`, `warning`, `danger`
- semantic surface and text color namespaces
- role and protective color namespaces
- shadow tokens for cards, rows, buttons, nav, chips, and inputs
- radius tokens for controls, cards, shell, hero, nav, and display surfaces
- spacing and min-height tokens for buttons and chips
- z-index tokens for surface, nav, modal, toast, overlay, and celebration layers

## Layout Patterns

- Auth/preauth screens use centered cards over soft atmospheric backgrounds
- App screens use `ScreenShell` with page gutters, safe-area padding, and bottom-nav padding
- Social board shell uses a warm full-page canvas with constrained content
- Home prioritizes a live plan card first, then quick plan/vibe actions, then secondary loop modules
- Create flow uses a live preview/dock plus compact step sections
- Meetup pages use hero, people/activity panels, and bottom nav
- Bottom nav is a compact fixed pill with centered plus action

## Reusable UI Patterns

- Vibe cards with icon, label, short detail, and mode-specific color
- Live plan card as the main object, not a list item
- Avatar stacks and status dots for social presence
- Progress rows for arrival/tracker state
- Segmented auth tabs and full-width primary auth CTA
- Safety states as explicit protective surfaces
- Bottom nav respects safe-area and stays compact

## Run And Capture Evidence

- Install: `npm ci` failed; cache-only `npm install --package-lock=false` succeeded
- Run command: `npm run dev`
- Server status: success at `http://127.0.0.1:3030`
- Capture target: `/home`
- Observed redirect: `/home` redirected to `/login` because no authenticated local actor/session was present
- Screenshots:
  - `captures/ontime/mobile/primary.png`
  - `captures/ontime/tablet/primary.png`
  - `captures/ontime/desktop/primary.png`
- Existing richer authenticated QA references live under `source-projects/ontime/design/qa/` and `source-projects/ontime/design/references/`

