import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .transform((val) => val?.trim() || "")
  .refine(
    (val) =>
      val === "" ||
      /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(val) ||
      val.startsWith("http://") ||
      val.startsWith("https://"),
    {
      message: "Please enter a valid URL",
    },
  )
  .transform((val) => (val === "" ? null : val));

const requiredTrue = (msg: string) =>
  z.boolean().refine((val) => val === true, {
    message: msg,
  });

const sessionSchema = z.object({
  format: z.string().trim().min(1, "Please select a session format"),

  category: z.string().trim().min(1, "Please select a category"),

  talkTitle: z
    .string()
    .trim()
    .min(5, "Talk title must be at least 5 characters")
    .max(100, "Talk title cannot exceed 100 characters"),

  talkAbstract: z
    .string()
    .trim()
    .min(50, "Abstract must be at least 50 characters")
    .max(500, "Abstract cannot exceed 500 characters"),

  learningOutcomes: z.string().trim().min(10, "Key takeaways are required"),

  presentationLink: optionalUrl,

  recordingLink: optionalUrl,
});

export const invitedSpeakerSchema = z.object({
  // Speaker Information
  speakerName: z.string().trim().min(2, "Please provide a valid name"),

  speakerEmail: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  countryCode: z.string().trim().min(1, "Please select a country code"),

  speakerPhone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(15, "Please enter a valid phone number")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),

  speakerTitle: z.string().trim().min(2, "Please provide a valid designation"),

  speakerBio: z
    .string()
    .trim()
    .min(50, "Speaker bio must be at least 50 characters"),

  speakerPhotoUrl: optionalUrl,

  speakerLinkedin: optionalUrl,

  speakerWebsite: optionalUrl,

  speakerTwitter: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) =>
        !val ||
        val.startsWith("@") ||
        val.includes("twitter.com") ||
        val.includes("x.com"),
      {
        message: "Please enter a valid Twitter/X profile",
      },
    ),

  // Event Information
  track: z.string().nullable().optional(),

  // Multi-select formats
  formats: z
    .array(z.string())
    .min(1, "Please select at least one session format"),

  // One entry per selected format
  sessions: z
    .array(sessionSchema)
    .min(1, "At least one session submission is required"),

  specialRequirements: z.string().trim().optional(),

  attendeeMaterials: z.string().trim().optional(),

  // Confirmations
  confirmOriginal: requiredTrue(
    "Please confirm that this submission is based on original work and real experience",
  ),

  confirmNonPromotional: requiredTrue(
    "Please confirm that your session is educational and not promotional",
  ),

  confirmAvailable: requiredTrue(
    "Please confirm your availability for UXINDIA 2026 if selected",
  ),

  confirmIteration: requiredTrue(
    "Please confirm that you are open to collaborating with the curation team",
  ),

  confirmRecording: requiredTrue(
    "Please provide consent for session recording and educational sharing",
  ),

  confirmCoc: requiredTrue(
    "Please accept the UXINDIA Code of Conduct to continue",
  ),

  additionalNotes: z.string().optional(),
});

export type InvitedSpeakerFormData = z.infer<typeof invitedSpeakerSchema>;
