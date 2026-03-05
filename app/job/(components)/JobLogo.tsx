import { Organization } from "@/app/types/User";
import Image from "next/image";
import Link from "next/link";

export default function JobLogo({ org }: { org: Organization }) {
  return (
    <Link href={`/job/${org.unique_name}`} className="inline-block">
      <Image
        src={org.logo}
        alt="Logotype Diagnos"
        width={0}
        height={0}
        className="w-auto h-10"
      />
    </Link>
  );
}
