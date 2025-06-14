import Image from "next/image";

export default function Google() {
  return (
    <button className="flex gap-3 cursor-pointer w-full border border-gray-400 p-3 rounded-xl items-center justify-center">
      <Image
        src={"/social_icons/Google.svg"}
        alt="google icon"
        width={22}
        height={0}
      />{" "}
      Continue with Google
    </button>
  );
}
