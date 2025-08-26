"use client";

import { Check, ChevronsUpDown, ShieldAlert } from "lucide-react";

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
import { useState } from "react";
import { replaceClient } from "@/app/store/slices/clientSlice";
import clientService from "@/app/api/services/clientService";
import { useParams, useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function UpdateClientForm() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // dispatcher
  const dispatch = useDispatch();

  // selectors
  const { organization } = useSelector((state: any) => state.validator);
  const { types, loading } = useSelector((state: any) => state.types);
  const { clients, is_loading } = useSelector((state: any) => state.client);

  if (loading || is_loading) {
    return (
      <div className="w-full py-10 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const client = clients.find((client: Client) => client.id === Number(id));
  const type = types.find((type: Type) => type.id === client.type_id);

  // for formData
  const [name, setname] = useState(client.name);
  const [surname, setsurname] = useState(client.surname);
  const [born_in, setborn_in] = useState(client.born_in);
  const [origin, setorigin] = useState(client.origin);
  const [type_id, settype_id] = useState(`${type.id}`);
  const [price, setprice] = useState(client.price);

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
      const res: any = await clientService.updateClient(
        organization.id,
        client.id,
        formData
      );
      const updated_client: Client = res;
      dispatch(replaceClient(updated_client));
      router.push(`/org/${organization.unique_name}`);
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
        <p>You can update client only before checking him/her</p>
      </div>
      {error !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
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
                    <CommandEmpty>No framework found.</CommandEmpty>
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
              {isLoading ? "updating..." : "update Client"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
