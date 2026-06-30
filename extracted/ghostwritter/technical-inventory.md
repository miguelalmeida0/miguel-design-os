# Ghostwritter Technical Inventory

## Snapshot

- Source: `source-projects/ghostwritter`
- Role in design OS: golden expressive/editorial AI interaction example
- Framework: Next.js app router
- Language: TypeScript, React, CSS
- Package manager: npm, with `package-lock.json`
- Primary run command: `npm run dev`
- Observed local URL: `http://127.0.0.1:4003/second-voice`
- Capture status: ran successfully; captured `mobile`, `tablet`, and `desktop` as `captures/ghostwritter/*/primary.png`

## Routes

App routes under `src/app`:

- `/` redirects permanently to `/second-voice`
- `/second-voice`
- `/second-voice/case-study`
- `/ghostwriter`
- `/ghostwriter/case-study`
- `/g/[id]`
- `/api/ghostwriter`

There are route-level error/loading/not-found files for public share and second-voice surfaces.

## Components

Main product components:

- `GhostwriterPage`
- `AuthorOrbital`
- `MoodDial`
- `HeroArtwork`
- `RewritePlayback`
- `RewriteLabPanel`
- `RewriteLabScoreCard`
- `RewriteLabTrace`
- `RewriteFeedbackPanel`
- `HowItWorksDrawer`
- `SecondVoiceMark`

Case study components:

- `CaseStudyPage`
- `TopBar`
- `Hero`
- `LiveExample`
- `MetaStrip`
- `EngineeringChoices`
- `PullQuote`
- `HowItWorks`
- `WhatChanged`
- `WhyThisStack`
- `ClosingNotes`
- `Footer`

## Styling System

- Global CSS: `src/app/globals.css`
- Overflow guard: `src/app/ghostwriter-overflow-guard.css`
- Tailwind v4 style entry: `@import "tailwindcss"` plus `@theme inline`
- Scoped app class: `.ghostwriter`
- Core design variables: `--void`, `--ghost`, `--mist`, `--whisper`, `--accent`, `--gw-voice-color`, `--gw-control-border`, `--gw-button-radius`, and author/outcome color variables
- Fonts: Inter, JetBrains Mono, Source Serif 4 via `next/font`

## Tailwind And Theme Config

No standalone `tailwind.config` is present. Tailwind is configured inline in CSS with v4 `@theme inline` tokens that map to CSS custom properties.

## Layout Patterns

- Full-screen expressive hero with a real generated/bitmap character asset
- Two-column desktop hero: headline and actions on left, artwork on right
- Rewrite controls as a focused section below hero
- Mode toggle for author vs outcome
- Author cards as a selectable grid
- Mood dial as one continuous control
- Composer and playback as a two-column studio
- Drawer for explanation rather than inline instruction sprawl

## Reusable UI Patterns

- Selected cards invert color strongly
- Primary CTA uses author/outcome accent rather than generic brand color
- Secondary chips are tactile but quieter
- Composer auto-grows with a single document scroller
- Loading and playback states are narrative but concise
- Public sharing and feedback are opt-in actions after a rewrite exists
- Hero artwork is responsive `picture` output, not a decorative SVG

## Run And Capture Evidence

- Install: `npm ci --prefer-offline --no-audit --ignore-scripts` succeeded
- Run command: `npm run dev`
- Server status: success at `http://127.0.0.1:4003`
- Runtime note: dev server logged a warning about missing/weak `GHOSTWRITER_SECURITY_SECRET`, using an ephemeral development secret
- Screenshots:
  - `captures/ghostwritter/mobile/primary.png`
  - `captures/ghostwritter/tablet/primary.png`
  - `captures/ghostwritter/desktop/primary.png`

