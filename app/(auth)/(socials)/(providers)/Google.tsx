"use client";
import Image from "next/image";
import { useState } from "react";

export default function Google({ setErrorMessage }: any) {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    try {
      setLoading(true);
      window.location.href = "http://localhost:8080/auth/google";
    } catch (error) {
      setErrorMessage("Something went wrong, please try again later");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className={`flex gap-3 cursor-pointer border border-gray-400 p-3 rounded-xl items-center justify-center ${
        loading ? "opacity-70" : ""
      }`}
      disabled={loading}
    >
      <Image
        src={"/social_icons/Google.svg"}
        alt="google icon"
        width={22}
        height={22}
      />{" "}
      Continue with Google
    </button>
  );
}
