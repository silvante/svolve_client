import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import OrgValidator from "./OrgValidation";
import PanelAuthDirector from "@/app/panel/PanelAuthDirector";
import OrgHeader from "../../(components)/OrgHeader";
import OrgBreadcrumbs from "../../(components)/OrgBreadcrumbs";

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
    <div className={`${roboto.className} antialiased`}>
      <PanelAuthDirector />
      <OrgValidator unique_name={unique_name} />
      <OrgHeader />
      <main className="container mx-auto py-5 space-y-5">
        <div className="w-full flex items-center justify-start">
          <OrgBreadcrumbs />
        </div>
        {children}
      </main>
    </div>
  );
}
