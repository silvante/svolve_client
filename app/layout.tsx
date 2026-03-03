import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./store/StoreProvider";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
// import { cookies } from "next/headers";

// // langs
// import en from "@/meesages/en.json";
// import uz from "@/meesages/uz.json";
// import ru from "@/meesages/ru.json";
// import LangProvider from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | O'zbekistondagi Tashkilot Boshqaruvi",
  description: "O'zbekistondagi bizneslar uchun qulay tashkilot va ish boshqaruvi platformasi",
  keywords: ["Svolve", "tashkilot boshqaruvi", "ish boshqaruvi", "xodimlar", "vakansiyalar", "O'zbekiston"],
  alternates: {
    canonical: "https://svolve.uz",
  },
  openGraph: {
    title: "Svolve | O'zbekistondagi Tashkilot Boshqaruvi",
    description: "O'zbekistondagi bizneslar uchun qulay tashkilot va ish boshqaruvi platformasi",
    type: "website",
    url: "https://svolve.uz",
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
    title: "Svolve | O'zbekistondagi Tashkilot Boshqaruvi",
    description: "O'zbekistondagi bizneslar uchun qulay tashkilot va ish boshqaruvi platformasi",
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

  // const messages = translations[lang] || translations.en;

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NextTopLoader color="#7f22fe" showSpinner={false} />
        {/* <LangProvider lang={lang} messages={messages}> */}
          <StoreProvider>{children}</StoreProvider>
        {/* </LangProvider> */}
      </body>
    </html>
  );
}
