"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Heading from "@/app/(global_components)/Heading";
import Spinner from "@/app/(global_components)/Spinner";
import vacancyService from "@/app/api/services/vacancyService";
import { updateVacancies } from "@/app/store/slices/vacancySlice";
import { Vacancy } from "@/app/types/User";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Camera, Eye, Menu, PenBox, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteVacancyModule from "./(components)/DeleteVacancyModule";

export default function VacancyList() {
  const { vacancies, loading } = useSelector((state: any) => state.vacancy);

  const dispatch = useDispatch();
  async function getVacancies() {
    try {
      if (vacancies) {
        return;
      } else {
        const response: any = await vacancyService.getAll();
        const vacancies: Vacancy[] = response;
        dispatch(updateVacancies(vacancies));
      }
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  }

  useEffect(() => {
    getVacancies();
  }, []);

  console.log(vacancies);

  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="space-y-5">
        {vacancies && vacancies.length > 0 ? (
          <div className="w-full grid grid-cols-3 gap-5">
            {vacancies.map((vacancy: Vacancy) => (
              <div
                key={vacancy.id}
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
                    <p className="text_color w-full truncate">
                      {vacancy.user.email}
                    </p>
                  </div>
                </div>
                <div className="p-5 space-y-1 border-b border-gray-200 w-full">
                  <p className="text_color font-medium w-full truncate">
                    Job: <span className="font-semibold">{vacancy.job}</span>
                  </p>
                  <p className="text_color font-medium text_clamp_3">
                    About:{" "}
                    <span className="font-semibold">{vacancy.about}</span>
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
                <div className="p-5 space-y-1 border-b border-gray-200 w-full flex justify-between items-center">
                  <Link
                    href={`/panel/vacancies/${vacancy.id}`}
                    className="flex gap-2 items-center bg-violet-600 text-white py-1 px-2 rounded-lg"
                  >
                    <Eye /> Details
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex gap-2 bg-violet-600/10 px-1 py-1 text_color font-semibold rounded-md hover:bg-violet-700/20 cursor-pointer transition-colors">
                      <Menu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <Link href={`/panel/vacancies/${vacancy.id}/update`}>
                        <DropdownMenuItem>
                          <PenBox /> Update
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <DeleteVacancyModule vacancy={vacancy}>
                          <div className="cursor-pointer rounded-lg w-full flex gap-2">
                            <Trash color="#e7000b" />{" "}
                            <p className="text-red-600">Delete</p>
                          </div>
                        </DeleteVacancyModule>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ErrorMessage
            text="You have no vacancies"
            desc="you can create one now"
          />
        )}
      </div>
    );
  }
}
