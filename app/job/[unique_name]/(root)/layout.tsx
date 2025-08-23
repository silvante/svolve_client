"use client";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import userService from "@/app/api/services/userService";
import { Organization, Worker } from "@/app/types/User";
import { updateJob } from "@/app/store/slices/jobSlice";
import {
  updateValidation,
  updateValidationOrg,
} from "@/app/store/slices/validatorSlice";
import { HashLoader } from "react-spinners";
import JobsHeader from "../../(components)/JobsHeader";
import JobBreadcrumbs from "../../(components)/JobBreadcrumbs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function JobMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const { unique_name } = useParams();

  async function GetJob() {
    setIsLoading(true);
    try {
      const res: any = await userService.getMyJobs();
      const theJob: Worker = res;
      const theOrg: Organization = theJob.organization;
      if (theOrg.unique_name !== String(unique_name)) {
        return router.push("/panel");
      }
      dispatch(updateJob(theJob));
      dispatch(updateValidation(true));
      dispatch(updateValidationOrg(theOrg));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      router.push("/panel");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    GetJob();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <HashLoader />
      </div>
    );
  } else {
    return (
      <div className={`${roboto.className} antialiased`}>
        <JobsHeader />
        <div className="pt-20 px-5 container mx-auto space-y-5 pb-5">
          <JobBreadcrumbs />
          <div className="w-full">{children}</div>
        </div>
      </div>
    );
  }
}
