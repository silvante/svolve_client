"use client";
import authService from "@/app/api/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const register_data = { name, email, password };
      const data: any = await authService.signup(register_data);
      toast.success(data.message);
      router.push(`/onboarding?email=${email}`);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      console.log(error.response);
      if (!error.response) {
        toast.error("Something went wrong, try again later!");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <form className="text_color space-y-3" onSubmit={handleRegister}>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="name">Name</label>
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
        <label htmlFor="email">Email</label>
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
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="global_input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link href={"/terms"} className=" inline-block">
        Read terms first
      </Link>
      <button
        type="submit"
        className="bg-violet-600 text-white font-medium py-2 rounded-xl cursor-pointer w-full"
      >
        {!loading ? "Sign up" : <BeatLoader color="#ffffff" size={10} />}
      </button>
    </form>
  );
}
