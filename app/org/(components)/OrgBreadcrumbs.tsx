"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";
import { useSelector } from "react-redux";

export default function OrgBreadcrumbs() {
  const pathname = usePathname();
  const cleanedPath = decodeURIComponent(pathname);
  let { organization } = useSelector((state: any) => state.validator);
  const pathSegments = cleanedPath
    .split("/")
    .filter(
      (segment) =>
        segment !== "" &&
        segment !== "panel" &&
        segment !== "org" &&
        segment !== organization.unique_name
    );

  const generateBreadcrumbLinks = () => {
    const links: JSX.Element[] = [];

    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      const href =
        `/org/${organization.unique_name}/` +
        pathSegments.slice(0, i + 1).join("/");

      links.push(
        <React.Fragment key={i}>
          <span className="mx-2 text-gray-400">/</span>
          {i !== pathSegments.length - 1 ? (
            <Link href={href} className="text-violet-600 capitalize">
              {segment.replace(/-/g, " ")}
            </Link>
          ) : (
            <span className="capitalize">{segment.replace(/-/g, " ")}</span>
          )}
        </React.Fragment>
      );
    }

    return links;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap items-center">
        <Link
          href={`/org/${organization.unique_name}`}
          className="text-violet-600 capitalize"
        >
          {organization.unique_name}
        </Link>
        {generateBreadcrumbLinks()}
      </div>
    </div>
  );
}
