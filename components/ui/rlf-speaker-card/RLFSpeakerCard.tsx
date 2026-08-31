"use client";

import { useState } from "react";

const speakerColors = ["#E85520", "#1D5078", "#1A7A6E", "#C8365A"];

export const RisingLeadersForumSpeakersData = [
  {
    name: "Deepashree Kale",
    title: "Head of Design, Apptware",
    company: "",
    image: "/images/speakers/rising-leaders-forum/deepashree-kale.webp",
    bio: "Deepashree has a straightforward belief: the future of design won't be shaped by people waiting for a seat at Google. It'll be shaped by people bold enough to build that culture wherever they already are.She works at the crossroads of AI, product strategy and innovation and has done so across some very different environments.",
    color: speakerColors[0],
    talkType: "Deep Dive Talk",
  },
  {
    name: "Vineet Gupta",
    title: "Vice President, Design & Branding, Gemini Solutions Pvt Ltd",
    company: "",
    image: "/images/speakers/rising-leaders-forum/vineet-gupta.webp",
    color: speakerColors[1],
    bio: "Vineet Gupta is a Product Designer and Head of Design & Branding at Gemini Solutions, where he built design teams and products from the ground up. He has led AI-driven projects across fintech, insurance, sports, and healthcare for clients in the US, India, and UAE. A TEDx speaker, marathon runner, and YouTuber, Vineet is passionate about human-centered design and loves sharing knowledge to empower the next generation through technology and storytelling.",
    talkType: "Spark Session",
  },
  {
    name: "Sujit Kumar Pradhan",
    title: "UX Designer, Google",
    company: "",
    image: "/images/speakers/rising-leaders-forum/sujit-kumar-pradhan.webp",
    color: speakerColors[2],
    bio: "Sujit is a UX Designer at Google with over nine years of experience architecting complex digital ecosystems and agentic AI experiences. Before Google, he led key design initiatives at Microsoft, where he shaped the extensions ecosystem for the Edge browser and contributed to the vision for Copilot Vision as Lumi Camera project.",
    talkType: "Deep Dive Talk",
  },
  {
    name: "Anil Reddy",
    title: "Founder & Designer, Happy Pet",
    company: "",
    image: "/images/speakers/rising-leaders-forum/anil-reddy.webp",
    color: speakerColors[3],
    bio: "Artist by heart. Designer by soul. Entrepreneur by choice. I'm the Founder and Design Director of Lollypop.Design, a research-driven studio that reimagined digital experiences. What began in a garage with two people grew into a 240-member global team, creating work that impacted millions and earned international recognition. After my exit, my love for pets led me back to entrepreneurship. I founded Happy Pet, India's first pet-tech company, bringing technology, data, empathy, and AI together to build better pet care in India and beyond.",
    talkType: "Spark Session",
  },
  {
    name: "Varedh Nigam",
    title: "Associate Director, Nagarro Software Pvt. Ltd.",
    company: "",
    image: "/images/speakers/rising-leaders-forum/varedh-nigam.webp",
    color: speakerColors[0],
    bio: "Varedh Nigam is a design and CX leader with 15+ years of experience helping organizations navigate digital transformation at the intersection of customer experience, business strategy, and emerging technologies.",
    talkType: "Workshop",
  },
  {
    name: "Amber Krishan",
    title: "Founder & CEO, Futurris",
    company: "",
    image: "/images/speakers/rising-leaders-forum/amber-krishan.webp",
    color: speakerColors[1],
    bio: "Amber Krishan is the Founder & CEO of Futurris, a company built for the future-edge of digital transformation where product, experience, AI, and customer value converge. Over the last two decades, he has built award-winning creative and delivery organizations focused on product transformation, intelligent CX, omni-channel ecosystems, and metrics-led execution across fintech, SaaS, and enterprise ecosystems. Previously, Amber co-founded and led THEM Consulting, a BFSI-focused design firm with offices in Gurgaon and Mumbai.",
    talkType: "Workshop",
  },
  {
    name: "Monali Samarth",
    title: "Product Design Engineer, RIB Software",
    company: "",
    image: "/images/speakers/rising-leaders-forum/monali-samarth.webp",
    color: speakerColors[2],
    bio: "Monali Samarth is a UX Lead and Design Systems Architect with 22+ years bridging product strategy, design, and front-end engineering across enterprise SaaS, edtech, fintech, and healthcare. At RIB Software, she architected a tokenized component library that reduced UI inconsistencies by 80% and directly enabled AI-assisted design-to-code pipelines across five products.",
    talkType: "Workshop",
  },
];

export function RLFSpeakerCard({
  speaker,
  index,
  visible,
}: {
  speaker: (typeof RisingLeadersForumSpeakersData)[0];
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
                UXI26
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
