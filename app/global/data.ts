import youtubeIcon from "@/public/social_icons/youtube.svg";
import telegramIcon from "@/public/social_icons/telegram.svg";
import xamidovIcon from "@/public/social_icons/xamidov.svg";

export const origins = [
  {
    id: 1,
    name: "andijon",
  },
  {
    id: 2,
    name: "buxoro",
  },
  {
    id: 3,
    name: "farg'ona",
  },
  {
    id: 4,
    name: "jizzax",
  },
  {
    id: 5,
    name: "xorazm",
  },
  {
    id: 6,
    name: "namangan",
  },
  {
    id: 7,
    name: "navoiy",
  },
  {
    id: 8,
    name: "qashqadaryo",
  },
  {
    id: 9,
    name: "nukus",
  },
  {
    id: 10,
    name: "samarqand",
  },
  {
    id: 11,
    name: "sirdaryo",
  },
  {
    id: 12,
    name: "surxondaryo",
  },
  {
    id: 13,
    name: "toshkent",
  },
];

export const workerRoles = [
  {
    id: 1,
    name: "receptionist",
    include_types: false,
    terms:
      "Qabulxona xodimi sizning IshPanelingizga kirish huquqiga ega bo'ladi, ammo mijozlarni tasdiqlay olmaydi, ular faqat mijozlarni ro'yxatdan o'tkazadi va qayd etadi, ular statistikani va oylik to'lovni ko'ra olmaydi.",
  },
  {
    id: 2,
    name: "doctor",
    include_types: true,
    terms:
      "Shifokor mijozlarni o'ziga biriktirilgan turlar bilan tasdiqlashi mumkin, shuningdek ular faqat o'ziga biriktirilgan turlar bilan mijozlarni qabul qiladi. Qabulxona xodimlari singari ular faqat IshPaneliga kirish huquqiga ega bo'ladi, boshqa hech narsa emas.",
  },
];

export const Socials = [
  {
    id: 1,
    name: "YouTube rasmiy kanal",
    url: "https://www.youtube.com/@svolveuz",
    icon: youtubeIcon,
  },
  {
    id: 2,
    name: "Telegram rasmiy kanal",
    url: "https://t.me/svolve",
    icon: telegramIcon,
  },
  {
    id: 3,
    name: "Telegram Chat",
    url: "https://t.me/svolvechat",
    icon: telegramIcon,
  },
  {
    id: 4,
    name: "Yaratuvchi haqida",
    url: "https://xamidov.uz",
    icon: xamidovIcon,
  },
];

export function isEven(n: number) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}