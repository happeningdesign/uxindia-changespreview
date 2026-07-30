"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Program = {
  title: string;
  image: string;
  alt: string;
};

/** Ten programs, in running order — photography is from past UXINDIA editions. */
const programs: Program[] = [
  {
    title: "UX Job Board",
    image: "/images/carousel/home/Carousel-10.webp",
    alt: "Attendees gathered around laptops at a UXINDIA desk",
  },
  {
    title: "Design Leadership",
    image: "/images/carousel/home/Carousel-05.webp",
    alt: "A design leader speaking on the UXINDIA main stage",
  },
  {
    title: "Design Mentorship",
    image: "/images/carousel/home/Carousel-12.webp",
    alt: "A mentor in conversation with a small group of designers",
  },
  {
    title: "Portfolio Reviews",
    image: "/images/event/home/UXI10.webp",
    alt: "Designers reviewing work together around a table",
  },
  {
    title: "Women In Design",
    image: "/images/event/home/UXI11.webp",
    alt: "A woman speaking with a microphone on stage at UXINDIA",
  },
  {
    title: "Design Pitch",
    image: "/images/carousel/home/Carousel-01.webp",
    alt: "A founder pitching on stage with a microphone",
  },
  {
    title: "Design Entrepreneurship",
    image: "/images/event/home/UXI15.webp",
    alt: "Two founders presenting at a UXINDIA stand",
  },
  {
    title: "Design & AI",
    image: "/images/event/home/UXI2.webp",
    alt: "A speaker on stage in front of a large projected visual",
  },
  {
    title: "Hands-on Workshops",
    image: "/images/event/home/UXI9.webp",
    alt: "Workshop table with building blocks and sketched worksheets",
  },
  {
    title: "Networking Dinner",
    image: "/images/event/home/UXI3.webp",
    alt: "Attendees laughing together over drinks at UXINDIA",
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
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      </div>

      <figcaption className="flex flex-1 flex-col p-4">
        <span
          aria-hidden="true"
          className="mb-3 block h-[2px] w-5 origin-left bg-[#FF6D35] transition-transform duration-500 ease-out group-hover:scale-x-[2.4]"
        />
        <h3
          className="text-white text-balance"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.12,
          }}
        >
          {program.title}
        </h3>
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
      <div className="mx-auto max-w-6xl px-6">
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

        {/* 5 x 2 photo grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
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
