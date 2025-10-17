"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import AsideLink from "./(meta-components)/AsideLink";
import {
  CircleUser,
  FileUser,
  GitFork,
  HandHeart,
  House,
  Settings,
  WorkflowIcon,
} from "lucide-react";

export function MobileAside() {
//   const { currentUser, loading } = useSelector((state: any) => state.user);

  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden">
        <div>
          <ProfileButton />
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <aside className="p-2 flex flex-col gap-1">
          <SheetClose asChild>
            <AsideLink href="/panel">
              <House /> Dashboard
            </AsideLink>
          </SheetClose>
          <SheetClose asChild>
            <AsideLink href="/panel/organizations">
              <GitFork /> Organizations
            </AsideLink>
          </SheetClose>
          <SheetClose asChild>
            <AsideLink href="/panel/vacancies">
              <FileUser /> Vacancies
            </AsideLink>
          </SheetClose>
          <SheetClose asChild>
            <AsideLink href="/panel/jobs">
              <WorkflowIcon /> Jobs
            </AsideLink>
          </SheetClose>
          <SheetClose asChild>
            <AsideLink href="/panel/profile">
              <CircleUser /> Profile
            </AsideLink>
          </SheetClose>
          <SheetClose asChild>
            <AsideLink href="/panel/community">
              <HandHeart /> Community & support
            </AsideLink>
          </SheetClose>
          <SheetClose asChild>
            <AsideLink href="/panel/profile/settings">
              <Settings /> Settings
            </AsideLink>
          </SheetClose>
        </aside>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
