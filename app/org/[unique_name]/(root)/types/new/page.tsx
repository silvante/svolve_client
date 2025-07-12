import Heading from "@/app/(global_components)/Heading";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";
import CreateTypeForm from "./CreateTypeForm";

export default function NewType() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center w-full">
        <Heading text="Types" />
        <OrgLink
          href="/types"
          className="bg-black/5 px-4 py-2 rounded-lg text-gray-700"
        >
          Go back
        </OrgLink>
      </div>
      <CreateTypeForm />
    </div>
  );
}
