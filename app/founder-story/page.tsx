"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function QuoteBlock({
  quote,
  className = "",
}: {
  quote: string;
  className?: string;
}) {
  return (
    <blockquote
      className={`relative pl-6 border-l-4 border-[#E85520] ${className}`}
    >
      <p
        className="text-[#0D0D0D] leading-relaxed italic"
        style={{
          fontFamily: "'UXILeadershipCondensed'",
          fontWeight: 400,
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}

const initiatives = [
  {
    name: "1 Million Women in Design",
    desc: "Empowering women to build design skills. Vision 2030: train 1 million women in AI and design literacy.",
  },
  {
    name: "Design Literacy Program",
    desc: "Foundational design education for colleges, universities, and organizations.",
  },
  {
    name: "UMO Design Grads",
    desc: "12-month program blending UX/UI, tech, and entrepreneurship with a startup capstone.",
  },
  {
    name: "Design X Social (DXS)",
    desc: "Global Innovation Challenge for designers tackling social, economic, and environmental challenges.",
  },
  {
    name: "Instill Design",
    desc: "Design education for social change; penetrating educational institutes across all regions.",
  },
];

const visionMissions = [
  {
    title: "Design Entrepreneurship",
    desc: "Empower and incubate 100 design-led startups; help designers evolve into founders and changemakers.",
  },
  {
    title: "Women in AI & Design",
    desc: "Train and mentor 1 million women in AI and design literacy by 2030.",
  },
  {
    title: "Democratise Design Education",
    desc: "Take design to India's Tier-2 and Tier-3 cities; make learning accessible, affordable, and future-ready.",
  },
];

export default function FounderStoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <>
      <Nav forceSolid />
      <main className="bg-[#F5F0E8]">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen overflow-hidden bg-[#0D0D0D] pt-[100px]"
        >
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 w-full h-full"
          >
            <Image
              src="/kaladhar-bapu.jpg"
              alt="Kaladhar Bapu speaking at UXINDIA conference"
              fill
              className="object-cover object-center opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent" />
          </motion.div>

          <div className="relative z-10 min-h-[calc(100vh-100px)] flex flex-col justify-end pb-24 md:pb-32 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4"
              >
                Founder & Chair
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-white leading-[1.05] mb-4"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                }}
              >
                Kaladhar Bapu
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="font-sans text-lg md:text-xl text-[#E85520] mb-6"
              >
                Design Leader. Design Activist. Champion of UX in India.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-3xl"
              >
                Kaladhar Bapu is a Strategic Design Thinker, Information
                Architect, and Design Activist dedicated to shaping a better
                world through design. One of the very first people to bring User
                Experience Design to India, he divides his time between New York
                and Hyderabad — and has spent 25+ years building institutions,
                movements, and communities around the belief that design is a
                tool for social transformation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-sans text-sm text-white/40 mt-8 italic"
              >
                &ldquo;Good Design for Better Living&rdquo;
              </motion.p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-24 md:py-32 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4">
                The Journey
              </p>
              <h2
                className="text-[#0D0D0D] leading-[1.08] mb-8"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                From Amalapuram to the World
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed mb-6">
                Kaladhar Bapu&apos;s journey with design began in Amalapuram,
                Andhra Pradesh, where he was born — and took root in Hyderabad,
                where he grew up. From his school years at Sisu Vihar, ZPP High
                School, and JNTU Hyderabad, his curiosity was always less about
                the <em>what</em> and more about the <em>why</em> — why things
                are designed the way they are, and how thoughtful design can
                make them better.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed mb-6">
                He pursued Industrial Design at IIT Bombay, where he discovered
                design as both a creative and strategic discipline. He later
                studied Strategic Design Management at Pratt Institute, New York
                — an experience he calls truly transformational.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <QuoteBlock
                quote="Pratt immersed me in a global environment of design leadership, innovation, and cross-disciplinary collaboration. Being in New York — the world's creative and cultural hub — helped me see how art, technology, and business intersect to shape meaningful human experiences."
                className="my-10"
              />
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed mb-6">
                His career in UX began when he was recruited straight out of IIT
                Bombay by BaaN ERP, a Dutch enterprise company, as a Usability
                Engineer — at a time when the concept of usability was virtually
                unheard of in India. During his training in the Netherlands, he
                was introduced to the principles of human-centered design. That
                became a lifelong calling.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed">
                His father — an artist and admirer of legendary filmmaker Bapu —
                named him Kaladhar Bapu, a name he describes as both an
                inspiration and a lifelong reminder to live with creativity and
                intention.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* What He Built */}
        <section className="py-24 md:py-32 bg-[#0D0D0D]">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4">
                Institutions & Impact
              </p>
              <h2
                className="text-white leading-[1.08] mb-16"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                What He Built
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={100}>
                <div className="bg-white/5 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                  <h3
                    className="text-[#E85520] mb-3"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "1.5rem",
                    }}
                  >
                    UMO Design Foundation
                  </h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Founded in 2000 as a passion project (originally
                    &ldquo;Boycott Bad Designs&rdquo; — a community-driven
                    movement where people shared examples of poor design from
                    daily life). This evolved into UsabilityMatters.Org (UMO),
                    then the UMO Design Foundation — a non-profit dedicated to
                    fostering design awareness, meaningful dialogue, and social
                    impact through design. Now 25+ years old.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="bg-white/5 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                  <h3
                    className="text-[#E85520] mb-3"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "1.5rem",
                    }}
                  >
                    UXINDIA International Conference
                  </h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Founded in 2005. India&apos;s largest and the world&apos;s
                    longest-running UX design conference. Now in its 25th
                    edition (UXINDIA25). A global confluence of thought
                    leadership from industry, institutions, and individuals —
                    aimed at driving design-led social change.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-white/5 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                  <h3
                    className="text-[#E85520] mb-3"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "1.5rem",
                    }}
                  >
                    UMO Design School
                  </h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    A new initiative reimagining design education through
                    real-world projects and cross-disciplinary learning.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <div className="bg-white/5 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                  <h3
                    className="text-[#E85520] mb-3"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                      fontSize: "1.5rem",
                    }}
                  >
                    Happening Design Studio
                  </h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Co-founded with studios in New York (NYC) and Hyderabad
                    (HYD). Created the Kernel Design System, which became the
                    foundation for consistent, composable interfaces across
                    dozens of digital products, scaling design teams across the
                    US and India.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quote Break */}
        <section className="py-20 md:py-28 bg-[#E85520]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <p
                className="text-white leading-relaxed"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 400,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                }}
              >
                &ldquo;Design is a tool for social transformation and a way to
                make life better for people at every level of society.&rdquo;
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-24 md:py-32 bg-[#F5F0E8]">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4">
                Pioneering Change
              </p>
              <h2
                className="text-[#0D0D0D] leading-[1.08] mb-12"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Initiatives He Pioneered
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {initiatives.map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/50 hover:bg-white transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#E85520] mt-2.5 shrink-0" />
                    <div>
                      <h3 className="font-sans font-semibold text-[#0D0D0D] mb-1">
                        {item.name}
                      </h3>
                      <p className="font-sans text-sm text-[#0D0D0D]/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={450}>
              <p className="font-sans text-sm text-[#0D0D0D]/50 mt-8 italic">
                Earlier programs: TechEase, iINNOVATE, Boycott Bad Designs,
                World Usability Day — seeding the design awareness movement in
                India.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision 2030 */}
        <section className="py-24 md:py-32 bg-[#2D3580]">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <p className="font-sans text-xs text-white/50 uppercase tracking-[0.25em] mb-4">
                Looking Ahead
              </p>
              <h2
                className="text-white leading-[1.08] mb-4"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Vision 2030
              </h2>
              <p
                className="text-[#E85520] leading-[1.1] mb-12"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                }}
              >
                &ldquo;The future of design is India, and the future of India is
                design.&rdquo;
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visionMissions.map((mission, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="bg-white/10 rounded-2xl p-6 h-full hover:bg-white/15 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#E85520] flex items-center justify-center text-white font-bold mb-4">
                      {i + 1}
                    </div>
                    <h3
                      className="text-white mb-2"
                      style={{
                        fontFamily: "'UXILeadershipCondensed'",
                        fontWeight: 500,
                        fontSize: "1.25rem",
                      }}
                    >
                      {mission.title}
                    </h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      {mission.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 md:py-32 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4">
                Philosophy & Mission
              </p>
              <h2
                className="text-[#0D0D0D] leading-[1.08] mb-8"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Design for Better Living
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed mb-6">
                Core belief: &ldquo;Good Design for Better Living&rdquo; —
                design as a catalyst for social and economic transformation.
                Focus areas include inclusivity, accessibility, ethical design,
                human-centered thinking, and design entrepreneurship.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="font-sans text-base md:text-lg text-[#0D0D0D]/70 leading-relaxed mb-8">
                Kaladhar actively mentors and incubates design-led startups in
                healthcare, education, sustainability, and AI.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <QuoteBlock
                quote="Our approach focuses on helping founders understand not only what to build, but why and for whom — embedding human values and purpose into the DNA of their business models."
                className="mb-8"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Personal Side */}
        <section className="py-24 md:py-32 bg-[#0D0D0D]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <AnimatedSection>
                <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4">
                  The Human Side
                </p>
                <h2
                  className="text-white leading-[1.08] mb-8"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Beyond Design
                </h2>
                <div className="space-y-4 font-sans text-sm text-white/70 leading-relaxed">
                  <p>Currently splits time between New York and Hyderabad.</p>
                  <p>
                    Deeply influenced by the writings of Swami Vivekananda and
                    Jiddu Krishnamurti — values of reflection, discipline, and
                    empathy shape his philosophy.
                  </p>
                  <p>
                    Passionate about sketching, caricature, cartooning,
                    photography, and traveling. Loves Indian art, architecture,
                    and culture.
                  </p>
                  <p>
                    Interested in visual storytelling and filmmaking — aspires
                    to one day make a film that brings design and storytelling
                    together.
                  </p>
                  <p>Sports: Table tennis & pickleball.</p>
                  <p>
                    Practices deep meditation and yoga — mornings begin with
                    meditation, quiet reflection, and reading (design,
                    technology, philosophy).
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <p className="font-sans text-xs text-white/40 uppercase tracking-[0.25em] mb-4">
                  Awards & Recognition
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#E85520] pl-5">
                    <p className="font-sans text-sm text-white/90 font-medium mb-1">
                      Grand Prize Winner
                    </p>
                    <p className="font-sans text-xs text-white/50">
                      Thunder Dome Trophy for Best User-Centric Technology
                      Innovation. Project: e-bimba — Internet of Everyday
                      Things.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#E85520] pl-5">
                    <p className="font-sans text-sm text-white/90 font-medium mb-1">
                      Gold Star Award
                    </p>
                    <p className="font-sans text-xs text-white/50">
                      Outstanding Contribution & High Performance — Microsoft
                    </p>
                  </div>
                  <div className="border-l-2 border-[#E85520] pl-5">
                    <p className="font-sans text-sm text-white/90 font-medium mb-1">
                      Featured in Global Indian
                    </p>
                    <p className="font-sans text-xs text-white/50">
                      Cover Story (Oct 2025)
                    </p>
                  </div>
                  <div className="border-l-2 border-[#E85520] pl-5">
                    <p className="font-sans text-sm text-white/90 font-medium mb-1">
                      Alumni
                    </p>
                    <p className="font-sans text-xs text-white/50">
                      IIT Bombay (Industrial Design) + Pratt Institute, New York
                      (Strategic Design Management)
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-20 md:py-28 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2
                className="text-[#0D0D0D] leading-[1.08] mb-8"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Connect with Kaladhar
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://linkedin.com/in/kbapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-6 py-3 rounded-full text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#0077B5" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href="https://facebook.com/kaladharbapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold px-6 py-3 rounded-full text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#1877F2" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="mt-12 pt-12 border-t border-[#0D0D0D]/10">
                <p className="font-sans text-xs text-[#0D0D0D]/40 uppercase tracking-[0.15em] mb-4">
                  Organizations
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link
                    href="https://ux-india.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors"
                  >
                    ux-india.org
                  </Link>
                  <span className="text-[#0D0D0D]/20">|</span>
                  <Link
                    href="https://umo.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors"
                  >
                    umo.design
                  </Link>
                  <span className="text-[#0D0D0D]/20">|</span>
                  <Link
                    href="https://1mw.umo.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors"
                  >
                    1mw.umo.design
                  </Link>
                  <span className="text-[#0D0D0D]/20">|</span>
                  <Link
                    href="https://grads.umo.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors"
                  >
                    grads.umo.design
                  </Link>
                  <span className="text-[#0D0D0D]/20">|</span>
                  <Link
                    href="https://dxs.umo.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors"
                  >
                    dxs.umo.design
                  </Link>
                  <span className="text-[#0D0D0D]/20">|</span>
                  <Link
                    href="https://happening.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[#0D0D0D]/60 hover:text-[#E85520] transition-colors"
                  >
                    happening.design
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
