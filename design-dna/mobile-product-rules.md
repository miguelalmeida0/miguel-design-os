# Mobile Product Rules

Mobile UI is not a desktop website squeezed into a phone viewport.

Use this file for mobile apps, mobile web flows, onboarding, profile/search/home screens, consumer product flows, and mobile reference-folder work.

## Platform Mode First

Declare one:

- `ios-native`
- `android-native`
- `cross-platform-native`
- `mobile-web`
- `responsive-web-with-mobile-priority`

This choice affects navigation, safe areas, gestures, typography, bottom sheets, control density, and motion.

## Screen-First Flow

Mobile work must describe the sequence of screens, not only one pretty still.

Required:

- entry screen
- primary action screen
- selected/detail state
- confirmation/output state
- empty/error state where relevant

Beautiful single-screen Dribbble-style mockups fail if the usable flow is unclear.

## Safe Areas

Rules:

- respect top and bottom safe areas
- primary actions must not sit under system gestures
- bottom nav must leave breathing room
- modals/sheets must account for keyboard and thumb reach
- hero/media crops must survive notches and dynamic browser bars

## Navigation

Mobile navigation must be crafted:

- for apps with 3+ primary destinations, bottom navigation is the default
- compact top nav, tab bar, sheet flow, or gesture flow must be justified by product mode
- labels must remain understandable
- selected state must be obvious but not noisy
- icons need labels or obvious meaning
- nav cannot wrap into oversized pills
- nav cannot overlap content

## Mobile Navigation Defaults

For applications that have 3+ primary destinations, mobile navigation defaults to a bottom navigation bar.

Default behavior:

- desktop: top navigation or left sidebar
- tablet: adaptive depending on layout
- mobile: bottom navigation by default

Reasons:

- thumb reach
- larger usable content area
- cleaner hierarchy
- modern premium mobile product behavior
- removes duplicated navigation patterns
- aligns with Migi's preferred interaction model

The top of the mobile screen should be reserved for:

- branding
- current page title
- search
- context
- hero imagery

It should not be the default home for primary navigation.

Exceptions where top navigation may be acceptable:

- documentation sites
- desktop-first enterprise tools
- editor software
- websites where the primary experience is scrolling rather than application usage

Outside those exceptions, use bottom navigation as the default.

## Bottom Navigation Quality Bar

Bottom navigation must never be generic.

Requirements:

- beautifully proportioned
- premium spacing
- generous touch targets
- excellent icon/text alignment
- active state feels intentional
- floating or integrated depending on design direction
- proper safe-area support
- works with gesture navigation
- smooth state transitions
- labels remain readable
- never cramped
- never oversized

## Touch Targets

Rules:

- minimum target should generally be 44 px or larger
- primary thumb actions should sit in reachable zones
- destructive actions require spacing and confirmation
- dense controls need grouping and rhythm
- tiny labels or icon-only controls need tooltips/accessible names where possible

## Typography

Rules:

- text must remain readable at 390
- avoid desktop display scale on mobile
- body text needs real line height
- labels cannot collapse into cryptic fragments
- long titles need wrapping, truncation, or alternate layout

## Mobile Visual Density

Mobile can be rich, but it cannot be cramped.

Use:

- prioritized screen stack
- progressive disclosure
- sheets/drawers for details
- compact metadata rows
- clear selected/detail states

Avoid:

- desktop dashboards squeezed into columns
- tiny chart axes
- overloaded cards
- invisible hierarchy
- three competing CTAs

## Mobile Screenshot Proof

At minimum, mobile work needs 390 px screenshot proof.

For serious mobile work, capture:

- 390
- 768
- relevant device/safe-area viewport if available

Check:

- nav readable
- touch targets reachable
- no horizontal overflow
- no clipped titles
- no cards squeezed into garbage
- primary action visible
- core flow evident

## Output Artifact

Create or fill `docs/design/mobile-flow-spec.md` for mobile-first work.
