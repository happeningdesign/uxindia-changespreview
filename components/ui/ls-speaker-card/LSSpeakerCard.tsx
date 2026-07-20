"use client";

import { useState } from "react";

export const LeadershipSummitSpeakersData = [
  {
    name: "Doug Powell",
    title:
      "Executive Design Leader & Coach Former VP of Design, IBM & Expedia, Past President, AIGA",
    company: "",
    image: "/images/speakers/leadership-summit/doug-powell.webp",
    color: "#000000",
    bio: "Doug Powell is an award-winning designer and executive design leader with more than 30 years of experience in a wide range of design disciplines. A recipient of the 2014 Distinguished Alumni Award from the Sam Fox School of Design at Washington University in St. Louis, and the 2014 Fellow Award from AIGA Minnesota, Doug is a lecturer, commentator and thought leader on design issues.",
    talkType: "Grand Keynote",
  },
  {
    name: "Vyoma Pathak",
    title: "Sr. Design Practice Lead, Mouri Tech",
    company: "",
    image: "/images/speakers/leadership-summit/vyoma-pathak.webp",
    color: "#000000",
    bio: "Vyoma Pathak is the Head of User Experience (UX) Design at MOURI Tech, where she leads multidisciplinary teams across UX strategy, research, visual design, and digital transformation initiatives.",
    talkType: "Spark Session",
  },
  {
    name: "Prof. Kirti Trivedi",
    title:
      "Project Head & Visiting Distinguished Professor, School of Innovation, IIT Indore",
    company: "",
    image: "/images/speakers/leadership-summit/kirti-trivedi.webp",
    color: "#000000",
    bio: "Samir Dash is a UX Architect and AI Design Strategist with 21+ years of experience across global tech firms like Cisco, IBM, Redhat, Samsung, Dell and Accenture.",
    talkType: "Panel",
  },
  {
    name: "Jose Coronado",
    title: "Advisor, Interim Head, Product & Design, Digital Impulsum",
    company: "",
    image: "/images/speakers/leadership-summit/jose-coronado.webp",
    color: "#000000",
    bio: "Jose Coronado is a bilingual Product and Design Executive specializing in enterprise operating model transformation across global markets. He partners with executive teams to scale product and design organizations, align strategy with execution, and drive measurable performance inside complex, regulated institutions.",
    talkType: "Plenary Keynote",
  },
  {
    name: "Pontus Warnestal",
    title: "Head of Design, Ambition Group",
    company: "",
    image: "/images/speakers/leadership-summit/pontus-warnestal.webp",
    color: "#000000",
    bio: "Award-winning designer, researcher (PhD), and educator with over two decades of practical experience integrating human-centered design with emerging technologies and AI in academic, industrial, and startup environments.",
    talkType: "Plenary Keynote",
  },
  {
    name: "Mario Van der Meulen",
    title: "CXO, Aleph Labs",
    company: "",
    image: "/images/speakers/leadership-summit/mario-van-der-meulen.webp",
    color: "#000000",
    bio: "Mario Van der Meulen is a design executive, author, and international speaker known for helping leaders unlock meaningful innovation through human-centered design. With 2+ decades of global experience across sectors, he brings depth, clarity, and provocation to every stage.",
    talkType: "Plenary Keynote",
  },
  {
    name: "Ish Awasthi",
    title: "VP, UX Research, JPMC",
    company: "",
    image: "/images/speakers/leadership-summit/ish-awasthi.webp",
    color: "#000000",
    bio: "With over 13 years of experience spanning UX research, product design, entrepreneurship, and cross-functional leadership, Ish has built products and teams across very different contexts - from enterprise tools for asset managers and bankers in the U.S. to mobile experiences for drivers in India. ",
    talkType: "Spark Session",
  },
];

export function LSSpeakerCard({
  speaker,
  index,
  visible,
}: {
  speaker: (typeof LeadershipSummitSpeakersData)[0];
  index: number;
  visible: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`aspect-[3/4] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        perspective: "1200px",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
      // Disabled Flip States
      // onMouseEnter={() => setFlipped(true)}
      // onMouseLeave={() => setFlipped(false)}
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
              className="w-full h-full object-cover object-top tranform scale-[1.1]"
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
            <div className="flex justify-center items-center bg-[#000] backdrop-blur-sm rounded-md px-3 py-1.5">
              <span className="font-sans text-[10px] font-bold text-white tracking-[1.25] uppercase">
                {speaker.talkType}
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3
              className="font-leadership text-xl md:text-2xl text-white leading-tight"
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
            <p className="font-sans text-[10px] md:text-[12px] font-semibold text-white/60 uppercase tracking-widest mb-2 md:mb-3">
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
