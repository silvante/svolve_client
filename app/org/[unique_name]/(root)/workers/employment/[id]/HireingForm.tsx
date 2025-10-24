"use client";
import Heading from "@/app/(global_components)/Heading";
import { workerRoles } from "@/app/global/data";
import { Type, Vacancy } from "@/app/types/User";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailWarning, ShieldAlert, Terminal, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import typeService from "@/app/api/services/typeService";
import { updateTypes } from "@/app/store/slices/typesSlice";
import { Worker } from "@/app/types/User";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import workerService from "@/app/api/services/workerService";
import { useRouter } from "next/navigation";
import { pushWorker, setLoading } from "@/app/store/slices/workerSlice";

export default function HireingForm({ vacancy }: { vacancy: Vacancy }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentRole, setCurrentRole] = useState(workerRoles[0]);
  const [open, setOpen] = useState(false);
  const [acception, setAcception] = useState(false);
  const router = useRouter();

  // from redux
  const { organization } = useSelector((state: any) => state.validator);
  const { types } = useSelector((state: any) => state.types);
  const valid_types: Type[] = types.filter(
    (t: Type) => t._count.attached_workers < 1
  );
  const [type_id, settype_id] = useState("");
  const dispatch = useDispatch();

  // formData
  const [attached_types, setAttachedTypes] = useState<number[]>([]);
  const [role, setRole] = useState(vacancy.role);

  const [selectedTypes, setSelectedTypes] = useState<Type[]>([]);

  useEffect(() => {
    const type = valid_types.find((t) => t.id === Number(type_id));
    const existing = attached_types.find((at) => at == Number(type_id));
    if (type && !existing) {
      setSelectedTypes([...selectedTypes, type]);
      setAttachedTypes([...attached_types, type.id]);
      settype_id("");
    } else {
      settype_id("");
    }
  }, [type_id]);

  function DeleteType(id: number) {
    const new_arr = attached_types.filter((at) => at !== id);
    setAttachedTypes(new_arr);

    const new_arr2 = selectedTypes.filter((st) => st.id !== id);
    setSelectedTypes(new_arr2);
  }

  // extra
  const handleCheckbox = (check: boolean) => {
    setAcception(check);
  };

  useEffect(() => {
    const current_role = workerRoles.find((wr) => wr.name == role);
    if (current_role) {
      setCurrentRole(current_role);
    }
  }, [role]);

  if (!types) {
    async function GetTypes() {
      try {
        const response: any = await typeService.getTypes(organization.id);
        const types: Type[] = response;
        dispatch(updateTypes(types));
      } catch (error) {
        setError("error while fetching types, please try again later");
      }
    }

    useEffect(() => {
      GetTypes();
    }, []);
  }

  async function HandleHiring(e: any) {
    e.preventDefault();
    try {
      if (role === "doctor" && attached_types.length < 1) {
        return setError("Doctor should at least one type attached to him/her!");
      }
      const data = {
        role,
        attached_types,
      };
      if (!acception) {
        return setError("Please read terms and accept them to continue!");
      }
      const res: any = await workerService.hire(
        organization.id,
        vacancy.id,
        data
      );
      const res_worker: Worker = res;
      dispatch(setLoading());
      dispatch(pushWorker(res_worker));
      router.push(`/org/${organization.unique_name}/workers`);
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full border border-gray-300 shadow-md rounded-2xl p-4 lg:p-8 space-y-5 bg-white">
      <Heading text="Fill the form!" />
      <form className="space-y-5" onSubmit={HandleHiring}>
        <Alert variant="default">
          <MailWarning />
          <AlertTitle>Terms of "{currentRole.name}" role!</AlertTitle>
          <AlertDescription>{currentRole.terms}</AlertDescription>
        </Alert>
        {error !== "" && (
          <Alert variant="destructive">
            <ShieldAlert />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
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
        {currentRole.include_types && (
          <div className="flex flex-col space-y-1">
            <label htmlFor="type">Attached types (for doctor)*</label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between global_input w-full"
                >
                  <p>
                    {type_id
                      ? valid_types.find((vt) => String(vt.id) === type_id)
                          ?.name
                      : "Select type..."}
                  </p>
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Search type..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>There is no types.</CommandEmpty>
                    <CommandGroup>
                      {valid_types.map((vt) => (
                        <CommandItem
                          key={vt.id}
                          value={String(`${vt.id}#${vt.name}`)}
                          onSelect={(currentValue) => {
                            const id = currentValue.split("#")[0];
                            settype_id(id === type_id ? "" : id);
                            setOpen(false);
                          }}
                        >
                          {vt.name}
                          <Check
                            className={cn(
                              "ml-auto",
                              type_id === String(vt.id)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div>
              <p>Selected types</p>
              <div className="py-2 flex gap-2">
                {selectedTypes.map((st) => {
                  return (
                    <div
                      key={st.id}
                      className="flex gap-3 p-1 items-center rounded-full pl-3 border border-gray-300"
                    >
                      <p>{st.name}</p>
                      <button
                        className="rounded-full border border-gray-300 cursor-pointer p-1"
                        type="button"
                        onClick={() => DeleteType(st.id)}
                      >
                        <X size={15} />
                      </button>
                    </div>
                  );
                })}
                {selectedTypes.length <= 0 && (
                  <p className="text-gray-950/50">
                    Please select types to attach...
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
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
        <div>
          <button
            type="submit"
            className="bg-violet-600 text-white py-2 px-5 rounded-md hover:bg-violet-700 transition-colors cursor-pointer"
          >
            {!isLoading ? `Hire as ${currentRole.name}` : "hiring..."}
          </button>
        </div>
      </form>
    </div>
  );
}
