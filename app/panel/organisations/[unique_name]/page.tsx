"use client";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";

export default function Organisation() {
  const { unique_name } = useParams();
  return (
    <div className="space-y-5">
      <Heading text={`organisation - ${unique_name}`} />
    </div>
  );
}
