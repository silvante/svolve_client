import Heading from "@/app/(global_components)/Heading";
import NewOrganisationForm from "./NewOrgForm";

export default function NewOrganisationPage() {
  return (
    <div className="space-y-5">
      <Heading text="New organisation" />
      <NewOrganisationForm />
    </div>
  );
}
