import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import AuthButton from "@/components/Button/AuthButton";
// import { SessionProvider } from "next-auth/react";
import SessionWrapper from "@/components/Auth/SessionWrapper";
import { headers } from "next/headers";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "To do App",
	description: "Mage your life manageable with ease",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession();
	const headersList = await headers();
	const fullUrl = (await headersList.get("my-url")) || "";
	console.log("session: " + session);
	console.log("fullUrl: " + fullUrl);
	console.log(fullUrl.includes("/protected/"));

	return (
		<html lang="en">
			<SessionWrapper session={session}>
				<body
					className={`relative min-w-[500px] flex flex-col flex-nowrap items-center pt-8 pl-16 pr-16  box-border ${comfortaa.className} `}>
					{fullUrl.includes("/protected/") ? (
						<AuthButton className="absolute top-4 right-4" />
					) : (
						""
					)}
					<h1 className=" sm:text-h1 light text-h2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-8 font-semibold">
						To Do App
					</h1>
					{children}
				</body>
			</SessionWrapper>
		</html>
	);
}
