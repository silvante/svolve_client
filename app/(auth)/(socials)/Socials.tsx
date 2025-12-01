"use client";
import { useState } from "react";
import Github from "./(providers)/Github";
import Google from "./(providers)/Google";
import { ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Socials() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="space-y-3">
      <p className="text-start">Ijtimoiy tarmoqlar</p>
      {errorMessage !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <div className="flex gap-4 flex-col sm:flex-row">
        <Google setErrorMessage={setErrorMessage} />
        <Github setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
