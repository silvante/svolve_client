import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Job room",
  description: "Your work room",
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function JobMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${roboto.className} antialiased`}>{children}</div>;
}
