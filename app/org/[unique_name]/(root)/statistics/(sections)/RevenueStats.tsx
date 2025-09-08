import Heading from "@/app/(global_components)/Heading";
import Spinner from "@/app/(global_components)/Spinner";
import statsService from "@/app/api/services/statsService";
import {
  Organization,
  RevenueByDay,
  RevenueByMonth,
  RevenueByType,
  RevenueStats,
} from "@/app/types/User";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateRevenueStats } from "@/app/store/slices/statsSlice";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import RvDayChart from "./(revenue-chars)/RvDayChart";
import RvMonthChart from "./(revenue-chars)/RvMonthChart";
import RvTypeChart from "./(revenue-chars)/RvTypeChart";

export default function RevenueStatistics({
  organization,
}: {
  organization: Organization;
}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { revenue } = useSelector((state: any) => state.stats);
  const dispatch = useDispatch();

  async function getRevenueStats() {
    if (revenue) {
      return;
    }
    setIsLoading(true);
    try {
      const res: any = await statsService.revenue(organization.id);
      const revenueStats: RevenueStats = res;
      dispatch(updateRevenueStats(revenueStats));
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRevenueStats();
  }, []);

  return (
    <div className="space-y-5 w-full">
      <Heading text="Revenue" />
      {error !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {isLoading ? (
        <div className="py-20 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {revenue ? (
            <div className="space-y-5 w-full">
              <RvDayChart data={revenue.revenueByDay} />
              <div className="flex gap-5 justify-between items-center w-full">
                <RvMonthChart data={revenue.revenueByMonth} />
                <RvTypeChart data={revenue.revenueByType} />
              </div>
              <div>
                <p>
                  All charts display values in <b>UZS</b>. For clearer and more
                  accurate statistics, please make sure to always record client
                  prices in <b>UZS</b>.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center py-10">
              <ErrorMessage
                text="We are having problems"
                desc="There are some problems with loading Stats"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
