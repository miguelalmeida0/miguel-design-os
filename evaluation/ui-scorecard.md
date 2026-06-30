# UI Scorecard

Use this scorecard for new app generation, UI review, and fix-until-elite loops.

## Scoring

Total: 100 points.

Elite: 90 to 100.

Pass: 80 to 89.

Needs work: 65 to 79.

Fail: below 65.

## Categories

### Purpose And Hierarchy - 15

- 5: primary object is obvious
- 4: screen purpose is clear
- 3: primary action is clear
- 3: secondary content supports the main task

### Composition And Layout - 15

- 4: layout has intentional structure
- 3: spacing and alignment are polished
- 3: avoids container soup
- 3: desktop uses space well
- 2: visual rhythm supports scanning

### Interaction Grammar - 15

- 4: clickable and passive elements are distinct
- 3: one primary action per zone
- 3: hover/focus/pressed/selected states are clear
- 2: disabled/loading states are handled
- 3: controls use appropriate component types

### Component Polish - 10

- 2: buttons are refined and consistent
- 2: tags/chips/tabs are role-specific
- 2: cards/rows/drawers are used appropriately
- 2: empty/loading/error states are designed
- 2: icons/media are aligned and purposeful

### Responsive Behavior - 15

- 5: mobile at 390 px is usable and unclipped
- 4: tablet at 768 px is intentional
- 4: desktop at 1440 px is not stretched mobile
- 2: sticky/fixed UI respects safe areas

### Copy And Tone - 10

- 3: labels are specific and action-oriented
- 2: helper copy is useful and concise
- 2: tone matches product domain
- 2: claims are honest and supported
- 1: empty/error copy helps the next step

### Accessibility And Data Truth - 10

- 2: contrast is sufficient
- 2: keyboard focus is visible
- 2: semantic roles/labels are reasonable
- 2: data shows source/recency/status where needed
- 2: errors and fallbacks preserve trust

### Identity And Assets - 10

- 3: visual identity fits the product
- 2: palette is project-specific, not copied
- 2: imagery/assets are meaningful where used
- 2: motion supports state
- 1: the interface avoids generic AI/SaaS tropes

## Blockers

Any blocker prevents an elite score until fixed:

- main action unclear
- text overlap or clipping in primary flow
- horizontal scroll on mobile outside intentional data surfaces
- passive metadata looks like primary actions
- primary action hidden below competing decoration
- fake data or unsupported claims presented as real
- inaccessible focus for keyboard-critical flows
- desktop view is a stretched mobile layout for a non-editorial app
- app cannot be run and no alternative evidence is documented

## Review Output

When reporting a score, include:

- total score
- category scores
- top 3 fixes
- screenshot evidence used
- verification gaps

