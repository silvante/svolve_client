"use client";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function JobMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { unique_name } = useParams();
  const { organization } = useSelector((state: any) => state.validator);
  return <div className={`${roboto.className} antialiased`}>{children}</div>;
}
