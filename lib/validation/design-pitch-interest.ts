import { z } from "zod";

export const designPitchInterestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),

  email: z.string().trim().email("Please enter a valid email address."),

  phone: z.string().trim().min(8, "Please enter a valid phone number.").max(20),

  organization: z
    .string()
    .trim()
    .min(2, "Please enter your current designation or organization.")
    .max(150),
});

export type DesignPitchInterest = z.infer<typeof designPitchInterestSchema>;
