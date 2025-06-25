import Image from "next/image";
import Link from "next/link";

interface SvolveProps {
  link?: string;
}

export default function Svolve({ link }: SvolveProps) {
  return (
    <Link href={link ? link : "/"} className="inline-block">
      <Image
        src={"/icons/logo.svg"}
        alt="Logotype svolve"
        width={140}
        height={0}
      />
    </Link>
  );
}
