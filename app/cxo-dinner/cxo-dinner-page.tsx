"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CalendarPlus,
  Check,
} from "lucide-react";

import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import { AnimatedSection } from "@/components/about/animated-section/AnimatedSection";

import { FormInput } from "@/components/forms/form-input/FormInput";
import { FormTextarea } from "@/components/forms/form-textarea/FormTextArea";

// Event constants
const EVENT_START = new Date("2026-09-23T19:00:00+05:30");
const EVENT_END = new Date("2026-09-23T22:00:00+05:30");
const VENUE_URL =
  "https://www.theleela.com/the-leela-bhartiya-city-bengaluru/restaurants/falak?utm";

const toGCalDate = (d: Date) =>
  d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

const GCAL_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  "CXO Networking Dinner — UXINDIA26",
)}&dates=${toGCalDate(EVENT_START)}/${toGCalDate(
  EVENT_END,
)}&details=${encodeURIComponent(
  "An invite-only evening for design & technology leaders, hosted by Rohan Sridhar & Bapu. Curated by Happening.",
)}&location=${encodeURIComponent(
  "Falak, The Leela Bhartiya City, Bengaluru",
)}`;

// Placeholder gallery images from past UXINDIA / Happening gatherings.
// Swap these for real CXO dinner / past meet photography when available.
const GALLERY_IMAGES = [
  "/images/carousel/home/Carousel-12.webp",
  "/images/carousel/home/Carousel-08.webp",
  "/images/carousel/home/Carousel-01.webp",
  "/images/carousel/home/Carousel-09.webp",
  "/images/carousel/home/Carousel-05.webp",
];

const HOSTS = [
  {
    name: "Kaladhar Bapu",
    role: "Founder, UMO Design Foundation & Curator, UXINDIA",
    image: "/images/speakers/leadership-summit/kaladhar-bapu.webp",
    linkedin: "https://www.linkedin.com/in/kbapu/",
  },
  {
    name: "Rohan Sridhar",
    role: "CXO & Co-founder,\nHappening Design",
    image: "/images/speakers/leadership-summit/rohan-sridhar.webp",
    linkedin: "https://www.linkedin.com/in/rohansridhar137/",
  },
];

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 30000);

    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}

export default function CxoDinnerPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const countdown = useCountdown(EVENT_START);

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clearError = (field: string) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const payload = {
      firstName,
      lastName,
      workEmail,
      phone,
      company,
      designation,
      message,
    };

    try {
      const res = await fetch("/api/cxo-dinner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const formattedErrors: Record<string, string> = {};

        if (Array.isArray(data.errors)) {
          data.errors.forEach((err: any) => {
            if (err.path?.[0]) {
              formattedErrors[err.path.join(".")] = err.message;
            }
          });
        }

        setErrors(formattedErrors);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      document
        .getElementById("rsvp-form")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("CXO Dinner RSVP failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Nav forceSolid />

      <main className="bg-page">
        {/* ============ HERO ============ */}
        <section
          ref={heroRef}
          className="relative min-h-[100vh] overflow-hidden bg-page grain-overlay"
        >
          <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
            <Image
              src="/images/venue/the-leela-bhartiya-city.webp"
              alt="Falak, The Leela Bhartiya City, Bengaluru"
              fill
              className="object-cover opacity-45"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/85 to-page/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-transparent to-transparent" />
          </motion.div>

          <div className="relative z-10 flex flex-col justify-center min-h-[100vh] pt-28 pb-16 px-6">
            <div className="max-w-4xl mx-auto w-full text-center">
              {/* Curated by Happening */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                <span className="font-sans text-[11px] text-white/50 uppercase tracking-[0.25em]">
                  Curated by
                </span>
                <Link
                  href="https://www.happening.design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/logos/sponsors/happening.svg"
                    alt="Happening"
                    width={92}
                    height={14}
                    className="h-[13px] w-auto"
                  />
                </Link>
              </motion.div>

              {/* Invite only line */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-vip-gold-light opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-vip-gold-light" />
                </span>
                <span className="font-sans text-[11px] font-medium text-vip-gold-light uppercase tracking-[0.2em]">
                  Invite Only &middot; 15&ndash;20 Leaders
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl text-white mb-5 leading-[0.95]"
                style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
              >
                CXO Networking Dinner
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
              >
                A private table for the leaders shaping design &amp;
                technology in the age of AI.
              </motion.p>

              {/* Meta chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mb-10 pb-8 border-b border-white/10 max-w-xl mx-auto"
              >
                <div className="inline-flex items-center gap-2">
                  <Calendar size={15} className="text-brand" />
                  <span className="font-sans text-sm text-white/80">
                    23 September 2026
                  </span>
                </div>
                <span className="hidden sm:inline text-white/15">|</span>
                <div className="inline-flex items-center gap-2">
                  <Clock size={15} className="text-brand" />
                  <span className="font-sans text-sm text-white/80">
                    7:00 &ndash; 10:00 PM IST
                  </span>
                </div>
                <span className="hidden sm:inline text-white/15">|</span>
                <Link
                  href={VENUE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                >
                  <MapPin size={15} className="text-brand" />
                  <span className="font-sans text-sm">
                    Falak, The Leela Bhartiya City
                  </span>
                  <ArrowUpRight size={12} className="text-white/40" />
                </Link>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center gap-6 md:gap-10 mb-10"
              >
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                  { label: "Minutes", value: countdown.minutes },
                ].map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-6 md:gap-10">
                    <div className="text-center">
                      <div
                        className="text-3xl md:text-4xl text-vip-gold-light"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                        }}
                      >
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">
                        {unit.label}
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="w-px h-8 bg-white/10 hidden sm:block" />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="#rsvp-form"
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#D14910] transition-colors w-full sm:w-auto"
                >
                  Reserve Your Seat
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={GCAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-sans font-medium px-8 py-4 rounded-full hover:border-white/40 hover:text-white transition-colors w-full sm:w-auto"
                >
                  <CalendarPlus size={16} />
                  Add to Calendar
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ HOSTS ============ */}
        <section className="py-20 md:py-28 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-14">
              <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3">
                Hosted By
              </p>
              <h2
                className="text-3xl md:text-5xl text-white"
                style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
              >
                Your Hosts for the Evening
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {HOSTS.map((host, i) => (
                <AnimatedSection key={host.name} delay={i * 120} className="h-full">
                  <Link
                    href={host.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-vip-gold/40 transition-colors"
                  >
                    <div
                      className="relative w-24 h-24 rounded-full overflow-hidden mb-5"
                      style={{
                        boxShadow: "0 0 0 2px rgba(255,229,138,0.4)",
                      }}
                    >
                      <Image
                        src={host.image}
                        alt={host.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-sans text-lg font-semibold text-white mb-1 flex items-center gap-1.5">
                      {host.name}
                      <ArrowUpRight
                        size={14}
                        className="text-white/30 group-hover:text-brand transition-colors"
                      />
                    </h3>
                    <p className="font-sans text-sm text-white/50 whitespace-pre-line">
                      {host.role}
                    </p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY ATTEND + GALLERY ============ */}
        <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto">
            {/* Copy */}
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3">
                An Evening, Not an Agenda
              </p>
              <h2
                className="text-3xl md:text-5xl text-white mb-6 leading-[1.05]"
                style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
              >
                Real conversation. No stage, no slides, no pitches.
              </h2>
              <p className="font-sans text-base text-white/60 leading-relaxed mb-10">
                A small, curated table of CXOs and design &amp; technology
                leaders, gathered over dinner for candid conversation on
                where the industry is headed &mdash; away from the noise of
                the main conference floor.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                  {
                    title: "Curated Guest List",
                    desc: "15–20 senior leaders, hand-picked for the room.",
                  },
                  {
                    title: "Off-the-Record",
                    desc: "Candid, Chatham House style conversation over dinner.",
                  },
                  {
                    title: "Zero Pitch Culture",
                    desc: "No decks, no sponsors' pitches — just people and ideas.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(255,229,138,0.15)" }}
                    >
                      <Check size={13} className="text-vip-gold-light" />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-white text-sm mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-sans text-sm text-white/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Photo gallery — landscape bento */}
            <AnimatedSection delay={150}>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={GALLERY_IMAGES[0]}
                    alt="Moments from a past UXINDIA gathering"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={GALLERY_IMAGES[1]}
                    alt="Moments from a past UXINDIA gathering, 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {GALLERY_IMAGES.slice(2).map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
                  >
                    <Image
                      src={src}
                      alt={`Moments from a past UXINDIA gathering, ${i + 3}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-white/35 mt-4 tracking-wide text-center">
                From past UXINDIA &amp; Happening gatherings
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ============ VENUE ============ */}
        <section className="pt-20 md:pt-28 pb-28 md:pb-40 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3">
                The Setting
              </p>
              <h2
                className="text-3xl md:text-5xl text-white mb-6 leading-[1.05]"
                style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
              >
                A Rooftop Table Above the City
              </h2>
              <p className="font-sans text-base text-white/60 leading-relaxed">
                Falak sits high above Bengaluru at The Leela Bhartiya City
                &mdash; private enough for a candid table, striking enough
                to remember.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src="/images/venue/the-leela-bhartiya-city.webp"
                    alt="Falak, The Leela Bhartiya City, Bengaluru"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 bg-white/[0.03] flex flex-col justify-center">
                  <h3
                    className="text-2xl md:text-3xl text-white mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Falak, The Leela Bhartiya City
                  </h3>
                  <p className="font-sans text-sm text-white/55 leading-relaxed mb-6">
                    An intimate rooftop setting in Bengaluru, chosen for a
                    calm, unhurried evening away from the conference buzz.
                  </p>
                  <Link
                    href={VENUE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:underline w-fit"
                  >
                    View Venue Details
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============ RSVP FORM ============ */}
        <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-white/[0.015]" id="rsvp-form">
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <AnimatedSection>
                <div className="text-center mb-10">
                  <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-3">
                    RSVP
                  </p>
                  <h2
                    className="text-3xl md:text-5xl text-white mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Reserve Your Seat at the Table
                  </h2>
                  <p className="font-sans text-sm text-white/50 max-w-md mx-auto">
                    Seats are limited to 15&ndash;20 leaders. Share your
                    details below and our team will follow up to confirm.
                  </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <FormInput
                        label="First Name"
                        required
                        value={firstName}
                        onChange={setFirstName}
                        error={errors.firstName}
                        clearError={clearError}
                        fieldName="firstName"
                      />
                      <FormInput
                        label="Last Name"
                        required
                        value={lastName}
                        onChange={setLastName}
                        error={errors.lastName}
                        clearError={clearError}
                        fieldName="lastName"
                      />
                    </div>

                    <FormInput
                      label="Work Email"
                      required
                      type="email"
                      value={workEmail}
                      onChange={setWorkEmail}
                      error={errors.workEmail}
                      clearError={clearError}
                      fieldName="workEmail"
                    />

                    <FormInput
                      label="Phone"
                      required
                      type="tel"
                      placeholder="+91"
                      value={phone}
                      onChange={setPhone}
                      error={errors.phone}
                      clearError={clearError}
                      fieldName="phone"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <FormInput
                        label="Company"
                        value={company}
                        onChange={setCompany}
                        error={errors.company}
                        clearError={clearError}
                        fieldName="company"
                      />
                      <FormInput
                        label="Designation"
                        value={designation}
                        onChange={setDesignation}
                        error={errors.designation}
                        clearError={clearError}
                        fieldName="designation"
                      />
                    </div>

                    <FormTextarea
                      label="Message"
                      hint="Anything you'd like the hosts to know."
                      value={message}
                      onChange={setMessage}
                      rows={3}
                      error={errors.message}
                      clearError={clearError}
                      fieldName="message"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#D14910] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? "Submitting..." : "Confirm My Attendance"}
                      {!isSubmitting && <ArrowRight size={16} />}
                    </button>

                    <p className="font-sans text-xs text-page/40 text-center mt-4">
                      By submitting, you agree to receive event-related
                      communication from UXINDIA and Happening. See our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-brand hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection>
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, #8B6914, #FFE58A)" }}
                  >
                    <Check size={36} className="text-white" strokeWidth={3} />
                  </div>
                  <h2
                    className="text-3xl md:text-4xl text-page mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    You&apos;re on the list.
                  </h2>
                  <p className="font-sans text-lg text-page/70 mb-8 max-w-md mx-auto">
                    Thank you, {firstName || "there"}. We&apos;ve received
                    your RSVP for the CXO Networking Dinner and will follow
                    up shortly with confirmation.
                  </p>

                  <div className="bg-cream rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <p className="font-sans text-sm text-page/60 mb-1">
                      We&apos;ll be in touch at
                    </p>
                    <p className="font-sans font-semibold text-page mb-4">
                      {workEmail || "your email address"}
                    </p>
                    <p className="font-sans text-sm text-page/60">
                      Questions? Reach out at{" "}
                      <a
                        href="mailto:team@umo.design"
                        className="text-brand font-semibold hover:underline"
                      >
                        team@umo.design
                      </a>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href={GCAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border-2 border-page text-page font-sans font-semibold px-8 py-3 rounded-full hover:bg-page hover:text-white transition-colors"
                    >
                      <CalendarPlus size={16} />
                      Add to Calendar
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-[#D14910] transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
