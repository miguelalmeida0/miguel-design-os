export function SectionHeader({ kicker, title, summary }: { kicker: string; title: string; summary: string }) {
  return (
    <header className="max-w-4xl">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-acid">{kicker}</p>
      <h1 className="mt-3 text-balance text-4xl font-black leading-[0.95] text-mist md:text-6xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">{summary}</p>
    </header>
  );
}
