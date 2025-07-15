"use client";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import Spinner from "@/app/(global_components)/Spinner";
import typeService from "@/app/api/services/typeService";
import OrgLink from "@/app/org/(components)/(meta-components)/OrgLink";
import { updateTypes } from "@/app/store/slices/typesSlice";
import { Type } from "@/app/types/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TypeTable() {
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
            <table className="w-full rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr className="">
                  <th className="text-start p-3">No</th>
                  <th className="text-start p-3">Name</th>
                  <th className="text-start p-3">Description</th>
                  <th className="text-start p-3">Price</th>
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
