import z from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(1, { message: "First Name is required" }),
  password: z
    .string()
    .min(8, "The password must have at least 8 characters")
    .min(1, { message: "Password is required" }),
});
