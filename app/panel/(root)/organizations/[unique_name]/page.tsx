"use client";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";
import BackBtn from "@/app/(global_components)/BackBtn";

export default function Organization() {
  const { unique_name } = useParams();
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text={`Yangilash - ${unique_name}`} />
        <BackBtn href={`/panel/organizations`} />
      </div>
    </div>
  );
}
