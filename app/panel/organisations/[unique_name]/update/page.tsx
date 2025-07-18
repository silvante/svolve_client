"use client";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";
import UpdateOrganisationForm from "./UpdateOrgForm";

export default function UpdateOrganisationPincode() {
  const { unique_name } = useParams();
  return (
    <div className="space-y-5">
      <Heading text={`Update organisation - ${unique_name}`} />
      <UpdateOrganisationForm />
    </div>
  );
}
