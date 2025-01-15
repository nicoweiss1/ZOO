const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

// Speichert Tickets im Speicher
const tickets = {};

// POST: Speichere das Ticket
app.post("/save-ticket", (req, res) => {
  try {
    const data = req.body; // Ticket-Daten vom Frontend
    const ticketID = data.ticketID; // Ticket-ID
    tickets[ticketID] = data; // Speichere das Ticket im Speicher
    const filePath = path.join(__dirname, "ticket.json");
    fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2)); // Optional: In Datei speichern
    res.status(200).send({ message: "Ticket saved successfully!" });
  } catch (error) {
    console.error("Fehler beim Speichern des Tickets:", error);
    res.status(500).send({ message: "Fehler beim Speichern des Tickets" });
  }
});

// GET: Zeige das Ticket über die ID
app.get("/ticket/:id", (req, res) => {
  const { id } = req.params;
  if (tickets[id]) {
    res.status(200).send(tickets[id]);
  } else {
    res.status(404).send({ message: "Ticket nicht gefunden" });
  }
});

// Starte den Server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
