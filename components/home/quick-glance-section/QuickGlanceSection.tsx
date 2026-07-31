"use client";

import Image from "next/image";
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
  image: string;
  /** Decorative imagery, but described for anyone using a reader */
  alt: string;
};

const programs: Program[] = [
  {
    label: "Leadership Summit",
    title: "Design Leadership",
    brief: "How senior teams set direction, earn trust and scale craft.",
    when: "23–25 Sept",
    image: "/images/programs/design-leadership.png",
    alt: "Warm ember glow against dark charcoal",
  },
  {
    label: "Rising Leaders Forum",
    title: "Design Mentorship",
    brief: "Small-group guidance pairing new designers with practising leads.",
    when: "26–27 Sept",
    image: "/images/programs/design-mentorship.png",
    alt: "Soft warm bokeh orbs on a dark background",
  },
  {
    label: "Rising Leaders Forum",
    title: "Portfolio Reviews",
    brief: "Honest 1:1 critique of your work from senior reviewers.",
    when: "26–27 Sept",
    image: "/images/programs/portfolio-reviews.png",
    alt: "Warm light raking across a textured surface",
  },
  {
    label: "Leadership Summit",
    title: "Design Pitch",
    brief: "Founders pitch design-led products live to a panel of investors.",
    when: "25 Sept",
    image: "/images/programs/design-pitch.png",
    alt: "Warm light streak rising diagonally through haze",
  },
  {
    label: "Both Events",
    title: "Design & AI",
    brief: "What actually changes in our craft once AI joins the team.",
    when: "23–27 Sept",
    image: "/images/programs/design-ai.png",
    alt: "Scattered warm points of light like particles",
  },
  {
    label: "Leadership Summit",
    title: "Hands-on Workshops",
    brief: "Practitioner-led sessions in small rooms across parallel tracks.",
    when: "23–24 Sept",
    image: "/images/programs/hands-on-workshops.png",
    alt: "Warm light glinting off a rough textured surface",
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
      className={`group flex flex-col transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${100 + index * 70}ms` }}
    >
      {/* Small imagery accent — a thumbnail, not the whole card */}
      <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white/[0.02]">
        <Image
          src={program.image}
          alt={program.alt}
          fill
          sizes="56px"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
        />
      </div>

      <h3
        className="mt-7 text-[#F5F5F0] text-balance"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 500,
          fontSize: "clamp(1.6rem, 2.2vw, 1.9rem)",
          lineHeight: 1.1,
        }}
      >
        {program.title}
      </h3>

      <p className="font-sans mt-3 flex-1 text-[0.82rem] leading-relaxed text-white/45">
        {program.brief}
      </p>

      {/* Single muted meta line — event and dates, no competing accents */}
      <p className="font-sans mt-6 text-[0.7rem] tracking-[0.02em] text-white/35">
        <span className="text-white/55">{program.label}</span>
        <span aria-hidden="true" className="mx-2 text-white/20">
          /
        </span>
        {program.when}
      </p>
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
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
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
