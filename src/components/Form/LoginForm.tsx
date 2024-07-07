"use client";

import FormInput from "./FormInput";
import { LoginInput, userSchema } from "./form.type";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import Link from "next/link";

const LoginForm = () => {
	const form = useForm<LoginInput>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur", 
	});

	function onSubmit(data: LoginInput) {
		console.log(`email: ${data.email} password: ${data.password}`);
	}

	return (
		<div className="flex flex-col gap-4 items-center">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormInput name="email"></FormInput>
					<FormInput name="password"></FormInput>
					<Button
						type="submit"
						className="w-full">
						Login
					</Button>
				</form>
			</Form>
			<Link
				href="/signup"
				className="text-p">
				Signup
			</Link>
		</div>
	);
};

export default LoginForm;
