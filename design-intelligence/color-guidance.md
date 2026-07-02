# Color Guidance

Use `product-color-matrix.json` as a recommendation engine, not as taste law.

## Rules

- Start from selected references and product mood.
- Define semantic tokens before choosing hex values.
- Use accent color selectively.
- Keep state colors distinct from brand accent unless intentionally linked.
- Avoid terminal green, AI purple, neon lime, and generic blue/grey defaults unless references justify them.
- Do not use color alone to communicate chart or status meaning.
- If image-led, extract palette from image atmosphere and protect legibility.
- For artistic, cinematic, landing, portfolio, creative, editorial, or experimental work, explore three palette directions before locking tokens: safe refined, artistic expressive, and unexpected high-character.
- Do not choose the safe option automatically when the concept can support stronger color.
- Bold color is allowed when OKLCH/APCA contrast and readability hold.

## Required Output

In `docs/design/visual-spec.md`, include:

- palette family
- token roles
- reference/product reasoning
- accent role
- state-color role
- chart color relationship
- known palette failure avoided
- palette exploration options for expressive modes
- selected palette and why it beat the other options

## Blockers

- palette selected with no reasoning
- accent used everywhere
- text contrast fails
- chart colors conflict with state/action meaning
- palette feels machine-generated
- expressive mode uses muddy/generated-app defaults without palette exploration
