"use client";
import vacancyService from "@/app/api/services/vacancyService";
import { origins } from "@/app/global/data";
import { Organization, Vacancy } from "@/app/types/User";
import { useEffect, useState } from "react";
import VacancyCard from "./VacancyCard";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";

export default function EmpSearchEngine({
  organization,
}: {
  organization: Organization;
}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [origin, setOrigin] = useState(organization.origin);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [meta, setMeta] = useState({ total: 0, page: 1, last_page: 1 });
  const [vacancies, setVacancies] = useState([]);

  async function GetVacancies(e: any = null) {
    if (e) {
      e.preventDefault();
    }
    setIsLoading(true);
    try {
      setPage(1);
      const res: any = await vacancyService.search(origin, query, page, 9);
      const { data, meta } = res;
      setVacancies(data);
      setMeta(meta);
      setError("");
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  useEffect(() => {
    GetVacancies();
  }, [origin, page]);

  console.log(vacancies);
  console.log(meta);

  return (
    <div className="space-y-8">
      <div className="p-5 bg-white special_shadowing rounded-2xl space-y-5">
        {error !== "" && (
          <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
            {error}
          </p>
        )}
        <form className="flex w-full gap-5" onSubmit={GetVacancies}>
          <select
            className="global_input w-40"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          >
            {origins.map((origin) => {
              return (
                <option key={origin.id} value={origin.name}>
                  {origin.name}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="global_input flex-1"
            placeholder="Search by name..."
          />
          <button
            className="py-2 w-40 text-center rounded-lg bg-violet-600 text-white cursor-pointer"
            type="submit"
          >
            {isLoading ? "searching..." : "Search"}
          </button>
        </form>
      </div>
      {vacancies && vacancies.length > 0 ? (
        <div className="w-full grid grid-cols-3 gap-5">
          {vacancies.map((vacancy: Vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      ) : (
        <ErrorMessage
          text="There is no vacancies found!"
          desc="try something else"
        />
      )}
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-5 justify-center items-center">
          <button
            className={`${
              page <= 1 && "opacity-50"
            } border-gray-300 border text-gray-800 py-2 px-4 rounded-full cursor-pointer hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all`}
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <h3>
            {page} / {meta.last_page}
          </h3>
          <button
            className={`${
              page >= meta.last_page && "opacity-50"
            } border-gray-300 border text-gray-800 py-2 px-4 rounded-full cursor-pointer hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all`}
            disabled={page >= meta.last_page}
            onClick={() => setPage(page - 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
