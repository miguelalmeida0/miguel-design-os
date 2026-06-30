# Portfolio Style Report

## Product Personality

Portfolio is editorial, personal, and cinematic. It is not a SaaS landing page. It sells taste through composition, typography, real imagery, and restraint.

## Visual System

- Canvas: atmospheric dark/light modes with subtle texture and gradients
- Typography: serif display for identity and narrative, sans for body, mono for metadata
- Imagery: real portrait, carefully cropped and integrated
- Surfaces: translucent cards and rows, but not every section is a card
- Color: project-specific and brand-like; not a universal palette
- Motion: reveal, marquee, orbit, intro, and hover movement with reduced-motion fallback

## Hierarchy And Composition

The hero is the product: Miguel Almeida, large type, portrait, proof metadata, and two actions. Later sections become quieter and more structured. The page does not lead with a marketing split layout or generic feature cards.

Reusable principle: when the subject is a person or brand, the subject must dominate the first viewport.

## Interaction Grammar

- Primary and secondary CTAs are visually distinct
- Navigation links use pill treatment only where clearly interactive
- Work rows are full interactive surfaces with hover/focus feedback
- Copy and email actions have dedicated components
- Theme toggle is a discrete control, not text decoration

## Responsive Behavior

- Hero typography uses clamps
- Portrait asset has responsive sources and fixed aspect ratio
- Grid shifts from 12-column desktop to stacked mobile
- Mobile nav simplifies to a contact action plus theme control
- Heavy blur is disabled on small viewports for performance

## Reusable Lessons

- Use actual media when the product/person matters
- Put the literal subject in the first viewport
- Let editorial pages breathe more than operational tools
- Keep metadata precise and small
- Use large type only where it is structurally justified
- Centralize style bundles when Tailwind utility strings become a design language

## Do Not Globalize

Do not copy the portfolio palette, personal copy, portrait treatment, or cinematic intro into app dashboards. The reusable lesson is editorial hierarchy, media integration, and brand-specific composition.

