"use client";
import authService from "@/app/api/services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function SigninForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const login_data = { email, password };
      await authService.login(login_data);
      router.push(`/onboarding?email=${email}`);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (!error.response) {
        setErrorMessage("Something went wrong, try again later!");
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
  }

  return (
    <form className="text_color space-y-3" onSubmit={handleLogin}>
      {errorMessage !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {errorMessage}
        </p>
      )}
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="global_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="global_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <p className="inline-block">welcome back!</p>
      <button
        type="submit"
        className="bg-violet-600 text-white font-medium py-2 rounded-xl cursor-pointer w-full flex justify-center items-center h-10"
      >
        {!loading ? "Sign in" : <BeatLoader color="#ffffff" size={10} />}
      </button>
    </form>
  );
}
