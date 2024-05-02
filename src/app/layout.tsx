import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import AuthButton from "@/app/components/button/authButton";
import SessionProvider from "@/app/components/SessionProvider";
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
  const fullUrl = headersList.get("my-url") || "";
  console.log("fullUrl: " + fullUrl);
  console.log(fullUrl.includes("/protected/"));

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`min-w-[500px] flex flex-col flex-nowrap items-center pt-8 pl-16 pr-16  box-border ${comfortaa.className} `}>
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
      </SessionProvider>
    </html>
  );
}
