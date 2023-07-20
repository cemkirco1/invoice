import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import englishTranslation from "./translations/en.json";
import frenchTranslation from "./translations/fr.json";
import turkishTranslation from "./translations/tr.json";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof englishTranslation;
      tr: typeof turkishTranslation;
      fr: typeof frenchTranslation;
    };
  }
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: englishTranslation },
      tr: { translation: turkishTranslation },
      fr: { translation: frenchTranslation },
    },
    interpolation: {
      escapeValue: false,
    },

    fallbackLng: "en",
    // FIXME: Remove this and instead assert or handle nulls where they're used.
    returnNull: false,
  });
