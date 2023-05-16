import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "Please enter a valid Email Address." }),
});

export type AccountActivationDataType = z.infer<typeof schema>;
