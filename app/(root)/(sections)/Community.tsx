import Heading from "@/app/(global_components)/Heading";
import { Socials } from "@/app/global/data";
import profile from "@/public/icons/profile.svg";
import {
  BookMarked,
  HandHeart,
  MessageCircleMore,
  Podcast,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center py-5">
        <Image
          src={profile}
          alt="Svolve Community icons"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center justify-center">
        <Heading text="Welcome to Svolve Community" />
      </div>
      <div className="w-full grid grid-cols-2 gap-5">
        <div className="rounded-xl flex items-center justify-between border border-gray-300 shadow-md p-5 border-b-2 border-b-violet-600">
          <div className="flex-1 space-y-2">
            <Heading text="Support & Care" />
            <p className="text-gray-600">Support from Creators</p>
          </div>
          <div className="text-violet-600">
            <HandHeart size={50} />
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-between border border-gray-300 shadow-md p-5 border-b-2 border-b-violet-600">
          <div className="flex-1 space-y-2">
            <Heading text="Q&A Streams" />
            <p className="text-gray-600">Streams whenever you want</p>
          </div>
          <div className="text-violet-600">
            <Podcast size={50} />
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-between border border-gray-300 shadow-md p-5 border-b-2 border-b-violet-600">
          <div className="flex-1 space-y-2">
            <Heading text="Tutorials" />
            <p className="text-gray-600">Tutorials on YouTube</p>
          </div>
          <div className="text-violet-600">
            <BookMarked size={50} />
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-between border border-gray-300 shadow-md p-5 border-b-2 border-b-violet-600">
          <div className="flex-1 space-y-2">
            <Heading text="Live Chats" />
            <p className="text-gray-600">You can chat with other users</p>
          </div>
          <div className="text-violet-600">
            <MessageCircleMore size={50} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Heading text="Take your place" />
      </div>
      <div className="flex flex-wrap w-full items-center justify-center gap-4">
        {Socials.map((app: any) => {
          return (
            <Link
              href={app.url}
              target="_blanck"
              key={app.id}
              className="rounded-md border border-gray-300 shadow-md text_color p-2 flex gap-2 pr-3"
            >
              <Image src={app.icon} alt={app.name} width={20} height={20} />
              <p>{app.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
