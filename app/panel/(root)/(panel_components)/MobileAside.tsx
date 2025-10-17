"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

export function MobileAside() {
    const router = useRouter();
    return (
        <Sheet>
            <SheetTrigger asChild className="block lg:hidden">
                <ProfileButton />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <label htmlFor="sheet-demo-name">Name</label>
                        <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <label htmlFor="sheet-demo-username">Username</label>
                        <Input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
