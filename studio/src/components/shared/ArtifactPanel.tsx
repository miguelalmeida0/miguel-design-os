import { StatusPill } from "./StatusPill";
import type { StatusState } from "../../types/studio";
import type { ReactNode } from "react";

export function ArtifactPanel({
  title,
  status,
  children
}: {
  title: string;
  status: StatusState | "available";
  children: ReactNode;
}) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.045] p-4 shadow-cockpit">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-black uppercase tracking-[0.08em] text-mist">{title}</h3>
        <StatusPill value={status} />
      </div>
      <div className="mt-4 text-sm leading-6 text-zinc-300">{children}</div>
    </article>
  );
}
