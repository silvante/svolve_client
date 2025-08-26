"use client";
import Heading from "@/app/(global_components)/Heading";
import BackBtn from "@/app/(global_components)/BackBtn";
import { useSelector } from "react-redux";
import UpdateClientForm from "@/app/org/[unique_name]/(root)/clients/[id]/update/UpdateClientForm";

export default function UpdateClient() {
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text="Update Client" />
        <BackBtn href={`/job/${organization.unique_name}`} />
      </div>
      <UpdateClientForm />
    </div>
  );
}
