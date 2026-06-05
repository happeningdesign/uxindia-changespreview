"use client";

import { useState } from "react";

const speakerColors = ["#E85520", "#1D5078", "#1A7A6E", "#C8365A"];

interface Speaker {
  name: string;
  role: string;
  image: string;
  bio?: string;
  talkType?: string;
}

interface SpeakersGridProps {
  speakers: Speaker[];
  showMorePlaceholder?: boolean;
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const color = speakerColors[index % speakerColors.length];

  return (
    <div
      className="aspect-[4/5] cursor-pointer"
      style={{
        perspective: "1200px",
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
          transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT — photo */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            zIndex: flipped ? 0 : 1,
          }}
        >
          <img
            src={speaker.image}
            alt={speaker.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <h3 className="font-leadership font-semibold text-white text-sm md:text-base leading-tight mb-1 tracking-tight">
              {speaker.name}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#4ECDC4] leading-tight">
              {speaker.role}
            </p>
          </div>
        </div>

        {/* BACK — bio */}
        <div
          className="absolute inset-0 rounded-lg flex flex-col p-4 md:p-5 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: flipped ? 1 : 0,
            backgroundColor: color,
          }}
        >
          {/* Top accent */}
          <div className="flex items-center justify-between flex-shrink-0 mb-3">
            <div className="bg-white/20 rounded-md px-2 py-1">
              <span className="font-sans text-[10px] font-bold text-white tracking-wider uppercase">
                {speaker.talkType || "Speaker"}
              </span>
            </div>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
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

          {/* Bio content */}
          <div className="flex-1 overflow-y-auto min-h-0 mt-auto flex flex-col justify-end scrollbar-none">
            <h3 className="font-leadership text-base md:text-lg text-white leading-tight mb-1">
              {speaker.name}
            </h3>
            <p className="font-sans text-[9px] md:text-[11px] font-semibold text-white/60 uppercase tracking-widest mb-2 md:mb-3">
              {speaker.role}
            </p>
            <p className="font-sans text-[10px] md:text-xs text-white/85 leading-relaxed">
              {speaker.bio || `${speaker.name} is a respected voice in the design community, bringing valuable insights and experience to UXINDIA. Their work spans across design leadership, innovation, and building impactful user experiences.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpeakersGrid({ speakers, showMorePlaceholder = true }: SpeakersGridProps) {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-leadership text-4xl md:text-5xl text-white mb-12 md:mb-16 tracking-tight">
          Speakers
        </h2>

        {/* Speakers grid - 4 columns on desktop to match design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}

          {/* More speakers placeholder */}
          {showMorePlaceholder && (
            <div className="relative aspect-[4/5] rounded-lg border border-dashed border-white/20 flex items-center justify-center bg-transparent">
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E85520]/50 mb-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#E85520]"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <p className="font-sans text-xs md:text-sm text-white/60">
                  More speakers
                </p>
                <p className="font-sans text-xs text-white/40">
                  announced soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
