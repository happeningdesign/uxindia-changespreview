/**
 * ALL SPEAKERS — unified lookup across Leadership Summit and Rising Leaders Forum.
 * Used by the dynamic /speakers/[slug] page to resolve any speaker by slug.
 *
 * Date/time is automatically pulled from the schedule data by speaker name match.
 * If a speaker isn't in the schedule yet, date/time fields will simply be undefined.
 *
 * If a speaker appears in both events, add them to BOTH data files with an
 * explicit matching `slug` field so the same page serves both events' talk details.
 */

import leadershipSpeakers, { getSpeakerSlug } from "@/data/leadership-speakers";
import risingLeadersSpeakers from "@/data/rising-leaders-speakers";
import type { Speaker } from "@/data/leadership-speakers";
import { lookupLeadershipSchedule, lookupRisingSchedule } from "@/data/schedule-lookup";

export type { Speaker };
export { getSpeakerSlug };

/**
 * Merges both speaker lists, combining events if the same slug appears in both.
 * Automatically injects date/time from the schedule data for each event.
 */
function buildAllSpeakers(): Speaker[] {
  const map = new Map<string, Speaker>();

  for (const speaker of leadershipSpeakers) {
    const slug = getSpeakerSlug(speaker);
    const scheduleMatch = lookupLeadershipSchedule(speaker.name);
    const merged: Speaker = {
      ...speaker,
      events: {
        ...speaker.events,
        leadership: speaker.events?.leadership
          ? {
              ...speaker.events.leadership,
              date: speaker.events.leadership.date ?? scheduleMatch?.date,
              time: speaker.events.leadership.time ?? scheduleMatch?.time,
              endTime: speaker.events.leadership.endTime ?? scheduleMatch?.endTime,
            }
          : undefined,
      },
    };
    map.set(slug, merged);
  }

  for (const speaker of risingLeadersSpeakers) {
    const slug = getSpeakerSlug(speaker);
    const scheduleMatch = lookupRisingSchedule(speaker.name);
    const risingTalk = speaker.events?.rising
      ? {
          ...speaker.events.rising,
          date: speaker.events.rising.date ?? scheduleMatch?.date,
          time: speaker.events.rising.time ?? scheduleMatch?.time,
          endTime: speaker.events.rising.endTime ?? scheduleMatch?.endTime,
        }
      : undefined;

    if (map.has(slug)) {
      const existing = map.get(slug)!;
      map.set(slug, {
        ...existing,
        events: {
          ...existing.events,
          rising: risingTalk,
        },
      });
    } else {
      map.set(slug, {
        ...speaker,
        events: {
          ...speaker.events,
          rising: risingTalk,
        },
      });
    }
  }

  return Array.from(map.values());
}

export const allSpeakers: Speaker[] = buildAllSpeakers();

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return allSpeakers.find((s) => getSpeakerSlug(s) === slug);
}
