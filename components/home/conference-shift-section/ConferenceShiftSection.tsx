"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CurvedSlider from "@/components/ui/curved-slider/CursedSlider";

const CAROUSEL_IMAGES = [
  "/Carousel-01.webp",
  "/Carousel-02.webp",
  "/Carousel-03.webp",
  "/Carousel-04.webp",
  "/Carousel-05.webp",
  "/Carousel-06.webp",
  "/Carousel-07.webp",
  "/Carousel-08.webp",
  "/Carousel-09.webp",
  "/Carousel-10.webp",
  "/Carousel-11.webp",
  "/Carousel-12.webp",
  "/Carousel-13.webp",
  "/Carousel-14.webp",
  "/Carousel-15.webp",
];

const SVG_SIZE = 1100; // px — enlarged as requested
const BTN_W = 220; // px

export default function ConferenceShiftSection() {
  const svgSpinRef = useRef<HTMLDivElement>(null);

  // RAF-based rotation — works regardless of CSS/Tailwind conflicts
  useEffect(() => {
    let angle = 0;
    let raf: number;
    const tick = () => {
      angle += 0.1; // ~6 deg/s at 60fps
      if (svgSpinRef.current) {
        svgSpinRef.current.style.transform = `rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="about"
      className="bg-[#F5F0E8] pt-32 pb-20 relative overflow-hidden"
    >
      {/* UX India Object — half visible at section top, slowly rotating */}
      <div
        className="absolute left-1/2 pointer-events-none select-none"
        style={{
          top: `-${SVG_SIZE / 2}px`,
          width: `${SVG_SIZE}px`,
          height: `${SVG_SIZE}px`,
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      >
        <div ref={svgSpinRef} style={{ width: "100%", height: "100%" }}>
          <img
            src="/uxindia-object.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* ── Headline ── */}
      <div className="text-center px-6 mb-0 relative" style={{ zIndex: 1 }}>
        <h2
          className="text-[#0D0D0D] leading-[1.08]"
          style={{
            fontFamily: "'UXILeadershipCondensed'",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            letterSpacing: "-0.01em",
          }}
        >
          This Is Not a Conference.
          <br />
          This Is a Shift.
        </h2>
      </div>

      {/* ── Three.js Curved Carousel — edge-to-edge ── */}
      <div
        className="relative"
        style={{ zIndex: 1, marginTop: "-100px", marginBottom: "-100px" }}
      >
        <CurvedSlider
          images={CAROUSEL_IMAGES}
          speed={22}
          gap={8}
          curve={8}
          reverse={false}
          height="640px"
        />
      </div>

      {/* ── Body copy ── */}
      <div
        className="max-w-2xl mx-auto px-6 text-center mt-0 space-y-5 relative"
        style={{ zIndex: 1 }}
      >
        <p className="font-sans text-[16px] text-[#0D0D0D]/70 leading-relaxed">
          India is no longer just the world&apos;s execution center. It is
          becoming the world&apos;s design leadership engine. We don&apos;t copy
          playbooks built elsewhere. We design for scale, complexity, and an
          AI-powered future from the ground up.
        </p>
        <p className="font-sans text-[16px] text-[#0D0D0D]/70 leading-relaxed">
          UXINDIA Design Leadership Week is where that transition becomes
          visible on stage, in hallways, and in boardrooms.
        </p>
      </div>

      {/* ── CTAs ── */}
      <div
        className="flex flex-wrap items-center justify-center gap-4 mt-10 px-6 relative"
        style={{ zIndex: 1 }}
      >
        <Link
          href="https://partner.ux-india.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold px-8 py-3 rounded-full text-white text-center transition-opacity duration-200 hover:opacity-85"
          style={{ backgroundColor: "#E85520", minWidth: `${BTN_W}px` }}
        >
          Explore Sponsorship
        </Link>
        <Link
          href="https://www.ux-india.org/call-for-speakers/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold px-8 py-3 rounded-full text-white text-center transition-opacity duration-200 hover:opacity-85"
          style={{ backgroundColor: "#2D3580", minWidth: `${BTN_W}px` }}
        >
          Apply to Speak
        </Link>
        <Link
          href="https://2026.ux-india.org/waitlist/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold px-8 py-3 rounded-full text-white text-center transition-opacity duration-200 hover:opacity-85"
          style={{ backgroundColor: "#C8365A", minWidth: `${BTN_W}px` }}
        >
          Get Early Access to Tickets
        </Link>
      </div>
    </section>
  );
}
