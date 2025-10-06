"use client";

import { useParams } from "next/navigation";
import BackBtn from "@/app/(global_components)/BackBtn";
import Image from "next/image";
import Heading from "@/app/(global_components)/Heading";
import OrgFooter from "@/app/org/(components)/OrgFooter";
import PaymentFailed from "@/app/lottie/PaymentFailed";

export default function NotSubscribedPage() {
  const { unique_name } = useParams();

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="w-full flex flex-col h-full">
        <header className="w-full flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <Image
              src={"/icons/logo.svg"}
              alt="Logotype svolve"
              width={140}
              height={38.5}
            />{" "}
            <p className="bg-gray-100 px-2">{unique_name}</p>
          </div>
          <div>
            <BackBtn href={"/panel"} />
          </div>
        </header>
        <div className="w-full flex-1 outline-none flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <PaymentFailed />
            <Heading text="Organization is not Subscribed" />
            <p className="text_color">Contact organization owner</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between p-5">
          <OrgFooter />
        </div>
      </div>
    </div>
  );
}
