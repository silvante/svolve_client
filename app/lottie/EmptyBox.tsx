"use client";
import Lottie from "lottie-react";
import box_animation from "../assets/lottie/EmptyBox.json";

export default function EmptyBox() {
  return <Lottie animationData={box_animation} className="w-96" />;
}
