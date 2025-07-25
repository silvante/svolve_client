"use client";
import Heading from "@/app/(global_components)/Heading";
import UpdateTypeForm from "./UpdateTypeForm";
import BackBtn from "@/app/(global_components)/BackBtn";
import { useSelector } from "react-redux";

export default function UpdateTypePage() {
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text="Update Type" />
        <BackBtn href={`/org/${organization.unique_name}/types`} />
      </div>
      <UpdateTypeForm />
    </div>
  );
}
