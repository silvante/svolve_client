"use client";
import Heading from "@/app/(global_components)/Heading";
import vacancyService from "@/app/api/services/vacancyService";
import { origins } from "@/app/global/data";
import { setLoading } from "@/app/store/slices/userSlice";
import { Organization } from "@/app/types/User";
import { useEffect, useState } from "react";

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
  const [meta, setMeta] = useState({ total: 0, page: 1, lastPage: 1 });
  const [vacancies, setVacancies] = useState([]);

  async function GetVacancies(e: any = null) {
    if (e) {
      e.preventDefault();
    }
    setIsLoading(true);
    try {
      const res: any = await vacancyService.search(origin, query, page, 9);
      const { data, meta } = res;
      setVacancies(data);
      setMeta(meta);
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
          required
        />
        <button
          className="py-2 w-40 text-center rounded-lg bg-violet-600 text-white cursor-pointer"
          type="submit"
        >
          {isLoading ? "searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}
