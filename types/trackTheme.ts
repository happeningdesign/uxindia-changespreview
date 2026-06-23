import type { PassTier, TrackVariant } from "@/types/pricing";

export type PanelVariant = "summit" | "forum" | "forum-student";

export function panelVariant(
  variant: TrackVariant,
  isStudent = false,
): PanelVariant {
  if (variant === "summit") return "summit";
  return isStudent ? "forum-student" : "forum";
}

export function panelShellClass(panel: PanelVariant): string {
  switch (panel) {
    case "summit":
      return "bg-[#14453D] border border-[#1a5c52]";
    case "forum":
      return "bg-[#FDE3A2] border border-[#e6c97a]";
    case "forum-student":
      return "bg-[#FDE3A2] border border-[#e6c97a]";
  }
}

export function offerCardClass(panel: PanelVariant, tier?: PassTier): string {
  if (tier?.cardStyle === "vip") {
    return "border border-[#c9a227]/60 bg-[#1a1608]/40";
  }
  switch (panel) {
    case "summit":
      return "border border-[#2a6b58]/80 bg-[#0f3a34]/60";
    case "forum":
    case "forum-student":
      return "border border-[#c49a2e]/70 bg-[#f5d68a]/50";
  }
}

export function textMainClass(panel: PanelVariant): string {
  return panel === "summit" ? "text-text-primary" : "text-text-on-yellow";
}

export function textMutedClass(panel: PanelVariant): string {
  return panel === "summit"
    ? "text-[var(--text-muted-teal)]"
    : "text-[var(--text-muted-yellow)]";
}

export function badgePillClass(panel: PanelVariant, tier: PassTier): string {
  if (tier.cardStyle === "vip") {
    return "border border-[#e6c97a] bg-[#F5C518] text-[#1a1200]";
  }
  if (tier.badgeVariant === "addon" || tier.badge === "Add On") {
    return panel === "summit"
      ? "border border-[#3d8f7a] bg-[#1b5c50] text-[#b8e0d6]"
      : "border border-[#c49a2e] bg-[#e6a817]/50 text-[#5c3d00]";
  }
  if (tier.badge.includes("Super Early Bird")) {
    return panel === "summit"
      ? "border border-[#6eb8c9] bg-[#2d6a7a]/50 text-[#b8e8f0]"
      : "border border-[#d4a82a] bg-[#f0c84a]/70 text-[#5c3d00]";
  }
  if (tier.badge.includes("Single Day")) {
    return "border border-[#4db8a8] bg-[#1a6b5c]/60 text-[#a8e8dc]";
  }
  if (tier.badge.includes("VIP")) {
    return "border border-[#e6c97a] bg-[#F5C518] text-[#1a1200]";
  }
  return panel === "summit"
    ? "border border-white/25 bg-white/10 text-summit-badge-text"
    : "border border-black/20 bg-black/5 text-forum-badge-text";
}
