import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "../(global_components)/Header";
import Aside from "./(panel_components)/Aside";
import PanelHeader from "./(panel_components)/PanelHeader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Svolve | Payment SaaS of Uzbekistan",
  description: "Easy to use payment API for startups",
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
      <body className={`${roboto.className} antialiased flex min-h-screen`}>
        <Aside />
        <main className="flex-1">
          <PanelHeader />
          <div className="p-5">{children}</div>
        </main>
      </body>
    </html>
  );
}
