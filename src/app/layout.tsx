import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do App",
  description: "Simple Fullstack To Do App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center pt-16  ${comfortaa.className}`}>
        <h1 className="light text-h1 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-8">
          To Do App
        </h1>
        {children}
      </body>
    </html>
  );
}
