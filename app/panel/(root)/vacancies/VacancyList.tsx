"use client";
import Heading from "@/app/(global_components)/Heading";
import Spinner from "@/app/(global_components)/Spinner";
import vacancyService from "@/app/api/services/vacancyService";
import { updateVacancies } from "@/app/store/slices/vacancySlice";
import { Vacancy } from "@/app/types/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <div>
        <Heading text="Vacancies" />
      </div>
    );
  }
}
