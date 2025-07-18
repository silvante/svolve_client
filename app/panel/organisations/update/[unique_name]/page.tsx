"use client";
import { useParams } from "next/navigation";

export default function UpdateOrganisation() {
  const { unique_name } = useParams();
  return (
    <div>
      <p>{unique_name}</p>
    </div>
  );
}
