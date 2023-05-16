import { z } from "zod";

export const schema = z
  .object({
    full_name: z
      .string()
      .min(2, { message: "Full Name must be at least 3 character long." }),
    email: z.string().email({ message: "Please enter a valid Email Address." }),
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

export type RegistrationDataType = z.infer<typeof schema>;
