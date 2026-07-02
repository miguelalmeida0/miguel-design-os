# Codex New Frontend Prompt

Work in:
`{{PROJECT_PATH}}`

Protected folders:
`source-projects/`, `captures/`, `raw-chat-input/`

Selected mode:
`{{SELECTED_MODE}}`

Active dials:

- DESIGN_VARIANCE: `{{DESIGN_VARIANCE}}`
- MOTION_INTENSITY: `{{MOTION_INTENSITY}}`
- VISUAL_DENSITY: `{{VISUAL_DENSITY}}`
- ART_DIRECTION: `{{ART_DIRECTION}}`
- IMAGE_USAGE_PRIORITY: `{{IMAGE_USAGE_PRIORITY}}`
- IMPLEMENTATION_CLARITY: `{{IMPLEMENTATION_CLARITY}}`
- MOBILE_NATIVE_FEEL: `{{MOBILE_NATIVE_FEEL}}`
- GRAPH_COMPLEXITY: `{{GRAPH_COMPLEXITY}}`

Required files to read:

- `AGENTS.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/brief-inference-rules.md` for visual-heavy landing, portfolio, marketing, or redesign work
- `design-dna/anti-ai-tell-preflight.md` for landing, portfolio, marketing, or redesign work
- `design-dna/motion-and-delight-rules.md` when motion or delight is planned
- `design-dna/design-generation-dials.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/art-directed-palette-exploration.md` for artistic, cinematic, landing, portfolio, creative, editorial, or experimental work
- `design-dna/oklch-contrast-and-palette-rules.md` when palette, contrast, dark mode, or chart colors matter
- `design-dna/interface-feel-rules.md` before final visual review
- `agent-workflows/frontend-aha-moment-workflow.md`
- `agent-workflows/efficient-agent-implementation-workflow.md`
- `agent-workflows/image-first-frontend-workflow.md` when image/reference-first
- relevant `skills/*/SKILL.md`

Reference anchors:
`{{REFERENCE_ANCHORS}}`

Before coding:

1. Declare the design read: `Reading this as: <page kind/product type> for <audience>, with a <vibe> language, leaning toward <mode/system/aesthetic>.`
2. If no visual direction is approved, create `docs/design/direction-options.md` with Direction A Safe Refined, Direction B Artistic Expressive, and Direction C Unexpected High-Character. Stop and wait for Migi to choose A, B, C, or a hybrid.
3. After Migi chooses, create `docs/design/selected-direction.md`.
4. Create `docs/design/visual-spec.md` from `templates/visual-spec.template.md`.
5. Define design-system tokens before UI implementation.
6. For expressive modes, include 3 palette directions and do not pick the safe option automatically.
7. Run OKLCH/APCA palette logic for significant UI: semantic tokens, APCA/WCAG targets, lightness repair, numeric scale, and dark-mode mapping.
8. If references are used, create reference usage/decomposition artifacts required by Design OS.
9. If landing, portfolio, marketing, or redesign work is involved, run Taste anti-AI-tell preflight before implementing.
10. If motion is planned, define its purpose, frequency profile, durations, reduced-motion behavior, and review route.
11. If delight is planned, define earned moments and what will be avoided.
12. If charts are used, create chart-selection report.
13. If mobile is primary, create or fill `docs/design/mobile-flow-spec.md` and define 390-first flow.

Implementation order:

1. Visual shell and navigation.
2. Frontend aha moment with local/mock data.
3. Working visible interactions.
4. Interface-feel polish: active/focus states, loading/empty/error states, perceived performance, spacing rhythm, and no dead surfaces.
5. Responsive adaptation.
6. Screenshot QA and scorecard.

Run:

- build/lint/test commands available in the project
- screenshot QA when UI can run

Final response contract:

- files changed
- design read
- anti-AI-tell preflight status
- direction options / selected direction
- visual spec path
- design-system tokens summary
- palette exploration
- OKLCH/APCA palette pass
- interface-feel polish pass
- motion/delight strategy if applicable
- interactions verified
- screenshots or blocker
- scorecard/done report status
- remaining weaknesses
