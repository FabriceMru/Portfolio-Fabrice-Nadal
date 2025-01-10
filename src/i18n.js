import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Lädt Übersetzungen von Backend (lokale JSON-Dateien)
  .use(LanguageDetector) // Erkennt Benutzer-Sprache automatisch
  .use(initReactI18next) // Bindet i18n an React
  .init({
    fallbackLng: "de", // Fallback-Sprache (Deutsch)
    debug: true,
    interpolation: {
      escapeValue: false, // Keine HTML-Escapes in React nötig
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Übersetzungsdateien (Pfad relativ zu `public`)
    },
  });

export default i18n;
