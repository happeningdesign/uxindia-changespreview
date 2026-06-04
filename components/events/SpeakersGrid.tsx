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
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-12 md:mb-16">
          Speakers
        </h2>

        {/* Speakers grid - 4 columns on desktop to match design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {speakers.map((speaker, index) => (
            <div key={index} className="group flex flex-col">
              {/* Speaker image container */}
              <div className="relative mb-4">
                {/* Circular/rounded speaker photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-800">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* UX26 badge in top-right corner */}
                <div className="absolute top-3 right-3 bg-[#E85520] text-white text-[10px] font-sans font-bold px-2 py-1 rounded">
                  UX26
                </div>
              </div>

              {/* Speaker info below photo */}
              <h3 className="font-sans font-semibold text-white text-base mb-1">
                {speaker.name}
              </h3>
              <p className="font-sans text-sm text-white/50">{speaker.role}</p>
            </div>
          ))}

          {/* More speakers placeholder */}
          {showMorePlaceholder && (
            <div className="flex flex-col">
              <div className="relative aspect-square rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center mb-4">
                <div className="text-center px-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 mb-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/50"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                  <p className="font-sans text-xs text-white/50">
                    More speakers
                  </p>
                  <p className="font-sans text-xs text-white/30">
                    announced soon.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
