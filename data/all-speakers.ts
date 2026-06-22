/**
 * ALL SPEAKERS — unified lookup across Leadership Summit and Rising Leaders Forum.
 * Used by the dynamic /speakers/[slug] page to resolve any speaker by slug.
 *
 * If a speaker appears in both events, add them to BOTH data files with an
 * explicit matching `slug` field so the same page serves both events' talk details.
 */

import leadershipSpeakers, { getSpeakerSlug } from "@/data/leadership-speakers";
import risingLeadersSpeakers from "@/data/rising-leaders-speakers";
import type { Speaker } from "@/data/leadership-speakers";

export type { Speaker };
export { getSpeakerSlug };

/**
 * Merges both speaker lists, combining events if the same slug appears in both.
 */
function buildAllSpeakers(): Speaker[] {
  const map = new Map<string, Speaker>();

  for (const speaker of leadershipSpeakers) {
    const slug = getSpeakerSlug(speaker);
    map.set(slug, { ...speaker });
  }

  for (const speaker of risingLeadersSpeakers) {
    const slug = getSpeakerSlug(speaker);
    if (map.has(slug)) {
      // Merge rising event data into existing speaker entry
      const existing = map.get(slug)!;
      map.set(slug, {
        ...existing,
        events: {
          ...existing.events,
          rising: speaker.events?.rising,
        },
      });
    } else {
      map.set(slug, { ...speaker });
    }
  }

  return Array.from(map.values());
}

export const allSpeakers: Speaker[] = buildAllSpeakers();

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return allSpeakers.find((s) => getSpeakerSlug(s) === slug);
}
