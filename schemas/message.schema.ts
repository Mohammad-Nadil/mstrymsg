import { z } from "zod";

export const messageSchema = z.object({
  contend: z
    .string()
    .min(3, "Message must be at least 3 characters")
    .max(300, "Message cannot be longer than 300 characters"),
});
