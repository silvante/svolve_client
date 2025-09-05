import Heading from "@/app/(global_components)/Heading";
import Spinner from "@/app/(global_components)/Spinner";
import statsService from "@/app/api/services/statsService";
import { Organization, RevenueStats } from "@/app/types/User";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export default function RevenueStatistics({
  organization,
}: {
  organization: Organization;
}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getRevenueStats() {
    setIsLoading(true);
    try {
      const res: any = await statsService.revenue(organization.id);
      const revenueStats: RevenueStats = res;
      console.log(revenueStats);
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
    <div>
      <Heading text="Revenue" />
      {error !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>Stats</div>
      )}
    </div>
  );
}
