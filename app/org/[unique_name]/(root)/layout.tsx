"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import OrgValidator from "./OrgValidation";
import PanelAuthDirector from "@/app/panel/PanelAuthDirector";
import OrgHeader from "../../(components)/OrgHeader";
import OrgBreadcrumbs from "../../(components)/OrgBreadcrumbs";
import OrgAside from "../../(components)/OrgAside";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading } = useSelector((state: any) => state.validator);
  const { unique_name }: { unique_name: string } = useParams();
  return (
    <>
      {loading ? (
        <>
          <PanelAuthDirector />
          <OrgValidator unique_name={unique_name} />
        </>
      ) : (
        <div className={`${roboto.className} antialiased w-full`}>
          <OrgHeader />
          <main className="w-full flex">
            <OrgAside />
            <div className="flex-1 pt-20 px-5 container mx-auto space-y-5">
              <div className="w-full flex items-center justify-start">
                <OrgBreadcrumbs />
              </div>
              {children}
            </div>
          </main>
        </div>
      )}
    </>
  );
}
