import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { StoreProvider } from "@/app/store/StoreProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Organisation management",
  description: "Manage your organisation easily",
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
    <div className={`${roboto.className} antialiased`}>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
