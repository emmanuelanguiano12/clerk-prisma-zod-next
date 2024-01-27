import { z } from "zod";

export const TodoZodSchema = z.object({
    title: z
    .string()
    .trim()
    .min(1, {
        message: "Title must be more than 0 characters"
    }).max(100, {
        message: "Title cannot exceed 100 characters"
    })
    .nonempty({
        message: "Title is required"
    }),
});