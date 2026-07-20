"use client";

import { useRef, useState, useEffect } from "react";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// UI Components
import { EventCard } from "@/components/ui/event-card/EventCard";

// Page Components
import { AnimatedSection } from "@/components/about/animated-section/AnimatedSection";
import ImageStack from "@/components/about/image-stack/ImageStack";

// Data
import { partners, partnerTiers, getPartnersByTier } from "@/data/partners";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [showStats, setShowStats] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "partners">("about");

  useEffect(() => {
    const setTabFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "partners") {
        setActiveTab("partners");
      } else {
        setActiveTab("about");
      }
    };
    setTabFromHash();
    window.addEventListener("hashchange", setTabFromHash);
    return () => window.removeEventListener("hashchange", setTabFromHash);
  }, []);

  function handleTabChange(tab: "about" | "partners") {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    requestAnimationFrame(() => {
      if (contentRef.current) {
        const y =
          contentRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }

  return (
    <>
      {/* global nav */}
      <Nav forceSolid />

      <main className="bg-cream">
        {/* 1) Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[100vh] overflow-hidden bg-page pt-[105px]"
        >
          <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
            <Image
              src="/images/bg/about/hero.jpg"
              alt="UXINDIA conference stage view with speakers and audience"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>

          <div className="relative z-10 min-h-[85vh] flex flex-col justify-center pb-20 md:pb-28 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-xs text-[#FF6D35] uppercase tracking-[0.25em] mb-4"
              >
                About UXINDIA
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-white leading-[1.05] mb-6"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                }}
              >
                UXINDIA: Design Leadership
                <br />
                Week 2026
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-3xl"
              >
                India&apos;s premier design leadership gathering returns to
                Bengaluru this September with a wider, deeper, and more
                intentional format. UXINDIA 2026 brings together design leaders,
                practitioners, founders, students, and ecosystem partners for
                five days of learning, dialogue, and connection.
              </motion.p>

              {/* Hero CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link
                  href="https://partner.ux-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-semibold px-7 py-3 rounded-full text-white transition-opacity hover:opacity-85 text-center"
                  style={{ backgroundColor: "#E85520" }}
                >
                  Become a Partner
                </Link>
                <span className="group relative font-sans text-sm font-semibold px-7 py-3 rounded-full text-white/50 border border-white/20 cursor-not-allowed overflow-hidden text-center">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                    Request Press Access
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Coming Soon
                  </span>
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scroll anchor for tab bar */}
        <div ref={contentRef} />

        {/* Sticky Tab Bar — same pattern as Leadership Summit */}
        <div className="sticky top-[50px] md:top-[60px] z-40 w-full flex border-b border-white/15 bg-[#0D0D0D] shadow-lg">
          <button
            onClick={() => handleTabChange("about")}
            className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "about"
                ? "border-[#E85520] text-white"
                : "border-transparent text-white/40 hover:text-white/70"
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleTabChange("partners")}
            className={`flex-1 py-4 px-6 font-sans text-base md:text-lg font-medium transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "partners"
                ? "border-[#E85520] text-white"
                : "border-transparent text-white/40 hover:text-white/70"
            }`}
          >
            Partners
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* ─── ABOUT TAB ─── */}
          <div
            className={
              activeTab === "about"
                ? "relative opacity-100 transition-opacity duration-300"
                : "absolute inset-0 opacity-0 pointer-events-none overflow-hidden"
            }
            aria-hidden={activeTab !== "about"}
          >
            {/* 2) About UXINDIA - More than a conference */}
            <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <AnimatedSection>
                    <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-4">
                      About UXINDIA
                    </p>
                    <h2
                      className="leading-[1.08] mb-6"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                        color: "#0D0D0D",
                      }}
                    >
                      More than a conference
                    </h2>
                    <p className="font-sans text-base text-page/70 leading-relaxed mb-5">
                      UXINDIA is a community-led platform built to advance
                      design, strengthen leadership, and create meaningful
                      conversations across the ecosystem. For over two decades,
                      it has brought together global experts, industry leaders,
                      and emerging voices to shape the future of design,
                      entrepreneurship, and human-centered innovation.
                    </p>
                    <p className="font-sans text-base text-page/70 leading-relaxed mb-8">
                      UXINDIA 2026 continues that legacy with a new week-long
                      format designed to make the experience more inclusive, more
                      relevant, and more impactful.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-page border border-page/30 px-6 py-2.5 rounded-full hover:bg-page/5 transition-colors"
                    >
                      Explore the Week
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 7h8M8 4l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </AnimatedSection>
                  <AnimatedSection delay={150}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                      <Image
                        src="/images/event/uxindia-team.webp"
                        alt="UXINDIA community gathering"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>

            {/* 3) Why it exists */}
            <section className="py-24 md:py-32 bg-page relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <AnimatedSection delay={150} className="order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                      <Image
                        src="/images/event/uxindia-audience.webp"
                        alt="UXINDIA conference audience engaged in a session"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection className="order-1 lg:order-2">
                    <p className="font-sans text-xs text-[#FF6D35] uppercase tracking-[0.25em] mb-4">
                      Why it exists
                    </p>
                    <h2
                      className="leading-[1.08] mb-6"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                        color: "#FFFFFF",
                      }}
                    >
                      A platform for what design can become
                    </h2>
                    <p className="font-sans text-base text-white/70 leading-relaxed mb-5">
                      Design today is not only about usability. It is about
                      decisions, strategy, leadership, and the ability to
                      influence products, teams, businesses, and culture. UXINDIA
                      2026 exists for people who want to move the discipline
                      forward with clarity, courage, and community.
                    </p>
                    <p className="font-sans text-base text-white/70 leading-relaxed">
                      This year&apos;s theme, &quot;What could possibly go
                      right?&quot;, invites the community to look beyond fear and
                      toward possibility, especially in a world being reshaped by
                      AI and accelerating change.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </section>

            {/* 4) New format - Design Leadership Week */}
            <section
              id="format"
              className="py-24 md:py-32 bg-brand relative overflow-hidden"
            >
              <div className="max-w-5xl mx-auto px-6 text-center">
                <AnimatedSection>
                  <p className="font-sans text-xs text-white/70 uppercase tracking-[0.25em] mb-4">
                    New Format
                  </p>
                  <h2
                    className="leading-[1.08] mb-8"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "clamp(2.4rem, 5vw, 4rem)",
                      color: "#FFFFFF",
                    }}
                  >
                    UXINDIA Design Leadership Week
                  </h2>
                  <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-5">
                    The 2026 edition unfolds as a full Design Leadership Week in
                    Bengaluru, with programming that serves both senior leaders
                    and rising talent. The format creates space for strategic
                    conversations, practical learning, mentorship, and the kinds
                    of connections that last beyond the event.
                  </p>
                  <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-12">
                    This new structure reflects a simple belief: leadership
                    conversations deserve more time, more depth, and more room
                    for the community to participate.
                  </p>
                </AnimatedSection>

                {/* Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                  <EventCard
                    title={"Leadership Summit"}
                    dates="23–25 Sept"
                    location="The Leela Bhartiya City, Bengaluru"
                    bgColor="#1B7A6E"
                    textColor="#FFFFFF"
                    hoverBgColor="#8FCBC3"
                    points={[
                      "Strategy for AI-first products and services.",
                      "Systems thinking across products, orgs, and ecosystems.",
                      "AI + design leadership: governance, ethics, and enablement.",
                      "Enterprise case studies from India and global teams.",
                    ]}
                    audience="Design leaders, CXOs, Heads of Design & Senior UX"
                    avatars={[
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
                    ]}
                    visible={true}
                    delay="100ms"
                  />
                  <EventCard
                    title={"Rising Leaders Forum"}
                    dates="26–27 Sept"
                    location="Srishti Institute of Art, Design and Technology, Bengaluru"
                    bgColor="#F5BF42"
                    textColor="#0D0D0D"
                    hoverBgColor="#F9D98E"
                    points={[
                      "Foundations for scale: from craft to systems.",
                      "Career acceleration and leadership mindset.",
                      "Portfolio and narrative for AI-aware organizations.",
                      "Mentorship clinics and live portfolio reviews.",
                    ]}
                    audience="Practitioners, students, early-career pros"
                    avatars={[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                    ]}
                    visible={true}
                    delay="200ms"
                  />
                </div>
              </div>
            </section>

            {/* 5) Founder vision */}
            <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                  <AnimatedSection className="lg:col-span-2">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden max-w-sm mx-auto lg:mx-0">
                      <Image
                        src="/images/people/bapu-kaladhar.webp"
                        alt="Bapu Kaladhar, Founder of UXINDIA"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={150} className="lg:col-span-3">
                    <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-4">
                      Founder Vision
                    </p>
                    <h2
                      className="leading-[1.08] mb-6"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                        color: "#0D0D0D",
                      }}
                    >
                      Led by Bapu Kaladhar
                    </h2>
                    <p className="font-sans text-base text-page/70 leading-relaxed mb-5">
                      UXINDIA was founded by Kaladhar Bapu, whose long-standing
                      vision has been rooted in &quot;Good Design for Better
                      Living&quot;. His work has consistently linked design with
                      social impact, human-centered practice, and the development
                      of stronger design leadership in India.
                    </p>
                    <p className="font-sans text-base text-page/70 leading-relaxed mb-8">
                      That vision continues to shape UXINDIA 2026: a community
                      where design is treated not as decoration, but as a
                      meaningful force for better products, better organizations,
                      and better lives.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="https://linkedin.com/in/kbapu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-85"
                        style={{ backgroundColor: "#0077B5" }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </Link>
                      <Link
                        href="https://twitter.com/kbapu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-85"
                        style={{ backgroundColor: "#0D0D0D" }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Twitter
                      </Link>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>

            {/* 6) Community promise */}
            <section className="py-24 md:py-32 bg-[#2D3580] relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <AnimatedSection>
                  <p className="font-sans text-xs text-white/60 uppercase tracking-[0.25em] mb-4">
                    Community Promise
                  </p>
                  <h2
                    className="leading-[1.08] mb-8"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "clamp(2.4rem, 5vw, 4rem)",
                      color: "#FFFFFF",
                    }}
                  >
                    Built by the community,
                    <br />
                    for the community
                  </h2>
                  <p className="font-sans text-base md:text-lg text-white/75 leading-relaxed max-w-3xl mx-auto mb-5">
                    UXINDIA has always grown through participation, generosity,
                    and shared belief in the value of design. The event brings
                    together practitioners, educators, founders, researchers,
                    students, and leaders who want to learn from one another and
                    contribute to something larger than themselves.
                  </p>
                  <p className="font-sans text-base md:text-lg text-white/75 leading-relaxed max-w-3xl mx-auto mb-10">
                    In 2026, that spirit remains at the center of everything we
                    do.
                  </p>
                  <Link
                    href="#get-involved"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white border border-white/30 px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Be Part of UXINDIA
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7h8M8 4l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </AnimatedSection>
              </div>
            </section>

            {/* 7) Who it is for */}
            <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-6">
                <AnimatedSection>
                  <div className="text-center mb-16">
                    <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-4">
                      Who It&apos;s For
                    </p>
                    <h2
                      className="leading-[1.08] mb-6"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(2.4rem, 5vw, 4rem)",
                        color: "#0D0D0D",
                      }}
                    >
                      For people shaping the future
                    </h2>
                    <p className="font-sans text-base text-page/70 leading-relaxed max-w-3xl mx-auto">
                      UXINDIA 2026 is for design and product leaders, UX and
                      research practitioners, founders, entrepreneurs, educators,
                      students, and innovation teams. It is also for partners and
                      media who want to engage with one of India&apos;s most
                      trusted design communities.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Audience cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <AnimatedSection delay={100}>
                    <div
                      className="rounded-2xl p-8 h-full"
                      style={{ backgroundColor: "#1B7A6E" }}
                    >
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                          color: "#FFFFFF",
                        }}
                      >
                        Leaders
                      </h3>
                      <p className="font-sans text-sm text-white/85 leading-relaxed">
                        Design heads, CXOs, VPs of Product and Design, and senior
                        practitioners driving transformation at scale.
                      </p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={200}>
                    <div
                      className="rounded-2xl p-8 h-full"
                      style={{ backgroundColor: "#E85520" }}
                    >
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                          color: "#FFFFFF",
                        }}
                      >
                        Practitioners
                      </h3>
                      <p className="font-sans text-sm text-white/85 leading-relaxed">
                        UX designers, researchers, product builders, and founders
                        passionate about creating impactful experiences.
                      </p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={300}>
                    <div
                      className="rounded-2xl p-8 h-full"
                      style={{ backgroundColor: "#F5BF42" }}
                    >
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                          color: "#0D0D0D",
                        }}
                      >
                        Rising Talent
                      </h3>
                      <p className="font-sans text-sm text-page/80 leading-relaxed">
                        Students, early-career professionals, and emerging voices
                        ready to step into leadership with confidence.
                      </p>
                    </div>
                  </AnimatedSection>
                </div>

                <AnimatedSection delay={400}>
                  <div className="text-center mt-12">
                    <p className="font-sans text-base text-page/70 leading-relaxed max-w-2xl mx-auto mb-8">
                      Whether you are leading an organization, building a
                      product, or starting your career, UXINDIA offers a place
                      to connect, contribute, and grow.
                    </p>
                    <button
                      onClick={() => setShowStats(!showStats)}
                      className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-page border border-page/30 px-6 py-2.5 rounded-full hover:bg-page/5 transition-colors"
                    >
                      {showStats ? "Hide Stats" : "See Who Attends"}
                      <motion.svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        animate={{ rotate: showStats ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          d="M3 5l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </button>
                  </div>
                </AnimatedSection>

                {/* Audience Intelligence Stats - Collapsible */}
                <AnimatePresence>
                  {showStats && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-16 pb-8">
                        <motion.h3
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="text-center mb-12"
                          style={{
                            fontFamily: "'UXILeadershipCondensed'",
                            fontWeight: 500,
                            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                            color: "#0D0D0D",
                          }}
                        >
                          Audience Intelligence
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
                          {/* By Seniority */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                          >
                            <p className="font-sans text-xs font-semibold text-page/50 uppercase tracking-[0.15em] mb-6">
                              By Seniority
                            </p>
                            <div className="space-y-5">
                              {[
                                { label: "C-Suite / VP", value: 18 },
                                { label: "Senior / Lead", value: 28 },
                                { label: "Mid-Level", value: 35 },
                                { label: "Early Career", value: 19 },
                              ].map((item, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center justify-between"
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{
                                    delay: 0.2 + i * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <div>
                                    <p className="font-sans text-sm text-page mb-1">
                                      {item.label}
                                    </p>
                                    <motion.div
                                      className="h-1 bg-page rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: `${item.value * 1.5}px`,
                                      }}
                                      transition={{
                                        delay: 0.3 + i * 0.05,
                                        duration: 0.4,
                                        ease: "easeOut",
                                      }}
                                    />
                                  </div>
                                  <p className="font-sans text-sm font-medium text-page/70">
                                    {item.value}%
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* By Industry */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <p className="font-sans text-xs font-semibold text-page/50 uppercase tracking-[0.15em] mb-6">
                              By Industry
                            </p>
                            <div className="space-y-5">
                              {[
                                { label: "Technology", value: 42 },
                                { label: "BFSI & Fintech", value: 18 },
                                { label: "Consulting", value: 14 },
                                { label: "Healthcare / Other", value: 26 },
                              ].map((item, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center justify-between"
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{
                                    delay: 0.25 + i * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <div>
                                    <p className="font-sans text-sm text-page mb-1">
                                      {item.label}
                                    </p>
                                    <motion.div
                                      className="h-1 bg-page rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: `${item.value * 1.5}px`,
                                      }}
                                      transition={{
                                        delay: 0.35 + i * 0.05,
                                        duration: 0.4,
                                        ease: "easeOut",
                                      }}
                                    />
                                  </div>
                                  <p className="font-sans text-sm font-medium text-page/70">
                                    {item.value}%
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Decision Authority */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.3 }}
                          >
                            <p className="font-sans text-xs font-semibold text-page/50 uppercase tracking-[0.15em] mb-6">
                              Decision Authority
                            </p>
                            <div className="space-y-5">
                              {[
                                { label: "Influence", value: 91 },
                                { label: "Hiring Authority", value: 68 },
                                { label: "Tool Procurement", value: 52 },
                                { label: "Budget Authority", value: 46 },
                              ].map((item, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center justify-between"
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{
                                    delay: 0.3 + i * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <div>
                                    <p className="font-sans text-sm text-page mb-1">
                                      {item.label}
                                    </p>
                                    <motion.div
                                      className="h-1 bg-page rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: `${item.value * 0.7}px`,
                                      }}
                                      transition={{
                                        delay: 0.4 + i * 0.05,
                                        duration: 0.4,
                                        ease: "easeOut",
                                      }}
                                    />
                                  </div>
                                  <p className="font-sans text-sm font-medium text-page/70">
                                    {item.value}%
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* 8) Get Involved */}
            <section id="get-involved" className="py-24 md:py-32 bg-page">
              <div className="max-w-6xl mx-auto px-6">
                <AnimatedSection>
                  <div className="text-center mb-16">
                    <h2
                      className="leading-[1.08] mb-4"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                        color: "#FFFFFF",
                      }}
                    >
                      Get Involved
                    </h2>
                    <p className="font-sans text-base text-white/50 max-w-2xl mx-auto">
                      Multiple ways to participate and contribute to UXINDIA
                      2026.
                    </p>
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Partner Card */}
                  <AnimatedSection delay={100}>
                    <div
                      className="rounded-3xl p-8 h-full flex flex-col"
                      style={{ backgroundColor: "#E85520" }}
                    >
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                          fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                          color: "#FFFFFF",
                        }}
                      >
                        Partner with purpose
                      </h3>
                      <p className="font-sans text-sm text-white/85 leading-relaxed flex-1 mb-5">
                        Partnering with UXINDIA 2026 means aligning with a
                        platform that carries credibility, community trust, and
                        long-term relevance. Partners gain visibility among design
                        decision-makers, emerging talent, and innovation leaders
                        while supporting an ecosystem that values substance and
                        impact.
                      </p>
                      <p className="font-sans text-sm text-white/85 leading-relaxed mb-6">
                        If your brand wants to be part of a meaningful
                        conversation about the future of design, UXINDIA offers
                        the right stage.
                      </p>
                      <Link
                        href="https://partner.ux-india.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors w-fit"
                      >
                        Explore Partnership
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 7h8M8 4l3 3-3 3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </AnimatedSection>

                  {/* Speaker Card */}
                  <AnimatedSection delay={200}>
                    <div
                      className="rounded-3xl p-8 h-full flex flex-col"
                      style={{ backgroundColor: "#2D3580" }}
                    >
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                          fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                          color: "#FFFFFF",
                        }}
                      >
                        Share your ideas
                      </h3>
                      <p className="font-sans text-sm text-white/85 leading-relaxed flex-1 mb-5">
                        UXINDIA 2026 is calling for speakers who bring strong
                        points of view, practical experience, and the courage to
                        challenge assumptions. We welcome practitioners,
                        researchers, leaders, founders, and emerging voices with
                        ideas that can move the discipline forward.
                      </p>
                      <p className="font-sans text-sm text-white/85 leading-relaxed mb-6">
                        We are especially interested in talks that explore design
                        leadership, AI, systems thinking, team culture,
                        entrepreneurship, and the future of the profession.
                      </p>
                      <Link
                        href=""
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-full transition-colors w-fit opacity-45"
                      >
                        Submissions Closed
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 7h8M8 4l3 3-3 3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </AnimatedSection>

                  {/* Press Card */}
                  <AnimatedSection delay={300}>
                    <div
                      className="rounded-3xl p-8 h-full flex flex-col"
                      style={{ backgroundColor: "#1B7A6E" }}
                    >
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'UXILeadershipCondensed'",
                          fontWeight: 500,
                          fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                          color: "#FFFFFF",
                        }}
                      >
                        For press and media
                      </h3>
                      <p className="font-sans text-sm text-white/85 leading-relaxed flex-1 mb-5">
                        UXINDIA 2026 is a timely story for the press because it
                        reflects a clear shift in India&apos;s design landscape.
                        The transition to Design Leadership Week, the
                        founder-led vision, and the focus on leadership in the
                        age of AI all create strong angles for coverage.
                      </p>
                      <p className="font-sans text-sm text-white/85 leading-relaxed mb-6">
                        Journalists and editors can request official information,
                        speaker details, and media assets for coverage and
                        interviews.
                      </p>
                      <span className="group relative inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/50 border border-white/20 px-5 py-2.5 rounded-full cursor-not-allowed w-fit overflow-hidden">
                        <span className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                          Request Press Access
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M3 7h8M8 4l3 3-3 3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          Coming Soon
                        </span>
                      </span>
                    </div>
                  </AnimatedSection>
                </div>

                {/* WhatsApp Community Link */}
                <AnimatedSection delay={500}>
                  <div className="text-center mt-16">
                    <Link
                      href="https://chat.whatsapp.com/IgFNvTuRNqy0Rb1dqkZZTb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
                    >
                      Join our WhatsApp community
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </section>

            {/* 9) Closing section */}
            <section className="pt-[80px] bg-cream relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <AnimatedSection>
                  <h2
                    className="leading-[1.08] mb-8"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "clamp(2.8rem, 6vw, 5rem)",
                      color: "#0D0D0D",
                    }}
                  >
                    Come build what&apos;s next
                  </h2>
                  <p className="font-sans text-base md:text-lg text-page/70 leading-relaxed max-w-3xl mx-auto mb-5">
                    UXINDIA: Design Leadership Week 2026 is a space for learning,
                    leadership, and possibility. It is where the community
                    gathers to exchange ideas, recognize talent, and shape the
                    future with purpose.
                  </p>
                  <p className="font-sans text-base md:text-lg text-page/70 leading-relaxed max-w-3xl mx-auto">
                    We believe the next chapter of design leadership in India
                    will be written by people who are willing to imagine boldly,
                    build responsibly, and lead together.
                  </p>
                </AnimatedSection>
              </div>

              {/* Image Stack */}
              <div className="-mt-4">
                <ImageStack />
              </div>
            </section>
          </div>

          {/* ─── PARTNERS TAB ─── */}
          <div
            className={
              activeTab === "partners"
                ? "relative opacity-100 transition-opacity duration-300"
                : "absolute inset-0 opacity-0 pointer-events-none overflow-hidden"
            }
            aria-hidden={activeTab !== "partners"}
          >
            {/* Partners Hero — cream bg with large editorial headline */}
            <section className="bg-cream py-20 md:py-28 overflow-hidden">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                  <AnimatedSection>
                    <p className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-5">
                      Partners · UXINDIA 2026
                    </p>
                    <h2
                      className="leading-[1.04] text-balance"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "clamp(3rem, 7vw, 6rem)",
                        color: "#0D0D0D",
                      }}
                    >
                      Join the World&apos;s
                      <br />
                      Top Design
                      <br />
                      Organisations
                    </h2>
                  </AnimatedSection>
                  <AnimatedSection delay={200}>
                    <div className="md:max-w-xs">
                      <p className="font-sans text-base text-page/60 leading-relaxed mb-8">
                        Partner with India&apos;s most influential design event and
                        put your brand in the room where design decisions get made.
                      </p>
                      <Link
                        href="https://partner.ux-india.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full text-white transition-opacity hover:opacity-85"
                        style={{ backgroundColor: "#E85520" }}
                      >
                        Explore Partnership Packages
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Stat strip */}
                <AnimatedSection delay={300}>
                  <div className="mt-16 pt-10 border-t border-page/10 grid grid-cols-3 gap-6">
                    {[
                      { num: "5,000+", label: "Design professionals" },
                      { num: "5 days", label: "Of curated programming" },
                      { num: "15+", label: "Cities represented" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p
                          className="leading-none mb-1"
                          style={{
                            fontFamily: "'UXILeadershipCondensed'",
                            fontWeight: 500,
                            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                            color: "#E85520",
                          }}
                        >
                          {s.num}
                        </p>
                        <p className="font-sans text-xs text-page/50 uppercase tracking-[0.15em]">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </section>

            {/* Why Partner — bold coloured cards on cream */}
            <section className="bg-cream py-16 md:py-20 border-t border-page/8">
              <div className="max-w-6xl mx-auto px-6">
                <AnimatedSection>
                  <p className="font-sans text-xs text-page/40 uppercase tracking-[0.25em] mb-10">
                    Why Partner
                  </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <AnimatedSection delay={100}>
                    <div className="rounded-3xl p-8 h-full flex flex-col min-h-[260px]" style={{ backgroundColor: "#E85520" }}>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-auto">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M9 1.5L11.25 6.75H17L12.5 9.9L14.25 15.5L9 12.15L3.75 15.5L5.5 9.9L1 6.75H6.75L9 1.5Z" fill="white" />
                        </svg>
                      </div>
                      <div className="mt-10">
                        <h3 className="mb-3 text-white" style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500, fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
                          Shape the Future
                        </h3>
                        <p className="font-sans text-sm text-white/80 leading-relaxed">
                          Position your brand at the forefront of design and innovation. Be part of conversations that define where the industry is headed.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={160}>
                    <div className="rounded-3xl p-8 h-full flex flex-col min-h-[260px]" style={{ backgroundColor: "#1B7A6E" }}>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-auto">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="6" cy="7" r="2.5" fill="white" />
                          <circle cx="12" cy="7" r="2.5" fill="white" />
                          <path d="M1 16c0-2.5 2-4.5 5-4.5M17 16c0-2.5-2-4.5-5-4.5M9 16c0-2 1.5-3.5 4-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="mt-10">
                        <h3 className="mb-3 text-white" style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500, fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
                          Build Meaningful Connections
                        </h3>
                        <p className="font-sans text-sm text-white/80 leading-relaxed">
                          Network with 5,000+ designers, entrepreneurs, and industry leaders across five days of curated programming.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={220}>
                    <div className="rounded-3xl p-8 h-full flex flex-col min-h-[260px]" style={{ backgroundColor: "#2D3580" }}>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-auto">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="13" width="14" height="3" rx="1" fill="white" />
                          <path d="M9 2v9M9 2L5.5 5.5M9 2l3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="mt-10">
                        <h3 className="mb-3 text-white" style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500, fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}>
                          Own the Stage
                        </h3>
                        <p className="font-sans text-sm text-white/80 leading-relaxed">
                          Share your expertise, inspire the community, and spark impactful discussions that extend well beyond the event.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>

            {/* ── PARTNER TIERS — single cream canvas, hierarchy via size ── */}
            <section className="bg-cream py-16 md:py-24">
              <div className="max-w-6xl mx-auto px-6">

                {/* Section header */}
                <AnimatedSection>
                  <div className="flex items-end justify-between mb-16 pb-6 border-b border-page/10">
                    <div>
                      <p className="font-sans text-xs text-page/40 uppercase tracking-[0.25em] mb-2">Our Partners</p>
                      <h3
                        className="leading-tight text-balance"
                        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#0D0D0D" }}
                      >
                        Organisations shaping
                        <br />
                        design with us
                      </h3>
                    </div>
                    <Link
                      href="https://partner.ux-india.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E85520] group"
                    >
                      Become a partner
                      <svg
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </AnimatedSection>

                {/* ── DIAMOND — widest, most prominent ── */}
                {getPartnersByTier("diamond").length > 0 && (
                  <div className="mb-12">
                    <AnimatedSection>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#E85520]/25 text-[#E85520] bg-[#E85520]/6">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E85520]" />
                          Diamond
                        </span>
                        <span className="hidden md:block h-px flex-1 bg-page/10" />
                      </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 gap-4">
                      {getPartnersByTier("diamond").map((partner, i) => (
                        <AnimatedSection key={partner.name} delay={i * 80}>
                          <a
                            href={partner.url ?? "#"}
                            target={partner.url ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group flex flex-col md:flex-row md:items-center gap-8 bg-white rounded-2xl p-8 md:p-10 border border-page/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(13,13,13,0.08)]"
                          >
                            <div className="relative h-16 w-56 flex-shrink-0">
                              <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain object-left" />
                            </div>
                            {partner.description && (
                              <p className="font-sans text-sm text-page/55 leading-relaxed flex-1">
                                {partner.description}
                              </p>
                            )}
                            <span className="flex-shrink-0 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#E85520] group-hover:gap-3 transition-all duration-200">
                              Visit
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </a>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── PLATINUM — 2 col ── */}
                {getPartnersByTier("platinum").length > 0 && (
                  <div className="mb-12">
                    <AnimatedSection>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#1B7A6E]/25 text-[#1B7A6E] bg-[#1B7A6E]/6">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A6E]" />
                          Platinum
                        </span>
                        <span className="hidden md:block h-px flex-1 bg-page/10" />
                      </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getPartnersByTier("platinum").map((partner, i) => (
                        <AnimatedSection key={partner.name} delay={i * 80}>
                          <a
                            href={partner.url ?? "#"}
                            target={partner.url ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-white rounded-2xl p-8 border border-page/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(13,13,13,0.08)] h-full"
                          >
                            <div className="relative h-10 w-32 mb-6">
                              <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain object-left" />
                            </div>
                            {partner.description && (
                              <p className="font-sans text-sm text-page/55 leading-relaxed flex-1 mb-5">
                                {partner.description}
                              </p>
                            )}
                            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#1B7A6E] w-fit group-hover:gap-3 transition-all duration-200">
                              Visit {partner.name}
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                                <path d="M2 6h8M7.5 3.5L10 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </a>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── GOLD — 4 col square tiles ── */}
                {getPartnersByTier("gold").length > 0 && (
                  <div className="mb-12">
                    <AnimatedSection>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#F5A623]/30 text-[#B07010] bg-[#F5A623]/8">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                          Gold
                        </span>
                        <span className="hidden md:block h-px flex-1 bg-page/10" />
                      </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {getPartnersByTier("gold").map((partner, i) => (
                        <AnimatedSection key={partner.name} delay={i * 60}>
                          <a
                            href={partner.url ?? "#"}
                            target={partner.url ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 aspect-[4/3] border border-page/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(13,13,13,0.08)] hover:border-[#F5A623]/40"
                          >
                            <div className="relative w-full h-9 transition-transform duration-300 group-hover:scale-105">
                              <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
                            </div>
                            <p className="font-sans text-[10px] text-page/35 mt-3 text-center tracking-wide">{partner.name}</p>
                          </a>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── SILVER — 5 col smaller tiles ── */}
                {getPartnersByTier("silver").length > 0 && (
                  <div className="mb-12">
                    <AnimatedSection>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#8A9BAD]/25 text-[#4A6070] bg-[#A8B4C0]/8">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8A9BAD]" />
                          Silver
                        </span>
                        <span className="hidden md:block h-px flex-1 bg-page/10" />
                      </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {getPartnersByTier("silver").map((partner, i) => (
                        <AnimatedSection key={partner.name} delay={i * 50}>
                          <a
                            href={partner.url ?? "#"}
                            target={partner.url ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center bg-white rounded-xl p-5 aspect-[4/3] border border-page/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(13,13,13,0.07)] hover:border-[#8A9BAD]/40"
                          >
                            <div className="relative w-full h-7 transition-transform duration-300 group-hover:scale-105">
                              <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
                            </div>
                          </a>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── MEDIA + COMMUNITY — inline two-col ── */}
                {(getPartnersByTier("media").length > 0 || getPartnersByTier("community").length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-page/8">
                    {getPartnersByTier("media").length > 0 && (
                      <div>
                        <AnimatedSection>
                          <div className="flex items-center gap-3 mb-5">
                            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#2D3580]/20 text-[#2D3580] bg-[#2D3580]/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2D3580]" />
                              Media Partners
                            </span>
                          </div>
                        </AnimatedSection>
                        <div className="grid grid-cols-3 gap-3">
                          {getPartnersByTier("media").map((partner, i) => (
                            <AnimatedSection key={partner.name} delay={i * 50}>
                              <a
                                href={partner.url ?? "#"}
                                target={partner.url ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center bg-white rounded-xl p-4 aspect-[3/2] border border-page/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(13,13,13,0.07)] hover:border-[#2D3580]/30"
                              >
                                <div className="relative w-full h-6 transition-transform duration-300 group-hover:scale-105">
                                  <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
                                </div>
                              </a>
                            </AnimatedSection>
                          ))}
                        </div>
                      </div>
                    )}
                    {getPartnersByTier("community").length > 0 && (
                      <div>
                        <AnimatedSection>
                          <div className="flex items-center gap-3 mb-5">
                            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#1B7A6E]/20 text-[#1B7A6E] bg-[#1B7A6E]/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A6E]" />
                              Community Partners
                            </span>
                          </div>
                        </AnimatedSection>
                        <div className="grid grid-cols-3 gap-3">
                          {getPartnersByTier("community").map((partner, i) => (
                            <AnimatedSection key={partner.name} delay={i * 50}>
                              <a
                                href={partner.url ?? "#"}
                                target={partner.url ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center bg-white rounded-xl p-4 aspect-[3/2] border border-page/8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(13,13,13,0.07)] hover:border-[#1B7A6E]/30"
                              >
                                <div className="relative w-full h-6 transition-transform duration-300 group-hover:scale-105">
                                  <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
                                </div>
                              </a>
                            </AnimatedSection>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </section>

            {/* Partners CTA */}
            <section className="bg-cream py-12 md:py-16 border-t border-page/8">
              <div className="max-w-6xl mx-auto px-6">
                <AnimatedSection>
                  <div
                    className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
                    style={{ backgroundColor: "#E85520" }}
                  >
                    <div>
                      <p className="font-sans text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
                        Become a Partner
                      </p>
                      <h2
                        className="leading-[1.06] text-white text-balance"
                        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                      >
                        Ready to partner
                        <br />
                        with UXINDIA?
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end flex-shrink-0">
                      <p className="font-sans text-sm text-white/75 leading-relaxed max-w-xs md:text-right">
                        Connect with India&apos;s most influential design community.
                        Find the right level of involvement for your brand.
                      </p>
                      <Link
                        href="https://partner.ux-india.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded-full bg-white text-[#E85520] transition-all hover:opacity-90 w-fit"
                      >
                        Get the Partnership Deck
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* global footer */}
      <Footer />
    </>
  );
}
