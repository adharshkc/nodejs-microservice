import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    name: z
      .string()
      .min(2, { message: "name should be at least 2 character long" }),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});

export const userIdParam = z.object({
  params: z.object({
    id: z.string().min(1, "User ID is required")
  }),
});
