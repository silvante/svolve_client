"use client";
import { SquareChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GoBackToPanel() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={"/panel"}
      className="text-gray-800 md:p-2 rounded-full flex gap-2 items-center hover:text-violet-600"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SquareChevronLeft size={20} /> {hovered && (<p className="hidden lg:block">Go back to panel</p>)}
    </Link>
  );
}
