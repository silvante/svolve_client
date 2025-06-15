"use client";
import { useSearchParams } from "next/navigation";

export default function BoardingMessage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <p>
      We have send magic link to{" "}
      <span className="font-semibold">{email ? email : "your email"}</span>, you
      can verify your email by just clicking to it, it will redirect you to{" "}
      <span className="font-semibold">Dashboard of Svalve</span>
    </p>
  );
}
