"use client";

import { useState } from "react";
import type { AddOnItem, PassTier } from "@/types/pricing";
import {
  FORUM_PRO_FEATURED_IDS,
  FORUM_PRO_LADDER_IDS,
  FORUM_STUDENT_FEATURED_IDS,
  FORUM_STUDENT_LADDER_IDS,
  addOnAsTier,
  pickTiers,
} from "@/types/ticketCatalog";
import { forumAddOn } from "@/data/forumTiers";
import { OfferCard } from "../offer-card/OfferCard";
import { TierLadderCard } from "../tier-ladder-card/TierLadderCard";
import { TrackGstNote } from "../track-gst-note/TrackGstNote";
import { TrackNumberHeader } from "../track-number-header/TrackNumberHeader";

// type ForumTab = "professional" | "student";
type ForumTab = "student" | "professional";

type ForumTrackColumnProps = {
  professionalTiers: PassTier[];
  studentTiers: PassTier[];
};

export function ForumTrackColumn({
  professionalTiers,
  studentTiers,
}: ForumTrackColumnProps) {
  // const [tab, setTab] = useState<ForumTab>("professional");
  const [tab, setTab] = useState<ForumTab>("student");

  const proFeatured = pickTiers(professionalTiers, FORUM_PRO_FEATURED_IDS);
  const proLadder = pickTiers(professionalTiers, FORUM_PRO_LADDER_IDS);
  const studentFeatured = pickTiers(studentTiers, FORUM_STUDENT_FEATURED_IDS);
  const studentLadder = pickTiers(studentTiers, FORUM_STUDENT_LADDER_IDS);

  const isStudent = tab === "student";
  const featured = isStudent ? studentFeatured : proFeatured;
  const ladder = isStudent ? studentLadder : proLadder;
  const passTitle = isStudent ? "Student Pass" : "Rising Leaders Pass";
  const addOns: AddOnItem[] = [forumAddOn];

  return (
    <div className="flex flex-col gap-5">
      <TrackNumberHeader
        number="02"
        title="Rising Leaders Forum"
        dates="26–27 September"
        venue="Srishti Manipal Institute of Art, Design & Technology, Bengaluru"
        audience="Practitioners, early-career designers, and full-time students building craft, leadership mindset, and career momentum in design."
      />

      <div className="flex overflow-hidden rounded-2xl border border-[#e6c97a]">
        <div className="min-w-0 flex-1 space-y-3 bg-[#FDE3A2] p-4 sm:p-5">
          {featured.map((tier) => (
            <OfferCard
              key={tier.id}
              tier={tier}
              variant="forum"
              isStudent={isStudent}
            />
          ))}
          {addOns.map((addOn) => (
            <OfferCard
              key={addOn.id}
              tier={addOnAsTier(addOn)}
              variant="forum"
              isStudent={isStudent}
            />
          ))}
          <TierLadderCard
            title={passTitle}
            tiers={ladder}
            variant="forum"
            isStudent={isStudent}
          />
        </div>

        <div className="relative flex gap-[1px] bg-[#fde3a2] w-14 shrink-0 flex-col border-l border-[#e6c97a] sm:w-16">
          <button
            type="button"
            onClick={() => setTab("student")}
            className={`flex flex-1 items-center justify-center px-1.5 font-sans text-sm font-bold tracking-wide transition sm:text-base cursor-pointer ${
              tab === "student"
                ? // ? "bg-[#F5A623] text-[#1a1200]"
                  "bg-[#d49220] text-[#1a1200]"
                : // : "bg-[#c4891a]/80 text-[#1a1200]/75 hover:bg-[#d49220]"
                  "bg-[#fde3a2] text-[#1a1200]/75 hover:bg-[#d49220] hover:text-[#1a1200]"
            }`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            aria-pressed={tab === "student"}
          >
            Student
          </button>
          {/* <span
            className="absolute min-h-[100px] min-w-[30px] top-1/2 left-/12 transform translate-x-[50%] translate-y-[-50%] flex justify-center items-center bg-[#fde3a2] text-[12px] font-semibold text-[#000] border border-[#000] rounded-[4px] text-center uppercase z-10"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Switch
          </span> */}
          <button
            type="button"
            onClick={() => setTab("professional")}
            className={`flex flex-1 items-center justify-center px-1.5 font-sans text-sm font-bold tracking-wide transition sm:text-base cursor-pointer ${
              tab === "professional"
                ? // ? "bg-[#FDE3A2] text-[#1a1200]"
                  "bg-[#d49220] text-[#1a1200]"
                : // : "bg-[#c4891a]/80 text-[#1a1200]/75 hover:bg-[#d49220]"
                  "bg-[#fde3a2] text-[#1a1200]/75 hover:bg-[#d49220] hover:text-[#1a1200]"
            }`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            aria-pressed={tab === "professional"}
          >
            Professional
          </button>
        </div>
      </div>

      <TrackGstNote />
    </div>
  );
}
