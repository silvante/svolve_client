import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GitFork, Plus } from "lucide-react";
import Link from "next/link";

export default function CreateButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 bg-violet-600 px-4 py-2 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors">
        Create <Plus />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <Link href="/panel/organisations/new">
          <DropdownMenuItem>
            <GitFork /> An Organization
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
