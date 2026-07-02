# Mobile Navigation Defaults

Use this rule for mobile apps, mobile web apps, consumer product flows, app-like dashboards, onboarding/profile/search/home screens, and any responsive application with 3+ primary destinations.

## Default

For applications that have 3+ primary destinations, mobile navigation defaults to a bottom navigation bar.

Default behavior:

- desktop: top navigation or left sidebar
- tablet: adaptive depending on layout
- mobile: bottom navigation by default

## Reason

- thumb reach
- larger usable content area
- cleaner hierarchy
- modern premium mobile products
- removes duplicated navigation patterns
- aligns with Migi's preferred interaction model

The top of the screen should be reserved for branding, current page title, search, context, or hero imagery, not primary navigation.

## Exceptions

Top navigation is acceptable only when:

- documentation sites
- desktop-first enterprise tools
- editor software
- websites where the primary experience is scrolling rather than application usage

Otherwise, bottom navigation is the default.

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

## Rejected

- desktop navigation copied directly onto mobile
- top navigation consuming valuable mobile space
- tiny icon bars
- oversized bottom bars
- generic Android-looking navigation
- poor safe-area handling
- duplicated top and bottom navigation
