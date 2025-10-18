"use client";
import Heading from "@/app/(global_components)/Heading";
import { Camera, KeyRound, Lock, Pen } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProfileActions from "./(profilesections)/ProfileActions";

export default function ProfilePage() {
  const { currentUser } = useSelector((state: any) => state.user);
  console.log(currentUser);

  return (
    <div className="w-full">
      <Heading text="Your profile" />
      <div className="w-full py-10 flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col xl:flex-row gap-8">
          {/* Profile Card */}
          <div className="flex xl:flex-1 w-full xl:w-auto items-center gap-5 rounded-xl border border-gray-300 shadow-md p-5">
            <Link
              href="/panel/profile/settings"
              className="bg-gray-300 w-28 h-28 rounded-full overflow-hidden border border-gray-400 flex items-center justify-center"
            >
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="Your avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera size={40} className="text-gray-500" />
              )}
            </Link>

            <div className="flex-1 text-start">
              <h2
                className="font-semibold text-gray-900 
             text-2xl sm:text-3xl 
             w-full
             overflow-hidden text-ellipsis whitespace-nowrap sm:whitespace-normal sm:break-words text_clamp_1"
              >
                {currentUser.name}
              </h2>

              <p className="text-gray-950 truncate text-ellipsis whitespace-nowrap sm:whitespace-normal sm:break-words text_clamp_1 w-full">
                {currentUser.email}{" "}
              </p>

              <Link
                href="/panel/profile/settings"
                className="mt-5 flex items-center gap-2 text-violet-600"
              >
                Update Profile <Pen size={15} />
              </Link>
            </div>
          </div>

          {/* Password Card */}
          <div className="flex flex-1 items-center gap-5 rounded-xl border border-gray-300 shadow-md p-5">
            <Link
              href="/panel/profile/settings"
              className="flex items-center justify-center w-28 h-28 rounded-full border border-gray-400 bg-gradient-to-tr from-violet-600 via-purple-500 to-pink-600 text-white"
            >
              <KeyRound size={50} />
            </Link>
            <div className="flex-1 text-start">
              <h2
                className="font-semibold text-gray-900 
             text-2xl sm:text-3xl 
             w-full 
             overflow-hidden text-ellipsis whitespace-nowrap sm:whitespace-normal sm:break-words text_clamp_1"
              >
                Password
              </h2>
              <p className="text-gray-950">Your password is secure!</p>
              <p className="mt-5 flex items-center gap-2 text-violet-600">
                App is Passwordless <Lock size={15} />
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full rounded-2xl border border-gray-300 shadow-md p-8 space-y-6">
          <div className="space-y-2 border-b border-gray-300 pb-3">
            <p className="text-lg font-semibold text-gray-950">Username:</p>
            <p className="text-gray-950">
              <span className="text-gray-700">svolve.uz/u/</span>@
              {currentUser.username}
            </p>
          </div>

          <div className="space-y-2 border-b border-gray-300 pb-3">
            <p className="text-lg font-semibold text-gray-950">Bio:</p>
            {currentUser.bio ? (
              <p className="text-gray-900">{currentUser.bio}</p>
            ) : (
              <Link
                href="/panel/profile/settings"
                className="flex items-center gap-2 text-violet-600"
              >
                You can add now <Pen size={15} />
              </Link>
            )}
          </div>

          <div className="space-y-2 border-b border-gray-300 pb-3">
            <p className="text-lg font-semibold text-gray-950">Contact:</p>
            {currentUser.contact ? (
              <p className="text-gray-900">{currentUser.contact}</p>
            ) : (
              <Link
                href="/panel/profile/settings"
                className="flex items-center gap-2 text-violet-600"
              >
                You can add now <Pen size={15} />
              </Link>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-950">In Total:</p>
            <p className="text-gray-900">
              {currentUser._count.organizations} organizations
            </p>
          </div>
        </div>

        <ProfileActions />
      </div>
    </div>
  );
}
