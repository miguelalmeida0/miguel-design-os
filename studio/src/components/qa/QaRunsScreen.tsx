import { useState } from "react";
import { copyText } from "../../lib/exportUtils";
import { unresolvedBlockerCount } from "../../lib/statusEngine";
import type { QaCheck, QaRun } from "../../types/studio";
import { CommandBlock } from "../shared/CommandBlock";
import { Field } from "../shared/Field";
import { SectionHeader } from "../shared/SectionHeader";
import { StatusPill } from "../shared/StatusPill";

const checkCycle: Record<QaCheck["status"], QaCheck["status"]> = {
  manual: "pass",
  pass: "fail",
  fail: "manual"
};

export function QaRunsScreen({ runs, onRunsChange }: { runs: QaRun[]; onRunsChange: (runs: QaRun[]) => void }) {
  const [selectedRunId, setSelectedRunId] = useState(runs[0]?.id ?? "");
  const [newBlocker, setNewBlocker] = useState("");
  const selectedRun = runs.find((run) => run.id === selectedRunId) ?? runs[0];

  function updateRun(runId: string, update: Partial<QaRun>) {
    onRunsChange(runs.map((run) => (run.id === runId ? { ...run, ...update } : run)));
  }

  function toggleCheck(checkId: string) {
    if (!selectedRun) return;
    updateRun(selectedRun.id, {
      checks: selectedRun.checks.map((check) => (check.id === checkId ? { ...check, status: checkCycle[check.status] } : check))
    });
  }

  function addBlocker() {
    if (!selectedRun || !newBlocker.trim()) return;
    updateRun(selectedRun.id, {
      blockers: [...selectedRun.blockers, { id: `blocker-${Date.now()}`, text: newBlocker.trim(), resolved: false }]
    });
    setNewBlocker("");
  }

  function toggleBlocker(blockerId: string) {
    if (!selectedRun) return;
    updateRun(selectedRun.id, {
      blockers: selectedRun.blockers.map((blocker) => (blocker.id === blockerId ? { ...blocker, resolved: !blocker.resolved } : blocker))
    });
  }

  async function copyQaCommand() {
    await copyText("node tools/visual-qa.mjs --url http://localhost:5175 --name design-os-studio");
  }

  return (
    <div className="grid gap-8">
      <SectionHeader
        kicker="Visual QA evidence"
        title="Build and lint are not visual QA."
        summary="QA runs track viewport screenshots, manual visual checks, blockers, done report status, and asset manifest status."
      />

      {selectedRun && unresolvedBlockerCount(selectedRun) > 0 && (
        <section className="rounded-2xl border border-danger/40 bg-danger/10 p-5">
          <h2 className="text-2xl font-black text-danger">Visual evidence blocked</h2>
          <p className="mt-2 text-sm text-zinc-300">Resolve blockers or document why capture is unavailable before claiming done.</p>
        </section>
      )}

      <section className="grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
        <div className="grid gap-3">
          {runs.map((run) => (
            <button
              key={run.id}
              type="button"
              onClick={() => setSelectedRunId(run.id)}
              className={`rounded-xl border p-4 text-left ${selectedRun?.id === run.id ? "border-acid bg-acid/10" : "border-white/10 bg-white/[0.04]"}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-black text-mist">{run.name}</h3>
                <StatusPill value={run.status} />
              </div>
              <p className="mt-3 text-sm text-zinc-400">{unresolvedBlockerCount(run)} unresolved blockers</p>
            </button>
          ))}
          <CommandBlock command="node tools/design-os.mjs validate-done-report done-report.local.json" label="Copy validate-done-report" />
        </div>

        {selectedRun && (
          <article className="rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="grid gap-4 md:grid-cols-3">
              {(["390", "768", "1440"] as const).map((viewport) => (
                <div key={viewport} className={`min-h-32 rounded-lg border p-4 ${selectedRun.screenshots[viewport] ? "border-acid/30 bg-acid/10" : "border-danger/30 bg-danger/10"}`}>
                  <strong className="text-3xl text-mist">{viewport}</strong>
                  <p className="mt-3 text-sm text-zinc-300">{selectedRun.screenshots[viewport] || "screenshot missing"}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {selectedRun.checks.map((check) => (
                <button
                  key={check.id}
                  type="button"
                  onClick={() => toggleCheck(check.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    check.status === "pass"
                      ? "border-acid/35 bg-acid/10"
                      : check.status === "fail"
                        ? "border-danger/35 bg-danger/10"
                        : "border-amber/35 bg-amber/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <strong className="text-mist">{check.label}</strong>
                    <span className="text-xs font-black uppercase tracking-[0.08em] text-zinc-300">{check.status}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{check.notes}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-zinc-500">Done report</p>
                <div className="mt-2"><StatusPill value={selectedRun.doneReportStatus} /></div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-zinc-500">Asset manifest</p>
                <div className="mt-2"><StatusPill value={selectedRun.assetManifestStatus} /></div>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <h3 className="text-sm font-black uppercase tracking-[0.1em] text-signal">Blockers</h3>
              {selectedRun.blockers.map((blocker) => (
                <button
                  type="button"
                  key={blocker.id}
                  onClick={() => toggleBlocker(blocker.id)}
                  className={`rounded-lg border p-3 text-left text-sm ${blocker.resolved ? "border-acid/30 bg-acid/10 text-acid" : "border-danger/30 bg-danger/10 text-danger"}`}
                >
                  {blocker.resolved ? "Resolved: " : "Blocking: "}
                  {blocker.text}
                </button>
              ))}
              <div className="grid gap-2 md:grid-cols-[1fr_auto]">
                <Field label="Add blocker" value={newBlocker} onChange={setNewBlocker} placeholder="Describe visual blocker" />
                <button type="button" onClick={addBlocker} className="min-h-11 self-end rounded-lg bg-acid px-4 text-sm font-black text-obsidian transition hover:bg-mist">
                  Add blocker
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <button type="button" onClick={copyQaCommand} className="min-h-11 rounded-lg border border-signal/40 px-4 text-sm font-black text-signal transition hover:bg-signal hover:text-obsidian">
                Copy visual QA command
              </button>
              <CommandBlock command='node tools/object-swap-check.mjs --url http://localhost:5175 --objects "Atlas,Neo,Phoenix" --name design-os-studio' label="Copy object swap" />
              <CommandBlock command="node tools/design-os.mjs validate-done-report done-report.local.json" label="Copy done validation" />
            </div>
          </article>
        )}
      </section>
    </div>
  );
}
