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
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

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
    } catch (error) {
      console.error("Error fetching types:", error);
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
                  <th className="text-start p-3">No</th>
                  <th className="text-start p-3">Name</th>
                  <th className="text-start p-3">Description</th>
                  <th className="text-start p-3">Price</th>
                  <th className="text-start p-3">Total</th>
                  <th className="text-start p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {types.map((type: Type, index: number) => (
                  <tr
                    key={type.id}
                    className={`border-b border-x border-gray-200`}
                  >
                    <td className="p-3 w-20 truncate">{index + 1}</td>
                    <td className="p-3 truncate">{type.name}</td>
                    <td className="p-3 truncate">{type.description}</td>
                    <td className="p-3 truncate">{type.price}</td>
                    <td className="p-3 truncate">
                      {type._count.clients} clients
                    </td>
                    <td className="p-3 truncate flex gap-4">
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
              <tfoot className="bg-gray-200">
                <tr>
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
            text="There is no Types now"
            desc="You can create one now"
          />
        )}
      </>
    );
  }
}
