"use client";

import { NextIntlClientProvider } from "next-intl";
import React from "react";

interface Params {
  lang: string;
  messages: any;
  children: React.ReactNode;
}

export default function LangProvider({ lang, messages, children }: Params) {
  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
