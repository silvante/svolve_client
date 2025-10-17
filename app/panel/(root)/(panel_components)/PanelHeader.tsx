import Breadcrumbs from "./(meta-components)/Breadcrumps";
import CreateButton from "./(meta-components)/CreateButton";
import { MobileAside } from "./MobileAside";
import UserProfile from "./UserProfile";

export default function PanelHeader() {
  return (
    <header className="sticky top-0 px-5 py-2 bg-white border-b border-gray-300 shadow-sm flex justify-between items-center">
      <MobileAside />
      <div className="hidden lg:flex">
        <Breadcrumbs />{" "}
      </div>
      <div className="flex gap-5">
        <CreateButton />
        <UserProfile />
      </div>
    </header>
  );
}
