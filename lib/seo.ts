import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title = "UXINDIA26 — Where Design Leads",
  description = "India's premier design leadership conference. Theatre talks, curated roundtables, and connections that last. Bengaluru, September 2026.",
  image = "/og/og-default.jpg",
  keywords = [
    "UX India",
    "design conference",
    "design leadership",
    "UX conference India",
    "Bengaluru 2026",
  ],
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,

    openGraph: {
      title,
      description,
      type: "website",
      siteName: "UXINDIA26",
      locale: "en_IN",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
