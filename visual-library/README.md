# Visual Library

This folder is Migi's lightweight visual memory.

It exists so future frontend agents can quickly inspect what Migi likes, what Migi rejects, and what principles should guide a new interface.

## Folders

- `approved/`: UI references Migi likes. These teach composition, taste, interaction feel, hierarchy, and restraint.
- `rejected/`: UI references Migi dislikes. These teach anti-patterns and failure modes.
- `inspiration/`: useful references that are not yet approved as global taste.
- `case-studies/`: short writeups about specific wins, failures, and dogfood lessons.
- `templates/`: note templates for documenting screenshots.

## Rules

- Screenshots are design evidence, not production assets.
- Approved references teach composition and taste; they are not palettes or brands to clone blindly.
- Rejected references are valuable because they name what future agents must avoid.
- Every screenshot should have a matching `.md` note using `templates/reference-note.template.md`.
- Do not copy colors, brands, logos, proprietary assets, or product layouts blindly.
- Extract principles unless Migi explicitly says Literal Target Copy Mode is active.
- If Migi says `copy this exact UI`, `100% this design`, `literally what you see`, or `exact visual target`, use Literal Target Copy Mode and copy only the supplied visual target while excluding browser/editor/watermark artifacts.

## What To Extract

- composition
- focal object
- density
- visual hierarchy
- interaction model
- what is hidden or delayed
- what makes the screen desirable
- what future agents should not repeat

The goal is not to make a museum. The goal is to make future work faster, sharper, and less generic.
