"use client";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const { currentUser } = useSelector((state: any) => state.user);
  
  return (
    <div>
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      <p></p>
    </div>
  );
}
