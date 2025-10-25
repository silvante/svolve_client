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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CheckClientBtn from "./(meta-components)/CheckClientBtn";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  NotepadText,
  PenBox,
  RefreshCcw,
  ShieldAlert,
  Trash,
  X,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import CheckClientForm from "./(meta-components)/ChechClientForm";
import { isEven } from "@/app/global/data";

export default function ClientTable() {
  const [ref, setRef] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { types, loading } = useSelector((state: any) => state.types);
  const { clients, is_loading } = useSelector((state: any) => state.client);
  const { currentJob } = useSelector((state: any) => state.job);
  const { organization } = useSelector((state: any) => state.validator);
  const dispatch = useDispatch();
  const [showDiagnosId, setShowDiagnosId] = useState(0);

  async function GetClients() {
    try {
      if (!ref && types && clients) {
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

            <div className="relative overflow-x-auto shadow-md rounded-lg border border-gray-300">
              <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      o/n
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Year
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Origin
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...clients]
                    .reverse()
                    .map((client: Client, index: number) => (
                      <React.Fragment key={client.id}>
                        <tr
                          className={`border-gray-200 ${
                            !isEven(index + 1) ? "bg-white" : "bg-gray-50"
                          } ${client.is_checked && "border-b border-gray-300"}`}
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {clients.length - index}
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.name} {client.surname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.born_in}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.origin}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.type.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.price} uzs
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {!client.is_checked ? (
                              <div className="flex gap-3 items-center">
                                <div
                                  className={`${
                                    currentJob &&
                                    currentJob.role !== "receptionist"
                                      ? "hidden"
                                      : "block"
                                  }`}
                                >
                                  <DropdownMenu>
                                    <DropdownMenuTrigger className="flex gap-2 bg-violet-600/10 px-1 py-1 text-black font-semibold rounded-md hover:bg-violet-700 hover:text-white transition-colors">
                                      <Menu />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                      align="end"
                                      className="w-56"
                                    >
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
                              <div className="flex gap-2">
                                <p className="my-2 bg-green-600 flex-1 text-white px-2 text-center">
                                  checked
                                </p>
                                {showDiagnosId === client.id ? (
                                  <button
                                    className="cursor-pointer text-red-600"
                                    onClick={() => setShowDiagnosId(0)}
                                  >
                                    <X />
                                  </button>
                                ) : (
                                  <button
                                    className="cursor-pointer text_color"
                                    onClick={() => setShowDiagnosId(client.id)}
                                  >
                                    <NotepadText />
                                  </button>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>

                        {client.id === showDiagnosId && client.is_checked && (
                          <tr
                            className={`border-gray-200 ${
                              !isEven(index + 1) ? "bg-white" : "bg-gray-50"
                            } border-b border-gray-300`}
                          >
                            <td colSpan={7} className="text_color px-6 py-3">
                              <span className="font-semibold">
                                {client.name} {client.surname}:{" "}
                              </span>
                              {client.diagnosis}
                            </td>
                          </tr>
                        )}

                        {!client.is_checked && (
                          <tr
                            className={`border-gray-200 ${
                              !isEven(index + 1) ? "bg-white" : "bg-gray-50"
                            } border-b border-gray-300`}
                          >
                            <td colSpan={7} className="px-6 py-3">
                              <CheckClientForm
                                client={client}
                                organization={organization}
                              />
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                </tbody>
              </table>
            </div>
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
