import Heading from "@/app/(global_components)/Heading";
import SigninForm from "./SigninForm";
import Socials from "../(socials)/Socials";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Diagnos Uz | Kirish",
  description: "Startaplar uchun qulay to'lov API | Kirish sahifasi",
  keywords: [
    "diagnos",
    "Diagnos",
    "DIAGNOS",
    "Diagnos Uz",
    "diagnos uz",
    "DIAGNOS UZ",
    "diagnos_uz",
    "DiagnosUz",
    "kirish",
    "tizimga kirish",
    "hisobga kirish",
    "to'lov API",
    "startaplar",
    "akkauntga kirish",
    "login",
    "signin",
    "avtorizatsiya",
    "profilga kirish",
    "O'zbekiston startaplari",
    "tashkilotga kirish",
    "biznes hisobiga kirish",
    "Diagnos Uz login",
    "Diagnos Uz kirish",
    "diagnos.uz kirish",
    "dasturga kirish",
    "mobil ilovaga kirish",
    "saytga kirish",
    "xavfsiz kirish",
    "parol bilan kirish",
    "login page",
    "signin page",
    "authenticate",
    "access account",
  ],
  alternates: {
    canonical: "https://diagnos.uz/signin",
  },
  openGraph: {
    title: "Diagnos Uz | Kirish",
    description: "Startaplar uchun qulay to'lov API | Kirish sahifasi",
    type: "website",
    url: "https://diagnos.uz/signin",
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
    title: "Diagnos Uz | Kirish",
    description: "Startaplar uchun qulay to'lov API | Kirish sahifasi",
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
