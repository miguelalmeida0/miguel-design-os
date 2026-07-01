import { exampleBrief } from "./data/example-brief";
import { CinematicStage } from "./templates/cinematic-stage";
import { EditorialInterface } from "./templates/editorial-interface";
import { ImmersiveLanding } from "./templates/immersive-landing";
import { ProductConfigurator } from "./templates/product-configurator";
import { SelectionRoster } from "./templates/selection-roster";
import { ToolWorkbench } from "./templates/tool-workbench";

const concepts = [
  {
    id: "1",
    eyebrow: "Concept 1",
    title: "Cinematic Robot Stage",
    summary: "One selected robot dominates a launch-stage composition.",
    component: <CinematicStage brief={exampleBrief} />
  },
  {
    id: "2",
    eyebrow: "Concept 2",
    title: "Selection Roster Forge",
    summary: "A selection-first roster makes comparison and choice the first interaction.",
    component: <SelectionRoster brief={exampleBrief} />
  },
  {
    id: "3",
    eyebrow: "Concept 3",
    title: "Skill Configurator Bay",
    summary: "A product-configurator shell turns skills into visible modules.",
    component: <ProductConfigurator brief={exampleBrief} />
  }
];

function getConceptId() {
  const match = window.location.pathname.match(/\/concept\/(\d+)/);
  return match?.[1] || "1";
}

export default function App() {
  const concept = concepts.find((item) => item.id === getConceptId()) || concepts[0];

  return (
    <main className="preview-shell">
      <section className="preview-topbar" aria-label="Preview metadata">
        <div>
          <span>{concept.eyebrow}</span>
          <strong>{concept.title}</strong>
        </div>
        <nav aria-label="Concept routes">
          {concepts.map((item) => (
            <a key={item.id} href={`/concept/${item.id}`} aria-current={item.id === concept.id ? "page" : undefined}>
              {item.id}
            </a>
          ))}
        </nav>
      </section>
      {concept.component}
      <section className="template-strip" aria-label="Template coverage">
        <ImmersiveLanding brief={exampleBrief} compact />
        <EditorialInterface brief={exampleBrief} compact />
        <ToolWorkbench brief={exampleBrief} compact />
      </section>
    </main>
  );
}
