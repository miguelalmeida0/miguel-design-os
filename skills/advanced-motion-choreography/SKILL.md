---
name: advanced-motion-choreography
description: Plan, specify, and evaluate award-level motion systems for artistic, cinematic, portfolio, agency, landing, editorial, and experimental UIs. Use when Migi asks for advanced animation, cinematic motion, scroll choreography, Awwwards/Godly/Recent-level motion, portfolio motion, or motion like Graffico, Manet, UXBert, or Podium.
---

# Advanced Motion Choreography

Advanced motion is choreography. It is not one background animation, a repeated fade-up, or hover scale sprinkled across the page.

## Use When

- Migi asks for advanced animation, cinematic motion, artistic motion, scroll animation, portfolio motion, or award-winning motion.
- References include Graffico, Manet, UXBert, Podium, Awwwards, Godly, Recent, or similar motion-heavy sites.
- Landing, portfolio, creative, agency, cinematic, editorial, or experimental UI needs motion as part of the identity.
- A strong static page still feels dead.
- Navigation, menu, reel, media, or section state matters.

## Do Not Use When

- Pure bug fix.
- Backend task.
- Minimal static page.
- High-frequency productivity UI where motion should be reduced.
- Migi explicitly asks for no motion.

## Required Inputs

- selected Design OS mode
- active design dials
- motion references or screenshots
- selected direction
- visual spec
- layout skeleton
- navigation strategy
- image/media strategy

## Required Output

Create:

```md
docs/design/motion-choreography-plan.md
```

## Required Sections

### Motion References

For each reference:

- source:
- observed mechanics:
- what to transfer:
- what not to copy:

### Motion Thesis

- what the motion should make the page feel like:
- what story motion tells:
- what should remain still:

### Motion Vocabulary

Name exact techniques, such as:

- pinned section
- scrubbed timeline
- scroll-linked parallax
- scroll-triggered reveal
- clip-path reveal
- mask reveal
- sticky horizontal scroll
- view transition
- image-to-panel expansion
- staggered typography
- kinetic marquee
- menu reveal
- reel overlay
- hover image trail
- floating CTA transition

### Motion Layers

Advanced motion needs at least five layers:

1. Page / section choreography
2. Image / media choreography
3. Typography choreography
4. Navigation / menu choreography
5. Micro-feedback layer

### Signature Motion Moment

- name:
- trigger:
- description:
- why it matters:
- tool:
- fallback:

### Section-by-Section Motion Map

For every section:

- section:
- trigger:
- motion:
- purpose:
- timing:
- easing:
- tool:
- desktop behavior:
- mobile behavior:
- reduced-motion fallback:

### Navigation Motion

- active state:
- menu open/close:
- section awareness:
- CTA motion:
- mobile nav motion:

### Image / Media Motion

- reveal method:
- crop behavior:
- parallax/depth:
- hover/focus:
- scroll handoff:

### Typography Motion

- headline reveal:
- line/word behavior:
- scroll-linked type:
- constraints:
- when static is better:

### Tool Stack Decision

- selected tool:
- why:
- what was rejected:
- dependency added? yes/no:
- performance impact:

### Reduced Motion

- what is removed:
- what remains:
- user preference handling:

### Performance Budget

- target fps:
- max simultaneous animated elements:
- properties animated:
- expensive effects:
- mobile fallback:

### Acceptance Criteria

- no token motion sprinkle
- more than one animation layer
- motion supports narrative
- reduced-motion exists
- no `transition: all`
- no layout jank
- no animation fatigue
- no fake "cool" motion

## Stop Conditions

Stop before implementation or final handoff if:

- advanced motion was requested and only one animation exists
- `docs/design/motion-choreography-plan.md` is missing
- no section-by-section motion map exists
- no reduced-motion plan exists
- motion is decorative only
- every section uses the same fade-up
- implementation lacks navigation/menu/media motion despite reference need
- no motion benchmark review exists when motion is central
- no motion sequence/evidence exists and no capture blocker is documented

