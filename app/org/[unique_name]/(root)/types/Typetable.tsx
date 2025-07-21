"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Spinner from "@/app/(global_components)/Spinner";
import typeService from "@/app/api/services/typeService";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";
import { deleteType, updateTypes } from "@/app/store/slices/typesSlice";
import { Type } from "@/app/types/User";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TypeTable() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(0);

  const { types, loading } = useSelector((state: any) => state.types);
  const { organisation } = useSelector((state: any) => state.validator);
  const dispatch = useDispatch();
  async function getTypes() {
    try {
      if (types) {
        return;
      } else {
        const response: any = await typeService.getTypes(organisation.id);
        const types: Type[] = response;
        dispatch(updateTypes(types));
      }
    } catch (error) {
      console.error("Error fetching organisations:", error);
    }
  }

  useEffect(() => {
    getTypes();
  }, []);

  async function HandleDelete(id: number) {
    try {
      const type: Type = types.find((type: Type) => type.id === id);
      setIsLoading(true);
      setDeletingIndex(type.id);
      const res: any = await typeService.deleteType(organisation.id, type.id);
      console.log(res);
      if (res.deleted === true) {
        dispatch(deleteType(type));
      }
      setIsLoading(false);
      setDeletingIndex(0);
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
      setDeletingIndex(0);
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
              <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
                {error}
              </p>
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
                      <OrgLink
                        href={`/types/${type.id}/update`}
                        className="bg-violet-600 text-white px-4 py-2 rounded-lg flex"
                      >
                        Update
                      </OrgLink>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                        onClick={() => HandleDelete(type.id)}
                      >
                        {isLoading && deletingIndex === type.id
                          ? "deleting..."
                          : "Delete"}
                      </button>
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
