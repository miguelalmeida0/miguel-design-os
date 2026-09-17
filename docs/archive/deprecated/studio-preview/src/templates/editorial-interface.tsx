import type { ExampleBrief } from "../data/example-brief";

export function EditorialInterface({ brief, compact = false }: { brief: ExampleBrief; compact?: boolean }) {
  return (
    <article className={compact ? "mini-template editorial-mini" : "concept editorial-template"}>
      <span className="kicker">Editorial/data</span>
      <strong>{brief.audience}</strong>
      <p>Readable comparison narrative with data revealed after object selection.</p>
    </article>
  );
}
