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
  title: "Svolve | Tashkilot boshqaruvi",
  description: "Tashkilotingizni osongina boshqaring",
  keywords: ["Svolve", "tashkilot", "boshqaruv", "tashkilotni boshqarish"],
  alternates: {
    canonical: "https://svolve.uz/org",
  },
  openGraph: {  
    title: "Svolve | Tashkilot boshqaruvi",
    description: "Tashkilotingizni osongina boshqaring",
    type: "website",
    url: "https://svolve.uz/org",
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
    title: "Svolve | Tashkilot boshqaruvi",
    description: "Tashkilotingizni osongina boshqaring",
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
