"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian/Accordion";

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    number: "01",
    title: "Better Leadership Capability",
    description:
      "Attendees gain practical insights into leading teams, influencing stakeholders, managing change, and building high-performing design organisations.",
    outcomes: ["Stronger leadership pipeline", "Better decision-making", "Improved cross-functional collaboration"],
  },
  {
    number: "02",
    title: "AI & Emerging Technology Readiness",
    description:
      "Learn how leading organisations are integrating AI into design, research, product development, and customer experience.",
    outcomes: ["Increased productivity", "Faster innovation cycles", "Better adoption of AI-enabled workflows"],
  },
  {
    number: "03",
    title: "Improved Customer Experience",
    description:
      "Global case studies and proven frameworks help teams build products and services that better meet customer needs.",
    outcomes: ["Higher customer satisfaction", "Better product adoption", "Increased business value"],
  },
  {
    number: "04",
    title: "Knowledge Multiplier Effect",
    description:
      "One attendee can share insights, frameworks, and best practices with the broader team through internal presentations and workshops.",
    outcomes: ["Team-wide learning", "Higher return on training investment", "Continuous capability building"],
  },
  {
    number: "05",
    title: "Industry Benchmarking",
    description:
      "Learn how leading global organisations solve challenges related to product strategy, innovation, research, design operations, and leadership.",
    outcomes: ["Better strategic planning", "Adoption of proven practices", "Reduced learning curve"],
  },
];

const topics = [
  "Design Leadership",
  "AI in Product & Design",
  "Customer Experience Strategy",
  "Innovation Frameworks",
  "Product Thinking",
  "Stakeholder Management",
  "Team Leadership",
  "Organisational Design",
  "Research & Human-Centered Design",
  "Emerging Industry Trends",
];

const commitments = [
  "Present key learnings to the team",
  "Share actionable frameworks and resources",
  "Identify opportunities for implementation",
  "Recommend improvements relevant to our organisation",
  "Help transfer knowledge across teams",
];

const faqItems = [
  {
    id: "faq-1",
    question: "Why should I approve attendance?",
    answer:
      "UXINDIA is a professional development investment that equips employees with leadership skills, strategic thinking, AI insights, and practical frameworks that can be applied immediately within the organisation.",
  },
  {
    id: "faq-2",
    question: "Is this relevant only for designers?",
    answer:
      "No. UXINDIA Design Leadership Week attracts professionals from Design, Product Management, Engineering, Customer Experience, Innovation, Research, Marketing, Digital Transformation, and Business Strategy. The event focuses on leadership and business impact, making it valuable for cross-functional teams.",
  },
  {
    id: "faq-3",
    question: "Will the knowledge be shared internally?",
    answer:
      "Yes. Attendees are encouraged to conduct an internal knowledge-sharing session, providing summaries, actionable insights, and recommendations that benefit the wider team. One attendee can create value for an entire department.",
  },
  {
    id: "faq-4",
    question: "Why attend before the speaker lineup is announced?",
    answer:
      "UXINDIA has built over two decades of trust by delivering carefully curated content and world-class speakers. Many organisations and professionals register early to secure discounted pricing and guarantee participation before passes sell out.",
  },
  {
    id: "faq-5",
    question: "What makes UXINDIA different?",
    answer:
      "22+ years of legacy as Asia's leading design leadership platform. Carefully curated sessions, global speakers and industry experts, a strong focus on leadership, AI, and innovation, and high-quality networking with senior professionals.",
  },
  {
    id: "faq-6",
    question: "What is the expected return on investment?",
    answer:
      "The value extends well beyond the individual participant. Even implementing one new process, leadership framework, AI workflow, or customer experience improvement can generate productivity gains and business impact that far exceed the cost of attendance. Professional development is an investment in innovation, leadership, and long-term organisational capability.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConvinceYourManagerClient() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D0D0D]">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#0D0D0D] overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <FadeIn>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-5 block">
              For You & Your Organisation
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-[96px] text-white leading-[0.95] tracking-tight mb-8 text-balance"
              style={{ fontFamily: "'UXILeadershipCondensed'" }}
            >
              Convince Your{" "}
              <span className="text-[#E85520]">Manager</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Everything you need to make the case for attending UXINDIA 2026 — a business case, a ready-to-send approval letter, and answers to every question your manager might ask.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="/passes"
                className="inline-flex items-center gap-3 border border-[#E85520] text-[#E85520] font-sans text-base font-semibold px-8 py-4 rounded-full hover:bg-[#E85520]/10 transition-colors"
              >
                Buy Your Passes
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/downloads/leadership-approval-letter.pdf"
                download
                className="inline-flex items-center gap-3 border border-white/30 text-white font-sans text-base font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Leadership Summit Letter
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
              <a
                href="/downloads/rising-leaders-approval-letter.pdf"
                download
                className="inline-flex items-center gap-3 border border-white/30 text-white font-sans text-base font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Rising Leaders Forum Letter
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={0.2} className="mt-16 md:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "22+", label: "Years of Legacy" },
              { value: "5", label: "Days of Learning" },
              { value: "2", label: "Curated Tracks" },
              { value: "1", label: "Attendee = Entire Team Benefits" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl md:text-5xl text-white mb-1"
                  style={{ fontFamily: "'UXILeadershipCondensed'" }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-white/50 leading-snug">{stat.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Business Case ── */}
      <section className="py-24 md:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <FadeIn className="mb-14 md:mb-20">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-4 block">
              The Business Case
            </span>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl text-[#0D0D0D] leading-[0.95] text-balance"
              style={{ fontFamily: "'UXILeadershipCondensed'" }}
            >
              What Your Organisation <span className="text-[#E85520]">Gains</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.number} delay={i * 0.07}>
                <div className="group border-t border-[#0D0D0D]/10 py-10 md:py-12 grid grid-cols-1 md:grid-cols-[100px_1fr_280px] gap-6 md:gap-10 hover:bg-[#0D0D0D]/[0.03] transition-colors rounded-lg px-2 -mx-2">
                  {/* Number */}
                  <div className="flex items-start pt-1">
                    <span
                      className="text-5xl text-[#0D0D0D]/15 leading-none"
                      style={{ fontFamily: "'UXILeadershipCondensed'" }}
                    >
                      {benefit.number}
                    </span>
                  </div>
                  {/* Title + description */}
                  <div>
                    <h3
                      className="text-2xl md:text-3xl text-[#0D0D0D] mb-3 leading-tight"
                      style={{ fontFamily: "'UXILeadershipCondensed'" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-base text-[#0D0D0D]/60 leading-relaxed max-w-xl">
                      {benefit.description}
                    </p>
                  </div>
                  {/* Outcomes */}
                  <div className="flex flex-col gap-2 justify-start pt-1">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0D0D0D]/40 mb-1">
                      Business Impact
                    </p>
                    {benefit.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85520] shrink-0" />
                        <span className="font-sans text-sm text-[#0D0D0D]/70">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-[#0D0D0D]/10" />
          </div>
        </div>
      </section>

      {/* ── What They'll Learn ── */}
      <section className="py-24 md:py-32 bg-[#0D0D0D]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-4 block">
                Learning Outcomes
              </span>
              <h2
                className="text-4xl md:text-6xl text-white leading-[0.95] mb-6 text-balance"
                style={{ fontFamily: "'UXILeadershipCondensed'" }}
              >
                What Your Employee <span className="text-[#E85520]">Will Learn</span>
              </h2>
              <p className="font-sans text-base text-white/50 leading-relaxed">
                The programme spans leadership, technology, strategy, and craft — designed to build capability that transfers directly back to the organisation.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 border border-white/10 rounded-xl px-4 py-3.5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85520] shrink-0" />
                    <span className="font-sans text-sm text-white/80 leading-snug">{topic}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Commitment ── */}
      <section className="py-24 md:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-4 block">
                Attendee Commitment
              </span>
              <h2
                className="text-4xl md:text-6xl text-[#0D0D0D] leading-[0.95] mb-6 text-balance"
                style={{ fontFamily: "'UXILeadershipCondensed'" }}
              >
                The Knowledge Comes <span className="text-[#E85520]">Back to You</span>
              </h2>
              <p className="font-sans text-base text-[#0D0D0D]/60 leading-relaxed">
                Following the conference, the attendee will ensure the benefits extend beyond one individual and create lasting value for the organisation.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col gap-4">
              {commitments.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border border-[#0D0D0D]/10 rounded-xl px-5 py-4 bg-white/60"
                >
                  <span
                    className="text-2xl text-[#E85520]/40 leading-none shrink-0 mt-0.5"
                    style={{ fontFamily: "'UXILeadershipCondensed'" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm md:text-base text-[#0D0D0D]/80 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Approval Letters ── */}
      <section className="py-24 md:py-32 bg-[#0D0D0D]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <FadeIn className="text-center mb-14 md:mb-16">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-4 block">
              Ready to Send
            </span>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-5 text-balance"
              style={{ fontFamily: "'UXILeadershipCondensed'" }}
            >
              Download Your Approval <span className="text-[#E85520]">Letter</span>
            </h2>
            <p className="font-sans text-base text-white/50 max-w-xl mx-auto leading-relaxed">
              A professionally written, ready-to-send letter tailored to each event. Personalise it with your name and send it to your manager.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership Summit */}
            <div className="relative border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors flex flex-col">
              <div className="mb-6">
                <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E85520] border border-[#E85520]/30 rounded-full px-3 py-1 mb-4">
                  Leadership Summit
                </span>
                <h3
                  className="text-3xl md:text-4xl text-white leading-tight mb-3"
                  style={{ fontFamily: "'UXILeadershipCondensed'" }}
                >
                  Manager Approval Letter
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  For attending the UXINDIA 2026 Leadership Summit, 23–25 September, Bengaluru. Covers leadership capability, AI strategy, and ROI for your organisation.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="/downloads/leadership-approval-letter.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#E85520] text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#d04a1a] transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href="/downloads/leadership-approval-letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 border border-white/20 text-white/80 font-sans text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Preview
                </a>
              </div>
            </div>

            {/* Rising Leaders Forum */}
            <div className="relative border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors flex flex-col">
              <div className="mb-6">
                <span className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E85520] border border-[#E85520]/30 rounded-full px-3 py-1 mb-4">
                  Rising Leaders Forum
                </span>
                <h3
                  className="text-3xl md:text-4xl text-white leading-tight mb-3"
                  style={{ fontFamily: "'UXILeadershipCondensed'" }}
                >
                  Manager Approval Letter
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  For attending the UXINDIA 2026 Rising Leaders Forum, 26–27 September, Bengaluru. Covers leadership development, collaboration, and career growth ROI.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="/downloads/rising-leaders-approval-letter.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#E85520] text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#d04a1a] transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href="/downloads/rising-leaders-approval-letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 border border-white/20 text-white/80 font-sans text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Preview
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Manager FAQ ── */}
      <section className="py-24 md:py-32 bg-[#F5F0E8]">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <FadeIn className="text-center mb-12 md:mb-16">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#E85520] mb-4 block">
              Common Questions
            </span>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl text-[#0D0D0D] leading-[0.95] text-balance"
              style={{ fontFamily: "'UXILeadershipCondensed'" }}
            >
              Questions Your Manager <span className="text-[#E85520]">Might Ask</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#0D0D0D]/10 last:border-b-0"
                >
                  <AccordionTrigger className="py-6 text-left text-lg md:text-xl font-semibold text-[#0D0D0D] hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#E85520]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#0D0D0D]/60 text-base md:text-lg leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          {/* Final CTA */}
          <FadeIn delay={0.2} className="mt-16 md:mt-20 border border-[#0D0D0D]/10 rounded-2xl p-8 md:p-12 bg-white/60 text-center">
            <p
              className="text-2xl md:text-3xl text-[#0D0D0D] mb-3 leading-tight text-balance"
              style={{ fontFamily: "'UXILeadershipCondensed'" }}
            >
              The cost of attending lasts a few days.
            </p>
            <p className="font-sans text-base text-[#0D0D0D]/60 max-w-lg mx-auto leading-relaxed mb-8">
              The ideas, leadership skills, industry connections, and strategic perspectives gained can influence teams, products, and organisations for years to come.
            </p>
            <div className="flex justify-center">
              <a
                href="https://tickets.uxindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-[#E85520] text-[#E85520] font-sans text-base font-semibold px-8 py-4 rounded-full hover:bg-[#E85520]/10 transition-colors"
              >
                Buy Your Passes
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
