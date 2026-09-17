import type { ExampleBrief } from "../data/example-brief";

export function ToolWorkbench({ brief, compact = false }: { brief: ExampleBrief; compact?: boolean }) {
  return (
    <article className={compact ? "mini-template workbench-mini" : "concept workbench-template"}>
      <span className="kicker">Tool workbench</span>
      <strong>{brief.primaryAction}</strong>
      <p>Dense but calm tool surface for productionizing only after visual shell approval.</p>
    </article>
  );
}
