"use client";

export default function RisingLeadersHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />



      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 h-full flex flex-col justify-between min-h-[85vh]">
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Large title */}
          <h1 className="font-leadership text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 max-w-3xl">
            Rising Leaders
            <br />
            Forum 2026
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed max-w-md mb-12">
            For emerging design leaders, mid-career professionals, and leaders in transition ready to scale their impact.
          </p>

          {/* Horizontal line separator */}
          <div className="w-full max-w-4xl h-px bg-white/30 mb-8" />

          {/* Event metadata - three columns */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl">
            <div>
              <p className="font-sans text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] mb-2">
                DATE
              </p>
              <p className="font-sans text-sm md:text-base text-[#E85520] font-medium">
                26-27 September 2026
              </p>
            </div>
            <div>
              <p className="font-sans text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] mb-2">
                VENUE
              </p>
              <p className="font-sans text-sm md:text-base text-white font-medium">
                Leela Bhartiya City
              </p>
            </div>
            <div>
              <p className="font-sans text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] mb-2">
                LOCATION
              </p>
              <p className="font-sans text-sm md:text-base text-[#4ECDC4] font-medium">
                Bengaluru, India
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
