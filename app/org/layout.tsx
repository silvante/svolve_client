import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Organisation Management",
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
    <div className={`${roboto.className} antialiased`}>
      <main>{children}</main>
    </div>
  );
}
