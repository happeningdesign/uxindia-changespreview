"use client";

export default function RisingLeadersHero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-b from-[#1a4d6d] to-[#0D0D0D] flex items-center">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook%20Air%20-%2042-0SFREqY5ESoVzXePCLcYFLYTKLKA2W.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-leadership text-5xl md:text-6xl text-white leading-tight mb-6">
                Rising Leaders Forum 2026
              </h1>
              <p className="font-sans text-base text-white/70 leading-relaxed max-w-md">
                For emerging design leaders, mid-career professionals, and leaders in transition ready to scale their impact.
              </p>
            </div>

            {/* Event details */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-2">
                  DATE
                </p>
                <p className="font-sans text-sm text-white font-semibold">
                  26-27 September 2026
                </p>
              </div>
              <div>
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-2">
                  VENUE
                </p>
                <p className="font-sans text-sm text-white font-semibold">
                  Leela Bhartiya City
                </p>
              </div>
              <div>
                <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-2">
                  LOCATION
                </p>
                <p className="font-sans text-sm text-white font-semibold">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>

          {/* Right side - image placeholder */}
          <div className="hidden lg:block h-96 rounded-lg bg-gradient-to-br from-white/10 to-white/5" />
        </div>
      </div>
    </section>
  );
}
