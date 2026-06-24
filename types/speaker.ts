export interface SpeakerTalk {
  type?: string | string[];
  track?: string;
  talkCategory?: string;
  date?: string;
  time?: string;
  endTime?: string;
  title?: string;
  description?: string;
  keyTakeaway?: string | string[];
  audience?: string | string[];
}

export interface Speaker {
  name: string;
  role: string;
  company?: string;
  image: string;
  ogImage?: string;
  slug?: string;
  bio?: string;
  talkType?: string;
  linkedin?: string;
  twitter?: string;
  feedbackLink?: string;
  events?: {
    leadership?: SpeakerTalk | SpeakerTalk[];
    rising?: SpeakerTalk | SpeakerTalk[];
  };
  // set by all-speakers.ts at build time — used for Rising Leaders page accent color
  colorIndex?: number;
  // legacy fields — kept for backwards compat with grid overlay
  readMoreLink?: string;
  readMoreLabel?: string;
}

/** Generates a URL-safe slug from a speaker name */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

/** Returns the slug for a speaker, using explicit slug if set, otherwise derives from name */
export function getSpeakerSlug(speaker: Speaker): string {
  return speaker.slug || slugify(speaker.name);
}
