import Heading from "@/app/(global_components)/Heading";
import EditProfile from "./EditProfile";

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <Heading text="Settings" />
      <EditProfile />
    </div>
  );
}
