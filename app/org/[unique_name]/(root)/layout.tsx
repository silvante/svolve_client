import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import OrgValidator from "./OrgValidation";
import PanelAuthDirector from "@/app/panel/PanelAuthDirector";
import OrgHeader from "../../(components)/OrgHeader";
import OrgBreadcrumbs from "../../(components)/OrgBreadcrumbs";
import OrgAside from "../../(components)/OrgAside";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { unique_name: string };
}>) {
  const { unique_name } = await params;
  return (
    <>
      <PanelAuthDirector />
      <OrgValidator unique_name={unique_name} />
      <div className={`${roboto.className} antialiased w-full h-screen`}>
        <OrgHeader />
        <main className="w-full h-screen flex">
          <OrgAside />
          <div className="flex-1 pt-20 px-5 container mx-auto space-y-5">
            <div className="w-full flex items-center justify-start">
              <OrgBreadcrumbs />
            </div>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
