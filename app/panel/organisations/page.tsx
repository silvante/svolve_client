import Heading from "@/app/(global_components)/Heading";
import OrganisationList from "./OrganisationList";

export default function Organisations() {
  return (
    <div className="space-y-5">
      <Heading text="Organizations" />
      <OrganisationList />
    </div>
  );
}
