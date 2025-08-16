"use client";
import workerService from "@/app/api/services/workerService";
import { updateWorkers } from "@/app/store/slices/workerSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Worker } from "@/app/types/User";
import Spinner from "@/app/(global_components)/Spinner";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export default function WorkersList() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { workers, loading } = useSelector((state: any) => state.worker);
  const { organization } = useSelector((state: any) => state.validator);
  const dispatch = useDispatch();
  async function getTypes() {
    try {
      if (workers) {
        return;
      } else {
        const response: any = await workerService.getAll(organization.id);
        console.log(response);
        const res_workers: Worker[] = response;
        dispatch(updateWorkers(res_workers));
      }
    } catch (error: any) {
      setError("Error fetching workers:" + error.message);
    }
  }

  useEffect(() => {
    getTypes();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        {workers && workers.length > 0 ? (
          <div className="space-y-5">
            {error !== "" && (
              <Alert variant="destructive">
                <ShieldAlert />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {isLoading && (
              <div className="flex gap-2 items-center">
                <p>Loading </p>
                <Spinner />
              </div>
            )}
            <div>
              {workers.map((worker: Worker) => {
                return <div key={worker.id}></div>;
              })}
            </div>
          </div>
        ) : (
          <ErrorMessage
            text="There is no Types now"
            desc="You can create one now"
          />
        )}
      </>
    );
  }
}
