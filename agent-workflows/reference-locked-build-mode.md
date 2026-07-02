# Reference-Locked Build Mode

Use this workflow when Migi asks to base a design on a specific visual-library folder or a specific set of screenshots.

Reference-Locked Build Mode prevents vague inspiration use. The agent must select exact reference anchors, decompose them, translate their mechanics into the target app, and compare the final output back to those anchors.

## Triggers

Activate this mode when Migi says:

- use dashboard folder
- use creative folder
- use landing-page folder
- base it on these screenshots
- make it like these references
- follow the same approach as these apps
- use this visual-library folder

If Migi asks for exact visual copying instead, use Literal Target Copy Mode.

## Required Before Implementation

### 1. Select 3-5 Reference Anchors

Do not proceed from folder vibes. Select specific files or screenshots.

Each anchor must have one or more roles:

- composition anchor
- palette/material anchor
- graph/component anchor
- image/object/media anchor
- responsive/layout anchor

For each anchor, state why it was selected and what it is allowed to teach.

### 2. Create Reference Decomposition

Create:

`docs/design/reference-decomposition.md`

Use:

`templates/reference-decomposition.template.md`

For each anchor, decompose:

- canvas
- composition
- density
- typography
- charts/data
- image/object/media
- palette/material
- interaction model
- what to transfer
- what not to copy

### 3. Create Design Transfer Spec

Create:

`docs/design/design-transfer-spec.md`

Use:

`templates/design-transfer-spec.template.md`

The spec must translate the reference mechanics into the target app. It must include:

- chosen visual mode
- primary composition strategy
- layout skeleton
- panel hierarchy
- graph system
- image/object/media strategy
- palette/material strategy
- typography scale
- navigation strategy
- responsive strategy
- forbidden drift
- acceptance criteria

## Build Segments

Implementation must follow the design transfer spec and build in segments:

1. shell/nav
2. attraction zone
3. chart/data system
4. queue/list system
5. action/output system
6. responsive adaptation

Do not add product panels, alternate layouts, or generic dashboard furniture that is not supported by the transfer spec.

## Required After Implementation

Create:

`docs/qa/reference-match-report.md`

Include:

- what matched
- what missed
- density comparison
- composition comparison
- palette comparison
- chart comparison
- image/object comparison
- responsiveness comparison
- next patch required

## Stop Conditions

- Stop if exact reference anchors are not selected.
- Stop if anchor roles are not assigned.
- Stop if `docs/design/reference-decomposition.md` does not exist before coding.
- Stop if `docs/design/design-transfer-spec.md` does not exist before coding.
- Stop if the design transfer spec only describes vibe, mood, or style tokens.
- Stop if implementation starts from generic layout instead of the spec.
- Stop if final handoff has no `docs/qa/reference-match-report.md`.

## Handoff

```md
Reference-Locked Build Mode: active/inactive
Reference anchors:
Anchor roles:
Reference decomposition:
Design transfer spec:
Build segments completed:
Reference match report:
Known mismatches:
Next patch:
```
