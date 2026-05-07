import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import SpeakersFAQPage from "./speakers-faq-page";

export const metadata: Metadata = createMetadata({
  title: "Speaker FAQ — UXINDIA26",
  description:
    "Everything you need to know about submitting a talk, workshop, or panel proposal for UXINDIA Design Leadership Week 2026. Deadline: May 24, 2026.",
});

export default function SpeakersFAQ() {
  return <SpeakersFAQPage />;
}
