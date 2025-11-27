"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import typeService from "@/app/api/services/typeService";
import { Type } from "@/app/types/User";
import { pushType, setLoading } from "@/app/store/slices/typesSlice";
import { ShieldAlert } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function CreateTypeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("");
  const { organization } = useSelector((state: any) => state.validator);
  const router = useRouter();
  const dispatch = useDispatch();

  async function HandleCreateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        name: name,
        description: description,
        price: Number(price),
      };
      const res: any = await typeService.createType(organization.id, formData);
      const new_type: Type = res;
      dispatch(setLoading());
      dispatch(pushType(new_type));
      router.push(`/org/${organization.unique_name}/types`);
      setIsLoading(false);
      setError("");
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
    <form className="space-y-5" onSubmit={HandleCreateOrg}>
      {error !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
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
          placeholder="Enter type name"
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
          placeholder="Enter type description"
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
          placeholder="Enter organization name"
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
          {!isLoading ? "Create Organization" : "Creating..."}
        </button>
      </div>
    </form>
  );
}
