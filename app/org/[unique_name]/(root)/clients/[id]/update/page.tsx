"use client";
import Heading from "@/app/(global_components)/Heading";
import UpdateClientForm from "./UpdateClientForm";
import BackBtn from "@/app/(global_components)/BackBtn";
import { useSelector } from "react-redux";

export default function UpdateClient() {
  const { organisation } = useSelector((state: any) => state.validator);
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text="Update Client" />
        <BackBtn href={`/org/${organisation.unique_name}`} />
      </div>
      <UpdateClientForm />
    </div>
  );
}
