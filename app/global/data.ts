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
      "Receptionist will have access to your WorkPanel but can not commit clients, they will only register and records clients, they can not watch statitics and monthly fee",
  },
  {
    id: 2,
    name: "doctor",
    include_types: true,
    terms:
      "Doctor can commit clients with types that you attached to them, also they will only recieve clients with types that attached to them, Just like receptionists they will only have access to WorkPanel nothing more.I",
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
