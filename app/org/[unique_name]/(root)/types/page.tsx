import Heading from "@/app/(global_components)/Heading";
import TypeTable from "./Typetable";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";

export default function OrgTypes() {
  return (
    <div className="space-y-5 w-full">
      <div className="flex justify-between items-center w-full">
        <Heading text="Turlar" />
        <OrgLink
          href="/types/new"
          className="bg-violet-600 px-4 py-2 rounded-lg text-white"
        >
          Yangi yaratish
        </OrgLink>
      </div>
      <TypeTable />
    </div>
  );
}
