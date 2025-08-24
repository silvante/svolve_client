import Heading from "@/app/(global_components)/Heading";
import JobsList from "./JobsList";

export default function Jobs() {
  return (
    <div className="space-y-5">
      <Heading text="Your Job" />
      <JobsList />
      <div className="py-20 flex justify-center items-center">
        <h3 className="text-gray-600">You can heve only one job at time.</h3>
      </div>
    </div>
  );
}
