import type { ExampleBrief } from "../data/example-brief";

export function ProductConfigurator({ brief }: { brief: ExampleBrief }) {
  return (
    <section className="concept concept-configurator">
      <div className="config-panel">
        <p className="kicker">Configurator</p>
        <h1>Install skill modules like physical parts.</h1>
        <div className="module-list">
          {brief.skills.map((skill, index) => (
            <button key={skill} type="button" className={index === 2 ? "selected" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {skill}
            </button>
          ))}
        </div>
      </div>
      <div className="config-preview">
        <div className="module-orbit one" />
        <div className="module-orbit two" />
        <div className="config-robot" />
      </div>
      <div className="config-output">
        <span>Preview result</span>
        <strong>Vision upgrade changes path confidence.</strong>
      </div>
    </section>
  );
}
