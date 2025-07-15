"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Spinner from "@/app/(global_components)/Spinner";
import clientService from "@/app/api/services/clientService";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";
import { updateClients } from "@/app/store/slices/clientSlice";
import { updateTypes } from "@/app/store/slices/typesSlice";
import { Client, Type } from "@/app/types/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ClientTable() {
  const { types, loading } = useSelector((state: any) => state.types);
  const { clients, is_loading } = useSelector((state: any) => state.client);
  const { organisation } = useSelector((state: any) => state.validator);
  const dispatch = useDispatch();
  async function GetClients() {
    try {
      if (types && clients) {
        return;
      } else {
        const response: any = await clientService.getTodaysClients(
          organisation.id
        );
        const clients: Client[] = response.clients;
        const types: Type[] = response.types;
        dispatch(updateClients(clients));
        dispatch(updateTypes(types));
      }
    } catch (error) {
      console.error("Error fetching organisations:", error);
    }
  }

  useEffect(() => {
    GetClients();
  }, []);

  if (loading || is_loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        {clients && clients.length !== 0 ? (
          <div className="space-y-5">
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
                {clients.map((client: Client, index: number) => (
                  <tr
                    key={client.id}
                    className={`border-b border-x border-gray-200`}
                  >
                    <td className="p-3 w-20 truncate">{index + 1}</td>
                    <td className="p-3 truncate">
                      {client.name} {client.surname}
                    </td>
                    <td className="p-3 truncate">{client.born_in}</td>
                    <td className="p-3 truncate">{client.origin}</td>
                    <td className="p-3 truncate">{client.type.name}</td>
                    <td className="p-3 truncate">{client.price}</td>
                    <td className="p-3 truncate">
                      <OrgLink
                        href="/"
                        className="bg-violet-600 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </OrgLink>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-200">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3">The End</th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <ErrorMessage text="Error message is working" desc="How good it is" />
        )}
      </>
    );
  }
}
