import Svolve from "@/app/(global_components)/Svolve";
import AsideLink from "./(meta-components)/AsideLink";
import {
  CircleUser,
  FileUser,
  GitFork,
  HandHeart,
  House,
  Settings,
  WorkflowIcon,
} from "lucide-react";

export default function Aside() {
  return (
    <aside className="p-5 sticky top-0 left-0 h-screen bg-white border-r border-gray-300 shadow-md z-10 max-w-72 w-full hidden lg:flex flex-col gap-5">
      <Svolve link="/panel" />
      <div>
        <AsideLink href="/panel">
          <House /> Dashboard
        </AsideLink>
        <AsideLink href="/panel/organizations">
          <GitFork /> Organizations
        </AsideLink>
        <AsideLink href="/panel/vacancies">
          <FileUser /> Vacancies
        </AsideLink>
        <AsideLink href="/panel/jobs">
          <WorkflowIcon /> Jobs
        </AsideLink>
        <AsideLink href="/panel/profile">
          <CircleUser /> Profile
        </AsideLink>
        <AsideLink href="/panel/community">
          <HandHeart /> Community & support
        </AsideLink>
        <AsideLink href="/panel/profile/settings">
          <Settings /> Settings
        </AsideLink>
      </div>
    </aside>
  );
}
