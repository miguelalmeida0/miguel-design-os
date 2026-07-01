import { useState } from "react";
import { visualAgents } from "../../data/agents";
import { compilePrompt } from "../../lib/promptCompiler";
import { copyText } from "../../lib/exportUtils";
import type { VisualAgent } from "../../types/studio";
import { CommandBlock } from "../shared/CommandBlock";
import { SectionHeader } from "../shared/SectionHeader";

export function AgentsScreen() {
  const [selectedId, setSelectedId] = useState(visualAgents[0].id);
  const selectedAgent = visualAgents.find((agent) => agent.id === selectedId) as VisualAgent;

  async function copyAgentPrompt() {
    await copyText(compilePrompt(`Run ${selectedAgent.name} for the active Studio workflow`, selectedAgent.id).markdown);
  }

  return (
    <div className="grid gap-8">
      <SectionHeader
        kicker="Visual Swarm agents"
        title="Five local agents, clear ownership, no fake handoff."
        summary="Each agent owns a phase, required artifacts, validation commands, and explicit failure conditions."
      />

      <section className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-3">
          {visualAgents.map((agent, index) => (
            <button
              key={agent.id}
              type="button"
              onClick={() => setSelectedId(agent.id)}
              className={`rounded-xl border p-4 text-left ${selectedId === agent.id ? "border-acid bg-acid/10" : "border-white/10 bg-white/[0.04] hover:border-signal/50"}`}
            >
              <span className="text-sm font-black text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-xl font-black text-mist">{agent.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{agent.mission}</p>
            </button>
          ))}
        </div>

        <article className="rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">Selected agent</p>
          <h2 className="mt-2 text-3xl font-black text-mist">{selectedAgent.name}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{selectedAgent.mission}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <AgentList title="Inputs" items={selectedAgent.inputs} />
            <AgentList title="Outputs" items={selectedAgent.outputs} />
            <AgentList title="Required artifacts" items={selectedAgent.requiredArtifacts} />
            <AgentList title="Failure conditions" items={selectedAgent.failureConditions} danger />
          </div>

          <div className="mt-6 grid gap-3">
            <h3 className="text-sm font-black uppercase tracking-[0.1em] text-signal">Validation commands</h3>
            {selectedAgent.validationCommands.map((command) => (
              <CommandBlock key={command} command={command} />
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <button type="button" onClick={copyAgentPrompt} className="min-h-11 rounded-lg bg-acid px-4 text-sm font-black text-obsidian transition hover:bg-mist">
              Copy agent prompt
            </button>
            <CommandBlock command='node tools/design-os.mjs route-agent --task "Use Design OS Studio to manage visual workflow"' label="Copy route-agent" />
            <CommandBlock command={`node tools/design-os.mjs compile-agent-prompt --agent ${selectedAgent.id} --task "Use Design OS Studio to manage visual workflow"`} label="Copy compiler" />
          </div>
        </article>
      </section>
    </div>
  );
}

function AgentList({ title, items, danger = false }: { title: string; items: string[]; danger?: boolean }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <h3 className={`text-xs font-black uppercase tracking-[0.1em] ${danger ? "text-danger" : "text-zinc-500"}`}>{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-300">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
