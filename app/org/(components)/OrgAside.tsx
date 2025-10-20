"use client";
import { useSelector } from "react-redux";
import OrgAsideLink from "./(meta-components)/OrgNavLink";
import {
  ArrowBigLeftDash,
  BadgeDollarSign,
  BookUser,
  BriefcaseBusiness,
  ChartArea,
  DollarSign,
  HandHeart,
  Pilcrow,
  Users,
  Wallet,
  WalletCards,
} from "lucide-react";
import Link from "next/link";

export default function OrgAside() {
  const { is_active } = useSelector((state: any) => state.aside);
  return (
    <aside
      className={`bg-white h-screen max-w-72 hidden w-full sticky top-0 left-0 pt-20 px-5 pb-5 border-r border-gray-300 flex-col gap-5 ${
        is_active ? "lg:flex" : "lg:hidden"
      }`}
    >
      <div className="text-muted-foreground text-sm flex gap-2">
        <p>Focus</p>
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">Ctrl + Shift + F</span>
        </kbd>
      </div>
      <div className="flex-1">
        <OrgAsideLink href="">
          <BriefcaseBusiness /> Work Panel
        </OrgAsideLink>
        <OrgAsideLink href="/statistics">
          <ChartArea /> Statistics
        </OrgAsideLink>
        <OrgAsideLink href="/clients">
          <BookUser /> Clients & timeline
        </OrgAsideLink>
        <OrgAsideLink href="/types">
          <Pilcrow /> Types
        </OrgAsideLink>
        <OrgAsideLink href="/workers">
          <Users /> Workers
        </OrgAsideLink>
        <OrgAsideLink href="/community">
          <HandHeart /> Community & Support
        </OrgAsideLink>
        <OrgAsideLink href="/subscription/?page=org">
          <Wallet /> Subscription
        </OrgAsideLink>
      </div>
      <Link
        href="/panel"
        className="flex gap-2 items-center p-2 hover:bg-red-600/10 hover:text-red-600 rounded-lg transition-all"
      >
        <ArrowBigLeftDash /> Back to panel
      </Link>
    </aside>
  );
}
