export type PartnerTier =
  | "diamond"
  | "platinum"
  | "gold"
  | "silver"
  | "media"
  | "community";

export interface Partner {
  name: string;
  logo: string;
  description?: string;
  url?: string;
  tier: PartnerTier;
}

export const partnerTiers: {
  id: PartnerTier;
  label: string;
  description: string;
}[] = [
  {
    id: "diamond",
    label: "Diamond Partners",
    description:
      "Founding partners who shape the vision and reach of UXINDIA 2026.",
  },
  {
    id: "platinum",
    label: "Platinum Partners",
    description:
      "Strategic partners driving the design leadership conversation forward.",
  },
  {
    id: "gold",
    label: "Gold Partners",
    description: "Partners who champion craft, community, and design excellence.",
  },
  {
    id: "silver",
    label: "Silver Partners",
    description: "Partners supporting the next generation of design leaders.",
  },
  {
    id: "media",
    label: "Media Partners",
    description:
      "Media organisations amplifying UXINDIA's reach across the ecosystem.",
  },
  {
    id: "community",
    label: "Community Partners",
    description:
      "Communities and organisations helping grow design culture across India.",
  },
];

export const partners: Partner[] = [
  // Diamond
  {
    name: "Happening",
    logo: "/images/logos/happening.webp",
    description:
      "Happening is a global UX Design Studio creating digital products and experiences for companies around the world to leap forward.",
    url: "https://happening.xyz",
    tier: "diamond",
  },
  // Platinum
  {
    name: "Candescent",
    logo: "/images/logos/candescent.webp",
    description:
      "Candescent brings together transformative technologies that power and connect digital banking and branch solutions for banks and credit unions.",
    url: "https://www.candescent.com",
    tier: "platinum",
  },
  // Gold
  {
    name: "Infosys",
    logo: "/images/logos/infosys.svg",
    tier: "gold",
    url: "https://www.infosys.com",
  },
  {
    name: "Publicis Sapient",
    logo: "/images/logos/publicis-sapient.svg",
    tier: "gold",
    url: "https://www.publicissapient.com",
  },
  {
    name: "JP Morgan",
    logo: "/images/logos/jpmorgan.webp",
    tier: "gold",
    url: "https://www.jpmorgan.com",
  },
  {
    name: "Merkle",
    logo: "/images/logos/merkle.webp",
    tier: "gold",
    url: "https://www.merkle.com",
  },
  // Silver
  {
    name: "WongDoody",
    logo: "/images/logos/wongdoody.webp",
    tier: "silver",
    url: "https://wongdoody.com",
  },
  {
    name: "Orion",
    logo: "/images/logos/orion.webp",
    tier: "silver",
    url: "https://www.orion.com",
  },
  {
    name: "Infoblox",
    logo: "/images/logos/infoblox.webp",
    tier: "silver",
    url: "https://www.infoblox.com",
  },
  {
    name: "Infiniqo",
    logo: "/images/logos/infiniqo.webp",
    tier: "silver",
  },
  // Media
  {
    name: "Verizon",
    logo: "/images/logos/verizon.svg",
    tier: "media",
    url: "https://www.verizon.com",
  },
  {
    name: "Qatalyst",
    logo: "/images/logos/qatalyst.svg",
    tier: "media",
  },
  // Community
  {
    name: "AND Academy",
    logo: "/images/logos/and-academy.webp",
    tier: "community",
    url: "https://andacademy.com",
  },
  {
    name: "The Loops",
    logo: "/images/logos/the-loops.svg",
    tier: "community",
  },
  {
    name: "Eventum",
    logo: "/images/logos/eventum.svg",
    tier: "community",
  },
];

export function getPartnersByTier(tier: PartnerTier): Partner[] {
  return partners.filter((p) => p.tier === tier);
}
