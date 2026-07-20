import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

// import { redirect } from "next/navigation";

import ContributorsPage from "./contributors-page";

export const metadata: Metadata = createMetadata({
  title: "Contributors — UXINDIA26",
  description:
    "Share your profile information with the UXINDIA team. This page is for speakers, workshop leads, panelists, volunteers, core team members, moderators, mentors, and other conference contributors.",
  image: "/og/og-speakers.jpg",
});

export default function Contributors() {
  // redirect("/");
  return <ContributorsPage />;
}
