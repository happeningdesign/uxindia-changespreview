import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

import AboutPage from "./about-page";

export const metadata: Metadata = createMetadata({
  title: "About — UXINDIA26",
  description:
    "UXINDIA is a community-led platform built to advance design, strengthen leadership, and create meaningful conversations across the ecosystem.",
});

export default function About() {
  return <AboutPage />;
}
