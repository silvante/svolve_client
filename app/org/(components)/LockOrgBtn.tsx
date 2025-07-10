"use client";
import { LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LockOrgBtn() {
  const { unique_name } = useParams();
  const router = useRouter();

  useEffect(() => {
    const handleLockEvent = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLocaleLowerCase() === "l") {
        router.push(`/org/${unique_name}/validation`);
      }
    };

    window.addEventListener("keydown", handleLockEvent);
    return () => window.removeEventListener("keydown", handleLockEvent);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="text-muted-foreground text-sm flex gap-2">
        <p>Press</p>
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">Ctrl + Shift + L</span>
        </kbd>
        <p>to Lock</p>
      </div>
      <Link
        href={`/org/${unique_name}/validation`}
        className="text-gray-500 hover:text-gray-700"
      >
        <LockKeyhole />
      </Link>
    </div>
  );
}
