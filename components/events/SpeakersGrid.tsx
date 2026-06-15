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
  variant?: "dark" | "light";
}

function SpeakerCard({ speaker, index, variant = "dark", isFlipped, onFlip }: { speaker: Speaker; index: number; variant?: "dark" | "light"; isFlipped: boolean; onFlip: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = speakerColors[index % speakerColors.length];
  const isLight = variant === "light";
  const showBack = isFlipped || isHovered;

  return (
    <div
      className="aspect-[4/5] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={onFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner flip container */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transition: "transform 1.1s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT — photo with color overlay for light variant */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden ring-1 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            zIndex: showBack ? 0 : 1,
            backgroundColor: isLight ? color : "#1F1F1F",
            // @ts-expect-error CSS custom prop for ring color
            "--tw-ring-color": isLight ? "rgba(13,13,13,0.08)" : "rgba(255,255,255,0.12)",
            boxShadow: isLight
              ? "0 8px 24px rgba(0,0,0,0.12)"
              : "0 8px 28px rgba(0,0,0,0.55)",
          }}
        >
          <img
            src={speaker.image}
            alt={speaker.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={isLight ? { filter: "contrast(1.05)" } : undefined}
          />
          {isLight ? (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, ${color}10 0%, ${color}cc 100%)`,
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <h3 className={`font-leadership font-semibold text-white text-sm md:text-base leading-tight mb-1 tracking-tight ${isLight ? "text-shadow" : ""}`}
              style={isLight ? { textShadow: "0 2px 12px rgba(0,0,0,0.5)" } : undefined}
            >
              {speaker.name}
            </h3>
            <p className={`font-sans text-xs md:text-sm leading-tight ${isLight ? "text-white/90" : "text-[#4ECDC4]"}`}>
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
            zIndex: showBack ? 1 : 0,
            backgroundColor: color,
          }}
        >
          {/* Talk type */}
          {speaker.talkType && (
            <div className="flex-shrink-0 mb-3">
              <span className="font-sans text-[8px] md:text-[9px] font-semibold text-white/70 tracking-widest uppercase">
                {speaker.talkType}
              </span>
            </div>
          )}
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
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              className="group/btn mt-3 inline-flex items-center gap-1 self-start font-sans text-[10px] md:text-[11px] font-semibold text-white uppercase tracking-wider cursor-pointer"
            >
              Read more
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpeakersGrid({ speakers, showMorePlaceholder = true, variant = "dark" }: SpeakersGridProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isLight = variant === "light";

  const handleFlip = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  // Extract unique talk types from speakers
  const talkTypes = Array.from(
    new Set(speakers.map((s) => s.talkType).filter(Boolean))
  ) as string[];

  // Filter speakers based on active filter
  const filteredSpeakers = activeFilter
    ? speakers.filter((s) => s.talkType === activeFilter)
    : speakers;

  return (
    <section className={`${isLight ? "bg-[#F5F0E8]" : "bg-[#0D0D0D]"} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
          <h2 className={`font-leadership text-4xl md:text-5xl tracking-tight ${isLight ? "text-[#0D0D0D]" : "text-white"}`}>
            Speakers
          </h2>
          
          {/* Filter chips */}
          {talkTypes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setActiveFilter(null); setActiveCard(null); }}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                  activeFilter === null
                    ? "bg-[#E85520] text-white"
                    : isLight 
                      ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/70 hover:bg-[#0D0D0D]/20"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                All
              </button>
              {talkTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => { setActiveFilter(type); setActiveCard(null); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                    activeFilter === type
                      ? "bg-[#E85520] text-white"
                      : isLight
                        ? "bg-[#0D0D0D]/10 text-[#0D0D0D]/70 hover:bg-[#0D0D0D]/20"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Speakers grid - 4 columns on desktop to match design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              speaker={speaker}
              index={index}
              variant={variant}
              isFlipped={activeCard === index}
              onFlip={() => handleFlip(index)}
            />
          ))}

          {/* More speakers placeholder */}
          {showMorePlaceholder && !activeFilter && (
            <div className={`relative aspect-[4/5] rounded-lg border border-dashed flex items-center justify-center bg-transparent ${isLight ? "border-[#0D0D0D]/20" : "border-white/20"}`}>
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
                <p className={`font-sans text-xs md:text-sm ${isLight ? "text-[#0D0D0D]/60" : "text-white/60"}`}>
                  More speakers
                </p>
                <p className={`font-sans text-xs ${isLight ? "text-[#0D0D0D]/40" : "text-white/40"}`}>
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
