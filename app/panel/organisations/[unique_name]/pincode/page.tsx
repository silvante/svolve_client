"use client";
import { useParams } from "next/navigation";
import Heading from "@/app/(global_components)/Heading";
import UpdatePincodeForm from "./UpdatePincodeForm";

export default function UpdateOrganisationPincode() {
  const { unique_name } = useParams();
  return (
    <div className="space-y-5">
      <Heading text={`Update pincode - ${unique_name}`} />
      <UpdatePincodeForm />
    </div>
  );
}
