import Heading from "@/app/(global_components)/Heading";
import Image from "next/image";
import Link from "next/link";
import BoardingMessage from "./BoardingMessage";
import { Suspense } from "react";

export default function Onboarding() {
  return (
    <div className="space-y-4">
      <Heading text="Verify your email" />
      <Image
        src={"/images/magic_link.svg"}
        alt="Magic link"
        width={120}
        height={120}
      />
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <BoardingMessage />
      </Suspense>
      <Link href={"/"} className="text-violet-600 inline-block">
        go to main page
      </Link>
    </div>
  );
}
