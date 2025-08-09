"use client";
import vacancyService from "@/app/api/services/vacancyService";
import { deleteVacancy } from "@/app/store/slices/vacancySlice";
import { Vacancy } from "@/app/types/User";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  vacancy: Vacancy;
  children: React.ReactNode;
};

export default function DeleteVacancyModule({ vacancy, children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  async function HandleDelete() {
    setIsLoading(true);
    try {
      const res: any = await vacancyService.delete(vacancy.id);
      console.log(res);
      if (res.deleted === true) {
        dispatch(deleteVacancy(vacancy));
      }
      setIsLoading(false);
      router.push("/panel/vacancies");
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
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            vacancy ({vacancy.name}) and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {!isLoading && <AlertDialogCancel>Cancel</AlertDialogCancel>}
          <AlertDialogAction onClick={HandleDelete}>
            {isLoading ? "deleting..." : "Continue & delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
