import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import SessionProvider from "./components/SessionProvider";

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

  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center pt-8  ${comfortaa.className}`}>
        <h1 className="light text-h1 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-8 font-semibold">
          To Do App
        </h1>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
