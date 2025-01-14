import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
 // QR-Code-Bibliothek
import { Link, useLocation } from "react-router-dom"; // Für Footer-Verlinkungen
import "./TicketPage.css";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const [ticket, setTicket] = useState(null); // Ticket-JSON-Daten
  const location = useLocation(); // Aktueller Pfad für den Footer

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTicket = () => {
    const newTicket = {
      ...formData,
      ticketID: Math.random().toString(36).substr(2, 9), // Generiere eine zufällige ID
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setTicket(newTicket); // Speichere die Daten
  };

  const showJsonData = () => {
    if (ticket) {
      alert(JSON.stringify(ticket, null, 2)); // Zeigt JSON-Daten in einem Pop-up an
    }
  };

  return (
    <div className="ticket-container">
      <h1>Ticket kaufen</h1>
      {!ticket ? (
        <>
          <form className="ticket-form">
            <input
              type="text"
              name="firstName"
              placeholder="Vorname"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Alter"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Strasse"
              value={formData.street}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Ort"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postleitzahl"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={generateTicket}>
              Ticket kaufen
            </button>
          </form>
        </>
      ) : (
        <>
          <p>Ihr Ticket wurde erstellt! Scannen Sie den QR-Code:</p>
          <div onClick={showJsonData} style={{ cursor: "pointer" }}>
          <QRCodeCanvas value={JSON.stringify(ticket)} size={200} />
          </div>
        </>
      )}

      {/* Footer */}
      <div className="footer-icons">
        <Link
          to="/"
          className={`footer-link ${location.pathname === "/" ? "active" : ""}`}
        >
          <span>Home</span>
        </Link>
        <Link
          to="/ticket"
          className={`footer-link ${
            location.pathname === "/ticket" ? "active" : ""
          }`}
        >
          <span>Ticket</span>
        </Link>
      </div>
    </div>
  );
};

export default TicketPage;
