import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import ConvinceYourManagerClient from "./page-client";

export const metadata: Metadata = createMetadata({
  title: "Convince Your Manager — UXINDIA 2026",
  description:
    "A business case for attending UXINDIA 2026. Download a ready-to-send manager approval letter and get answers to common questions.",
});

export default function ConvinceYourManagerPage() {
  return <ConvinceYourManagerClient />;
}
