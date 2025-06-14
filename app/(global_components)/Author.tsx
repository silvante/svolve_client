import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <Link href={"https://xamidov.uz"} target="_blanck" className="flex gap-1 justify-start items-center font-sans text_color">
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
  );
}
