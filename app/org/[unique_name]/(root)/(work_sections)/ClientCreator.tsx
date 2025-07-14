"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { useSelector } from "react-redux";
import Spinner from "@/app/(global_components)/Spinner";
import { Type } from "@/app/types/User";

export default function ClientCreator() {
  const [open, setOpen] = React.useState(false);

  // for formData
  const [name, setname] = React.useState("");
  const [surname, setsurname] = React.useState("");
  const [born_in, setborn_in] = React.useState("");
  const [origin, setorigin] = React.useState("");
  const [type_id, settype_id] = React.useState("");
  const [price, setprice] = React.useState("");

  // types
  const { types, loading } = useSelector((state: any) => state.types);
  const valid_types: Type[] = types;
  if (loading) {
    return (
      <div className="w-full py-10 flex items-center justify-between">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full">
      <form className="w-full">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Clients name"
              className="global_input"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Clients surname"
              className="global_input"
              value={surname}
              onChange={(e) => setsurname(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="born_in">Year</label>
            <input
              type="number"
              name="born_in"
              id="born_in"
              placeholder="Clients birth year"
              className="global_input"
              value={born_in}
              onChange={(e) => setborn_in(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="origin">Origin</label>
            <input
              type="text"
              name="origin"
              id="origin"
              placeholder="Client's hometown"
              className="global_input"
              value={origin}
              onChange={(e) => setorigin(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="type">Type</label>
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
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {valid_types.map((vt) => (
                        <CommandItem
                          key={vt.id}
                          value={String(vt.id)}
                          onSelect={(currentValue) => {
                            settype_id(
                              currentValue === type_id ? "" : currentValue
                            );
                            setprice(
                              String(
                                valid_types.find(
                                  (type) => String(type.id) === currentValue
                                )?.price
                              )
                            );
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
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="How much paid"
              className="global_input"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <button className="w-full h-full bg-violet-600 text-white p-2 rounded-xl">
              Submit Client
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
