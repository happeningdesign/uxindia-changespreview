"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const speakerColors = ["#E85520", "#1D5078", "#1A7A6E", "#C8365A"];

const speakers = [
  {
    name: "Mohan Krishnaraj",
    title: "Global Head, Cognizant",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
    color: speakerColors[0],
    bio: "A design leader with over 20 years of experience shaping product experiences across India and globally. Mohan has led design at some of the most impactful digital organisations, championing human-centred practices at scale.",
  },
  {
    name: "Kate Moran",
    title: "VP Research, N/NG",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
    color: speakerColors[1],
    bio: "VP of Research at Nielsen Norman Group, Kate is a leading voice in UX research and usability. She helps organisations translate user insight into meaningful, impactful design decisions that drive real business outcomes.",
  },
  {
    name: "Prof. Kirti Trivedi",
    title: "VDP, IIT Indore",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
    color: speakerColors[2],
    bio: "A pioneer of design education in India, Prof. Trivedi has spent decades building the foundation of design thinking in academic and professional circles. His work bridges traditional craft and contemporary design philosophy.",
  },
  {
    name: "Rucha Humnabadkar",
    title: "Director Of Design, Youtube",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
    color: speakerColors[3],
    bio: "Rucha is a design leader with a passion for building inclusive, accessible products. She brings deep expertise in systems thinking and has driven design culture transformation across large enterprise organisations.",
  },
  {
    name: "Mirjam Wouters",
    title: "Experience Labs Lead, Royal Philips",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
    color: speakerColors[2],
    bio: "Design Director with a track record of building world-class design teams and practices. Mirjam brings a strategic lens to design leadership, helping companies embed design thinking at the core of their product strategy.",
  },
  {
    name: "Donald Chesnut",
    title: "CDO, CANDESCENT",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
    color: speakerColors[3],
    bio: "As Chief Experience Officer, Donald leads the charge on creating transformative customer experiences. With decades in the field, he is a sought-after voice on the intersection of design, technology, and business strategy.",
  },
  {
    name: "Ravinder Singh",
    title: "Co-Founder, Rishihood",
    company: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
    color: speakerColors[0],
    bio: "Ravinder is a design leader who has shaped digital products used by millions. He is deeply committed to building design communities and mentoring the next generation of design professionals across South Asia.",
  },
];

const whySpeakReasons = [
  {
    heading: "Share your Ideas",
    body: "on a global stage with one of the longest-running UX conferences in the world.",
  },
  {
    heading: "Reach an engaged audience",
    body: "of design leaders, product teams, founders, and emerging talent.",
  },
  {
    heading: "Build thought leadership",
    body: "by contributing to conversations shaping the future of design.",
  },
  {
    heading: "Expand your network",
    body: "through meaningful interactions with peers, sponsors, and innovators.",
  },
  {
    heading: "Inspire the next generation",
    body: "of designers and help move the design community forward.",
  },
];

function SpeakerCard({
  speaker,
  index,
  visible,
}: {
  speaker: (typeof speakers)[0];
  index: number;
  visible: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`aspect-[3/4] cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        perspective: "1200px",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Inner flip container */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transition: "transform 0.85s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT — photo */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            zIndex: flipped ? 0 : 1,
            backgroundColor: speaker.color,
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover object-top"
              style={{ filter: "contrast(1.05)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, ${speaker.color}10 0%, ${speaker.color}cc 100%)`,
              }}
            />
          </div>

          {/* UX26 badge */}
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-md px-2 py-1">
              <span className="font-sans text-[10px] font-bold text-white tracking-wider">
                UXI25
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3
              className="font-serif text-xl md:text-2xl text-white leading-tight"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              {speaker.name}
            </h3>
            <p className="font-sans text-xs text-white/90 mt-1">
              {speaker.title}
            </p>
          </div>
        </div>

        {/* BACK — bio */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col p-3 md:p-5 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: flipped ? 1 : 0,
            backgroundColor: speaker.color,
          }}
        >
          {/* Top accent bar */}
          <div className="flex items-center justify-between flex-shrink-0 mb-2 md:mb-0">
            <div className="bg-white/20 rounded-md px-2 py-1">
              <span className="font-sans text-[10px] font-bold text-white tracking-wider">
                UXI25
              </span>
            </div>
            <div
              className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.2" />
                <path
                  d="M7 5v4M7 4.5v.5"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Bio content — scrollable on small screens */}
          <div className="flex-1 overflow-y-auto min-h-0 mt-auto flex flex-col justify-end scrollbar-none">
            <h3 className="font-serif text-base md:text-xl text-white leading-tight mb-1">
              {speaker.name}
            </h3>
            <p className="font-sans text-[9px] md:text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-2 md:mb-3">
              {speaker.title}
            </p>
            <p className="font-sans text-[10px] md:text-xs text-white/85 leading-relaxed">
              {speaker.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpeakersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cfsSectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cfsVisible, setCfsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCfsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (cfsSectionRef.current) observer.observe(cfsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Speakers grid */}
      <section
        id="speakers"
        ref={sectionRef}
        className="bg-[#F5F0E8] py-24 md:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3 block">
                Past Speakers
              </span>
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl text-[#0D0D0D] leading-[1.05] transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Voices that
                <br />
                <span className="text-[#E85520]">shape design.</span>
              </h2>
            </div>
            <p
              className={`font-sans text-base text-[#0D0D0D]/55 max-w-sm leading-relaxed transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              For over two decades, UXINDIA has brought together some of the
              most influential voices in design. A stage where ideas are
              challenged, futures are imagined, and the next generation of
              design leaders find inspiration.
            </p>
          </div>

          {/* Uniform 4-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {speakers.map((speaker, i) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={i}
                visible={visible}
              />
            ))}

            {/* More speakers card */}
            <div
              className={`relative rounded-2xl overflow-hidden border-2 border-dashed border-[#0D0D0D]/20 flex flex-col items-center justify-center p-6 aspect-[3/4] transition-all duration-500 hover:border-[#E85520]/50 hover:bg-[#E85520]/5 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${speakers.length * 80}ms`,
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#E85520]/10 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 4v12M4 10h12"
                    stroke="#E85520"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="font-sans text-sm font-semibold text-[#0D0D0D]/60 text-center">
                Apply to be a
                <br />
                speaker at UXINDIA26
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Speakers */}
      <section
        id="call-for-speakers"
        ref={cfsSectionRef}
        className="bg-[#0D0D0D] py-24 md:py-32 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 font-serif text-[16vw] text-white/[0.00] leading-none select-none pointer-events-none">
          SPEAK
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3 block">
                Call For Speakers
              </span>
              <h2
                className={`text-5xl md:text-6xl text-white leading-[1.05] mb-6 transition-all duration-700 ${
                  cfsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Don’t Just Speak.
                <br />
                <span className="text-[#E85520]">Shape the Narrative.</span>
              </h2>
              <p
                className={`font-sans text-base text-white/50 leading-relaxed mb-4 transition-all duration-700 delay-100 ${
                  cfsVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                For over two decades, UXINDIA has brought together some of the
                most influential voices in design. It&apos;s a stage where ideas
                are challenged, futures are imagined, and the next generation of
                design leaders find inspiration.
              </p>
              <p
                className={`font-sans text-base text-white/50 leading-relaxed mb-10 transition-all duration-700 delay-150 ${
                  cfsVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Our speakers represent the best of the global design community —
                design leaders, entrepreneurs, researchers, and product
                innovators shaping the way the world builds technology. If
                you&apos;re pushing boundaries in design, AI, product, or
                leadership, we invite you to bring your ideas to the UXINDIA
                stage.
              </p>
              <Link
                href="https://www.ux-india.org/call-for-speakers/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 bg-[#E85520] hover:bg-[#E85520] text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E85520]/30 ${
                  cfsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } transition-all duration-700 delay-200`}
              >
                Submit Interest
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Why speak list */}
            <div
              className={`space-y-0 transition-all duration-700 delay-200 ${
                cfsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {whySpeakReasons.map((reason, i) => (
                <div
                  key={i}
                  className="group flex gap-5 py-5 border-b border-white/10 last:border-0 hover:border-[#E85520]/30 transition-colors cursor-default"
                >
                  <span className="font-serif text-2xl text-[#E85520]/30 leading-none flex-shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-white group-hover:text-[#E85520] transition-colors mb-1">
                      {reason.heading}
                    </h4>
                    <p className="font-sans text-sm text-white/40 leading-relaxed">
                      {reason.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
