import Image from "next/image";
import Author from "./Author";
import Link from "next/link";
import DocsAnimation from "../lottie/DocsAnimation";

export default function Hero() {
  return (
    <div className="w-full space-y-5">
      <div className="flex justify-center items-center">
        <Author />
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex-1 space-y-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-semibold">
            Powerful and Easy to use{" "}
            <span className="text-violet-600">organisation</span> management
            platform for <span className="text-violet-600">Uzbekistan</span>
          </h1>
          <p>Pay to service only when you get paid by it</p>
          <Link
            href={"/"}
            className="py-2 px-4 font-medium text-white bg-violet-600 inline-block rounded-xl"
          >
            Get started
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <DocsAnimation />
        </div>
      </div>
    </div>
  );
}
