"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import VenueCard from "@/components/ui/venue-card/VenueCard";

export default function VenueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="venue"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-sans text-xs text-white/30 uppercase tracking-[0.2em] mb-4">
            Venues
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] text-balance max-w-3xl mx-auto"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
            }}
          >
            A City and Venue Built for{" "}
            <span className="text-brand">Big Conversations.</span>
          </h2>
        </motion.div>

        {/* Venue Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          <VenueCard
            eventName="Leadership Summit"
            dates="23–25 Sept 2026"
            venueName="The Leela Bhartiya City"
            city="Bengaluru, India"
            description="An iconic five-star destination known for its grandeur, world-class amenities, and impeccable hospitality."
            googleMapsUrl="https://maps.app.goo.gl/GefGLLqYJ4ECABMcA"
            accentColor="#E85520"
            venueImage="/images/venue/the-leela-bhartiya-city.webp"
          />

          <VenueCard
            eventName="Rising Leaders Forum"
            dates="26–27 Sept 2026"
            venueName="Srishti Institute of Art, Design and Technology"
            city="Bengaluru, India"
            description="A vibrant space for emerging designers to connect, learn, and shape the future of design together."
            googleMapsUrl="https://maps.app.goo.gl/Bec27bPxTosqivvq7"
            accentColor="#F5BF42"
            venueImage="/images/venue/srishti-campus.webp"
          />
        </motion.div>
      </div>
    </section>
  );
}
