#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function readArg(name, fallback = undefined) {
  const index = args.indexOf(`--${name}`);
  if (index === -1) return fallback;
  return args[index + 1] ?? fallback;
}

const url = readArg("url");
const outDir = readArg("out", "docs/qa/layout-integrity");

function parseWidthSweep(value) {
  const [startRaw, endRaw, stepRaw] = String(value).split(":");
  const start = Number.parseInt(startRaw, 10);
  const end = Number.parseInt(endRaw, 10);
  const step = Number.parseInt(stepRaw, 10);
  if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(step) || step <= 0 || end < start) return [];
  const widths = [];
  for (let width = start; width <= end; width += step) widths.push(width);
  if (widths[widths.length - 1] !== end) widths.push(end);
  return widths;
}

const legacyViewports = readArg("viewports");
const viewports = legacyViewports
  ? legacyViewports.split(",").map((value) => Number.parseInt(value.trim(), 10)).filter(Boolean)
  : parseWidthSweep(readArg("width-sweep", "360:1920:40"));
const heights = readArg("heights", "720,844,900,1080")
  .split(",")
  .map((value) => Number.parseInt(value.trim(), 10))
  .filter(Boolean);
const failOnBlocker = String(readArg("fail-on-blocker", "true")) !== "false";

function ensureOutDir() {
  fs.mkdirSync(outDir, { recursive: true });
}

function writeReports(report) {
  ensureOutDir();
  fs.writeFileSync(path.join(outDir, "layout-integrity-report.json"), `${JSON.stringify(report, null, 2)}\n`);
  const lines = [
    "# Layout Integrity Report",
    "",
    `Verdict: ${report.verdict}`,
    "",
    `URL: ${report.url ?? "not provided"}`,
    "",
    "## Findings",
    "",
    "| Viewport | Issue | Evidence | Severity |",
    "|---|---|---|---|"
  ];

  for (const finding of report.findings) {
    lines.push(`| ${finding.viewport ?? ""} | ${finding.issue} | ${finding.evidence} | ${finding.severity} |`);
  }

  if (report.findings.length === 0) {
    lines.push("| all | No geometry failures detected by v1 checker | DOM geometry only | info |");
  }

  if (report.blockedReason) {
    lines.push("", "## Blocked", "", report.blockedReason);
  }

  fs.writeFileSync(path.join(outDir, "layout-integrity-report.md"), `${lines.join("\n")}\n`);
}

if (!url) {
  writeReports({
    verdict: "Blocked",
    url: null,
    findings: [
      {
        viewport: "all",
        issue: "missing URL",
        evidence: "Run with --url <target>",
        severity: "blocker"
      }
    ],
    blockedReason: "No URL was provided."
  });
  console.error("Missing --url <target>");
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch (error) {
  writeReports({
    verdict: "Blocked",
    url,
    findings: [],
    blockedReason: `Playwright is unavailable, so no browser geometry checks were run. ${error.message}`
  });
  console.log(`Playwright unavailable. Wrote blocked report to ${outDir}.`);
  process.exit(failOnBlocker ? 2 : 0);
}

const findings = [];
const screenshots = [];
const browser = await chromium.launch();

try {
  for (const width of viewports) {
    for (const height of heights) {
      const viewport = { width, height };
      const page = await browser.newPage({ viewport });
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      await page.evaluate(async () => {
        if (document.fonts?.ready) await document.fonts.ready;
      });
      await page.waitForTimeout(250);

      const screenshotPath = path.join(outDir, `layout-integrity-${width}x${height}.png`);
      ensureOutDir();
      await page.screenshot({ path: screenshotPath, fullPage: true });
      screenshots.push(screenshotPath);

    const result = await page.evaluate(() => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const selector = [
        "body *",
        "[data-layout-critical]",
        "[data-text-fit]",
        "[data-nav-item]",
        "[data-nav-label]",
        "[data-protected-text]",
        "[data-overlay-object]",
        "[data-floating-object]",
        "[data-fixed-overlay]",
        "[data-media-object]",
        "[data-sticker]",
        "[data-card]"
      ].join(",");

      const isVisible = (element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.visibility !== "hidden" && style.display !== "none" && rect.width > 0 && rect.height > 0;
      };

      const textElements = Array.from(document.querySelectorAll(selector))
        .filter(isVisible)
        .filter((element) => (element.textContent || "").trim().length > 0);
      const overlayElements = Array.from(document.querySelectorAll("[data-overlay-object], [data-scroll-object], [data-media-object], [data-floating-object], [data-fixed-overlay]"))
        .filter(isVisible);
      const importantContainers = Array.from(document.querySelectorAll("[data-card], [data-sticker], [data-panel], [data-floating-object], [data-layout-critical]"))
        .filter(isVisible);
      const protectedTextElements = Array.from(document.querySelectorAll("[data-protected-text], [data-layout-critical]"))
        .filter(isVisible)
        .filter((element) => (element.textContent || "").trim().length > 0);
      const navItemElements = Array.from(document.querySelectorAll("[data-nav-item]"))
        .filter(isVisible);

      const issues = [];
      const checkedNavItems = new Set();
      const overlaps = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

      for (const element of textElements) {
        const rect = element.getBoundingClientRect();
        const text = (element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 90);
        const role = element.getAttribute("data-layout-critical")
          || element.getAttribute("data-text-fit")
          || element.getAttribute("data-nav-item")
          || element.getAttribute("data-nav-label")
          || element.tagName.toLowerCase();

        if (element.scrollWidth > element.clientWidth + 1) {
          issues.push({
            issue: "horizontal text/container overflow",
            evidence: `${role}: "${text}" scrollWidth ${element.scrollWidth} > clientWidth ${element.clientWidth}`,
            severity: element.matches("button,a,[data-nav-item],[data-nav-label],[data-layout-critical]") ? "blocker" : "major"
          });
        }

        if (element.scrollHeight > element.clientHeight + 1) {
          issues.push({
            issue: "vertical text/container overflow",
            evidence: `${role}: "${text}" scrollHeight ${element.scrollHeight} > clientHeight ${element.clientHeight}`,
            severity: element.matches("button,a,[data-nav-item],[data-nav-label],[data-layout-critical]") ? "blocker" : "major"
          });
        }

        let clippingParent = element.parentElement;
        while (clippingParent && clippingParent !== document.body) {
          const parentStyle = window.getComputedStyle(clippingParent);
          const clips = ["hidden", "clip"].some((value) => [parentStyle.overflow, parentStyle.overflowX, parentStyle.overflowY].includes(value));
          if (clips && element.matches("button,a,[data-nav-item],[data-nav-label],[data-layout-critical],[data-protected-text],[data-text-fit]")) {
            const parentRect = clippingParent.getBoundingClientRect();
            const childRect = element.getBoundingClientRect();
            if (childRect.left < parentRect.left - 1 || childRect.right > parentRect.right + 1 || childRect.top < parentRect.top - 1 || childRect.bottom > parentRect.bottom + 1) {
              issues.push({
                issue: "parent clips critical text",
                evidence: `${role}: "${text}" clipped by parent overflow ${parentStyle.overflow}/${parentStyle.overflowX}/${parentStyle.overflowY}`,
                severity: "blocker"
              });
            }
          }
          clippingParent = clippingParent.parentElement;
        }

        const parent = element.parentElement;
        if (parent && (element.matches("[data-nav-label]") || parent.matches("[data-nav-item]"))) {
          const parentRect = parent.getBoundingClientRect();
          if (rect.left < parentRect.left - 1 || rect.right > parentRect.right + 1 || rect.top < parentRect.top - 1 || rect.bottom > parentRect.bottom + 1) {
            issues.push({
              issue: "nav label exceeds parent item",
              evidence: `"${text}" exceeds ${parent.tagName.toLowerCase()} bounds`,
              severity: "blocker"
            });
          }
        }

        if (element.matches("[data-nav-item]")) {
          checkedNavItems.add(element);
          const visualLabelElement = element.querySelector("[data-nav-label]") || element;
          const visualLabel = (visualLabelElement.textContent || "").trim().replace(/\s+/g, " ");
          const isCompact = element.hasAttribute("data-nav-compact") || viewportWidth <= 768;
          const hasIcon = element.hasAttribute("data-nav-icon") || Boolean(element.querySelector("[data-nav-icon]"));
          const hasFullLabel = Boolean(
            element.getAttribute("aria-label")
              || element.getAttribute("data-nav-full-label")
              || element.querySelector("[data-nav-full-label], .sr-only")
          );
          const looksLikeArbitraryCode = /^[A-Z0-9]{1,2}$/.test(visualLabel);

          if (isCompact && looksLikeArbitraryCode && !hasIcon) {
            issues.push({
              issue: "compact nav uses abbreviation without icon fallback",
              evidence: `${role}: "${visualLabel}" has no data-nav-icon`,
              severity: "blocker"
            });
          }

          if (isCompact && !hasFullLabel) {
            issues.push({
              issue: "compact nav item missing full accessible label source",
              evidence: `${role}: "${visualLabel}" has no aria-label or data-nav-full-label`,
              severity: "blocker"
            });
          }
        }

        if (element.matches("[data-text-fit]")) {
          const rawMinimum = Number.parseInt(element.getAttribute("data-text-fit"), 10);
          const minimum = Number.isFinite(rawMinimum) ? rawMinimum : 220;
          if (rect.width > 0 && rect.width < minimum) {
            issues.push({
              issue: "text-fit container below readable minimum width",
              evidence: `${role}: "${text}" width ${Math.round(rect.width)} < minimum ${minimum}`,
              severity: element.matches("[data-layout-critical]") ? "blocker" : "major"
            });
          }
        }

        if (element.matches("[data-card], [data-text-fit]")) {
          const textLength = (element.textContent || "").trim().replace(/\s+/g, " ").length;
          const heightWidthRatio = rect.width > 0 ? rect.height / rect.width : 0;
          if (textLength > 35 && rect.width < 190 && heightWidthRatio > 1.85) {
            issues.push({
              issue: "possible container thinning to fit media",
              evidence: `${role}: "${text}" width ${Math.round(rect.width)}, height/width ${heightWidthRatio.toFixed(2)}`,
              severity: "blocker"
            });
          }
        }
      }

      for (const navItem of navItemElements) {
        if (checkedNavItems.has(navItem)) continue;
        const visualLabelElement = navItem.querySelector("[data-nav-label]") || navItem;
        const visualLabel = (visualLabelElement.textContent || "").trim().replace(/\s+/g, " ");
        const role = navItem.getAttribute("data-nav-item") || navItem.tagName.toLowerCase();
        const isCompact = navItem.hasAttribute("data-nav-compact") || viewportWidth <= 768;
        const hasIcon = navItem.hasAttribute("data-nav-icon") || Boolean(navItem.querySelector("[data-nav-icon]"));
        const hasFullLabel = Boolean(
          navItem.getAttribute("aria-label")
            || navItem.getAttribute("data-nav-full-label")
            || navItem.querySelector("[data-nav-full-label], .sr-only")
        );
        const looksLikeArbitraryCode = /^[A-Z0-9]{1,2}$/.test(visualLabel);

        if (isCompact && looksLikeArbitraryCode && !hasIcon) {
          issues.push({
            issue: "compact nav uses abbreviation without icon fallback",
            evidence: `${role}: "${visualLabel}" has no data-nav-icon`,
            severity: "blocker"
          });
        }

        if (isCompact && !hasFullLabel) {
          issues.push({
            issue: "compact nav item missing full accessible label source",
            evidence: `${role}: "${visualLabel || "icon-only"}" has no aria-label or data-nav-full-label`,
            severity: "blocker"
          });
        }
      }

      for (const overlay of overlayElements) {
        const overlayRect = overlay.getBoundingClientRect();
        const overlayName = overlay.getAttribute("data-overlay-object")
          || overlay.getAttribute("data-scroll-object")
          || overlay.getAttribute("data-media-object")
          || overlay.getAttribute("aria-label")
          || overlay.tagName.toLowerCase();

        for (const protectedElement of protectedTextElements) {
          if (overlay.contains(protectedElement) || protectedElement.contains(overlay)) {
            continue;
          }
          const protectedRect = protectedElement.getBoundingClientRect();
          if (!overlaps(overlayRect, protectedRect)) {
            continue;
          }

          const protectedName = protectedElement.getAttribute("data-protected-text")
            || protectedElement.getAttribute("data-layout-critical")
            || protectedElement.tagName.toLowerCase();
          const text = (protectedElement.textContent || "").trim().replace(/\s+/g, " ").slice(0, 90);
          issues.push({
            issue: "media/overlay object overlaps protected text",
            evidence: `${overlayName} overlaps ${protectedName}: "${text}"`,
            severity: "blocker"
          });
        }
      }

      for (let i = 0; i < importantContainers.length; i += 1) {
        for (let j = i + 1; j < importantContainers.length; j += 1) {
          const a = importantContainers[i];
          const b = importantContainers[j];
          if (a.contains(b) || b.contains(a)) continue;
          if (a.getAttribute("data-overlap-allowed") === "true" || b.getAttribute("data-overlap-allowed") === "true") continue;
          const aRect = a.getBoundingClientRect();
          const bRect = b.getBoundingClientRect();
          if (!overlaps(aRect, bRect)) continue;
          const overlapWidth = Math.min(aRect.right, bRect.right) - Math.max(aRect.left, bRect.left);
          const overlapHeight = Math.min(aRect.bottom, bRect.bottom) - Math.max(aRect.top, bRect.top);
          if (overlapWidth * overlapHeight < 64) continue;
          issues.push({
            issue: "important container overlap",
            evidence: `${a.getAttribute("data-floating-object") || a.getAttribute("data-card") || a.tagName.toLowerCase()} overlaps ${b.getAttribute("data-card") || b.getAttribute("data-panel") || b.tagName.toLowerCase()} by ${Math.round(overlapWidth)}x${Math.round(overlapHeight)}`,
            severity: a.matches("[data-floating-object]") || b.matches("[data-floating-object]") ? "blocker" : "major"
          });
        }
      }

      const fixedStickyElements = Array.from(document.querySelectorAll("[data-fixed-overlay], body *"))
        .filter(isVisible)
        .filter((element) => {
          const position = window.getComputedStyle(element).position;
          return position === "fixed" || position === "sticky" || element.matches("[data-fixed-overlay]");
        });
      for (const overlay of fixedStickyElements) {
        const overlayRect = overlay.getBoundingClientRect();
        for (const protectedElement of protectedTextElements) {
          if (overlay.contains(protectedElement) || protectedElement.contains(overlay)) continue;
          const protectedRect = protectedElement.getBoundingClientRect();
          if (!overlaps(overlayRect, protectedRect)) continue;
          issues.push({
            issue: "fixed/sticky overlay collision",
            evidence: `${overlay.getAttribute("data-fixed-overlay") || overlay.tagName.toLowerCase()} covers protected text "${(protectedElement.textContent || "").trim().slice(0, 90)}"`,
            severity: "blocker"
          });
        }
      }

      const edgeCriticalElements = Array.from(document.querySelectorAll("[data-layout-critical], [data-protected-text], [data-card], [data-panel], [data-active-panel], [data-text-fit], [data-nav-item], [data-nav-label], button, [role='button'], a"))
        .filter(isVisible)
        .filter((element) => (element.textContent || "").trim().length > 0)
        .filter((element) => element.getAttribute("data-viewport-crop-allowed") !== "true" && element.getAttribute("data-editorial-crop") !== "intentional");
      for (const element of edgeCriticalElements) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -1 || rect.top > viewportHeight + 1) continue;
        if (rect.left < -1 || rect.right > viewportWidth + 1 || rect.top < -1 || rect.bottom > viewportHeight + 1) {
          issues.push({
            issue: "viewport-edge clipping",
            evidence: `${element.getAttribute("data-layout-critical") || element.getAttribute("data-card") || element.tagName.toLowerCase()} is partially outside viewport: "${(element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 90)}"`,
            severity: "blocker"
          });
        }
      }

      const horizontalStages = Array.from(document.querySelectorAll("[data-horizontal-stage], [data-scroll-stage][data-scroll-axis='x'], [data-scroll-route='horizontal']"))
        .filter(isVisible);
      for (const stage of horizontalStages) {
        const activePanels = Array.from(stage.querySelectorAll("[data-active-panel], [data-card][data-active='true'], [data-panel][data-active='true'], [aria-current='true']"))
          .filter(isVisible);
        const panels = activePanels.length > 0
          ? activePanels
          : Array.from(stage.querySelectorAll("[data-card], [data-panel], [data-layout-critical]"))
            .filter(isVisible)
            .filter((element) => (element.textContent || "").trim().length > 0);
        for (const panel of panels) {
          const rect = panel.getBoundingClientRect();
          const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
          const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
          const visibleRatio = rect.width * rect.height > 0 ? (visibleWidth * visibleHeight) / (rect.width * rect.height) : 1;
          if (visibleRatio < 0.92 || rect.left < -1 || rect.right > viewportWidth + 1) {
            issues.push({
              issue: activePanels.length > 0 ? "horizontal active panel clipped" : "horizontal scroll partial content",
              evidence: `"${(panel.textContent || "").trim().replace(/\s+/g, " ").slice(0, 90)}" is ${Math.round(visibleRatio * 100)}% visible in horizontal stage`,
              severity: "blocker"
            });
          }
        }
      }

      if (document.documentElement.scrollWidth > viewportWidth + 1 && horizontalStages.length === 0) {
        issues.push({
          issue: "body horizontal overflow",
          evidence: `document width ${document.documentElement.scrollWidth} > viewport ${viewportWidth}`,
          severity: "blocker"
        });
      }

      const visibleArea = Array.from(document.querySelectorAll("h1,h2,h3,h4,p,button,a,nav,[role='button'],[data-card],[data-panel],[data-active-panel],[data-layout-critical],[data-protected-text],[data-media-object],img,video,canvas"))
        .filter(isVisible)
        .map((element) => element.getBoundingClientRect())
        .filter((rect) => rect.bottom > 0 && rect.top < viewportHeight)
        .reduce((area, rect) => area + Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)) * Math.min(rect.width, viewportWidth), 0);

      if (!document.querySelector("[data-intentional-blank-stage]") && visibleArea < viewportWidth * viewportHeight * 0.06) {
        issues.push({
          issue: "blank scroll state",
          evidence: `meaningful content area under 6% of viewport`,
          severity: "major"
        });
      }

      return issues;
    });

      for (const issue of result) {
        findings.push({ viewport: `${width}x${height}`, ...issue });
      }

      await page.close();
    }
  }
} finally {
  await browser.close();
}

const hasBlocker = findings.some((finding) => finding.severity === "blocker");
const verdict = hasBlocker ? "Block" : findings.length ? "Partial" : "Pass";

writeReports({
  verdict,
  url,
  viewports,
  screenshots,
  findings
});

console.log(`Wrote layout integrity report to ${outDir}.`);

if (failOnBlocker && hasBlocker) {
  process.exit(1);
}
