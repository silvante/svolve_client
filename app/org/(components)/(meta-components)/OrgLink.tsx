"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

type Props = {
  href: string;
  className: string;
  children: React.ReactNode;
};

export default function OrgLink({ href, className, children }: Props) {
  const pathname = usePathname();
  const { organisation } = useSelector((state: any) => state.validator);

  const isActive = pathname === `/org/${organisation.unique_name}${href}`;

  return (
    <Link
      className={className}
      href={`/org/${organisation.unique_name}/${href}`}
    >
      {children}
    </Link>
  );
}
