#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const command = args[0];

const paths = {
  registry: "skills/skill-registry.json",
  briefTemplate: "templates/design-brief.template.json"
};

const requiredBriefFields = [
  "projectName",
  "projectType",
  "primaryUser",
  "primaryObject",
  "primaryAction",
  "visualWeight",
  "taskType",
  "isVisualHeavy",
  "inspirationSources",
  "visualReferences",
  "targetScreens",
  "constraints",
  "forbiddenDirections",
  "requiredSkills",
  "approvalState"
];

const requiredConceptFields = [
  "id",
  "name",
  "visualMetaphor",
  "composition",
  "focalObject",
  "emotionalHook",
  "whatIsHidden",
  "whatIsAbsent",
  "clicheAvoidance",
  "desireMechanism",
  "desktop1440Strategy",
  "tablet768Strategy",
  "mobile390Strategy",
  "failureMode"
];

const requiredScreenshotFields = [
  "targetScreenshots",
  "currentScreenshots",
  "viewportChecks",
  "overlapDetected",
  "horizontalScrollDetected",
  "unreadableTextDetected",
  "deadButtonsFound",
  "visualTargetComparison",
  "remainingWeaknesses"
];

function readJson(filePath) {
  const absolute = path.resolve(root, filePath);
  try {
    return JSON.parse(fs.readFileSync(absolute, "utf8"));
  } catch (error) {
    fail(`Could not read JSON: ${filePath}\n${error.message}`);
  }
}

function writeJsonIfMissing(filePath, data) {
  const absolute = path.resolve(root, filePath);
  if (fs.existsSync(absolute)) {
    return { created: false, filePath };
  }
  fs.writeFileSync(absolute, `${JSON.stringify(data, null, 2)}\n`);
  return { created: true, filePath };
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function pass(message, details = null) {
  console.log(message);
  if (details) {
    console.log(JSON.stringify(details, null, 2));
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function missingFields(object, fields) {
  return fields.filter((field) => !(field in object));
}

function getRegistry() {
  const registry = readJson(paths.registry);
  if (!Array.isArray(registry.skills)) {
    fail("Skill registry is invalid: missing skills array.");
  }
  return registry;
}

function listSkills() {
  const registry = getRegistry();
  for (const skill of registry.skills) {
    console.log(`${skill.id}\t${skill.path}\t${skill.description}`);
  }
}

function routeTask() {
  const taskIndex = args.indexOf("--task");
  if (taskIndex === -1 || !args[taskIndex + 1]) {
    fail('Usage: node tools/design-os.mjs route --task "..."');
  }

  const task = args[taskIndex + 1];
  const normalized = task.toLowerCase();
  const registry = getRegistry();
  const selected = [];

  for (const skill of registry.skills) {
    const matchedKeywords = (skill.routeKeywords || []).filter((keyword) => normalized.includes(keyword.toLowerCase()));
    if (matchedKeywords.length > 0) {
      selected.push({
        id: skill.id,
        path: skill.path,
        matchedKeywords
      });
    }
  }

  if (selected.length === 0) {
    selected.push({
      id: "screenshot-scorecard-review",
      path: "skills/screenshot-scorecard-review/SKILL.md",
      matchedKeywords: ["fallback-review"]
    });
  }

  const unique = [];
  const seen = new Set();
  for (const skill of selected) {
    if (!seen.has(skill.id)) {
      unique.push(skill);
      seen.add(skill.id);
    }
  }

  console.log(JSON.stringify({ task, recommendedSkills: unique }, null, 2));
}

function newBrief() {
  const template = readJson(paths.briefTemplate);
  const result = writeJsonIfMissing("design-brief.local.json", template);
  pass(result.created ? "Created design-brief.local.json" : "design-brief.local.json already exists");
}

function validateBrief(filePath) {
  if (!filePath) {
    fail("Usage: node tools/design-os.mjs validate-brief <file>");
  }
  const brief = readJson(filePath);
  const errors = [];
  const missing = missingFields(brief, requiredBriefFields);
  if (missing.length > 0) {
    errors.push(`Missing required fields: ${missing.join(", ")}`);
  }

  for (const field of ["projectName", "projectType", "primaryUser", "primaryObject", "primaryAction", "visualWeight", "taskType"]) {
    if (field in brief && !isNonEmptyString(brief[field])) {
      errors.push(`${field} must be a non-empty string.`);
    }
  }

  for (const field of ["inspirationSources", "visualReferences", "targetScreens", "constraints", "forbiddenDirections", "requiredSkills"]) {
    if (field in brief && !Array.isArray(brief[field])) {
      errors.push(`${field} must be an array.`);
    }
  }

  if (typeof brief.isVisualHeavy !== "boolean") {
    errors.push("isVisualHeavy must be a boolean.");
  }

  const visualTaskTypes = new Set(["visual-heavy-ui", "new-app", "redesign", "selection-first", "gallery", "roster", "product-discovery"]);
  const impliesVisualHeavy = brief.visualWeight === "high" || visualTaskTypes.has(brief.taskType);
  if (impliesVisualHeavy && brief.isVisualHeavy !== true) {
    errors.push("Visual-heavy work must set isVisualHeavy to true.");
  }

  if (brief.isVisualHeavy === true) {
    if (!isNonEmptyArray(brief.inspirationSources) && !isNonEmptyArray(brief.visualReferences)) {
      errors.push("Visual-heavy work must include at least one inspirationSource or visualReference.");
    }
    if (!isNonEmptyArray(brief.targetScreens)) {
      errors.push("Visual-heavy work must include targetScreens.");
    }
  }

  if (!brief.approvalState || typeof brief.approvalState !== "object") {
    errors.push("approvalState must be an object.");
  } else {
    for (const field of ["status", "approvedBy", "approvalNotes"]) {
      if (!(field in brief.approvalState)) {
        errors.push(`approvalState.${field} is required.`);
      }
    }
    if (brief.approvalState.status && !["not-required", "pending", "approved", "rejected"].includes(brief.approvalState.status)) {
      errors.push("approvalState.status must be not-required, pending, approved, or rejected.");
    }
  }

  if (errors.length > 0) {
    fail(`Design brief failed validation:\n- ${errors.join("\n- ")}`);
  }
  pass("Design brief valid", { file: filePath, isVisualHeavy: brief.isVisualHeavy, requiredSkills: brief.requiredSkills });
}

function validateConcepts(filePath, options = {}) {
  if (!filePath) {
    fail("Usage: node tools/design-os.mjs validate-concepts <file>");
  }
  const artifact = readJson(filePath);
  const errors = getConceptErrors(artifact, options);
  if (errors.length > 0) {
    fail(`Visual concepts failed validation:\n- ${errors.join("\n- ")}`);
  }
  pass("Visual concepts valid", {
    file: filePath,
    conceptCount: artifact.concepts.length,
    approvalStatus: artifact.approvalStatus,
    selectedConceptId: artifact.selectedConceptId
  });
}

function getConceptErrors(artifact, options = {}) {
  const errors = [];
  for (const field of ["projectName", "selectedConceptId", "approvalStatus", "approvedBy", "approvalNotes", "concepts"]) {
    if (!(field in artifact)) {
      errors.push(`${field} is required.`);
    }
  }

  if (!["pending", "approved", "rejected"].includes(artifact.approvalStatus)) {
    errors.push("approvalStatus must be pending, approved, or rejected.");
  }

  if (!Array.isArray(artifact.concepts)) {
    errors.push("concepts must be an array.");
    return errors;
  }

  if (artifact.concepts.length !== 3) {
    errors.push("concepts must contain exactly 3 concepts.");
  }

  const ids = new Set();
  artifact.concepts.forEach((concept, index) => {
    const missing = missingFields(concept, requiredConceptFields);
    if (missing.length > 0) {
      errors.push(`concepts[${index}] missing: ${missing.join(", ")}`);
    }
    for (const field of requiredConceptFields) {
      if (field in concept && !isNonEmptyString(concept[field])) {
        errors.push(`concepts[${index}].${field} must be a non-empty string.`);
      }
    }
    if (concept.id) {
      if (ids.has(concept.id)) {
        errors.push(`Duplicate concept id: ${concept.id}`);
      }
      ids.add(concept.id);
    }
  });

  if (artifact.approvalStatus === "approved") {
    if (!isNonEmptyString(artifact.selectedConceptId)) {
      errors.push("approved concepts must include selectedConceptId.");
    } else if (!ids.has(artifact.selectedConceptId)) {
      errors.push("selectedConceptId must match one of the concept ids.");
    }
    if (!isNonEmptyString(artifact.approvedBy)) {
      errors.push("approved concepts must include approvedBy.");
    }
  }

  if (options.requirePendingOrApproved && !["pending", "approved"].includes(artifact.approvalStatus)) {
    errors.push("visual-heavy gate requires approvalStatus pending or approved.");
  }

  return errors;
}

function validateScreenshotReport(filePath) {
  if (!filePath) {
    fail("Usage: node tools/design-os.mjs validate-screenshot-report <file>");
  }
  const report = readJson(filePath);
  const errors = [];
  const missing = missingFields(report, requiredScreenshotFields);
  if (missing.length > 0) {
    errors.push(`Missing required fields: ${missing.join(", ")}`);
  }

  if (!report.viewportChecks || typeof report.viewportChecks !== "object") {
    errors.push("viewportChecks must be an object.");
  } else {
    for (const viewport of ["390", "768", "1440"]) {
      if (!report.viewportChecks[viewport]) {
        errors.push(`viewportChecks.${viewport} is required.`);
      } else {
        const viewportMissing = missingFields(report.viewportChecks[viewport], [
          "screenshot",
          "primaryObjectVisible",
          "primaryActionVisible",
          "noHorizontalScroll",
          "noOverlap",
          "readableText",
          "notes"
        ]);
        if (viewportMissing.length > 0) {
          errors.push(`viewportChecks.${viewport} missing: ${viewportMissing.join(", ")}`);
        }
      }
    }
  }

  for (const field of ["overlapDetected", "horizontalScrollDetected", "unreadableTextDetected"]) {
    if (field in report && typeof report[field] !== "boolean") {
      errors.push(`${field} must be a boolean.`);
    }
  }

  if (!Array.isArray(report.deadButtonsFound)) {
    errors.push("deadButtonsFound must be an array.");
  }
  if (!Array.isArray(report.remainingWeaknesses)) {
    errors.push("remainingWeaknesses must be an array.");
  }

  if (errors.length > 0) {
    fail(`Screenshot report failed validation:\n- ${errors.join("\n- ")}`);
  }
  pass("Screenshot report valid", { file: filePath });
}

function checkVisualGate(briefPath, conceptsPath) {
  if (!briefPath || !conceptsPath) {
    fail("Usage: node tools/design-os.mjs check-visual-gate <brief> <concepts>");
  }
  const brief = readJson(briefPath);
  const concepts = readJson(conceptsPath);

  const briefErrors = [];
  const missing = missingFields(brief, requiredBriefFields);
  if (missing.length > 0) {
    briefErrors.push(`Brief missing required fields: ${missing.join(", ")}`);
  }
  if (briefErrors.length > 0) {
    fail(`Visual gate failed:\n- ${briefErrors.join("\n- ")}`);
  }

  if (brief.isVisualHeavy !== true) {
    pass("Visual gate not required", { file: briefPath, isVisualHeavy: brief.isVisualHeavy });
    return;
  }

  const conceptErrors = getConceptErrors(concepts, { requirePendingOrApproved: true });
  if (conceptErrors.length > 0) {
    fail(`Visual gate failed:\n- ${conceptErrors.join("\n- ")}`);
  }

  pass("Visual gate satisfied", {
    brief: briefPath,
    concepts: conceptsPath,
    approvalStatus: concepts.approvalStatus,
    conceptCount: concepts.concepts.length
  });
}

function showHelp() {
  console.log(`Miguel Design OS P0 CLI

Commands:
  list-skills
  route --task "..."
  new-brief
  validate-brief <file>
  validate-concepts <file>
  validate-screenshot-report <file>
  check-visual-gate <brief> <concepts>
`);
}

switch (command) {
  case "list-skills":
    listSkills();
    break;
  case "route":
    routeTask();
    break;
  case "new-brief":
    newBrief();
    break;
  case "validate-brief":
    validateBrief(args[1]);
    break;
  case "validate-concepts":
    validateConcepts(args[1]);
    break;
  case "validate-screenshot-report":
    validateScreenshotReport(args[1]);
    break;
  case "check-visual-gate":
    checkVisualGate(args[1], args[2]);
    break;
  case undefined:
  case "help":
  case "--help":
  case "-h":
    showHelp();
    break;
  default:
    fail(`Unknown command: ${command}\nRun: node tools/design-os.mjs help`);
}
