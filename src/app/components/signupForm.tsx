"use client";

import { BaseButton } from "./button";
import Link from "next/link";
import { FormField } from "./formField";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

export type IFormInput = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const router = useRouter();

  const methods = useForm<IFormInput>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  const onSubmit = async (data: IFormInput) => {
    try {
      const res = await axios.post("/api/auth/signup", data);
      console.log("SUCCESS", res);
      router.push("/");
    } catch (error) {
      console.log("ERROR", error);
      methods.setError("email", {
        type: "duplicated",
        message: "duplicated email",
        types: {
          duplicated: "This email have been used",
        },
      });
    }
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
                validate: {
                  isEmail: (value: string) => {
                    return (
                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ||
                      "Invalid email address"
                    );
                  },
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
