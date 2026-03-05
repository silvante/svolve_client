import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./store/StoreProvider";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
// import { cookies } from "next/headers";

// // langs
// import en from "@/meesages/en.json";
// import uz from "@/meesages/uz.json";
// import ru from "@/meesages/ru.json";
// import LangProvider from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diagnos Uz | O'zbekistondagi Tashkilot Boshqaruvi",
  description: "O'zbekistondagi bizneslar uchun qulay tashkilot va ish boshqaruvi platformasi",
  keywords: ["Diagnos Uz", "tashkilot boshqaruvi", "ish boshqaruvi", "xodimlar", "vakansiyalar", "O'zbekiston"],
  alternates: {
    canonical: "https://diagnos.uz",
  },
  openGraph: {
    title: "Diagnos Uz | O'zbekistondagi Tashkilot Boshqaruvi",
    description: "O'zbekistondagi bizneslar uchun qulay tashkilot va ish boshqaruvi platformasi",
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
    title: "Diagnos Uz | O'zbekistondagi Tashkilot Boshqaruvi",
    description: "O'zbekistondagi bizneslar uchun qulay tashkilot va ish boshqaruvi platformasi",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const StoredCookies = await cookies();
  // const lang = StoredCookies.get("lang")?.value || "en";

  // const translations: Record<string, any> = {
  //   en,
  //   uz,
  //   ru,
  // };

  // for language

  // const messages = translations[lang] || translations.en;

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="#7f22fe" showSpinner={false} />
        {/* <LangProvider lang={lang} messages={messages}> */}
          <StoreProvider>{children}</StoreProvider>
        {/* </LangProvider> */}
      </body>
    </html>
  );
}
