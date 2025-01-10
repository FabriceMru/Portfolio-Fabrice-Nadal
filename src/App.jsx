import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher.jsx"; // Importiere die Sprachwechsler-Komponente
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  const { t } = useTranslation(); // Hook für Übersetzungen

  return (
    <main className="overflow-hidden">
      <LanguageSwitcher /> {/* Sprachwechsler oben links */}
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
