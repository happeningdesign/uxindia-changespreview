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
  /** Abstract art is decorative, but described for anyone using a reader */
  alt: string;
};

const programs: Program[] = [
  {
    label: "Leadership Summit",
    title: "Design Leadership",
    brief: "How senior teams set direction, earn trust and scale craft.",
    when: "23–25 Sept",
    image: "/images/programs/design-leadership.png",
    alt: "Abstract lines radiating outward from a single point",
  },
  {
    label: "Rising Leaders Forum",
    title: "Design Mentorship",
    brief: "Small-group guidance pairing new designers with practising leads.",
    when: "26–27 Sept",
    image: "/images/programs/design-mentorship.png",
    alt: "Abstract overlapping circles meeting at a centre point",
  },
  {
    label: "Rising Leaders Forum",
    title: "Portfolio Reviews",
    brief: "Honest 1:1 critique of your work from senior reviewers.",
    when: "26–27 Sept",
    image: "/images/programs/portfolio-reviews.png",
    alt: "Abstract layered rectangles offset like stacked sheets",
  },
  {
    label: "Leadership Summit",
    title: "Design Pitch",
    brief: "Founders pitch design-led products live to a panel of investors.",
    when: "25 Sept",
    image: "/images/programs/design-pitch.png",
    alt: "Abstract ascending diagonal lines crossing at a point",
  },
  {
    label: "Both Events",
    title: "Design & AI",
    brief: "What actually changes in our craft once AI joins the team.",
    when: "23–27 Sept",
    image: "/images/programs/design-ai.png",
    alt: "Abstract network of dots connected by fine lines",
  },
  {
    label: "Leadership Summit",
    title: "Hands-on Workshops",
    brief: "Practitioner-led sessions in small rooms across parallel tracks.",
    when: "23–24 Sept",
    image: "/images/programs/hands-on-workshops.png",
    alt: "Abstract wireframe grid of squares, some shifted out of line",
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
      {/* Abstract art band — a slice of the card, not the whole card */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white/[0.02]">
        <Image
          src={program.image}
          alt={program.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
      </div>

      <p className="font-sans mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
        {program.label}
      </p>

      <h3
        className="mt-2.5 text-[#F5F5F0] text-balance"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 500,
          fontSize: "clamp(1.6rem, 2.2vw, 1.9rem)",
          lineHeight: 1.1,
        }}
      >
        {program.title}
      </h3>

      <p className="font-sans mt-2.5 flex-1 text-[0.82rem] leading-relaxed text-white/45">
        {program.brief}
      </p>

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
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
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
