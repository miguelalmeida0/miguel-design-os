#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const viewports = [
  { key: "390", width: 390, height: 844 },
  { key: "768", width: 768, height: 1024 },
  { key: "1440", width: 1440, height: 1100 }
];

function getFlagValue(flag) {
  const index = args.indexOf(flag);
  return index === -1 ? "" : args[index + 1] || "";
}

function slugify(value) {
  return String(value || "visual-qa")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "visual-qa";
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function writeMarkdown(filePath, report) {
  const lines = [
    `# Visual QA Report - ${report.runName}`,
    "",
    `URL: ${report.url}`,
    `Status: ${report.status}`,
    `Created: ${report.createdAt}`,
    "",
    "## Screenshots",
    "",
    `- 390: ${report.screenshots["390"] || "missing"}`,
    `- 768: ${report.screenshots["768"] || "missing"}`,
    `- 1440: ${report.screenshots["1440"] || "missing"}`,
    "",
    "## Automated Checks",
    "",
    `- Horizontal overflow clear: ${report.checks.noHorizontalOverflow}`,
    `- Console checked: ${report.checks.pageConsoleChecked}`,
    `- Button inventory captured: ${report.checks.buttonInventoryCaptured}`,
    `- Dead-button inventory captured: ${report.checks.deadButtonInventoryCaptured}`,
    "",
    "## Manual Checklist",
    "",
    ...Object.entries(report.manualChecklist).map(([key, value]) => `- ${key}: ${value.status} - ${value.notes}`),
    "",
    "## Blockers",
    "",
    ...(report.blockers.length > 0 ? report.blockers.map((blocker) => `- ${blocker}`) : ["- none"]),
    "",
    "## Notes",
    "",
    report.notes
  ];
  fs.writeFileSync(filePath, `${lines.join("\n")}\n`);
}

function baseReport({ runName, url, runDir }) {
  return {
    projectName: runName,
    runName,
    url,
    createdAt: new Date().toISOString(),
    status: "blocked",
    screenshots: {
      "390": "",
      "768": "",
      "1440": ""
    },
    checks: {
      captured390: false,
      captured768: false,
      captured1440: false,
      noHorizontalOverflow: false,
      pageConsoleChecked: false,
      buttonInventoryCaptured: false,
      deadButtonInventoryCaptured: false
    },
    manualChecklist: {
      noOverlap: {
        status: "manual",
        notes: "Inspect captured screenshots for collisions."
      },
      noTextOnButtons: {
        status: "manual",
        notes: "Confirm button labels/icons fit within controls."
      },
      noWatermarkEditorBrowserArtifact: {
        status: "manual",
        notes: "Confirm no watermark, browser chrome, editor UI, or source-site artifact is visible."
      },
      noCutHeroObject: {
        status: "manual",
        notes: "Confirm the hero/focal object is not accidentally cropped."
      },
      objectSwapInvariance: {
        status: "manual",
        notes: "Run object-swap-check when the product swaps primary objects."
      }
    },
    buttonInventory: [],
    deadButtons: [],
    consoleErrors: [],
    blockers: [],
    notes: `Run folder: ${path.relative(process.cwd(), runDir)}`
  };
}

async function getPlaywright() {
  try {
    return await import("playwright");
  } catch {
    return null;
  }
}

async function main() {
  const url = getFlagValue("--url");
  const name = slugify(getFlagValue("--name") || "visual-qa");
  if (!url) {
    console.error("Usage: node tools/visual-qa.mjs --url <url> --name <run-name>");
    process.exit(1);
  }

  const runDir = path.resolve(process.cwd(), "docs/qa-runs", `${timestamp()}-${name}`);
  const screenshotDir = path.join(runDir, "screenshots");
  fs.mkdirSync(screenshotDir, { recursive: true });

  const report = baseReport({ runName: name, url, runDir });
  const playwright = await getPlaywright();
  if (!playwright) {
    report.blockers.push("Playwright is not installed in this workspace. Install a free local Playwright dependency or run from a project that already has it.");
    report.notes = "No external services were called. Capture did not run because local Playwright is unavailable.";
    writeJson(path.join(runDir, "visual-qa-report.json"), report);
    writeMarkdown(path.join(runDir, "visual-qa-report.md"), report);
    console.error(`Visual QA blocked: Playwright is unavailable. Report written to ${path.relative(process.cwd(), runDir)}`);
    process.exit(2);
  }

  const browser = await playwright.chromium.launch();
  const consoleErrors = [];
  let noHorizontalOverflow = true;
  let buttonInventory = [];
  let deadButtons = [];

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      page.on("console", (message) => {
        if (message.type() === "error") {
          consoleErrors.push(`[${viewport.key}] ${message.text()}`);
        }
      });
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      const screenshotPath = path.join(screenshotDir, `${viewport.key}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      report.screenshots[viewport.key] = path.relative(process.cwd(), screenshotPath);
      report.checks[`captured${viewport.key}`] = true;

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      noHorizontalOverflow = noHorizontalOverflow && !overflow;

      if (viewport.key === "1440") {
        buttonInventory = await page.evaluate(() => Array.from(document.querySelectorAll("button, a, [role='button'], input[type='button'], input[type='submit']")).map((element) => {
          const htmlElement = element;
          const role = htmlElement.getAttribute("role") || htmlElement.tagName.toLowerCase();
          const text = (htmlElement.innerText || htmlElement.value || htmlElement.getAttribute("aria-label") || "").trim();
          const disabled = Boolean(htmlElement.disabled || htmlElement.getAttribute("aria-disabled") === "true");
          const hasHref = Boolean(htmlElement.getAttribute("href"));
          const hasClickHandler = Boolean(htmlElement.getAttribute("onclick"));
          return {
            text,
            role,
            disabled,
            hasHref,
            hasClickHandler,
            notes: hasClickHandler || hasHref || disabled ? "" : "No inline handler/href detected; React handlers may not be visible to v1."
          };
        }));
        deadButtons = buttonInventory.filter((item) => !item.disabled && !item.hasHref && !item.hasClickHandler && item.role !== "a");
      }

      await page.close();
    }
  } finally {
    await browser.close();
  }

  report.status = "needs-manual-review";
  report.checks.noHorizontalOverflow = noHorizontalOverflow;
  report.checks.pageConsoleChecked = true;
  report.checks.buttonInventoryCaptured = true;
  report.checks.deadButtonInventoryCaptured = true;
  report.buttonInventory = buttonInventory;
  report.deadButtons = deadButtons;
  report.consoleErrors = consoleErrors;
  report.blockers = [
    ...(!noHorizontalOverflow ? ["Horizontal overflow detected."] : []),
    ...(consoleErrors.length > 0 ? ["Page console errors detected."] : []),
    ...(deadButtons.length > 0 ? ["Potential dead buttons found; verify handlers manually."] : []),
    "Manual visual checklist still required before done report can pass."
  ];
  report.notes = "Screenshots captured locally. Build/lint is not visual QA; inspect the manual checklist before claiming done.";

  writeJson(path.join(runDir, "visual-qa-report.json"), report);
  writeMarkdown(path.join(runDir, "visual-qa-report.md"), report);
  console.log(`Visual QA report written to ${path.relative(process.cwd(), runDir)}`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
