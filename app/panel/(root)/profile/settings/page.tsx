import Heading from "@/app/(global_components)/Heading";
import EditProfile from "./EditProfile";
import BackBtn from "@/app/(global_components)/BackBtn";

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Heading text={`Settings`} />
        <BackBtn href={`/panel/profile`} />
      </div>
      <EditProfile />
    </div>
  );
}
