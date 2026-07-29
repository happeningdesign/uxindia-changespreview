import type { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  BadgeCheck,
  BatteryCharging,
  Ban,
  Bookmark,
  Camera,
  Accessibility,
  CalendarCheck,
  CloudSun,
  Backpack,
  FileText,
  Handshake,
  HeartHandshake,
  Landmark,
  LifeBuoy,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  Plane,
  QrCode,
  Search,
  Signal,
  Ticket,
  Timer,
  UtensilsCrossed,
  Wallet,
  Wifi,
  Presentation,
  HardDriveDownload,
  Cable,
  Clock,
  ScrollText,
  Users,
} from "lucide-react";

/** Section anchors — drive both the sticky rail and the scroll spy. */
export const sections = [
  { id: "before-you-travel", label: "Before You Travel" },
  { id: "registration", label: "Registration" },
  { id: "venues", label: "Venues & Travel" },
  { id: "during", label: "During the Conference" },
  { id: "speakers", label: "For Speakers" },
  { id: "international", label: "International Visitors" },
  { id: "conduct", label: "Code of Conduct" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
] as const;

export type Section = (typeof sections)[number];

export type Card = {
  icon: LucideIcon;
  title: string;
  body: string;
};

/* ── 01 · Before You Travel ──────────────────────────────────────────────── */

export const travelSteps: Card[] = [
  {
    icon: Ticket,
    title: "Complete Your Registration",
    body: "Register for your conference pass, workshops, and any add-on experiences you've purchased. Speakers should also complete their complimentary Speaker Pass registration.",
  },
  {
    icon: Plane,
    title: "Plan Your Travel",
    body: "Book flights, trains, or local transport early and arrange accommodation if required. International visitors should ensure passport and visa validity before travelling.",
  },
  {
    icon: QrCode,
    title: "Save Your Confirmation",
    body: "Keep your registration confirmation, ticket, and QR code accessible on your phone. International visitors should also carry passport and travel documents.",
  },
  {
    icon: MapPin,
    title: "Check the Venue",
    body: "UXINDIA 2026 runs across two venues. Review your schedule to make sure you're heading to the right one.",
  },
  {
    icon: Bookmark,
    title: "Plan Your Schedule",
    body: "Explore the agenda in advance and bookmark the talks, workshops, panels, and networking sessions you want. Speakers should verify session timing and room.",
  },
  {
    icon: Backpack,
    title: "Pack the Essentials",
    body: "Photo ID, phone charger, laptop, notebook, business cards, and presentation materials if you're speaking. International visitors: a universal travel adapter.",
  },
  {
    icon: Mail,
    title: "Stay Updated",
    body: "Watch your email for announcements and follow UXINDIA on social for programme updates, speaker reveals, and networking opportunities.",
  },
];

/* ── 02 · Registration & Check-in ────────────────────────────────────────── */

export const registrationSteps: Card[] = [
  {
    icon: Clock,
    title: "Doors from 8:00 AM",
    body: "Registration opens at 8:00 AM on each conference day.",
  },
  {
    icon: BadgeCheck,
    title: "Keep ID Ready",
    body: "Have your registration confirmation and a valid government-issued photo ID ready at check-in.",
  },
  {
    icon: Ticket,
    title: "Collect Your Badge",
    body: "You'll receive your badge on arrival. It grants access to everything included in your ticket.",
  },
  {
    icon: LifeBuoy,
    title: "Need Help?",
    body: "Lost your badge or need assistance? Head to the Registration & Help Desk.",
  },
];

/* ── 03 · Venues ─────────────────────────────────────────────────────────── */

export type Venue = {
  event: string;
  dates: string;
  name: string;
  city: string;
  image: string;
  accent: string;
  notes: string[];
};

export const venues: Venue[] = [
  {
    event: "Leadership Summit",
    dates: "23–25 September 2026",
    name: "The Leela Bhartiya City",
    city: "Bengaluru, India",
    image: "/images/venue/the-leela-bhartiya-city.webp",
    accent: "#1b7a6e",
    notes: [
      "Roughly one hour from Kempegowda International Airport, depending on traffic.",
      "Ride-hailing services such as Uber and Ola are readily available.",
    ],
  },
  {
    event: "Rising Leaders Forum",
    dates: "26–27 September 2026",
    name: "Srishti Manipal Institute of Art, Design & Technology",
    city: "Bengaluru, India",
    image: "/images/venue/srishti-campus.webp",
    accent: "#f5bf42",
    notes: [
      "Allow additional travel time during peak traffic hours.",
      "Detailed directions and maps will be shared before the conference.",
    ],
  },
];

/* ── 04 · During the Conference ──────────────────────────────────────────── */

export const duringCards: Card[] = [
  {
    icon: UtensilsCrossed,
    title: "Food & Refreshments",
    body: "Lunch, tea, coffee, and refreshments are served during scheduled breaks.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi",
    body: "Guest Wi-Fi is available in designated areas. Connectivity may vary during peak usage.",
  },
  {
    icon: Camera,
    title: "Photography & Recording",
    body: "Photography and videography take place throughout. By attending, you consent to being recorded for promotional and archival use.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    body: "Need accessibility support? Contact the UXINDIA team before the conference or visit the Help Desk on site.",
  },
  {
    icon: Search,
    title: "Lost & Found",
    body: "Items found during the conference are handed over to the Registration & Help Desk.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Assistance",
    body: "Volunteers and organisers are available throughout the conference for emergencies or support requests.",
  },
];

/* ── 05 · For Speakers ───────────────────────────────────────────────────── */

export const speakerCards: Card[] = [
  {
    icon: FileText,
    title: "Presentation Submission",
    body: "Submit your final presentation before the communicated deadline.",
  },
  {
    icon: Monitor,
    title: "Format",
    body: "Use 16:9 widescreen and keep your presentation aligned with the accepted session proposal.",
  },
  {
    icon: HardDriveDownload,
    title: "Backup",
    body: "Carry your presentation on a USB drive and keep a cloud backup wherever possible.",
  },
  {
    icon: Timer,
    title: "Arrive Early",
    body: "Be at your session room at least 20–30 minutes before your scheduled start time.",
  },
  {
    icon: Cable,
    title: "Technical Requirements",
    body: "Own laptop, live demos, specific software, adapters, or extra AV? Tell Speaker Relations in advance.",
  },
  {
    icon: Presentation,
    title: "During Your Session",
    body: "Start and finish on time, leaving room for audience questions wherever possible.",
  },
];

/* ── 06 · International Visitors ─────────────────────────────────────────── */

export type FactCard = Card & { fact: string };

export const internationalCards: FactCard[] = [
  {
    icon: ScrollText,
    fact: "Passport + Visa",
    title: "Visa & Travel Documents",
    body: "Ensure your passport, visa (where applicable), and travel documents are valid before departure. Need an invitation letter? Contact us as early as possible.",
  },
  {
    icon: Wallet,
    fact: "INR ₹",
    title: "Currency",
    body: "The local currency is the Indian Rupee. Cards are widely accepted, but carrying some cash is recommended.",
  },
  {
    icon: Signal,
    fact: "eSIM",
    title: "Mobile Connectivity",
    body: "International roaming can be expensive. Consider an Indian SIM or an international eSIM before travelling.",
  },
  {
    icon: BatteryCharging,
    fact: "230V · C/D/M",
    title: "Power & Charging",
    body: "India runs on 230V / 50Hz with Type C, D, and M sockets. A universal travel adapter is recommended.",
  },
  {
    icon: CloudSun,
    fact: "Pleasant, some rain",
    title: "Weather",
    body: "September in Bengaluru is generally pleasant with occasional rain. Pack light clothing, comfortable shoes, and a compact umbrella.",
  },
];

/* ── 07 · Code of Conduct ────────────────────────────────────────────────── */

export const conductDos: { icon: LucideIcon; text: string }[] = [
  { icon: Handshake, text: "Treat everyone with respect and professionalism." },
  {
    icon: MessageSquare,
    text: "Foster inclusive and constructive conversations.",
  },
  {
    icon: Ban,
    text: "Avoid harassment, discrimination, or disruptive behaviour.",
  },
  {
    icon: Users,
    text: "Respect speakers, volunteers, organisers, and fellow attendees.",
  },
  {
    icon: HeartHandshake,
    text: "Avoid sales-driven interactions unless part of an approved exhibition or sponsorship.",
  },
  {
    icon: Landmark,
    text: "Follow venue policies and instructions from the event team.",
  },
];

/* ── 08 · FAQs ───────────────────────────────────────────────────────────── */

export const faqs = [
  {
    q: "Can I transfer my ticket?",
    a: "Please refer to the ticket transfer policy or contact the registration team for assistance.",
  },
  {
    q: "Can I upgrade my ticket?",
    a: "Ticket upgrades may be available depending on availability. Please contact the registration team.",
  },
  {
    q: "Will sessions be recorded?",
    a: "Selected sessions may be recorded and published after the conference.",
  },
  {
    q: "Is parking available?",
    a: "Parking availability varies by venue. Detailed information will be shared closer to the event.",
  },
  {
    q: "What if I'm running late?",
    a: "You may still attend your registered sessions, though entry may be delayed if a session is already in progress.",
  },
  {
    q: "Can I change my workshop selection?",
    a: "Workshop changes are subject to availability. Please contact the registration team before the conference.",
  },
  {
    q: "Who should I contact if I need help?",
    a: "Visit the Registration & Help Desk during the conference or contact the UXINDIA team before the event.",
  },
];

/* ── 09 · Contact ────────────────────────────────────────────────────────── */

export const contacts = [
  {
    icon: Mail,
    title: "General Enquiries",
    email: "team@umo.design",
    body: "Registration, tickets, workshops, travel, accommodation, accessibility, sponsorships, and general event information.",
  },
  {
    icon: Presentation,
    title: "Speaker Relations",
    email: "team@umo.design",
    body: "Presentation submissions, session logistics, and speaker support.",
  },
  {
    icon: LifeBuoy,
    title: "During the Conference",
    email: null,
    body: "Our Registration Desk, Help Desk, and volunteer team are available throughout the conference to assist you.",
  },
];

/* ── Hero quick facts ────────────────────────────────────────────────────── */

export const quickFacts = [
  { icon: CalendarCheck, label: "Dates", value: "23–27 Sept 2026" },
  { icon: MapPin, label: "City", value: "Bengaluru, India" },
  { icon: Landmark, label: "Venues", value: "Two across the week" },
  { icon: Clock, label: "Doors open", value: "8:00 AM daily" },
];
