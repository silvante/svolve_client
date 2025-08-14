"use client";
import Heading from "@/app/(global_components)/Heading";
import { workerRoles } from "@/app/global/data";
import { Vacancy } from "@/app/types/User";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailWarning, Terminal } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function HireingForm({ vacancy }: { vacancy: Vacancy }) {
  const [role, setRole] = useState(workerRoles[0].name);
  const [currentRole, setCurrentRole] = useState(workerRoles[0]);

  const [acception, setAcception] = useState(false);
  const handleCheckbox = (check: boolean) => {
    setAcception(check);
  };

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
        <Alert variant="default">
          <MailWarning />
          <AlertTitle>Terms of "{currentRole.name}" role!</AlertTitle>
          <AlertDescription>{currentRole.terms}</AlertDescription>
        </Alert>
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
        <div className="space-y-2 flex flex-col">
          <label htmlFor="role">Attached types (for doctor)*</label>
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
        <div className="flex gap-2 items-center">
          <Checkbox
            id="check"
            checked={acception}
            onCheckedChange={handleCheckbox}
            className="border-gray-400 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:border-violet-600"
          />
          <label htmlFor="check">
            I have read terms of current worker role
          </label>
        </div>
      </form>
    </div>
  );
}
