"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Spinner from "@/app/(global_components)/Spinner";
import typeService from "@/app/api/services/typeService";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";
import { deleteType, updateTypes } from "@/app/store/slices/typesSlice";
import { Type } from "@/app/types/User";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, PenBox, ShieldAlert, Trash } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function TypeTable() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { types, loading } = useSelector((state: any) => state.types);
  const { organization } = useSelector((state: any) => state.validator);
  const dispatch = useDispatch();
  async function getTypes() {
    try {
      if (types) {
        return;
      } else {
        const response: any = await typeService.getTypes(organization.id);
        const types: Type[] = response;
        dispatch(updateTypes(types));
      }
    } catch (error: any) {
      setError("Error fetching types:" + error.message);
    }
  }

  useEffect(() => {
    getTypes();
  }, []);

  async function HandleDelete(id: number) {
    setIsLoading(true);
    try {
      const type: Type = types.find((type: Type) => type.id === id);
      const res: any = await typeService.deleteType(organization.id, type.id);
      console.log(res);
      if (res.deleted === true) {
        dispatch(deleteType(type));
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

  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        {types && types.length > 0 ? (
          <div className="space-y-5 w-full">
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
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      o/n
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {types.map((type: Type, index: number) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap">{type.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{type.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{type.price} uzs</td>
                      <td className="px-6 py-4 whitespace-nowrap">{type._count.clients} clients</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex gap-2 bg-violet-600 px-1 py-1 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors">
                            <Menu />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-56">
                            <OrgLink
                              href={`/types/${type.id}/update`}
                              className="rounded-lg flex"
                            >
                              <DropdownMenuItem className="cursor-pointer w-full">
                                <PenBox /> Update
                              </DropdownMenuItem>
                            </OrgLink>
                            <button
                              className="rounded-lg cursor-pointer w-full"
                              onClick={() => HandleDelete(type.id)}
                            >
                              <DropdownMenuItem className="cursor-pointer">
                                <Trash color="#e7000b" />{" "}
                                <p className="text-red-600">Delete</p>
                              </DropdownMenuItem>
                            </button>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <ErrorMessage
            text="There is no Types now"
            desc="You can create one now"
          />
        )}
      </>
    );
  }
}
