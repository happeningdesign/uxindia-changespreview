"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian/Accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqItems = [
  {
    id: "item-1",
    question: "What if I can't attend all 5 days?",
    answer:
      "Many attendees choose either the Leadership Summit or Rising Leaders Forum based on their goals. Session recordings and key assets help you catch up.",
  },
  {
    id: "item-2",
    question: "Will sessions be recorded?",
    answer:
      "Yes. Select keynotes, panels, and sessions will be recorded and made available to attendees.",
  },
  {
    id: "item-3",
    question: "How selective is the speaker curation?",
    answer:
      "We prioritize depth, originality, and impact over volume. We aim for a focused, high-signal program.",
  },
  {
    id: "item-4",
    question: "No fixed sponsorship packages — how do we know what we get?",
    answer:
      "We start from your goals, define formats and visibility together, and document clear deliverables before we begin.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#0D0D0D] leading-[1.1]"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
            }}
          >
            Questions Before You <span className="text-[#E85520]">Commit?</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqItems.map((item, index) => (
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
        </motion.div>
      </div>
    </section>
  );
}
