import Image from "next/image";
import Link from "next/link";

interface DiagnosProps {
  link?: string;
}

export default function Diagnos({ link }: DiagnosProps) {
  return (
    <Link href={link ? link : "/"} className="inline-block">
      <Image
        src={"/icons/logo.svg"}
        alt="Logotype Diagnos"
        width={140}
        height={38.5}
      />
    </Link>
  );
}
