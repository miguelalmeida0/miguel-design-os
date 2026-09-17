import type { ExampleBrief } from "../data/example-brief";

export function ImmersiveLanding({ brief, compact = false }: { brief: ExampleBrief; compact?: boolean }) {
  return (
    <article className={compact ? "mini-template immersive-mini" : "concept immersive-template"}>
      <span className="kicker">Immersive landing</span>
      <strong>{brief.primaryObject}</strong>
      <p>Full-bleed object story with one visible promise and restrained product proof.</p>
    </article>
  );
}
