"use client";
import BackBtn from "@/app/(global_components)/BackBtn";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";

export default function WorkerSettings() {
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading text="Worker settings" />
        <BackBtn href={`/org/${organization.unique_name}/workers`} />
      </div>
    </div>
  );
}
