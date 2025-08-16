import Heading from "@/app/(global_components)/Heading";
import { Plus } from "lucide-react";
import Link from "next/link";
import WorkersList from "./WorkersList";

export default function WorkersPage() {
  return (
    <section className=" space-y-5">
      <div className="flex items-center justify-between w-full">
        <Heading text="Workers" />
        <Link
          href="./workers/employment"
          className="text-white py-2 px-4 bg-violet-600 rounded-lg flex gap-2"
        >
          <Plus />
          Employment
        </Link>
      </div>
      <WorkersList />
    </section>
  );
}
