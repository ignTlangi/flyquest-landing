import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlyQuest | The Playbook the Education System Never Gave You",
  description:
    "FlyQuest helps South African students and graduates navigate tertiary education and early career. ATS-optimised CV templates, career frameworks, and transparent industry insights.",
  keywords: [
    "CV review South Africa",
    "graduate jobs South Africa",
    "student career help",
    "ATS CV template",
    "career guidance students",
    "first job after university",
    "FlyQuest",
  ],
  authors: [{ name: "Tlangelani Khosa", url: "https://www.linkedin.com/in/tlangi/" }],
  openGraph: {
    title: "FlyQuest | Education is free. Learning is priceless.",
    description:
      "The playbook the education system never gave you. Career frameworks for students stuck between graduation and getting hired.",
    type: "website",
    locale: "en_ZA",
    url: "https://flyquest.co.za",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyQuest | Education is free. Learning is priceless.",
    description:
      "The playbook the education system never gave you. Career frameworks for students stuck between graduation and getting hired.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmMono.variable} ${dmSans.variable}`}>
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
