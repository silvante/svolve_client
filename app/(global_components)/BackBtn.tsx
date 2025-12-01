"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link href={href} className="bg-black/5 rounded-xl py-2 px-4 flex items-center gap-1 text_color">
      <ChevronLeft /> Orqaga
    </Link>
  );
}
