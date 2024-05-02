"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/app/components/button/button";
import { useRouter } from "next/navigation";

export default function AuthButton({ className }: { className: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return (
      <div
        className={`${className} flex flex-col gap-2 items-end fixed right-16 text-black/50 text-paragraph-small`}>
        {session?.user?.name}
        <button
          type="button"
          onClick={() => {
            signOut({ redirect: false, callbackUrl: "/" });
            router.push("/");
          }}>
          Sign out
        </button>
      </div>
    );
  }
}
