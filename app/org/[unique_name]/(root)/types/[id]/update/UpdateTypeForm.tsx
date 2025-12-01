"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Type } from "@/app/types/User";
import { useParams, useRouter } from "next/navigation";
import Spinner from "@/app/(global_components)/Spinner";
import typeService from "@/app/api/services/typeService";
import { replaceType } from "@/app/store/slices/typesSlice";
import { ShieldAlert } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function UpdateTypeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { types, loading } = useSelector((state: any) => state.types);
  const { organization } = useSelector((state: any) => state.validator);

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
        organization.id,
        type.id,
        formData
      );
      const updatedType: Type = res;
      dispatch(replaceType(updatedType));
      router.push(`/org/${organization.unique_name}/types`);
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Barcha maydonlarni to'g'ri to'ldirganingizga ishonch hosil qiling!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={HandleUpdateType}>
      {error !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Ogohlantirish</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block">
          Turi nomi*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="global_input w-full"
          placeholder="Turi nomini kiriting"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
        />
      </div>

      {/* desctiprion */}
      <div className="space-y-1">
        <label htmlFor="description" className="block">
          Turi tavsifi*
        </label>
        <textarea
          rows={3}
          maxLength={500}
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="global_input w-full resize-none"
          placeholder="Turi tavsifini kiriting"
          required
        />
        <p className="text-sm text-gray-500">Maksimal 500 belgi</p>
      </div>

      {/* price */}
      <div className="space-y-1">
        <label htmlFor="price" className="block">
          Turi narxi*
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="global_input w-full"
          placeholder="Tur narxini kiriting"
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
          {isLoading ? "yangilanmoqda..." : "Turni yangilash"}
        </button>
      </div>
    </form>
  );
}

