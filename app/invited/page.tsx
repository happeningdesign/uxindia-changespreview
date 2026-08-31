import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

// import { redirect } from "next/navigation";

import InvitedSpeakerSubmissionPage from "./invited-speaker-page";

export const metadata: Metadata = createMetadata({
  title: "Invited Speakers — UXINDIA26",
  description:
    "UXINDIA Design Leadership Week 2026 invites bold, generous leaders to share the real stories behind how you are shaping design in the age of AI.",
  image: "/og/og-invited-speakers.png",
});

export default function SpeakerSubmission() {
  // redirect("/");
  return <InvitedSpeakerSubmissionPage />;
}
