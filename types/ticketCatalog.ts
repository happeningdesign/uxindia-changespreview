import type { AddOnItem, PassTier } from "@/types/pricing";

export const SUMMIT_FEATURED_IDS = [
  "summit-eb",
  "summit-vip",
  "summit-grand-conf",
  // "summit-seb",
] as const;

export const SUMMIT_LADDER_IDS = [
  "summit-regular",
  "summit-last-minute",
  "summit-walkin",
  "summit-seb",
] as const;

export const FORUM_PRO_FEATURED_IDS = [
  "forum-eb-pro",
  // "forum-seb-pro",
] as const;

export const FORUM_PRO_LADDER_IDS = [
  "forum-regular-pro",
  "forum-last-minute-pro",
  "forum-walkin-pro",
  "forum-seb-pro",
] as const;

export const FORUM_STUDENT_FEATURED_IDS = [
  "forum-eb-student",
  // "forum-seb-student",
] as const;

export const FORUM_STUDENT_LADDER_IDS = [
  "forum-regular-student",
  "forum-last-minute-student",
  "forum-walkin-student",
  "forum-seb-student",
] as const;

export function pickTiers(
  tiers: PassTier[],
  ids: readonly string[],
): PassTier[] {
  return ids
    .map((id) => tiers.find((t) => t.id === id))
    .filter((t): t is PassTier => Boolean(t));
}

export function ladderLabel(tier: PassTier): string {
  if (tier.badge.includes("Walk-in")) return "Walk-in";
  if (tier.badge.includes("Last Minute")) return "Last Minute";
  if (tier.badge === "Regular") return "Regular";
  if (tier.badge === "Early Bird") return "Early Bird";
  if (tier.badge.includes("Super Early Bird")) return "Super Early Bird";
  return tier.badge;
}

export function addOnAsTier(addOn: AddOnItem): PassTier {
  return {
    id: addOn.id,
    name: addOn.title,
    badge: addOn.badge,
    badgeVariant: "addon",
    price: addOn.price,
    saleStarts: addOn.saleStarts ?? "",
    description: addOn.description,
    note: addOn.note,
    inclusions: [],
    ctaLabel: addOn.ctaLabel,
    ctaHref: addOn.ctaHref,

    isExpanded: false,
  };
}
