import type { AddOnItem } from "@/types/pricing";
import { LIMITED_SEATS_NOTE } from "@/types/pricing";
import { waitlistUrl, ticketUrl } from "@/types/format";
import { summitAddOn } from "@/data/summitTiers";
import { forumAddOn } from "@/data/forumTiers";

export const summitTshirtAddOn: AddOnItem = {
  id: "addon-tshirt-summit",
  badge: "Add On",
  price: 599,
  title: "T-Shirt",
  description: "Official UXINDIA 2026 conference T-shirt.",
  note: "*Limited units only",
  ctaLabel: "Add to Your Pass →",
  ctaHref: ticketUrl("leadershipSummit", "addon-tshirt"),

  // ctaLabel: "Available Soon",
  // ctaHref: "#",

  variant: "summit",
};

export const summitTierAddOns: AddOnItem[] = [summitAddOn, summitTshirtAddOn];
export const forumTierAddOns: AddOnItem[] = [forumAddOn];
