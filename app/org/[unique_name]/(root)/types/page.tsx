import Heading from "@/app/(global_components)/Heading";
import { TypeTable } from "./Typetable";

export default function OrgTypes() {
  return (
    <div className="space-y-5">
      <Heading text="Types" />
      <TypeTable />
    </div>
  );
}
