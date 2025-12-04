"use client";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="text_color space-y-4">
      <p className="text-md md:text-lg">14 kun bepul sinov - Karta talab qilinmaydi</p>
      <h2 className="text-3xl md:text-5xl">Oddiy va toza to'lov usullari</h2>
      <p className="text-md md:text-lg">Bugun murojaat qiling. Karta kerak emas.</p>

      <div className="p-5 md:p-8 border border-gray-300 rounded-2xl space-y-5">
        <div className="space-y-2">
          <h3 className="text-3xl md:text-5xl">
            99,000 UZS <span className="text-lg">Oyiga</span> /{" "}
            <span className="text-lg">organizatsiya</span>
          </h3>
          <p className="text-md md:text-lg">Yashirin to'lovlar va qo'shimcha xarajatlar yo'q</p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2">
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Cheksiz mijoz qo'shish imkoniyati.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Daromad va mijoz oqimining oylik tahlili.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Bir nechta tashkilotni boshqarish.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Bitta tashkilotga cheksiz xodim qo'shish.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Qidiruv tizimi orqali har bir mijozni tez topish.
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> Jamoat va yaratuvchidan bepul yordam.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2 flex items-start flex-col">
          <p className="text-md md:text-lg flex items-center gap-2">
             Visa, Mastercard, Apple Pay, Google Pay, PayPal orqali to'lov.
          </p>
          <Link
            href={"/signup"}
            className="py-2 px-4 font-medium flex gap-2 items-center text-lg  text-white bg-violet-600 rounded-xl"
          >
            Boshlash
          </Link>
        </div>
      </div>
    </div>
  );
}
