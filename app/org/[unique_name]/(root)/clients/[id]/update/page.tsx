import Heading from "@/app/(global_components)/Heading";
import UpdateClientForm from "./UpdateClientForm";

export default function UpdateClient() {
  return (
    <div className="space-y-5">
      <Heading text="Update client" />
      <UpdateClientForm />
    </div>
  );
}
