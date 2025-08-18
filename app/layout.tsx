import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./store/StoreProvider";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NextTopLoader color="#7f22fe" />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
