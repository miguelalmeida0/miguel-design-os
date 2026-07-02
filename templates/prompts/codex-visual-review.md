# Codex Visual Review Prompt

Work in:
`{{PROJECT_PATH}}`

Protected folders:
`source-projects/`, `captures/`, `raw-chat-input/`

Selected mode:
Visual Review / Anti-Slop

Required files to read:

- `AGENTS.md`
- `evaluation/ui-scorecard.md`
- `skills/screenshot-scorecard-review/SKILL.md`
- `skills/anti-ai-slop-review/SKILL.md`
- `skills/frontend-art-director-review/SKILL.md`
- `skills/oklch-contrast-palette/SKILL.md` when palette/contrast/dark mode/color accessibility matters
- `skills/userinterface-wiki/SKILL.md` for broad UI craft, typography, pseudo-elements, audio, UX laws, or perceived performance
- `skills/make-interfaces-feel-better/SKILL.md` when the UI works but feels stiff, dead, generic, or unresponsive
- `skills/anti-ai-tell-preflight/SKILL.md` for landing, portfolio, marketing, or redesign UI
- `skills/review-animations/SKILL.md` and `skills/review-animations/STANDARDS.md` when motion code changed
- `skills/emil-design-engineering/SKILL.md` for component craft and invisible polish review
- `design-dna/brief-inference-rules.md`
- `design-dna/anti-ai-tell-preflight.md`
- `design-dna/motion-and-delight-rules.md`
- `design-dna/design-system-first-rules.md`
- `design-dna/art-directed-palette-exploration.md`

Review against:

- active dials
- reference anchors
- direction options and selected direction when the Three-Direction Mockup Gate applies
- visual spec completeness
- design-system tokens
- layout integrity
- interaction completeness
- mobile fit
- chart intelligence
- palette intelligence
- palette exploration for artistic/cinematic/landing/portfolio/experimental work
- OKLCH/APCA contrast targets and lightness repair
- active feedback, focus states, loading/empty/error states, and interface feel
- brief inference quality
- anti-AI-tell compliance
- motion purpose, duration, easing, reduced-motion behavior
- delight appropriateness
- screenshot evidence

Evidence requirements:

- inspect screenshots at available breakpoints
- name score caps
- do not count build/lint as visual QA

Final response contract:

- findings first
- score caps applied
- design read / preflight status
- direction gate status
- palette exploration status
- motion review verdict if applicable
- OKLCH/APCA issues if applicable
- interface-feel blockers if applicable
- files or screenshots referenced
- fixes required before done
- remaining manual checks
