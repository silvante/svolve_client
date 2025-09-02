import { Organization } from "@/app/types/User";

export default function Totals({
  organization,
}: {
  organization: Organization;
}) {
  return (
    <div>
      <p>{organization.unique_name}</p>
    </div>
  );
}
