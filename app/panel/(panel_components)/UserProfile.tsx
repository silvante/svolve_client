"use client";
import Spinner from "@/app/(global_components)/Spinner";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const { currentUser, loading } = useSelector((state: any) => state.user);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <p>{currentUser.name}</p>
      </div>
    );
  }
}
