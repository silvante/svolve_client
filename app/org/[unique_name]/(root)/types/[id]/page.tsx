"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TypeById() {
  const router = useRouter();
  const { organization } = useSelector((state: any) => state.validator);
  useEffect(() => {
    router.push(`/org/${organization.unique_name}/types`);
    return;
  }, []);
}
