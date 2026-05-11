"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PolicySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const policies = [
    {
      id: "group-discounts",
      title: "Group Discounts",
      content:
        "For group discounts, please get in touch with Jabeen at team@umo.design. She will assist you in coordinating group registrations and ensuring a seamless experience for your team.",
    },
    {
      id: "cancellation",
      title: "Cancellation Policy",
      content:
        "Attendees should be aware that there will be no refunds for cancellations, regardless of the timing. Once registered, the ticket purchase is final.",
    },
    {
      id: "partial-refund",
      title: "Partial Refund Option",
      content:
        "Unfortunately, we do not offer partial refunds. All cancellations are non-refundable.",
    },
    {
      id: "ticket-transfers",
      title: "Ticket Transfers",
      content:
        "If you can't attend, you can transfer your ticket to another person up to 10 days before the event at no additional cost.",
    },
    {
      id: "emergency",
      title: "Emergency Situations",
      content:
        "In the case of unforeseen emergencies (e.g., medical emergencies, natural disasters), attendees can apply for a partial refund with appropriate documentation.",
    },
    {
      id: "event-cancellation",
      title: "Event Cancellation",
      content:
        "If the UXINDIA conference is canceled or postponed due to unforeseen circumstances, the registration will be rescheduled to the revised date without additional charges.",
    },
    {
      id: "partial-attendance",
      title: "Partial Attendance",
      content:
        "If you attend only part of the event, no refunds will be provided, but you can request access to recorded sessions where available.",
    },
    {
      id: "special-considerations",
      title: "Special Considerations",
      content:
        "For group bookings and corporate tickets, customized cancellation terms may apply. Contact our support team for more information.",
    },
    {
      id: "refund-processing",
      title: "Refund Processing Time",
      content:
        "Refunds will be processed within 30-45 business days of the cancellation request being approved.",
    },
    {
      id: "note",
      title: "Note",
      content:
        "All cancellation requests must be submitted in writing via email to the event organizers. Processing fees and taxes are non-refundable.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
            Policies <span className="text-[#E85520]">&amp; Terms</span>
          </h2>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto">
            Important information about registrations, cancellations, and event policies.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {policies.map((policy) => (
            <motion.div
              key={policy.id}
              variants={itemVariants}
              className="p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style={{ backgroundColor: "#0F0F0F" }}
            >
              <h3 className="font-sans font-semibold text-white text-lg mb-3">
                {policy.title}
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
