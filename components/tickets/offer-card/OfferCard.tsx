"use client";

import Link from "next/link";
import { useState } from "react";
import type { PassTier, TrackVariant } from "@/types/pricing";
import { getTierCtaLabel, isTierCtaDisabled } from "@/types/format";
import { PriceWithGst } from "../price-with-gst/PriceWithGst";
import { TierBadgeLabel } from "../tier-badge-label/TierBadgeLabel";
import { ChevronIcon } from "../chevron-icon/ChevronIcon";
import {
  badgePillClass,
  offerCardClass,
  panelVariant,
  textMainClass,
  textMutedClass,
} from "@/types/trackTheme";

type OfferCardProps = {
  tier: PassTier;
  variant: TrackVariant;
  isStudent?: boolean;
};

export function OfferCard({
  tier,
  variant,
  isStudent = false,
}: OfferCardProps) {
  const [open, setOpen] = useState(false);
  const panel = panelVariant(variant, isStudent);
  const textMain = textMainClass(panel);
  const textMuted = textMutedClass(panel);
  const ctaDisabled = isTierCtaDisabled(tier);
  const ctaLabel = getTierCtaLabel(tier);

  const ctaClass = (() => {
    if (ctaDisabled) {
      return panel === "summit"
        ? "cursor-not-allowed border border-white/20 bg-black/20 text-white/50"
        : "cursor-not-allowed border border-black/20 bg-black/10 text-text-on-yellow/50";
    }
    if (tier.ctaStyle === "brand")
      return "bg-brand text-white hover:bg-brand/90";
    if (tier.ctaStyle === "vip") {
      return "border border-[#e6c97a] bg-[#F5C518] text-[#1a1200] hover:bg-[#e6b800]";
    }
    return panel === "summit"
      ? "border border-white/30 bg-black/35 text-white hover:bg-black/55"
      : "border border-black/30 bg-[#1a1200] text-white hover:bg-black/70";
  })();

  return (
    <article
      className={`rounded-xl p-4 sm:p-5 ${offerCardClass(panel, tier)} ${textMain} ${tier.price > 0 ? "" : "opacity-[0.6]"}`}
    >
      <button
        type="button"
        className="w-full text-left cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <span
              className={`inline-block rounded-md px-2.5 py-0.5 font-sans text-[11px] font-medium ${badgePillClass(panel, tier)}`}
            >
              <TierBadgeLabel label={tier.badge} />
            </span>
            <h3 className="font-uxi mt-3 text-xl leading-[1.1] sm:text-2xl">
              {tier.name}
            </h3>
            <p
              className={`mt-2 font-sans text-sm leading-relaxed ${textMuted}`}
            >
              {tier.description}
            </p>
          </div>
          <div className="flex shrink-0 items-start gap-1.5">
            <PriceWithGst price={tier.price} gstClassName={textMuted} />
            <ChevronIcon
              open={tier.isExpanded ? true : open}
              className="mt-2"
            />
          </div>
        </div>
      </button>

      <div
        className="accordion-panel"
        data-open={tier.isExpanded ? true : open}
      >
        <div className="accordion-panel-inner">
          <div className="border-t border-white/10 pt-4 mt-4">
            {tier.note && (
              <p className={`font-sans text-xs italic ${textMuted}`}>
                {tier.note}
              </p>
            )}
            {tier.inclusions.length > 0 && (
              <ul className={`mt-3 space-y-1.5 font-sans text-sm ${textMuted}`}>
                {tier.inclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {tier.savingsNote && (
              <p className={`mt-3 font-sans text-sm ${textMuted}`}>
                {tier.savingsNote}
              </p>
            )}
            {ctaDisabled ? (
              <span
                className={`mt-4 flex w-full items-center justify-center rounded-full px-4 py-2.5 font-sans text-sm font-medium ${ctaClass}`}
              >
                {ctaLabel}
              </span>
            ) : (
              <Link
                href={tier.ctaHref}
                target="_blank"
                className={`mt-4 flex w-full items-center justify-center rounded-full px-4 py-2.5 font-sans text-sm font-medium transition ${ctaClass}`}
              >
                {ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
