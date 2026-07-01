import type { ExampleBrief } from "../data/example-brief";

export function SelectionRoster({ brief }: { brief: ExampleBrief }) {
  return (
    <section className="concept concept-roster">
      <div className="roster-header">
        <p className="kicker">Selection first</p>
        <h1>Choose the machine before the dashboard.</h1>
      </div>
      <div className="roster-grid">
        {brief.robots.map((robot, index) => (
          <button type="button" className={`roster-card ${index === 1 ? "active" : ""}`} key={robot.name}>
            <span className="mini-bot" />
            <strong>{robot.name}</strong>
            <small>{robot.role}</small>
            <b>{robot.stat}</b>
          </button>
        ))}
      </div>
      <aside className="roster-detail">
        <span>Selected module</span>
        <strong>Neo / Dexterity Scout</strong>
        <p>Fast swap tests, grip tuning, and controlled balance upgrades.</p>
      </aside>
    </section>
  );
}
