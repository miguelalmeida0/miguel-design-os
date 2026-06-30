# 04 — Anti-Patterns to Avoid

These are recurring failures Migi has strongly rejected.

## 1. Container Soup

### What it looks like
- everything is inside rounded rectangles
- nested cards inside cards
- too many borders
- no clear focal point

### Why it fails
It makes the app feel like a dashboard/prototype instead of a premium product.

### Fix
- merge related content into one object
- remove unnecessary wrappers
- use spacing, typography, tint, and hierarchy instead of borders

## 2. Chip Soup

### What it looks like
Long strings of pills with mixed meanings:
- counters
- suggestions
- filters
- actions
- statuses
all in one row.

### Fix
Separate into:
- passive pulse/status
- selectable filters
- ready-made suggestions
- primary actions

## 3. Form Disguised as Fun

### What it looks like
A “fun” feature still asks the user to configure person, vibe, time, place, tone, recipient, option, and confirmation.

### Fix
Use smart defaults and one-tap actions. Put detailed editing in Customize or a dedicated route.

## 4. Generic Dashboard

### What it looks like
A consumer/social/product route becomes a grid of equal cards with many small actions.

### Fix
Use one dominant object and progressive disclosure.

## 5. Poor Image Cropping

### What it looks like
- portrait faces cut off
- person photos used as landscape banners
- avatars pasted into white frames
- inconsistent photo quality

### Fix
- use focal points
- object-position per image/person
- portrait-safe aspect ratios
- full-bleed or intentionally contained imagery
- avoid uncanny placeholder assets

## 6. Button Amateurism

### What it looks like
- giant full-width CTA on desktop
- raw red/error-like primary button
- heavy dark outline
- all buttons same weight
- disconnected action clusters

### Fix
- define primary/secondary/tertiary variants
- attach CTAs to decision point
- use content-based widths on desktop
- use full width only when appropriate on mobile

## 7. Low Contrast UI

### What it looks like
- pastel text on pastel surfaces
- dark text on dark overlays
- muted gray on image gradients
- orange/red buttons with unreadable text

### Fix
- check contrast
- use white text on dark scrims
- use dark text on light surfaces
- never rely only on text shadow

## 8. Awkward AI Copy

### What it looks like
- “Mia-shaped plan”
- “Theo only wants tiny”
- “Weakness / Danger / Bait” friend labels
- repeated concepts like “low pressure dinner? no pressure”

### Fix
- write like a human
- keep copy short
- avoid weird psychological framing
- avoid repeating the same concept

## 9. Modal Chains

### What it looks like
User completes a choice, clicks Send, then another modal opens asking them to send again.

### Fix
If the action is ready, send directly. Use Customize for editing.

## 10. Bottom Nav Collision

### What it looks like
Global nav overlaps content or hides key actions.

### Fix
- safe-area padding
- viewport-aware layout
- content ends above nav
- no hidden primary CTA

