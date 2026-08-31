export type PartnerTier =
  | "diamond"
  | "platinum"
  | "gold"
  | "silver"
  | "media"
  | "community"
  | "academic"
  | "ux-focused";

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
    description:
      "Partners who champion craft, community, and design excellence.",
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
  // Platinum
  // {
  //   name: "Accenture Song",
  //   logo: "/images/logos/sponsors/accenture-song.webp",
  //   description:
  //     "Accenture Song is the creative transformation arm of the international consulting firm Accenture and was founded in 2022 as a successor to Accenture Interactive.",
  //   url: "https://www.accenture.com/us-en/about/accenture-song-index",
  //   tier: "platinum",
  // },
  {
    name: "Happening",
    logo: "/images/logos/sponsors/happening.svg",
    description:
      "Happening is a global UX Design Studio creating digital products and experiences for companies around the world to leap forward.",
    url: "https://happening.design/?utm_source=uxindia&utm_medium=website&utm_campaign=uxindia_2026",
    tier: "platinum",
  },
  // {
  //   name: "JP Morgan",
  //   logo: "/images/logos/sponsors/jpmorgan.webp",
  //   description:
  //     "JPMorgan Chase & Co. (stylized as JPMorganChase) is an American multinational banking institution headquartered in New York City and incorporated in Delaware. It is the largest bank in the United States, and the world's largest bank by market capitalization as of 2025.",
  //   url: "https://www.jpmorgan.com/global",
  //   tier: "platinum",
  // },

  // Gold
  {
    name: "If Design",
    logo: "/images/logos/sponsors/if-design.webp",
    tier: "gold",
    url: "https://ifdesign.com/en/",
  },
  {
    name: "BayOne",
    logo: "/images/logos/sponsors/bayone.svg",
    tier: "gold",
    url: "https://bayone.com/",
  },
  {
    name: "Eventum",
    logo: "/images/logos/sponsors/eventum.svg",
    tier: "gold",
    url: "https://www.eventum.co/",
  },

  // Silver
  {
    name: "UISer",
    logo: "/images/logos/sponsors/uiser.webp",
    tier: "silver",
    url: "https://www.uiser.com/",
  },
  {
    name: "RealCX",
    logo: "/images/logos/sponsors/realcx-ai.svg",
    tier: "silver",
    url: "https://www.realcx.ai/",
  },
  {
    name: "AskSamhika",
    logo: "/images/logos/sponsors/asksamika.svg",
    tier: "silver",
    url: "https://www.asksamika.com/",
  },

  // Media

  // Community

  // Academic
  {
    name: "Srishti Manipal Institute",
    logo: "/images/logos/sponsors/srishti-manipal.webp",
    tier: "academic",
    url: "https://srishtimanipalinstitute.in/",
  },

  // UX Focused
  {
    name: "16Pixel",
    logo: "/images/logos/ux-focused/16pixel.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Accenture",
    logo: "/images/logos/ux-focused/accenture.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Adalat AI",
    logo: "/images/logos/ux-focused/adalat-ai.svg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Agilysys",
    logo: "/images/logos/ux-focused/agilysys.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "AIQ Space Venture",
    logo: "/images/logos/ux-focused/aiq-space-venture.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Ajeenkya University",
    logo: "/images/logos/ux-focused/ajeenkya-university.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Aleph labs",
    logo: "/images/logos/ux-focused/aleph-labs.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Algoworks",
    logo: "/images/logos/ux-focused/algoworks.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Ambition Group",
    logo: "/images/logos/ux-focused/ambition-group.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Amuse Labs",
    logo: "/images/logos/ux-focused/amuse-labs.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Apptware",
    logo: "/images/logos/ux-focused/apptware.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Aristocrat",
    logo: "/images/logos/ux-focused/aristocrat.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "ASU",
    logo: "/images/logos/ux-focused/asu.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "BNY Technologies",
    logo: "/images/logos/ux-focused/bny.svg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Charles Elena",
    logo: "/images/logos/ux-focused/charles-elena.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Cognizant",
    logo: "/images/logos/ux-focused/cognizant.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Concord Technologies",
    logo: "/images/logos/ux-focused/concord-technologies.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Connectwise",
    logo: "/images/logos/ux-focused/connectwise.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Cornerstone",
    logo: "/images/logos/ux-focused/cornerstone.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Coursera",
    logo: "/images/logos/ux-focused/coursera.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Dataction Analytics",
    logo: "/images/logos/ux-focused/dataction-analytics.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "DCKAP",
    logo: "/images/logos/ux-focused/dckap.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Ecolab",
    logo: "/images/logos/ux-focused/ecolab.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "ENtain",
    logo: "/images/logos/ux-focused/entain.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Evo11ve",
    logo: "/images/logos/ux-focused/evo11ve.svg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "EY Studio +",
    logo: "/images/logos/ux-focused/ey-studio.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "EY",
    logo: "/images/logos/ux-focused/ey.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "FCM",
    logo: "/images/logos/ux-focused/fcm.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Flight Center",
    logo: "/images/logos/ux-focused/flight-center.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Futurris",
    logo: "/images/logos/ux-focused/futurris.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Fyers Securities",
    logo: "/images/logos/ux-focused/fyers-securities.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Galaxy UX Studio",
    logo: "/images/logos/ux-focused/galaxy-ux-studio.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Gemini Solutions",
    logo: "/images/logos/ux-focused/gemini-solutions.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Google",
    logo: "/images/logos/ux-focused/google.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Grazitti Interactive",
    logo: "/images/logos/ux-focused/grazitti-interactive.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Happy Pet",
    logo: "/images/logos/ux-focused/happy-pet.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Hilabs",
    logo: "/images/logos/ux-focused/hilabs.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "HmH",
    logo: "/images/logos/ux-focused/hmh.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Hurix Digital",
    logo: "/images/logos/ux-focused/hurix-digital.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "IBM",
    logo: "/images/logos/ux-focused/ibm.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "IBS Software",
    logo: "/images/logos/ux-focused/ibs-software.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "ICE Mortagage",
    logo: "/images/logos/ux-focused/ice-mortgage.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "IIT Hyderabad",
    logo: "/images/logos/ux-focused/iit-hyderabad.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "IIT Indore",
    logo: "/images/logos/ux-focused/iit-indore.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Indigo",
    logo: "/images/logos/ux-focused/indigo.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Innovapptive",
    logo: "/images/logos/ux-focused/innovapptive.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Jeppesen Foreflight",
    logo: "/images/logos/ux-focused/jeppesen-foreflight.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "JP Morgan Chase",
    logo: "/images/logos/ux-focused/jp-morgan-chase.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Koru Design",
    logo: "/images/logos/ux-focused/koru-design.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Kotak Securities",
    logo: "/images/logos/ux-focused/kotak-securities.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Kyndryl",
    logo: "/images/logos/ux-focused/kyndryl.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Lloyd's Register",
    logo: "/images/logos/ux-focused/lloyds-register.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "LTM",
    logo: "/images/logos/ux-focused/ltm.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Mathworks",
    logo: "/images/logos/ux-focused/mathworks.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Mellow UX Studio",
    logo: "/images/logos/ux-focused/mellow-ux-studio.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Mitratech Holdings",
    logo: "/images/logos/ux-focused/mitratech.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Nagarro",
    logo: "/images/logos/ux-focused/nagarro.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "NID",
    logo: "/images/logos/ux-focused/nid.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "NTU",
    logo: "/images/logos/ux-focused/ntu.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Nuvolo",
    logo: "/images/logos/ux-focused/nuvolo.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "OneOcean",
    logo: "/images/logos/ux-focused/oneocean.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Oracle",
    logo: "/images/logos/ux-focused/oracle.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Orion Innovation",
    logo: "/images/logos/ux-focused/orion-innovation.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Pepagora",
    logo: "/images/logos/ux-focused/pepagora.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Perceptive",
    logo: "/images/logos/ux-focused/perceptive.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Philips",
    logo: "/images/logos/ux-focused/philips.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Piramal Finance",
    logo: "/images/logos/ux-focused/piramal-finance.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Porter",
    logo: "/images/logos/ux-focused/porter.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Presidio",
    logo: "/images/logos/ux-focused/presidio.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Progress Software",
    logo: "/images/logos/ux-focused/progress-software.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "PurpleTalk",
    logo: "/images/logos/ux-focused/purpletalk.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "RIB",
    logo: "/images/logos/ux-focused/rib.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "RV University",
    logo: "/images/logos/ux-focused/rv-university.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Salesforce",
    logo: "/images/logos/ux-focused/salesforce.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Schreiber",
    logo: "/images/logos/ux-focused/schreiber.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Secure Meters",
    logo: "/images/logos/ux-focused/secure-meters.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "ServiceNow",
    logo: "/images/logos/ux-focused/servicenow.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Stic Soft",
    logo: "/images/logos/ux-focused/sticsoft.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "SynapseWave",
    logo: "/images/logos/ux-focused/synapsewave.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Synchrony",
    logo: "/images/logos/ux-focused/synchrony.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Talkdesk",
    logo: "/images/logos/ux-focused/talkdesk.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Tensil Labglass",
    logo: "/images/logos/ux-focused/tensil-labglass.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Thoughtworks",
    logo: "/images/logos/ux-focused/thoughtworks.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "ToTheNew",
    logo: "/images/logos/ux-focused/to-the-new.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Trinity Life Sciences",
    logo: "/images/logos/ux-focused/trinity-life-sciences.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "UID",
    logo: "/images/logos/ux-focused/uid.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Tricog Health",
    logo: "/images/logos/ux-focused/tricog-health.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Unstop",
    logo: "/images/logos/ux-focused/unstop.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "UPS",
    logo: "/images/logos/ux-focused/ups.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Utthunga Technologies",
    logo: "/images/logos/ux-focused/utthunga-technologies.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "UX Army",
    logo: "/images/logos/ux-focused/ux-army.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Wongdoody",
    logo: "/images/logos/ux-focused/wongdoody.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Willis Towers Watson",
    logo: "/images/logos/ux-focused/wtw.webp",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "YoungSoft",
    logo: "/images/logos/ux-focused/youngsoft.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Zebra",
    logo: "/images/logos/ux-focused/zebra.svg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Zetwork",
    logo: "/images/logos/ux-focused/zetwork.png",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Zoapi",
    logo: "/images/logos/ux-focused/zoapi.jpg",
    tier: "ux-focused",
    url: "",
  },
  {
    name: "Zoho",
    logo: "/images/logos/ux-focused/zoho.png",
    tier: "ux-focused",
    url: "",
  },
];

export function getPartnersByTier(tier: PartnerTier): Partner[] {
  return partners.filter((p) => p.tier === tier);
}
