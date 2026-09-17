import { useState } from "react";
import { conceptHasScreenshots } from "../../lib/statusEngine";
import { copyText } from "../../lib/exportUtils";
import type { ConceptSlot } from "../../types/studio";
import { CommandBlock } from "../shared/CommandBlock";
import { SectionHeader } from "../shared/SectionHeader";
import { StatusPill } from "../shared/StatusPill";

export function ConceptsScreen({
  concepts,
  onConceptsChange
}: {
  concepts: ConceptSlot[];
  onConceptsChange: (concepts: ConceptSlot[]) => void;
}) {
  const [selectedConceptId, setSelectedConceptId] = useState(concepts[0]?.id ?? "");
  const selectedConcept = concepts.find((concept) => concept.id === selectedConceptId) ?? concepts[0];
  const approvedConcept = concepts.find((concept) => concept.approvalState === "approved");

  function setApproval(conceptId: string, approvalState: ConceptSlot["approvalState"]) {
    onConceptsChange(
      concepts.map((concept) => ({
        ...concept,
        approvalState: concept.id === conceptId ? approvalState : approvalState === "approved" ? "pending" : concept.approvalState
      }))
    );
  }

  async function copyImplementationBrief(concept: ConceptSlot) {
    await copyText(`# Concept Implementation Brief

Concept: ${concept.title}
Composition: ${concept.composition}
Focal object: ${concept.focalObject}
Emotional hook: ${concept.emotionalHook}
Absent elements: ${concept.absentElements}
Failure mode: ${concept.failureMode}
Screenshots: 390=${concept.screenshots["390"] || "missing"} 768=${concept.screenshots["768"] || "missing"} 1440=${concept.screenshots["1440"] || "missing"}

Do not implement until this rendered concept is approved by Migi.`);
  }

  return (
    <div className="grid gap-8">
      <SectionHeader
        kicker="Visual Concept Gate"
        title="Three rendered concepts before implementation."
        summary="Concept slots must prove composition, focal object, emotional hook, responsive screenshots, and approval state before an implementation prompt can leave the room."
      />

      <section className="rounded-2xl border border-amber/30 bg-amber/10 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-black text-amber">No implementation prompt until one rendered concept is approved.</h2>
            <p className="mt-2 text-sm text-zinc-300">Text-only concepts are failing by default. Screenshot paths are required for approval quality.</p>
          </div>
          <StatusPill value={approvedConcept ? "passed" : "blocked"} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {concepts.map((concept, index) => {
          const screenshotsReady = conceptHasScreenshots(concept);
          return (
            <article
              key={concept.id}
              className={`rounded-xl border p-4 transition ${
                selectedConceptId === concept.id ? "border-acid bg-acid/10" : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <button type="button" onClick={() => setSelectedConceptId(concept.id)} className="w-full text-left">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-black text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                  <StatusPill value={concept.approvalState === "approved" ? "passed" : concept.approvalState === "rejected" ? "blocked" : "missing"} />
                </div>
                <h3 className="mt-4 text-2xl font-black text-mist">{concept.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{concept.composition}</p>
              </button>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {(["390", "768", "1440"] as const).map((viewport) => (
                  <div key={viewport} className={`rounded-lg border p-3 text-center ${concept.screenshots[viewport] ? "border-acid/30 bg-acid/10" : "border-danger/30 bg-danger/10"}`}>
                    <strong className="block text-sm text-mist">{viewport}</strong>
                    <span className="text-xs text-zinc-400">{concept.screenshots[viewport] ? "path ready" : "missing"}</span>
                  </div>
                ))}
              </div>
              <p className={`mt-4 text-xs font-bold uppercase tracking-[0.08em] ${screenshotsReady ? "text-acid" : "text-danger"}`}>
                {screenshotsReady ? "Rendered evidence present" : "Text-only / missing screenshots"}
              </p>
              <div className="mt-4 grid gap-2">
                <button
                  type="button"
                  onClick={() => setApproval(concept.id, "approved")}
                  className="min-h-10 rounded-md bg-acid px-3 text-sm font-black text-obsidian transition hover:bg-mist"
                >
                  Approve concept
                </button>
                <button
                  type="button"
                  onClick={() => setApproval(concept.id, "rejected")}
                  className="min-h-10 rounded-md border border-danger/40 px-3 text-sm font-black text-danger transition hover:bg-danger hover:text-obsidian"
                >
                  Reject concept
                </button>
                <button
                  type="button"
                  onClick={() => copyImplementationBrief(concept)}
                  className="min-h-10 rounded-md border border-signal/40 px-3 text-sm font-black text-signal transition hover:bg-signal hover:text-obsidian"
                >
                  Copy concept implementation brief
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {selectedConcept && (
        <section className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
          <article className="rounded-xl border border-white/10 bg-black/30 p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">Selected concept</p>
            <h2 className="mt-2 text-3xl font-black text-mist">{selectedConcept.title}</h2>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ["Focal object", selectedConcept.focalObject],
                ["Emotional hook", selectedConcept.emotionalHook],
                ["Absent elements", selectedConcept.absentElements],
                ["Failure mode", selectedConcept.failureMode]
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                  <dt className="text-xs font-black uppercase tracking-[0.08em] text-zinc-500">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-300">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
          <CommandBlock command="node tools/capture-concepts.mjs --url http://localhost:5174" label="Copy capture command" />
        </section>
      )}
    </div>
  );
}
