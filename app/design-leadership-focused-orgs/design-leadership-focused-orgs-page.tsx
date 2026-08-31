"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { partners } from "@/data/partners";

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

// ─── Logo tile ───────────────────────────────────────────────────────────────
function LogoTile({
  name,
  logo,
  url,
  index,
}: {
  name: string;
  logo: string;
  url?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const inner = (
    <div className="group flex items-center justify-center bg-white rounded-2xl border border-page/8 p-6 aspect-[3/2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(13,13,13,0.09)] hover:border-page/15">
      <div className="relative max-w-full w-32 h-14 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: (index % 10) * 0.04,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function DesignLeadershipFocusedOrganizationsPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-cream pt-[var(--navbar-height-desktop)] pb-16 md:pb-20 border-b border-page/8">
        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20">
          <div className="flex flex-col gap-10">
            <div>
              <Reveal>
                <p className="font-sans text-xs text-brand uppercase tracking-[0.3em] mb-5">
                  UXINDIA 2026 · Bengaluru · Sep 23–27
                </p>
              </Reveal>
              <Reveal delay={0.07}>
                <h1
                  className="leading-[1.1] text-balance"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                    fontSize: "clamp(4rem, 5.5vw, 7.5rem)",
                    color: "#0D0D0D",
                  }}
                >
                  Organizations Investing In
                  <br />
                  <span
                    style={{
                      color: "#E85520",
                      fontSize: "clamp(4rem, 6vw, 7.5rem)",
                    }}
                  >
                    {" "}
                    UX & Design Leadership
                  </span>
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="max-w-[720px]">
                <p className="font-sans text-[20px] text-page/55 leading-relaxed">
                  Companies and studios that invest deeply in UX and Design
                  Leadership as a strategic discipline — attending and shaping
                  UXINDIA 2026.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Uniform logo grid ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {partners.map((org, i) => (
            <LogoTile
              key={org.name}
              name={org.name}
              logo={org.logo}
              url={org.url}
              index={i}
            />
          ))}
        </div>
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
                If your organisation invests deeply in UX and wants to be a part
                of this list, write to us.
              </p>
              <Link
                href="mailto:team@umo.design?subject=Add My Company To The UX Focused Organisations List"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full bg-white text-[#E85520] transition-opacity hover:opacity-90 w-fit"
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
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
