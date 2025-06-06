import { useState } from "react";
import { socials } from "../constants/index.jsx";
import ImpressumModal from "../components/ImpressumModal";
import DatenschutzModal from "../components/DatenschutzModal";

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          {/* Linker Textblock mit Impressum & Datenschutz */}
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-20 text-center max-w-xl">
              Copyright© 2024 Kōbō Kitsune <br />
              <i>
                „Verantwortlich für den Inhalt dieser Website: Fabrice Nadal.
                <br />
                Kōbō Kitsune ist eine geplante Marke und befindet sich derzeit
                in Entwicklung.“
              </i>
              <br />
              <span className="mt-2 flex justify-center gap-4">
                <button
                  onClick={() => setShowImpressum(true)}
                  className="underline text-white hover:text-blue-300 text-sm"
                >
                  Impressum
                </button>
                <button
                  onClick={() => setShowDatenschutz(true)}
                  className="underline text-white hover:text-blue-300 text-sm"
                >
                  Datenschutz
                </button>
              </span>
            </p>
          </div>

          {/* Leerer Bereich (optional nutzbar) */}
          <div className="flex items-center justify-center sm:ml-auto"></div>

          {/* Social Icons */}
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="w-7 h-7 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modals */}
      <ImpressumModal
        isOpen={showImpressum}
        onClose={() => setShowImpressum(false)}
      />
      <DatenschutzModal
        isOpen={showDatenschutz}
        onClose={() => setShowDatenschutz(false)}
      />
    </footer>
  );
};

export default Footer;
