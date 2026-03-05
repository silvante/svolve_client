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
  keywords: ["Diagnos Uz", "tashkilot", "boshqaruv", "tashkilotni boshqarish"],
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
