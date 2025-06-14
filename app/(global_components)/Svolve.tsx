import Image from "next/image";
import Link from "next/link";

export default function Svolve() {
  return (
    <Link href={"/"} className="inline-block">
      <Image
        src={"/icons/logo.svg"}
        alt="Logotype svolve"
        width={140}
        height={0}
      />
    </Link>
  );
}
