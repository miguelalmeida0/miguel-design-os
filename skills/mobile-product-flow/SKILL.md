---
name: mobile-product-flow
description: Design or review mobile-first product flows with native-feeling hierarchy, safe-area behavior, thumb-friendly actions, bottom navigation by default for 3+ primary destinations, screen-by-screen flow proof, mobile visual references, and prevention of scaled-down website UI. Use for mobile apps, mobile web flows, onboarding, profiles, search/home screens, consumer apps, and mobile reference folders.
---

# Mobile Product Flow

Use when the primary experience is mobile or when Migi points to mobile app references.

## Files To Read

- `visual-library/README.md`
- `design-dna/design-generation-dials.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/mobile-navigation-defaults.md`
- `design-dna/mobile-product-rules.md`
- `design-intelligence/style-taxonomy.md`
- `docs/design/mobile-flow-spec.md`

## Workflow

1. Set `MOBILE_NATIVE_FEEL`.
2. Identify the core mobile loop.
3. Define screen hierarchy and thumb zones.
4. If this is a new visual-heavy mobile app with no approved direction, confirm the Three-Direction Mockup Gate happened before coding.
   - Direction A should be Safe Refined.
   - Direction B should be Artistic Expressive.
   - Direction C should be Unexpected High-Character.
   - The directions must differ in screen hierarchy, palette, navigation feel, imagery/media use, motion, and mobile product rhythm.
5. Define navigation: bottom nav by default for 3+ primary destinations; document any top-nav exception.
6. Define safe-area behavior.
7. Define touch targets and spacing.
8. Define mobile-specific states and transitions.
9. Prove the flow at 390 px before claiming quality.

## Mobile Rules

- Mobile is not a desktop website squeezed down.
- For apps with 3+ primary destinations, mobile defaults to bottom navigation.
- Top navigation is acceptable only for documentation sites, desktop-first enterprise tools, editor software, or scrolling-first websites.
- The top of mobile app screens should hold branding, current page title, search, context, or hero imagery, not primary navigation.
- Use thumb-safe primary actions.
- Keep labels readable.
- Avoid tiny Dribbble stills with no flow.
- Bottom nav must be polished, not cramped, not oversized, not generic, and safe-area aware.
- Cards must not become unreadable.
- Preserve product loop, not just visual beauty.
- Direction options must be meaningfully different when visual direction is not approved.
- Each mobile direction should include palette, typography, layout, imagery, motion, mobile strategy, risks, and AI-default avoided.

## Mobile Navigation Review

Ask:

- Should this become bottom navigation?
- Does the app have 3+ primary destinations?
- Is a mobile top-nav exception truly justified?
- Is valuable vertical space being wasted?
- Does this feel like a premium mobile product?
- Is the bottom navigation crafted or generic?
- Are icon and text alignment excellent?
- Are touch targets generous?
- Is the active state intentional?
- Does the nav respect safe areas and gesture navigation?
- Are labels readable and never cramped?

## Output

Include in `docs/design/visual-spec.md`:

- mobile core loop
- mobile nav plan
- bottom-nav default or exception
- direction options / selected direction when applicable
- why the selected mobile direction won over the other two
- safe-area plan
- thumb/action plan
- screen sequence
- 390 proof plan

Also create or fill:

- `docs/design/mobile-flow-spec.md`

## Stop Conditions

- mobile app looks like scaled-down website
- app with 3+ primary destinations uses desktop/top navigation on mobile without justification
- new visual-heavy mobile app skipped the Three-Direction Mockup Gate
- mobile directions are minor variations of the same screen stack or palette
- implementation starts before Migi chooses the mobile direction
- selected direction is missing or ignored
- nav is cramped or cryptic
- bottom navigation is generic, poorly aligned, cramped, oversized, or unsafe around gestures
- top and bottom nav duplicate the same primary destinations
- touch targets are too small
- beautiful screen has no usable flow
- text or cards are unreadable at 390
