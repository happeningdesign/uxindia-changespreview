import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .url()
  .optional()
  .or(z.literal(""))
  .transform((val) => (val === "" ? null : val));

const requiredTrue = (msg: string) =>
  z.boolean().refine((val) => val === true, { message: msg });

export const speakerSchema = z.object({
  track: z.string().trim().min(1),
  format: z.string().trim().min(1),
  category: z.string().trim().min(1),

  talkTitle: z.string().trim().min(5).max(100),
  talkAbstract: z.string().trim().min(350).max(500),
  talkDescription: z.string().trim().min(500).max(1000),
  learningOutcomes: z.string().trim().min(10),
  alignment: z.string().trim().min(10),

  speakerName: z.string().trim().min(2),
  speakerEmail: z.string().trim().email(),
  countryCode: z.string().trim().min(1),
  speakerPhone: z
    .string()
    .trim()
    .min(6)
    .max(15)
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),

  speakerTitle: z.string().trim().min(2),
  speakerBio: z.string().trim().min(50),

  speakerPhotoUrl: z.string().trim().url(),

  speakerLinkedin: optionalUrl,
  speakerWebsite: optionalUrl,
  speakerTwitter: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || val.startsWith("@") || val.includes("twitter.com"),
      { message: "Invalid Twitter handle" },
    ),

  experience: z.string().trim().min(1),
  speakingExp: z.string().trim().min(1),

  pastTalks: z.string().optional(),
  presentationLink: z
    .string()
    .trim()
    .min(1, "Presentation link is required")
    .url("Must be a valid URL"),
  recordingLink: optionalUrl,

  specialRequirements: z.string().optional(),
  attendeeMaterials: z.string().optional(),

  confirmOriginal: requiredTrue("Please confirm original content"),
  confirmNonPromotional: requiredTrue("Must be non-promotional"),
  confirmAvailable: requiredTrue("Availability required"),
  confirmIteration: requiredTrue("Must agree to iterate"),
  confirmRecording: requiredTrue("Recording consent required"),
  confirmCoc: requiredTrue("Must accept code of conduct"),

  additionalNotes: z.string().optional(),
});
