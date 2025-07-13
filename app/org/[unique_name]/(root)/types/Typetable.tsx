"use client";
import Spinner from "@/app/(global_components)/Spinner";
import typeService from "@/app/api/services/typeService";
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
      <div className="space-y-5">
        {types && types.length > 0 ? (
          types.map((type: Type) => (
            <div key={type.id}>
              <p>{type.name}</p>
            </div>
          ))
        ) : (
          <p>No types found.</p>
        )}
      </div>
    );
  }
}
