import { Organization, Vacancy } from "@/app/types/User";
import { Camera, Eye } from "lucide-react";
import Link from "next/link";

export default function VacancyCard({
  vacancy,
  organization,
}: {
  vacancy: Vacancy;
  organization: Organization;
}) {
  return (
    <div
      className="rounded-xl border border-gray-200 shadow-md flex flex-col"
    >
      <div className="p-5 space-y-2 border-b border-gray-200">
        <div className="bg-gray-300 max-w-16 w-full aspect-square rounded-full overflow-hidden border border-gray-400">
          {vacancy.user.avatar ? (
            <img
              src={vacancy.user.avatar}
              alt="Your avatar"
              className="w-full h-full aspect-square object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <Camera size={18} />
            </div>
          )}
        </div>
        <div className="w-full">
          <h2 className="text_color text-xl font-semibold w-full truncate">
            {vacancy.name}
          </h2>
          <p className="text_color w-full truncate">{vacancy.user.email}</p>
        </div>
      </div>
      <div className="p-5 space-y-1 border-b border-gray-200 w-full">
        <p className="text_color font-medium w-full truncate">
          Job: <span className="font-semibold">{vacancy.job}</span>
        </p>
        <p className="text_color font-medium text_clamp_3">
          About: <span className="font-semibold">{vacancy.about}</span>
        </p>
        <p className="text_color font-medium w-full truncate">
          Age: <span className="font-semibold">{vacancy.age}</span>
        </p>
      </div>
      <div className="p-5 space-y-1 border-b border-gray-200 w-full">
        <p className="text_color font-medium">
          Contact:{" "}
          <span className="font-semibold w-full truncate">
            {vacancy.contact}
          </span>
        </p>
      </div>
      <div className="p-5 space-y-1 border-b border-gray-200 w-full flex items-center">
        <Link
          href={`/org/${organization.unique_name}/workers/employment/${vacancy.id}`}
          className="flex gap-2 items-center bg-violet-600 text-white py-2 px-4 rounded-lg w-full justify-center"
        >
          <Eye /> See details
        </Link>
      </div>
    </div>
  );
}
