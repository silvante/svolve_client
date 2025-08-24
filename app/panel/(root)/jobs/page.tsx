import Heading from "@/app/(global_components)/Heading";
import JobsList from "./JobsList";

export default function Jobs() {
  return (
    <div className="space-y-5">
      <Heading text="Your Jobs" />
      <JobsList />
    </div>
  );
}
