import { z } from "zod";

export const leadFormSchema = z.object({
  trackingCode: z
    .string()
    .min(1, "کد رهگیری الزامی است")
    .transform((val) => Number(val))
    .refine((val) => Number.isFinite(val), {
      message: "کد رهگیری معتبر نیست",
    }),

  category: z.string().min(1, "دسته‌بندی الزامی است"),
  type: z.enum(["THIRDPARTY", "CARBODY"]),
  status: z.enum(["WON", "LOST"]),
  tag: z.enum(["RENEWED", "FOLLOWUP"]),

  nextFollowUp: z.string().optional(),
  notes: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
