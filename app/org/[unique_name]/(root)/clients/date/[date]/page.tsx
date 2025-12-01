"use client";
import BackBtn from "@/app/(global_components)/BackBtn";
import Heading from "@/app/(global_components)/Heading";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import ClientList from "./ClientList";

export default function DayPage() {
  const { date } = useParams();
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text="Barcha mijozlar" />
        <BackBtn href={`/org/${organization.unique_name}/clients`} />
      </div>
      <ClientList organization={organization} date={String(date)} />
    </div>
  );
}
