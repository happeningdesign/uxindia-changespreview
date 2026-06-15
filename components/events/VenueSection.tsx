"use client";

import { useState, useEffect } from "react";

interface VenueSectionProps {
  variant?: "dark" | "light";
  venueName?: string;
  mapsUrl?: string;
  embedCoords?: string;
  images?: { src: string; alt: string }[];
}

const leelaImages = [
  { src: "/The Leela Bhartiya City.jpg", alt: "The Leela Bhartiya City exterior" },
  { src: "/Leela Bharatiya City Image.jpg", alt: "The Leela Bhartiya City grounds" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Falak_1920x950-Et7Dn5Fr1hLfdCGK3z7R6Q7GsrTtKu.webp", alt: "Falak rooftop bar and restaurant at The Leela Bhartiya City" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UXI23-Stay-Leela-Bhartiya-City-Library-scaled-XfOxzfLy6rBCbpXaty2P9LHZaZ4dpC.webp", alt: "The Leela library lounge with chandelier" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e77b65eeb6514eeeaae4fde89c081217_large%21_%2169b5792c5ab81b513e75f14b1dd61e79-xanlbB9gkQpkolPD4J6E4rXTgrR4tr.webp", alt: "Grand foyer corridor at The Leela Bhartiya City" },
];

const DEFAULT_MAPS_URL = "https://maps.app.goo.gl/GefGLLqYJ4ECABMcA";
const DEFAULT_EMBED_COORDS = "13.0846294,77.643066";

export default function VenueSection({
  variant = "dark",
  venueName = "The Leela Bhartiya City",
  mapsUrl = DEFAULT_MAPS_URL,
  embedCoords = DEFAULT_EMBED_COORDS,
  images = leelaImages,
}: VenueSectionProps) {
  const isLight = variant === "light";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={`${isLight ? "bg-[#F5F0E8]" : "bg-[#0D0D0D]"} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`font-leadership text-4xl md:text-5xl mb-4 ${isLight ? "text-[#0D0D0D]" : "text-white"}`}>
          Venue
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-[#E85520] to-transparent mb-12 md:mb-16" />

        {/* Venue card - Photos only */}
        <div className={`rounded-2xl overflow-hidden p-6 md:p-12 mb-8 ${isLight ? "bg-[#1D5078] border border-[#1D5078]" : "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left - Photos slideshow */}
            <div className="flex flex-col gap-3">
              <div className={`relative aspect-video md:aspect-auto md:h-96 rounded-xl overflow-hidden ${isLight ? "border border-white/20" : "border border-white/10"}`}>
                {images.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {images.map((image, index) => (
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
            </div>

            {/* Right - Venue Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-leadership text-2xl md:text-4xl mb-2 text-white break-words">
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
            </div>
          </div>
        </div>

        {/* Directions card */}
        <div className={`rounded-2xl overflow-hidden p-6 md:p-12 ${isLight ? "bg-[#1D5078] border border-[#1D5078]" : "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Directions info - Left on desktop */}
            <div className="space-y-8 md:order-1">
              <div>
                <h3 className="font-leadership text-2xl md:text-4xl mb-3 text-white flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E85520] shrink-0">
                    <g clipPath="url(#clip0_3_3)">
                      <path d="M391.812 0H408.145C411.422 0.871387 415.855 1.15394 419.13 1.70442C467.533 9.83745 506.183 50.739 511.2 99.6253C511.37 101.286 511.57 103.452 512 105.072V115.864C511.202 118.144 511.19 121.319 510.74 123.748C508.255 137.169 502.93 151.001 496.802 163.151C490.21 176.268 482.85 188.986 474.763 201.238C459.063 224.81 441.965 247.419 423.56 268.945C420.322 272.765 413.042 281.757 409.802 284.465C408.217 285.77 406.392 286.76 404.432 287.375C391.215 291.392 384.427 277.482 376.802 269.495C376.055 268.715 375.322 267.757 374.615 266.925C363.09 253.417 352.128 239.437 341.76 225.023C322.455 198.596 303.775 169.96 293.047 138.844C292.567 137.449 292.08 136.034 291.698 134.609C284.803 108.38 288.67 80.4843 302.443 57.1213C319.878 27.2138 347.29 7.38845 381.58 1.55651C384.7 1.02559 388.9 0.841575 391.812 0ZM400.085 247.457C400.852 246.472 401.845 245.117 402.682 244.238C426.842 214.326 450.522 183.606 467.957 149.173C475.505 134.268 481.267 120.967 479.465 103.855C477.285 82.7685 466.825 63.409 450.385 50.0267C435.148 37.765 414.75 30.6395 395.145 32.3483C372.477 34.3593 353.49 43.1237 338.695 60.711C326.515 75.1935 318.572 96.336 320.247 115.395C322.865 145.195 361.71 198.851 380.575 223.365C386.84 231.507 393.18 239.849 400.085 247.457Z" fill="currentColor"/>
                      <path d="M399.135 64.1561C425.545 63.6954 447.332 84.7209 447.812 111.131C448.292 137.54 427.282 159.344 400.872 159.843C374.437 160.343 352.605 139.307 352.125 112.87C351.645 86.4331 372.698 64.6174 399.135 64.1561ZM402.127 127.744C410.795 126.552 416.87 118.581 415.72 109.907C414.572 101.234 406.633 95.1194 397.953 96.2244C389.213 97.3376 383.045 105.347 384.2 114.082C385.358 122.817 393.397 128.945 402.127 127.744Z" fill="currentColor"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3_3">
                        <rect width="512" height="512" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  Directions
                </h3>
              </div>
              <p className={`font-sans text-sm leading-relaxed ${isLight ? "text-white/70" : "text-white/60"}`}>
                Located in the heart of Bengaluru, our venue is easily accessible by all major modes of transportation. Use the map to get directions or click the button to open full directions in Google Maps.
              </p>

              {/* CTA Button */}
              <div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${isLight ? "bg-white text-[#1D5078] hover:bg-white/90" : "bg-[#E85520] hover:bg-[#E85520]/90 text-white hover:shadow-lg hover:shadow-[#E85520]/30"}`}
                >
                  Get Directions
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Map - Right on desktop */}
            <div className="md:order-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full group relative rounded-xl overflow-hidden"
                aria-label="Open venue in Google Maps"
              >
                <div className="relative aspect-video md:aspect-auto md:h-96">
                  <iframe
                    src={`https://maps.google.com/maps?q=${embedCoords}&z=16&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Venue map"
                  />
                </div>
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-200 flex items-end justify-end p-3 rounded-xl">
                  <span className="flex items-center gap-1.5 bg-white text-[#0D0D0D] text-xs font-sans font-semibold px-3 py-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Open in Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
