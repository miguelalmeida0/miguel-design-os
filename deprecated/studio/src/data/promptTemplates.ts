import type { PromptMode } from "../types/studio";

export const promptModeLabels: Record<PromptMode, string> = {
  "inspiration-scout": "Inspiration Scout",
  "art-direction-concept": "Art Direction Concept",
  "literal-target-copy": "Literal Target Copy",
  "visual-qa-anti-slop": "Visual QA Anti-Slop",
  productionizer: "Productionizer"
};

export const evidenceGates = [
  "No done without evidence.",
  "Build/lint is not visual QA.",
  "Visual work needs 390 / 768 / 1440 proof.",
  "Literal Target Copy Mode needs target-copy and comparison reports.",
  "Production imagery needs an asset manifest.",
  "Protected folders stay untouched: source-projects/, captures/, raw-chat-input/."
];

export const finalResponseContract = [
  "files changed",
  "screens built",
  "interactions implemented",
  "commands run",
  "build/lint result",
  "visual QA status",
  "remaining weaknesses",
  "protected folder confirmation"
];
