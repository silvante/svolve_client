"use client";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";

export default function UniqueNamePage() {
  const { unique_name } = useSelector((state: any) => state.validator);
  return (
    <div>
      <Heading text={`Home page - ${unique_name}`} />
    </div>
  );
}
