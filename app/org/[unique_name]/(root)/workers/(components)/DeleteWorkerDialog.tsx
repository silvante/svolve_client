"use client";
import workerService from "@/app/api/services/workerService";
import { deleteWorker } from "@/app/store/slices/workerSlice";
import { Worker } from "@/app/types/User";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  worker: Worker;
  children: React.ReactNode;
};

export default function DeleteWorkerDialog({ worker, children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { organization } = useSelector((state: any) => state.validator);
  const router = useRouter();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  async function HandleDelete() {
    setIsLoading(true);
    try {
      const res: any = await workerService.delete(organization.id, worker.id);
      console.log(res);
      if (res.deleted === true) {
        dispatch(deleteWorker(worker));
      }
      setIsLoading(false);
      router.push(`/org/${organization.unique_name}/workers`);
    } catch (error: any) {
      if (!error.response) {
        setError("Internal server error pleace try again later");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete worker</DialogTitle>
          <DialogDescription>
            To delete worker you have to enter his username{" "}
            <span className="font-semibold">{worker.worker.username}</span> for
            safety reasons.
          </DialogDescription>
        </DialogHeader>
        {error !== "" && (
          <Alert variant="destructive">
            <ShieldAlert />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="grid gap-4">
          <div className="grid gap-3">
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            className="cursor-pointer"
            disabled={username !== worker.worker.username}
            onClick={HandleDelete}
          >
            {isLoading ? "Submitting..." : "Unemployee"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
