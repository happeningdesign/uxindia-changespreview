"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian/Accordion";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FAQGroup({
  number,
  title,
  items,
  accordionId,
}: {
  number: string;
  title: string;
  items: { question: string; answer: React.ReactNode }[];
  accordionId: string;
}) {
  return (
    <AnimatedSection className="mb-16">
      <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-2 border-[#E85520]">
        <span className="font-sans text-sm font-semibold text-[#E85520]">
          {number}
        </span>
        <h2
          className="text-3xl md:text-4xl text-[#0D0D0D]"
          style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
        >
          {title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`${accordionId}-${index}`}
            className="border-b border-[#0D0D0D]/10 last:border-b-0"
          >
            <AccordionTrigger className="py-5 text-left text-base md:text-lg font-semibold text-[#0D0D0D] hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#E85520]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#0D0D0D]/60 text-base leading-relaxed pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AnimatedSection>
  );
}

const faqGroups = [
  {
    number: "01",
    title: "About UXINDIA 2026",
    accordionId: "about",
    items: [
      {
        question: "What was the purpose of the Call for Speakers webinar?",
        answer:
          "The webinar was held to explain the UXINDIA 2026 speaker submission process, clarify the new conference format, walk applicants through the proposal form, and answer common questions about tracks, formats, jury review, speaker expectations, and logistics.",
      },
      {
        question: "What is different about UXINDIA 2026?",
        answer:
          "UXINDIA 2026 is structured as a Design Leadership Week. Instead of placing all experience levels into the same talks and workshops, the conference is now divided into two focused experiences: the Design Leadership Summit and the Rising Leaders Forum. This helps speakers design their content for the right maturity level and helps attendees get more relevant value from each session.",
      },
      {
        question: "What is the main theme for UXINDIA 2026?",
        answer: (
          <>
            The main theme is:{" "}
            <strong className="text-[#0D0D0D]">
              Leadership in the Age of AI and Designing What Could Possibly Go
              Right.
            </strong>
            <br />
            <br />
            This does not mean every talk must only be about AI. The theme is
            broader. It invites speakers to explore how design can lead better
            futures through practice, leadership, entrepreneurship, AI, emerging
            technology, and social impact.
          </>
        ),
      },
    ],
  },
  {
    number: "02",
    title: "Conference Format & Tracks",
    accordionId: "tracks",
    items: [
      {
        question: "What are the main submission categories?",
        answer: (
          <>
            Speakers can submit proposals under the following broad categories:
            <ul className="mt-3 space-y-1 list-none">
              {[
                "Design Practice",
                "Design Leadership",
                "Design Entrepreneurship",
                "AI, Emerging Technology, and Future-forward Design",
                "Social Impact",
              ].map((cat) => (
                <li key={cat} className="flex gap-2">
                  <span className="text-[#E85520] font-semibold shrink-0">
                    →
                  </span>
                  {cat}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              If a topic does not fit neatly into one category but strongly
              connects with the theme, it can still be considered by the
              curation team.
            </p>
          </>
        ),
      },
      {
        question:
          "What is the difference between the Leadership Summit and the Rising Leaders Forum?",
        answer: (
          <>
            <p>
              The{" "}
              <strong className="text-[#0D0D0D]">
                Design Leadership Summit
              </strong>{" "}
              (September 23–25) is meant for senior audiences such as design
              leaders, CXOs, CDOs, heads of design, senior UX professionals, and
              strategic decision-makers.
            </p>
            <p className="mt-3">
              The{" "}
              <strong className="text-[#0D0D0D]">Rising Leaders Forum</strong>{" "}
              (September 26–27) is meant for students, early-career designers,
              young practitioners, and professionals who are building their
              foundation and moving toward leadership.
            </p>
            <p className="mt-3">
              The difference is not about the speaker&apos;s years of
              experience. It is about the audience the talk is designed for.
            </p>
          </>
        ),
      },
      {
        question:
          "Can someone with less than seven years of experience submit to the Leadership Summit?",
        answer:
          "Yes. The track is not decided by the speaker's experience alone. A younger speaker can submit to the Leadership Summit if the content is mature, strategic, original, and valuable for senior design leaders.",
      },
      {
        question:
          "Can senior professionals submit talks for the Rising Leaders Forum?",
        answer:
          "Yes. Senior professionals can submit talks for the Rising Leaders Forum if their topic is useful for students, early-career designers, and practitioners who are growing into leadership roles.",
      },
      {
        question: "Will the curation team move a talk to a different track?",
        answer:
          "Yes. Applicants can choose the track they feel is most appropriate, but the curation team may move a proposal from the Leadership Summit to the Rising Leaders Forum, or vice versa, depending on the content, maturity, and audience fit.",
      },
    ],
  },
  {
    number: "03",
    title: "Session Formats & Co-Speakers",
    accordionId: "formats",
    items: [
      {
        question: "What session formats are available?",
        answer: (
          <>
            <p>The available formats include:</p>
            <ul className="mt-3 space-y-1 list-none">
              {[
                "Grand Keynote",
                "Plenary Session",
                "Deep Dive Talk",
                "Spark Session",
                "Panel Discussion",
                "Workshop",
                "Masterclass",
              ].map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-[#E85520] font-semibold shrink-0">
                    →
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              The final format may be recommended by the curation team based on
              the strength and fit of the proposal.
            </p>
          </>
        ),
      },
      {
        question: "What is the duration of each session format?",
        answer: (
          <ul className="space-y-2 list-none">
            {[
              ["Grand Keynote", "Around 40 minutes, with additional time for Q&A"],
              ["Plenary Session", "Around 30 minutes, with Q&A"],
              ["Deep Dive Talk", "A focused breakout-style session"],
              ["Spark Session", "18 minutes"],
              [
                "Workshops and Masterclasses",
                "Longer interactive formats, depending on the final schedule",
              ],
            ].map(([format, duration]) => (
              <li key={format} className="flex gap-2">
                <span className="text-[#E85520] font-semibold shrink-0">→</span>
                <span>
                  <strong className="text-[#0D0D0D]">{format}:</strong>{" "}
                  {duration}
                </span>
              </li>
            ))}
          </ul>
        ),
      },
      {
        question: "Are co-speakers allowed?",
        answer: (
          <>
            <p>
              For talks, co-speakers are not allowed this year. Each talk should
              be delivered by one speaker.
            </p>
            <p className="mt-3">
              For workshops and masterclasses, co-facilitators are allowed. Two
              or three facilitators may be considered where the workshop format
              genuinely requires it.
            </p>
          </>
        ),
      },
      {
        question: "What if the work was done collaboratively?",
        answer:
          "If a case study or project was created by a team, one primary speaker should submit and deliver the talk. Collaborators can be acknowledged in the presentation, and in some cases they may be invited briefly at the end, but the main talk should be led by one speaker.",
      },
    ],
  },
  {
    number: "04",
    title: "Submitting a Proposal",
    accordionId: "submission",
    items: [
      {
        question: "Can I submit more than one proposal?",
        answer:
          "Yes. Multiple submissions are allowed. Each talk, workshop, or panel proposal should be submitted separately through the form. The same email address can be used for multiple entries.",
      },
      {
        question:
          "I submitted my interest earlier. Do I need to submit again?",
        answer:
          "Yes. Earlier submissions were expressions of interest. The current speaker form is the official detailed proposal form. Anyone who wants to be considered must complete the new form with the required details.",
      },
      {
        question:
          "Do I need to submit a complete slide deck with my proposal?",
        answer:
          "A polished final deck is not required at the proposal stage. However, applicants should provide a clear outline or rough structure of the presentation. This helps the curation team understand the flow, depth, and seriousness of the proposal.",
      },
      {
        question: "What makes a strong speaker proposal?",
        answer: (
          <>
            <p>
              A strong proposal should be original, practical, and clearly
              connected to the UXINDIA 2026 theme. It should show what the
              speaker has actually done, learned, tested, failed at, or
              discovered. The proposal should also clearly explain what the
              audience will take away.
            </p>
            <p className="mt-3">
              UXINDIA is open to success stories, failure stories, field
              learnings, case studies, frameworks, and fresh perspectives. The
              strongest talks usually come from lived experience, not generic
              theory.
            </p>
          </>
        ),
      },
      {
        question: "What should speakers avoid?",
        answer: (
          <>
            <p>
              Speakers should avoid generic, heavily AI-generated, promotional,
              or purely theoretical submissions. A proposal should not feel like
              a company pitch, product pitch, or recycled conference talk.
            </p>
            <p className="mt-3">
              Using AI to refine language is acceptable, but the thinking, point
              of view, and core idea should come from the speaker.
            </p>
          </>
        ),
      },
    ],
  },
  {
    number: "05",
    title: "Evaluation & Selection",
    accordionId: "evaluation",
    items: [
      {
        question: "How will proposals be evaluated?",
        answer: (
          <>
            <p>
              Proposals will go through a curated review process. The jury will
              evaluate submissions based on criteria such as originality,
              relevance to the theme, audience fit, clarity, practical value,
              maturity, and strength of takeaways.
            </p>
            <p className="mt-3">
              The review process is designed to be largely blind, meaning jury
              members focus first on the talk title, abstract, description,
              takeaways, and theme alignment rather than the speaker&apos;s name
              or profile.
            </p>
          </>
        ),
      },
      {
        question: "Will the jury know who submitted the proposal?",
        answer:
          "The process is intended to be mostly blind during the first level of review. The jury will primarily evaluate the content. Speaker profiles may be reviewed later, especially when two or more proposals have similar scores.",
      },
      {
        question:
          "Will speakers receive feedback if their talk is not selected?",
        answer:
          "The plan is to provide feedback or comments where possible. The goal is to help speakers understand how they can improve future submissions, even if their proposal is not selected this year.",
      },
    ],
  },
  {
    number: "06",
    title: "Panels & Special Topics",
    accordionId: "panels",
    items: [
      {
        question: "What panel topics are planned?",
        answer: (
          <>
            <p>The planned panel themes include:</p>
            <ul className="mt-3 space-y-1 list-none">
              {[
                "Design Leadership",
                "AI and Design",
                "Design Entrepreneurship",
                "Women in Design",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-[#E85520] font-semibold shrink-0">
                    →
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              For panel submissions, applicants should clearly state their point
              of view and what they would like to contribute to the discussion.
            </p>
          </>
        ),
      },
      {
        question: "Can I apply for a panel discussion?",
        answer:
          "Yes. If you want to be considered for a panel, select the panel format in the form and explain your perspective, your experience, and the specific idea or argument you would bring to the panel.",
      },
      {
        question:
          "Can case studies about AI-driven design workflows be submitted?",
        answer:
          "Yes. Practice-led, product-driven, or AI-enabled design workflow case studies can be submitted if they are original, useful, and connected to one of the conference categories such as design practice, AI and design, or future-forward design.",
      },
      {
        question: "Are online sessions allowed?",
        answer:
          "No. UXINDIA 2026 speaker sessions are planned as in-person sessions. Speakers from outside India are welcome, but sessions are expected to be delivered physically at the event.",
      },
    ],
  },
  {
    number: "07",
    title: "Logistics & Practicalities",
    accordionId: "logistics",
    items: [
      {
        question: "Will UXINDIA support travel and accommodation?",
        answer:
          "UXINDIA is a non-profit initiative and tries to support speakers as much as possible depending on sponsorship and resources. Travel and accommodation support is expected mainly for Grand Keynote and Plenary Session speakers. For most other formats, accommodation and travel may not be covered.",
      },
      {
        question:
          "Will selected speakers get access to both events?",
        answer:
          "The team is exploring ways to invite selected speakers to both the Design Leadership Summit and the Rising Leaders Forum, but final access details will be confirmed later. If a speaker's session is selected for a specific track, they should plan based on that track's dates first.",
      },
      {
        question: "Do I need to be available for all five days?",
        answer:
          "Not necessarily. If your talk is selected for the Rising Leaders Forum, you may only need to be available for those dates. However, since the curation team may move a talk to another track, speakers should wait for the final confirmation before making travel plans.",
      },
      {
        question: "Will there be a rehearsal or preparation process?",
        answer:
          "Yes. Selected speakers may be asked to share their final deck and participate in preparation or rehearsal before the conference. This is to ensure quality, avoid overlap between sessions, and create a strong experience for the audience.",
      },
      {
        question: "Will talks be recorded?",
        answer:
          "Yes. UXINDIA plans to record selected talks and publish them on YouTube. Speakers will need to agree to the recording and publishing policy during the submission process.",
      },
      {
        question:
          "What about workshops that require Wi-Fi or other infrastructure?",
        answer:
          "If a workshop requires Wi-Fi, handouts, special setup, or other infrastructure, speakers should clearly mention those needs in the proposal form. The UXINDIA team will review the requirements and support where possible.",
      },
    ],
  },
  {
    number: "08",
    title: "How to Apply",
    accordionId: "apply",
    items: [
      {
        question: "Where can I apply to speak?",
        answer: (
          <>
            Visit the UXINDIA website and click{" "}
            <strong className="text-[#0D0D0D]">Apply to Speak</strong>. The
            detailed speaker submission form is available from the website. You
            can also submit directly at{" "}
            <Link
              href="/call-for-speakers"
              className="text-[#E85520] hover:underline font-semibold"
            >
              ux-india.org/call-for-speakers
            </Link>
            .
          </>
        ),
      },
      {
        question: "What is the deadline to submit?",
        answer: (
          <>
            The deadline to submit speaker proposals is{" "}
            <strong className="text-[#0D0D0D]">May 24, 2026</strong>.
          </>
        ),
      },
      {
        question: "Who can I contact if I have questions?",
        answer: (
          <>
            <p>
              For questions, recommendations, or clarifications, you can contact
              the UXINDIA team at{" "}
              <a
                href="mailto:team@umo.design"
                className="text-[#E85520] font-semibold hover:underline"
              >
                team@umo.design
              </a>
              .
            </p>
            <p className="mt-3">
              You can also connect with{" "}
              <strong className="text-[#0D0D0D]">Bapu Kaladhar</strong> on
              LinkedIn for relevant speaker-related questions or suggestions.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function SpeakersFAQPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Nav forceSolid />
      <main className="min-h-screen bg-[#F5F0E8]">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] overflow-hidden bg-[#0D0D0D] pt-[100px]"
        >
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 w-full h-full"
          >
            <Image
              src="/uxindia-audience.jpg"
              alt="UXINDIA conference audience"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
          </motion.div>

          <div className="relative z-10 min-h-[calc(70vh-100px)] flex flex-col justify-end pb-16 md:pb-24 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-4"
              >
                UXINDIA 2026
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
                Speaker FAQ
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
              >
                Everything you need to know about submitting a talk, workshop,
                or panel proposal for UXINDIA Design Leadership Week 2026.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-sm text-white/50 mt-6"
              >
                September 23–27, 2026 · Bengaluru, India ·{" "}
                <span className="text-[#E85520]">Deadline: May 24, 2026</span>
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-[#F5F0E8]">
          <div className="max-w-4xl mx-auto px-6">
            {/* Intro callout */}
            <AnimatedSection>
              <div className="bg-gradient-to-r from-[#E85520]/10 to-[#E85520]/5 border-l-4 border-[#E85520] p-6 md:p-8 rounded-r-2xl mb-16">
                <p className="font-sans text-base md:text-lg text-[#333333] leading-relaxed mb-4">
                  <strong className="text-[#E85520]">
                    UXINDIA 2026 marks the 22nd edition of the conference.
                  </strong>{" "}
                  This year introduces a more focused Design Leadership Week
                  format — moving the conversation from UX execution to design
                  leadership, strategy, AI, entrepreneurship, and meaningful
                  impact.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  The goal is not to collect more talks, but to curate stronger
                  talks. The questions below cover everything from submission
                  categories to logistics. If you still have questions, reach
                  out to{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] font-semibold hover:underline"
                  >
                    team@umo.design
                  </a>
                  .
                </p>
              </div>
            </AnimatedSection>

            {/* FAQ Groups */}
            {faqGroups.map((group) => (
              <FAQGroup key={group.accordionId} {...group} />
            ))}

            {/* Final Note */}
            <AnimatedSection>
              <div className="bg-gradient-to-r from-[#E85520]/10 to-[#E85520]/5 border-l-4 border-[#E85520] p-6 md:p-8 rounded-r-2xl mb-8">
                <p className="font-sans text-base md:text-lg text-[#333333] leading-relaxed mb-3">
                  <strong className="text-[#E85520]">A final note.</strong>{" "}
                  UXINDIA has always been a platform where many first-time
                  speakers found their voice and where experienced leaders shared
                  ideas that shaped the design community.
                </p>
                <p className="font-sans text-base text-[#333333] leading-relaxed">
                  For 2026, the bar is intentionally higher because the format
                  is more focused. Spend time on your proposal. Bring your real
                  experience. The strongest proposals will not be the loudest —
                  they will be the clearest, freshest, and most useful to the
                  audience.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection>
              <div className="bg-[#0D0D0D] text-white p-8 md:p-10 rounded-3xl">
                <p className="font-sans text-xs text-[#E85520] uppercase tracking-[0.25em] mb-3">
                  Ready to apply?
                </p>
                <h3
                  className="text-2xl md:text-3xl mb-4"
                  style={{
                    fontFamily: "'UXILeadershipCondensed'",
                    fontWeight: 500,
                  }}
                >
                  Submit Your Proposal by May 24, 2026
                </h3>
                <p className="font-sans text-white/70 mb-8 max-w-lg">
                  Visit the speaker submission form to share your idea. Questions?
                  Write to us at{" "}
                  <a
                    href="mailto:team@umo.design"
                    className="text-[#E85520] hover:underline"
                  >
                    team@umo.design
                  </a>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/call-for-speakers"
                    className="inline-flex items-center justify-center gap-2 bg-[#E85520] text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#D14910] transition-colors"
                  >
                    Apply to Speak
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
