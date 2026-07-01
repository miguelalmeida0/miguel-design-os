import { useMemo, useState } from "react";
import { promptModeLabels } from "../../data/promptTemplates";
import { copyText, downloadText } from "../../lib/exportUtils";
import { compilePrompt } from "../../lib/promptCompiler";
import type { PromptMode } from "../../types/studio";
import { CommandBlock } from "../shared/CommandBlock";
import { SectionHeader } from "../shared/SectionHeader";

const promptModes = Object.keys(promptModeLabels) as PromptMode[];

export function PromptsScreen() {
  const [task, setTask] = useState("Use Design OS Studio to manage visual workflow");
  const [mode, setMode] = useState<PromptMode>("inspiration-scout");
  const compiledPrompt = useMemo(() => compilePrompt(task, mode), [task, mode]);

  async function copyPrompt() {
    await copyText(compiledPrompt.markdown);
  }

  async function copyCliCommand() {
    await copyText(compiledPrompt.cliCommand);
  }

  function exportMarkdown() {
    downloadText(`studio-${mode}-prompt.md`, compiledPrompt.markdown);
  }

  function exportWorkflowJson() {
    downloadText(`studio-${mode}-workflow.json`, JSON.stringify(compiledPrompt, null, 2), "application/json");
  }

  return (
    <div className="grid gap-8">
      <SectionHeader
        kicker="Prompt compiler"
        title="Local Codex prompts with evidence gates baked in."
        summary="Compile prompts from current workflow state without APIs, hosted tools, or fake visual claims."
      />

      <section className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <label className="grid gap-2 text-sm font-semibold text-zinc-300">
            Task input
            <textarea
              value={task}
              onChange={(event) => setTask(event.target.value)}
              className="min-h-32 rounded-lg border border-white/10 bg-black/35 p-3 text-sm text-mist outline-none focus:border-signal/70"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-zinc-300">
            Agent selector
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value as PromptMode)}
              className="min-h-11 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-mist outline-none focus:border-signal/70"
            >
              {promptModes.map((promptMode) => (
                <option key={promptMode} value={promptMode}>
                  {promptModeLabels[promptMode]}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-3">
            <button type="button" onClick={copyPrompt} className="min-h-11 rounded-lg bg-acid px-4 text-sm font-black text-obsidian transition hover:bg-mist">
              Copy prompt
            </button>
            <button type="button" onClick={exportMarkdown} className="min-h-11 rounded-lg border border-signal/40 px-4 text-sm font-black text-signal transition hover:bg-signal hover:text-obsidian">
              Export prompt markdown
            </button>
            <button type="button" onClick={exportWorkflowJson} className="min-h-11 rounded-lg border border-white/15 px-4 text-sm font-black text-mist transition hover:bg-white hover:text-obsidian">
              Export workflow JSON
            </button>
            <button type="button" onClick={copyCliCommand} className="min-h-11 rounded-lg border border-amber/40 px-4 text-sm font-black text-amber transition hover:bg-amber hover:text-obsidian">
              Copy CLI command
            </button>
          </div>
        </div>

        <article className="rounded-xl border border-white/10 bg-black/35 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">Generated prompt preview</p>
              <h2 className="mt-2 text-2xl font-black text-mist">{promptModeLabels[mode]}</h2>
            </div>
          </div>
          <pre className="mt-5 max-h-[620px] overflow-auto whitespace-pre-wrap rounded-lg border border-white/10 bg-obsidian/80 p-4 text-sm leading-6 text-zinc-200">
            {compiledPrompt.markdown}
          </pre>
          <div className="mt-4">
            <CommandBlock command={compiledPrompt.cliCommand} label="Copy command" />
          </div>
        </article>
      </section>
    </div>
  );
}
