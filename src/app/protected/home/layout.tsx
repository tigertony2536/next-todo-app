import type { Metadata } from "next";

import "@/app/globals.css";
import AuthButton from "@/components/Button/AuthButton";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<AuthButton className="absolute top-2 right-2" />
			<div className="w-full h-full"> {children}</div>
		</div>
	);
}
