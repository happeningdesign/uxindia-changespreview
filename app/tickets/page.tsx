import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import TicketsPage from "./tickets-page";

export const metadata: Metadata = createMetadata({
  title: "Tickets — UXINDIA 2026",
  description:
    "Get your tickets to UXINDIA 2026. Leadership Summit (Sept 22–25) and Rising Leaders Forum (Sept 26–27) in Bengaluru. Early bird pricing available.",
  keywords: [
    "UXINDIA tickets",
    "design conference tickets",
    "Leadership Summit 2026",
    "Rising Leaders Forum",
    "UX conference Bengaluru",
  ],
});

export default function Page() {
  return <TicketsPage />;
}
