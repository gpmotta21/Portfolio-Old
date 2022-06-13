import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locales/pt-br.json";
import ENUS from "./locales/en-us.json";

const resources = {
  "pt-BR": PTBR,
  "en-US": ENUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language === "pt-BR" ? "pt-BR" : "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
