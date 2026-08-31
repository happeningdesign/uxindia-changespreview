import { z } from "zod";

export const cxoDinnerRsvpSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter your first name.")
    .max(60, "First name is too long."),

  lastName: z
    .string()
    .trim()
    .min(2, "Please enter your last name.")
    .max(60, "Last name is too long."),

  workEmail: z
    .string()
    .trim()
    .min(1, "Work email is required.")
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number.")
    .regex(/^[0-9+\s-]+$/, "Phone number can only contain digits, spaces, + and -."),

  company: z.string().trim().max(150).optional(),

  designation: z.string().trim().max(150).optional(),

  message: z.string().trim().max(1000).optional(),
});

export type CxoDinnerRsvpData = z.infer<typeof cxoDinnerRsvpSchema>;
