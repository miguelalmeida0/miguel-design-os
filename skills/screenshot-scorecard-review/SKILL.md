# screenshot-scorecard-review

## Name

screenshot-scorecard-review

## Description

Evidence-based screenshot review for responsive quality, overlap, readability, scorecard blockers, and final handoff readiness.

## Use When

- Screenshots exist.
- The UI can run.
- The task is frontend QA, final verification, review, or fix-until-elite.
- The user asks to prove responsiveness or quality.
- Visual Swarm v1 reaches the Visual QA Anti-Slop phase.

## Do Not Use When

- No UI surface exists.
- The task is documentation-only.
- The work is backend-only.

## Required Inputs

- Screenshots at `390`, `768`, and `1440`, or a runnable UI.
- Route or screen under review.
- Product type.
- Design Intent Record.
- Approved rendered concept when relevant.
- Visual Concept Gate artifact when visual-heavy work applies.
- Done report artifact before final handoff.
- Core loop proof when the product depends on upload, classification, generation, selection, or persistence.
- Persistence truth for user-generated data across route changes, refresh, and browser reopen.
- Dogfood target checklist when the app exists to test Miguel Design OS.
- Asset manifest for production image-led work.
- Target-copy report when Literal Target Copy Mode applies.

## Files To Read

- `evaluation/ui-scorecard.md`
- `design-dna/00_COMPACT_AGENT_CONTEXT.md`
- `design-dna/responsive-rules.md`
- `design-dna/clickable-vs-static-rules.md`

## Workflow

1. Capture or inspect `390`, `768`, and `1440`.
2. Prefer local capture with `node tools/visual-qa.mjs --url <url> --name <name>` when the UI can run.
3. Run `node tools/object-swap-check.mjs --url <url> --objects "<objects>" --name <name>` for roster, gallery, configurator, and selection-first products.
4. For visual-heavy work, verify the Visual Concept Gate had exactly 3 rendered concepts with preview routes and concept screenshots before implementation.
5. Check mobile first for horizontal scroll, clipping, sticky collision, and unreadable UI.
6. Check tablet for cramped desktop or broken mobile layout.
7. Check desktop for stretched mobile, empty expanses, or inflated scale.
8. Check every viewport for overlap/collision.
9. Manually verify the core loop when it is upload -> classify -> generate output, import -> analyze -> recommend, select -> configure -> output, or equivalent.
10. Verify persistence claims for user-generated data across route changes, refresh, and browser reopen.
11. For dogfood targets, map every target-app failure back to a Miguel Design OS rule/tool/prompt/checklist patch or explicit open gap.
12. Run `evaluation/ui-scorecard.md`.
13. Apply caps.
14. Validate `asset-manifest.local.json` when production image-led work is involved.
15. Validate `target-copy-report.local.json` when Literal Target Copy Mode applies.
16. Create or update `done-report.local.json`.
17. Run `node tools/design-os.mjs validate-done-report done-report.local.json`.
18. Patch blockers before completion when implementation is in scope.
19. Re-check changed screens.

## Stop Conditions

- Stop if a required viewport is missing and the UI can run.
- Stop if visual-heavy work asks for approval from text-only concepts or missing concept screenshots.
- Stop if horizontal scroll appears in the primary mobile flow.
- Stop if unintended overlap or unreadable UI appears.
- Stop if scorecard blockers remain but the task claims completion.
- Stop if an upload/classify/generate core loop is not manually verified and documented.
- Stop if user-generated data persistence is not specified across route changes, refresh, and browser reopen.
- Stop if UI count says `0` while uploaded or user-generated data exists.
- Stop if browser chrome, dock, desktop, or editor UI is used as screenshot proof.
- Stop if a dogfood target failure is not translated back into a Miguel Design OS patch or explicit open gap.
- Stop if work drifts into a parallel product, Studio feature, or control app while the active goal is dogfooding a target app.
- Stop if visual UI work has no validated done report before final handoff.
- Stop if visual UI work has no visual QA report when the UI can run.
- Stop if Literal Target Copy Mode has no validated target-copy report.
- Stop if production image-led work has no validated asset manifest.

## Output Contract

```md
Screenshots inspected:
Concept screenshots inspected:
390 result:
768 result:
1440 result:
Scorecard result:
Done report:
Target-copy report:
Asset manifest:
Core loop proof:
Persistence truth:
Dogfood learning:
Caps applied:
Blockers:
Patch pass completed: yes/no
Remaining verification gaps:
```

## Scorecard Blockers

- No `390 / 768 / 1440` proof: max score 8.
- Text-only concepts for visual-heavy work: max score 5.
- Art direction approval requested without visual previews: max score 5.
- Missing concept screenshots: max score 6.
- Implementation before visual concept approval: max score 6.
- Unintended overlap/collision: max score 6.
- Mobile horizontal scroll: cap applies.
- Unreadable or clipped primary UI: prevents elite.
- Missing scorecard result: prevents elite.
- Missing validated done report for visual UI work: max score 6.
- Missing target-copy report during Literal Target Copy Mode: max score 6.
- Missing asset manifest for production image-led work: max score 6.
- Dead button in primary UI: max score 6.
- Watermark/editor/browser artifact: max score 4.
- UI count says 0 while uploaded/user data exists: max score 4.
- Upload/classify/generate core loop unverified: max score 6.
- User-generated persistence unspecified: max score 6.
- Browser chrome/dock/desktop/editor UI used as proof: max score 6.
- Dogfood target with no Design OS learning patch: max score 6.
- Parallel-product drift during target dogfood: max score 6.

## Safety/Scope Rules

- Do not claim "responsive" without viewport evidence.
- Do not rely on old Design OS captures as proof for the current UI.
- Do not accept browser chrome, dock, desktop, or editor UI screenshots as app QA evidence.
- Do not claim a product loop works until it has been manually verified from input through output.
- Do not claim persistence unless route changes, refresh, and browser reopen behavior are known and disclosed.
- Do not let dogfood target failures remain only in the target app; patch Miguel Design OS or name the open gap.
- Do not add external screenshot dependencies inside this skill.
- Do not claim done from build/lint alone; visual work needs screenshot evidence and a validated done report.
- Treat visual target screenshots as evidence only, never production assets.
- If the UI cannot run, report the run command, error, and best alternate evidence.
