import type { ExampleBrief } from "../data/example-brief";

export function CinematicStage({ brief }: { brief: ExampleBrief }) {
  const robot = brief.robots[0];

  return (
    <section className="concept concept-stage">
      <div className="stage-copy">
        <p className="kicker">{brief.projectName}</p>
        <h1>{robot.name}</h1>
        <p>{robot.role} ready for a precision skill install.</p>
        <div className="stage-actions">
          <button type="button">Select Unit</button>
          <button type="button" className="ghost">Inspect Frame</button>
        </div>
      </div>
      <div className="robot-hero" aria-label={`${robot.name} robot preview`}>
        <div className="robot-core">
          <span className="robot-head" />
          <span className="robot-chest" />
          <span className="robot-arm left" />
          <span className="robot-arm right" />
          <span className="robot-leg left" />
          <span className="robot-leg right" />
        </div>
      </div>
      <aside className="stage-telemetry" aria-label="Robot telemetry">
        <span>Readiness</span>
        <strong>{robot.stat}</strong>
        <small>{brief.skills.slice(0, 3).join(" / ")}</small>
      </aside>
    </section>
  );
}
