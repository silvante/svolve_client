"use client";
import Spinner from "@/app/(global_components)/Spinner";
import { Worker } from "@/app/types/User";
import { Check, Menu, Pin, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import { ShieldAlert } from "lucide-react";
import userService from "@/app/api/services/userService";
import { updateJob } from "@/app/store/slices/jobSlice";
import organizationService from "@/app/api/services/organizationService";

export default function JobsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [success, setSuccess] = useState("");
  const { currentJob, loading } = useSelector((state: any) => state.job);

  async function GetJob() {
    try {
      const res: any = await userService.getMyJobs();
      const theJob: Worker = res;

      dispatch(updateJob(theJob));
    } catch (error: any) {
      console.log(error);
      dispatch(updateJob(null));
    }
  }

  useEffect(() => {
    GetJob();
  }, []);

  async function MakeItDefault(unique_name: string) {
    setIsLoading(true);
    try {
      const res: any = await organizationService.setAsDefault(unique_name);
      console.log(res);
      if (res && res.success == true) {
        setError("");
        setSuccess("The organization has set been as default!");
      }
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

  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="space-y-5">
        {error !== "" && (
          <Alert variant="destructive">
            <ShieldAlert />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success !== "" && (
          <Alert variant="default" className="text-green-600">
            <Check />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription className="text-green-600/70">
              {success}
            </AlertDescription>
          </Alert>
        )}
        {isLoading && (
          <div className="flex gap-2 items-center">
            <p>Setting as default</p>
            <Spinner />
          </div>
        )}
        {currentJob ? (
          <div className="bg-white shadow-md rounded-md transition-colors border border-gray-300 flex flex-col border-b-2 border-b-transparent hover:border-b-violet-600">
            <div className="border-b border-gray-300 p-4 flex gap-3 items-center">
              {currentJob.worker.avatar ? (
                <img
                  src={currentJob.worker.avatar}
                  alt={currentJob.worker.name}
                  className="w-10 h-10 rounded-lg"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-gray-300 text-gray-500 flex items-center justify-center">
                  <UserCircle2 />
                </div>
              )}
              <p className="text-xl font-semibold text_color">
                Working as{" "}
                <span className="text-violet-600">
                  {currentJob.role.toUpperCase()}
                </span>
              </p>
            </div>
            <Link href={`/job/${currentJob.organization.unique_name}`}>
              {currentJob.organization.logo && (
                <div className="border-b border-gray-300 p-4 flex flex-col gap-3 items-start">
                  <Image
                    src={currentJob.organization.logo}
                    alt={currentJob.organization.description}
                    width={0}
                    height={0}
                    className="w-auto h-10"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col gap-1 items-start">
                <h3 className="text-xl font-semibold">
                  {currentJob.organization.name}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="text-black">Uniquename: </span>@
                  {currentJob.organization.unique_name}
                </p>
              </div>
            </Link>
            <div className="border-gray-200 p-4 flex flex-col items-start gap-2 md:flex-row md:justify-between md:items-center border-t">
              <p className="text-sm text-gray-500">
                <span className="text-black">created at:</span>{" "}
                {new Date(
                  currentJob.organization.created_at
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm text-green-600">
                <span className="text-black">status:</span> active
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-black">pincode:</span> present
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-2 bg-violet-600 px-1 py-1 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors">
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <button
                    onClick={() =>
                      MakeItDefault(currentJob.organization.unique_name)
                    }
                    className="w-full"
                  >
                    <DropdownMenuItem>
                      <Pin /> Set as default
                    </DropdownMenuItem>
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ) : (
          <ErrorMessage
            text="You do not have Job now"
            desc="it will appear here when you get one"
          />
        )}
      </div>
    );
  }
}
