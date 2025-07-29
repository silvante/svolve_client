"use client";
import Heading from "@/app/(global_components)/Heading";
import { Camera } from "lucide-react";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { currentUser } = useSelector((state: any) => state.user);
  return (
    <div>
      <Heading text="You profile" />
      <div className="w-full py-10 flex items-center justify-center flex-col gap-5 min-h-screen h-full">
        <div className="bg-gray-300 max-w-44 w-full aspect-square rounded-full overflow-hidden">
          {currentUser.avatar ? (
            <img
              src={currentUser.avatar}
              alt="Your avatar"
              className="w-full h-full aspect-square object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <Camera size={40} />
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            {currentUser.name}
          </h2>
          <p className="ext-gray-950">{currentUser.email}</p>
        </div>
        <div className="p-10 flex-1 rounded-tr-2xl rounded-tl-2xl special_shadowing w-full space-y-5">
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-950 font-semibold">username:</p>
            <p className="text-gray-950">
              <span className="text-gray-700">svolve.uz/u/</span> @
              {currentUser.username}
            </p>
          </div>
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-700 font-semibold">bio:</p>
            {currentUser.bio ? (
              <p className="text-gray-900">{currentUser.bio}</p>
            ) : (
              <p className="text-gray-900">You can add now</p>
            )}
          </div>
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-950 font-semibold">contact:</p>
            {currentUser.contact ? (
              <p className="text-gray-900">{currentUser.contact}</p>
            ) : (
              <p className="text-gray-900">You can add now</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
