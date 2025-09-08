import Heading from "@/app/(global_components)/Heading";
import { RevenueStats } from "@/app/types/User";
import { useEffect, useState } from "react";

export default function RvTotal({ data }: { data: RevenueStats }) {
  const [year, setYear] = useState(0);
  const [total, setTotal] = useState(0);
  const thisMonth = data.revenueByMonth[data.revenueByMonth.length - 1];

  useEffect(() => {
    let yearly = 0;
    data.revenueByMonth.map((rm) => (yearly = yearly + rm.total));
    setYear(yearly);
  }, []);

  useEffect(() => {
    let total = 0;
    data.revenueByType.map((rm) => (total = total + rm.total));
    setTotal(total);
  }, []);

  return (
    <div className="space-y-5">
      <Heading text="In Total" />
      <div className="flex flex-wrap gap-4">
        <div className="py-4 px-6 rounded-xl border-gray-300 border-b-violet-600 border-b-2 border shadow-md space-y-2">
          <h3 className="text-xl font-semibold text_color">This month:</h3>
          <h3 className="text-lg font-semibold text_color">
            {thisMonth.total} <span className="text-violet-600">UZS</span>
          </h3>
          <p className="text-gray-600">Total revenue of this month.</p>
        </div>
        <div className="py-4 px-6 rounded-xl border-gray-300 border-b-violet-600 border-b-2 border shadow-md space-y-2">
          <h3 className="text-xl font-semibold text_color">Last 12 months:</h3>
          <h3 className="text-lg font-semibold text_color">
            {year} <span className="text-violet-600">UZS</span>
          </h3>
          <p className="text-gray-600">
            Total revenue of last 12 months (a year).
          </p>
        </div>
        <div className="py-4 px-6 rounded-xl border-gray-300 border-b-violet-600 border-b-2 border shadow-md space-y-2">
          <h3 className="text-xl font-semibold text_color">Total revenue:</h3>
          <h3 className="text-lg font-semibold text_color">
            {total} <span className="text-violet-600">UZS</span>
          </h3>
          <p className="text-gray-600">Total revenue of organization.</p>
        </div>
      </div>
    </div>
  );
}
