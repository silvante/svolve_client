"use client";
import { useState } from "react";
import Github from "./(providers)/Github";
import Google from "./(providers)/Google";

export default function Socials() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="text-center space-y-3">
      <p>OR</p>
      {errorMessage !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2 text-start">
          {errorMessage}
        </p>
      )}
      <div className="space-y-3">
        <Google setErrorMessage={setErrorMessage} />
        <Github setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
