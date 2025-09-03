"use client";
import Svolve from "@/app/(global_components)/Svolve";
import CollapseBtn from "./CollapseBtn";
import LockOrgBtn from "./LockOrgBtn";
import { useSelector } from "react-redux";
import OrgLogo from "./OrgLogo";
import OrgProfile from "./OrgProfile";

export default function OrgHeader() {
  const { organization } = useSelector((state: any) => state.validator);
  return (
    <header className="w-full bg-white px-3 py-2 border-b border-gray-300 flex justify-between items-center fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <CollapseBtn />
          {!organization.logo ? (
            <Svolve link={`/org/${organization.unique_name}`} />
          ) : (
            <OrgLogo />
          )}
        </div>
        <div className="flex gap-4">
          <LockOrgBtn />
          <OrgProfile />
        </div>
      </nav>
    </header>
  );
}
