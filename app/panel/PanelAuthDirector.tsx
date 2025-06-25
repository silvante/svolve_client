"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import authService from "../api/services/authService";
import { updateUser } from "../store/slices/userSlice";

export default function PanelAuthDirector() {
  const [loading, setloading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      router.push("/signup");
    } else {
      if (!user.currentUser) {
        async function DispatchUser() {
          const user_profile = await authService.getProfile();
          //   in this plase we can set logic for reset token
          dispatch(updateUser(user_profile));
        }
        DispatchUser();
      }
      setloading(false);
    }
  }, []);
  return (
    <>
      {loading && (
        <div className="fixed w-full h-screen top-0 left-0 right-0 bottom-0 bg-white z-50 flex justify-center items-center">
          <HashLoader color="#7c3aed" size={58} />
        </div>
      )}
    </>
  );
}
