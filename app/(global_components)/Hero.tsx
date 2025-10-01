"use client";
import Author from "./Author";
import Link from "next/link";
import DocsAnimation from "../lottie/DocsAnimation";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isRegistered, setIsRejistered] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const reset_token = localStorage.getItem("reset_token");
    if (reset_token && access_token) {
      setIsRejistered(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="w-full space-y-5">
      <div className="flex justify-center items-center">
        <Author />
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex-1 space-y-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-semibold text-shadow-2xs">
            Powerful and Easy to use{" "}
            <span className="text-violet-600">organization</span> management
            platform for <span className="text-violet-600">Uzbekistan</span>
          </h1>
          <p>Simplisity and your security metters most for us</p>
          <Link
            href={isRegistered ? "/panel" : "/signin"}
            className="py-2 px-4 font-medium flex gap-2 items-center text-lg  text-white bg-violet-600 rounded-xl"
          >
            Get started <Play />
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <DocsAnimation />
        </div>
      </div>
    </div>
  );
}
