import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <div className="flex items-center justify-start">
      <Link href={"https://xamidov.uz"} target="_blanck" className="flex gap-4 items-center justify-start">
        <p>Created by</p>
        <Image
          src={"/images/author.jpg"}
          alt="Authors picture"
          width={37}
          height={37}
          className="rounded-full border border-gray-300"
        />
        <p>Mardonbek Khamidov</p>
      </Link>
    </div>
  );
}
