"use client";
import Heading from "@/app/(global_components)/Heading";
import ClientSearchEngine from "./(components)/ClientSearchEngine";
import SearchCalendar from "./(components)/SearchCalendar";
import { useSelector } from "react-redux";
import ClientStatistics from "../statistics/(sections)/ClientStats";

export default function ClientPage() {
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <div className="space-y-5">
      <div className="w-full flex items-center justify-between">
        <Heading text="Mijozlarni qidirish" />
      </div>
      <ClientSearchEngine organization={organization} />
      <SearchCalendar organization={organization} />
      <ClientStatistics organization={organization} />
    </div>
  );
}
