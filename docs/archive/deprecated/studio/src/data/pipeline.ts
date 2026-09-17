import type { PipelineStep } from "../types/studio";

export const initialPipeline: PipelineStep[] = [
  {
    id: "brief",
    label: "Brief",
    status: "ready",
    artifact: "design-brief.local.json",
    nextAction: "Lock project object, action, and visual thesis."
  },
  {
    id: "inspiration",
    label: "Inspiration",
    status: "ready",
    artifact: "inspiration-manifest.local.json",
    nextAction: "Validate source queue and shortlist references."
  },
  {
    id: "concepts",
    label: "Concepts",
    status: "blocked",
    artifact: "visual-concepts.local.json",
    nextAction: "Render 3 concepts and capture 390 / 768 / 1440."
  },
  {
    id: "approval",
    label: "Approval",
    status: "missing",
    artifact: "selectedConceptId",
    nextAction: "Migi approves one rendered concept."
  },
  {
    id: "target-copy",
    label: "Target Copy",
    status: "ready",
    artifact: "target-copy-report.local.json",
    nextAction: "Use only when exact visual target mode is active."
  },
  {
    id: "visual-qa",
    label: "Visual QA",
    status: "blocked",
    artifact: "visual-qa-report.json",
    nextAction: "Capture app screenshots or document local Playwright blocker."
  },
  {
    id: "done-report",
    label: "Done Report",
    status: "ready",
    artifact: "done-report.local.json",
    nextAction: "Validate before final handoff."
  },
  {
    id: "productionizer",
    label: "Productionizer",
    status: "blocked",
    artifact: "approved visual shell",
    nextAction: "Wait for shell approval and visual QA."
  }
];

export const readiness = [
  { label: "Visual Swarm agents", status: "available", detail: "5 Markdown agents routed by CLI" },
  { label: "Evidence gates", status: "available", detail: "Done, target-copy, asset, QA schemas" },
  { label: "Visual QA harness", status: "blocked", detail: "Local Playwright required for browser capture" },
  { label: "Concept previewer", status: "available", detail: "studio-preview plus capture-concepts" },
  { label: "Inspiration queue", status: "available", detail: "190 structured targets" },
  { label: "Done report", status: "available", detail: "Blocks fake completion" }
];
