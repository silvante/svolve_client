import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Aside from "./(panel_components)/Aside";
import PanelHeader from "./(panel_components)/PanelHeader";
import PanelAuthDirector from "./PanelAuthDirector";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Med Organisation Management | Panel",
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
    <div className={`${roboto.className} antialiased flex min-h-screen`}>
      <PanelAuthDirector />
      <Aside />
      <main className="flex-1">
        <PanelHeader />
        <div className="p-5 w-full xl:w-4/5 mx-auto">{children}</div>
      </main>
    </div>
  );
}
