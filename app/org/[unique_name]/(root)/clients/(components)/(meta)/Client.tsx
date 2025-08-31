import { Client } from "@/app/types/User";

export default function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border rounded-xl px-4 py-2 shadow-sm bg-white hover:shadow-md transition">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-gray-800">
          {client.name} {client.surname}
        </span>
        <span className="text-sm text-gray-500">
          ({client.born_in}, {client.origin})
        </span>
        <span className="text-sm text-violet-600 font-medium">
          {client.type.name} – {client.type.description}
        </span>
      </div>

      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        <span className="text-green-600 font-bold">{client.price} UZS</span>
        {client.is_checked ? (
          <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600">
            Checked
          </span>
        ) : (
          <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-600">
            Pending
          </span>
        )}
      </div>
    </div>
  );
}
