"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SUMMIT = "#1B7A6E";
const FORUM = "#F5BF42";

/** Marigold is too light for white text — use the dark page ink instead */
const chipInk = (bg: string) => (bg === FORUM ? "#0D0D0D" : "#FFFFFF");

type Program = {
  title: string;
  /** Event chip — omitted when the program runs across both events */
  event?: "Leadership Summit" | "Rising Leaders Forum";
  desc: string;
  when: string;
  image: string;
  alt: string;
};

/** Ten programs, in running order — photography is from past UXINDIA editions. */
const programs: Program[] = [
  {
    title: "UX Job Board",
    desc: "Live openings from hiring design teams on campus.",
    when: "23–27 Sept",
    image: "/images/carousel/home/Carousel-10.webp",
    alt: "Attendees gathered around laptops at a UXINDIA desk",
  },
  {
    title: "Design Leadership",
    event: "Leadership Summit",
    desc: "How senior leaders build teams, influence and craft.",
    when: "23–25 Sept",
    image: "/images/carousel/home/Carousel-05.webp",
    alt: "A design leader speaking on the UXINDIA main stage",
  },
  {
    title: "Design Mentorship",
    event: "Rising Leaders Forum",
    desc: "Small-group guidance with designers a few steps ahead.",
    when: "26–27 Sept",
    image: "/images/carousel/home/Carousel-12.webp",
    alt: "A mentor in conversation with a small group of designers",
  },
  {
    title: "Portfolio Reviews",
    event: "Rising Leaders Forum",
    desc: "One-on-one critique of your work with senior designers.",
    when: "26–27 Sept",
    image: "/images/event/home/UXI10.webp",
    alt: "Designers reviewing work together around a table",
  },
  {
    title: "Women In Design",
    desc: "Voices and paths of women shaping design in India.",
    when: "23–27 Sept",
    image: "/images/event/home/UXI11.webp",
    alt: "A woman speaking with a microphone on stage at UXINDIA",
  },
  {
    title: "Design Pitch",
    event: "Leadership Summit",
    desc: "Founders pitch design-led products live to investors.",
    when: "25 Sept",
    image: "/images/carousel/home/Carousel-01.webp",
    alt: "A founder pitching on stage with a microphone",
  },
  {
    title: "Design Entrepreneurship",
    event: "Leadership Summit",
    desc: "Building a studio, product or practice of your own.",
    when: "23–25 Sept",
    image: "/images/event/home/UXI15.webp",
    alt: "Two founders presenting at a UXINDIA stand",
  },
  {
    title: "Design & AI",
    desc: "What AI actually changes in day-to-day design work.",
    when: "23–27 Sept",
    image: "/images/event/home/UXI2.webp",
    alt: "A speaker on stage in front of a large projected visual",
  },
  {
    title: "Hands-on Workshops",
    event: "Leadership Summit",
    desc: "Practitioner-led sessions across parallel tracks.",
    when: "23–24 Sept",
    image: "/images/event/home/UXI9.webp",
    alt: "Workshop table with building blocks and sketched worksheets",
  },
  {
    title: "Networking Dinner",
    event: "Leadership Summit",
    desc: "Curated evenings where hallway conversations happen.",
    when: "23–25 Sept",
    image: "/images/event/home/UXI3.webp",
    alt: "Attendees laughing together over drinks at UXINDIA",
  },
];

function EventChips({ event }: { event?: Program["event"] }) {
  if (event) {
    const color = event === "Rising Leaders Forum" ? FORUM : SUMMIT;
    return (
      <span
        className="font-sans rounded-full px-2 py-1 text-[0.55rem] font-semibold uppercase leading-none tracking-[0.08em]"
        style={{ backgroundColor: color, color: chipInk(color) }}
      >
        {event}
      </span>
    );
  }

  return (
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
          className="font-sans flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full text-[0.5rem] font-semibold uppercase leading-none"
          style={{ backgroundColor: badge.color, color: chipInk(badge.color) }}
        >
          {badge.label}
        </span>
      ))}
    </>
  );
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
    <figure
      className={`group flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] transition-all duration-700 ease-out hover:border-white/15 hover:bg-white/[0.055] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${100 + index * 50}ms` }}
    >
      {/* photo band — a slice of the card, not the whole card */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={program.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      </div>

      <figcaption className="flex flex-1 flex-col p-5">
        <div className="mb-3.5 flex min-h-[1.35rem] items-start gap-1.5">
          <EventChips event={program.event} />
        </div>

        <h3
          className="text-white text-balance"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "1.4rem",
            lineHeight: 1.12,
          }}
        >
          {program.title}
        </h3>

        <p className="font-sans mt-2 flex-1 text-[0.8rem] leading-relaxed text-white/45">
          {program.desc}
        </p>

        <div className="mt-4 flex items-center gap-2 border-t border-white/8 pt-3">
          <span aria-hidden="true" className="h-px w-3 bg-[#FF6D35]" />
          <span className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.1em] text-white/50">
            {program.when}
          </span>
        </div>
      </figcaption>
    </figure>
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
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-10 flex flex-col gap-5 transition-all duration-700 md:flex-row md:items-end md:justify-between ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="font-sans mb-4 flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#FF6D35]">
              <span aria-hidden="true" className="h-px w-6 bg-[#FF6D35]" />
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
          <p className="font-sans max-w-[15rem] text-sm leading-relaxed text-white/40">
            Ten programs, five days, one campus of design.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
