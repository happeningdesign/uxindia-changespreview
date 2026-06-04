"use client";

export default function LeadershipSummitHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/leela-bhartiya-city.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Slight black overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col justify-end min-h-[90vh]">
        {/* Large title */}
        <h1 className="font-leadership text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 max-w-4xl">
          Leadership
          <br />
          Summit 2026
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed max-w-md mb-10">
          For senior design professionals, heads of design, CXOs, CDOs, and strategic decision-makers shaping design inside their organisations.
        </p>

        {/* Horizontal line separator */}
        <div className="w-full max-w-4xl h-px bg-white/30 mb-6" />

        {/* Event metadata - three columns */}
        <div className="flex flex-wrap gap-x-16 gap-y-4 max-w-4xl">
          <div className="min-w-[140px]">
            <p className="font-sans text-[11px] text-white/50 uppercase tracking-[0.15em] mb-1.5">
              DATE
            </p>
            <p className="font-sans text-sm md:text-base text-white font-medium">
              23-25 September 2026
            </p>
          </div>
          <div className="min-w-[140px]">
            <p className="font-sans text-[11px] text-white/50 uppercase tracking-[0.15em] mb-1.5">
              VENUE
            </p>
            <p className="font-sans text-sm md:text-base text-white font-medium">
              Leela Bhartiya City
            </p>
          </div>
          <div className="min-w-[140px]">
            <p className="font-sans text-[11px] text-white/50 uppercase tracking-[0.15em] mb-1.5">
              LOCATION
            </p>
            <p className="font-sans text-sm md:text-base text-white font-medium">
              Bengaluru, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
