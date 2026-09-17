import type { StudioRoute } from "../../types/studio";

const navItems: Array<{ id: StudioRoute; label: string }> = [
  { id: "command", label: "COMMAND" },
  { id: "inspiration", label: "INSPIRATION" },
  { id: "concepts", label: "CONCEPTS" },
  { id: "target-copy", label: "TARGET COPY" },
  { id: "qa-runs", label: "QA RUNS" },
  { id: "tooling/agents/catalog", label: "AGENTS" },
  { id: "prompts", label: "PROMPTS" }
];

export function TopNav({ route, onRouteChange }: { route: StudioRoute; onRouteChange: (route: StudioRoute) => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-obsidian/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <button type="button" onClick={() => onRouteChange("command")} className="text-left">
          <span className="block text-xs font-black uppercase tracking-[0.22em] text-acid">Miguel Design OS</span>
          <strong className="text-lg text-mist">Studio</strong>
        </button>
        <nav className="flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onRouteChange(item.id)}
              className={`min-h-10 whitespace-nowrap rounded-md border px-3 text-xs font-black tracking-[0.08em] transition ${
                route === item.id
                  ? "border-acid bg-acid text-obsidian"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-signal/50 hover:text-mist"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
