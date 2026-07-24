"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { orgs, categories, categoryColors } from "@/data/ux-focussed-orgs";
import type { OrgCategory } from "@/data/ux-focussed-orgs";
import Link from "next/link";

// ─── Reveal wrapper ──────────────────────────────────────────────────────────
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
  const inView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Org tile ────────────────────────────────────────────────────────────────
function OrgTile({
  name,
  category,
  index,
}: {
  name: string;
  category: OrgCategory;
  index: number;
}) {
  const color = categoryColors[category];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: (index % 12) * 0.035,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div
        className="group relative flex flex-col items-start justify-between bg-white rounded-2xl border border-page/8 p-5 aspect-[3/2] cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,13,13,0.09)] overflow-hidden"
      >
        {/* Colour accent — top strip, reveals on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
          style={{ backgroundColor: color }}
        />

        {/* Category dot */}
        <span
          className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125 mt-1"
          style={{ backgroundColor: color }}
        />

        {/* Org name */}
        <p
          className="leading-tight text-page/85 transition-colors duration-200 group-hover:text-page font-medium"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(1.05rem, 1.5vw, 1.35rem)",
          }}
        >
          {name}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Tier section ────────────────────────────────────────────────────────────
function TierSection({
  category,
  items,
  cols,
}: {
  category: OrgCategory;
  items: typeof orgs;
  cols: string;
}) {
  const color = categoryColors[category];

  return (
    <div className="mb-14">
      <Reveal>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border"
            style={{
              color,
              borderColor: `${color}40`,
              backgroundColor: `${color}08`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            {category}
          </span>
          <span className="h-px flex-1 bg-page/8" />
          <span className="font-sans text-xs text-page/30">{items.length}</span>
        </div>
      </Reveal>

      <div className={`grid ${cols} gap-3`}>
        {items.map((org, i) => (
          <OrgTile key={org.name} name={org.name} category={org.category} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function UXFocussedOrgsPage() {
  // Group orgs by category, preserving category order
  const grouped = categories.map((cat) => ({
    category: cat,
    items: orgs.filter((o) => o.category === cat),
  })).filter((g) => g.items.length > 0);

  // Grid cols by category size
  const colsForCount = (n: number) => {
    if (n >= 12) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
    if (n >= 6) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
    return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
  };

  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-cream pt-[var(--navbar-height-desktop)] pb-16 md:pb-20 border-b border-page/8">
        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <Reveal>
                <p className="font-sans text-xs text-brand uppercase tracking-[0.3em] mb-5">
                  UXINDIA 2026 · Bengaluru · Sep 23–27
                </p>
              </Reveal>
              <Reveal delay={0.07}>
                <h1
                  className="leading-[1.0] text-balance"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                    fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
                    color: "#0D0D0D",
                  }}
                >
                  UX Focused
                  <br />
                  <span style={{ color: "#E85520" }}>Organisations</span>
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="md:max-w-xs">
                <p className="font-sans text-base text-page/55 leading-relaxed mb-6">
                  Companies and studios that invest deeply in UX as a strategic
                  discipline — attending and shaping UXINDIA 2026.
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="leading-none text-page/12"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "clamp(2.8rem, 4vw, 4.5rem)",
                    }}
                  >
                    {orgs.length}
                  </span>
                  <span className="font-sans text-xs text-page/35 uppercase tracking-[0.18em] leading-tight">
                    Organisations
                    <br />
                    listed
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Org grid by category ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {grouped.map(({ category, items }) => (
          <TierSection
            key={category}
            category={category}
            items={items}
            cols={colsForCount(items.length)}
          />
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <Reveal>
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            style={{ backgroundColor: "#E85520" }}
          >
            <div>
              <p className="font-sans text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
                Is your org missing?
              </p>
              <h2
                className="leading-[1.06] text-white"
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
            <div className="flex flex-col gap-4 md:items-end flex-shrink-0">
              <p className="font-sans text-sm text-white/75 leading-relaxed max-w-xs md:text-right">
                If your organisation invests deeply in UX, write to us and
                we&apos;ll add you to the directory.
              </p>
              <Link
                href="mailto:team@ux-india.org?subject=Add my organisation to the UX Focused Orgs list"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full bg-white text-[#E85520] transition-opacity hover:opacity-90 w-fit"
              >
                Write to us
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
