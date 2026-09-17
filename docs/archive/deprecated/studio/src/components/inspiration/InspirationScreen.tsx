import { useMemo, useState } from "react";
import { inspirationQueue } from "../../data/inspiration";
import { copyText } from "../../lib/exportUtils";
import type { InspirationSource, SourceType, TrustLevel } from "../../types/studio";
import { ArtifactPanel } from "../shared/ArtifactPanel";
import { SectionHeader } from "../shared/SectionHeader";
import { StatusPill } from "../shared/StatusPill";

const sourceLabels: Record<SourceType, string> = {
  award: "Award",
  gallery: "Gallery",
  "mobile-reference": "Mobile reference",
  portfolio: "Portfolio/community",
  moodboard: "Moodboard-only"
};

const trustFilters: Array<TrustLevel | "all"> = ["all", "high", "medium", "moodboard-only"];

export function InspirationScreen({
  sources,
  onSourcesChange
}: {
  sources: InspirationSource[];
  onSourcesChange: (sources: InspirationSource[]) => void;
}) {
  const [selectedSourceId, setSelectedSourceId] = useState(sources[0]?.id ?? "");
  const [trustFilter, setTrustFilter] = useState<TrustLevel | "all">("all");
  const selectedSource = sources.find((source) => source.id === selectedSourceId) ?? sources[0];

  const filteredSources = useMemo(
    () => sources.filter((source) => trustFilter === "all" || source.trustLevel === trustFilter),
    [sources, trustFilter]
  );

  const grouped = useMemo(() => {
    return filteredSources.reduce<Record<SourceType, InspirationSource[]>>(
      (groups, source) => {
        groups[source.type].push(source);
        return groups;
      },
      { award: [], gallery: [], "mobile-reference": [], portfolio: [], moodboard: [] }
    );
  }, [filteredSources]);

  function updateSource(sourceId: string, update: Partial<InspirationSource>) {
    onSourcesChange(sources.map((source) => (source.id === sourceId ? { ...source, ...update } : source)));
  }

  async function copySummary() {
    if (!selectedSource) return;
    await copyText(`${selectedSource.name}
Trust: ${selectedSource.trustLevel}
Use: ${selectedSource.bestUse}
Policy: ${selectedSource.screenshotPolicy}
Note: ${selectedSource.userNote || selectedSource.notes}`);
  }

  return (
    <div className="grid gap-8">
      <SectionHeader
        kicker="Inspiration library"
        title="Source queues that cannot become production assets."
        summary="Manage local inspiration sources, trust levels, notes, and queue targets before any frontend implementation starts."
      />

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <ArtifactPanel title="Source policy" status="ready">
          <div className="grid gap-3">
            <p>Pinterest is moodboard-only. It can teach search language, not prove quality.</p>
            <p>Awwwards, FWA, and CSS galleries are higher-trust inspiration for composition and motion.</p>
            <p>Screenshots are evidence, not production assets.</p>
          </div>
        </ArtifactPanel>
        <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="flex flex-wrap items-center gap-2">
            {trustFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setTrustFilter(filter)}
                className={`min-h-9 rounded-md border px-3 text-xs font-black uppercase tracking-[0.08em] ${
                  trustFilter === filter ? "border-acid bg-acid text-obsidian" : "border-white/10 text-zinc-300 hover:border-signal/60"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
            {inspirationQueue.map((item) => (
              <div key={item.id} className="rounded-lg border border-white/10 bg-black/25 p-3">
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-mist">{item.category}</strong>
                  <span className="text-acid">{item.targetCount}</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">{item.whyItMatters}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.08em] text-amber">{item.screenshotStatus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="grid gap-5">
          {(Object.keys(grouped) as SourceType[]).map((type) => (
            grouped[type].length > 0 && (
              <div key={type} className="grid gap-3">
                <h2 className="text-xs font-black uppercase tracking-[0.16em] text-signal">{sourceLabels[type]}</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {grouped[type].map((source) => (
                    <button
                      key={source.id}
                      type="button"
                      onClick={() => setSelectedSourceId(source.id)}
                      className={`rounded-xl border p-4 text-left transition ${
                        selectedSource?.id === source.id ? "border-acid bg-acid/10" : "border-white/10 bg-white/[0.04] hover:border-signal/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-black text-mist">{source.name}</h3>
                          <p className="mt-1 text-xs text-zinc-400">{source.baseUrl}</p>
                        </div>
                        <StatusPill value={source.trustLevel} />
                      </div>
                      <p className="mt-4 text-sm leading-6 text-zinc-300">{source.bestUse}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em]">
                        <span className={source.shortlisted ? "text-acid" : "text-zinc-500"}>{source.shortlisted ? "Shortlisted" : "Not shortlisted"}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {selectedSource && (
          <aside className="sticky top-28 h-fit rounded-xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">Selected source</p>
                <h2 className="mt-2 text-2xl font-black text-mist">{selectedSource.name}</h2>
              </div>
              <StatusPill value={selectedSource.trustLevel} />
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-300">{selectedSource.notes}</p>
            <div className="mt-5 grid gap-3">
              <label className="grid gap-2 text-sm font-semibold text-zinc-300">
                Notes area
                <textarea
                  value={selectedSource.userNote}
                  onChange={(event) => updateSource(selectedSource.id, { userNote: event.target.value })}
                  className="min-h-28 rounded-lg border border-white/10 bg-black/35 p-3 text-sm text-mist outline-none focus:border-signal/70"
                />
              </label>
              <button
                type="button"
                onClick={() => updateSource(selectedSource.id, { shortlisted: !selectedSource.shortlisted })}
                className="min-h-11 rounded-lg border border-acid/40 px-4 text-sm font-black text-acid transition hover:bg-acid hover:text-obsidian"
              >
                {selectedSource.shortlisted ? "Remove shortlist" : "Mark shortlisted"}
              </button>
              <button
                type="button"
                onClick={copySummary}
                className="min-h-11 rounded-lg border border-signal/40 px-4 text-sm font-black text-signal transition hover:bg-signal hover:text-obsidian"
              >
                Copy source summary
              </button>
            </div>
          </aside>
        )}
      </section>
    </div>
  );
}
