"use client";
import { useSearchParams } from "next/navigation";

export default function BoardingMessage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <p>
      Biz <span className="font-semibold">{email ? email : "sizning emailingizga"}</span> sehrli havola yubordik, siz shunchaki uni bosish orqali o'z emailingizni tasdiqlashingiz mumkin, u sizni <span className="font-semibold">Svolve boshqaruv paneliga</span> yo'naltiradi
    </p>
  );
}
