"use client";
import Lottie from "lottie-react";
import PS from "../assets/lottie/PaymentSuccess.json";

export default function PaymentSuccess() {
  return <Lottie animationData={PS} className="w-72" loop={false} />;
}
