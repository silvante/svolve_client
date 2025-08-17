"use client";
import BackBtn from "@/app/(global_components)/BackBtn";
import Heading from "@/app/(global_components)/Heading";
import { useSelector } from "react-redux";

export default function DetailsPageOfWorkers() {
  const { organization } = useSelector((state: any) => state.validator);

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text="Worker details" />
        <BackBtn href={`/org/${organization.unique_name}/workers`} />
      </div>
    </div>
  );
}
