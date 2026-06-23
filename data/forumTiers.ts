import type { PassTier } from "@/types/pricing";
import { LIMITED_SEATS_NOTE } from "@/types/pricing";
import { ticketUrl, waitlistUrl } from "@/types/format";

const FORUM_DESCRIPTION =
  "2-day access to Keynotes, Workshops, Deep Dives, Panels and Spark Sessions across both days. High tea, lunch and conference swag included.";

const FORUM_INCLUSIONS = [
  "Both days (Sep 26–27) — all sessions",
  "Keynotes, panels, deep dives",
  "Mentorship clinics",
  "Portfolio review clinic",
  "Conference kit & swag",
  "Lunches & high tea, both days",
];

export const forumProfessionalTiers: PassTier[] = [
  {
    id: "forum-seb-pro",
    name: "Rising Leaders Pass",
    badge: "Super Early Bird — Professionals",
    badgeVariant: "default",
    // price: 8999,
    price: 0,
    // saleStarts: "25 May",
    saleStarts: "",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,

    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("risingLeaderForum", "forum-seb-pro"),

    ctaLabel: "Sold Out",
    ctaHref: "#",

    ctaDisabled: true,
    ctaStyle: "muted",
  },
  {
    id: "forum-eb-pro",
    name: "Rising Leaders Pass",
    badge: "Early Bird — Professionals",
    badgeVariant: "default",
    price: 10999,
    saleStarts: "25 May",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,

    ctaLabel: "Register Now →",
    ctaHref: ticketUrl("risingLeaderForum", "forum-eb-pro"),

    // ctaLabel: "Opens Soon",
    // ctaHref: "#",

    // ctaDisabled: true,
    // ctaStyle: "muted",

    isExpanded: true,
  },
  {
    id: "forum-regular-pro",
    name: "Rising Leaders Pass",
    badge: "Regular",
    badgeVariant: "popular",
    price: 12999,
    saleStarts: "26 Jun",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: [...FORUM_INCLUSIONS, "Group discount eligible (4+)"],
    highlight: true,

    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("risingLeaderForum", "forum-regular-pro"),

    ctaLabel: "Opens on 26th June",
    ctaHref: "#",

    ctaStyle: "muted",
    // ctaStyle: "brand",
  },
  {
    id: "forum-last-minute-pro",
    name: "Rising Leaders Pass",
    badge: "Last Minute",
    badgeVariant: "disabled",
    price: 14999,
    saleStarts: "17 Aug",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,
    opensOn: "2026-08-17",

    // ctaLabel: "Register Now →",
    // ctaHref: ticketUrl("risingLeaderForum", "forum-last-minute-pro"),

    ctaLabel: "Opens on 17th Aug",
    ctaHref: "#",

    ctaStyle: "muted",
  },
  {
    id: "forum-walkin-pro",
    name: "Rising Leaders Pass",
    badge: "Walk-in · At the Door",
    badgeVariant: "disabled",
    price: 16999,
    saleStarts: "26 Sep",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,

    ctaLabel: "Available at Venue",
    ctaHref: "#",

    ctaStyle: "muted",
  },
];

export const forumAddOn = {
  id: "addon-tshirt",
  badge: "Add On",
  price: 599,
  title: "T-Shirt",
  description: "Official UXINDIA 2026 conference T-shirt.",
  note: "*Limited units only",

  ctaLabel: "Add to Your Pass →",
  ctaHref: ticketUrl("risingLeaderForum", "addon-tshirt"),

  // ctaLabel: "Available Soon",
  // ctaHref: "#",

  // ctaDisabled: true,
  // ctaStyle: "muted",

  variant: "forum" as const,
};
