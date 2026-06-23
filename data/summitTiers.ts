import type { PassTier } from "@/types/pricing";
import { LIMITED_SEATS_NOTE } from "@/types/pricing";
import { ticketUrl, waitlistUrl } from "@/types/format";

const SUMMIT_DESCRIPTION =
  "2-day access to Grand Keynotes, Deep Dives, Spark Sessions and Panel Discussions. Networking Dinner included on 24th Sept.";

const SUMMIT_INCLUSIONS = [
  "Day 2 (Sep 24) — Grand Ballroom: Keynotes, Panels, Deep Dives",
  "Day 3 (Sep 25) — Two Rooms: Breakout tracks, Roundtables",
  "Networking Dinner, Sep 24",
  "Conference kit & swag",
  "Lunches & high tea, both days",
];

export const summitTiers: PassTier[] = [
  {
    id: "summit-seb",
    name: "Leadership Summit Pass",
    badge: "Super Early Bird",
    badgeVariant: "default",
    // price: 14999,
    price: 0,
    // saleStarts: "25 May",
    saleStarts: "",
    description: SUMMIT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: SUMMIT_INCLUSIONS,
    savingsNote: "Limited Seats",

    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("leadershipSummit", "summit-seb"),

    ctaLabel: "Sold Out In 14 Minutes!",
    ctaHref: "#",

    ctaDisabled: true,
    ctaStyle: "muted",
    // ctaStyle: "brand",
  },
  {
    id: "summit-eb",
    name: "Leadership Summit Pass",
    badge: "Early Bird",
    badgeVariant: "default",
    price: 17999,
    saleStarts: "25 May",
    description: SUMMIT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: SUMMIT_INCLUSIONS,
    savingsNote: "Save ₹10,000 vs. walk-in",
    ctaLabel: "Register Now →",
    ctaHref: ticketUrl("leadershipSummit", "summit-eb"),

    // ctaLabel: "Opens Soon",
    // ctaHref: "#",

    // ctaDisabled: true,
    // ctaStyle: "muted",
    ctaStyle: "brand",

    isExpanded: true,
  },
  {
    id: "summit-regular",
    name: "Leadership Summit Pass",
    badge: "Regular",
    badgeVariant: "popular",
    price: 23999,
    saleStarts: "26 Jun",
    description:
      "2-day access to Grand Keynotes, Deep Dives, Spark Sessions and Panel Discussions. Networking Dinner included on 24th Sept. Group discounts available for 4+ attendees.",
    note: LIMITED_SEATS_NOTE,
    inclusions: [...SUMMIT_INCLUSIONS, "Group discount eligible (4+)"],
    savingsNote: "Save ₹4,000 vs. walk-in",
    highlight: true,
    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("leadershipSummit", "summit-regular"),

    ctaLabel: "Opens Soon",
    ctaHref: "#",

    ctaStyle: "muted",
    // ctaStyle: "brand",
  },
  {
    id: "summit-last-minute",
    name: "Leadership Summit Pass",
    badge: "Last Minute",
    badgeVariant: "disabled",
    price: 25999,
    saleStarts: "17 Aug",
    description: SUMMIT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: SUMMIT_INCLUSIONS,
    opensOn: "2026-08-17",

    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("leadershipSummit", "summit-last-minute"),

    ctaLabel: "Opens Soon",
    ctaHref: "#",

    ctaStyle: "muted",
  },
  {
    id: "summit-walkin",
    name: "Leadership Summit Pass",
    badge: "Walk-in · At the Door",
    badgeVariant: "disabled",
    price: 27999,
    saleStarts: "23 Sep",
    description: SUMMIT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: SUMMIT_INCLUSIONS,

    ctaLabel: "Available at Venue",
    ctaHref: "#",

    ctaStyle: "muted",
  },
  {
    id: "summit-grand-conf",
    name: "Grand Conf Pass — Sep 24",
    badge: "Single Day",
    badgeVariant: "default",
    price: 21999,
    saleStarts: "26 Jun",
    description:
      "Single-day access to the Grand Ballroom on Sep 24. Keynotes, panels and networking dinner included.",
    note: LIMITED_SEATS_NOTE,
    inclusions: [
      "Sep 24 — Grand Ballroom only",
      "Networking Dinner, Sep 24",
      "Conference kit",
      "Lunch & high tea",
    ],

    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("leadershipSummit", "summit-grandconf"),

    ctaLabel: "Opens Soon",
    ctaHref: "#",

    ctaDisabled: true,
    ctaStyle: "muted",
  },
  {
    id: "summit-vip",
    name: "VIP Pass — All 3 Days",
    badge: "VIP · Exclusive",
    badgeVariant: "vip",
    price: 34999,
    saleStarts: "25 May",
    description:
      "Full 3-day access with exclusive privileges. Includes Speakers Lounge and front-row reserved seating.",
    note: LIMITED_SEATS_NOTE,
    inclusions: [
      "Day 1 (Sep 23) Workshop Day — all workshops",
      "Day 2 (Sep 24) Grand Ballroom",
      "Day 3 (Sep 25) Two Rooms",
      "Networking Dinner, Sep 24",
      "Reserved front-row seating",
      "VIP Speakers Lounge access",
      "1-on-1 networking facilitation",
      "Conference kit & swag",
      "Lunches & high tea, all days",
    ],

    ctaLabel: "Apply for VIP →",
    ctaHref: ticketUrl("leadershipSummit", "summit-vip"),

    // ctaLabel: "Opens Soon",
    // ctaHref: "#",

    ctaStyle: "vip",
    cardStyle: "vip",
  },
];

export const summitAddOn = {
  id: "addon-workshop",
  badge: "Add On",
  price: 8999,
  saleStarts: "25 May",
  title: "Workshops",
  description:
    "Select any 2 workshops on Day 1 (Sep 23). Limited seats per workshop. Can be added to any Summit pass.",
  note: LIMITED_SEATS_NOTE,

  ctaLabel: "Add to Your Pass →",
  ctaHref: ticketUrl("leadershipSummit", "addon-workshop"),

  // ctaLabel: "Opens Soon",
  // ctaHref: "#",

  // ctaDisabled: true,
  // ctaStyle: "muted",

  variant: "summit" as const,
};
