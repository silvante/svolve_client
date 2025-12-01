import Heading from "@/app/(global_components)/Heading";
import OrganizationList from "./OrganizationList";

export default function Organizations() {
  return (
    <div className="space-y-5">
      <Heading text="Tashkilotlar" />
      <OrganizationList />
    </div>
  );
}
