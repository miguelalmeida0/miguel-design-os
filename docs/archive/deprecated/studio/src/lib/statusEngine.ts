import type { ConceptSlot, PipelineStep, QaRun, StatusState } from "../types/studio";

export function statusTone(status: StatusState | "available" | "moodboard-only" | "high" | "medium") {
  switch (status) {
    case "passed":
    case "available":
    case "high":
      return "border-acid/40 bg-acid/10 text-acid";
    case "ready":
    case "medium":
      return "border-signal/40 bg-signal/10 text-signal";
    case "blocked":
    case "moodboard-only":
      return "border-amber/50 bg-amber/10 text-amber";
    default:
      return "border-white/15 bg-white/5 text-zinc-300";
  }
}

export function conceptHasScreenshots(concept: ConceptSlot) {
  return Boolean(concept.screenshots["390"] && concept.screenshots["768"] && concept.screenshots["1440"]);
}

export function conceptGateBlocked(concepts: ConceptSlot[]) {
  return !concepts.some((concept) => concept.approvalState === "approved" && conceptHasScreenshots(concept));
}

export function unresolvedBlockerCount(run: QaRun) {
  return run.blockers.filter((blocker) => !blocker.resolved).length;
}

export function updatePipelineFromConcepts(pipeline: PipelineStep[], concepts: ConceptSlot[]): PipelineStep[] {
  const approved = concepts.some((concept) => concept.approvalState === "approved");
  return pipeline.map((step) => {
    if (step.id === "concepts") {
      const status: StatusState = conceptGateBlocked(concepts) ? "blocked" : "passed";
      return { ...step, status };
    }
    if (step.id === "approval") {
      const status: StatusState = approved ? "passed" : "missing";
      return { ...step, status };
    }
    return step;
  });
}
