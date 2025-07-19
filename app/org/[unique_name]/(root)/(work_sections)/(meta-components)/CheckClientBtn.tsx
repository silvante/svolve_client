"use client";
import clientService from "@/app/api/services/clientService";
import { replaceClient } from "@/app/store/slices/clientSlice";
import { Client } from "@/app/types/User";
import { Check } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CheckClientBtn({
  org_id,
  client_id,
}: {
  org_id: number;
  client_id: number;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function HandleCheckClient() {
    setIsLoading(true);
    try {
      const res: any = await clientService.checkClient(org_id, client_id);
      if (res.checked === true) {
        const checked_client: Client = res.client;
        dispatch(replaceClient(checked_client));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }
  return (
    <button
      onClick={HandleCheckClient}
      className="bg-violet-600 py-2 px-4 text-white rounded-xl"
    >
      {isLoading ? (
        "checking..."
      ) : (
        <p className="flex gap-2 items-center cursor-pointer">
          Check <Check size={14} />
        </p>
      )}
    </button>
  );
}
