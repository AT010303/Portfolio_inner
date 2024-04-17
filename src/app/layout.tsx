import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanistinter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={urbanistinter.className}>{children}</body>
    </html>
  );
}
