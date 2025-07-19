import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Header from "../(global_components)/Header";
import BG from "./BG";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Med Organisation Management",
  description: "Easy to use organisation management for medicine",
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
      <BG />
      <div className={`${roboto.className} antialiased`}>
        <Header />
        <main className="main_body">{children}</main>
      </div>
    </>
  );
}
