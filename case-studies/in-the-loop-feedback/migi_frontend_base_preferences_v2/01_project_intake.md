# 01 — Project Intake Before Design

Before implementing any UI, define the project-specific direction. Do not import a previous app’s visual identity.

## Required questions to answer internally

1. What kind of product is this?
   - social app
   - portfolio
   - developer tool
   - commerce app
   - finance/research dashboard
   - AI app
   - workflow tool
   - content/media app
   - other

2. What should the product feel like?
   - calm
   - premium
   - playful
   - technical
   - editorial
   - fast
   - trustworthy
   - experimental
   - luxury
   - utilitarian

3. Who is the user?
   - recruiter
   - engineer
   - consumer
   - trader/investor
   - internal operator
   - social group
   - buyer
   - founder

4. What is the primary action on each screen?

5. What complexity should be hidden by default?

6. What visual identity belongs to this project specifically?

## Color / palette policy

Never assume a universal palette.

For every new project:
- choose or propose a unique palette based on project context
- define semantic tokens: `bg`, `surface`, `text`, `muted`, `primary`, `secondary`, `success`, `warning`, `danger`, `border`
- do not bake previous project colors into the base
- check all contrast

## Example palette decisions by product type

These are examples, not rules.

### Developer tool
Likely direction:
- crisp neutrals
- controlled accent color
- high readability
- dense but calm layouts

Avoid:
- playful Gen Z color overload if product is technical

### Social consumer app
Likely direction:
- warmer emotional palette
- expressive accents
- more motion
- direct, friendly copy

Avoid:
- dashboard/admin visual language

### Finance/research app
Likely direction:
- restrained background
- high contrast data states
- semantic color for signals only

Avoid:
- playful decorative colors that hurt trust

### Portfolio/recruiter app
Likely direction:
- premium editorial style
- strong hierarchy
- high polish
- impressive but not gimmicky interactions

Avoid:
- overbuilt fake dashboards

## Output expectation

Before writing major UI code, the agent should state the intended direction briefly:

```txt
Design direction: premium technical/editorial UI, restrained palette, dense but readable, one primary action per screen, no decorative gradients.
```

