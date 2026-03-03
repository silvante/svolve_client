import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Tibbiy Tashkilot Boshqaruvi | Panel",
  description: "Tibbiyot uchun qulay tashkilot boshqaruvi",
  keywords: ["Svolve", "tibbiy tashkilot", "boshqaruv", "panel", "tibbiyot"],
  alternates: {
    canonical: "https://svolve.uz/panel",
  },
  openGraph: {
    title: "Svolve | Tibbiy Tashkilot Boshqaruvi | Panel",
    description: "Tibbiyot uchun qulay tashkilot boshqaruvi",
    type: "website",
    url: "https://svolve.uz/panel",
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
    title: "Svolve | Tibbiy Tashkilot Boshqaruvi | Panel",
    description: "Tibbiyot uchun qulay tashkilot boshqaruvi",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${roboto.className} antialiased`}>{children}</div>;
}
