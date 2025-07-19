"use client";
import Heading from "@/app/(global_components)/Heading";
import { useParams } from "next/navigation";
import UpdateTypeForm from "./UpdateTypeForm";

export default function UpdateTypePage() {
  const { id } = useParams();
  return (
    <div className="space-y-5">
      <Heading text="Update Type" />
      <UpdateTypeForm />
    </div>
  );
}
