"use client";

import { BaseButton } from "./button";
import Link from "next/link";
import { FormField } from "./formField";

import { useForm, FormProvider } from "react-hook-form";

export type IFormInput = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  // const router = useRouter();

  const methods = useForm<IFormInput>({
    criteriaMode: "all",
  });

  const onSubmit = async (data: IFormInput) => {
    console.log("SUCCESS", data);
  };

  return (
    <div className="h-auto w-[400px] flex flex-col items-center justify-between pl-16 pr-16 pt-8 pb-8 rounded-xl shadow-2xl gap-8">
      <div className="w-full">
        <FormProvider {...methods}>
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full gap-8">
            <FormField
              type="text"
              name="name"
              placeholder="Name"
              options={{
                required: {
                  value: true,
                  message: "Name is required",
                },
              }}></FormField>
            <FormField
              type="email"
              name="email"
              placeholder="Email"
              options={{
                required: {
                  value: true,
                  message: "Email is required",
                },
              }}></FormField>
            <FormField
              type="password"
              name="password"
              placeholder="Password"
              options={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}></FormField>
            <BaseButton
              buttonType="submit"
              buttonSize="large"
              buttonStyle="primary"
              isDisabled={false}>
              Sign up
            </BaseButton>
          </form>
        </FormProvider>
      </div>
      <div>
        <Link
          className="hover:underline"
          href={"/"}>
          Login
        </Link>
      </div>
    </div>
  );
}
