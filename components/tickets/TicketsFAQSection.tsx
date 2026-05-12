"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian/Accordion";

type FilterType = "leadership-summit" | "rising-leaders";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  filter: FilterType;
}

const faqItems: FAQItem[] = [
  // Leadership Summit FAQs
  {
    id: "ls-1",
    question: "Who should attend the Leadership Summit?",
    answer:
      "The Design Leadership Summit (September 23–25) is designed for senior audiences including design leaders, CXOs, CDOs, heads of design, senior UX professionals, and strategic decision-makers who are shaping the future of design within their organizations.",
    filter: "leadership-summit",
  },
  {
    id: "ls-2",
    question: "Where is the Leadership Summit held?",
    answer:
      "The Leadership Summit takes place at The Leela Bhartiya City, Bengaluru — a premium venue that reflects the caliber of the conversations and networking opportunities you'll experience.",
    filter: "leadership-summit",
  },
  {
    id: "ls-3",
    question: "What topics are covered at the Leadership Summit?",
    answer:
      "Key themes include strategy for AI-first products and services, systems thinking across products, orgs, and ecosystems, AI + design leadership covering governance, ethics, and enablement, and enterprise case studies from India and global teams.",
    filter: "leadership-summit",
  },
  {
    id: "ls-4",
    question: "What does the Leadership Summit Pass include?",
    answer:
      "Your pass includes 3-day access to all keynotes, talks, and networking sessions. It also includes lunch and exclusive conference swag. Workshop add-ons and networking dinner tickets can be purchased separately.",
    filter: "leadership-summit",
  },
  {
    id: "ls-5",
    question: "Are there workshop add-ons available?",
    answer:
      "Yes. Leadership Summit attendees can add pre-conference full-day workshops and an exclusive networking dinner with industry leaders for an additional fee. These are limited capacity experiences.",
    filter: "leadership-summit",
  },
  // Rising Leaders Forum FAQs
  {
    id: "rlf-1",
    question: "Who should attend the Rising Leaders Forum?",
    answer:
      "The Rising Leaders Forum (September 26–27) is meant for students, early-career designers, young practitioners, and professionals who are building their foundation and moving toward leadership roles in design.",
    filter: "rising-leaders",
  },
  {
    id: "rlf-2",
    question: "Where is the Rising Leaders Forum held?",
    answer:
      "The Rising Leaders Forum takes place at Srishti Institute of Art, Design and Technology, Bengaluru — an inspiring academic environment that fosters learning and growth.",
    filter: "rising-leaders",
  },
  {
    id: "rlf-3",
    question: "What topics are covered at the Rising Leaders Forum?",
    answer:
      "The forum covers foundations for scale: moving from craft to systems, career acceleration and leadership mindset, portfolio and narrative building for AI-aware organizations, and includes mentorship clinics and live portfolio reviews.",
    filter: "rising-leaders",
  },
  {
    id: "rlf-4",
    question: "What's the difference between Professional and Student passes?",
    answer:
      "Both passes offer the same access to all Rising Leaders Forum sessions, networking, and experiences. The Student pass is offered at a discounted rate for currently enrolled students with valid student ID verification.",
    filter: "rising-leaders",
  },
  {
    id: "rlf-5",
    question: "Can senior professionals attend the Rising Leaders Forum?",
    answer:
      "Absolutely. Senior professionals who want to mentor, share insights with emerging talent, or reconnect with foundational design thinking are welcome to attend the Rising Leaders Forum.",
    filter: "rising-leaders",
  },
];

export default function TicketsFAQSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("leadership-summit");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const filteredFAQs = faqItems.filter((item) => item.filter === activeFilter);

  const filters: { id: FilterType; label: string; color: string }[] = [
    { id: "leadership-summit", label: "Leadership Summit", color: "#1B7A6E" },
    { id: "rising-leaders", label: "Rising Leaders Forum", color: "#E6A817" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto">
            Everything you need to know about attending UXINDIA 2026.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center gap-3 mb-10"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className="relative font-sans text-sm font-medium px-5 py-2.5 rounded-full overflow-hidden"
                style={{
                  color: isActive
                    ? filter.id === "rising-leaders"
                      ? "#1A1000"
                      : "#FFFFFF"
                    : "#888888",
                  border: isActive ? "1px solid transparent" : "1px solid #333333",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {/* Animated background */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? filter.color : "transparent",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                <span className="relative z-10">{filter.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue={filteredFAQs[0]?.id}
              className="w-full"
            >
              {filteredFAQs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <AccordionTrigger className="py-6 text-left text-lg md:text-xl font-semibold text-white hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#E85520]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-base md:text-lg leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
