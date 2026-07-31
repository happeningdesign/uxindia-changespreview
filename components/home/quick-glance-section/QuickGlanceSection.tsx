"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Single accent for the whole section, exposed as a CSS variable so it can be
 * swapped in one place. The brief drops the previous teal + gold badge system.
 */
const ACCENT = "#FF6D35";

type Motif =
  | "radiate"
  | "circles"
  | "layers"
  | "intersect"
  | "cluster"
  | "grid";

type Program = {
  label: string;
  title: string;
  when: string;
  motif: Motif;
  /** Described to screen readers in place of the decorative line art */
  motifAlt: string;
};

const programs: Program[] = [
  {
    label: "Leadership Summit",
    title: "Design Leadership",
    when: "23–25 Sept",
    motif: "radiate",
    motifAlt: "Lines radiating outward from a single point",
  },
  {
    label: "Rising Leaders Forum",
    title: "Design Mentorship",
    when: "26–27 Sept",
    motif: "circles",
    motifAlt: "Two overlapping circles",
  },
  {
    label: "Rising Leaders Forum",
    title: "Portfolio Reviews",
    when: "26–27 Sept",
    motif: "layers",
    motifAlt: "Three layered rectangles",
  },
  {
    label: "Leadership Summit",
    title: "Design Pitch",
    when: "25 Sept",
    motif: "intersect",
    motifAlt: "Two intersecting diagonal lines rising to the right",
  },
  {
    label: "Both Events",
    title: "Design & AI",
    when: "23–27 Sept",
    motif: "cluster",
    motifAlt: "A cluster of dots connected by fine lines",
  },
  {
    label: "Leadership Summit",
    title: "Hands-on Workshops",
    when: "23–24 Sept",
    motif: "grid",
    motifAlt: "A wireframe grid of squares",
  },
];

/**
 * Spokes for the "radiate" motif, rounded to 2dp. Raw trig results serialise to
 * slightly different strings on server vs client, which trips hydration.
 */
const spokes = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * Math.PI * 2) / 12;
  const round = (n: number) => Number(n.toFixed(2));
  return {
    x1: round(32 + Math.cos(angle) * 9),
    y1: round(32 + Math.sin(angle) * 9),
    x2: round(32 + Math.cos(angle) * 27),
    y2: round(32 + Math.sin(angle) * 27),
  };
});

/** Monochrome line art — inherits colour from the card so there is one accent. */
function MotifArt({ motif }: { motif: Motif }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
  };

  switch (motif) {
    case "radiate":
      return (
        <>
          <circle cx="32" cy="32" r="4" {...common} />
          {spokes.map((spoke, i) => (
            <line key={i} {...spoke} {...common} />
          ))}
        </>
      );

    case "circles":
      return (
        <>
          <circle cx="24" cy="32" r="16" {...common} />
          <circle cx="40" cy="32" r="16" {...common} />
          <circle cx="32" cy="32" r="4" {...common} />
        </>
      );

    case "layers":
      return (
        <>
          <rect x="8" y="20" width="34" height="24" rx="1" {...common} />
          <rect x="15" y="15" width="34" height="24" rx="1" {...common} />
          <rect x="22" y="10" width="34" height="24" rx="1" {...common} />
        </>
      );

    case "intersect":
      return (
        <>
          <line x1="8" y1="52" x2="56" y2="14" {...common} />
          <line x1="8" y1="22" x2="56" y2="50" {...common} />
          <circle cx="35" cy="33" r="3.5" {...common} />
          <line x1="8" y1="58" x2="56" y2="58" {...common} />
        </>
      );

    case "cluster":
      return (
        <>
          <line x1="16" y1="18" x2="46" y2="30" {...common} />
          <line x1="46" y1="30" x2="24" y2="48" {...common} />
          <line x1="24" y1="48" x2="16" y2="18" {...common} />
          <line x1="46" y1="30" x2="54" y2="50" {...common} />
          {[
            [16, 18],
            [46, 30],
            [24, 48],
            [54, 50],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" {...common} />
          ))}
        </>
      );

    case "grid":
      return (
        <>
          {[12, 27, 42].map((y) =>
            [12, 27, 42].map((x) => (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width="11"
                height="11"
                {...common}
              />
            )),
          )}
        </>
      );
  }
}

function ProgramCard({
  program,
  visible,
  index,
}: {
  program: Program;
  visible: boolean;
  index: number;
}) {
  return (
    <article
      className={`group flex flex-col transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${100 + index * 70}ms` }}
    >
      {/* Abstract graphic — deliberately a small share of the card height */}
      <div className="mb-7 flex h-20 items-center">
        <svg
          viewBox="0 0 64 64"
          role="img"
          aria-label={program.motifAlt}
          className="h-full w-auto text-[color:var(--accent)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        >
          <MotifArt motif={program.motif} />
        </svg>
      </div>

      <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
        {program.label}
      </p>

      <h3
        className="mt-3 flex-1 text-[#F5F5F0] text-balance"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 500,
          fontSize: "clamp(1.75rem, 2.4vw, 2rem)",
          lineHeight: 1.1,
        }}
      >
        {program.title}
      </h3>

      {/* Hairline that extends into a longer accent line on hover */}
      <div className="relative mt-5 h-px w-full bg-white/12">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-10 origin-left bg-[color:var(--accent)] transition-transform duration-500 ease-out group-hover:scale-x-[3.4]"
        />
      </div>

      <div className="mt-3.5 flex items-center gap-2">
        <span aria-hidden="true" className="h-px w-3 bg-[color:var(--accent)]" />
        <span className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/45">
          {program.when}
        </span>
      </div>
    </article>
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
      className="bg-page py-24 md:py-32"
      aria-labelledby="quick-glance-heading"
      style={{ "--accent": ACCENT } as CSSProperties}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 flex flex-col gap-6 transition-all duration-700 md:mb-20 md:flex-row md:items-end md:justify-between ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2
            id="quick-glance-heading"
            className="max-w-[24ch] text-[#F5F5F0] text-balance"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              lineHeight: 1.05,
            }}
          >
            Everything Happening On Stage.
          </h2>
          <p className="font-sans max-w-[16rem] text-sm leading-relaxed text-white/40 md:text-right">
            Six flagship programs, five days,
            <br />
            one campus of design.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {programs.map((program, i) => (
            <ProgramCard
              key={program.title}
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
