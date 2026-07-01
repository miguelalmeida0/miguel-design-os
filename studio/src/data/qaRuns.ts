import type { QaRun } from "../types/studio";

export const qaRuns: QaRun[] = [
  {
    id: "studio-v0-local",
    name: "Design OS Studio local QA",
    status: "blocked",
    screenshots: {
      "390": "",
      "768": "",
      "1440": ""
    },
    checks: [
      { id: "no-overlap", label: "No overlap", status: "manual", notes: "Inspect 390 / 768 / 1440 after local capture." },
      { id: "no-text-on-buttons", label: "No text on buttons", status: "manual", notes: "Confirm labels fit every control." },
      { id: "no-artifacts", label: "No watermark/editor artifact", status: "manual", notes: "No source-site or tooling artifact may ship." },
      { id: "no-overflow", label: "No horizontal overflow", status: "manual", notes: "Run visual QA harness when Playwright is available." },
      { id: "no-cut-object", label: "No cut hero object", status: "manual", notes: "Studio has no hero image object; check command cockpit framing." },
      { id: "object-swap", label: "Object swap invariance", status: "manual", notes: "Required for roster/gallery products; marked manual for Studio." }
    ],
    blockers: [
      { id: "visual-capture", text: "Visual QA capture requires local Playwright.", resolved: false }
    ],
    doneReportStatus: "ready",
    assetManifestStatus: "ready"
  }
];
