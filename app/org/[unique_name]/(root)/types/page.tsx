import Heading from "@/app/(global_components)/Heading";
import TypeTable from "./Typetable";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";

export default function OrgTypes() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center w-full">
        <Heading text="Types" />
        <OrgLink
          href="/types/new"
          className="bg-violet-600 px-4 py-2 rounded-lg text-white"
        >
          Create new
        </OrgLink>
      </div>
      <TypeTable />
    </div>
  );
}
