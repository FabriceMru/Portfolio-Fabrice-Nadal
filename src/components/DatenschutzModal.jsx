import React from "react";

export default function DatenschutzModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#0a0d1c] text-white max-w-3xl w-full p-8 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">
          Datenschutzerklärung
        </h1>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          Allgemeine Hinweise
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.
          Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend
          der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          1. Verantwortlicher
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
          2. Erhebung und Speicherung personenbezogener Daten sowie Art und
          Zweck von deren Verwendung
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Beim Besuch dieser Website werden automatisch Informationen an den
          Server dieser Website gesendet. Diese Informationen werden temporär in
          einem sogenannten Logfile gespeichert. Folgende Informationen können
          dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
          gespeichert werden:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>
            Verwendeter Browser, Betriebssystem und Name des Access-Providers
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-300">
          Die genannten Daten werden verarbeitet zur Gewährleistung eines
          reibungslosen Verbindungsaufbaus, einer komfortablen Nutzung der
          Website, zur Systemsicherheit sowie zu weiteren administrativen
          Zwecken. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          3. Kontaktaufnahme per E-Mail
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Wenn Sie mit mir per E-Mail Kontakt aufnehmen, werden Ihre Angaben
          (z. B. Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage
          und für den Fall von Anschlussfragen gespeichert. Diese Daten gebe ich
          nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          4. Ihre Rechte als betroffene Person
        </h2>
        <p className="mt-2 text-sm text-gray-300">Sie haben das Recht auf:</p>
        <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        </ul>
        <p className="mt-2 text-sm text-gray-300">
          Sie können sich außerdem bei einer Aufsichtsbehörde beschweren (Art.
          77 DSGVO), wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen
          Datenschutzrecht verstößt.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">5. Hosting</h2>
        <p className="mt-2 text-sm text-gray-300">
          Diese Website wird bei einem externen Dienstleister gehostet
          (Squarespace Ireland Limited). Personenbezogene Daten, die auf dieser
          Website erfasst werden, werden auf den Servern des Hosters
          gespeichert. Der Einsatz des Hosters erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. b und f DSGVO sowie eines Auftragsverarbeitungsvertrags
          gemäß Art. 28 DSGVO.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          6. SSL- bzw. TLS-Verschlüsselung
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an
          dem Schloss-Symbol.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-blue-300">
          7. Kontakt Datenschutz
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          Bei Fragen zum Datenschutz wenden Sie sich bitte an:{" "}
          <a
            href="mailto:kobokitsune01@gmail.com"
            className="underline text-blue-400 hover:text-blue-500"
          >
            E-Mail
          </a>
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
