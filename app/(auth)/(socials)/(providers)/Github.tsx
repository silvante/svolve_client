"use client";
import Image from "next/image";
import { useState } from "react";

export default function Github({ setErrorMessage }: any) {
  const [loading, setLoading] = useState(false);

  const handleGithubLogin = () => {
    try {
      setLoading(true);
      window.location.href = "http://localhost:8080/auth/github";
    } catch (error) {
      setErrorMessage("something went wrong, please try again later");
    }
  };

  return (
    <button
      onClick={handleGithubLogin}
      className={`flex gap-3 cursor-pointer border border-gray-400 p-3 rounded-xl items-center justify-center ${
        loading ? "opacity-70" : ""
      }`}
      disabled={loading}
    >
      <Image
        src={"/social_icons/GitHub.svg"}
        alt="github icon"
        width={22}
        height={22}
      />{" "}
      Continue with Github
    </button>
  );
}
