"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import typeService from "@/app/api/services/typeService";

export default function CreateTypeForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const { organisation } = useSelector((state: any) => state.validator);
  const router = useRouter();

  async function HandleCreateOrg(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = {
        name: name,
        description: description,
        price: Number(price),
      };
      const res = await typeService.createType(organisation.id, formData);
      console.log(res);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while creating the organisation.");
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={HandleCreateOrg}>
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
          placeholder="Enter organisation name"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          required
        />
      </div>

      {/* submit */}
      <div>
        <button
          type="submit"
          className="bg-violet-600 text-white py-2 px-5 rounded-md hover:bg-violet-700 transition-colors cursor-pointer"
        >
          {!loading ? "Create Organisation" : "Creating..."}
        </button>
      </div>
    </form>
  );
}
