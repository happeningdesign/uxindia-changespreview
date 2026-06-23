import type { FAQItem } from "@/types/pricing";

export const summitFaq: FAQItem[] = [
  {
    question: "Who should attend the Leadership Summit?",
    answer:
      "Senior design professionals, heads of design, CXOs, CDOs, and strategic decision-makers shaping design inside their organisations.",
  },
  {
    question: "Where is the Leadership Summit held?",
    answer: "The Leela Bhartiya City, Bengaluru — 23–25 September 2026.",
  },
  {
    question: "What topics are covered at the Leadership Summit?",
    answer:
      "Grand keynotes, deep dives, spark sessions, panel discussions, and leadership-focused breakouts across the Grand Ballroom and breakout rooms.",
  },
  {
    question: "What does the Leadership Summit Pass include?",
    answer:
      "2-day access to main conference programming, networking dinner on 24 Sept, lunches and high tea, and conference swag. VIP passes include workshop day and additional privileges.",
  },
  {
    question: "Are there workshop add-ons available?",
    answer:
      "Yes. Day 1 workshops (Sep 23) can be added to any Summit pass for ₹8,999 + GST. Workshop day is fully included in the VIP Pass.",
  },
];

export const forumFaq: FAQItem[] = [
  {
    question: "Who should attend the Rising Leaders Forum?",
    answer:
      "Practitioners, early-career designers, and full-time students building craft, leadership mindset, and career momentum in design.",
  },
  {
    question: "Where is the Rising Leaders Forum held?",
    answer:
      "Srishti Institute of Art, Design and Technology, Bengaluru — 26–27 September 2026.",
  },
  {
    question: "What is included in the Rising Leaders Pass?",
    answer:
      "2-day access to keynotes, workshops, deep dives, panels, and spark sessions. High tea, lunch, and conference swag are included.",
  },
  {
    question: "Is there a student pass?",
    answer:
      "Yes. Full-time students can register with a valid student ID. Student passes start from ₹3,299 + GST during Early Bird.",
  },
  {
    question: "Can I attend both tracks?",
    answer:
      "Yes. You can register for the Leadership Summit and Rising Leaders Forum separately, or enquire about the Full Week Pass bundle.",
  },
];

/** @deprecated Use summitFaq / forumFaq with track tabs */
export const ticketsFaq: FAQItem[] = summitFaq;

export type PolicySection = {
  title: string;
  body: string;
};

export const policySections: PolicySection[] = [
  {
    title: "Group Discounts",
    body: "For group discounts, please get in touch with Jabeen at team@umo.design. She will assist you in coordinating group registrations and ensuring a seamless experience for your team.",
  },
  {
    title: "Cancellation Policy",
    body: "Attendees should be aware that there will be no refunds for cancellations, regardless of the timing. Once registered, the ticket purchase is final.",
  },
  {
    title: "Partial Refund Option",
    body: "Unfortunately, we do not offer partial refunds. All cancellations are non-refundable.",
  },
  {
    title: "Ticket Transfers",
    body: "If you can't attend, you can transfer your ticket to another person up to 10 days before the event at no additional cost.",
  },
  {
    title: "Emergency Situations",
    body: "In the case of unforeseen emergencies (e.g., medical emergencies, natural disasters), attendees can apply for a partial refund with appropriate documentation.",
  },
  {
    title: "Event Cancellation",
    body: "If the UXINDIA conference is canceled or postponed due to unforeseen circumstances, the registration will be rescheduled to the revised date without additional charges.",
  },
  {
    title: "Partial Attendance",
    body: "If you attend only part of the event, no refunds will be provided, but you can request access to recorded sessions where available.",
  },
  {
    title: "Special Considerations",
    body: "For group bookings and corporate tickets, customized cancellation terms may apply. Contact our support team for more information.",
  },
  // {
  //   title: "Refund Processing Time",
  //   body: "Refunds will be processed within 30–45 business days of the cancellation request being approved.",
  // },
  // {
  //   title: "Note",
  //   body: "All cancellation requests must be submitted in writing via email to the event organizers. Processing fees and taxes are non-refundable.",
  // },
];
