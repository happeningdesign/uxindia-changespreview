import { optional, z } from "zod";

// const optionalUrl = z
//   .string()
//   .trim()
//   .url("Please enter a valid URL")
//   .optional()
//   .or(z.literal(""))
//   .transform((val) => (val === "" ? null : val));

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .transform((val) => {
    if (!val || val === "") return null;

    // Auto-add https:// if missing
    if (!/^https?:\/\//i.test(val)) {
      return `https://${val}`;
    }

    return val;
  })
  .refine(
    (val) => {
      if (!val) return true;

      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    },
    {
      message: "Please enter a valid URL",
    },
  );

const requiredTrue = (msg: string) =>
  z.boolean().refine((val) => val === true, { message: msg });

export const speakerSchema = z.object({
  track: z.string().trim().min(1, "Please select a track"),
  format: z.string().trim().min(1, "Please select a format"),
  category: z.string().trim().min(1, "Please select a category"),

  talkTitle: z
    .string()
    .trim()
    .min(5, "Talk title must be at least 5 characters")
    .max(100, "Talk title cannot exceed 100 characters"),
  talkAbstract: z
    .string()
    .trim()
    .min(50, "Talk Abstract must be at least 50 characters")
    .max(500, "Talk Abstract cannot exceed 500 characters"),
  talkDescription: z
    .string()
    .trim()
    .min(50, "Talk Description must be at least 50 characters")
    .max(1000, "Talk Description cannot exceed 1000 characters"),
  learningOutcomes: z
    .string()
    .trim()
    .min(10, "Key takeaways must be at least 50 characters"),
  alignment: z
    .string()
    .trim()
    .min(10, "Please explain how your talk aligns with the conference theme"),

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
    .min(50, "Speaker Bio must be at least 50 characters"),

  speakerPhotoUrl: optionalUrl,

  speakerLinkedin: optionalUrl,
  speakerWebsite: optionalUrl,
  speakerTwitter: z.string().trim().optional(),

  experience: z.string().trim().min(1, "Please select your experience level"),
  speakingExp: z
    .string()
    .trim()
    .min(1, "Please select your speaking experience level"),

  pastTalks: z.string().optional(),
  presentationLink: optionalUrl,
  recordingLink: optionalUrl,

  specialRequirements: z.string().optional(),
  attendeeMaterials: z.string().optional(),

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
