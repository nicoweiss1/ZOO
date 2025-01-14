import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login"; // Importiere deine Login-Komponente
import WelcomePage from "./components/WelcomePage/WelcomePage"; // Die Willkommensseite
import TierPage from "./components/TierPage/TierPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/tiere" element={<TierPage />} />
      </Routes>
    </Router>
  );
}

export default App;
