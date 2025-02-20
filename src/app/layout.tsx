import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['system-ui', 'arial'],
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "SoundSphere: The Marketplace for Music Education",
  description: "Sell your masterclasses, reach a global audience, and keep 95% of your earnings. Start sharing your expertise today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased font-sans`}>{children}</body>
    </html>
  );
}
