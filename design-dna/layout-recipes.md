# Layout Recipes

Choose one recipe before arranging components. Do not mix recipes because a source screenshot looked good.

## Focused Creation

Use when: the user creates one thing from a prompt, selection, upload, or short form.

Build:

- first viewport: primary input/object plus one create/generate action
- secondary controls: inline or adjacent, not a separate settings maze
- result/preview: visible immediately after action
- history/recent items: below mobile, side rail desktop

Responsive map:

- 390 px: input, controls, primary action, result stacked in that order
- 768 px: input and result can sit in two columns if each gets enough width
- 1440 px: add history, examples, or inspector instead of stretching the input

Do not: make a marketing hero or long wizard before the first result.

## Dense Control Workspace

Use when: users supervise operations, approvals, agents, incidents, or governance.

Build:

- persistent nav or command rail
- top context/status bar
- central queue, table, or work surface
- inspector/evidence rail for selected object
- action cluster near selected object

Responsive map:

- 390 px: nav collapses; selected object and action come before secondary metrics
- 768 px: list plus detail or collapsible inspector
- 1440 px: nav, work surface, and inspector can be visible together

Do not: replace operational state with generic KPI cards.

## Research Terminal

Use when: comparison, recency, and numeric scanning matter.

Build:

- search/entity selector
- primary entity header
- metric strip with recency/source
- table/feed/chart area
- watchlist/timeline/context rail when width allows

Responsive map:

- 390 px: preserve key metric and recency; allow documented horizontal scroll only for comparison tables
- 768 px: split entity summary and feed
- 1440 px: table/feed plus side context

Do not: show charts or "live" badges without source and timestamp.

## Composer Studio

Use when: users transform language, media, or structured output.

Build:

- input surface
- mode/tone controls
- primary generation/transformation action
- output preview
- copy/export/save actions
- variants/history as secondary

Responsive map:

- 390 px: input, controls, action, output stack; keep output close to action
- 768 px: input/output split if readable
- 1440 px: add playback/history rail, not extra decoration

Do not: hide the generated result in a toast or modal.

## Editorial Presence

Use when: presenting a person, practice, story, brand, or authored body of work.

Build:

- first viewport has the subject as the obvious signal
- subject-identifying media or typographic identity
- next section is hinted in the first viewport
- proof appears as selected narrative, not exhaustive grid

Responsive map:

- 390 px: subject, core claim, and primary path visible without awkward crop
- 768 px: preserve reading rhythm
- 1440 px: use width for media, margin notes, or editorial pacing

Do not: use a generic split card hero.

## Consumer Coordination

Use when: users coordinate people, time, places, invitations, or shared plans.

Build:

- current plan/intent as primary object
- participant/time/place state
- lightweight choices
- clear confirm/share/invite action
- privacy/safety language only where it affects trust

Responsive map:

- 390 px: thumb-safe action and no bottom-nav collision
- 768 px: plan plus participant/context panel
- 1440 px: schedule, map, or participant context can sit beside plan

Do not: apply this recipe to non-social products just because the case study liked warmth.

## Selection Roster

Use when: the core experience is choosing, browsing, collecting, comparing, or discovering objects.

Build:

- first viewport: image-led roster or gallery with a strong "which one do I pick?" moment
- visual thesis: define a non-obvious metaphor before using the expected genre style
- cards: large enough to show object identity, silhouette, class, rarity, power, vibe, or personality without clutter
- card zones: visual, identity, metadata, and action stay readable and collision-free
- interaction: hover and selected states feel rewarding and visually different from passive cards
- selected object: committed preview, comparison tray, loadout panel, or "picked" state
- details: dense specs, technical analysis, and long descriptions hidden until after selection

Responsive map:

- 390 px: one dominant card or tight swipe/scroll roster plus clear selected state
- 768 px: gallery plus selected preview or comparison tray
- 1440 px: roster, selected preview/loadout, and optional inspector can coexist

Do not:

- open with explanation, brochure copy, or dense stat panels
- use beige catalog grids when the product needs energy
- default to the obvious genre aesthetic, such as dark cyber robots with neon/glow/badge soup
- create excitement mainly through badges, stats, glows, and overlays
- allow text, badges, stats, or controls to overlap accidentally
- make cards feel like product listings
- treat selection like SaaS settings

Robot Skill Forge evidence: the first screen should be a character-select moment, not an information page. It also must not become the obvious AI robot-app cliche.

Layout hard rule:

- Overlapping UI is a hard fail unless deliberately designed, readable, responsive-tested, and necessary. Test cards at 390 / 768 / 1440 before accepting them.

## Detail With Inspector

Use when: selecting one object from a list and reviewing evidence, settings, or detail.

Build:

- source list with visible selection
- detail region named after selected object
- inspector/actions grouped by decision
- close/back path on mobile

Responsive map:

- 390 px: list routes to detail or opens full-screen drawer
- 768 px: list plus detail, inspector collapsed
- 1440 px: list, detail, and inspector can coexist

Do not: make row hover imply selection unless selection exists.
