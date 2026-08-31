"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/attendeeChecklist";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-page/10 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.q} className="border-b border-page/8 last:border-b-0">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-cream/60 md:px-6"
              >
                <span className="font-sans flex-1 text-[0.95rem] font-medium leading-snug text-page">
                  {faq.q}
                </span>
                <Plus
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-brand" : "text-page/40"
                  }`}
                />
              </button>
            </h3>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="font-sans px-5 pb-5 pr-12 text-sm leading-relaxed text-page/60 md:px-6">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
