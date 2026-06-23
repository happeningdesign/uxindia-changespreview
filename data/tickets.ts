// // UXINDIA 2026 Tickets Configuration
// // update the relevant ISO datetime string and redeploy.

// // Preset date configurations (separate dates for LS and RLF)
// const TickerDates = {
//   // Leadership Summit SEB Start
//   lsSebStart: "2026-12-01T00:00:00Z",
//   // Leadership Summit SEB Sold Out
//   lsSebSoldOut: "2026-12-15T00:00:00Z",
//   // Leadership Summit EB Start
//   lsEbStart: "2026-12-15T00:00:00Z",
//   // Leadership Summit EB Sold Out
//   lsEbSoldOut: "2026-12-30T00:00:00Z",
//   //  Rising Leaders Summit SEB Start
//   rlfSebStart: "2026-12-01T00:00:00Z",
//   //  Rising Leaders Summit SEB Sold Out
//   rlfSebSoldOut: "2026-12-15T00:00:00Z",
//   //  Rising Leaders Summit EB Start
//   rlfEbStart: "2026-12-15T00:00:00Z",
//   //  Rising Leaders Summit EB Sold Out
//   rlfEbSoldOut: "2026-12-30T00:00:00Z",
// };

// const dates = TickerDates;

// export type TierState = "upcoming" | "active" | "sold_out" | "expired";

// export type CardConfig = {
//   id: string;
//   type: "addon" | "info";
//   label: string;
//   price?: string;
//   description: string;
// };

// export type TicketTier = {
//   id: string;
//   name: string;
//   order: number;
//   saleStart: string;
//   soldOutAt: string;
//   saleEnd: string;
//   price: string;
//   description: string;
//   additionalCards: CardConfig[];
// };

// export type EventConfig = {
//   id: string;
//   name: string;
//   track: string;
//   dates: string;
//   venue: string;
//   externalBuyUrl: string;
//   themeColor: string;
//   themeBgColor: string;
//   tierCardColor: string; // Lighter color for tier cards to distinguish from event header
//   textColor: string;
//   tiers: TicketTier[];
// };

// export const leadershipSummit: EventConfig = {
//   id: "leadership-summit",
//   name: "Leadership Summit",
//   track: "Track 1",
//   dates: "23–25 Sept",
//   venue: "The Leela Bhartiya City, Bengaluru",
//   externalBuyUrl: "https://example.com/buy-ls",
//   themeColor: "#1B7A6E",
//   themeBgColor: "#1B7A6E",
//   tierCardColor: "#114F47", // Darker teal for tier cards
//   textColor: "#FFFFFF",
//   tiers: [
//     {
//       id: "ls-seb",
//       name: "Super Early Bird",
//       order: 0,
//       saleStart: dates.lsSebStart,
//       soldOutAt: dates.lsSebSoldOut,
//       saleEnd: "2026-06-30T23:59:59Z",
//       price: "₹14,999",
//       description:
//         "3-Day Access to Grand Keynotes, Deep Dives, Spark Sessions, and Panel Discussions. Includes the High tea lunch, Networking Dinner on Day 2 and conference swag.",
//       additionalCards: [
//         {
//           id: "ls-workshop",
//           type: "addon",
//           label: "Workshops",
//           price: "₹9,999",
//           description:
//             "Select any 2 workshops on Day 1. Limited seats per workshop.",
//         },
//         {
//           id: "ls-tshirt",
//           type: "addon",
//           label: "T-Shirt",
//           price: "₹899",
//           description: "Official UXINDIA 2026 conference T-shirt.",
//         },
//       ],
//     },
//     {
//       id: "ls-eb",
//       name: "Early Bird",
//       order: 1,
//       saleStart: dates.lsEbStart,
//       soldOutAt: dates.lsEbSoldOut,
//       saleEnd: "2026-08-15T23:59:59Z",
//       price: "₹17,999",
//       description:
//         "3-Day Access to Grand Keynotes, Deep Dives, Spark Sessions, and Panel Discussions. Includes the High tea lunch, Networking Dinner on Day 2 and conference swag.",
//       additionalCards: [
//         {
//           id: "ls-eb-workshop",
//           type: "addon",
//           label: "Workshops",
//           price: "₹9,999",
//           description:
//             "Select any 2 workshops on Day 1. Limited seats per workshop.",
//         },
//         {
//           id: "ls-eb-tshirt",
//           type: "addon",
//           label: "T-Shirt",
//           price: "₹899",
//           description: "Official UXINDIA 2026 conference T-shirt.",
//         },
//       ],
//     },
//   ],
// };

// export const risingLeadersForum: EventConfig = {
//   id: "rising-leaders-forum",
//   name: "Rising Leaders Forum",
//   track: "Track 2",
//   dates: "26–27 Sept",
//   venue: "Srishti Institute of Art, Design and Technology, Bengaluru",
//   externalBuyUrl: "https://example.com/buy-rlf",
//   themeColor: "#E6A817",
//   themeBgColor: "#F5BF42",
//   tierCardColor: "#DCAC3B", // Lighter amber/gold for tier cards
//   textColor: "#1A1000",
//   tiers: [
//     {
//       id: "rlf-seb-full",
//       name: "Super Early Bird — Professionals",
//       order: 0,
//       saleStart: dates.rlfSebStart,
//       soldOutAt: dates.rlfSebSoldOut,
//       saleEnd: "2026-06-30T23:59:59Z",
//       price: "₹8,999",
//       description:
//         "2-day access to keynotes, workshops, deep dives, panels, and Spark sessions. Includes high tea, lunch, and conference swag.",
//       additionalCards: [],
//     },
//     {
//       id: "rlf-seb-day",
//       name: "Super Early Bird — Students",
//       order: 1,
//       saleStart: dates.rlfSebStart,
//       soldOutAt: dates.rlfSebSoldOut,
//       saleEnd: "2026-06-30T23:59:59Z",
//       price: "₹2,599",
//       description:
//         "2-day access to keynotes, workshops, deep dives, panels, and Spark sessions. Includes high tea, lunch, and conference swag.",
//       additionalCards: [],
//     },
//     {
//       id: "rlf-eb-full",
//       name: "Early Bird — Professionals",
//       order: 2,
//       saleStart: dates.rlfEbStart,
//       soldOutAt: dates.rlfEbSoldOut,
//       saleEnd: "2026-08-15T23:59:59Z",
//       price: "₹10,499",
//       description:
//         "2-day access to keynotes, workshops, deep dives, panels, and Spark sessions. Includes high tea, lunch, and conference swag.",
//       additionalCards: [],
//     },
//     {
//       id: "rlf-eb-day",
//       name: "Early Bird — Students",
//       order: 3,
//       saleStart: dates.rlfEbStart,
//       soldOutAt: dates.rlfEbSoldOut,
//       saleEnd: "2026-08-15T23:59:59Z",
//       price: "₹3,299",
//       description:
//         "2-day access to keynotes, workshops, deep dives, panels, and Spark sessions. Includes high tea, lunch, and conference swag.",
//       additionalCards: [],
//     },
//   ],
// };

// export const events: EventConfig[] = [leadershipSummit, risingLeadersForum];

// // State derivation function
// export function getTierState(tier: TicketTier, now: Date): TierState {
//   const start = new Date(tier.saleStart);
//   const soldOut = new Date(tier.soldOutAt);
//   const end = new Date(tier.saleEnd);

//   if (now >= soldOut) return "sold_out";
//   if (now < start) return "upcoming";
//   if (now > end) return "expired";
//   return "active";
// }

// // Format date for display (e.g., "15 May, 10:00 AM IST")
// export function formatOpeningDate(dateString: string): string {
//   const date = new Date(dateString);
//   return (
//     date.toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//       timeZone: "Asia/Kolkata",
//     }) + " IST"
//   );
// }
