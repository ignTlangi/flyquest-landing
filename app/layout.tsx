import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  title: "FlyQuest | Education is free. Learning is priceless.",
  description:
    "Bridging the gap between higher education and professional integration. Tactical frameworks, ATS-optimised CV systems, and transparent mentorship for South African students.",
  keywords: [
    "career development",
    "graduate support",
    "CV optimisation",
    "South Africa education",
    "student mentorship",
    "ATS CV template",
    "career navigation",
    "FlyQuest",
  ],
  authors: [{ name: "Tlangelani Khosa (TK)", url: "https://www.linkedin.com/in/tlangi/" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "FlyQuest | Education is free. Learning is priceless.",
    description:
      "The navigation system the traditional education system left out. Build your roadmap from graduation to professional integration.",
    url: "https://www.flyquest.co.za",
    siteName: "FlyQuest",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyQuest | Education is free. Learning is priceless.",
    description:
      "Bridging the gap between higher education and professional integration for South African students.",
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
    <html lang="en" className={`${dmMono.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}