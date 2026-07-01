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
  "hiddenInformation",
  "absentElements",
  "clicheAvoidance",
  "desireMechanism",
  "responsiveStrategy",
  "failureMode",
  "previewRoute",
  "screenshots"
];

const requiredConceptStringFields = [
  "id",
  "name",
  "visualMetaphor",
  "composition",
  "focalObject",
  "emotionalHook",
  "hiddenInformation",
  "absentElements",
  "clicheAvoidance",
  "desireMechanism",
  "failureMode",
  "previewRoute"
];

const viewportKeys = ["1440", "768", "390"];

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

function writeJson(filePath, data) {
  const absolute = path.resolve(root, filePath);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, `${JSON.stringify(data, null, 2)}\n`);
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

function getFlagValue(flag) {
  const index = args.indexOf(flag);
  if (index === -1 || !args[index + 1]) {
    return "";
  }
  return args[index + 1];
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function missingFields(object, fields) {
  return fields.filter((field) => !(field in object));
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function validateViewportObject(value, label, errors) {
  if (!isPlainObject(value)) {
    errors.push(`${label} must be an object with 1440, 768, and 390 keys.`);
    return;
  }

  for (const viewport of viewportKeys) {
    if (!isNonEmptyString(value[viewport])) {
      errors.push(`${label}.${viewport} must be a non-empty string.`);
    }
  }
}

function artifactPathExists(filePath) {
  if (!isNonEmptyString(filePath) || /^https?:\/\//i.test(filePath)) {
    return false;
  }
  const absolute = path.isAbsolute(filePath) ? filePath : path.resolve(root, filePath);
  return fs.existsSync(absolute);
}

function validateScreenshotFiles(value, label, errors) {
  if (!isPlainObject(value)) {
    return;
  }

  for (const viewport of viewportKeys) {
    if (isNonEmptyString(value[viewport]) && !artifactPathExists(value[viewport])) {
      errors.push(`${label}.${viewport} must point to an existing local screenshot file.`);
    }
  }
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
  const compositionFingerprints = new Set();
  const conceptFingerprints = new Set();

  artifact.concepts.forEach((concept, index) => {
    const missing = missingFields(concept, requiredConceptFields);
    if (missing.length > 0) {
      errors.push(`concepts[${index}] missing: ${missing.join(", ")}`);
    }

    for (const field of requiredConceptStringFields) {
      if (field in concept && !isNonEmptyString(concept[field])) {
        errors.push(`concepts[${index}].${field} must be a non-empty string.`);
      }
    }

    if ("responsiveStrategy" in concept) {
      validateViewportObject(concept.responsiveStrategy, `concepts[${index}].responsiveStrategy`, errors);
    }

    if ("screenshots" in concept) {
      validateViewportObject(concept.screenshots, `concepts[${index}].screenshots`, errors);
      if (options.requireScreenshotFiles) {
        validateScreenshotFiles(concept.screenshots, `concepts[${index}].screenshots`, errors);
      }
    }

    if (concept.id) {
      if (ids.has(concept.id)) {
        errors.push(`Duplicate concept id: ${concept.id}`);
      }
      ids.add(concept.id);
    }

    if (isNonEmptyString(concept.composition)) {
      compositionFingerprints.add(normalizeText(concept.composition));
    }

    if (isNonEmptyString(concept.visualMetaphor) || isNonEmptyString(concept.composition)) {
      conceptFingerprints.add(`${normalizeText(concept.visualMetaphor)}|${normalizeText(concept.composition)}`);
    }
  });

  if (artifact.concepts.length === 3 && compositionFingerprints.size === 1) {
    errors.push("concepts must be visually distinct; all three compositions are identical.");
  }

  if (artifact.concepts.length === 3 && conceptFingerprints.size < 3) {
    errors.push("concepts must be distinct; duplicate visual metaphor/composition pairs found.");
  }

  const approvalRequired = options.requireApproved === true || artifact.approvalStatus === "approved";
  if (approvalRequired) {
    if (!isNonEmptyString(artifact.selectedConceptId)) {
      errors.push("approved concepts must include selectedConceptId.");
    } else if (!ids.has(artifact.selectedConceptId)) {
      errors.push("selectedConceptId must match one of the concept ids.");
    }
    if (!isNonEmptyString(artifact.approvedBy)) {
      errors.push("approved concepts must include approvedBy.");
    }
  }

  if (options.requireApproved && artifact.approvalStatus !== "approved") {
    errors.push("visual-heavy gate requires approvalStatus approved after Migi reviews rendered previews.");
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

  const conceptErrors = getConceptErrors(concepts, { requireApproved: true, requireScreenshotFiles: true });
  if (conceptErrors.length > 0) {
    fail(`Visual gate failed:\n- ${conceptErrors.join("\n- ")}`);
  }

  pass("Visual gate satisfied", {
    brief: briefPath,
    concepts: conceptsPath,
    approvalStatus: concepts.approvalStatus,
    selectedConceptId: concepts.selectedConceptId,
    conceptCount: concepts.concepts.length
  });
}

function approveConcept(filePath) {
  if (!filePath) {
    fail("Usage: node tools/design-os.mjs approve-concept <concepts-file> --id <concept-id> [--by <name>] [--notes <text>]");
  }

  const conceptId = getFlagValue("--id");
  if (!conceptId) {
    fail("approve-concept requires --id <concept-id>.");
  }

  const artifact = readJson(filePath);
  const errors = getConceptErrors(artifact);
  if (errors.length > 0) {
    fail(`Cannot approve invalid visual concepts:\n- ${errors.join("\n- ")}`);
  }

  const concept = artifact.concepts.find((candidate) => candidate.id === conceptId);
  if (!concept) {
    fail(`Cannot approve missing concept id: ${conceptId}`);
  }

  artifact.approvalStatus = "approved";
  artifact.selectedConceptId = conceptId;
  artifact.approvedBy = getFlagValue("--by") || "Migi";
  artifact.approvalNotes = getFlagValue("--notes") || `Approved via Miguel Design OS CLI: ${concept.name}`;

  writeJson(filePath, artifact);
  pass("Concept approved", {
    file: filePath,
    selectedConceptId: conceptId,
    approvedBy: artifact.approvedBy
  });
}

function compileAgentPrompt() {
  const briefPath = getFlagValue("--brief");
  const conceptsPath = getFlagValue("--concepts");
  const outPath = getFlagValue("--out");

  if (!briefPath || !conceptsPath || !outPath) {
    fail("Usage: node tools/design-os.mjs compile-agent-prompt --brief <brief> --concepts <concepts> --out <file>");
  }

  const brief = readJson(briefPath);
  const concepts = readJson(conceptsPath);
  const missing = missingFields(brief, requiredBriefFields);
  if (missing.length > 0) {
    fail(`Cannot compile prompt from invalid brief:\n- Missing required fields: ${missing.join(", ")}`);
  }

  const conceptErrors = getConceptErrors(concepts, { requireApproved: true, requireScreenshotFiles: true });
  if (conceptErrors.length > 0) {
    fail(`Cannot compile implementation prompt before Visual Concept Gate passes:\n- ${conceptErrors.join("\n- ")}`);
  }

  const selected = concepts.concepts.find((concept) => concept.id === concepts.selectedConceptId);
  if (!selected) {
    fail("Cannot compile prompt: selectedConceptId does not match a concept.");
  }

  const prompt = `# Miguel Design OS Implementation Prompt

Project: ${brief.projectName}
Project type: ${brief.projectType}
Task type: ${brief.taskType}
Primary user: ${brief.primaryUser}
Primary object: ${brief.primaryObject}
Primary action: ${brief.primaryAction}

## Gate Status

Visual Concept Gate v2 passed.
Approved concept: ${selected.name} (${selected.id})
Approved by: ${concepts.approvedBy}
Approval notes: ${concepts.approvalNotes}

Do not implement any other concept unless Migi explicitly changes approval.

## Approved Visual Concept

Visual metaphor: ${selected.visualMetaphor}
Composition: ${selected.composition}
Focal object: ${selected.focalObject}
Emotional hook: ${selected.emotionalHook}
Hidden information: ${selected.hiddenInformation}
Absent elements: ${selected.absentElements}
Cliche avoidance: ${selected.clicheAvoidance}
Desire mechanism: ${selected.desireMechanism}
Failure mode: ${selected.failureMode}

Responsive strategy:
- 1440: ${selected.responsiveStrategy["1440"]}
- 768: ${selected.responsiveStrategy["768"]}
- 390: ${selected.responsiveStrategy["390"]}

Preview route: ${selected.previewRoute}
Concept screenshots:
- 1440: ${selected.screenshots["1440"]}
- 768: ${selected.screenshots["768"]}
- 390: ${selected.screenshots["390"]}

## Constraints

${brief.constraints.map((constraint) => `- ${constraint}`).join("\n")}

## Forbidden Directions

${brief.forbiddenDirections.map((direction) => `- ${direction}`).join("\n")}

## Required Skills

${brief.requiredSkills.map((skill) => `- ${skill}`).join("\n")}

## Implementation Standard

- Build the approved visual shell first.
- Preserve the primary object and primary action from the brief.
- Do not copy old apps literally.
- Do not flatten references into shallow traits.
- Capture implementation screenshots at 390 / 768 / 1440.
- Run the UI scorecard and patch blockers before claiming completion.
`;

  const absolute = path.resolve(root, outPath);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, prompt);
  pass("Compiled agent prompt", {
    out: outPath,
    selectedConceptId: selected.id
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
  check-visual-gate <brief> <concepts>   Requires 3 rendered concepts, screenshots, and approved selectedConceptId for visual-heavy briefs.
  validate-gate <brief> <concepts>        Alias for check-visual-gate.
  approve-concept <concepts> --id <id>    Marks one concept approved by Migi.
  compile-agent-prompt --brief <brief> --concepts <concepts> --out <file>
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
  case "validate-gate":
    checkVisualGate(args[1], args[2]);
    break;
  case "approve-concept":
    approveConcept(args[1]);
    break;
  case "compile-agent-prompt":
    compileAgentPrompt();
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
