import { Worker } from "@/app/types/User";
import { Button } from "@/components/ui/button";
import DeleteWorkerDialog from "../(components)/DeleteWorkerDialog";

export default function WorkersDangerZone({ worker }: { worker: Worker }) {
  return (
    <div className="w-full rounded-2xl p-8 space-y-5 bg-white shadow-md border border-gray-300">
      <DeleteWorkerDialog worker={worker}>
        <Button
          variant="outline"
          className="bg-red-600/10 text-red-600 flex py-2 px-4 gap-2 items-center cursor-pointer rounded-lg hover:bg-red-600 hover:text-white transition-all border-red-600"
        >
          Unemployee
        </Button>
      </DeleteWorkerDialog>
    </div>
  );
}
