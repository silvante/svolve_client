"use client"
import Pincode from "@/app/lottie/Pincode";
import PincodeForm from "./PincodeForm";
import { useParams } from "next/navigation";

export default function ValidateOrganizationPage() {
  const params = useParams()
  const unique_name = String(params.unique_name);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-5">
      <Pincode />
      <h1 className="text-xl">
        Enter Pincode of <span className="font-semibold">@{unique_name}</span>
      </h1>
      <PincodeForm unique_name={unique_name} />
    </div>
  );
}
