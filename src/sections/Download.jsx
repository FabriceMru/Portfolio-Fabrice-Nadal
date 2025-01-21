import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import React, { useState } from "react";

const Download = () => {
  const [password, setPassword] = useState(""); // Zustand für das Passwort
  const [accessGranted, setAccessGranted] = useState(false); // Zustand für Zugriff

  const handlePasswordSubmit = () => {
    const correctPassword = "061088"; // Definiere das Passwort
    if (password === correctPassword) {
      setAccessGranted(true); // Zugriff gewähren
    } else {
      alert("Falsches Passwort! Bitte erneut versuchen."); // Fehler anzeigen
    }
  };

  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-28 pt-16 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          {!accessGranted ? (
            // Passwort-Eingabemaske anzeigen
            <div className="password-form text-center mt-10">
              <p className="body-3 mb-8">
                Bitte geben Sie das Passwort ein, um auf die Downloads
                zuzugreifen.
              </p>
              <input
                type="password"
                placeholder="Passwort eingeben"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input mb-4 px-4 py-2 border rounded"
              />
              <button
                onClick={handlePasswordSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Bestätigen
              </button>
            </div>
          ) : (
            // Wenn Zugriff gewährt wurde, Download-Links anzeigen
            <div className="flex items-center mt-10">
              <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
                <div className="mt-0 mr-14">
                  <img
                    className
                    src="/images/logo-kitsune.png"
                    width={340}
                    height={340}
                    alt="maske"
                  />

                  <span>
                    <i className="w-full text-gray-400 space-y-4 text-center text-xl mb-6 w-full text-justify">
                      Kōbō Kitsune (工房狐), die "Werkstatt des Fuchses" steht
                      an der Schwelle zwischen zwei Welten - verwurzelt in der
                      mystischen Tradition Japans und zugleich vorausschauend in
                      die digitale Zukunft. In dieser Werkstatt verschmelzen
                      jahrtausendealte Handwerkskunst und modernste Technologie
                      zu einer harmonischen Einheit. <br />
                      <br />
                      Die Zeichen 工 (kō) und 房 (bō) formen zusammen "Kōbō"
                      (工房) - die Werkstatt. Während 工 die schöpferische Kraft
                      des Handwerks verkörpert, öffnet 房 die Tür zu einem
                      Refugium der Kreativität, wo Inspiration auf Können
                      trifft. <br />
                      <br />
                      Der Fuchs, "Kitsune" (狐), ist Meister der Verwandlung und
                      Hüter uralter Weisheiten. Seine Präsenz vereint
                      tiefgründige Weisheit und schelmische Spielerei - wie Yin
                      und Yang in perfekter Balance. So entsteht ein magischer
                      Ort, wo das Alltägliche auf das Außergewöhnliche trifft
                      und neue Wunder entstehen.
                    </i>
                  </span>
                </div>

                <p className="body-3 mb-8 mt-10 max-w-md">
                  <b>
                    Herunterladen von Lebenslauf und Zertifikaten als ZIP Datei
                  </b>
                </p>
                <ul className="flex flex-wrap items-center gap-6">
                  {links.map(({ id, url, icon }) => (
                    <li
                      key={id}
                      className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    >
                      <a
                        href={url}
                        className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src={"/images/lines.svg"}
                          alt="lines"
                          className="absolute size-13/20 object-contain"
                        />
                        <span className="download_tech-icon">{icon}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 max-md:hidden">
                <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                  <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                    <span className="download_preview-dot left-6 bg-p2" />
                    <span className="download_preview-dot left-11 bg-s3" />
                    <span className="download_preview-dot left-16 bg-p1/15" />

                    <img
                      src="/images/Lebenslauf.png"
                      width={855}
                      height={655}
                      alt="screen"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Logo und Partner Projekte bleiben unterhalb */}
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10 text-center">
                <h2 className="text-p4 mb-8">Partner Projekte</h2>
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
