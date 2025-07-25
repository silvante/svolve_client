"use client";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";
import UpdateOrganisationForm from "./UpdateOrgForm";
import BackBtn from "@/app/(global_components)/BackBtn";

export default function UpdateOrganisationPincode() {
  const { unique_name } = useParams();
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text={`Update organization - ${unique_name}`} />
        <BackBtn href={`/panel/organisations`} />
      </div>
      <UpdateOrganisationForm />
    </div>
  );
}
