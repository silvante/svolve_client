import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileUser, GitFork, Plus } from "lucide-react";
import Link from "next/link";

export default function CreateButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 bg-violet-600 px-4 py-2 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors">
        Create <Plus />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <Link href="/panel/organizations/new">
          <DropdownMenuItem>
            <GitFork /> An Organization
          </DropdownMenuItem>
        </Link>
        <Link href="/panel/vacancies/new">
          <DropdownMenuItem>
            <FileUser /> A vacancy
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
