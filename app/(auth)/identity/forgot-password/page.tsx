import Heading from "@/app/(global_components)/Heading";
import Image from "next/image";
import Link from "next/link";
import ForgotPasswordForm from "./ForgotPassword";

export default function ForgotPassword() {
  return (
    <div className="space-y-4">
      <Heading text="Verify your email" />
      <ForgotPasswordForm />
      <Link href={"/signin"} className="text-violet-600 inline-block">
        Back to sign in
      </Link>
    </div>
  );
}
