"use client";
import { Worker } from "@/app/types/User";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  worker: Worker;
  children: React.ReactNode;
};

export default function ViewWorkerDetails({ worker, children }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full flex">
          <SheetTitle className="w-full truncate">{worker.role}</SheetTitle>
          <SheetDescription>Account of worker</SheetDescription>
        </SheetHeader>
        <div className="w-full px-5 flex justify-center items-center flex-col space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={worker.worker.avatar} />
            <AvatarFallback>
              {worker.worker.name.split("")[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="w-full text-center">
            <p className="w-full truncate text_color font-semibold text-lg">
              {worker.worker.name}
            </p>
            <p className="w-full truncate text_color text-sm">
              {worker.worker.email}
            </p>
          </div>
        </div>
        <div className="w-full px-5 flex flex-col space-y-2">
          <SheetDescription>Other information</SheetDescription>
          <div className="space-y-1 w-full">
            <p className="text_color font-semibold w-full truncate">
              <span className="font-medium">phone number:</span>{" "}
              {worker.worker.contact}
            </p>
            <p className="text_color font-semibold w-full truncate">
              <span className="font-medium">username:</span> @
              {worker.worker.username}
            </p>
          </div>
        </div>
        <div className="w-full px-5">
          <SheetDescription>Attached types</SheetDescription>
        </div>
        <div className="w-full px-5 flex-1 overflow-scroll border-b border-gray-300">
            {worker.role === "doctor" ? (
                <div className="">apk</div>
            ): (
                <div>
                    
                </div>
            )}
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
