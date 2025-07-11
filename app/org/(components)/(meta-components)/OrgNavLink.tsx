"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function OrgAsideLink({ href, children }: Props) {
  const pathname = usePathname();
  const { unique_name } = useSelector((state: any) => state.validator);
  console.log(unique_name);
  console.log(pathname);
  

  const isActive = pathname === `/org/${unique_name}${href}`;

  return (
    <Link
      className={clsx(
        "p-2 flex gap-3 items-center border-l-2 border-transparent transition-all",
        isActive && "text-violet-600 border-violet-600"
      )}
      href={`/org/${unique_name}/${href}`}
    >
      {children}
    </Link>
  );
}
