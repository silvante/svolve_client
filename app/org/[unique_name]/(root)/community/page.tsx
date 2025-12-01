"use client";
import Heading from "@/app/(global_components)/Heading";
import Community from "@/app/(root)/(sections)/Community";
import { useSelector } from "react-redux";

export default function OrgPanelPage() {
  const { organization } = useSelector((state: any) => state.validator);

  return (
    <div className="space-y-8">
      <div className="w-full overflow-hidden">
        <Heading text={`👋 Salom ${organization.name}`} />
      </div>
      <Community />
      <div className="space-y-2">
        <Heading text="# Yaratuvchidan" />
        <p className="text_color">
          Yuqoridagi ijtimoiy tarmoqlarimizga obuna bo'lish tavsiya etiladi,
          chunki ular to'g'ridan-to'g'ri yaratuvchi tomonidan boshqariladi va
          doimiy ravishda faol bo'ladi. Siz real vaqt rejimida qo'llab-quvvatlash,
          qo'llanmalar va yangilanishlarga osongina kirishingiz mumkin. Bundan
          tashqari, Svolve bosh direktori bilan to'g'ridan-to'g'ri bog'lanib,
          fikr-mulohazalar, takliflar va muhim e'lonlarni olishingiz mumkin.
          Ushbu kanallar orqali bog'lanib turish sizni hamjamiyatimizdagi eng
          so'nggi xususiyatlar, yaxshilanishlar va imkoniyatlardan doimo
          xabardor bo'lishingizni ta'minlaydi.
        </p>
      </div>
    </div>
  );
}
