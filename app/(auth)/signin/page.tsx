import Heading from "@/app/(global_components)/Heading";
import SigninForm from "./SigninForm";
import Socials from "../(socials)/Socials";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Sing in to your account" />
      <SigninForm />
      <Socials />
      <div className="flex text_color justify-center">
        <p>
          New to Svolve?{" "}
          <Link href={"/signup"} className="text-violet-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
