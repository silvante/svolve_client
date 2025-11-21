import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./store/StoreProvider";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { cookies } from "next/headers";

// langs
import en from "@/meesages/en.json";
import uz from "@/meesages/uz.json";
import ru from "@/meesages/ru.json";
import LangProvider from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Payment SaaS of Uzbekistan",
  description: "Easy to use payment API for startups",
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const StoredCookies = await cookies();
  const lang = StoredCookies.get("lang")?.value || "en";

  const translations: Record<string, any> = {
    en,
    uz,
    ru,
  };

  const messages = translations[lang] || translations.en;

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NextTopLoader color="#7f22fe" />
        <LangProvider lang={lang} messages={messages}>
          <StoreProvider>{children}</StoreProvider>
        </LangProvider>
      </body>
    </html>
  );
}
