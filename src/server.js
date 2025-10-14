import express from "express";
import pool from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta inicial
app.get("/", (req, res) => {
  res.send("Servidor Node funcionando correctamente 🚀");
});

// Ruta de prueba de la base de datos
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS fecha");
    res.json({ ok: true, resultado: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
