import { useState } from "react";
import { copyText } from "../../lib/exportUtils";

export function CommandBlock({ command, label = "Copy" }: { command: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="rounded-lg border border-white/10 bg-black/35 p-3">
      <code className="block overflow-x-auto whitespace-nowrap text-sm text-zinc-200">{command}</code>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-3 rounded-md border border-acid/40 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-acid transition hover:bg-acid hover:text-obsidian"
      >
        {copied ? "Copied" : label}
      </button>
    </div>
  );
}
