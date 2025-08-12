"use client";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";
import OrganizationView from "./OrganizationView";

export default function StatisticsPage() {
  const { organization } = useSelector((state: any) => state.validator);

  return (
    <div className="space-y-5">
      <Heading text="Statistics" />
      <OrganizationView organization={organization} />
    </div>
  );
}
