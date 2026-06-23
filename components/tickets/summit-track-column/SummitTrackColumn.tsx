import type { AddOnItem, PassTier } from "@/types/pricing";
import {
  SUMMIT_FEATURED_IDS,
  SUMMIT_LADDER_IDS,
  addOnAsTier,
  pickTiers,
} from "@/types/ticketCatalog";
import { summitAddOn } from "@/data/summitTiers";
import { summitTshirtAddOn } from "@/data/tierAddOns";
import { OfferCard } from "../offer-card/OfferCard";
import { TierLadderCard } from "../tier-ladder-card/TierLadderCard";
import { TrackGstNote } from "../track-gst-note/TrackGstNote";
import { TrackNumberHeader } from "../track-number-header/TrackNumberHeader";
import { panelShellClass } from "@/types/trackTheme";

type SummitTrackColumnProps = {
  tiers: PassTier[];
};

export function SummitTrackColumn({ tiers }: SummitTrackColumnProps) {
  const featured = pickTiers(tiers, SUMMIT_FEATURED_IDS);
  const ladder = pickTiers(tiers, SUMMIT_LADDER_IDS);
  const addOns: AddOnItem[] = [summitAddOn, summitTshirtAddOn];

  return (
    <div className="flex flex-col gap-5">
      <TrackNumberHeader
        number="01"
        title="Leadership Summit"
        dates="23–25 September"
        venue="The Leela Bhartiya City, Bengaluru"
        audience="Senior design professionals, heads of design, CXOs, CDOs, and strategic decision-makers shaping design inside their organisations."
      />

      <div
        className={`space-y-3 rounded-2xl p-4 sm:p-5 ${panelShellClass("summit")}`}
      >
        {featured.map((tier) => (
          <OfferCard key={tier.id} tier={tier} variant="summit" />
        ))}
        {addOns.map((addOn) => (
          <OfferCard
            key={addOn.id}
            tier={addOnAsTier(addOn)}
            variant="summit"
          />
        ))}
        <TierLadderCard
          title="Leadership Summit Pass"
          tiers={ladder}
          variant="summit"
        />
      </div>

      <TrackGstNote />
    </div>
  );
}
