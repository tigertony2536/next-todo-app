"use client";

import { BaseButton } from "./button";
import Link from "next/link";
import FormInput from "./formInput";
import { FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type IFormInput = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const router = useRouter();
  const methods = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    console.log("SUCCESS", data);
  };
  // async function handleSubmitForm(e: FormEvent) {
  //   try {
  //     const res = await axios.post("/api/auth/signup", user);
  //     router.push("http://localhost:3000");
  //     console.log(res);
  //   } catch (error) {
  //     console.log(`Signup failed. ${error}`);
  //   }
  // }

  return (
    <FormProvider {...methods}>
      <div className="h-auto w-80 gap-8 flex flex-col items-center justify-between p-8 rounded-xl shadow-2xl ">
        <div>
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-8">
            <FormInput
              type="text"
              name="name"
              placeholder="Name"></FormInput>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"></FormInput>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"></FormInput>
            <BaseButton
              buttonType="submit"
              buttonSize="large"
              buttonStyle="primary"
              isDisabled={false}>
              Sign up
            </BaseButton>
          </form>
        </div>
        <div>
          <Link
            className="hover:underline"
            href={"/"}>
            Login
          </Link>
        </div>
      </div>
    </FormProvider>
  );
}
