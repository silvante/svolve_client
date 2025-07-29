"use client";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";
import UpdateOrganizationForm from "./UpdateOrgForm";
import BackBtn from "@/app/(global_components)/BackBtn";

export default function UpdateOrganizationPincode() {
  const { unique_name } = useParams();
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text={`Update organization - ${unique_name}`} />
        <BackBtn href={`/panel/organizations`} />
      </div>
      <UpdateOrganizationForm />
    </div>
  );
}
