/**
 * SCHEDULE LOOKUP
 * Scans leadership and rising schedule data to find a speaker's session
 * by name match and return their date, time, and endTime.
 */

import { leadershipScheduleData } from "@/data/leadership-schedule";
import { risingScheduleData } from "@/data/rising-schedule";

export interface ScheduleMatch {
  date: string;
  time: string;
  endTime?: string;
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

function speakerMatchesName(speakerName: string, target: string): boolean {
  return normalizeName(speakerName) === normalizeName(target);
}

/**
 * Searches a flat list of schedule sessions (a single day array) for a speaker name.
 * Handles keynote, panel, sessions (parallel), dual-panels, grid-sessions, workshops, parallel-workshops.
 */
function searchDay(
  sessions: any[],
  date: string,
  speakerName: string
): ScheduleMatch | null {
  for (const session of sessions) {
    const time = session.time;
    const endTime = session.endTime;

    // Single speaker sessions: keynote, closing, spark
    if (session.speaker?.name && speakerMatchesName(session.speaker.name, speakerName)) {
      return { date, time, endTime };
    }

    // Panel: panelists array
    if (session.panelists) {
      for (const p of session.panelists) {
        if (p.name && speakerMatchesName(p.name, speakerName)) {
          return { date, time, endTime };
        }
      }
    }

    // Parallel sessions (sessions array)
    if (session.sessions) {
      for (const s of session.sessions) {
        if (s.speaker?.name && speakerMatchesName(s.speaker.name, speakerName)) {
          return { date, time, endTime };
        }
        if (s.panelists) {
          for (const p of s.panelists) {
            if (p.name && speakerMatchesName(p.name, speakerName)) {
              return { date, time, endTime };
            }
          }
        }
      }
    }

    // Dual panels
    if (session.leftSessions) {
      for (const s of session.leftSessions) {
        if (s.speaker?.name && speakerMatchesName(s.speaker.name, speakerName)) {
          return { date, s: s.time ?? time, endTime } as any;
        }
      }
    }
    if (session.rightSession?.panelists) {
      for (const p of session.rightSession.panelists) {
        if (p.name && speakerMatchesName(p.name, speakerName)) {
          return { date, time, endTime };
        }
      }
    }

    // Workshops
    if (session.workshops) {
      for (const w of session.workshops) {
        if (w.speaker?.name && speakerMatchesName(w.speaker.name, speakerName)) {
          return { date, time, endTime };
        }
      }
    }
  }
  return null;
}

/**
 * Looks up a speaker's schedule slot across Leadership Summit days.
 */
export function lookupLeadershipSchedule(speakerName: string): ScheduleMatch | null {
  for (const day of leadershipScheduleData.days) {
    const daySessions = (leadershipScheduleData as any)[day.id] as any[];
    if (!daySessions) continue;
    const match = searchDay(daySessions, day.date, speakerName);
    if (match) return match;
  }
  return null;
}

/**
 * Looks up a speaker's schedule slot across Rising Leaders Forum days.
 */
export function lookupRisingSchedule(speakerName: string): ScheduleMatch | null {
  for (const day of risingScheduleData.days) {
    const daySessions = (risingScheduleData as any)[day.id] as any[];
    if (!daySessions) continue;
    const match = searchDay(daySessions, day.date, speakerName);
    if (match) return match;
  }
  return null;
}
