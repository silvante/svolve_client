import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Svolve from "../(global_components)/Svolve";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose what you need
  variable: "--font-roboto", // Optional: use in CSS
});

export const metadata: Metadata = {
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
      <body
        className={`${roboto.variable} antialiased flex justify-center items-center h-screen px-5`}
      >
        <Image
          src="/backgraund/group.svg"
          alt="Backgraund"
          fill
          className=" object-cover fixed top-0 left-0 z-0"
        />
        <div className="z-10 bg-white rounded-2xl p-8 max-w-xl w-full space-y-4">
          <Svolve />
          {children}
        </div>
      </body>
    </html>
  );
}
