"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../globals.css";
import { useSelector } from "react-redux";
import PanelAuthDirector from "./PanelAuthDirector";
import Aside from "./(panel_components)/Aside";
import PanelHeader from "./(panel_components)/PanelHeader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading } = useSelector((state: any) => state.user);
  return (
    <>
      {loading ? (
        <PanelAuthDirector />
      ) : (
        <div className={`${roboto.className} antialiased flex min-h-screen`}>
          <Aside />
          <main className="flex-1">
            <PanelHeader />
            <div className="p-5 w-full xl:w-4/5 mx-auto">{children}</div>
          </main>
        </div>
      )}
    </>
  );
}
