"use client";

import { useState, useEffect } from "react";

interface VenueSectionProps {
  variant?: "dark" | "light";
}

const venueImages = [
  { src: "/The Leela Bhartiya City.jpg", alt: "The Leela Bhartiya City exterior" },
  { src: "/Leela Bharatiya City Image.jpg", alt: "The Leela Bhartiya City grounds" },
  { src: "/uxindia-stage.jpg", alt: "UX India main stage" },
  { src: "/uxindia-audience.jpg", alt: "UX India audience" },
];

export default function VenueSection({ variant = "dark" }: VenueSectionProps) {
  const isLight = variant === "light";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % venueImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/GefGLLqYJ4ECABMcA", "_blank");
  };

  return (
    <section className={`${isLight ? "bg-[#F5F0E8]" : "bg-[#0D0D0D]"} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`font-leadership text-4xl md:text-5xl mb-4 ${isLight ? "text-[#0D0D0D]" : "text-white"}`}>
          Venue
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-[#E85520] to-transparent mb-12 md:mb-16" />

        {/* Venue card */}
        <div className={`rounded-2xl overflow-hidden p-8 md:p-12 ${isLight ? "bg-[#1D5078] border border-[#1D5078]" : "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image slideshow */}
            <div className={`relative aspect-video md:aspect-auto md:h-96 rounded-xl overflow-hidden ${isLight ? "border border-white/20" : "border border-white/10"}`}>
              {venueImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {venueImages.map((image, index) => (
                  <button
                    key={image.src}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${image.alt}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-leadership text-3xl md:text-4xl mb-2 text-white">
                  The Leela Bhartiya City
                </h3>
                <p className={`font-sans text-sm font-semibold uppercase tracking-widest ${isLight ? "text-white/70" : "text-[#E85520]"}`}>
                  Bengaluru, India
                </p>
              </div>

              {/* Description */}
              <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                An iconic five-star destination known for its grandeur, world-class amenities, and impeccable hospitality. The perfect setting for design leaders to connect, collaborate, and shape the future.
              </p>

              {/* Transport info */}
              <div className="space-y-6">
                {/* By Air */}
                <div>
                  <h4 className="font-leadership font-semibold text-base mb-2 text-white">
                    By Air
                  </h4>
                  <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                    Kempegowda International Airport (BLR) is approximately 35 km from the venue, with convenient taxi and ride-share options available.
                  </p>
                </div>

                {/* By Train */}
                <div>
                  <h4 className="font-leadership font-semibold text-base mb-2 text-white">
                    By Train
                  </h4>
                  <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                    Bengaluru City Railway Station is well-connected to major cities. The venue is accessible via metro and local transport.
                  </p>
                </div>

                {/* By Bus */}
                <div>
                  <h4 className="font-leadership font-semibold text-base mb-2 text-white">
                    By Bus
                  </h4>
                  <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                    Kempegowda Bus Station (Majestic), the city&apos;s main KSRTC and BMTC terminal, offers extensive intercity and local connectivity, with taxis and ride-shares available to the venue.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button 
                  onClick={handleGetDirections}
                  className={`inline-flex items-center gap-2 font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${isLight ? "bg-white text-[#1D5078] hover:bg-white/90" : "bg-[#E85520] hover:bg-[#E85520]/90 text-white hover:shadow-lg hover:shadow-[#E85520]/30"}`}
                >
                  Get Directions
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
