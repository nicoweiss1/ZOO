import React from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Hallo Nico!</h1>
      <div className="navigation">
        <button>Über uns</button>
        <Link to="/tiere">
          <button>Tiere</button>
        </Link>
      </div>
      <h2>Willkommen im Zoo Zürich – dem Tor zur faszinierenden Welt der Tiere!</h2>
      <p>
        Seit seiner Eröffnung im Jahr 1929 bietet der Zoo Zürich seinen
        Besucherinnen und Besuchern einzigartige Einblicke in die Vielfalt der
        Tierwelt. Unser Ziel ist es, Tiere und ihre natürlichen Lebensräume
        hautnah erlebbar zu machen und gleichzeitig den Schutz und Erhalt
        bedrohter Arten zu fördern. Mit modern gestalteten Anlagen, wie dem
        Masoala Regenwald, der Lewa Savanne und der faszinierenden
        Unterwasserwelt im Kaeng Krachan Elefantenpark, laden wir Sie ein, in
        ferne Lebensräume einzutauchen und mehr über die Bedeutung des
        Naturschutzes zu erfahren.
      </p>
      <p>
        Der Zoo Zürich steht für eine nachhaltige Zukunft und verbindet Bildung,
        Forschung und Naturschutz zu einem unvergesslichen Erlebnis für die
        ganze Familie. Entdecken Sie bei uns die Schönheit und Vielfalt unserer
        Erde und erleben Sie die Tiere so nah wie nie zuvor.
      </p>
      <div className="footer-icons">
        <span>Home</span>
        <span>Ticket</span>
      </div>
    </div>
  );
};

export default WelcomePage;
