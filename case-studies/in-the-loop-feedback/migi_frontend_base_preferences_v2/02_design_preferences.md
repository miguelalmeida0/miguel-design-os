# 02 — Design / UX Preferences

These are broad preferences extracted from repeated feedback. They are not tied to one app.

## Migi likes

### 1. Strong single-screen hierarchy

A screen should have a clear focal point.

Good:
- one dominant hero interaction
- one main card or object
- one obvious CTA
- supporting elements clearly secondary

Bad:
- every card has the same visual weight
- five sections compete above the fold
- grids of equal panels with no hierarchy

### 2. Fluid, modern composition

Migi prefers pages that feel intentionally composed, not like stacked Bootstrap cards.

Good:
- asymmetry when useful
- one strong object plus supporting reel/sidebar/strip
- open spacing used intentionally
- important content integrated into one cohesive object

Bad:
- box after box after box
- every concept inside a bordered container
- layout feels like a wireframe filled with cards

### 3. Progressive disclosure

Good UX should not show every option immediately.

Good:
- primary action visible
- secondary options in More/Customize/sheet
- details hidden until needed

Bad:
- all filters, modes, settings, and actions visible at once
- “CTA soup”
- making users configure every detail before acting

### 4. Fast, automatic flows

Migi likes when the app feels smart and reduces manual work.

Good:
- prefilled defaults
- inferred details
- direct send when ready
- generated/suggested next action
- one-tap flows

Bad:
- action opens another form
- unnecessary confirmation dialogs
- re-entering data the UI already knows
- users manually assembling obvious defaults

### 5. Premium buttons

Buttons should feel designed, not default.

Good:
- consistent variants
- clean hierarchy
- polished radius/padding/icon alignment
- no giant stretched desktop slabs
- clear hover/active/focus/disabled states

Bad:
- huge raw-red pill across desktop
- thick dark borders on primary actions
- all actions same visual weight
- secondary controls competing with primary

### 6. Human copy

Good:
- short
- contextual
- natural
- decisive
- not over-explained

Bad:
- robotic labels
- cringe filler
- manipulative language
- generated-sounding phrases
- repeating the same idea twice

### 7. Image treatment with intent

If people/product imagery is used, it must be cropped and integrated properly.

Good:
- focal points
- full-bleed where appropriate
- no awkward thumbnail framing
- images support emotional hierarchy

Bad:
- faces cut off
- portrait photos treated like landscape banners
- white borders around images when not part of the concept
- creepy or uncanny generated avatars

### 8. Clear responsive behavior

Good:
- desktop is not just stretched mobile
- mobile keeps the main action visible
- nav does not cover content
- safe areas respected
- no awkward first-fold cutoffs

Bad:
- hero actions below fold
- bottom nav covering content
- wide desktop with tiny centered mobile card unless intentional
- hidden key content behind scroll

## Migi dislikes

### 1. Container soup

Too many panels, boxes, cards, borders, and nested surfaces.

Specific failure example:
```txt
A page with a hero card, side panel, status card, option card, action card, and footer card all visible at once, all with similar borders.
```

### 2. Dashboard energy when the app should be social/consumer

Specific failure example:
```txt
A social planning screen that looks like a task board or admin control panel.
```

### 3. Form energy for fast actions

Specific failure example:
```txt
A tiny invite flow that shows message, time, place, tone, vibe, recipients, advanced options, and validation all at once.
```

### 4. CTA soup

Specific failure example:
```txt
A screen with Send, Open, Warm it up, Join, Deal, Customize, More, Ask, Spin, Nudge all visible in the same area.
```

### 5. Ambiguous chips

Specific failure example:
```txt
Status labels, filters, buttons, tags, and toggles all styled as similar rounded pills.
```

### 6. Low contrast / unreadable UI

Specific failure example:
```txt
Pastel text on pastel backgrounds, gray text over dark overlays, or red/orange buttons with dark low-contrast labels.
```

### 7. Creepy avatar/profile treatment

Specific failure example:
```txt
Fake cartoon faces, uncanny AI portraits, friend cards described with weakness/danger/bait language.
```

### 8. Overexplained product copy

Specific failure example:
```txt
A card that says the friend name, status, why it works, a section label, the generated sentence, chips, and a hint all at once.
```

### 9. Desktop buttons that look like stretched mobile buttons

Specific failure example:
```txt
A full-width red pill CTA spanning almost the entire desktop content area.
```

### 10. Feature duplication

Specific failure example:
```txt
Showing a full detailed builder inside a fast route even though the app already has a dedicated + composer for detailed creation.
```

