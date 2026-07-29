import { createMetadata } from "@/lib/seo";
import SpeakerChecklistPage from "./speaker-checklist-page";

export const metadata = createMetadata({
  title: "Know Before You Go — UXINDIA 2026",
  description:
    "Everything you need to prepare for UXINDIA 2026 — registration and check-in, both venues, on-site essentials, speaker logistics, international travel tips, code of conduct and FAQs.",
  image: "/og/og-default.jpg",
  keywords: [
    "UXINDIA 2026 know before you go",
    "UXINDIA attendee guide",
    "UXINDIA 2026 venue",
    "design conference Bengaluru",
    "UXINDIA speaker guide",
  ],
});

export default function Page() {
  return <SpeakerChecklistPage />;
}
