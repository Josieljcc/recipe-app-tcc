import z from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "The password must have at least 6 characters")
    .min(1),
  email: z.string().email().min(1).toLowerCase(),
  password: z
    .string()
    .min(8, "The password must have at least 6 characters")
    .min(1),
});
