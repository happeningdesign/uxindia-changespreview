import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

import CxoDinnerPage from "./cxo-dinner-page";

export const metadata: Metadata = createMetadata({
  title: "CXO Networking Dinner — UXINDIA26",
  description:
    "An invite-only evening for design & technology leaders. 23 September 2026, Falak, The Leela Bhartiya City, Bengaluru. Curated by Happening.",
  image: "/og/og-default.jpg",
});

export default function CxoDinner() {
  return <CxoDinnerPage />;
}
