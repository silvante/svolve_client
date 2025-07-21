"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ClientById() {
  const router = useRouter();
  const { organisation } = useSelector((state: any) => state.validator);
  useEffect(() => {
    router.push(`/org/${organisation.unique_name}`);
    return;
  }, []);
}
