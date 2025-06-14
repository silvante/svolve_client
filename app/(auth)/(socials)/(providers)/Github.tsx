import Image from "next/image";

export default function Github() {
  return (
    <button className="flex gap-3 cursor-pointer w-full border border-gray-400 p-3 rounded-xl items-center justify-center">
      <Image
        src={"/social_icons/GitHub.svg"}
        alt="github icon"
        width={22}
        height={0}
      />{" "}
      Continue with Github
    </button>
  );
}
