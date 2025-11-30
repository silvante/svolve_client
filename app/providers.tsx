"use client";

import { NextIntlClientProvider } from "next-intl";
import React from "react";

interface Params {
  lang: string;
  messages: any;
  children: React.ReactNode;
}

const timeZone = "Asia/Tashkent";

export default function LangProvider({ lang, messages, children }: Params) {
  // should I get rid of multi language support?
  return (
    <NextIntlClientProvider locale={lang} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}
