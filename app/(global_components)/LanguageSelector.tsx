"use client";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", flag: "/flags/en.svg" },
  { code: "ru", label: "Russian", flag: "/flags/ru.svg" },
  { code: "uz", label: "Uzbek",  flag: "/flags/uz.svg" },
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState(languages[0]);

  console.log(selected);

  return (
    <div className="w-48 relative hidden md:flex">
      <Listbox value={selected} onChange={setSelected}>
        {/* Button */}
        <ListboxButton className="flex items-center gap-3 border p-2 rounded-xl w-full shadow-sm">
          <Image
            src={selected.flag}
            width={28}
            height={28}
            className="rounded-full"
            alt=""
          />
          <span className="text-sm">{selected.label}</span>
        </ListboxButton>

        {/* Options */}
        <ListboxOptions className="mt-2 border rounded-xl bg-white shadow-lg w-full absolute">
          {languages.map((lang) => (
            <ListboxOption key={lang.code} value={lang}>
              {({ active }) => (
                <div
                  className={`flex items-center gap-3 p-2 cursor-pointer ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  <Image
                    src={lang.flag}
                    width={28}
                    height={28}
                    className="rounded-full"
                    alt=""
                  />
                  <span className="text-sm">{lang.label}</span>
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
