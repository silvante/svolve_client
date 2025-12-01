"use client";
import Heading from "@/app/(global_components)/Heading";
import authService from "@/app/api/services/authService";
import { updateUser } from "@/app/store/slices/userSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { HashLoader } from "react-spinners";

export default function Verification() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const dispatch = useDispatch();

  async function Verify() {
    if (!token) {
      return router.push("/signup");
    }
    try {
      setLoading1(true);
      const data: any = await authService.verifyEmail(token);
      const access_token = data.access_token;
      const reset_token = data.reset_token;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("reset_token", reset_token);
      setLoading1(false);
      setLoading2(true);
      const user_data = await authService.getProfile();
      // there user data shoul be saved to redux
      dispatch(updateUser(user_data));
      router.push("/panel");
      setLoading2(false);
    } catch (error) {
      toast.error("Sothing went wrong");
      router.push("/signup");
    }
  }

  useEffect(() => {
    Verify();
  }, []);

  return (
    <div className="space-y-4">
      <Heading text="Hisobingiz tekshirilmoqda..." />
      <HashLoader color="#7c3aed" size={80} />
      {loading1 && <p>Tekshirilmoqda...</p>}
      {loading2 && <p>Malumotlaringiz yuklanmoqda...</p>}
      {!loading1 && !loading2 && <p>Svolve ga hush kelibsiz!</p>}
      <p className="text-violet-600">Sahifadan chiqib ketmang!</p>
    </div>
  );
}
