import Heading from "@/app/(global_components)/Heading";
import SigninForm from "./SigninForm";
import Socials from "../(socials)/Socials";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Svolve | Kirish",
  description: "Startaplar uchun qulay to'lov API | Kirish sahifasi",
  keywords: ["Svolve", "kirish", "tizimga kirish", "hisobga kirish", "to'lov API", "startaplar"],
  alternates: {
    canonical: "https://svolve.uz/signin",
  },
  openGraph: {
    title: "Svolve | Kirish",
    description: "Startaplar uchun qulay to'lov API | Kirish sahifasi",
    type: "website",
    url: "https://svolve.uz/signin",
    images: [
      {
        url: "https://svolve.uz/icons/profile.svg",
        width: 800,
        height: 600,
        alt: "Svolve Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Svolve | Kirish",
    description: "Startaplar uchun qulay to'lov API | Kirish sahifasi",
    images: ["https://svolve.uz/icons/profile.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function SignIn() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Hisobingizga kiring" />
      <Socials />
      <div className="flex text_color justify-start">
        <p>
          Yangimisiz?{" "}
          <Link href={"/signup"} className="text-violet-600">
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <SigninForm />
      </Suspense>
    </div>
  );
}
