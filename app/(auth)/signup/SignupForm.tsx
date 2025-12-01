"use client";
import authService from "@/app/api/services/authService";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SignupForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const paramsError = useSearchParams().get("error");

  useEffect(() => {
    if (paramsError) {
      setErrorMessage(paramsError);
    }
  }, []);

  const [acception, setAcception] = useState(false);

  const handleCheckbox = (check: boolean) => {
    setAcception(check);
  };

  async function handleRegister(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      if (!acception) {
        setLoading(false);
        return setErrorMessage("Iltimos shartlarni o'qib rozi bo'lishni bosing.");
      }
      const register_data = { name, email };
      await authService.signup(register_data);
      router.push(`/onboarding?email=${email}`);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (!error.response) {
        setErrorMessage("Nimadur xato ketti, keyinroq urunib koring!");
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
  }

  return (
    <form className="text_color space-y-3" onSubmit={handleRegister}>
      {errorMessage !== "" && (
        <Alert variant="destructive">
          <ShieldAlert />
          <AlertTitle>Diqqat!</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="name">Ism</label>
        <input
          type="text"
          name="name"
          id="name"
          className="global_input"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="email">E-pochta</label>
        <input
          type="email"
          name="email"
          id="email"
          className="global_input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox
          id="check"
          checked={acception}
          onCheckedChange={handleCheckbox}
          className="border-gray-400 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:border-violet-600"
        />
        <label htmlFor="check">
          Barcha{" "}
          <Link href={"/terms"} className="inline-block text-violet-600">
            shartlarga
          </Link> {" "}
          roziman
        </label>
      </div>
      <button
        type="submit"
        className="bg-violet-600 text-white font-medium py-2 rounded-xl cursor-pointer px-8"
      >
        {!loading ? "Sign up" : <BeatLoader color="#ffffff" size={10} />}
      </button>
    </form>
  );
}
