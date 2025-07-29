"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function AsideLink({ href, children }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={clsx(
        "p-2 flex gap-3 items-center border-l-2 border-transparent transition-all",
        isActive && "text-violet-600 border-violet-600"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
