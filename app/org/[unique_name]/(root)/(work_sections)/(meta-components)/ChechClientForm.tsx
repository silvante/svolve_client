"use client";
import { Client, Organization } from "@/app/types/User";
import { Check, Menu, PenBox } from "lucide-react";
import { useState } from "react";

export default function CheckClientForm({
  organization,
  client,
}: {
  organization: Organization;
  client: Client;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form className="flex gap-3 items-center">
      
      <input
        type="text"
        name="diagnosis"
        id="diagnosis"
        placeholder="Diagnosis..."
        className="flex-1 global_input"
        required
      />
      <button className="bg-violet-600 py-2 px-4 text-white rounded-xl cursor-pointer flex gap-2 items-center">
        {isLoading ? (
          "checking..."
        ) : (
          <p className="flex gap-2 items-center">
            Check <Check size={14} />
          </p>
        )}
      </button>
    </form>
  );
}
