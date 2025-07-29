"use client";
import Spinner from "@/app/(global_components)/Spinner";
import { Eye, LogOut, Menu, Settings, UserCircle, UserPen } from "lucide-react";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const { currentUser, loading } = useSelector((state: any) => state.user);
  const router = useRouter();

  function HandleLogOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("reset_token");
    window.location.reload();
    router.push("/");
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 rounded-full border border-gray-400 justify-center items-center p-1 pr-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt="Your avatar"
                className="w-full h-full aspect-square object-cover"
              />
            ) : (
              <UserCircle />
            )}
          </div>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <Link href="/panel/profile">
            <DropdownMenuItem>
              <Eye /> view profile
            </DropdownMenuItem>
          </Link>
          <Link href="/panel/profile/settings">
            <DropdownMenuItem>
              <Settings /> Settings
            </DropdownMenuItem>
          </Link>
          <Link href="/signin">
            <DropdownMenuItem>
              <UserPen /> Change account
            </DropdownMenuItem>
          </Link>
          <button
            className="rounded-lg cursor-pointer w-full"
            onClick={HandleLogOut}
          >
            <DropdownMenuItem className="cursor-pointer">
              <LogOut color="#e7000b" />{" "}
              <p className="text-red-600"> Log-out</p>
            </DropdownMenuItem>
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
