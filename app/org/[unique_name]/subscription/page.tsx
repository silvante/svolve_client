"use client";

import Spinner from "@/app/(global_components)/Spinner";
import subscriptionService from "@/app/api/services/subscriptioService";
import { Organization } from "@/app/types/User";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackBtn from "@/app/(global_components)/BackBtn";
import Image from "next/image";
import PaymentSuccess from "@/app/lottie/PaymentSuccess";
import Heading from "@/app/(global_components)/Heading";
import OrgFooter from "../../(components)/OrgFooter";
import VIP from "@/app/lottie/VIP";
import DayCounter from "@/app/(global_components)/DayCounter";

export default function SubScriptionPage() {
  const { unique_name } = useParams();
  const sParams = useSearchParams();
  const page = sParams.get("page");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // data
  const [org, setOrg] = useState<null | Organization>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<boolean>(true);

  async function getCheckout() {
    try {
      const res: any = await subscriptionService.generateCheckout(
        String(unique_name)
      );
      const response: {
        url: string;
        organization: Organization;
        subscription: boolean;
      } = res;
      setOrg(response.organization);
      setUrl(response.url);
      setSubscription(response.subscription);
      setError(null);
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(
          error.response.data.message ||
          "Pin-kodni tekshirishda xatolik yuz berdi."
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
        <p className="text-red-600 bg-red-600/10 px-4 py-2 text-center w-full">
          {error}
        </p>
      </div>
    );
  }

  if (!org) {
    return;
  }

  if (!org.is_vip && url) {
    return window.location.href = url
  }

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="w-full flex flex-col h-full">
        <header className="w-full flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            {!org.logo ? (
              <Image
                src={"/icons/logo.svg"}
                alt="Svolve logotipi"
                width={140}
                height={38.5}
              />
            ) : (
              <Image
                src={org.logo}
                alt="Svolve logotipi"
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
        {org.is_vip && (
          <div className="w-full flex-1 outline-none flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <VIP />
              <Heading text="Tashkilot VIP hisoblanadi" />
            </div>
          </div>
        )}
        {!org.is_vip && subscription && !url && (
          <div className="w-full flex-1 outline-none flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <PaymentSuccess />
              <div className="flex flex-col items-center justify-center gap-2">
                <Heading text="Tashkilot obuna bo'lgan" />
                <DayCounter date={org.renews_at} />
              </div>
            </div>
          </div>
        )}
        {!org.is_vip && url && (
          <iframe
            src={url}
            className="w-full flex-1 outline-none"
            allow="payment"
          />
        )}
        <div className="w-full hidden items-center justify-between px-5 py-2 sm:flex">
          <OrgFooter />
        </div>
      </div>
    </div>
  );
}
