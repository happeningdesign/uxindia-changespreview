"use client";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

interface SpeakersGridProps {
  speakers: Speaker[];
}

export default function SpeakersGrid({ speakers }: SpeakersGridProps) {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Speakers
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-[#E85520] to-transparent mb-12 md:mb-16" />

        {/* Speakers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#E85520]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E85520]/20"
            >
              {/* Speaker image */}
              <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Speaker info - overlaid at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-fit px-3 py-1 mb-3">
                  <p className="font-sans text-xs font-semibold text-white uppercase tracking-widest">
                    SPKR
                  </p>
                </div>
                <h3 className="font-sans font-semibold text-white text-lg mb-1">
                  {speaker.name}
                </h3>
                <p className="font-sans text-xs text-white/60">{speaker.role}</p>
              </div>
            </div>
          ))}

          {/* More speakers placeholder */}
          {speakers.length < 6 && (
            <div className="relative rounded-xl overflow-hidden border-2 border-dashed border-white/20 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E85520]/20 mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[#E85520]"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <p className="font-sans text-sm text-white/50 font-medium">
                  More speakers
                </p>
                <p className="font-sans text-xs text-white/30 mt-1">
                  coming soon
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
