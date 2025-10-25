"use client";
import clientService from "@/app/api/services/clientService";
import { replaceClient } from "@/app/store/slices/clientSlice";
import { Client, Organization } from "@/app/types/User";
import { Check, NotebookPen, ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CheckClientForm({
  organization,
  client,
}: {
  organization: Organization;
  client: Client;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosis, setDiagnisis] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  async function CheckClient(e: any) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res: any = await clientService.checkClient(
        organization.id,
        client.id,
        diagnosis
      );
      if (res.checked === true) {
        const checked_client: Client = res.client;
        dispatch(replaceClient(checked_client));
      }
    } catch (error: any) {
      if (!error.response) {
        setError("Internal server error pleace try again later");
      } else {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (error !== "") {
    return (
      <Alert variant="destructive">
        <ShieldAlert />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return (
    <form className="flex gap-3 items-center text_color" onSubmit={CheckClient}>
      <NotebookPen />
      <input
        type="text"
        name="diagnosis"
        id="diagnosis"
        placeholder="Diagnosis..."
        className="flex-1 global_input"
        maxLength={150}
        required
        value={diagnosis}
        onChange={(e) => setDiagnisis(e.target.value)}
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
