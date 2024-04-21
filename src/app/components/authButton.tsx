"use client";
import { signOut, useSession } from "next-auth/react";
import { BaseButton } from "@/app/components/button";

export default function AuthButton({ ...className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col gap-2 items-end fixed right-16 text-black/50 text-paragraph-small">
        {session?.user?.name}
        <button onClick={() => signOut({ redirect: false, callbackUrl: "/" })}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 items-end fixed right-16 text-black/50 text-paragraph-small">
      Not signed in <br />
      <BaseButton
        type="submit"
        buttonSize="large"
        buttonStyle="primary"
        text="Log In"></BaseButton>
    </div>
  );
}
