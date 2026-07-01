export type StudioRoute =
  | "command"
  | "inspiration"
  | "concepts"
  | "target-copy"
  | "qa-runs"
  | "agents"
  | "prompts";

export type StatusState = "missing" | "ready" | "blocked" | "passed";
export type CaptureMode = "automated" | "manual-import" | "blocked";
export type TrustLevel = "high" | "medium" | "moodboard-only";
export type SourceType = "award" | "gallery" | "mobile-reference" | "portfolio" | "moodboard";
export type ConceptApproval = "pending" | "approved" | "rejected";
export type PromptMode =
  | "inspiration-scout"
  | "art-direction-concept"
  | "literal-target-copy"
  | "visual-qa-anti-slop"
  | "productionizer";

export interface PipelineStep {
  id: string;
  label: string;
  status: StatusState;
  artifact: string;
  nextAction: string;
}

export interface InspirationSource {
  id: string;
  name: string;
  type: SourceType;
  baseUrl: string;
  bestUse: string;
  trustLevel: TrustLevel;
  screenshotPolicy: string;
  notes: string;
  shortlisted: boolean;
  userNote: string;
}

export interface InspirationQueueItem {
  id: string;
  sourceName: string;
  sourceType: string;
  category: string;
  targetCount: number;
  screenshotStatus: "not-captured" | "captured" | "blocked";
  whyItMatters: string;
  compositionNotes: string;
  focalObjectNotes: string;
  interactionNotes: string;
}

export interface ConceptSlot {
  id: string;
  title: string;
  composition: string;
  focalObject: string;
  emotionalHook: string;
  absentElements: string;
  failureMode: string;
  screenshots: Record<"390" | "768" | "1440", string>;
  approvalState: ConceptApproval;
}

export interface TargetCopyItem {
  id: string;
  screen: string;
  targetPath: string;
  currentPath: string;
  differences: string[];
  mismatches: Array<{ id: string; description: string; blocking: boolean }>;
  excludedArtifacts: string[];
  shellParityApproved: boolean;
}

export interface QaCheck {
  id: string;
  label: string;
  status: "pass" | "fail" | "manual";
  notes: string;
}

export interface QaRun {
  id: string;
  name: string;
  status: StatusState;
  playwrightStatus: StatusState;
  captureMode: CaptureMode;
  browserRequested: "auto" | "chromium" | "chrome" | "webkit" | "manual";
  blockedReason: string;
  screenshotEvidenceRequired: boolean;
  screenshots: Record<"390" | "768" | "1440", string>;
  checks: QaCheck[];
  blockers: Array<{ id: string; text: string; resolved: boolean }>;
  doneReportStatus: StatusState;
  doneReportFinalStatus: "done" | "needs-work" | "blocked";
  scoreCurrent: number;
  scoreTarget: number;
  assetManifestStatus: StatusState;
}

export interface VisualAgent {
  id: PromptMode;
  name: string;
  mission: string;
  inputs: string[];
  outputs: string[];
  requiredArtifacts: string[];
  validationCommands: string[];
  failureConditions: string[];
}

export interface CompiledPrompt {
  agentId: PromptMode;
  task: string;
  mode: PromptMode;
  markdown: string;
  cliCommand: string;
  generatedAt: string;
}
