import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importiere useNavigate von React Router
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Verwende useNavigate für die Weiterleitung

  const handleLogin = (e) => {
    e.preventDefault();

    // Einfache Überprüfung für die Anmeldeinformationen
    if (username === "admin" && password === "12345") {
      // Wenn der Login erfolgreich ist, leite weiter zur neuen Seite
      navigate("/welcome");
    } else {
      alert("Falscher Benutzername oder Passwort");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
