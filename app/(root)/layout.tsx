import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "../(global_components)/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diagnos Uz | Tibbiy Tashkilot Boshqaruvi",
  description: "Tibbiyot uchun qulay tashkilot boshqaruvi",
  keywords: [
    "Diagnos Uz",
    "diagnos uz",
    "DIAGNOS UZ",
    "diagnos_uz",
    "DiagnosUz",
    "tibbiy tashkilot",
    "tashkilot boshqaruvi",
    "tibbiyot",
    "sog'liqni saqlash",
    "shifoxona boshqaruvi",
    "klinika boshqaruvi",
    "tibbiy markaz",
    "elektron tibbiy yozuvlar",
    "pacientlarni boshqarish",
    "tibbiy dasturiy ta'minot",
    "O'zbekistondagi tibbiyot",
    "Toshkentdagi klinikalar",
    "online konsultatsiya",
    "shifokorlar uchun dastur",
    "tibbiy texnologiyalar",
    "diagnostika markazi",
    "laboratoriya boshqaruvi",
    "tibbiy sug'urta",
    "sog'liqni saqlash tizimi",
    "telemeditsina",
    "mobil sog'liqni saqlash",
    "uzbekistan medical",
    "medical software uzbekistan",
    "healthcare in uzbekistan",
    "e-health uzbekistan",
  ],
  alternates: {
    canonical: "https://diagnos.uz",
  },
  openGraph: {
    title: "Diagnos Uz | Tibbiy Tashkilot Boshqaruvi",
    description: "Tibbiyot uchun qulay tashkilot boshqaruvi",
    type: "website",
    url: "https://diagnos.uz",
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
    title: "Diagnos Uz | Tibbiy Tashkilot Boshqaruvi",
    description: "Tibbiyot uchun qulay tashkilot boshqaruvi",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={`${inter.className} antialiased`}>
        <Header />
        <main className="main_body">{children}</main>
      </div>
    </>
  );
}
