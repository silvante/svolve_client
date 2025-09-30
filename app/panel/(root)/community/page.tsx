"use client";
import Heading from "@/app/(global_components)/Heading";
import Community from "@/app/(root)/(sections)/Community";
import { useSelector } from "react-redux";

export default function CommunityPanelPage() {
  const { currentUser } = useSelector((state: any) => state.user);

  return (
    <div className="space-y-5">
      <div className="w-full overflow-hidden">
        <Heading text={`👋 Hey ${currentUser.name}`} />
      </div>
      <Community />
    </div>
  );
}
