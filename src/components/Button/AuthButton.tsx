"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
	className?: string;
}

export default function AuthButton({ className }: AuthButtonProps) {
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
