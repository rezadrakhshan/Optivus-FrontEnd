import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(11, "شماره موبایل معتبر نیست.")
    .max(11, "شماره موبایل معتبر نیست.")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست."),
});

export type LoginSchema = z.infer<typeof loginSchema>;