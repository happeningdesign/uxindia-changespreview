import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import DesignPitchPageClient from "./page-client";

export const metadata: Metadata = createMetadata({
  title: "Design Pitch 2026 — Design the Future. Build What Matters.",
  description:
    "Design Pitch an initiative of UMO Design is where the people answering that question- students, designers, engineers, researchers, and founders.",
  image: "/og/og-design-pitch.png",
});

export default function DesignPitchPage() {
  return <DesignPitchPageClient />;
}
