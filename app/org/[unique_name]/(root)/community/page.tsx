"use client";
import Heading from "@/app/(global_components)/Heading";
import Community from "@/app/(root)/(sections)/Community";
import { useSelector } from "react-redux";

export default function OrgPanelPage() {
  const { organization } = useSelector((state: any) => state.validator);

  return (
    <div className="space-y-8">
      <div className="w-full overflow-hidden">
        <Heading text={`👋 Hey ${organization.name}`} />
      </div>
      <Community />
      <div className="space-y-2">
        <Heading text="# From Creator" />
        <p className="text_color">
          Following our social media channels at the top is highly recommended,
          as they are managed directly by the creator and remain highly active.
          You can easily access support, tutorials, and updates in real time. In
          addition, you may reach out directly to the CEO of Svolve for
          insights, feedback, and important announcements. Staying connected
          through these channels ensures you are always up to date with the
          latest features, improvements, and opportunities within our community.
        </p>
      </div>
    </div>
  );
}
