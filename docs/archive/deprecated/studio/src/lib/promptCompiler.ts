import { evidenceGates, finalResponseContract, promptModeLabels } from "../data/promptTemplates";
import { visualAgents } from "../data/agents";
import type { CompiledPrompt, PromptMode } from "../types/studio";

const agentFileByMode: Record<PromptMode, string> = {
  "inspiration-scout": "tooling/agents/catalog/01-inspiration-scout-agent.md",
  "art-direction-concept": "tooling/agents/catalog/02-art-direction-concept-agent.md",
  "literal-target-copy": "tooling/agents/catalog/03-literal-target-copy-agent.md",
  "visual-qa-anti-slop": "tooling/agents/catalog/04-visual-qa-anti-slop-agent.md",
  productionizer: "tooling/agents/catalog/05-productionizer-agent.md"
};

export function compilePrompt(task: string, mode: PromptMode): CompiledPrompt {
  const agent = visualAgents.find((item) => item.id === mode);
  const safeTask = task.trim() || "Use Miguel Design OS Studio to manage a visual frontend workflow";
  const validation = agent?.validationCommands ?? [];
  const artifacts = agent?.requiredArtifacts ?? [];

  const markdown = `# Miguel Design OS Studio Agent Prompt

Project path: /Users/malmeida/Desktop/miguel-design-os
Agent: ${promptModeLabels[mode]}
Task: ${safeTask}

## Protected Folders

- source-projects/
- captures/
- raw-chat-input/

## Relevant Agent Role

${agent?.mission ?? "Run the selected Visual Swarm phase."}

## Required Files To Read

- design-dna/00_COMPACT_AGENT_CONTEXT.md
- docs/internal/automation/AGENTS.md
- ${agentFileByMode[mode]}
- evaluation/ui-scorecard.md

## Required Artifacts

${artifacts.map((artifact) => `- ${artifact}`).join("\n")}

## Evidence Gates

${evidenceGates.map((gate) => `- ${gate}`).join("\n")}

## Validation Commands

${validation.map((command) => `- \`${command}\``).join("\n")}

## Final Response Contract

${finalResponseContract.map((item) => `- ${item}`).join("\n")}

${mode === "productionizer" ? "\nHard rule: No productionization before visual shell approval.\n" : ""}`;

  return {
    agentId: mode,
    task: safeTask,
    mode,
    markdown,
    cliCommand: `node tools/design-os.mjs compile-agent-prompt --agent ${mode} --task "${safeTask.replace(/"/g, "\\\"")}"`,
    generatedAt: new Date().toISOString()
  };
}
