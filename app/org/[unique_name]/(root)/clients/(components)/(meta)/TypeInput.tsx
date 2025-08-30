"use client";
import { Organization, Type } from "@/app/types/User";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import typeService from "@/app/api/services/typeService";
import { updateTypes } from "@/app/store/slices/typesSlice";

export default function TypeInput({
  setTypeId,
  organization,
  setError,
}: {
  setTypeId: Function;
  organization: Organization;
  setError: Function;
}) {
  const [open, setOpen] = useState(false);

  // from redux
  const { types } = useSelector((state: any) => state.types);
  const valid_types: Type[] = types;
  const [type_id, settype_id] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setTypeId(type_id);
  }, [type_id]);

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

  return (
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
              ? valid_types.find((vt) => String(vt.id) === type_id)?.name
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
                      type_id === String(vt.id) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
