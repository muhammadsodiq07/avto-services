import i18n from "i18next";
import transUz from "./uz.json";
import transRus from "./rus.json";
import { initReactI18next } from "react-i18next";

const resources = {
  rus: {
    translation: transRus,
  },
  uz: {
    translation: transUz,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng:
    localStorage.getItem("language") !== null
      ? localStorage.getItem("language")
      : "",
  fallbackLng: "rus",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
