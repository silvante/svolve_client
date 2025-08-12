"use client";
import Heading from "@/app/(global_components)/Heading";
import Spinner from "@/app//(global_components)/Spinner";
import vacancyService from "@/app/api/services/vacancyService";
import { Vacancy } from "@/app/types/User";
import { Camera } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BackBtn from "@/app/(global_components)/BackBtn";

export default function VacancyDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { id, unique_name } = params;
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);

  async function GetVacancy(id: number) {
    try {
      const res: any = await vacancyService.getById(id);
      const res_vacancy: Vacancy = res;
      setVacancy(res_vacancy);
    } catch (error) {
      console.log(error);
      router.push(`/org/${unique_name}/workers/employment`);
    }
  }

  useEffect(() => {
    GetVacancy(Number(id));
  }, []);

  if (!vacancy) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="space-y-5">
        <div className="w-full flex justify-between items-center">
          <Heading text={`Vacancy - ${vacancy.id}`} />
          <BackBtn href={`/org/${unique_name}/workers/employment`} />
        </div>
        <div className="w-full special_shadowing rounded-2xl p-8 space-y-5 bg-white">
          <Heading text="Account" />
          <div className="space-y-2">
            <div className="bg-gray-300 max-w-24 w-full aspect-square rounded-full overflow-hidden border border-gray-400">
              {vacancy.user.avatar ? (
                <img
                  src={vacancy.user.avatar}
                  alt="Your avatar"
                  className="w-full h-full aspect-square object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <Camera size={24} />
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
        </div>
        <div className="w-full special_shadowing rounded-2xl p-8 space-y-5 bg-white">
          <Heading text="Info" />
          <div className="space-y-3 w-full">
            <p className="text_color font-semibold w-full truncate">
              Job: <span className="font-medium">{vacancy.job}</span>
            </p>
            <p className="text_color font-semibold text_clamp_3">
              About: <span className="font-medium">{vacancy.about}</span>
            </p>
            <p className="text_color font-semibold w-full truncate">
              Age: <span className="font-medium">{vacancy.age}</span>
            </p>
          </div>
        </div>
        <div className="w-full special_shadowing rounded-2xl p-8 space-y-5 bg-white">
          <Heading text="Contact" />
          <div className="space-y-3 w-full">
            <p className="text_color font-semibold w-full truncate">
              Phone number:{" "}
              <span className="font-medium">{vacancy.contact}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
