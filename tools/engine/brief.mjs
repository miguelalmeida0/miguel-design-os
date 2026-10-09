import { applicablePreferences, contexts, searchReferences, verifyReference } from "./catalog.mjs";

const required = {
  audience: "Who will use this interface?",
  primaryObject: "What is the main thing the user works with?",
  primaryAction: "What must the user be able to accomplish?",
  context: `What is the project context (${contexts.join(", ")})?`
};

export function compileBrief(catalog, brief) {
  if (!brief || typeof brief !== "object" || Array.isArray(brief)) throw new Error("Brief must be a JSON object.");
  if (typeof brief.project !== "string" || !brief.project.trim()) throw new Error("Brief requires a project identifier.");
  const questions = Object.entries(required).filter(([field]) => typeof brief[field] !== "string" || !brief[field].trim()).map(([field, question]) => ({ field, question }));
  if (questions.length) return { status: "needs-brief", project: brief.project, questions, references: [], preferences: applicablePreferences(catalog, { project: brief.project, context: brief.context }) };
  if (!contexts.includes(brief.context)) throw new Error("Brief has an unknown project context.");
  if (brief.referenceIds !== undefined && (!Array.isArray(brief.referenceIds) || brief.referenceIds.length > 20 || brief.referenceIds.some(id => typeof id !== "string"))) throw new Error("referenceIds must contain at most 20 reference IDs.");
  const references = searchReferences(catalog, {
    context: brief.context,
    query: [brief.purpose, brief.primaryObject, brief.primaryAction, brief.visualIntent].filter(Boolean).join(" "),
    referenceIds: brief.referenceIds || [],
    limit: brief.referenceIds?.length || 4
  }).map(verifyReference);
  const preferences = applicablePreferences(catalog, { context: brief.context, project: brief.project });
  return {
    status: references.length ? "needs-reference-inspection" : "needs-references", project: brief.project,
    brief, questions: [], references, preferences,
    directionPolicy: "Use one grounded direction when evidence supports it. Ask for alternatives only when a consequential decision remains unresolved.",
    personalizationMethod: catalog.method,
    successMeasure: "Miguel's review time and time to an accepted, functioning design.",
    evidenceLimits: ["Feature observations are agent interpretations; endorsing a reference does not confirm every feature.", "Stills do not prove motion, working interactions, responsiveness or exact fonts."],
    nextAction: references.length ? "Open the listed original images with the host's image viewer before designing. Assign each selected reference a concrete role; do not average their styles." : "Supply relevant references for this context. Do not invent a visual style."
  };
}

export function renderPacket(packet) {
  const lines = ["# Project design packet", "", `Project: ${packet.project}`, `Status: ${packet.status}`, ""];
  if (packet.questions.length) lines.push("Blocking project questions:", ...packet.questions.map(item => `- ${item.question}`), "");
  if (packet.brief) lines.push(`Audience: ${packet.brief.audience}`, `Primary object: ${packet.brief.primaryObject}`, `Primary action: ${packet.brief.primaryAction}`, `Context: ${packet.brief.context}`, "");
  lines.push("Applicable corrections:", ...packet.preferences.map(preference => `- ${preference.quote} [${preference.scope}${preference.context ? ": " + preference.context : preference.project ? ": " + preference.project : ""}]`), "");
  for (const reference of packet.references) {
    lines.push(`Reference: ${reference.title}`, `Image: ${reference.path}`, `SHA-256: ${reference.verifiedHash}`, `Provenance: ${reference.observationProvenance}`);
    if (reference.endorsement) lines.push(`Miguel's endorsement: ${reference.endorsement.quote}`);
    lines.push(...reference.features.map(feature => `- Observed: ${feature}`), "");
  }
  if (packet.directionPolicy) lines.push(packet.directionPolicy, "", packet.nextAction, "", "Build the requested interface in the existing project. Keep semantic tokens, readable states, keyboard/focus behavior, reduced motion and responsive layout. Prove visible interactions in a browser before claiming completion. Keep client material private; do not deploy or use paid APIs without separate authorization.", "", `Measure: ${packet.successMeasure}`, "", packet.personalizationMethod, "");
  return lines.join("\n");
}
