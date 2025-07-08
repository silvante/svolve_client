"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function OrgValidator({ unique_name }: { unique_name: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { validation } = useSelector((state: any) => state.validator);

  React.useEffect(() => {
    if (pathname !== `/org/${unique_name}/validation` && !validation) {
      router.push(`/org/${unique_name}/validation`);
    }
  }, [pathname, validation, unique_name, router]);

  return <></>;
}
