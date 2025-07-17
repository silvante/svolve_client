"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Spinner from "@/app/(global_components)/Spinner";
import clientService from "@/app/api/services/clientService";
import { updateClients } from "@/app/store/slices/clientSlice";
import { updateTypes } from "@/app/store/slices/typesSlice";
import { Client, Type } from "@/app/types/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckClientBtn from "./(meta-components)/CheckClientBtn";

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
                {[...clients].reverse().map((client: Client, index: number) => (
                  <tr
                    key={client.id}
                    className={`border-b border-x border-gray-200`}
                  >
                    <td className="p-3 w-20 truncate">{clients.length - index}</td>
                    <td className="p-3 truncate">
                      {client.name} {client.surname}
                    </td>
                    <td className="p-3 truncate">{client.born_in}</td>
                    <td className="p-3 truncate">{client.origin}</td>
                    <td className="p-3 truncate">{client.type.name}</td>
                    <td className="p-3 truncate">{client.price}</td>
                    <td className="p-3 truncate">
                      {!client.is_checked ? (
                        <CheckClientBtn
                          org_id={organisation.id}
                          client_id={client.id}
                        />
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
