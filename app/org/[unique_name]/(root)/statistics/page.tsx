"use client";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";
import OrganizationView from "./OrganizationView";
import Totals from "./(sections)/Totals";
import RevenueStatistics from "./(sections)/RevenueStats";
import ClientStatistics from "./(sections)/ClientStats";

export default function StatisticsPage() {
  const { organization } = useSelector((state: any) => state.validator);

  return (
    <div className="space-y-5">
      <Heading text="Statistics" />
      <OrganizationView organization={organization} />
      <Totals organization={organization} />
      <RevenueStatistics organization={organization} />
      <ClientStatistics organization={organization} />
    </div>
  );
}
