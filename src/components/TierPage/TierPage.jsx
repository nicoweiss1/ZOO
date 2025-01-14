import React, { useState } from "react";
import "./TierPage.css";
import { Link } from "react-router-dom";

const TierPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/Tiger.jpg",
    "/Loewe.jpg",
    "/Penguin.jpg",
    "/Elefant.jpg",
    "/Zebra.jpg",
    "/Giraffe.jpg",
    "/Krokodil.jpg",
    "/Affe.jpg",
    "/Baer.jpg"
  ]; // Füge hier die neuen Bilder hinzu

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="tier-container">
      <h1>Hallo Nico!</h1>
      <div className="navigation">
        <Link to="/welcome">
          <button>Über uns</button>
        </Link>
        <button>Tiere</button>
      </div>
      <div className="carousel">
        {currentImage > 0 && (
          <button className="carousel-button previous" onClick={handlePrevious}>
            &#8592;
          </button>
        )}
        <img
          src={images[currentImage]}
          alt={`Tier ${currentImage + 1}`}
          className="carousel-image"
        />
        {currentImage < images.length - 1 && (
          <button className="carousel-button next" onClick={handleNext}>
            &#8594;
          </button>
        )}
      </div>
      <div className="footer-icons">
        <span>Home</span>
        <span>Ticket</span>
      </div>
    </div>
  );
};

export default TierPage;
