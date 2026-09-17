import { readiness } from "../../data/pipeline";
import type { PipelineStep, StudioRoute } from "../../types/studio";
import { ArtifactPanel } from "../shared/ArtifactPanel";
import { CommandBlock } from "../shared/CommandBlock";
import { SectionHeader } from "../shared/SectionHeader";
import { StatusPill } from "../shared/StatusPill";

export function CommandCenter({
  pipeline,
  onRouteChange
}: {
  pipeline: PipelineStep[];
  onRouteChange: (route: StudioRoute) => void;
}) {
  return (
    <div className="grid gap-8">
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(98,216,255,0.14),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-cockpit md:p-10">
        <div className="absolute right-6 top-6 hidden h-28 w-28 rounded-full border border-acid/25 md:block" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeader
            kicker="Local visual operating system"
            title="Miguel Design OS Studio"
            summary="A local command center for frontend taste, visual proof, and agent handoff."
          />
          <div className="grid gap-3 rounded-xl border border-white/10 bg-black/25 p-4">
            <p className="text-sm font-bold text-mist">This is where frontend agents are forced to prove taste, screenshots, and quality.</p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onRouteChange("inspiration")}
                className="min-h-11 rounded-lg bg-acid px-4 text-sm font-black text-obsidian transition hover:bg-mist"
              >
                Start visual workflow
              </button>
              <button
                type="button"
                onClick={() => onRouteChange("prompts")}
                className="min-h-11 rounded-lg border border-signal/50 px-4 text-sm font-black text-signal transition hover:bg-signal hover:text-obsidian"
              >
                Compile agent prompt
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-signal">Active workflow</p>
            <h2 className="mt-2 text-2xl font-black text-mist">Evidence pipeline</h2>
          </div>
          <span className="hidden rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-amber md:inline-flex">
            production waits for proof
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {pipeline.map((step, index) => (
            <article key={step.id} className="relative min-h-48 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                <StatusPill value={step.status} />
              </div>
              <h3 className="mt-5 text-xl font-black text-mist">{step.label}</h3>
              <p className="mt-2 text-sm text-zinc-400">{step.artifact}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{step.nextAction}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {readiness.map((item) => (
          <ArtifactPanel key={item.label} title={item.label} status={item.status === "available" ? "available" : "blocked"}>
            <p>{item.detail}</p>
          </ArtifactPanel>
        ))}
      </section>

      <section className="grid gap-4 rounded-2xl border border-amber/30 bg-amber/10 p-5">
        <div className="grid gap-2">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-amber">Screenshot proof unblocker</p>
          <h2 className="text-2xl font-black text-mist">Automated capture first. Manual app-only import second.</h2>
          <p className="max-w-3xl text-sm leading-6 text-zinc-300">
            Studio treats browser automation failures as blockers, not as proof. Desktop screenshots with browser chrome, editor UI, or dock are invalid evidence.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <CommandBlock command="node tools/playwright-doctor.mjs --url http://localhost:5173 --browser auto" label="Copy doctor command" />
          <CommandBlock command="node tools/visual-qa.mjs --url http://localhost:5173 --name visual-taste-design-genome --browser auto --tmpdir .tmp/playwright" label="Copy auto QA command" />
          <CommandBlock command="node tools/import-manual-screenshots.mjs --name visual-taste-design-genome --390 path/to/390.png --768 path/to/768.png --1440 path/to/1440.png" label="Copy manual import" />
          <CommandBlock command="node tools/visual-qa.mjs --manual --input-dir docs/qa-runs/<run>/screenshots --name visual-taste-design-genome" label="Copy manual QA command" />
        </div>
      </section>
    </div>
  );
}
