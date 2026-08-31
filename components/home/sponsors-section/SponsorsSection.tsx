"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sponsorLogos = [
  // {
  //   name: "Accenture Song",
  //   src: "/images/logos/sponsors/accenture-song.webp",
  //   width: 160,
  // },
  {
    name: "Happening",
    src: "/images/logos/sponsors/happening.svg",
    width: 160,
  },
  // {
  //   name: "JP Morgan",
  //   src: "/images/logos/sponsors/jpmorgan.webp",
  //   width: 120,
  // },
  {
    name: "If Design",
    src: "/images/logos/sponsors/if-design.webp",
    width: 100,
  },
  {
    name: "BayOne",
    src: "/images/logos/sponsors/bayone.svg",
    width: 100,
  },
  {
    name: "Srishti Manipal Institute",
    src: "/images/logos/sponsors/srishti-manipal.webp",
    width: 210,
  },
  {
    name: "Ask Sa",
    src: "/images/logos/sponsors/asksamika.svg",
    width: 90,
  },
  {
    name: "RealCX AI",
    src: "/images/logos/sponsors/realcx-ai.svg",
    width: 90,
  },
  {
    name: "UISer",
    src: "/images/logos/sponsors/uiser.webp",
    width: 80,
  },
  {
    name: "Eventum",
    src: "/images/logos/sponsors/eventum.svg",
    width: 180,
  },
];

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sponsor"
      ref={sectionRef}
      className="bg-cream py-24 md:py-32 overflow-hidden relative"
    >
      {/* Background text */}
      <div className="absolute bottom-0 left-0 font-serif text-[16vw] text-page/2 leading-none uppercase select-none pointer-events-none">
        Partners
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <span className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3 block">
              Sponsorships
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-5xl lg:text-6xl text-page leading-[1.05]"
              style={{
                fontFamily: "'UXILeadershipCondensed'",
                fontWeight: 500,
              }}
            >
              Don’t Sponsor an Event.
              <br />
              <span className="text-brand">Achieve a Business Outcome.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="font-sans text-base text-page/60 leading-relaxed">
              UXINDIA is where the design community gathers to learn, connect,
              and shape what's next. Sponsoring gives your organization direct
              access to design leaders, product teams, startups, and emerging
              talent.
            </p>
          </motion.div>
        </div>

        {/* Sponsor benefit cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {[
            {
              title: "Brand Visibility",
              body: "Own high-intent moments on the main stage, in leadership lounges, and in highlight content.",
              bg: "#1B2E4A",
              text: "#FFFFFF",
              imgSrc: "/images/illustrations/trophy.webp",
              imgAlt: "3D golden trophy icon",
            },
            {
              title: "Talent Hiring",
              body: "Become the place top designers and product leaders want to work-before they hit your careers page.",
              bg: "#E85520",
              text: "#FFFFFF",
              imgSrc: "/images/illustrations/notepad.webp",
              imgAlt: "3D pen on notepad icon",
            },
            {
              title: "Product Positioning",
              body: "Put your product in front of teams that actually control adoption decisions, not just sign-ups.",
              bg: "#C8375B",
              text: "#FFFFFF",
              imgSrc: "/images/illustrations/glasses.webp",
              imgAlt: "3D glasses icon",
            },
            {
              title: "Enterprise Relations",
              body: "Host the rooms where CXOs, heads of design, and product leads compare notes and make decisions.",
              bg: "#1B7A6E",
              text: "#FFFFFF",
              imgSrc: "/images/illustrations/megaphone.webp",
              imgAlt: "3D megaphone icon",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              className="relative flex flex-col justify-between rounded-2xl p-6 pb-12 overflow-hidden min-h-[240px]"
              style={{
                backgroundColor: card.bg,
                border:
                  card.bg === "#F5F0E8"
                    ? "1px solid rgba(13,13,13,0.1)"
                    : "none",
              }}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: {
                  scale: 1,
                },
                hover: {
                  scale: 1.02,
                },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10">
                <h3
                  className="text-xl mb-3 leading-tight"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                    color: card.text,
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{
                    color:
                      card.text.toUpperCase() === "#FFFFFF"
                        ? "rgba(255,255,255,0.75)"
                        : "rgba(13,13,13,0.65)",
                  }}
                >
                  {card.body}
                </p>
              </div>

              <motion.img
                src={card.imgSrc}
                alt={card.imgAlt}
                className="absolute -right-6 -bottom-6 w-36 h-36 object-contain"
                variants={{
                  rest: {
                    scale: 1,
                    rotate: 0,
                    x: 0,
                    opacity: 0.8,
                  },
                  hover: {
                    scale: 1.1,
                    rotate: 3,
                    x: 8,
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Past partners — logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="font-sans text-xs text-page/30 uppercase tracking-[0.2em] mb-10 text-center">
            Our Esteemed partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-10 items-center">
            {sponsorLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 15 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
                className="flex items-center justify-center h-28 py-2 hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{
                    maxWidth: logo.width,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Partner CTA — below logo grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/about#partners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/30"
            >
              Know Our Partners
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
