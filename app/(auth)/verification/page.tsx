"use client";
import Heading from "@/app/(global_components)/Heading";
import authService from "@/app/api/services/authService";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

export default function Verification() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  async function Verify() {
    if (!token) {
      return router.push("/signup");
    }
    try {
      const data = await authService.verifyEmail(token);
    } catch (error) {
      console.log(error);
      toast.error("Sothing went wrong");
      router.push("/signup");
    }
  }
  return (
    <div className="space-y-4">
      <Heading text="Veriying your email..." />
      <HashLoader color="#7c3aed" size={80} />
      <p></p>
      <p className="text-violet-600">email@example.com</p>
    </div>
  );
}
