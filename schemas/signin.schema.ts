import { z } from "zod";

export const signinSchema = z.object({
    identifier: z.email(),
    password: z.string(),
})
