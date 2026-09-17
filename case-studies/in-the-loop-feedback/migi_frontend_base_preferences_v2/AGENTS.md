# docs/internal/automation/AGENTS.md — Frontend / UX Master Preferences

Read this before designing or implementing any frontend for Migi.

## This file is a taste and quality guide, not a fixed theme

Do not copy the colors, copy, layout, or product concept of any previous app.
Do not assume every project should look warm, cream, coral, purple, glassy, dark, playful, minimal, or social.

Every project must get a visual direction appropriate to its own product, audience, and domain.

## Absolute rules

### 1. Never force a fixed palette

Migi wants total freedom across projects.

Do not hardcode a preferred personal color palette into every future project.
Do not reuse an old app palette unless explicitly requested.
Do not say “Migi likes cream/coral/mint/lilac” as a universal rule.

Instead:
- derive the palette from the project’s product category, audience, mood, and brand intent
- propose a palette when missing
- define semantic tokens, not random color classes
- ensure contrast and accessibility
- keep visual identity project-specific

Correct:
```txt
This fintech research app needs a restrained graphite/neutral palette with one signal accent.
```

Incorrect:
```txt
Use warm cream/coral/mint/lilac because Migi likes those colors.
```

### 2. Never make future apps copies of a current app

This folder is not about one app.
Do not reuse app-specific terms like “tiny invite,” “Pull,” “plan room,” or “friend deck” unless the current project actually needs them.

Extract the principle, not the content.

Example principle:
```txt
Use one dominant interaction per screen and hide advanced complexity behind progressive disclosure.
```

Do not copy:
```txt
Make every app have a Pull page with friend cards.
```

### 3. Fight container soup

Migi strongly dislikes pages made of many similar boxes, panels, and nested cards.

Avoid:
- card inside card inside card
- many equal-weight containers
- dashboards where everything screams equally
- form sections created just to group every detail
- empty big boxes pretending to be design

Prefer:
- one dominant focal object per screen
- strong hierarchy
- open composition
- compact secondary controls
- progressive disclosure
- fewer, better surfaces

### 4. Distinguish clickable from non-clickable

A recurring failure is when tags, chips, filters, buttons, and status labels all look the same.

Every component must reveal its role:
- primary action
- secondary action
- selectable chip/filter/toggle
- passive status tag
- navigation item
- metadata label

Passive status labels must not look like buttons.
Selectable filters must have clear selected/unselected states.
Primary actions must be unmistakable.

### 5. Keep flows automatic and low-friction

Migi likes UX that reduces effort.

Prefer:
- one obvious next action
- smart defaults
- direct send / direct action when data is already known
- no unnecessary confirmation modals
- no modal chains
- no making the user configure everything upfront

Avoid:
- surprise second forms
- “send” opening another composer
- overexposed settings
- forcing detailed setup when a fast path exists

### 6. Use progressive disclosure

Show the user what they need now. Hide the rest behind:
- More
- Customize
- details drawer
- bottom sheet
- secondary route

Do not expose every possible option on the main screen.

### 7. Build for premium frontend quality

Migi expects output that feels like a high-end consumer/product team, not a quick prototype.

Polish areas:
- spacing rhythm
- typography hierarchy
- responsive behavior
- button system
- hover/active/focus states
- image crop/focal points
- contrast
- scroll behavior
- empty states
- loading states
- animation quality

### 8. Avoid AI slop

Do not ship generic AI-looking UI:
- random gradients without purpose
- glassmorphism for no reason
- fake dashboard cards
- placeholder copy that sounds synthetic
- low-contrast pastel text
- giant pill buttons stretched across desktop
- creepy generated faces
- repetitive cards with no product logic

### 9. Copy must sound human

Migi dislikes awkward, robotic, cringe, manipulative, or over-explained microcopy.

Good copy is:
- short
- clear
- contextual
- natural
- a little sharp when appropriate

Bad copy is:
- corporate filler
- overly cute
- over-explaining the UI
- creepy profiling language
- repeated phrases
- labels that sound like internal data models

### 10. Always review with the checklist

Before claiming work is done, run `06_review_checklist.md`.

