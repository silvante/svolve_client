import Heading from "@/app/(global_components)/Heading";
import { Organization } from "@/app/types/User";

export default function EmpSearchEngine({
  organization,
}: {
  organization: Organization;
}) {
  return (
    <div className="p-5 bg-white special_shadowing rounded-2xl">
      <Heading text={organization.unique_name} />
    </div>
  );
}
