import Heading from "@/app/(global_components)/Heading";
import SignupForm from "./SignupForm";
import Socials from "@/app/(auth)/(socials)/Socials";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Diagnos Uz | Ro'yxatdan o'tish",
  description: "Startaplar uchun qulay to'lov API | Ro'yxatdan o'tish sahifasi",
  keywords: ["Diagnos Uz", "ro'yxatdan o'tish", "yangi hisob", "to'lov API", "startaplar"],
  alternates: {
    canonical: "https://diagnos.uz/signup",
  },
  openGraph: {
    title: "Diagnos Uz | Ro'yxatdan o'tish",
    description: "Startaplar uchun qulay to'lov API | Ro'yxatdan o'tish sahifasi",
    type: "website",
    url: "https://diagnos.uz/signup",
    images: [
      {
        url: "https://diagnos.uz/icons/profile.svg",
        width: 800,
        height: 600,
        alt: "Diagnos Uz Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnos Uz | Ro'yxatdan o'tish",
    description: "Startaplar uchun qulay to'lov API | Ro'yxatdan o'tish sahifasi",
    images: ["https://diagnos.uz/icons/profile.svg"],
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

export default function SignUp() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Oson ro'yxatdan o'ting" />
      <Socials />
      <div className="flex text_color justify-starts">
        <p>
          Ro'yxatdan o'tganmisiz?{" "}
          <Link href={"/signin"} className="text-violet-600">
            Kirish
          </Link>
        </p>
      </div>
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
