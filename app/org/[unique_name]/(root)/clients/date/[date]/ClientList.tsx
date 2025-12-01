"use client";
import { Client, Organization } from "@/app/types/User";
import { useEffect, useState } from "react";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import { HashLoader } from "react-spinners";
import { ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import clientService from "@/app/api/services/clientService";
import ClientCard from "../../(components)/(meta)/Client";

export default function ClientList({
  organization,
  date,
}: {
  organization: Organization;
  date: string;
}) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, page: 1, last_page: 1 });
  const [clients, setClients] = useState([]);

  async function GetClients() {
    setIsLoading(true);
    try {
      const res: any = await clientService.getByDate(
        organization.id,
        date,
        page,
        10
      );
      const { data, meta } = res;
      setClients(data);
      setMeta(meta);
      setError("");
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

  useEffect(() => {
    GetClients();
  }, [page]);

  let total_revenue = "0";
  if (!isLoading && clients.length > 0) {
    const totalPrice = clients.reduce(
      (sum: any, client: Client) => sum + client.price,
      0
    );
    const formatted = totalPrice.toLocaleString();
    total_revenue = formatted;
  }

  return (
    <div className="space-y-8">
      <p className="text-lg flex flex-col">
        <span className="font-mono">
          Tanlangan sana: <span className="text-violet-600">{date}</span>
        </span>
        <span className="font-mono">
          umumiy daromad:{" "}
          <span className="text-violet-600">{total_revenue} uzs</span>
        </span>
      </p>
      {error !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Ogohlantirish</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <HashLoader color="#7c3aed" size={58} />
        </div>
      ) : (
        <div className="w-full p-5 rounded-xl border border-gray-300">
          {clients && clients.length > 0 ? (
            <div className="w-full space-y-5">
              {clients.map((client: Client) => (
                <ClientCard key={client.id} client={client} />
              ))}
            </div>
          ) : (
            <ErrorMessage
              text="Mijozlar topilmadi!"
              desc="boshqa narsani sinab ko'ring"
            />
          )}
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-5 justify-center items-center">
          <button
            className={`${
              page <= 1 && "opacity-50"
            } border-gray-300 border text-gray-800 py-2 px-4 rounded-full cursor-pointer hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all`}
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Oldingi
          </button>
          <h3>
            {page} / {meta.last_page}
          </h3>
          <button
            className={`${
              page >= meta.last_page && "opacity-50"
            } border-gray-300 border text-gray-800 py-2 px-4 rounded-full cursor-pointer hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all`}
            disabled={page >= meta.last_page}
            onClick={() => setPage(page + 1)}
          >
            Keyingi
          </button>
        </div>
      </div>
    </div>
  );
}
