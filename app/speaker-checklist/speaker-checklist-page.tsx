"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

interface ChecklistItem {
  item: string;
  note?: string;
}

interface ChecklistGroup {
  title: string;
  items: ChecklistItem[];
}

interface VenueInfo {
  label: string;
  value: string;
  sub: string;
}

// ─── Venue Information ──────────────────────────────────────────────────────

const venueInfo: VenueInfo[] = [
  {
    label: "Leadership Summit",
    value: "September 23–25, 2026",
    sub: "The Leela Bhartiya City, Bengaluru",
  },
  {
    label: "Rising Leaders Forum",
    value: "September 26–27, 2026",
    sub: "Srishti Manipal Institute, Bengaluru",
  },
];

// ─── General Information ──────────────────────────────────────────────────────

const generalInformation: ChecklistGroup[] = [
  {
    title: "Speaker Confirmation",
    items: [
      {
        item: "Reply to the official speaker confirmation email from team@umo.design.",
      },
      {
        item: "If your availability changes before the conference, please inform the Speaker Relations team immediately.",
      },
    ],
  },

  {
    title: "Speaker Profile",
    items: [
      {
        item: "Verify that your name, designation, organization, bio, and headshot are accurate on the UXINDIA website.",
      },
      {
        item: "If any information needs updating, write to team@umo.design.",
      },
    ],
  },

  {
    title: "Presentation Guidelines",
    items: [
      {
        item: "Submit your final presentation by the deadline communicated in your confirmation email.",
      },
      {
        item: "Use a 16:9 widescreen presentation format.",
      },
      {
        item: "Ensure your presentation aligns with your accepted session abstract.",
      },
      {
        item: "Focus on practical insights, experiences, and value for the audience rather than product promotion.",
      },
      {
        item: "The curation team may request revisions if your presentation differs significantly from the accepted proposal.",
      },
    ],
  },

  {
    title: "Presentation Backup",
    items: [
      {
        item: "Carry a USB backup of your presentation.",
      },
      {
        item: "Keep a cloud backup using Google Drive, Dropbox, OneDrive, or similar services.",
      },
      {
        item: "We also recommend carrying a PDF version of your slides.",
      },
      {
        item: "Venue Wi-Fi cannot be guaranteed, so plan accordingly.",
      },
    ],
  },

  {
    title: "Technical Requirements",
    items: [
      {
        item: "If your session requires any special setup, please let us know well in advance.",
        note: "Examples include your own laptop, HDMI adapters, Figma, AI tools, live demos, mobile hotspots, workshop software, printed materials, or additional AV requirements.",
      },
    ],
  },

  {
    title: "Rehearsals",
    items: [
      {
        item: "Some sessions may require a rehearsal or technical dry run.",
      },
      {
        item: "If requested, please coordinate a suitable time with the Speaker Relations team.",
      },
    ],
  },

  {
    title: "Recording & Photography",
    items: [
      {
        item: "Selected sessions may be photographed and professionally recorded.",
      },
      {
        item: "Recordings may be published on UXINDIA channels including YouTube and social media.",
      },
      {
        item: "By participating, you agree to the recording and publication of your session unless discussed otherwise beforehand.",
      },
    ],
  },
];

// ─── Registration & Conference Day ───────────────────────────────────────────

const conferenceDay: ChecklistGroup[] = [
  {
    title: "Registration",
    items: [
      {
        item: "Register using the complimentary Speaker Pass (100% discount code) shared via email.",
      },
      {
        item: "If you have not received your registration details, contact team@umo.design.",
      },
      {
        item: "Proceed to the dedicated Speaker Registration Counter upon arrival.",
      },
      {
        item: "Carry your registration confirmation and a valid government-issued photo ID.",
      },
      {
        item: "Registration opens at 8:00 AM. Please arrive early to avoid delays.",
      },
    ],
  },

  {
    title: "Before Your Session",
    items: [
      {
        item: "Arrive at your session room 20–30 minutes before your scheduled start time.",
      },
      {
        item: "Meet your Track Lead and technical volunteer.",
      },
      {
        item: "Test your presentation, audio, display resolution, and clicker.",
      },
      {
        item: "Confirm whether you'll use the venue laptop or your own device.",
      },
      {
        item: "If using your own laptop, please carry all necessary adapters.",
      },
    ],
  },

  {
    title: "Internet Access",
    items: [
      {
        item: "Venue Wi-Fi cannot be guaranteed.",
      },
      {
        item: "If your session depends on internet access for live demonstrations, Figma, AI tools, or cloud software, please bring your own mobile hotspot with sufficient data.",
      },
    ],
  },

  {
    title: "During Your Session",
    items: [
      {
        item: "Begin and finish within your allocated time.",
      },
      {
        item: "Leave time for audience questions wherever possible.",
      },
      {
        item: "Encourage attendees to complete the session feedback form using the QR code displayed after your presentation.",
      },
    ],
  },

  {
    title: "Conference Experience",
    items: [
      {
        item: "Lunch and refreshments will be provided throughout the conference.",
      },
      {
        item: "Food counters close before sessions resume, so please plan accordingly.",
      },
      {
        item: "Business casual attire is recommended throughout the conference.",
      },
      {
        item: "Please keep your phone on silent during conference sessions.",
      },
    ],
  },
];

// ─── Local Speakers ───────────────────────────────────────────────────────────

const localSpeakers: ChecklistGroup[] = [
  {
    title: "Getting to Bengaluru",
    items: [
      {
        item: "Book your travel to Bengaluru as early as possible.",
      },
      {
        item: "If flying, arrive at Kempegowda International Airport (BLR).",
      },
      {
        item: "The venue can be reached using Uber, Ola, Airport Taxi, or BMTC Vayu Vajra Airport Buses.",
      },
      {
        item: "Bengaluru traffic can be unpredictable, especially during weekday mornings. Please allow extra travel time.",
      },
    ],
  },

  {
    title: "Accommodation",
    items: [
      {
        item: "Accommodation for Keynote and Plenary Speakers will be coordinated by the UXINDIA team.",
      },
      {
        item: "Unless communicated otherwise, all other speakers are responsible for arranging their own accommodation.",
      },
      {
        item: "We recommend booking your hotel early as availability becomes limited closer to the conference.",
      },
    ],
  },

  {
    title: "What to Bring",
    items: [
      {
        item: "Government-issued photo ID.",
      },
      {
        item: "Laptop and charger.",
      },
      {
        item: "HDMI or USB-C adapters (if required).",
      },
      {
        item: "Mobile charger.",
      },
      {
        item: "USB backup of your presentation.",
      },
      {
        item: "Personal mobile hotspot if your presentation requires internet access.",
      },
    ],
  },
];

// ─── International Speakers ───────────────────────────────────────────────────

const internationalSpeakers: ChecklistGroup[] = [
  {
    title: "Before You Travel",
    items: [
      {
        item: "Ensure your passport is valid for at least six months beyond your travel dates.",
      },
      {
        item: "Confirm your passport has sufficient blank pages for immigration requirements.",
      },
    ],
  },

  {
    title: "Visa",
    items: [
      {
        item: "Most international visitors require a valid visa to enter India.",
      },
      {
        item: "Please check the visa requirements applicable to your nationality well before booking travel.",
      },
      {
        item: "Apply for your visa as early as possible to avoid delays.",
      },
      {
        item: "If you require an official invitation letter to support your visa application, please contact team@umo.design.",
      },
      {
        item: "While UXINDIA can provide supporting documents, visa approvals remain solely at the discretion of the Government of India.",
      },
    ],
  },

  {
    title: "Flights",
    items: [
      {
        item: "Book your flights to Kempegowda International Airport (BLR), Bengaluru.",
      },
      {
        item: "We recommend arriving at least one day before your scheduled session to account for immigration, travel delays, and jet lag.",
      },
    ],
  },

  {
    title: "Accommodation",
    items: [
      {
        item: "Accommodation for Keynote and Plenary Speakers will be coordinated directly by the UXINDIA team.",
      },
      {
        item: "All other speakers should arrange accommodation unless informed otherwise.",
      },
    ],
  },

  {
    title: "Travel Insurance",
    items: [
      {
        item: "Travel insurance is strongly recommended.",
      },
      {
        item: "Ideally, your policy should cover medical emergencies, flight delays, lost baggage, and trip cancellations.",
      },
    ],
  },

  {
    title: "Currency",
    items: [
      {
        item: "India's official currency is the Indian Rupee (INR).",
      },
      {
        item: "International credit and debit cards are accepted at most hotels and restaurants.",
      },
      {
        item: "We recommend carrying a small amount of cash for taxis, local transport, and smaller vendors.",
      },
    ],
  },

  {
    title: "Mobile Connectivity",
    items: [
      {
        item: "International roaming can be expensive.",
      },
      {
        item: "Consider purchasing an Indian prepaid SIM card after arrival or an international eSIM before departure.",
      },
      {
        item: "Reliable mobile data is recommended if your presentation depends on internet access.",
      },
    ],
  },

  {
    title: "Power & Charging",
    items: [
      {
        item: "India uses 230V / 50Hz electricity.",
      },
      {
        item: "Power outlets use Type C, D, and M plugs.",
      },
      {
        item: "Please carry a universal travel adapter if your devices use different plug types.",
      },
    ],
  },

  {
    title: "Immigration",
    items: [
      {
        item: "Carry both printed and digital copies of your passport, visa/e-Visa approval, hotel reservation, return flight itinerary, and conference invitation letter (if applicable).",
      },
      {
        item: "Immigration officers may request these documents upon arrival.",
      },
    ],
  },

  {
    title: "Health & Weather",
    items: [
      {
        item: "September in Bengaluru is generally pleasant with occasional rain.",
      },
      {
        item: "Carry a reusable water bottle and stay hydrated throughout the conference.",
      },
      {
        item: "Pack a light rain jacket or umbrella.",
      },
      {
        item: "Comfortable walking shoes are recommended.",
      },
    ],
  },
];

// ─── Speaker Code of Conduct ──────────────────────────────────────────────────

const etiquetteRules = [
  "Arrive on time for your session.",
  "Deliver original, thoughtful, and well-prepared content.",
  "Avoid promotional or sales-oriented presentations.",
  "Credit collaborators and sources where appropriate.",
  "Encourage respectful and inclusive discussions.",
  "Treat volunteers, attendees, organizers, and fellow speakers with courtesy.",
  "Attend sessions beyond your own whenever possible.",
  "Help create a welcoming and inspiring environment for everyone.",
];

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
function SectionHeading({ number, title }: { number: string; title: string }) {
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
      {sub && <span className="font-sans text-sm text-page/50">{sub}</span>}
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
                    Congratulations on being selected as a speaker at UXINDIA
                    2026.
                  </strong>{" "}
                  This guide contains everything you need to prepare for your
                  session—from confirming your participation and submitting your
                  presentation to arriving in Bengaluru and presenting with
                  confidence.
                </p>

                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  Whether you're travelling from within India or
                  internationally, we've compiled the essential information
                  you'll need before, during, and after the conference. If you
                  have any questions not covered here, contact{" "}
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
              <SectionHeading number="01" title="General Information" />

              {generalInformation.map((group) => (
                <div key={group.title} className="mb-12">
                  <h3
                    className="text-2xl text-page mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    {group.title}
                  </h3>

                  <ul className="divide-y divide-page/8">
                    {group.items.map((entry, index) => (
                      <CheckItem key={index} note={entry.note}>
                        {entry.item}
                      </CheckItem>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedSection>

            {/* ── 02 Registration & Conference Day ───────────────────────────── */}

            <AnimatedSection className="mb-16">
              <SectionHeading
                number="02"
                title="Registration & Conference Day"
              />

              {conferenceDay.map((group) => (
                <div key={group.title} className="mb-12">
                  <h3
                    className="text-2xl text-page mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    {group.title}
                  </h3>

                  <ul className="divide-y divide-page/8">
                    {group.items.map((entry, index) => (
                      <CheckItem key={index} note={entry.note}>
                        {entry.item}
                      </CheckItem>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedSection>

            {/* ── 03 Local Speakers ───────────────────────────────────────────── */}

            <AnimatedSection className="mb-16">
              <SectionHeading
                number="03"
                title="For Speakers Travelling from Within India"
              />

              {localSpeakers.map((group) => (
                <div key={group.title} className="mb-12">
                  <h3
                    className="text-2xl text-page mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    {group.title}
                  </h3>

                  <ul className="divide-y divide-page/8">
                    {group.items.map((entry, index) => (
                      <CheckItem key={index} note={entry.note}>
                        {entry.item}
                      </CheckItem>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedSection>

            {/* ── 04 International Speakers ───────────────────────────── */}

            <AnimatedSection className="mb-16">
              <SectionHeading number="04" title="For International Speakers" />

              {internationalSpeakers.map((group) => (
                <div key={group.title} className="mb-12">
                  <h3
                    className="text-2xl text-page mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    {group.title}
                  </h3>

                  <ul className="divide-y divide-page/8">
                    {group.items.map((entry, index) => (
                      <CheckItem key={index} note={entry.note}>
                        {entry.item}
                      </CheckItem>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimatedSection>

            {/* ── 05 Speaker Etiquette ──────────────────────────────────────── */}
            <AnimatedSection className="mb-16">
              <SectionHeading number="05" title="Speaker Code of Conduct" />
              <p className="font-sans text-base text-page/60 leading-relaxed mb-6">
                UXINDIA is a curated community built on openness, respect, and
                meaningful conversations. As a speaker, we ask that you help
                create an inspiring, inclusive, and welcoming experience for
                every participant.
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
                    UXINDIA is proudly volunteer-driven.
                  </strong>{" "}
                  Every coordinator, track lead, session moderator,
                  photographer, and logistics volunteer contributes their time
                  and energy to create an exceptional experience for our
                  community.
                </p>

                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  We appreciate your patience, kindness, and cooperation
                  throughout the conference. A little understanding and
                  encouragement from our speakers goes a long way in helping our
                  volunteers create a memorable experience for everyone.
                </p>
              </Callout>
            </AnimatedSection>

            {/* ── 07 Contact & Support ─────────────────────────────────────── */}

            <AnimatedSection className="mb-16">
              <SectionHeading number="06" title="Contact & Support" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white border border-page/8 rounded-2xl p-6">
                  <p className="font-sans text-xs font-semibold text-brand uppercase tracking-[0.18em] mb-3">
                    Speaker Relations
                  </p>

                  <a
                    href="mailto:team@umo.design"
                    className="font-sans text-lg font-semibold text-page hover:text-brand transition-colors"
                  >
                    team@umo.design
                  </a>

                  <p className="font-sans text-sm text-page/60 mt-4 leading-relaxed">
                    Contact us for:
                  </p>

                  <ul className="font-sans text-sm text-page/70 mt-3 space-y-2">
                    <li>• Presentation submissions</li>
                    <li>• Speaker profile updates</li>
                    <li>• Workshop requirements</li>
                    <li>• Invitation letters</li>
                    <li>• Travel questions</li>
                    <li>• General logistics</li>
                  </ul>
                </div>

                <div className="bg-white border border-page/8 rounded-2xl p-6">
                  <p className="font-sans text-xs font-semibold text-brand uppercase tracking-[0.18em] mb-3">
                    On-Site Assistance
                  </p>

                  <a
                    href="tel:+918096204373"
                    className="font-sans text-lg font-semibold text-page hover:text-brand transition-colors"
                  >
                    Jabeen
                    <br />
                    +91 80962 04373
                  </a>

                  <p className="font-sans text-sm text-page/60 mt-4 leading-relaxed">
                    Available on WhatsApp throughout the conference for speaker
                    support, registration assistance, session coordination, and
                    venue logistics.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* ── 07 FAQs ─────────────────────────────────────── */}

            <AnimatedSection className="mb-16">
              <SectionHeading number="07" title="Frequently Asked Questions" />

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xl text-page mb-2"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Will UXINDIA reimburse my travel expenses?
                  </h3>

                  <p className="font-sans text-page/70 leading-relaxed">
                    Travel and accommodation are only covered where explicitly
                    communicated in your speaker invitation. If you're unsure,
                    please contact the Speaker Relations team.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl text-page mb-2"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Can I update my presentation after submission?
                  </h3>

                  <p className="font-sans text-page/70 leading-relaxed">
                    Minor updates are perfectly acceptable. If your presentation
                    changes significantly from the approved abstract, please
                    inform the curation team beforehand.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl text-page mb-2"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Can I use my own laptop?
                  </h3>

                  <p className="font-sans text-page/70 leading-relaxed">
                    Yes. Please arrive 20–30 minutes before your session to test
                    your laptop, presentation, and any required adapters with
                    the Track Lead.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl text-page mb-2"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Is Wi-Fi available?
                  </h3>

                  <p className="font-sans text-page/70 leading-relaxed">
                    Limited Wi-Fi may be available in some areas, but it should
                    not be relied upon for presentations or workshops. If
                    internet access is essential, please arrange your own mobile
                    hotspot.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl text-page mb-2"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    What should I do if my flight is delayed?
                  </h3>

                  <p className="font-sans text-page/70 leading-relaxed">
                    Please inform the Speaker Relations team as soon as possible
                    so we can coordinate any necessary schedule adjustments.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl text-page mb-2"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    How do I request an invitation letter?
                  </h3>

                  <p className="font-sans text-page/70 leading-relaxed">
                    Invitation letters are available for confirmed speakers who
                    require one to support their visa application. Please email
                    team@umo.design as early as possible.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Final CTA ─────────────────────────────────────────────────── */}

            <AnimatedSection>
              <div className="bg-page text-white p-8 md:p-10 rounded-3xl">
                <p className="font-sans text-white/70 mb-8 max-w-xl leading-relaxed">
                  We're looking forward to welcoming you to UXINDIA Design
                  Leadership Week 2026. If you have any questions before your
                  session, our Speaker Relations team is here to help every step
                  of the way.
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
