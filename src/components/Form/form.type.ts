import { z } from "zod";

export const userSchema = z.object({
	email: z.string().email({ message: "Invalid email" }),
	username: z.string().min(1, { message: "username is required" }).optional(),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters" }),
});

export type SignupInput = z.infer<typeof userSchema>;

export type LoginInput = Omit<SignupInput, "username">;

export type ValidFieldNames = "email" | "username" | "password";
