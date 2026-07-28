"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SUMMIT = "#1B7A6E";
const FORUM = "#F5BF42";
/** Cross-event programs stay neutral so the two event chips carry the colour */
const BOTH = "#FFFFFF";

/** Marigold is too light for white text — use the dark page ink instead */
const chipInk = (bg: string) => (bg === FORUM ? "#0D0D0D" : "#FFFFFF");

type Program = {
  code: string;
  /** Event chip — omitted when the program runs across both events */
  event?: "Leadership Summit" | "Rising Leaders Forum";
  title: string;
  desc: string;
  when: string;
  venue: string;
  href: string;
  accent: string;
};

const programs: Program[] = [
  {
    code: "GK",
    event: "Leadership Summit",
    title: "Grand & Plenary Keynotes",
    desc: "Big-stage talks from global design leaders anchoring each day.",
    when: "23–25 Sept",
    venue: "Main Stage",
    href: "/leadership-summit",
    accent: SUMMIT,
  },
  {
    code: "DD",
    title: "Deep Dive Talks",
    desc: "Focused, single-topic sessions that go further than a keynote allows.",
    when: "23–27 Sept",
    venue: "Breakout Rooms",
    href: "/leadership-summit",
    accent: BOTH,
  },
  {
    code: "SS",
    title: "Spark Sessions",
    desc: "Short, high-energy talks built for quick, punchy takeaways.",
    when: "23–27 Sept",
    venue: "Breakout Rooms",
    href: "/leadership-summit",
    accent: BOTH,
  },
  {
    code: "PD",
    event: "Leadership Summit",
    title: "Panel Discussions",
    desc: "Moderated conversations putting multiple design leaders in one room.",
    when: "23–25 Sept",
    venue: "Main Stage",
    href: "/leadership-summit",
    accent: SUMMIT,
  },
  {
    code: "WS",
    event: "Leadership Summit",
    title: "Hands-On Workshops",
    desc: "Practitioner-led sessions in small rooms across 3–5 parallel tracks.",
    when: "23–24 Sept",
    venue: "Workshop Rooms",
    href: "/leadership-summit",
    accent: SUMMIT,
  },
  {
    code: "DP",
    event: "Leadership Summit",
    title: "Design Pitch — VC Sessions",
    desc: "Founders pitch design-led products live to a panel of investors.",
    when: "25 Sept",
    venue: "Design Entrepreneurship Track",
    href: "/design-pitch",
    accent: SUMMIT,
  },
  {
    code: "MC",
    event: "Rising Leaders Forum",
    title: "Mentorship & Portfolio Reviews",
    desc: "1:1 and small-group reviews with senior designers.",
    when: "26–27 Sept",
    venue: "Srishti Manipal Institute",
    href: "/rising-leaders-forum",
    accent: FORUM,
  },
  {
    code: "ND",
    title: "CXO, Speaker & Networking Dinners",
    desc: "Curated evenings where the real hallway conversations happen.",
    when: "23–27 Sept",
    venue: "Evenings",
    href: "/tickets",
    accent: BOTH,
  },
];

function ProgramCard({
  program,
  visible,
  index,
}: {
  program: Program;
  visible: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={program.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        backgroundColor: hovered
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.02)",
        borderColor: hovered ? program.accent : "rgba(255,255,255,0.1)",
        transitionDelay: `${120 + index * 60}ms`,
      }}
    >
      {/* top accent line */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left transition-transform duration-300"
        style={{
          backgroundColor: program.accent,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      <div className="flex min-h-6 items-start gap-1.5">
        {program.event ? (
          <span
            className="font-sans rounded-full px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.1em]"
            style={{
              backgroundColor: program.accent,
              color: chipInk(program.accent),
            }}
          >
            {program.event}
          </span>
        ) : (
          <>
            <span className="sr-only">
              Happens at both the Leadership Summit and the Rising Leaders Forum
            </span>
            {[
              { label: "LS", color: SUMMIT },
              { label: "RLF", color: FORUM },
            ].map((badge) => (
              <span
                key={badge.label}
                aria-hidden="true"
                className="font-sans flex h-6 w-6 items-center justify-center rounded-full text-[0.55rem] font-semibold uppercase leading-none tracking-[0.02em]"
                style={{
                  backgroundColor: badge.color,
                  color: chipInk(badge.color),
                }}
              >
                {badge.label}
              </span>
            ))}
          </>
        )}
      </div>

      <div className="mt-6 flex-1">
        <h3
          className="text-white text-balance"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "1.6rem",
            lineHeight: 1.1,
          }}
        >
          {program.title}
        </h3>
        <p className="font-sans mt-2 text-[0.8rem] leading-relaxed text-white/45">
          {program.desc}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="font-sans text-[0.72rem] leading-4 text-white/55">
          <span className="block text-white/75">{program.when}</span>
          <span className="block text-white/35">{program.venue}</span>
        </div>
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
          style={{
            borderColor: hovered ? program.accent : "rgba(255,255,255,0.15)",
            backgroundColor: hovered ? program.accent : "transparent",
            color: hovered ? "#0D0D0D" : "rgba(255,255,255,0.4)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M3 9L9 3M9 3H4.5M9 3v4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function QuickGlanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quick-glance"
      ref={sectionRef}
      className="bg-page pt-8 pb-24"
      aria-labelledby="quick-glance-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
          className={`mb-12 flex flex-col gap-6 transition-all duration-700 md:flex-row md:items-end md:justify-between ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="font-sans mb-4 flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#FF6D35]">
              <span
                aria-hidden="true"
                className="h-px w-6 bg-[#FF6D35]"
              />
              Sep 23–27 · Bengaluru
            </div>
            <h2
              id="quick-glance-heading"
              className="text-white text-balance"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 500,
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                lineHeight: 1.08,
              }}
            >
              Everything Happening On Stage.
            </h2>
          </div>
          <p className="font-sans max-w-xs text-sm leading-relaxed text-white/40">
            Eight formats across five days. Tap any program for full line-ups,
            speakers, and timings.
          </p>
        </div>

        {/* 4 x 2 grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <ProgramCard
              key={program.code}
              program={program}
              visible={visible}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
