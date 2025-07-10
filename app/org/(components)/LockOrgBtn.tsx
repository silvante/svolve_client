import { LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LockOrgBtn() {
  const { unique_name } = useParams();
  return (
    <Link href={`/org/${unique_name}/validation`} className="text-gray-500 hover:text-gray-700">
      <LockKeyhole />
    </Link>
  );
}
