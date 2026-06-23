import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ux-india.org",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://2026.ux-india.org/tickets",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.ux-india.org/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    // {
    //   url: "https://2026.ux-india.org/call-for-speakers",
    //   lastModified: new Date(),
    //   priority: 0.9,
    // },
    {
      url: "https://2026.ux-india.org/speaker-faqs",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://2026.ux-india.org/founder-story",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://2026.ux-india.org/code-of-conduct",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://2026.ux-india.org/privacy-policy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://2026.ux-india.org/terms",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
