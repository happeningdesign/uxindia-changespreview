"use client";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

interface SpeakersGridProps {
  speakers: Speaker[];
  showMorePlaceholder?: boolean;
}

export default function SpeakersGrid({ speakers, showMorePlaceholder = true }: SpeakersGridProps) {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-12 md:mb-16 tracking-tight">
          Speakers
        </h2>

        {/* Speakers grid - 4 columns on desktop to match design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900 cursor-pointer"
            >
              {/* Speaker photo with grayscale */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Speaker info - inside card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-serif font-semibold text-white text-sm md:text-base leading-tight mb-1 tracking-tight">
                  {speaker.name}
                </h3>
                <p className="font-serif text-xs md:text-sm text-[#4ECDC4] leading-tight">
                  {speaker.role}
                </p>
              </div>
            </div>
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
                <p className="font-serif text-xs md:text-sm text-white/60">
                  More speakers
                </p>
                <p className="font-serif text-xs text-white/40">
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
