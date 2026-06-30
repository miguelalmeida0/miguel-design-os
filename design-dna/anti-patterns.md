# Anti-Patterns

These are the recurring failure modes to avoid when building in Miguel's frontend/design style.

## Universal Anti-Patterns

### Palette Cloning

Do not copy one golden project's color palette into another app. A market terminal, social planner, personal portfolio, and AI writing studio should not share a skin.

Fix: define semantic tokens for the new product, then choose a palette that fits the domain.

### Generic Dashboard Energy

Avoid dashboards made of interchangeable stat cards, vague charts, and "Overview" panels unless the product truly needs operational scanning.

Fix: start from the user's primary object and task. Build a screen around that object.

### Container Soup

Too many nested cards, borders, rounded panels, and boxed sections make a page feel generic and heavy.

Fix: use page bands, grids, rails, whitespace, and direct object composition. Reserve cards for repeated items or real tools.

### CTA Soup

Multiple equally loud buttons in one zone create hesitation.

Fix: one primary action per zone. Demote secondary actions to text buttons, icon buttons, menus, or quiet controls.

### Chip Soup

Pills used for every label, filter, status, nav item, and command make interaction meaning unclear.

Fix: assign each role a distinct component recipe. Passive metadata must not look like a button.

### Clickable-Passive Ambiguity

If a static label hovers like a button, or a button looks like a tag, the interface breaks trust.

Fix: clickable elements need state, focus, cursor, and affordance. Passive elements need calmer styling and no action states.

### Fake Form Energy

Fast consumer actions should not feel like tax forms. Long stacked fields, heavy labels, and repeated helper text slow the experience.

Fix: use conversational pickers, segmented controls, compact inputs, defaults, and progressive disclosure.

### Modal Chains

One modal leading into another makes the product feel brittle.

Fix: use inline expansion, drawers, routed detail screens, or a single focused confirmation.

### Stretched Mobile On Desktop

A centered narrow column with giant controls often wastes desktop space.

Fix: desktop should reveal context: sidebars, inspectors, previews, comparison columns, or supporting data.

### Overexplained Copy

Too many descriptions, tutorials, and feature explanations create demo-page friction.

Fix: use labels that describe outcomes. Only add helper copy where it changes a decision.

### AI Slop

Avoid vague AI words, generic gradients, floating abstract blobs, fake intelligence labels, and "magic" claims.

Fix: show the actual input, output, confidence, source, or action.

### Low-Contrast Status Systems

Status color without sufficient contrast, labels, or icon support makes dense UIs harder to scan.

Fix: pair color with text, weight, icon, or placement. Check contrast in all states.

### Decorative Motion

Motion that does not clarify state or reward meaningful action gets tiring quickly.

Fix: animate state changes, generated output, route transitions, and feedback. Keep reading surfaces calm.

### Uncanny Social Imagery

Generic avatars, creepy faces, or polished stock people weaken trust in consumer/social products.

Fix: use restrained avatars, initials, real user-provided images, or abstract placeholders with warmth.

### Data Theater

Charts, proof panels, confidence scores, and live badges that do not connect to real data create false authority.

Fix: expose source, recency, fallback state, and empty state. Remove claims that cannot be supported.

### Hidden Navigation Collisions

Bottom navs, sticky CTAs, floating bars, and safe-area padding can collide on mobile.

Fix: budget vertical space deliberately and test at 390 px height/width combinations.

### Equal-Weight Bento

A grid where every tile has the same visual weight leaves users unsure where to start.

Fix: give the primary tile more scale, contrast, media, or position. Use supporting tiles as context.

## Case-Study-Specific Warnings

The in-the-loop feedback case study strongly criticized container soup, chip ambiguity, and form energy. Those warnings are useful, but the app-specific preferences are not universal. Do not assume all future apps need:

- warm social copy
- friend/avatar surfaces
- invite mechanics
- bottom navigation
- playful consumer tone

