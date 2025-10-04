"use client";
import Lottie from "lottie-react";
import NotPaid from "../assets/lottie/notPaid.json";

export default function PaymentFailed() {
  return <Lottie animationData={NotPaid} className="w-72" loop={false} />;
}
