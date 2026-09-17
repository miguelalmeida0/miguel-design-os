import { useMemo, useState } from "react";
import { AgentsScreen } from "../components/tooling/agents/catalog/AgentsScreen";
import { CommandCenter } from "../components/command/CommandCenter";
import { ConceptsScreen } from "../components/concepts/ConceptsScreen";
import { InspirationScreen } from "../components/inspiration/InspirationScreen";
import { TopNav } from "../components/layout/TopNav";
import { PromptsScreen } from "../components/prompts/PromptsScreen";
import { QaRunsScreen } from "../components/qa/QaRunsScreen";
import { TargetCopyScreen } from "../components/target-copy/TargetCopyScreen";
import { conceptSlots as conceptSeed } from "../data/concepts";
import { inspirationSources as sourceSeed } from "../data/inspiration";
import { initialPipeline } from "../data/pipeline";
import { qaRuns as qaSeed } from "../data/qaRuns";
import { targetCopyItems as targetSeed } from "../data/targetCopy";
import { updatePipelineFromConcepts } from "../lib/statusEngine";
import type { ConceptSlot, InspirationSource, QaRun, StudioRoute, TargetCopyItem } from "../types/studio";

export function StudioApp() {
  const [route, setRoute] = useState<StudioRoute>("command");
  const [sources, setSources] = useState<InspirationSource[]>(sourceSeed);
  const [concepts, setConcepts] = useState<ConceptSlot[]>(conceptSeed);
  const [targetCopyItems, setTargetCopyItems] = useState<TargetCopyItem[]>(targetSeed);
  const [qaRuns, setQaRuns] = useState<QaRun[]>(qaSeed);

  const pipeline = useMemo(() => updatePipelineFromConcepts(initialPipeline, concepts), [concepts]);

  return (
    <div className="min-h-screen bg-obsidian text-mist">
      <TopNav route={route} onRouteChange={setRoute} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(98,216,255,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(215,255,100,0.08),transparent_28%),linear-gradient(135deg,#080b0c_0%,#101516_46%,#171b17_100%)]" />
      <main className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        {route === "command" && <CommandCenter pipeline={pipeline} onRouteChange={setRoute} />}
        {route === "inspiration" && <InspirationScreen sources={sources} onSourcesChange={setSources} />}
        {route === "concepts" && <ConceptsScreen concepts={concepts} onConceptsChange={setConcepts} />}
        {route === "target-copy" && <TargetCopyScreen items={targetCopyItems} onItemsChange={setTargetCopyItems} />}
        {route === "qa-runs" && <QaRunsScreen runs={qaRuns} onRunsChange={setQaRuns} />}
        {route === "tooling/agents/catalog" && <AgentsScreen />}
        {route === "prompts" && <PromptsScreen />}
      </main>
    </div>
  );
}
