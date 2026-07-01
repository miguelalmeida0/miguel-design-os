import type { VisualAgent } from "../types/studio";

export const visualAgents: VisualAgent[] = [
  {
    id: "inspiration-scout",
    name: "Inspiration Scout",
    mission: "Collect, classify, and document inspiration before implementation.",
    inputs: ["task brief", "source queue", "source URLs", "local screenshot policy"],
    outputs: ["inspiration-queue.local.json", "inspiration-manifest.local.json", "top references", "anti-patterns"],
    requiredArtifacts: ["inspiration-library/queues/weekend-visual-corpus.queue.json", "inspiration-manifest.local.json"],
    validationCommands: [
      "node tools/new-inspiration-queue.mjs",
      "node tools/validate-inspiration-queue.mjs inspiration-library/queues/weekend-visual-corpus.queue.json",
      "node tools/design-os.mjs validate-inspiration-manifest inspiration-manifest.local.json"
    ],
    failureConditions: ["Pinterest treated as award proof", "screenshots used as production assets", "missing attribution"]
  },
  {
    id: "art-direction-concept",
    name: "Art Direction Concept",
    mission: "Render three distinct visual concepts before implementation.",
    inputs: ["brief", "inspiration manifest", "rejected directions"],
    outputs: ["visual-concepts.local.json", "preview routes", "390 / 768 / 1440 screenshots"],
    requiredArtifacts: ["studio-preview route or local preview", "docs/concept-runs/<run>/visual-concepts.local.json"],
    validationCommands: [
      "node tools/capture-concepts.mjs --url http://localhost:5174",
      "node tools/design-os.mjs validate-concepts docs/concept-runs/<run>/visual-concepts.local.json"
    ],
    failureConditions: ["text-only concepts", "three palette variants of one layout", "implementation before approval"]
  },
  {
    id: "literal-target-copy",
    name: "Literal Target Copy",
    mission: "Reconstruct supplied exact visual targets without product reinterpretation.",
    inputs: ["target screenshots", "current screenshots", "excluded artifact list"],
    outputs: ["target-copy-report.local.json", "comparison-report.json", "exact differences"],
    requiredArtifacts: ["target-copy-report.local.json", "docs/comparisons/<run>/comparison-report.json"],
    validationCommands: [
      "node tools/compare-screenshots.mjs --target path/to/target.png --current path/to/current.png --name studio-target",
      "node tools/design-os.mjs validate-target-copy target-copy-report.local.json"
    ],
    failureConditions: ["feature expansion before shell parity", "browser/editor/watermark copied", "blocking mismatch approved"]
  },
  {
    id: "visual-qa-anti-slop",
    name: "Visual QA Anti-Slop",
    mission: "Capture evidence, expose blockers, and prevent fake done reports.",
    inputs: ["runnable UI", "target reports", "asset manifest", "done report"],
    outputs: ["visual-qa-report.json", "screenshot report", "blockers", "scorecard result"],
    requiredArtifacts: ["docs/qa-runs/<run>/visual-qa-report.json", "done-report.local.json"],
    validationCommands: [
      "node tools/visual-qa.mjs --url http://localhost:5175 --name design-os-studio",
      "node tools/design-os.mjs validate-visual-qa-report docs/qa-runs/<run>/visual-qa-report.json",
      "node tools/design-os.mjs validate-done-report done-report.local.json"
    ],
    failureConditions: ["build/lint treated as visual QA", "dead buttons", "unresolved visual blockers"]
  },
  {
    id: "productionizer",
    name: "Productionizer",
    mission: "Add app logic only after the visual shell passes.",
    inputs: ["approved concept", "visual QA report", "done report", "local data model"],
    outputs: ["componentized app", "interaction checklist", "post-logic visual QA", "validated done report"],
    requiredArtifacts: ["approved visual shell", "visual-qa-report.json", "done-report.local.json"],
    validationCommands: ["npm run build", "node tools/visual-qa.mjs --url http://localhost:5175 --name design-os-studio"],
    failureConditions: ["product logic before shell approval", "dead visible controls", "composition drift during refactor"]
  }
];
