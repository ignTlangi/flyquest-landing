import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
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
  title: "FlyQuest | The Navigation System You Never Got",
  description:
    "FlyQuest bridges the gap between higher education and professional integration. ATS-optimised CV frameworks, career roadmaps, and transparent industry insights for South African students and graduates.",
  keywords: [
    "career development",
    "graduate support",
    "CV optimisation",
    "South Africa jobs",
    "student resources",
    "ATS CV",
    "career navigation",
  ],
  authors: [{ name: "TK", url: "https://www.linkedin.com/in/tkmatshaba/" }],
  openGraph: {
    title: "FlyQuest | Education is free. Learning is priceless.",
    description:
      "The navigation system you never got. Career frameworks for students stuck between graduation and getting hired.",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyQuest | Education is free. Learning is priceless.",
    description:
      "The navigation system you never got. Career frameworks for students stuck between graduation and getting hired.",
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
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
