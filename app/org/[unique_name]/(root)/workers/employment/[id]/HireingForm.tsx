"use client";
import Heading from "@/app/(global_components)/Heading";
import { workerRoles } from "@/app/global/data";
import { Vacancy } from "@/app/types/User";
import { useEffect, useState } from "react";

export default function HireingForm({ vacancy }: { vacancy: Vacancy }) {
  const [role, setRole] = useState(workerRoles[0].name);
  const [currentRole, setCurrentRole] = useState(workerRoles[0]);

  useEffect(() => {
    const current_role = workerRoles.find((wr) => wr.name == role);
    if (current_role) {
      setCurrentRole(current_role);
    }
  }, [role]);

  return (
    <div className="w-full special_shadowing rounded-2xl p-8 space-y-5 bg-white">
      <Heading text="Fill the form!" />
      <form className="space-y-5">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="role">Worker role*</label>
          <select
            name="role"
            id="role"
            className="global_input"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            {workerRoles.map((r) => {
              return (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
