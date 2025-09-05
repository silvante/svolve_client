import Heading from "@/app/(global_components)/Heading";
import { Organization } from "@/app/types/User";

export default function ClientStatistics({
  organization,
}: {
  organization: Organization;
}) {
  return (
    <div>
      <Heading text="Clients" />
    </div>
  );
}
