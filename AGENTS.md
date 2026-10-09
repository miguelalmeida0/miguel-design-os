# Miguel Design OS: working instructions

Build a personal design engine for Miguel. His references and explicit corrections are the taste standard. The output is an accepted, working interface in the existing project. Measure his review time and time to acceptance.

## Start a task

1. Verify the actual repository, working tree and project instructions. Preserve uncommitted work, original assets, `source-projects/`, `captures/` and `raw-chat-input/`.
2. Read this file. Load specialist guidance only for a concrete need; historical rulebooks are not default context.
3. Use `node tools/design-os.mjs taste status` to check saved evidence. If absent, import the user's private profile with `taste import --from <file>`. Do not invent preferences or silently replace a profile.
4. For design work, capture the project audience, primary object, primary action and context before designing. Infer facts already supplied. Ask only genuinely blocking questions; never repeat known preferences.
5. Run `node tools/design-os.mjs start --brief <private-brief.json>`. It returns a small packet with relevant references and scoped corrections. A packet is preparation, not a generated or verified interface.
6. Open the exact selected reference images with the host image viewer. Record what each contributes: composition, hierarchy, scale, typography, material, imagery or a component behavior. Notes cannot replace pixel inspection.
7. Build in the existing target project. Use one grounded direction when evidence supports it. Offer alternatives only for a meaningful unresolved choice or when Miguel asks.
8. Verify visible interactions and responsive states in a real browser. Report exactly what ran and what remains untested. Record Miguel's subsequent correction at the smallest accurate scope.

## Taste and memory

- **Never use handwritten typography, lettering, annotations or scribbled notes.** A reference containing those elements does not override this rule.
- Present inspiration simply as **References**, with direct image access. Approval categories and generated-project QA screenshots are not the reference gallery.
- Contexts differ. Mobile onboarding, a dense work surface and an editorial site must not converge on one averaged palette or layout.
- The user's endorsement of an image is explicit evidence. Individual visual features remain agent observations until Miguel confirms them.
- Repository notes and inferred historical preferences are not verified global instructions. Retrieve relevant failure evidence to prevent specific bugs; do not let it prescribe a universal aesthetic.
- Use `feedback --quote "<exact correction>" --scope <global|context|project> --key <topic> --source "<message/date>"` with the matching `--context` or `--project`. Do not promote a project correction globally. New corrections supersede the same topic only within the same scope; retain history.
- Reference retrieval and preference memory are personalization. They are not model training.

## Engineering and UX

- Keep modules small, defaults useful and common operations fast. Reuse existing tools. Read a compact derived index rather than loading every reference note or skill into a prompt.
- Use semantic tokens and a clear hierarchy suited to the selected references. Make the primary action evident and navigation understandable. Preserve readable hover, focus, active, selected, disabled and error states.
- Test keyboard/focus behavior, loading/empty/error states, real content lengths, mobile safe areas and intermediate viewport widths when relevant.
- Motion needs a purpose. Frequent actions must feel immediate. Prefer transform/opacity, interruptible transitions, bounded blur, explicit properties and reduced-motion behavior. Do not add motion to compensate for unclear UX.
- A screenshot cannot prove a working interaction or animation. Build/lint cannot prove visual quality. Fix clipping, collisions, obscured text and broken navigation before claiming completion.
- Keep the current browser integrity tools and their safety checks. Do not weaken an existing gate to get a pass.

## Load only what this task needs

| Need | Existing guidance/tools |
| --- | --- |
| Transfer reference grammar | `skills/reference-grammar-compiler/SKILL.md` |
| Component craft | `skills/emil-design-engineering/SKILL.md` |
| Motion | `skills/motion-craft-director/SKILL.md`, `skills/review-animations/SKILL.md` |
| Cinematic choreography | `skills/advanced-motion-choreography/SKILL.md` |
| Color and contrast | `skills/oklch-contrast-palette/SKILL.md` |
| Mobile flows | `skills/mobile-product-flow/SKILL.md` |
| Charts or spatial objects | `skills/chart-system-director/SKILL.md`, `skills/diagram-canvas-system/SKILL.md` |
| Reproduce a reported failure | `tools/failure-memory-search.mjs` |
| Browser layout integrity | `tools/final-ui-integrity-check.mjs` |

## Boundaries

Keep references, client material, briefs, profiles and packets private in `.design-os-private/` or an explicitly designated private directory. No destructive Git operations, public publishing, deployment, outreach, paid APIs or new charges without separate authorization. Do not assume Claude subscription credits provide standalone API access. Do not build a Studio, moodboard application, generic dashboard or substitute product as a shortcut to proving this engine.

Current user instructions take precedence over old templates. `docs/archive/` retains history for traceability; it is not part of normal task startup. The legacy CLI remains available for its explicit validation workflows.
