import Heading from "@/app/(global_components)/Heading";
import { Vacancy } from "@/app/types/User";
import { FilePen, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteVacancyModule from "../(components)/DeleteVacancyModule";

export default function VacancyActions({ vacancy }: { vacancy: Vacancy }) {
  return (
    <div className="w-full border border-gray-300 shadow-md rounded-2xl p-8 space-y-5 bg-white">
      <Heading text="Actions" />
      <div className="flex gap-5">
        <DeleteVacancyModule vacancy={vacancy}>
          <button className="bg-red-600/10 text-red-600 flex py-2 px-4 gap-2 items-center cursor-pointer rounded-lg hover:bg-red-600 hover:text-white transition-all">
            <Trash2 /> Delete
          </button>
        </DeleteVacancyModule>
        <Link
          href={`/panel/vacancies/${vacancy.id}/update`}
          className="bg-gray-600/10 text-gray-900 flex py-2 px-4 gap-2 items-center cursor-pointer rounded-lg hover:bg-orange-600 hover:text-white transition-all"
        >
          <FilePen /> Update vacancy
        </Link>
      </div>
    </div>
  );
}
