import React from "react";
import "./WelcomePage.css"; // Verwende diese Datei für deine Stile

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Hallo Nico!</h1>
      <div className="navigation">
        <button>Über uns</button>
        <button>Tiere</button>
      </div>
      <h2>Willkommen im Zoo Zürich – dem Tor zur faszinierenden Welt der Tiere!</h2>
      <p>
        Seit seiner Eröffnung im Jahr 1929 bietet der Zoo Zürich seinen
        Besucherinnen und Besuchern einzigartige Einblicke in die Vielfalt der
        Tierwelt...
      </p>
      {/* Füge hier mehr Inhalt entsprechend dem Bild hinzu */}
    </div>
  );
};

export default WelcomePage;
