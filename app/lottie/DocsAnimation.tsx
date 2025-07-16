"use client";
import Lottie from "lottie-react";
import animation from "../assets/lottie/Doctors.json";

export default function DocsAnimation() {
  return <Lottie animationData={animation} className="w-2xl" />;
}
