"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";

export type ILang = "en" | "ko";
const translations = { en, ko };

interface LocaleContextProps {
  locale: ILang;
  setLocale: (locale: ILang) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
});

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<ILang>("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocale(savedLocale as ILang);
    }
  }, []);

  const setLanguage = (lang: ILang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: Record<string, any> = translations[locale];
    for (let k of keys) {
      if (typeof value !== "object" || value === null || !(k in value)) {
        return key;
      }
      value = value[k as keyof typeof value];
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: setLanguage, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
