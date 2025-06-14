import Link from "next/link";
import Svolve from "./Svolve";

export default function Header() {
  return (
    <header className="p-3 shadow-lg flex justify-between items-center">
      <div className="h-full flex">
        <Svolve />
      </div>
      <div className="space-x-3">
        <Link href={"/signin"} className="inline-block border-2 border-violet-600 px-4 py-2 rounded-xl">
          Sign in
        </Link>
        <Link href={"/signup"} className="inline-block bg-violet-600 border-2 border-violet-600 px-4 py-2 rounded-xl text-white">
          Sign up
        </Link>
      </div>
    </header>
  );
}
