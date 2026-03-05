import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Svolve | Ish xonasi",
  description: "Sizning ish xonangiz",
  keywords: ["Svolve", "ish xonasi", "ish", "vakansiyalar", "ish boshqaruvi"],
  alternates: {
    canonical: "https://svolve.uz/job",
  },
  openGraph: {
    title: "Svolve | Ish xonasi",
    description: "Sizning ish xonangiz",
    type: "website",
    url: "https://svolve.uz/job",
    images: [
      {
        url: "https://svolve.uz/icons/profile.svg",
        width: 800,
        height: 600,
        alt: "Svolve Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Svolve | Ish xonasi",
    description: "Sizning ish xonangiz",
    images: ["https://svolve.uz/icons/profile.svg"],
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
