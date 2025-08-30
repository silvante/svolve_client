import { Client } from "@/app/types/User";

export default function ClientCard({ client }: { client: Client }) {
  return (
    <div key={client.id}>
      <p>{client.name}</p>
    </div>
  );
}
