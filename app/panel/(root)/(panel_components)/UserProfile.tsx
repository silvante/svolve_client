"use client";
import { Eye, LogOut, Settings, UserPen } from "lucide-react";
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
      <DropdownMenuTrigger className="hidden lg:block">
        <ProfileButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <Link href="/panel/profile">
          <DropdownMenuItem>
            <Eye /> profilni ko'rish
          </DropdownMenuItem>
        </Link>
        <Link href="/panel/profile/settings">
          <DropdownMenuItem>
            <Settings /> Sozlamalar
          </DropdownMenuItem>
        </Link>
        <Link href="/signin">
          <DropdownMenuItem>
            <UserPen /> Hisobni o'zgartirish
          </DropdownMenuItem>
        </Link>
        <button
          className="rounded-lg cursor-pointer w-full"
          onClick={HandleLogOut}
        >
          <DropdownMenuItem className="cursor-pointer">
            <LogOut color="#e7000b" /> <p className="text-red-600"> Chiqish</p>
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
