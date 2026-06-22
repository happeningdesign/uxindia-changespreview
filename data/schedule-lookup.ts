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
  title?: string;
  type?: string;
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
      return { date, time, endTime, title: session.title, type: session.tag };
    }

    // Panel: panelists array
    if (session.panelists) {
      for (const p of session.panelists) {
        if (p.name && speakerMatchesName(p.name, speakerName)) {
          return { date, time, endTime, title: session.title, type: session.tag };
        }
      }
    }

    // Parallel sessions (sessions array)
    if (session.sessions) {
      for (const s of session.sessions) {
        if (s.speaker?.name && speakerMatchesName(s.speaker.name, speakerName)) {
          return { date, time, endTime, title: s.title, type: s.tag ?? session.tag };
        }
        if (s.panelists) {
          for (const p of s.panelists) {
            if (p.name && speakerMatchesName(p.name, speakerName)) {
              return { date, time, endTime, title: s.title, type: s.tag ?? session.tag };
            }
          }
        }
      }
    }

    // Dual panels
    if (session.leftSessions) {
      for (const s of session.leftSessions) {
        if (s.speaker?.name && speakerMatchesName(s.speaker.name, speakerName)) {
          return { date, time: s.time ?? time, endTime, title: s.title, type: s.tag ?? session.tag };
        }
      }
    }
    if (session.rightSession?.panelists) {
      for (const p of session.rightSession.panelists) {
        if (p.name && speakerMatchesName(p.name, speakerName)) {
          return { date, time, endTime, title: session.rightSession.title, type: session.rightSession.tag ?? session.tag };
        }
      }
    }

    // Workshops
    if (session.workshops) {
      for (const w of session.workshops) {
        if (w.speaker?.name && speakerMatchesName(w.speaker.name, speakerName)) {
          return { date, time, endTime, title: w.title, type: w.tag ?? session.tag };
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
