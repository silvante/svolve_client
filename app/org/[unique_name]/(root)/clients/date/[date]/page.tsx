"use client";
import BackBtn from "@/app/(global_components)/BackBtn";
import Heading from "@/app/(global_components)/Heading";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function DayPage() {
  const { date } = useParams();
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading text="All clients" />
        <BackBtn href={`/org/${organization.unique_name}/clients`} />
      </div>
      <p className="text-lg mt-2">
        <span className="font-mono">Selected date: {date}</span>
      </p>
    </div>
  );
}
