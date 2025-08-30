import { Client } from "@/app/types/User";

export default function ClientCard({ client }: { client: Client }) {
  return (
    <div>
      <p>{client.name}</p>
    </div>
  );
}
