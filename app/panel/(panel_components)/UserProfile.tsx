"use client";
import Spinner from "@/app/(global_components)/Spinner";
import { Eye, Menu } from "lucide-react";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function UserProfile() {
  const { currentUser, loading } = useSelector((state: any) => state.user);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 rounded-full border border-gray-400 justify-center items-center p-1 pr-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <Link href="/panel/profile">
            <DropdownMenuItem>
              <Eye /> view profile
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
