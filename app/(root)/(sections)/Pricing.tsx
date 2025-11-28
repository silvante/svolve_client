import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="text_color space-y-4">
      <p className="text-md md:text-lg">14 Days Free Trial - No Credit Card</p>
      <h2 className="text-3xl md:text-5xl">Simple & Clean Payment Method</h2>
      <p className="text-md md:text-lg">Request access today. No Credit Card Required.</p>

      <div className="p-5 md:p-8 border border-gray-300 rounded-2xl space-y-5">
        <div className="space-y-2">
          <h3 className="text-3xl md:text-5xl">
            99,000 UZS <span className="text-lg">per month</span> /{" "}
            <span className="text-lg">organization</span>
          </h3>
          <p className="text-md md:text-lg">No hidden fees, and extra costs</p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2">
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Unlimited client recording.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Monthly analysis of revenue and customer
            flow.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Multy-Organization management.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Hiring unlimited workers to single
            organization.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Find every single client ever recorded
            easily with search engine.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Free support from Community and creator
            himself.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2 flex items-start flex-col">
          <p className="text-md md:text-lg flex items-center gap-2">
            Pay with Visa, Mastercard, Apple Pay, Google Pay, PayPal.
          </p>
          <Link
            href={"/signup"}
            className="py-2 px-4 font-medium flex gap-2 items-center text-lg  text-white bg-violet-600 rounded-xl"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
