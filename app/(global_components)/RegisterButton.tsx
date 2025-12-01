"use client";
import { CircleUserRound, DoorOpen, LogIn } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegisterButton() {
  const t = useTranslations();

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

  if (loading) {
    return (
      <div className="space-x-3">
        <Link
          href={"/"}
          className="hidden md:inline-block border-2 px-4 py-2 rounded-xl bg-black/5 border-black/bg-black/5 text-black/5"
        >
          Loading
        </Link>
        <Link
          href={"/"}
          className="inline-block border-2 px-4 py-2 rounded-xl bg-black/5 border-black/bg-black/5 text-black/5"
        >
          Loading
        </Link>
      </div>
    );
  }

  return (
    <div className="space-x-3 flex gap-2 items-center justify-center text-lg">
      <Link
        href={"/signin"}
        className="px-4 py-2 hidden rounded-xl sm:flex gap-2 hover:text-violet-600"
      >
        Kirish <LogIn />
      </Link>
      {!isRegistered ? (
        <Link
          href={"/signup"}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white"
        >
          Ro'yxatdan o'tish <CircleUserRound />
        </Link>
      ) : (
        <Link
          href={"/panel"}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white"
        >
          Panel <DoorOpen />
        </Link>
      )}
    </div>
  );
}
