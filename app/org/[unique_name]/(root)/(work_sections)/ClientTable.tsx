"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Spinner from "@/app/(global_components)/Spinner";
import clientService from "@/app/api/services/clientService";
import {
  deleteClient,
  setLoading,
  updateClients,
} from "@/app/store/slices/clientSlice";
import { updateTypes } from "@/app/store/slices/typesSlice";
import { Client, Type } from "@/app/types/User";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckClientBtn from "./(meta-components)/CheckClientBtn";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, PenBox, RefreshCcw, ShieldAlert, Trash } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function ClientTable() {
  const [ref, setRef] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { types, loading } = useSelector((state: any) => state.types);
  const { clients, is_loading } = useSelector((state: any) => state.client);
  const { currentJob } = useSelector((state: any) => state.job);
  const { organization } = useSelector((state: any) => state.validator);
  const dispatch = useDispatch();
  async function GetClients() {
    try {
      if (types && clients.length > 0) {
        return;
      } else {
        dispatch(setLoading());
        const response: any = await clientService.getTodaysClients(
          organization.id
        );
        const clients: Client[] = response.clients;
        const types: Type[] = response.types;
        dispatch(updateClients(clients));
        dispatch(updateTypes(types));
      }
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  }

  useEffect(() => {
    GetClients();
    setRef(false);
  }, [ref]);

  async function HandleDelete(id: number) {
    setIsLoading(true);
    try {
      const client: Client = clients.find((client: Client) => client.id === id);
      const res: any = await clientService.deleteClient(
        organization.id,
        client.id
      );
      console.log(res);
      if (res.deleted === true) {
        dispatch(deleteClient(client));
      }
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Internal server error pleace try again later");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  if (loading || is_loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full flex justify-start">
          <button
            onClick={() => setRef(true)}
            className="text-white py-2 px-4 bg-violet-600 rounded-xl flex gap-2 items-center cursor-pointer"
          >
            <RefreshCcw /> Refresh
          </button>
        </div>
        {clients && clients.length !== 0 ? (
          <div className="space-y-5">
            {error !== "" && (
              <Alert variant="destructive">
                <ShieldAlert />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {isLoading && (
              <div className="flex gap-2 items-center">
                <p>Deleting</p>
                <Spinner />
              </div>
            )}
            <table className="w-full rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr className="">
                  <th className="text-start p-3 w-20">No</th>
                  <th className="text-start p-3">Name</th>
                  <th className="text-start p-3">Year</th>
                  <th className="text-start p-3">Origin</th>
                  <th className="text-start p-3">Type</th>
                  <th className="text-start p-3">Price</th>
                  <th className="text-start p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...clients].reverse().map((client: Client, index: number) => (
                  <tr
                    key={client.id}
                    className={`border-b border-x border-gray-200`}
                  >
                    <td className="p-3 w-20 truncate">
                      {clients.length - index}
                    </td>
                    <td className="p-3 truncate">
                      {client.name} {client.surname}
                    </td>
                    <td className="p-3 truncate">{client.born_in}</td>
                    <td className="p-3 truncate">{client.origin}</td>
                    <td className="p-3 truncate">{client.type.name}</td>
                    <td className="p-3 truncate">{client.price}</td>
                    <td className="p-3 truncate">
                      {!client.is_checked ? (
                        <div className="flex gap-3 items-center">
                          <div
                            className={`${
                              currentJob && currentJob.role !== "doctor"
                                ? "hidden"
                                : "block"
                            }`}
                          >
                            <CheckClientBtn
                              org_id={organization.id}
                              client_id={client.id}
                            />
                          </div>
                          <div
                            className={`${
                              currentJob && currentJob.role !== "receptionist"
                                ? "hidden"
                                : "block"
                            }`}
                          >
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex gap-2 bg-violet-600/10 px-1 py-1 text-black font-semibold rounded-md hover:bg-violet-700 hover:text-white transition-colors">
                                <Menu />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-56">
                                <Link
                                  href={
                                    currentJob &&
                                    currentJob.role === "receptionist"
                                      ? `/job/${organization.unique_name}/clients/${client.id}`
                                      : `/org/${organization.unique_name}/clients/${client.id}/update`
                                  }
                                  className="rounded-lg flex"
                                >
                                  <DropdownMenuItem className="cursor-pointer w-full">
                                    <PenBox /> Update
                                  </DropdownMenuItem>
                                </Link>
                                <button
                                  className="rounded-lg cursor-pointer w-full"
                                  onClick={() => HandleDelete(client.id)}
                                >
                                  <DropdownMenuItem className="cursor-pointer">
                                    <Trash color="#e7000b" />{" "}
                                    <p className="text-red-600">Delete</p>
                                  </DropdownMenuItem>
                                </button>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ) : (
                        <p className="my-2 bg-green-600 text-white px-2 text-center">
                          checked
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-200">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <ErrorMessage
            text="There is no clients today"
            desc="It will be a good beginning"
          />
        )}
      </>
    );
  }
}
