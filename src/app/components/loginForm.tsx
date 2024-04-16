"use client";
import { BaseButton } from "./button";
import Link from "next/link";
import { Person, Lock } from "react-bootstrap-icons";
import FormInput from "./formInput";
import { useRouter } from "next/navigation";

export default function LogInForm() {
  const router = useRouter();
  return (
    <div
      className="h-auto 
      flex flex-col gap-8 items-center justify-between p-8 rounded-xl shadow-2xl ">
      <div>
        <form
          // action={}
          method="GET"
          className="flex flex-col items-center gap-8">
          <FormInput
            type="email"
            name="email"
            placeholder="Email">
            <Person />
          </FormInput>
          <FormInput
            type="password"
            name="password"
            placeholder="Password">
            <Lock />
          </FormInput>
          <BaseButton
            buttonType="submit"
            buttonSize="large"
            buttonStyle="primary"
            isDisabled={false}>
            Log In
          </BaseButton>
        </form>
      </div>
      <div>
        <Link
          className="hover:underline"
          href={"/signup"}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
