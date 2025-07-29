import Heading from "@/app/(global_components)/Heading";
import NewOrganizationForm from "./NewOrgForm";

export default function NewOrganizationPage() {
  return (
    <div className="space-y-5">
      <Heading text="New organization" />
      <NewOrganizationForm />
    </div>
  );
}
