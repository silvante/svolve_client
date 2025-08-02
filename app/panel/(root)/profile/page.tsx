"use client";
import Heading from "@/app/(global_components)/Heading";
import { Camera, KeyRound, Pen } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { currentUser } = useSelector((state: any) => state.user);
  console.log(currentUser);

  return (
    <div>
      <Heading text="Your profile" />
      <div className="w-full py-10 flex items-center justify-center flex-col gap-10">
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="rounded-xl special_shadowing flex gap-5 p-5 items-center justify-start">
            <Link
              href={"/panel/profile/settings"}
              className="bg-gray-300 max-w-28 w-full aspect-square rounded-full overflow-hidden border border-gray-400"
            >
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
            </Link>
            <div className="text-start">
              <h2 className="text-3xl font-semibold text-gray-900">
                {currentUser.name}
              </h2>
              <p className="ext-gray-950">{currentUser.email}</p>
              <Link
                href={"/panel/profile/settings"}
                className="text-violet-600 flex gap-2 items-center mt-5"
              >
                Update Profile <Pen size={15} />
              </Link>
            </div>
          </div>
          <div className="rounded-xl special_shadowing flex gap-5 p-5 items-center justify-start">
            <Link
              href={"/panel/profile/settings"}
              className="bg-gradient-to-tr from-violet-600 via-purple-500 to-pink-600 max-w-28 w-full aspect-square rounded-full overflow-hidden border border-gray-400 flex justify-center items-center text-white"
            >
              <KeyRound size={50} />
            </Link>
            <div className="text-start">
              <h2 className="text-3xl font-semibold text-gray-900">
                Password
              </h2>
              <p className="ext-gray-950">You password is secure!</p>
              <Link
                href={"/panel/profile/settings"}
                className="text-violet-600 flex gap-2 items-center mt-5"
              >
                Update Password <Pen size={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-10 flex-1 rounded-2xl special_shadowing w-full space-y-5">
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-950 font-semibold">username:</p>
            <p className="text-gray-950">
              <span className="text-gray-700">svolve.uz/u/</span> @
              {currentUser.username}
            </p>
          </div>
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-950 font-semibold">bio:</p>
            {currentUser.bio ? (
              <p className="text-gray-900">{currentUser.bio}</p>
            ) : (
              <Link
                href={"/panel/profile/settings"}
                className="text-violet-600 flex gap-2 items-center"
              >
                You can add now <Pen size={15} />
              </Link>
            )}
          </div>
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-950 font-semibold">contact:</p>
            {currentUser.contact ? (
              <p className="text-gray-900">{currentUser.contact}</p>
            ) : (
              <Link
                href={"/panel/profile/settings"}
                className="text-violet-600 flex gap-2 items-center"
              >
                You can add now <Pen size={15} />
              </Link>
            )}
          </div>
          <div className="space-y-2 border-b border-b-gray-300 pb-3">
            <p className="text-lg text-gray-950 font-semibold">In Total:</p>
            <p className="text-gray-900">
              {currentUser._count.organizations} organizations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
