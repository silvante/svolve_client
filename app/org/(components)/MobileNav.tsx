"use client";

import {
  ArrowBigLeftDash,
  BookUser,
  BriefcaseBusiness,
  ChartArea,
  HandHeart,
  Pilcrow,
  Users,
  Wallet,
} from "lucide-react";
import OrgAsideLink from "./(meta-components)/OrgNavLink";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="bg-white lg:hidden fixed overflow-x-scroll bottom-0 left-0 right-0 border-t border-gray-300">
      <div className="flex gap-5 flex-nowrap">
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
        <Link
          href="/panel"
          className="flex gap-2 items-center p-2 hover:bg-red-600/10 hover:text-red-600 rounded-lg transition-all"
        >
          <ArrowBigLeftDash /> Back to panel
        </Link>
      </div>
    </nav>
  );
}
