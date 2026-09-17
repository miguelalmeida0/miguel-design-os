import type { TargetCopyItem } from "../types/studio";

export const targetCopyItems: TargetCopyItem[] = [
  {
    id: "primary-target",
    screen: "Primary target screen",
    targetPath: "docs/targets/design-os-studio/1440-target.png",
    currentPath: "docs/qa-runs/design-os-studio/1440.png",
    differences: [
      "Target shell comparison not run yet.",
      "Browser chrome, editor UI, watermark, and source-site overlays must be excluded."
    ],
    mismatches: [
      { id: "mismatch-1", description: "Shell parity is pending screenshot comparison.", blocking: true }
    ],
    excludedArtifacts: ["browser chrome", "editor UI", "watermark", "source-site overlays"],
    shellParityApproved: false
  }
];
