import React, { useState } from "react";
import { motion } from "framer-motion";

const PopupCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button, um das Popup zu öffnen */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          left: "20px", // Button auf der linken Seite
          zIndex: 9999,
        }}
      >
        Kontakt aufnehmen
      </button>

      {/* Popup */}
      {isOpen && (
        <>
          {/* Grauer, transparenter Hintergrund */}
          <div
            onClick={() => setIsOpen(false)} // Popup schließen, wenn der Hintergrund angeklickt wird
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Grauer Hintergrund
              zIndex: 9998,
            }}
          />

          {/* Popup-Fenster */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            style={{
              position: "fixed",
              top: "20%",
              left: "20px", // Popup auf der linken Seite
              background: "#0a0f24",
              padding: "20px",
              borderRadius: "10px",
              color: "white",
              zIndex: 9999,
              width: "300px",
            }}
          >
            <h2>Suchen Sie einen Junior Fullstack-Entwickler?</h2> <br />
            <br />
            <p>Schreiben Sie mir eine E-Mail!</p>
            <a
              href="mailto:fabrice.bewerbungen@gmail.com"
              style={{
                color: "#00ffff",
                textDecoration: "none",
                fontWeight: "bold",
                display: "block",
                marginBottom: "20px",
              }}
            >
              fabrice.bewerbungen@gmail.com
            </a>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#00ffff",
                color: "#0a0f24",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Schließen
            </button>
          </motion.div>
        </>
      )}
    </>
  );
};

export default PopupCTA;
