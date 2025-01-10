import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Sprache wechseln
  };

  return (
    <div style={{ position: "absolute", top: "10px", left: "10px" }}>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("fr")}>FR</button>
    </div>
  );
};

export default LanguageSwitcher;
