"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceOrganisation } from "@/app/store/slices/organisationSlice";
import { Type } from "@/app/types/User";
import { useParams, useRouter } from "next/navigation";
import Spinner from "@/app/(global_components)/Spinner";
import typeService from "@/app/api/services/typeService";
import { replaceType } from "@/app/store/slices/typesSlice";

export default function UpdateTypeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { types, loading } = useSelector((state: any) => state.types);
  const { organisation } = useSelector((state: any) => state.validator);

  if (loading) {
    return (
      <div className="w-full py-10 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const type = types.find((org: Type) => org.id === Number(id));

  const [error, setError] = useState("");
  const [name, setName] = useState(type.name);
  const [description, setDescription] = useState(type.description);
  const [price, setPrice] = useState(type.price);
  const dispatch = useDispatch();
  const router = useRouter();

  async function HandleUpdateType(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        name,
        description,
        price: Number(price),
      };
      const res: any = await typeService.updateType(
        organisation.id,
        type.id,
        formData
      );
      const updatedType: Type = res;
      dispatch(replaceType(updatedType));
      router.push(`/org/${organisation.unique_name}/types`);
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={HandleUpdateType}>
      {error !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {error}
        </p>
      )}
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block">
          Type Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="global_input w-full"
          placeholder="Enter organisation name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
        />
      </div>

      {/* desctiprion */}
      <div className="space-y-1">
        <label htmlFor="description" className="block">
          Type Description*
        </label>
        <textarea
          rows={3}
          maxLength={500}
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="global_input w-full resize-none"
          placeholder="Enter organisation description"
          required
        />
        <p className="text-sm text-gray-500">Max 500 characters</p>
      </div>

      {/* price */}
      <div className="space-y-1">
        <label htmlFor="price" className="block">
          Type price*
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="global_input w-full"
          placeholder="Enter organisation name"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      {/* submit */}
      <div>
        <button
          type="submit"
          className="bg-violet-600 text-white py-2 px-5 rounded-md hover:bg-violet-700 transition-colors cursor-pointer"
        >
          {isLoading ? "creating..." : "Create Organisation"}
        </button>
      </div>
    </form>
  );
}
