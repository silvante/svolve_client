import Pincode from "@/app/lottie/Pincode";
import PincodeForm from "./PincodeForm";

export default async function ValidateOrganizationPage({
  params,
}: Readonly<{
  params: { unique_name: string };
}>) {
  const { unique_name } = await params;
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
