import Image from "next/image";
import Author from "./Author";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full space-y-5">
      <Author />
      <div className="w-full flex justify-between items-center gap-5">
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-semibold">
            Powerful and Easy to use <span className="text-violet-600">Payment API</span> and One time
            payment rooms service for <span className="text-violet-600">Uzbekistan</span>
          </h1>
          <p>Pay to service only when you get paid by it</p>
          <Link href={"/"} className="py-2 px-4 font-medium text-white bg-violet-600 inline-block rounded-xl">Get started</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src={"/images/cards.svg"}
            alt="Credit cards"
            width={300}
            height={0}
            className="w-4/5"
          />
        </div>
      </div>
    </div>
  );
}
