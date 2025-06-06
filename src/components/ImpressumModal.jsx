import React from "react";

export default function ImpressumModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#0a0d1c] text-white max-w-3xl w-full p-8 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Impressum</h1>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          Angaben gemäß § 5 TMG:
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Jean Fabrice Arnaud Nadal
          <br />
          Kōbō Kitsune
          <br />
          Kantstraße 1<br />
          12169 Berlin
          <br />
          Deutschland
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">Kontakt:</h2>
        <p className="mt-2 text-sm text-gray-300">
          Telefon: +49 160 924 65810
          <br />
          E-Mail:{" "}
          <a
            href="mailto:kobokitsune01@gmail.com"
            className="underline text-blue-400 hover:text-blue-500"
          >
            kobokitsune01@gmail.com
          </a>
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Jean Fabrice Arnaud Nadal
          <br />
          Kantstraße 1<br />
          12169 Berlin
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          Haftung für Inhalte
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
          entfernen.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          Haftung für Links
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten
          Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
          nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich
          derartige Links umgehend entfernen.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          Urheberrecht
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet und als solche
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
          umgehend entfernen.
        </p>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
