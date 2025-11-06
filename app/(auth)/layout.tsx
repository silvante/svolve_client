import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Svolve from "../(global_components)/Svolve";
import { Toaster } from "react-hot-toast";
import SignUp from "@/public/backgraund/signup_bg.jpg";
import SignIn from "@/public/backgraund/signin_bg.jpg";

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
    <div
      className={`${roboto.variable} antialiased flex items-center h-screen`}
    >
      <Toaster position="top-right" reverseOrder={true} />
      <div className="bg-gray-200 max-w-lg w-full h-screen">
        <Image src={SignUp} alt="Background image" width={0} height={0} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-xl w-full px-8">
        <Svolve />
        {children}
      </div>
    </div>
  );
}
