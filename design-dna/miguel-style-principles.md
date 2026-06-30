# Miguel Style Principles

This is the reusable design DNA extracted from the five golden source projects. It is not a single visual skin. It is a way of deciding what a new interface should become.

## Evidence Hierarchy

Use these sources in this order:

1. `manual-preferences/00_global_frontend_principles.md`
2. The five source projects under `source-projects/`
3. The extracted project reports under `extracted/`
4. The case study under `case-studies/in-the-loop-feedback/`

The case study is feedback from one app. Treat it as useful signal about taste and failure modes, not as a universal product template.

## Core Principles

### 1. Every App Needs Its Own Identity

Do not apply one house palette or one favorite layout to every project. Agent Boss, Equity, Ghostwritter, Ontime, and Portfolio work because each one speaks in the voice of its product:

- Agent Boss: dense, operational, high-trust command environment.
- Equity: market terminal, data-first, sober and high contrast.
- Ghostwritter: expressive writing tool, cinematic but functional.
- Ontime: social planning app, warm and human.
- Portfolio: editorial personal presence, spacious and authored.

Before choosing colors, spacing, components, or motion, name the product's domain, emotional register, and primary object.

### 2. The Main Object Must Be Obvious

Each screen needs one dominant object of attention:

- a worker, route, control state, or trust gate
- a stock, watchlist, timeline, or market feed
- a draft, voice, rewrite, or playback
- a plan, meetup, friend, or invitation
- a person, story, case study, or body of work

Layout, copy, and controls should all orbit that object. If the screen feels like a collection of unrelated cards, the main object is not clear enough.

### 3. One Primary Action Per Zone

Miguel-style interfaces avoid CTA soup. A screen can contain many actions, but each visual zone should have a clear hierarchy:

- one primary action
- one or two secondary actions
- passive metadata that never competes with real controls

Button styling should make action rank obvious before the user reads the labels.

### 4. Clickable And Passive Must Look Different

A clickable element needs visible affordance and state. Passive labels, status chips, metrics, and metadata should not look tappable.

Good signals include:

- hover/focus/pressed states for actions
- cursor and keyboard behavior that matches visual promise
- clear disabled states
- passive tags with calmer contrast and no hover lift

Do not use the same pill style for filters, status labels, navigation tabs, and primary actions.

### 5. Composition Beats Container Soup

The golden projects use sections, columns, data rails, bands, canvases, and anchored objects. They do not rely on endless nested rounded cards.

Use cards for repeated objects, tools, modals, and framed items. Avoid using cards as the default wrapper for every thought.

### 6. Progressive Disclosure Is A Design Primitive

Show enough to make the next decision easy. Hide detail until it is needed.

Repeated patterns:

- drawers and inspectors for dense enterprise detail
- expandable evidence and route sections
- result playback after a generation action
- accordions for settings or safety detail
- detail panes beside lists on desktop

Progressive disclosure should reduce cognitive load, not bury the primary action.

### 7. Data And Claims Must Be Honest

When an interface shows metrics, states, safety claims, financial signals, or AI output, it must expose enough context to be trusted.

Use:

- timestamps
- sources
- confidence or status where relevant
- visible empty, loading, and error states
- copy that avoids overclaiming

Do not invent live data, fake authority, fake validation, or vague proof language.

### 8. Tokens Should Be Semantic, Not Decorative

Good tokens describe roles:

- surface, panel, field, overlay
- text primary, text muted, text inverse
- action primary, action secondary, danger, success, warning
- border, ring, shadow, focus

Project palettes should differ, but token roles should stay understandable.

### 9. Visual Assets Should Carry Meaning

Use real or generated bitmap imagery when the product benefits from inspection, emotion, place, identity, or texture. Avoid generic atmospheric visuals.

In the source projects:

- Portfolio uses portrait and editorial media.
- Ghostwritter uses visual writing metaphors.
- Ontime uses human/social imagery and avatars carefully.
- Enterprise/data tools rely more on structure, indicators, and state than decoration.

### 10. Responsiveness Is Designed, Not Stretched

Mobile, tablet, and desktop should have intentionally different compositions:

- mobile: priority stack, thumb-safe actions, no horizontal surprise
- tablet: two-column opportunities, preserved reading rhythm
- desktop: expanded context, not stretched mobile controls

Use screenshots at 390, 768, and 1440 px before claiming the design works.

### 11. Copy Should Sound Like A Product, Not A Demo

Copy should be concise, concrete, and context-aware. It should not explain the obvious or advertise the interface to itself.

Good copy:

- names the action
- gives useful state
- removes uncertainty
- matches domain seriousness

Bad copy:

- "AI-powered magic"
- "seamlessly transform your workflow"
- fake urgency
- repeated helper text under every control

### 12. Motion Should Clarify State

Motion is useful when it shows:

- generated output arriving
- a drawer opening
- active filters changing
- live status updating
- focus shifting

Motion should not distract from reading, data comparison, or task completion.

## Miguel Test

Before finishing any new app or UI revision, answer:

1. What is this product's specific identity?
2. What is the main object on the screen?
3. What is the one primary action in the current zone?
4. Which elements are clickable, and can a user tell instantly?
5. Does the desktop layout use desktop space, or is it stretched mobile?
6. Does the copy help a real person act?
7. Would the interface still make sense if the palette changed?

