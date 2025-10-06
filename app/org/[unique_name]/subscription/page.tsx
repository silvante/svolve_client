"use client";

import Spinner from "@/app/(global_components)/Spinner";
import subscriptionService from "@/app/api/services/subscriptioService";
import { Organization } from "@/app/types/User";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackBtn from "@/app/(global_components)/BackBtn";
import Image from "next/image";

export default function ValidateOrganizationPage() {
  const { unique_name } = useParams();
  const sParams = useSearchParams();
  const page = sParams.get("page");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // data
  const [org, setOrg] = useState<null | Organization>(null);
  const [url, setUrl] = useState<string | null>(null);

  async function getCheckout() {
    try {
      const res: any = await subscriptionService.generateCheckout(
        String(unique_name)
      );
      const response: { url: string; organization: Organization } = res;
      console.log(res);
      console.log(response);
      setOrg(response.organization);
      setUrl(response.url);
      setError(null);
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(
          error.response.data.message ||
            "An error occurred while validating the pincode."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCheckout();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2 text-center w-full">
          {error}
        </p>
      </div>
    );
  }

  console.log(url);
  if (!org || !url) {
    return;
  }

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="w-full flex flex-col h-full">
        <header className="w-full flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            {!org.logo ? (
              <Image
                src={"/icons/logo.svg"}
                alt="Logotype svolve"
                width={140}
                height={38.5}
              />
            ) : (
              <Image
                src={org.logo}
                alt="Logotype svolve"
                width={0}
                height={0}
                className="w-auto h-10"
              />
            )}
          </div>
          <div>
            <BackBtn
              href={page && page == "org" ? `/org/${unique_name}` : "/panel"}
            />
          </div>
        </header>
        <iframe
          src={url}
          className="w-full flex-1 outline-none"
          allow="payment"
        />
      </div>
    </div>
  );
}
