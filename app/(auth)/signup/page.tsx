import Heading from "@/app/(global_components)/Heading";
import SignupForm from "./SignupForm";
import Socials from "@/app/(auth)/(socials)/Socials";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Svolve | Sign Up",
  description: "Easy to use payment API for startups | sign up page",
};

export default function SignUp() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Osson ro'yxatdan o'ting" />
      <Socials />
      <div className="flex text_color justify-starts">
        <p>Ro'yxatdan o'tganmisiz? <Link href={"/signin"} className="text-violet-600">Kirish</Link></p>
      </div>
      <SignupForm />
    </div>
  );
}
