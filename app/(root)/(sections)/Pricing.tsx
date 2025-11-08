import Heading from "@/app/(global_components)/Heading";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="text_color space-y-4">
      <p className="text-lg">14 Days Free Trial - No Credit Card</p>
      <h2 className="text-5xl ">Simple & Clean Payment Method</h2>
      <p className="text-lg">Request access today. No Credit Card Required.</p>

      <div className="p-8 border border-gray-300 rounded-2xl space-y-5">
        <div className="space-y-2">
          <h3 className="text-5xl">
            99,000 UZS <span className="text-lg">per month</span> /{" "}
            <span className="text-lg">organization</span>
          </h3>
          <p className="text-lg">No hidden fees, and extra costs</p>
        </div>
        <hr className="border-gray-300" />
        <div className="space-y-2">
          <p className="text-lg flex items-center gap-2">
            <Check color="#000000" /> Request access today. No Credit Card Required.
          </p>
          <p className="text-lg flex items-center gap-2">
            <Check color="#000000" /> Request access today. No Credit Card Required.
          </p>
        </div>
      </div>
    </div>
  );
}
