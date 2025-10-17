"use client"
import Spinner from "@/app/(global_components)/Spinner";
import { Menu, UserCircle } from "lucide-react"
import { useSelector } from "react-redux";

export default function ProfileButton() {
    const { currentUser, loading } = useSelector((state: any) => state.user);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="flex gap-2 rounded-full border border-gray-400 justify-center items-center p-1 pr-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex justify-center items-center text-gray-500">
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
        </div>
    )
}