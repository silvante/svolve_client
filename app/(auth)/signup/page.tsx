import Heading from "@/app/(global_components)/Heading";
import SignupForm from "./SignupForm";
import Socials from "@/app/(auth)/(socials)/Socials";

export default function SignUp() {
  return (
    <div className="w-full space-y-4">
      <Heading text="Sign up to Svolve" />
      <SignupForm />
      <Socials />
    </div>
  );
}
