import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { StoreProvider } from "@/app/store/StoreProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diagnos Uz | Tashkilot boshqaruvi",
  description: "Tashkilotingizni osongina boshqaring",
  keywords: [
    "Diagnos Uz",
    "diagnos uz",
    "DIAGNOS UZ",
    "diagnos_uz",
    "DiagnosUz",
    "tashkilot",
    "boshqaruv",
    "tashkilotni boshqarish",
    "tashkilot boshqaruvi",
    "kompaniya boshqaruvi",
    "firma boshqaruvi",
    "biznesni boshqarish",
    "korxona boshqaruvi",
    "jamoani boshqarish",
    "xodimlarni boshqarish",
    "loyiha boshqaruvi",
    "moliya boshqaruvi",
    "resurslarni boshqarish",
    "strategik rejalashtirish",
    "operatsion boshqaruv",
    "organization management",
    "company management",
    "business management",
    "team management",
    "project management",
    "CRM",
    "ERP",
    "SaaS",
    "B2B",
    "management software",
  ],
  alternates: {
    canonical: "https://diagnos.uz/org",
  },
  openGraph: {  
    title: "Diagnos Uz | Tashkilot boshqaruvi",
    description: "Tashkilotingizni osongina boshqaring",
    type: "website",
    url: "https://diagnos.uz/org",
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
    title: "Diagnos Uz | Tashkilot boshqaruvi",
    description: "Tashkilotingizni osongina boshqaring",
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

export default function OrgMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} antialiased`}>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
