import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

import SpeakerSubmissionPage from "./speaker-page";

export const metadata: Metadata = createMetadata({
  title: "Call For Speakers — UXINDIA26",
  description:
    "UXINDIA Design Leadership Week 2026 invites bold, generous leaders to share the real stories behind how you are shaping design in the age of AI.",
  image: "/og/og-speakers.jpg",
});

export default function About() {
  return <SpeakerSubmissionPage />;
}
