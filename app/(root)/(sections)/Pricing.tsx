"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "use-intl";

export default function Pricing() {
  const t = useTranslations()
  return (
    <div className="text_color space-y-4">
      <p className="text-md md:text-lg">{t("pricing.trial")}</p>
      <h2 className="text-3xl md:text-5xl">{t("pricing.title")}</h2>
      <p className="text-md md:text-lg">{t("pricing.desc")}</p>

      <div className="p-5 md:p-8 border border-gray-300 rounded-2xl space-y-5">
        <div className="space-y-2">
          <h3 className="text-3xl md:text-5xl">
            99,000 UZS <span className="text-lg">per month</span> /{" "}
            <span className="text-lg">organization</span>
          </h3>
          <p className="text-md md:text-lg">{t("pricing.fees")}</p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2">
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> {t("pricing.features.1")}
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> {t("pricing.features.2")}
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> {t("pricing.features.3")}
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> {t("pricing.features.4")}
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> {t("pricing.features.5")}
          </p>
          <p className="text-md md:text-lg flex flex-col md:flex-row md:items-center gap-2">
            <Check color="#000000" /> {t("pricing.features.6")}
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2 flex items-start flex-col">
          <p className="text-md md:text-lg flex items-center gap-2">
             {t("pricing.methods")}
          </p>
          <Link
            href={"/signup"}
            className="py-2 px-4 font-medium flex gap-2 items-center text-lg  text-white bg-violet-600 rounded-xl"
          >
            {t("hero.start_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
