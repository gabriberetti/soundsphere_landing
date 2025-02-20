import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoundSphere - Elevate Your Music Production Skills",
  description: "Access exclusive masterclasses, sample packs, and tutorials from industry professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
