import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function JobLogo() {
  const { organization } = useSelector((state: any) => state.validator);
  if (!organization.logo) {
    return;
  }
  return (
    <Link href={`/job/${organization.unique_name}`} className="inline-block">
      <Image
        src={organization.logo}
        alt="Logotype svolve"
        width={0}
        height={0}
        className="w-auto h-10"
      />
    </Link>
  );
}
