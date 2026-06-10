"use client";

import { useState, useEffect } from "react";

interface VenueSectionProps {
  variant?: "dark" | "light";
  venueName?: string;
}

const venueImages = [
  { src: "/The Leela Bhartiya City.jpg", alt: "The Leela Bhartiya City exterior" },
  { src: "/Leela Bharatiya City Image.jpg", alt: "The Leela Bhartiya City grounds" },
  { src: "/uxindia-stage.jpg", alt: "UX India main stage" },
  { src: "/uxindia-audience.jpg", alt: "UX India audience" },
];

export default function VenueSection({ variant = "dark", venueName = "The Leela Bhartiya City" }: VenueSectionProps) {
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
                  {venueName}
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
                  <h4 className="font-leadership font-semibold text-base mb-2 text-white flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#E85520] shrink-0">
                      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                    By Air
                  </h4>
                  <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                    Kempegowda International Airport (BLR) is approximately 35 km from the venue, with convenient taxi and ride-share options available.
                  </p>
                </div>

                {/* By Train */}
                <div>
                  <h4 className="font-leadership font-semibold text-base mb-2 text-white flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#E85520] shrink-0">
                      <rect x="4" y="3" width="16" height="13" rx="2"/>
                      <path d="M4 11h16M12 3v8M8 19l-2 2M16 19l2 2M8 19h8"/>
                      <circle cx="8.5" cy="14.5" r="1" fill="currentColor" stroke="none"/>
                      <circle cx="15.5" cy="14.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                    By Train
                  </h4>
                  <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                    Bengaluru City Railway Station is well-connected to major cities. The venue is accessible via metro and local transport.
                  </p>
                </div>

                {/* By Bus */}
                <div>
                  <h4 className="font-leadership font-semibold text-base mb-2 text-white flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 122.9 120.5" fill="#E85520" className="shrink-0">
                      <path fillRule="evenodd" clipRule="evenodd" d="M110.8,103.6h-7.6V114c0,3.6-2.9,6.5-6.5,6.5h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H41.5V114c0,3.6-2.9,6.5-6.5,6.5 h-9c-3.6,0-6.5-2.9-6.5-6.5v-10.3H12v-82c0-7.6,4.4-13.1,13.3-16.5c17.6-6.9,54.6-6.9,72.3,0c8.9,3.4,13.3,8.9,13.3,16.5V103.6 L110.8,103.6L110.8,103.6z M118.6,40.4h-3.8V62h3.8c2.4,0,4.3-1.9,4.3-4.3V44.7C122.9,42.3,121,40.4,118.6,40.4L118.6,40.4z M4.3,40.4h3.8V62H4.3C1.9,62,0,60.1,0,57.7V44.7C0,42.3,1.9,40.4,4.3,40.4L4.3,40.4z M46.4,8.6h30.1c0.9,0,1.6,0.7,1.6,1.6v5.2 c0,0.9-0.7,1.6-1.6,1.6H46.4c-0.9,0-1.6-0.7-1.6-1.6v-5.2C44.8,9.3,45.5,8.6,46.4,8.6L46.4,8.6z M22.9,23.2h76.7 c1,0,1.9,0.9,1.9,1.9v42.8c0,1-0.9,1.9-1.9,1.9H22.9c-1,0-1.9-0.9-1.9-1.9V25.1C21,24.1,21.8,23.2,22.9,23.2L22.9,23.2L22.9,23.2 L22.9,23.2z M98.6,84.9c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.5,0.7-4.9,2c-1.4,1.3-2,3-2,4.9c0,1.9,0.7,3.5,2,4.8 c1.4,1.3,3,2,4.9,2c1.9,0,3.6-0.7,4.9-2C98,88.4,98.6,86.8,98.6,84.9L98.6,84.9L98.6,84.9L98.6,84.9z M38.1,84.9 c0-1.9-0.7-3.6-2-4.9c-1.3-1.3-3-2-4.9-2c-1.9,0-3.6,0.7-4.9,2c-1.3,1.3-2,3-2,4.9c0,1.9,0.6,3.5,2,4.8c1.3,1.3,3,2,4.9,2 c2,0,3.6-0.7,4.9-2C37.4,88.4,38.1,86.8,38.1,84.9L38.1,84.9L38.1,84.9L38.1,84.9z"/>
                    </svg>
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
