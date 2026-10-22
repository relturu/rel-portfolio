import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-16 space-y-6">
      <div className="eyebrow">404 · Not found</div>
      <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tight -ml-[0.04em] text-ink leading-none">LOST.</h1>
      <p className="font-sans text-base sm:text-lg text-muted max-w-xl">That page doesn&apos;t exist.</p>
      <Link
        href="/work"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-control bg-ink text-page font-mono text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
      >
        Back to work
      </Link>
    </section>
  );
}
