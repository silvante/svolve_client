import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Svolve from "../(global_components)/Svolve";
import { Toaster } from "react-hot-toast";
import SignUp from "@/public/backgraund/signup_bg.jpg";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
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
    <div
      className={`${roboto.variable} antialiased flex items-center h-screen`}
    >
      <Toaster position="top-right" reverseOrder={true} />
      <div className="bg-gray-200 max-w-lg w-full h-screen relative hidden lg:block">
        <Image
          src={SignUp}
          alt="Background image"
          fill
          priority
          className="w-full h-full object-cover"
          quality={50}
        />
      </div>
      <div className="max-w-xl w-full px-8">
        <Svolve />
        {children}
      </div>
    </div>
  );
}
