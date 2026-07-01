import { useState } from "react";
import { compilePrompt } from "../../lib/promptCompiler";
import { copyText } from "../../lib/exportUtils";
import type { TargetCopyItem } from "../../types/studio";
import { Field } from "../shared/Field";
import { SectionHeader } from "../shared/SectionHeader";
import { StatusPill } from "../shared/StatusPill";
import { CommandBlock } from "../shared/CommandBlock";

export function TargetCopyScreen({
  items,
  onItemsChange
}: {
  items: TargetCopyItem[];
  onItemsChange: (items: TargetCopyItem[]) => void;
}) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const [newDifference, setNewDifference] = useState("");
  const selected = items.find((item) => item.id === selectedId) ?? items[0];

  function updateItem(itemId: string, update: Partial<TargetCopyItem>) {
    onItemsChange(items.map((item) => (item.id === itemId ? { ...item, ...update } : item)));
  }

  function addDifference() {
    if (!selected || !newDifference.trim()) return;
    updateItem(selected.id, { differences: [...selected.differences, newDifference.trim()] });
    setNewDifference("");
  }

  function toggleMismatch(mismatchId: string) {
    if (!selected) return;
    updateItem(selected.id, {
      mismatches: selected.mismatches.map((mismatch) => (
        mismatch.id === mismatchId ? { ...mismatch, blocking: !mismatch.blocking } : mismatch
      ))
    });
  }

  async function copyPrompt() {
    await copyText(compilePrompt("Copy this exact UI target", "literal-target-copy").markdown);
  }

  return (
    <div className="grid gap-8">
      <SectionHeader
        kicker="Literal Target Copy Mode"
        title="When Migi says copy exactly, product thinking stops."
        summary="This screen tracks target paths, current screenshots, excluded artifacts, exact differences, and shell parity approval."
      />

      <section className="rounded-2xl border border-danger/30 bg-danger/10 p-5">
        <h2 className="text-xl font-black text-danger">Visual shell parity comes first.</h2>
        <p className="mt-2 text-sm text-zinc-300">No feature expansion, usefulness pass, extra panels, reinterpretation, or product logic before parity approval.</p>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`rounded-xl border p-4 text-left ${selected?.id === item.id ? "border-acid bg-acid/10" : "border-white/10 bg-white/[0.04]"}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black text-mist">{item.screen}</h3>
                <StatusPill value={item.shellParityApproved ? "passed" : "blocked"} />
              </div>
              <p className="mt-3 text-sm text-zinc-400">Target: {item.targetPath || "missing"}</p>
              <p className="mt-1 text-sm text-zinc-400">Current: {item.currentPath || "missing"}</p>
            </button>
          ))}
        </div>

        {selected && (
          <article className="rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">Target screen</p>
                <h2 className="mt-2 text-3xl font-black text-mist">{selected.screen}</h2>
              </div>
              <button
                type="button"
                onClick={() => updateItem(selected.id, { shellParityApproved: !selected.shellParityApproved })}
                className="min-h-11 rounded-lg border border-acid/40 px-4 text-sm font-black text-acid transition hover:bg-acid hover:text-obsidian"
              >
                {selected.shellParityApproved ? "Reopen parity" : "Approve shell parity"}
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Target screenshot path" value={selected.targetPath} onChange={(value) => updateItem(selected.id, { targetPath: value })} />
              <Field label="Current screenshot path" value={selected.currentPath} onChange={(value) => updateItem(selected.id, { currentPath: value })} />
            </div>

            <div className="mt-6 grid gap-3">
              <h3 className="text-sm font-black uppercase tracking-[0.1em] text-signal">Excluded artifacts</h3>
              <div className="flex flex-wrap gap-2">
                {selected.excludedArtifacts.map((artifact) => (
                  <span key={artifact} className="rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-amber">
                    {artifact}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <h3 className="text-sm font-black uppercase tracking-[0.1em] text-signal">Exact differences</h3>
              {selected.differences.map((difference) => (
                <p key={difference} className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-sm text-zinc-300">{difference}</p>
              ))}
              <div className="grid gap-2 md:grid-cols-[1fr_auto]">
                <Field label="Add difference" value={newDifference} onChange={setNewDifference} placeholder="Describe exact target/current difference" />
                <button type="button" onClick={addDifference} className="min-h-11 self-end rounded-lg bg-acid px-4 text-sm font-black text-obsidian transition hover:bg-mist">
                  Add difference
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <h3 className="text-sm font-black uppercase tracking-[0.1em] text-signal">Remaining mismatches</h3>
              {selected.mismatches.map((mismatch) => (
                <button
                  key={mismatch.id}
                  type="button"
                  onClick={() => toggleMismatch(mismatch.id)}
                  className={`rounded-lg border p-3 text-left text-sm transition ${
                    mismatch.blocking ? "border-danger/35 bg-danger/10 text-danger" : "border-acid/35 bg-acid/10 text-acid"
                  }`}
                >
                  {mismatch.description} - {mismatch.blocking ? "blocking" : "non-blocking"}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <button type="button" onClick={copyPrompt} className="min-h-11 rounded-lg border border-signal/40 px-4 text-sm font-black text-signal transition hover:bg-signal hover:text-obsidian">
                Copy target-copy Codex prompt
              </button>
              <CommandBlock command="node tools/compare-screenshots.mjs --target path/to/target.png --current path/to/current.png --name design-os-studio" label="Copy compare command" />
            </div>
          </article>
        )}
      </section>
    </div>
  );
}
