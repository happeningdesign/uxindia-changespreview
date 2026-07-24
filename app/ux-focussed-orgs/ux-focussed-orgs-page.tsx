"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { orgs, categories, categoryColors } from "@/data/ux-focussed-orgs";
import type { OrgCategory } from "@/data/ux-focussed-orgs";

// ─── Animated section wrapper ───────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Highlight matching text ─────────────────────────────────────────────────
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-[#E85520]/20 text-[#E85520] rounded-[2px] not-italic">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

// ─── Individual org card ─────────────────────────────────────────────────────
function OrgCard({
  name,
  category,
  hq,
  description,
  query,
  index,
}: {
  name: string;
  category: OrgCategory;
  hq?: string;
  description?: string;
  query: string;
  index: number;
}) {
  const color = categoryColors[category];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 8) * 0.045,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="group relative bg-white rounded-2xl border border-page/8 p-5 flex flex-col gap-3 cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(13,13,13,0.09)] hover:border-page/14">
        {/* Category dot + label */}
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: color }}
          />
          <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-page/40 font-medium">
            {category}
          </span>
        </div>

        {/* Org name */}
        <h3
          className="leading-tight text-page transition-colors duration-200 group-hover:text-[#E85520]"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)",
          }}
        >
          <Highlight text={name} query={query} />
        </h3>

        {/* Description */}
        {description && (
          <p className="font-sans text-xs text-page/50 leading-relaxed flex-1">
            <Highlight text={description} query={query} />
          </p>
        )}

        {/* HQ */}
        {hq && (
          <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-page/6">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="text-page/30 flex-shrink-0"
            >
              <path
                d="M5 1C3.34 1 2 2.34 2 4c0 2.25 3 6 3 6s3-3.75 3-6c0-1.66-1.34-3-3-3Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-sans text-[10px] text-page/35">
              <Highlight text={hq} query={query} />
            </span>
          </div>
        )}

        {/* Hover accent strip */}
        <span
          className="absolute left-0 top-0 w-0.5 h-full rounded-l-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function UXFocussedOrgsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<OrgCategory | "All">("All");

  const filtered = useMemo(() => {
    return orgs.filter((o) => {
      const matchesCategory =
        activeCategory === "All" || o.category === activeCategory;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        o.name.toLowerCase().includes(q) ||
        o.category.toLowerCase().includes(q) ||
        (o.hq ?? "").toLowerCase().includes(q) ||
        (o.description ?? "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  // Group filtered orgs alphabetically
  const grouped = useMemo(() => {
    const map = new Map<string, typeof orgs>();
    filtered.forEach((o) => {
      const letter = o.name[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(o);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const letters = grouped.map(([l]) => l);

  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-page pt-[var(--navbar-height-desktop)] pb-20 md:pb-32"
        style={{ minHeight: "62vh" }}
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0 opacity-20"
        >
          {/* subtle dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(245,240,232,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-end h-full pt-16 md:pt-20">
          <motion.div style={{ y: textY }}>
            <Reveal>
              <p className="font-sans text-xs text-brand uppercase tracking-[0.3em] mb-6">
                UXINDIA 2026 · Bengaluru · Sep 23–27
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                className="leading-[0.95] text-balance mb-8"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(3.6rem, 9vw, 8.5rem)",
                  color: "#F5F0E8",
                }}
              >
                UX Focused
                <br />
                <span style={{ color: "#E85520" }}>Organisations</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-col md:flex-row md:items-end gap-6 md:justify-between">
                <p className="font-sans text-base md:text-lg text-white/55 leading-relaxed max-w-xl">
                  Companies and studios that invest deeply in UX as a strategic
                  discipline — attending, sponsoring, and shaping UXINDIA 2026.
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="font-sans text-4xl font-light text-white/10 leading-none"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontSize: "clamp(2.5rem, 4vw, 4rem)",
                    }}
                  >
                    {orgs.length}
                  </span>
                  <span className="font-sans text-xs text-white/30 uppercase tracking-[0.2em] leading-tight">
                    Organisations
                    <br />
                    listed
                  </span>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky filter bar ── */}
      <div className="sticky top-[var(--navbar-height-mobile)] md:top-[var(--navbar-height-desktop)] z-30 bg-cream/90 backdrop-blur-md border-b border-page/8">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-page/35 pointer-events-none"
            >
              <circle
                cx="7"
                cy="7"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10.5 10.5L13 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search organisations, categories, cities…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full font-sans text-sm bg-white border border-page/10 rounded-xl pl-10 pr-4 py-2.5 text-page placeholder:text-page/35 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-page/35 hover:text-page/70 transition-colors"
                aria-label="Clear search"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 3l8 8M11 3l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Results count */}
          <p className="font-sans text-xs text-page/40 hidden md:block flex-shrink-0">
            {filtered.length === orgs.length
              ? `${orgs.length} organisations`
              : `${filtered.length} of ${orgs.length}`}
          </p>
        </div>

        {/* Category pills — horizontal scroll */}
        <div className="max-w-6xl mx-auto px-6 pb-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory("All")}
              className={`font-sans text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap ${
                activeCategory === "All"
                  ? "bg-page text-cream border-page"
                  : "bg-transparent text-page/55 border-page/15 hover:border-page/35 hover:text-page"
              }`}
            >
              All categories
            </button>
            {categories.map((cat) => {
              const color = categoryColors[cat];
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(active ? "All" : cat)
                  }
                  className={`font-sans text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    active
                      ? "text-white border-transparent"
                      : "bg-transparent text-page/55 border-page/15 hover:border-page/35 hover:text-page"
                  }`}
                  style={
                    active
                      ? { backgroundColor: color, borderColor: color }
                      : {}
                  }
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: active ? "rgba(255,255,255,0.7)" : color }}
                  />
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Alphabet jump bar + content ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex gap-8">
        {/* Alphabet sidebar — desktop only */}
        <aside className="hidden lg:flex flex-col items-center gap-1 sticky top-[calc(var(--navbar-height-desktop)+120px)] self-start pt-1">
          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
            (letter) => {
              const active = letters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => {
                    if (!active) return;
                    document
                      .getElementById(`letter-${letter}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`w-6 h-6 rounded-md font-sans text-xs font-semibold flex items-center justify-center transition-all duration-150 ${
                    active
                      ? "text-page hover:bg-brand hover:text-white cursor-pointer"
                      : "text-page/18 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              );
            },
          )}
        </aside>

        {/* Org grid */}
        <div className="flex-1 min-w-0">
          {grouped.length === 0 ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p
                  className="text-page/15 mb-3"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  }}
                >
                  No results
                </p>
                <p className="font-sans text-sm text-page/40">
                  Try a different search term or category
                </p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 font-sans text-sm font-semibold text-brand underline-offset-2 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            </Reveal>
          ) : (
            grouped.map(([letter, items]) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-48">
                {/* Letter header */}
                <Reveal>
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="leading-none text-page/10 select-none"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      }}
                    >
                      {letter}
                    </span>
                    <span className="h-px flex-1 bg-page/8" />
                    <span className="font-sans text-xs text-page/30">
                      {items.length}
                    </span>
                  </div>
                </Reveal>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((org, i) => (
                    <OrgCard
                      key={org.name}
                      {...org}
                      query={query}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))
          )}

          {/* Count footer */}
          {grouped.length > 0 && (
            <Reveal>
              <div className="mt-8 pt-8 border-t border-page/8 flex items-center justify-between">
                <p className="font-sans text-xs text-page/35">
                  Showing {filtered.length} organisation{filtered.length !== 1 ? "s" : ""}
                </p>
                <p className="font-sans text-xs text-page/25">UXINDIA 2026</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* ── CTA banner ── */}
      <Reveal>
        <section className="bg-page mx-6 mb-12 rounded-3xl overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 md:px-14 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="font-sans text-xs text-white/40 uppercase tracking-[0.2em] mb-4">
                Is your org missing?
              </p>
              <h2
                className="leading-tight text-white"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                }}
              >
                Help us grow
                <br />
                this list
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <p className="font-sans text-sm text-white/55 leading-relaxed max-w-xs md:text-right">
                If your organisation is actively investing in UX, write to us
                and we&apos;ll add you to the directory.
              </p>
              <a
                href="mailto:team@ux-india.org?subject=Add my organisation to the UX Focused Orgs list"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold px-6 py-3 rounded-full bg-brand text-white transition-opacity hover:opacity-90 w-fit"
              >
                Write to us
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
