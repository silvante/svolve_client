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
import ProfileButton from "./ProfileButton";

export default function UserProfile() {
  const router = useRouter();

  function HandleLogOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("reset_token");
    window.location.reload();
    router.push("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileButton />
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
            <LogOut color="#e7000b" /> <p className="text-red-600"> Log-out</p>
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
