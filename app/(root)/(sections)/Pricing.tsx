import Heading from "@/app/(global_components)/Heading";

export default function Pricing() {
  return (
    <div className="text_color space-y-4">
        <p className="text-lg">14 Days Free Trial - No Credit Card</p>
        <h2 className="text-5xl ">Simple & Clean Payment Method</h2>
        <p className="text-lg">Request access today. No Credit Card Required.</p>

        <div className="p-8 border border-gray-300 rounded-2xl">
            <div>
                <h3 className="text-5xl">99,000 UZS <span className="text-lg">per month</span></h3>
            </div>
        </div>
    </div>
  );
}
