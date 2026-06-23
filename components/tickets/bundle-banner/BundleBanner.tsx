import Link from "next/link";
import { summitAddOn, summitTiers } from "@/data/summitTiers";
import { forumProfessionalTiers } from "@/data/forumTiers";
import { formatPrice } from "@/types/format";
import { PriceWithGst } from "../price-with-gst/PriceWithGst";

/** Full Week Pass at regular pricing (no Early Bird bundle tier). */
const FULL_WEEK_PASS_PRICE = 35999;

const summitRegularPrice =
  summitTiers.find((t) => t.id === "summit-regular")?.price ?? 23999;
const forumRegularPrice =
  forumProfessionalTiers.find((t) => t.id === "forum-regular-pro")?.price ??
  12999;
const workshopsPrice = summitAddOn.price;

const buySeparatelyTotal =
  summitRegularPrice + workshopsPrice + forumRegularPrice;
const bundleSavings = buySeparatelyTotal - FULL_WEEK_PASS_PRICE;

export function BundleBanner() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-2xl bg-brand p-8 md:mb-16 md:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-40 w-40 translate-x-1/4 -translate-y-1/2 rounded-full bg-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-24 translate-y-1/2 rounded-full bg-white/10"
      />

      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Best Value · 5 Days
          </p>
          <h2 className="font-uxi mt-3 text-4xl font-medium leading-[1.08] text-white sm:text-5xl">
            Full Week Pass
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/80">
            Leadership Summit (Sep 23–25) + Rising Leaders Forum (Sep 26–27).
            All sessions across both venues.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="space-y-3 font-sans text-white">
            <p className="text-sm font-medium text-white/70">
              Regular · Full Week Pass
            </p>
            <PriceWithGst
              price={FULL_WEEK_PASS_PRICE}
              gstClassName="text-white/60"
              className="text-left md:text-right"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right">
              Save {formatPrice(bundleSavings)} vs. buying at regular
              professional rates: Summit {formatPrice(summitRegularPrice)} +
              Workshops {formatPrice(workshopsPrice)} + Forum{" "}
              {formatPrice(forumRegularPrice)} (
              {formatPrice(buySeparatelyTotal)} total)
            </p>
          </div>

          <Link
            href="mailto:team@umo.design?subject=Full%20Week%20Pass%20Enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D0D0D] px-6 py-3.5 font-sans text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
          >
            Enquire About Bundles
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
