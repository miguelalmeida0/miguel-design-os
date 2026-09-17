import { statusTone } from "../../lib/statusEngine";
import type { StatusState, TrustLevel } from "../../types/studio";

export function StatusPill({ value }: { value: StatusState | TrustLevel | "available" }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] ${statusTone(value)}`}>
      {value}
    </span>
  );
}
