"use client";

import FormInput from "./FormInput";
import { SignupInput, userSchema } from "./form.type";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import Link from "next/link";

const SignupForm = () => {
	const form = useForm<SignupInput>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			email: "",
			username: "",
			password: "",
		},
		mode: "onBlur", // Trigger validation on blur event instead of on submit event (default is on submit)
	});

	function onSubmit(data: SignupInput) {
		console.log(
			`email: ${data.email} username:${data.username} password: ${data.password}`
		);
	}

	return (
		<div className="flex flex-col gap-4 items-center">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormInput name="email"></FormInput>
					<FormInput name="username"></FormInput>
					<FormInput name="password"></FormInput>
					<Button
						type="submit"
						className="w-full">
						Signup
					</Button>
				</form>
			</Form>
			<Link
				href="/"
				className="text-p">
				Login
			</Link>
		</div>
	);
};

export default SignupForm;
