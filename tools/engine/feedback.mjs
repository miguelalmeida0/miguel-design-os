import { createHash, randomUUID } from "node:crypto";

export function recordFeedback(store, { quote, scope, context, project, key, source }) {
  if (typeof quote !== "string" || !quote.trim() || quote.length > 4000) throw new Error("Feedback requires the user's exact quote, at most 4,000 characters.");
  if (!["global", "context", "project"].includes(scope)) throw new Error("Choose feedback scope: global, context, or project.");
  if (scope === "context" && !context) throw new Error("Context-scoped feedback requires --context.");
  if (scope === "project" && !project) throw new Error("Project-scoped feedback requires --project.");
  if (!key?.trim() || !source?.trim()) throw new Error("Feedback requires --key and --source so corrections can be traced and replaced.");
  if ((scope !== "context" && context) || (scope !== "project" && project)) throw new Error("Scope does not match the supplied context/project.");
  return store.update(state => {
    const sameScope = preference => preference.author === "user" && preference.scope === scope && (preference.context ?? null) === (context ?? null) && (preference.project ?? null) === (project ?? null) && preference.key === key;
    const duplicate = state.preferences.find(preference => sameScope(preference) && preference.quote === quote && preference.status === "active");
    if (duplicate) return { preference: duplicate, created: false, changed: false };
    const id = createHash("sha256").update(randomUUID()).digest("hex");
    for (const preference of state.preferences) {
      if (preference.status === "active" && sameScope(preference)) {
        preference.status = "superseded";
        preference.supersededBy = id;
      }
    }
    const preference = { id, author: "user", scope, quote, statement: quote, key, source, status: "active", confidence: "explicit", recordedAt: new Date().toISOString() };
    if (context) preference.context = context;
    if (project) preference.project = project;
    state.preferences.push(preference);
    return { preference, created: true };
  });
}
