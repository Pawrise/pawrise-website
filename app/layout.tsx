import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pawrise Care · Collier connecté santé & bien-être animal",
  description:
    "Pawrise Care : collier connecté + IA d'orientation vétérinaire. Architecture, backlog, pilotage, business et risques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
