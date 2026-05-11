// UXINDIA 2026 Tickets Configuration
// All tier windows live here. To change when a tier opens, closes, or sells out — 
// update the relevant ISO datetime string and redeploy.

// ============================================================================
// DEMO PRESETS - Change this value to show different states to stakeholders
// ============================================================================
// 1 = COMING SOON           - All tickets show "Coming Soon" with marquee
// 2 = SUPER EARLY LIVE      - Super Early Bird active for both, Early Bird coming soon
// 3 = LS SOLD OUT, RLF LIVE - LS Super Early sold out + LS Early Bird live, RLF Super Early still live
// 4 = BOTH SEB SOLD OUT     - Both Super Early Birds sold out, RLF Early Bird live, LS Early Bird live
// 5 = BOTH EARLY BIRDS LIVE - Both Super Early Birds sold out, Both Early Birds active
// ============================================================================
const DEMO_PRESET = 2; // <-- CHANGE THIS NUMBER (1-5)
// ============================================================================

// Preset date configurations (separate dates for LS and RLF)
const PRESETS = {
  1: { // COMING SOON - All tickets coming soon
    lsSebStart: "2026-12-01T00:00:00Z",
    lsSebSoldOut: "2026-12-15T00:00:00Z",
    lsEbStart: "2026-12-15T00:00:00Z",
    lsEbSoldOut: "2026-12-30T00:00:00Z",
    rlfSebStart: "2026-12-01T00:00:00Z",
    rlfSebSoldOut: "2026-12-15T00:00:00Z",
    rlfEbStart: "2026-12-15T00:00:00Z",
    rlfEbSoldOut: "2026-12-30T00:00:00Z",
  },
  2: { // SUPER EARLY LIVE - Both Super Early Birds active
    lsSebStart: "2026-01-01T00:00:00Z",
    lsSebSoldOut: "2026-12-01T00:00:00Z",
    lsEbStart: "2026-12-01T00:00:00Z",
    lsEbSoldOut: "2026-12-30T00:00:00Z",
    rlfSebStart: "2026-01-01T00:00:00Z",
    rlfSebSoldOut: "2026-12-01T00:00:00Z",
    rlfEbStart: "2026-12-01T00:00:00Z",
    rlfEbSoldOut: "2026-12-30T00:00:00Z",
  },
  3: { // LS SOLD OUT - LS Super Early sold out + LS Early Bird live, RLF Super Early still live
    lsSebStart: "2026-01-01T00:00:00Z",
    lsSebSoldOut: "2026-01-02T00:00:00Z",
    lsEbStart: "2026-01-01T00:00:00Z",
    lsEbSoldOut: "2026-12-30T00:00:00Z",
    rlfSebStart: "2026-01-01T00:00:00Z",
    rlfSebSoldOut: "2026-12-01T00:00:00Z",
    rlfEbStart: "2026-12-01T00:00:00Z",
    rlfEbSoldOut: "2026-12-30T00:00:00Z",
  },
  4: { // BOTH SEB SOLD OUT - Both Super Early Birds sold out, Both Early Birds live
    lsSebStart: "2026-01-01T00:00:00Z",
    lsSebSoldOut: "2026-01-02T00:00:00Z",
    lsEbStart: "2026-01-01T00:00:00Z",
    lsEbSoldOut: "2026-12-30T00:00:00Z",
    rlfSebStart: "2026-01-01T00:00:00Z",
    rlfSebSoldOut: "2026-01-02T00:00:00Z",
    rlfEbStart: "2026-01-01T00:00:00Z",
    rlfEbSoldOut: "2026-12-30T00:00:00Z",
  },
  5: { // BOTH EARLY BIRDS LIVE (same as 4, kept for clarity)
    lsSebStart: "2026-01-01T00:00:00Z",
    lsSebSoldOut: "2026-01-02T00:00:00Z",
    lsEbStart: "2026-01-01T00:00:00Z",
    lsEbSoldOut: "2026-12-30T00:00:00Z",
    rlfSebStart: "2026-01-01T00:00:00Z",
    rlfSebSoldOut: "2026-01-02T00:00:00Z",
    rlfEbStart: "2026-01-01T00:00:00Z",
    rlfEbSoldOut: "2026-12-30T00:00:00Z",
  },
};

const dates = PRESETS[DEMO_PRESET as keyof typeof PRESETS];

export type TierState = 'upcoming' | 'active' | 'sold_out' | 'expired';

export type CardConfig = {
  id: string;
  type: 'addon' | 'info';
  label: string;
  price?: string;
  description: string;
};

export type TicketTier = {
  id: string;
  name: string;
  order: number;
  saleStart: string;
  soldOutAt: string;
  saleEnd: string;
  price: string;
  description: string;
  additionalCards: CardConfig[];
};

export type EventConfig = {
  id: string;
  name: string;
  track: string;
  dates: string;
  venue: string;
  externalBuyUrl: string;
  themeColor: string;
  themeBgColor: string;
  textColor: string;
  tiers: TicketTier[];
};

export const leadershipSummit: EventConfig = {
  id: "leadership-summit",
  name: "Leadership Summit",
  track: "Track 1",
  dates: "23–25 Sept",
  venue: "The Leela Bhartiya City, Bengaluru",
  externalBuyUrl: "https://example.com/buy-ls",
  themeColor: "#1B7A6E",
  themeBgColor: "#1B7A6E",
  textColor: "#FFFFFF",
  tiers: [
    {
      id: "ls-seb",
      name: "Super Early Bird",
      order: 0,
      saleStart: dates.lsSebStart,
      soldOutAt: dates.lsSebSoldOut,
      saleEnd: "2026-06-30T23:59:59Z",
      price: "₹9,998",
      description: "3-Day Access to Grand Keynotes, Deep Dives, Spark Sessions, and Panel Discussions. Includes the High tea lunch, Networking Dinner on Day 2 and conference swag.",
      additionalCards: [
        {
          id: "ls-workshop",
          type: "addon",
          label: "Workshops",
          price: "₹5,000",
          description: "Pre-conference full-day workshop. Limited seats."
        },
        {
          id: "ls-dinner",
          type: "addon",
          label: "Networking Dinner",
          price: "₹5,000",
          description: "Exclusive networking dinner with industry leaders."
        }
      ]
    },
    {
      id: "ls-eb",
      name: "Early Bird",
      order: 1,
      saleStart: dates.lsEbStart,
      soldOutAt: dates.lsEbSoldOut,
      saleEnd: "2026-08-15T23:59:59Z",
      price: "₹17,998",
      description: "3-Day Access to Grand Keynotes, Deep Dives, Spark Sessions, and Panel Discussions. Includes the High tea lunch, Networking Dinner on Day 2 and conference swag.",
      additionalCards: [
        {
          id: "ls-eb-workshop",
          type: "addon",
          label: "Workshops",
          price: "₹5,000",
          description: "Pre-conference full-day workshop. Limited seats."
        },
        {
          id: "ls-eb-dinner",
          type: "addon",
          label: "Networking Dinner",
          price: "₹5,000",
          description: "Exclusive networking dinner with industry leaders."
        }
      ]
    }
  ]
};

export const risingLeadersForum: EventConfig = {
  id: "rising-leaders-forum",
  name: "Rising Leaders Forum",
  track: "Track 2",
  dates: "26–27 Sept",
  venue: "Srishti Institute of Art, Design and Technology, Bengaluru",
  externalBuyUrl: "https://example.com/buy-rlf",
  themeColor: "#E6A817",
  themeBgColor: "#E6A817",
  textColor: "#1A1000",
  tiers: [
    {
      id: "rlf-seb-full",
      name: "Super Early Bird — Professionals",
      order: 0,
      saleStart: dates.rlfSebStart,
      soldOutAt: dates.rlfSebSoldOut,
      saleEnd: "2026-06-30T23:59:59Z",
      price: "₹7,998",
      description: "Workshops, deep dives, panels, and 15 spark sessions across 2 days. Daily lunch and conference swag included.",
      additionalCards: []
    },
    {
      id: "rlf-seb-day",
      name: "Super Early Bird — Students",
      order: 1,
      saleStart: dates.rlfSebStart,
      soldOutAt: dates.rlfSebSoldOut,
      saleEnd: "2026-06-30T23:59:59Z",
      price: "₹2,998",
      description: "Workshops, deep dives, panels, and 15 spark sessions across 2 days. Daily lunch and conference swag included.",
      additionalCards: []
    },
    {
      id: "rlf-eb-full",
      name: "Early Bird — Professionals",
      order: 2,
      saleStart: dates.rlfEbStart,
      soldOutAt: dates.rlfEbSoldOut,
      saleEnd: "2026-08-15T23:59:59Z",
      price: "₹9,998",
      description: "Workshops, deep dives, panels, and 15 spark sessions across 2 days. Daily lunch and conference swag included.",
      additionalCards: []
    },
    {
      id: "rlf-eb-day",
      name: "Early Bird — Students",
      order: 3,
      saleStart: dates.rlfEbStart,
      soldOutAt: dates.rlfEbSoldOut,
      saleEnd: "2026-08-15T23:59:59Z",
      price: "₹3,998",
      description: "Workshops, deep dives, panels, and 15 spark sessions across 2 days. Daily lunch and conference swag included.",
      additionalCards: []
    }
  ]
};

export const events: EventConfig[] = [leadershipSummit, risingLeadersForum];

// State derivation function
export function getTierState(tier: TicketTier, now: Date): TierState {
  const start = new Date(tier.saleStart);
  const soldOut = new Date(tier.soldOutAt);
  const end = new Date(tier.saleEnd);

  if (now >= soldOut) return 'sold_out';
  if (now < start) return 'upcoming';
  if (now > end) return 'expired';
  return 'active';
}

// Format date for display (e.g., "15 May, 10:00 AM IST")
export function formatOpeningDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  }) + ' IST';
}
