"use client";
import { BaseButton } from "./button";
import Link from "next/link";
import { Person, Lock } from "react-bootstrap-icons";
import { FormField } from "./formField";
import { IFormInput } from "./signupForm";
import { useForm, FormProvider } from "react-hook-form";

export default function LogInForm() {
  const methods = useForm<IFormInput>({
    criteriaMode: "all",
  });
  const onSubmit = async (data: IFormInput) => {
    console.log("SUCCESS", data);
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
              validate: {
                isEmail: (value: string) => {
                  return (
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ||
                    "Invalid email address"
                  );
                },
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
              validate: {
                includeSmall: (fieldValue) => {
                  return (
                    /(?=.*[a-z])/.test(fieldValue) ||
                    "Password must contain at least 1 lowercase letter"
                  );
                },
                includeCapital: (value: string) => {
                  return (
                    /(?=.*[A-Z])/.test(value) ||
                    "Password must contain at least 1 uppercase letter"
                  );
                },
                includeSpecial: (value: string) => {
                  return (
                    /(?=.*[@$!%*?&])/.test(value) ||
                    "Password must include at least one special character (@, $, !, %, *, ?, &)"
                  );
                },
                // Ensure the password is at least 8 characters long
                lengthCheck: (value: string) => {
                  return (
                    value.length >= 8 ||
                    "Password must contain at least 8 or more characters"
                  );
                },
              },
            }}
            icon={<Lock />}></FormField>
          <BaseButton
            buttonType="submit"
            buttonSize="large"
            buttonStyle="primary"
            isDisabled={false}>
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
