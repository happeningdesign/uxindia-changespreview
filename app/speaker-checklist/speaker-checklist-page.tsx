"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// ─── Reusable animated wrapper ────────────────────────────────────────────────
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-2 border-brand">
      <span className="font-sans text-sm font-semibold text-brand">
        {number}
      </span>
      <h2
        className="text-3xl md:text-4xl text-page"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        {title}
      </h2>
    </div>
  );
}

// ─── Check list item ───────────────────────────────────────────────────────────
function CheckItem({
  children,
  note,
}: {
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <li className="flex gap-4 py-4 border-b border-page/8 last:border-b-0">
      <span
        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-brand/40 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-brand/30" />
      </span>
      <div>
        <p className="font-sans text-base text-page leading-relaxed">
          {children}
        </p>
        {note && (
          <p className="font-sans text-sm text-page/50 mt-1 leading-relaxed">
            {note}
          </p>
        )}
      </div>
    </li>
  );
}

// ─── Info card ─────────────────────────────────────────────────────────────────
function InfoCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-white border border-page/8 rounded-2xl p-5 flex flex-col gap-1">
      <span className="font-sans text-xs font-semibold text-brand uppercase tracking-[0.18em]">
        {label}
      </span>
      <span
        className="text-xl text-page leading-tight"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        {value}
      </span>
      {sub && (
        <span className="font-sans text-sm text-page/50">{sub}</span>
      )}
    </div>
  );
}

// ─── Callout block ─────────────────────────────────────────────────────────────
function Callout({
  children,
  variant = "brand",
}: {
  children: React.ReactNode;
  variant?: "brand" | "ink";
}) {
  if (variant === "ink") {
    return (
      <div className="bg-page text-white p-6 md:p-8 rounded-2xl">
        {children}
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-brand/10 to-brand/5 border-l-4 border-brand p-6 md:p-8 rounded-r-2xl">
      {children}
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const beforeConference = [
  {
    item: "Confirm your participation by replying to the official speaker confirmation email from team@umo.design.",
  },
  {
    item: "Submit your final presentation deck by the deadline communicated in your confirmation email.",
    note: "Use a 16:9 screen resolution. Avoid any company or product promotion — focus on insight and value for the audience.",
  },
  {
    item: "Prepare a backup copy of your presentation (USB drive or cloud link). Venue Wi-Fi is not guaranteed — plan accordingly.",
  },
  {
    item: "Review your slide content to ensure it aligns with your submitted abstract and the UXINDIA 2026 theme.",
    note: "The curation team may send feedback if there is a mismatch. Be prepared to revise.",
  },
  {
    item: "If your session requires a rehearsal or dry run, coordinate with the speaker relations team in advance.",
  },
  {
    item: "Ensure your bio and headshot on the UXINDIA 2026 website are accurate. Write to team@umo.design if anything needs updating.",
  },
  {
    item: "International speakers: confirm your visa status, passport validity, and travel insurance well in advance.",
    note: "Carry a universal travel adaptor and ensure international roaming is enabled on your phone.",
  },
  {
    item: "Agree to the recording and publishing policy. UXINDIA plans to record selected sessions and publish them on YouTube.",
  },
  {
    item: "If your workshop requires a laptop, Figma access, mobile hotspot, or any other infrastructure, confirm these requirements with the team by email.",
  },
];

const registrationChecklist = [
  {
    item: "Use the complimentary speaker pass (100% discount code) shared via email to register for the conference.",
    note: "If you have not received this, contact team@umo.design immediately.",
  },
  {
    item: "Proceed to the dedicated Speakers counter at registration — separate from Delegate and Sponsor counters.",
  },
  {
    item: "Registration opens at 8:00 am and closes at 8:30 am on each conference day. Plan your commute with Bengaluru traffic in mind.",
  },
  {
    item: "Carry the pass emailed to you post-registration. If lost, bring a valid government-issued photo ID.",
  },
];

const onSiteChecklist = [
  {
    item: "Arrive at your session room at least 20–30 minutes before your talk to test your A/V connections.",
    note: "Connect with the Track Lead assigned to your room to check audio, display resolution, and slide compatibility.",
  },
  {
    item: "Load your presentation on the provided machine or connect your own laptop — confirm your preference with the Track Lead.",
  },
  {
    item: "Mobile data is your best bet for internet access. Plan any live demos around a personal hotspot.",
  },
  {
    item: "Sessions start on time. Please be in the room and ready before your scheduled slot.",
  },
  {
    item: "Keep phones on silent during all conference sessions. Step outside the hall if you need to take a call.",
  },
  {
    item: "Dress code is business casual for all conference days. Avoid casual beachwear (flip-flops, shorts) at the networking dinner.",
  },
  {
    item: "QR codes for session feedback will be displayed at the end of your talk. Encourage your audience to scan and respond.",
  },
  {
    item: "Lunch and high tea are provided daily. Food counters close before sessions begin — plan accordingly.",
  },
  {
    item: "UXINDIA is 100% volunteer-run. Please be patient, kind, and cooperative with volunteers and fellow participants.",
  },
];

const venueInfo = [
  {
    label: "Venue",
    value: "To Be Announced",
    sub: "Bengaluru, India — details shared in your confirmation email",
  },
  {
    label: "Dates",
    value: "Sep 23–27, 2026",
    sub: "Leadership Summit: Sep 23–25 · Rising Leaders Forum: Sep 26–27",
  },
  {
    label: "Contact",
    value: "team@umo.design",
    sub: "Jabeen: +91 80962 04373",
  },
  {
    label: "Schedule",
    value: "ux-india.org/schedule",
    sub: "Full session schedule published closer to the conference",
  },
];

const gettingThere = [
  {
    item: "Book your travel to Bengaluru (Kempegowda International Airport — BLR) well in advance.",
  },
  {
    item: "From the airport, use Uber or Ola for door-to-door convenience. Journey time is 45 minutes to 1.5 hours depending on traffic.",
  },
  {
    item: "BMTC airport buses (Vayu Vajra) are available from the airport to key city stops. From there, use an auto-rickshaw or cab to the venue.",
  },
  {
    item: "Book your hotel as early as possible. Accommodation for Keynote and Plenary speakers will be coordinated by the UXINDIA team.",
    note: "For other formats, speakers are responsible for their own accommodation unless otherwise confirmed.",
  },
  {
    item: "Keep the organiser's contact number saved on your phone for last-minute assistance on arrival.",
  },
];

const etiquetteRules = [
  "Be Punctual — sessions start on time and late entry disrupts the audience.",
  "Respect the audience by preparing original content. Avoid generic, purely theoretical, or product-heavy presentations.",
  "Acknowledge your collaborators if the work was done with a team, but deliver the talk as the primary speaker.",
  "Encourage discussion. Leave room for the audience to engage — the strongest sessions at UXINDIA are interactive.",
  "Do not hold seats for others or block aisles with bags or equipment.",
  "Be present. Attend sessions beyond your own — the community appreciates speakers who are active participants.",
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SpeakerChecklistPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Nav forceSolid />

      <main className="min-h-screen bg-cream">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] overflow-hidden bg-page pt-[100px]"
        >
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 w-full h-full"
          >
            <Image
              src="/images/bg/default.jpg"
              alt="UXINDIA 2026 conference stage"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/80 to-transparent" />
          </motion.div>

          <div className="relative z-10 min-h-[calc(70vh-100px)] flex flex-col justify-end pb-16 md:pb-24 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-4"
              >
                UXINDIA 2026 · For Selected Speakers
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl text-white mb-6"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Speaker Checklist
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Your complete guide to arriving prepared, presenting with
                confidence, and making the most of UXINDIA Design Leadership
                Week 2026.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-sm text-white/50 mt-6"
              >
                September 23–27, 2026 · Bengaluru, India
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">

            {/* Intro callout */}
            <AnimatedSection>
              <Callout>
                <p className="font-sans text-base md:text-lg text-[#333333] leading-relaxed mb-3">
                  <strong className="text-brand">
                    Congratulations on being selected to speak at UXINDIA 2026.
                  </strong>{" "}
                  This page is your practical reference for everything you need
                  to do before, during, and after the conference.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  If anything is unclear or your situation is not covered here,
                  reach out to{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-brand font-semibold hover:underline"
                  >
                    team@umo.design
                  </a>{" "}
                  or call Jabeen at{" "}
                  <a
                    href="tel:+918096204373"
                    className="text-brand font-semibold hover:underline"
                  >
                    +91 80962 04373
                  </a>
                  .
                </p>
              </Callout>
            </AnimatedSection>

            {/* Quick info cards */}
            <AnimatedSection className="mt-12 mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venueInfo.map((card) => (
                  <InfoCard key={card.label} {...card} />
                ))}
              </div>
            </AnimatedSection>

            {/* ── 01 Before the Conference ──────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="01" title="Before the Conference" />
              <ul className="divide-y divide-page/8">
                {beforeConference.map((entry, i) => (
                  <CheckItem key={i} note={entry.note}>
                    {entry.item}
                  </CheckItem>
                ))}
              </ul>
            </AnimatedSection>

            {/* ── 02 Registration & Arrival ─────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="02" title="Registration & Arrival" />
              <ul className="divide-y divide-page/8">
                {registrationChecklist.map((entry, i) => (
                  <CheckItem key={i} note={entry.note}>
                    {entry.item}
                  </CheckItem>
                ))}
              </ul>
            </AnimatedSection>

            {/* ── 03 Getting to the Venue ───────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="03" title="Getting to the Venue" />
              <p className="font-sans text-base text-page/60 leading-relaxed mb-6">
                The venue is in Bengaluru. Full address and a maps link will be
                shared in your speaker confirmation email. Below is general
                guidance for getting around the city.
              </p>
              <ul className="divide-y divide-page/8">
                {gettingThere.map((entry, i) => (
                  <CheckItem key={i} note={entry.note}>
                    {entry.item}
                  </CheckItem>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-page/5 rounded-xl border border-page/10">
                <p className="font-sans text-sm text-page/60 leading-relaxed">
                  <strong className="text-page/80">Important:</strong> Wi-Fi
                  at the venue is not guaranteed. If your session requires
                  internet access — for a live demo, live tool, or workshop
                  exercise — please arrange a personal mobile hotspot with
                  sufficient data (~1–2 GB recommended).
                </p>
              </div>
            </AnimatedSection>

            {/* ── 04 On-Site Checklist ──────────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="04" title="On-Site Checklist" />
              <ul className="divide-y divide-page/8">
                {onSiteChecklist.map((entry, i) => (
                  <CheckItem key={i} note={entry.note}>
                    {entry.item}
                  </CheckItem>
                ))}
              </ul>
            </AnimatedSection>

            {/* ── 05 Speaker Etiquette ──────────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="05" title="Speaker Etiquette" />
              <p className="font-sans text-base text-page/60 leading-relaxed mb-6">
                UXINDIA is a curated community experience. These principles
                help maintain the quality and respect that make the conference
                distinctive.
              </p>
              <ul className="space-y-3">
                {etiquetteRules.map((rule, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-brand font-semibold font-sans shrink-0 mt-0.5">
                      →
                    </span>
                    <span className="font-sans text-base text-page/80 leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* ── 06 Volunteers note ────────────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <Callout>
                <p className="font-sans text-base md:text-lg text-[#333333] leading-relaxed mb-3">
                  <strong className="text-brand">
                    UXINDIA is 100% volunteer-driven.
                  </strong>{" "}
                  Every coordinator, track lead, and logistics person you meet
                  at the venue is giving their time freely to make this
                  conference happen.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Please be patient, generous, and kind — especially when
                  things are moving fast. A little warmth from speakers makes
                  an enormous difference to the whole team.
                </p>
              </Callout>
            </AnimatedSection>

            {/* ── 07 Contact & Support ─────────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="06" title="Contact & Support" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-page/8 rounded-2xl p-5">
                  <p className="font-sans text-xs font-semibold text-brand uppercase tracking-[0.18em] mb-2">
                    General Queries
                  </p>
                  <a
                    href="mailto:team@umo.design"
                    className="font-sans text-base font-semibold text-page hover:text-brand transition-colors"
                  >
                    team@umo.design
                  </a>
                  <p className="font-sans text-sm text-page/50 mt-1">
                    For slide reviews, logistics, and confirmations
                  </p>
                </div>
                <div className="bg-white border border-page/8 rounded-2xl p-5">
                  <p className="font-sans text-xs font-semibold text-brand uppercase tracking-[0.18em] mb-2">
                    On-Site Support
                  </p>
                  <a
                    href="tel:+918096204373"
                    className="font-sans text-base font-semibold text-page hover:text-brand transition-colors"
                  >
                    Jabeen: +91 80962 04373
                  </a>
                  <p className="font-sans text-sm text-page/50 mt-1">
                    Available on WhatsApp during conference days
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Final CTA ─────────────────────────────────────────────────── */}
            <AnimatedSection>
              <div className="bg-page text-white p-8 md:p-10 rounded-3xl">
                <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3">
                  See you in Bengaluru
                </p>
                <h3
                  className="text-2xl md:text-3xl mb-4"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                  }}
                >
                  UXINDIA 2026 · September 23–27
                </h3>
                <p className="font-sans text-white/70 mb-8 max-w-lg leading-relaxed">
                  Questions about your session or logistics? Write to us at{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-brand hover:underline"
                  >
                    team@umo.design
                  </a>{" "}
                  and the team will get back to you promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/speaker-faqs"
                    className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#D14910] transition-colors"
                  >
                    Speaker FAQs
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-sans font-semibold px-8 py-4 rounded-full hover:border-white/60 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
