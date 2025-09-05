import Heading from "@/app/(global_components)/Heading";
import Spinner from "@/app/(global_components)/Spinner";
import statsService from "@/app/api/services/statsService";
import { ClientStats, Organization } from "@/app/types/User";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateClientStats } from "@/app/store/slices/statsSlice";

export default function ClientStatistics({
  organization,
}: {
  organization: Organization;
}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { clients } = useSelector((state: any) => state.stats);
  const dispatch = useDispatch();

  async function getClients() {
    if (clients) {
      return;
    }
    setIsLoading(true);
    try {
      const res: any = await statsService.clients(organization.id);
      const clientStats: ClientStats = res;
      dispatch(updateClientStats(clientStats));
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Error while fatching!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div>
      <Heading text="Clients" />
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
