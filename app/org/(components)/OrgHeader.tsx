"use client";
import Svolve from "@/app/(global_components)/Svolve";
import { useParams } from "next/navigation";
import CollapseBtn from "./CollapseBtn";
import LockOrgBtn from "./LockOrgBtn";

export default function OrgHeader() {
  const { unique_name } = useParams();
  return (
    <header className="w-full bg-white p-3 border-b border-gray-200 flex justify-between items-center fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <CollapseBtn />
          <Svolve link={`/org/${unique_name}`} />
        </div>
        <div>
          <LockOrgBtn />
        </div>
      </nav>
    </header>
  );
}
