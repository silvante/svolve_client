"use client";

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
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@/app/(global_components)/Spinner";
import { Client, Type } from "@/app/types/User";
import { useEffect, useState } from "react";
import { pushClient, setLoading } from "@/app/store/slices/clientSlice";
import clientService from "@/app/api/services/clientService";

export default function ClientCreator() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // dispatcher
  const dispatch = useDispatch();

  // selectors
  const { organization } = useSelector((state: any) => state.validator);

  // for formData
  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");
  const [born_in, setborn_in] = useState("");
  const [origin, setorigin] = useState("");
  const [type_id, settype_id] = useState("");
  const [price, setprice] = useState("");

  // for clear form

  function ClearFields() {
    setname("");
    setsurname("");
    setborn_in("");
    setorigin("");
    settype_id("");
    setprice("");
  }

  useEffect(() => {
    const handleLockEvent = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key == "Delete") {
        ClearFields();
      }
    };

    window.addEventListener("keydown", handleLockEvent);
    return () => window.removeEventListener("keydown", handleLockEvent);
  }, []);

  // submit form

  async function HandleCreateClient(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        name,
        surname,
        born_in: Number(born_in),
        origin,
        type_id: Number(type_id),
        price: Number(price),
      };
      if (formData.type_id === 0) {
        return setError("You have to select Type, create one if you dont have");
      }
      const res: any = await clientService.createClient(
        organization.id,
        formData
      );
      const new_client: Client = res;
      dispatch(pushClient(new_client));
      ClearFields();
      setIsLoading(false);
      setError("");
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

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
    <div className="w-full space-y-4">
      <div className="text-muted-foreground text-sm flex gap-2">
        <p>Clear form with</p>
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">Ctrl + Delete</span>
        </kbd>
      </div>
      {error !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {error}
        </p>
      )}
      <form className="w-full" onSubmit={HandleCreateClient}>
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
                    <CommandEmpty>No types found.</CommandEmpty>
                    <CommandGroup>
                      {valid_types.map((vt) => (
                        <CommandItem
                          key={vt.id}
                          value={String(`${vt.id}#${vt.name}`)}
                          onSelect={(currentValue) => {
                            const id = currentValue.split("#")[0];
                            settype_id(id === type_id ? "" : id);
                            setprice(
                              String(
                                valid_types.find(
                                  (type) => String(type.id) === id
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
            <button
              type="submit"
              className="w-full h-full bg-violet-600 text-white p-2 rounded-xl cursor-pointer"
            >
              {isLoading ? "creating..." : "Submit Client"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
