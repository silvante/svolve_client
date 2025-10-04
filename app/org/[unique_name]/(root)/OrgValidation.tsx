"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

export default function OrgValidator({ unique_name }: { unique_name: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { validation, loading } = useSelector((state: any) => state.validator);

  React.useEffect(() => {
    if (pathname !== `/org/${unique_name}/validation` && !validation) {
      router.push(`/org/${unique_name}/validation`);
    }
  }, [pathname, validation, unique_name, router]);

  return (
    <>
      {loading && (
        <div className="fixed w-full h-screen top-0 left-0 right-0 bottom-0 bg-white z-50 flex justify-center items-center">
          <HashLoader color="#7c3aed" size={58} />
        </div>
      )}
    </>
  );
}
