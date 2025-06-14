import { Borel, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const boren = Borel({
  weight: "400",
});

export default function Author() {
  return (
    <div className="flex items-center justify-start">
      <Link
        href={"https://xamidov.uz"}
        target="_blanck"
        className="flex gap-4 items-center justify-start"
      >
        <p className={`${boren.className}`}>Created by</p>
        <Image
          src={"/images/author.jpg"}
          alt="Authors picture"
          width={37}
          height={37}
          className="rounded-full border border-gray-300"
        />
        <p className={`${boren.className}`}>Mardonbek Khamidov</p>
      </Link>
    </div>
  );
}
