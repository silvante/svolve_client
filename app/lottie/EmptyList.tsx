"use client";
import Lottie from "lottie-react";
import box_animation from "../assets/lottie/EmptyList.json";

export default function EmptyList({ width }: { width: number }) {
  return <Lottie animationData={box_animation} className={`w-${width}`} />;
}
