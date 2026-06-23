"use client";

import Link from "next/link";
import { useState } from "react";
import type { PassTier, TrackVariant } from "@/types/pricing";
import { getTierCtaLabel, isTierCtaDisabled } from "@/types/format";
import { PriceWithGst } from "../price-with-gst/PriceWithGst";
import { ladderLabel } from "@/types/ticketCatalog";
import { ChevronIcon } from "../chevron-icon/ChevronIcon";
import {
  offerCardClass,
  panelVariant,
  textMainClass,
  textMutedClass,
} from "@/types/trackTheme";

type TierLadderCardProps = {
  title: string;
  tiers: PassTier[];
  variant: TrackVariant;
  isStudent?: boolean;
};

export function TierLadderCard({
  title,
  tiers,
  variant,
  isStudent = false,
}: TierLadderCardProps) {
  const [open, setOpen] = useState(false);
  const panel = panelVariant(variant, isStudent);
  const textMain = textMainClass(panel);
  const textMuted = textMutedClass(panel);
  const primary = tiers.find((t) => t.highlight) ?? tiers[0];

  return (
    <article
      className={`rounded-xl p-4 sm:p-5 ${offerCardClass(panel)} ${textMain}`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <h3 className="font-uxi text-xl leading-[1.1] sm:text-2xl">{title}</h3>
        <ChevronIcon open={open} />
      </button>

      <ul className="mt-4 space-y-3">
        {tiers.map((tier) => (
          <li
            key={tier.id}
            className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className={`font-sans text-sm font-medium ${textMuted}`}>
                {ladderLabel(tier)}
              </p>
              <p className={`mt-0.5 font-sans text-xs ${textMuted}`}>
                {tier.saleStarts == ""
                  ? "Sale Ended"
                  : "Starts " + tier.saleStarts}
                {/* Starts {tier.saleStarts} */}
              </p>
            </div>
            <PriceWithGst
              price={tier.price}
              gstClassName={textMuted}
              className="shrink-0"
            />
          </li>
        ))}
      </ul>

      <div className="accordion-panel" data-open={open}>
        <div className="accordion-panel-inner">
          <div className="border-t border-white/10 pt-4 mt-4">
            <p className={`font-sans text-sm ${textMuted}`}>
              {primary.description}
            </p>
            {primary.inclusions.length > 0 && (
              <ul className={`mt-3 space-y-1.5 font-sans text-sm ${textMuted}`}>
                {primary.inclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {isTierCtaDisabled(primary) ? (
              <span className="mt-4 block text-center font-sans text-sm text-white/40">
                {getTierCtaLabel(primary)}
              </span>
            ) : (
              <Link
                href={primary.ctaHref}
                className={`mt-4 flex w-full items-center justify-center rounded-full px-4 py-2.5 font-sans text-sm font-medium transition ${
                  panel === "summit"
                    ? "border border-white/30 bg-black/35 text-white"
                    : "border border-black/30 bg-[#1a1200] text-white"
                }`}
              >
                {/* Register — {ladderLabel(primary)} → */}
                Opens Soon
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
