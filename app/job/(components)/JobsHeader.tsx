"use client";
import Svolve from "@/app/(global_components)/Svolve";
import OrgLogo from "@/app/org/(components)/OrgLogo";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function JobsHeader() {
  const { currentJob } = useSelector((state: any) => state.job);
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <header className="w-full bg-white p-3 border-b border-gray-300 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center gap-4">
        {!organization.logo ? (
          <Svolve link={`/org/${organization.unique_name}`} />
        ) : (
          <OrgLogo />
        )}
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={currentJob.worker.avatar} />
          <AvatarFallback>
            {currentJob.worker.name.split("")[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
