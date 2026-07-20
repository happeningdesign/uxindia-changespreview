import { createMetadata } from "@/lib/seo";
import SpeakerChecklistPage from "./speaker-checklist-page";

export const metadata = createMetadata({
  title: "Speaker Checklist — UXINDIA 2026",
  description:
    "Everything selected UXINDIA 2026 speakers need to know — from arriving at the venue to getting your slides ready and navigating the conference.",
  image: "/og/og-default.jpg",
  keywords: [
    "UXINDIA 2026 speaker",
    "speaker checklist",
    "design conference speaker",
    "UXINDIA speaker guide",
  ],
});

export default function Page() {
  return <SpeakerChecklistPage />;
}
