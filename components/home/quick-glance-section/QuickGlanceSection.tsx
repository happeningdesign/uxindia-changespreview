"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Single accent for the whole section, exposed as a CSS variable so it can be
 * swapped in one place.
 */
const ACCENT = "#FF6D35";

type Program = {
  label: string;
  title: string;
  /** One-line brief shown under the title */
  brief: string;
  when: string;
  href: string;
  /** Glossy 3D object icon on a transparent background */
  icon: string;
  /** Decorative imagery, but described for anyone using a reader */
  alt: string;
};

const programs: Program[] = [
  {
    label: "Both Events",
    title: "1 Million Women in Design & AI",
    brief: "A movement to bring a million women into design and AI careers.",
    when: "23–27 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-women-design-ai.png",
    alt: "Glossy 3D silhouette of a woman's head merging into an AI circuit network",
  },
  {
    label: "Leadership Summit",
    title: "Asian Design Futures Dialogue",
    brief: "Leaders across Asia debate where the region's design is headed.",
    when: "23–25 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-design-mentorship.png",
    alt: "Two glossy 3D speech bubbles",
  },
  {
    label: "Leadership Summit",
    title: "Design Pitch",
    brief: "Founders pitch design-led products live to a panel of investors.",
    when: "25 Sept",
    href: "/design-pitch",
    icon: "/images/programs/icon-design-pitch.png",
    alt: "Glossy 3D rocket",
  },
  {
    label: "Leadership Summit",
    title: "Design Leadership",
    brief: "How senior teams set direction, earn trust and scale craft.",
    when: "23–25 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-design-leadership.png",
    alt: "Glossy 3D chess king piece",
  },
  {
    label: "Leadership Summit",
    title: "Design Entrepreneurship",
    brief: "Turning design instinct into ventures, products and businesses.",
    when: "23–25 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-design-entrepreneurship.png",
    alt: "Glossy 3D lightbulb with a gear inside",
  },
  {
    label: "Rising Leaders Forum",
    title: "Design Mentorship",
    brief: "Senior designers guide rising talent through real career questions.",
    when: "26–27 Sept",
    href: "/rising-leaders-forum",
    icon: "/images/programs/icon-mentorship.png",
    alt: "Two glossy 3D figures, a taller one guiding a smaller one",
  },
  {
    label: "Leadership Summit",
    title: "Limited Curated Workshops",
    brief: "A handful of small, hands-on sessions with limited seats.",
    when: "23–24 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-hands-on-workshops.png",
    alt: "Glossy 3D stacked building blocks",
  },
  {
    label: "Both Events",
    title: "Design & AI",
    brief: "What actually changes in our craft once AI joins the team.",
    when: "23–27 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-design-ai.png",
    alt: "Glossy 3D microchip with a spark of light",
  },
  {
    label: "Both Events",
    title: "Networking Dinner",
    brief: "Curated evenings where the real hallway conversations happen.",
    when: "23–27 Sept",
    href: "/leadership-summit",
    icon: "/images/programs/icon-networking-dinner.png",
    alt: "Two glossy 3D wine glasses toasting",
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
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-white/15 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{
        transitionDelay: `${100 + index * 70}ms`,
        background:
          "linear-gradient(180deg, #262626 0%, #1F1F1F 42%, #1B1B1B 100%)",
      }}
    >
      {/* soft accent bloom, revealed on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(255,109,53,0.22), transparent 70%)" }}
      />

      {/* Text leads the card */}
      <div className="flex flex-col p-7 pb-0">
        <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
          {program.label}
        </p>

        <h3
          className="mt-3 text-[#F5F5F0] text-balance"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(1.55rem, 2.1vw, 1.85rem)",
            lineHeight: 1.1,
          }}
        >
          {program.title}
        </h3>

        <p className="font-sans mt-2.5 text-[0.84rem] leading-relaxed text-white/45">
          {program.brief}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={program.href}
            className="font-sans inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F0] px-4 py-2 text-[0.78rem] font-semibold text-[#0D0D0D] transition-colors duration-300 hover:bg-[color:var(--accent)] hover:text-white"
          >
            Explore
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
          <span className="font-sans text-[0.68rem] tracking-[0.02em] text-white/35">
            {program.when}
          </span>
        </div>
      </div>

      {/* Large glossy 3D object anchored at the bottom — its #1B1B1B ground
          matches the card base so it reads as emerging from the card. */}
      <div
        className="relative mt-2 h-52 w-full overflow-hidden"
        style={{
          // Fade the icon's flat ground into the card so no square seam shows
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 22%, #000 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 22%, #000 100%)",
        }}
      >
        <Image
          src={program.icon}
          alt={program.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="scale-125 object-contain object-bottom transition-transform duration-[900ms] ease-out group-hover:scale-[1.32]"
        />
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
