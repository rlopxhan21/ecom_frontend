import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "Please enter a valid Email Address." }),
  password: z
    .string()
    .min(8, { message: "The password must be at least 8 characters long." }),
});

export type LoginDataType = z.infer<typeof schema>;
