"use client";
import Svolve from "@/app/(global_components)/Svolve";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GoBackToPanel from "./GoBackToPanel";
import JobLogo from "./JobLogo";
import JobAside from "./JobAside";

export default function JobsHeader() {
  const { currentJob } = useSelector((state: any) => state.job);
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <header className="w-full bg-white p-3 border-b border-gray-300 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center gap-4">
        <GoBackToPanel />
        {!organization.logo ? (
          <Svolve link={`/job/${organization.unique_name}`} />
        ) : (
          <JobLogo org={organization} />
        )}
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold text_color hidden lg:block">Your role:</p>
        <JobAside worker={currentJob}>
          <div className="p-1 pr-3 border border-gray-300 rounded-full cursor-pointer flex items-center gap-2 hover:text-violet-600 transition-all text-gray-700">
            <Avatar className="w-8 h-8">
              <AvatarImage src={currentJob.worker.avatar} />
              <AvatarFallback>
                {currentJob.worker.name.split("")[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-semibold">{currentJob.role}</p>
          </div>
        </JobAside>
      </div>
    </header>
  );
}
