"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubscriptionSuccess() {
  const params = useParams();
  const unique_name = params.unique_name;

  const [sec, setSec] = useState(60);
  const [free, setFree] = useState(false);

  useEffect(() => {
    if (sec <= 0) {
      setFree(true);
      return;
    }

    const interval = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sec]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text_color text-2xl">
          {free
            ? "Obunangiz uchun rahmat, tashkilotingiz tayyor!"
            : "To'lovingiz qayta ishlanmoqda, iltimos kuting...!"}
        </p>
        {free ? (
          <Link
            href={`/org/${unique_name}/validation`}
            className="py-3 px-7 rounded-lg bg-violet-600 text-white"
          >
            Davom etish
          </Link>
        ) : (
          <p>
            <span className="text-violet-600 text-2xl">{sec}</span> soniya qoldi
          </p>
        )}
      </div>
    </div>
  );
}
