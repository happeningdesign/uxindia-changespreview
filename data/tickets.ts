// UXINDIA 2026 Tickets Configuration
// All tier windows live here. To change when a tier opens, closes, or sells out — 
// update the relevant ISO datetime string and redeploy.

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

// Tickets are LIVE now - saleStart set to past date for immediate activation
// Adjust these dates for actual launch

export const leadershipSummit: EventConfig = {
  id: "leadership-summit",
  name: "Leadership Summit",
  track: "Track 1",
  dates: "22–25 Sept",
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
      saleStart: "2026-01-01T00:00:00Z",  // Already open
      soldOutAt: "2026-06-30T23:59:59Z",  // Matches saleEnd
      saleEnd: "2026-06-30T23:59:59Z",
      price: "₹9,998",
      description: "3-day access to all keynotes, talks, and networking sessions. Includes lunch and conference swag.",
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
      saleStart: "2026-07-01T00:00:00Z",
      soldOutAt: "2026-08-15T23:59:59Z",
      saleEnd: "2026-08-15T23:59:59Z",
      price: "₹17,998",
      description: "3-day access to all keynotes, talks, and networking sessions.",
      additionalCards: []
    },
    {
      id: "ls-ga",
      name: "General Admission",
      order: 2,
      saleStart: "2026-08-16T00:00:00Z",
      soldOutAt: "2026-09-20T23:59:59Z",
      saleEnd: "2026-09-20T23:59:59Z",
      price: "₹22,998",
      description: "3-day access to all keynotes, talks, and networking sessions.",
      additionalCards: []
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
      saleStart: "2026-01-01T00:00:00Z",  // Already open
      soldOutAt: "2026-06-30T23:59:59Z",  // Matches saleEnd
      saleEnd: "2026-06-30T23:59:59Z",
      price: "₹7,998",
      description: "Full 2-day access to all sessions.",
      additionalCards: []
    },
    {
      id: "rlf-seb-day",
      name: "Super Early Bird — Students",
      order: 1,
      saleStart: "2026-01-01T00:00:00Z",  // Already open
      soldOutAt: "2026-06-30T23:59:59Z",  // Matches saleEnd
      saleEnd: "2026-06-30T23:59:59Z",
      price: "₹2,998",
      description: "Single day access.",
      additionalCards: []
    },
    {
      id: "rlf-eb-full",
      name: "Early Bird — Full Pass",
      order: 2,
      saleStart: "2026-07-01T00:00:00Z",
      soldOutAt: "2026-08-15T23:59:59Z",
      saleEnd: "2026-08-15T23:59:59Z",
      price: "₹9,998",
      description: "Full 2-day access to all sessions.",
      additionalCards: []
    },
    {
      id: "rlf-eb-day",
      name: "Early Bird — Day Pass",
      order: 3,
      saleStart: "2026-07-01T00:00:00Z",
      soldOutAt: "2026-08-15T23:59:59Z",
      saleEnd: "2026-08-15T23:59:59Z",
      price: "₹3,998",
      description: "Single day access.",
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
