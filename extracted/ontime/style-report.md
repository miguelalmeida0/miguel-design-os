# Ontime Style Report

## Product Personality

Ontime is consumer-social and safety-aware. It is soft, personable, and action-led, but it should not become cluttered or overly cute. Its best screens make one live social object feel current, then expose quick ways to act.

## Visual System

- Canvas: warm pastel and soft atmospheric backgrounds
- Typography: rounded modern sans with medium weights
- Color: mode-specific vibes, status colors, and protective safety tones
- Surfaces: rounded, soft, slightly dimensional cards
- Icons: lucide icons used for concrete action/category recognition
- Motion: tactile press, lightweight page transitions, occasional expressive surfaces

## Hierarchy And Composition

The strongest Home pattern is:

1. Live plan object first
2. Start-new action close by
3. Vibe grid
4. Secondary "in your loop" modules

The live plan card carries the emotional and functional weight. The rest of the screen supports it.

## Interaction Grammar

- Vibe cards are clearly clickable and visually distinct by mode
- Bottom nav has active state plus a central creation action
- Live plan card is a large link with compact metadata and tracker rows
- Safety actions are styled as protective states, not casual chips
- Auth screen uses segmented tabs and a strong primary CTA

## Responsive Behavior

- Safe-area variables are present globally
- Bottom nav accounts for `safe-area-bottom`
- Screen shells reserve bottom padding so nav does not cover content
- Grids collapse from wide card arrays to smaller mobile stacks
- Live tracker rows hide or compress on mobile

## Reusable Lessons

- Consumer apps can still use a real design token system
- Use one living object as the center of the screen
- Put quick actions near the object they affect
- Keep bottom chrome compact and viewport-aware
- Use color families per mode when the product genuinely has modes
- Avoid showing every setup detail in the first step

## Do Not Globalize

Do not force social planning, avatar stacks, bottom nav, pastel surfaces, invite flows, or vibe language into every product. Ontime is a golden example for consumer/social/safety flows only.

