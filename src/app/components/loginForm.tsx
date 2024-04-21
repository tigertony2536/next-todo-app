"use client";
import { BaseButton } from "./button";
import Link from "next/link";
import { Person, Lock } from "react-bootstrap-icons";
import { FormField } from "./formField";
import { IFormInput } from "./signupForm";
import { useForm, FormProvider } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogInForm() {
  const router = useRouter();
  const methods = useForm<IFormInput>({
    criteriaMode: "all",
  });

  const onSubmit = async (data: IFormInput) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        methods.setError("password", {
          type: "Invalid",
          message: result.error,
          types: {
            Invalid: "Invalid email or password",
          },
        });
      } else {
        router.push("/home");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="h-auto w-[400px] flex flex-col gap-8 items-center justify-between pt-8 pb-8 pl-16 pr-16 rounded-xl shadow-2xl ">
      <FormProvider {...methods}>
        <form
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-8 w-full">
          <FormField
            type="email"
            name="email"
            placeholder="Email"
            options={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
            icon={<Person />}></FormField>
          <FormField
            type="password"
            name="password"
            placeholder="Password"
            options={{
              required: {
                value: true,
                message: "Password is required",
              },
            }}
            icon={<Lock />}></FormField>
          <BaseButton
            buttonType="submit"
            buttonSize="large"
            buttonStyle="primary">
            Log In
          </BaseButton>
        </form>
      </FormProvider>
      <Link
        className="hover:underline"
        href={"/signup"}>
        Sign up
      </Link>
    </div>
  );
}
