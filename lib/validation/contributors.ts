import { z } from "zod";

export const contributorsSchema = z
  .object({
    // Conference Role
    role: z.string().min(1, "Please select your conference role."),

    otherRole: z.string().optional(),

    // Personal Information
    fullName: z.string().trim().min(2, "Please enter your full name.").max(100),

    email: z.string().trim().email("Please enter a valid email address."),

    phone: z.string().min(8, "Please enter a valid phone number."),

    // Professional Information
    professionalTitle: z.string().trim().max(150).optional(),

    professionalBio: z
      .string()
      .trim()
      .min(50, "Please provide a short professional bio.")
      .max(1500),

    photoUrl: z.string().trim().optional().or(z.literal("")),

    linkedin: z.string().trim().optional().or(z.literal("")),

    twitter: z.string().trim().optional().or(z.literal("")),

    website: z.string().trim().optional().or(z.literal("")),

    // Additional Notes
    additionalNotes: z.string().max(3000).optional(),

    // Consent
    confirmInformation: z.boolean(),

    confirmMediaConsent: z.boolean(),
  })

  // Custom Validation
  .superRefine((data, ctx) => {
    if (data.role === "Other" && !(data.otherRole ?? "").trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["otherRole"],
        message: "Please specify your role.",
      });
    }

    if (!data.confirmInformation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmInformation"],
        message: "Please confirm that your information is accurate.",
      });
    }

    if (!data.confirmMediaConsent) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmMediaConsent"],
        message: "Please provide consent to use your profile information.",
      });
    }
  });

export type ContributorsFormData = z.infer<typeof contributorsSchema>;
