import { z } from "zod";

export const schema = z
  .object({
    password: z
      .string()
      .min(8, { message: "The password must be at least 8 characters long." }),
    password2: z
      .string()
      .min(8, { message: "The password must be at least 8 characters long." }),
  })
  .refine((data) => data.password === data.password2, {
    message: "Your password and confirm password must match.",
    path: ["password2"],
  });

export type ResetPasswordConfirmationDataType = z.infer<typeof schema>;
