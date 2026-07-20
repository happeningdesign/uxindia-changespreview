"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
  LSSpeakerCard,
  LeadershipSummitSpeakersData,
} from "@/components/ui/ls-speaker-card/LSSpeakerCard";

import {
  RLFSpeakerCard,
  RisingLeadersForumSpeakersData,
} from "@/components/ui/rlf-speaker-card/RLFSpeakerCard";

const whySpeakReasons = [
  {
    heading: "Share your Ideas",
    body: "on a global stage with one of the longest-running UX conferences in the world.",
  },
  {
    heading: "Reach an engaged audience",
    body: "of design leaders, product teams, founders, and emerging talent.",
  },
  {
    heading: "Build thought leadership",
    body: "by contributing to conversations shaping the future of design.",
  },
  {
    heading: "Expand your network",
    body: "through meaningful interactions with peers, sponsors, and innovators.",
  },
  {
    heading: "Inspire the next generation",
    body: "of designers and help move the design community forward.",
  },
];

export default function SpeakersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cfsSectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cfsVisible, setCfsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCfsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (cfsSectionRef.current) observer.observe(cfsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Speakers grid */}
      <section
        id="speakers"
        ref={sectionRef}
        className="bg-cream py-24 md:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3 block">
                2026 Speakers
              </span>
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl text-page leading-[1.05] transition-all duration-700 opacity-100 translate-y-0`}
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                <span className="text-brand">Leadership Summit</span>
                <br />
                Speakers
              </h2>
            </div>
            <p
              className={`font-sans text-base text-page/55 max-w-sm leading-relaxed transition-all duration-700 delay-100 opacity-0 translate-y-6`}
            >
              For over two decades, UXINDIA has brought together some of the
              most influential voices in design. A stage where ideas are
              challenged, futures are imagined, and the next generation of
              design leaders find inspiration.
            </p>
          </div>

          {/* Uniform 4-column grid for Leadership Summit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-20">
            {LeadershipSummitSpeakersData.map((speaker, i) => (
              <LSSpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={i}
                visible={true}
              />
            ))}

            {/* More speakers card */}
            <a
              href="/leadership-summit"
              className={`relative rounded-2xl overflow-hidden border-2 border-dashed border-page/20 flex flex-col items-center justify-center p-6 aspect-[3/4] transition-all duration-250 hover:border-brand/50 hover:bg-brand/5`}
              // style={{
              //   transitionDelay: `${speakers.length * 80}ms`,
              // }}
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                <ArrowRight />
              </div>
              <p className="font-sans text-sm font-semibold text-page/60 text-center">
                View All
                <br />
                Leadership Summit Speakers
              </p>
            </a>
          </div>

          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-end gap-8 mb-12">
            <div>
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl text-page leading-[1.05] transition-all duration-700 text-right opacity-100 translate-y-0`}
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                <span className="text-brand">Rising Leaders Forum</span>
                <br />
                Speakers
              </h2>
            </div>
          </div>

          {/* Uniform 4-column grid for Rising Leaders Forum */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {RisingLeadersForumSpeakersData.map((speaker, i) => (
              <RLFSpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={i}
                visible={true}
              />
            ))}

            {/* More speakers card */}
            <a
              href="/rising-leaders-forum"
              className={`relative rounded-2xl overflow-hidden border-2 border-dashed border-page/20 flex flex-col items-center justify-center p-6 aspect-[3/4] transition-all duration-250 hover:border-brand/50 hover:bg-brand/5`}
              // style={{
              //   transitionDelay: `${speakers.length * 80}ms`,
              // }}
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                <ArrowRight />
              </div>
              <p className="font-sans text-sm font-semibold text-page/60 text-center">
                View All
                <br />
                Rising Leaders Forum Speakers
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Call for Speakers */}
      {/* 
      <section
        id="call-for-speakers"
        ref={cfsSectionRef}
        className="bg-page py-24 md:py-32 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 font-serif text-[16vw] text-white/[0.00] leading-none select-none pointer-events-none">
          SPEAK
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3 block">
                Call For Speakers
              </span>
              <h2
                className={`text-5xl md:text-6xl text-white leading-[1.05] mb-6 transition-all duration-700 ${
                  cfsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Don’t Just Speak.
                <br />
                <span className="text-brand">Shape the Narrative.</span>
              </h2>
              <p
                className={`font-sans text-base text-white/50 leading-relaxed mb-4 transition-all duration-700 delay-100 ${
                  cfsVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                For over two decades, UXINDIA has brought together some of the
                most influential voices in design. It&apos;s a stage where ideas
                are challenged, futures are imagined, and the next generation of
                design leaders find inspiration.
              </p>
              <p
                className={`font-sans text-base text-white/50 leading-relaxed mb-10 transition-all duration-700 delay-150 ${
                  cfsVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Our speakers represent the best of the global design community —
                design leaders, entrepreneurs, researchers, and product
                innovators shaping the way the world builds technology. If
                you&apos;re pushing boundaries in design, AI, product, or
                leadership, we invite you to bring your ideas to the UXINDIA
                stage.
              </p>

              <Link
                href=""
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 bg-brand hover:bg-brand text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 ${
                  cfsVisible ? "" : ""
                } transition-all duration-700 delay-200 opacity-45`}
              >
                Submissions Closed
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
            </div>

            <div
              className={`space-y-0 transition-all duration-700 delay-200 ${
                cfsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {whySpeakReasons.map((reason, i) => (
                <div
                  key={i}
                  className="group flex gap-5 py-5 border-b border-white/10 last:border-0 hover:border-brand/30 transition-colors cursor-default"
                >
                  <span className="font-serif text-2xl text-brand/30 leading-none flex-shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-white group-hover:text-brand transition-colors mb-1">
                      {reason.heading}
                    </h4>
                    <p className="font-sans text-sm text-white/40 leading-relaxed">
                      {reason.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> 
      */}
    </>
  );
}
