import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diagnos Uz | Ish xonasi",
  description: "Sizning ish xonangiz",
  keywords: ["Diagnos Uz", "ish xonasi", "ish", "vakansiyalar", "ish boshqaruvi"],
  alternates: {
    canonical: "https://diagnos.uz/job",
  },
  openGraph: {
    title: "Diagnos Uz | Ish xonasi",
    description: "Sizning ish xonangiz",
    type: "website",
    url: "https://diagnos.uz/job",
    images: [
      {
        url: "https://diagnos.uz/icons/profile.svg",
        width: 800,
        height: 600,
        alt: "Diagnos Uz Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnos Uz | Ish xonasi",
    description: "Sizning ish xonangiz",
    images: ["https://diagnos.uz/icons/profile.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function JobMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${inter.className} antialiased`}>{children}</div>;
}
