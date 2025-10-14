// src/controllers/eventos.controller.js
import pool from "../config/db.js";

export const listarUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (err) {
    console.error("❌ Error al listar usuarios:", err);
    res.status(500).send("Error del servidor");
  }
};

export const agregarUsuarios = async (req, res) => {
  try {
    const { titulo, descripcion, fecha, hora } = req.body;
    await pool.query(
      "INSERT INTO usuarios (id, nombre, email, password) VALUES (?, ?, ?, ?)",
      [titulo, descripcion, fecha, hora]
    );
    res.status(201).send("✅ Evento agregado correctamente");
  } catch (err) {
    console.error("❌ Error al agregar evento:", err);
    res.status(500).send("Error del servidor");
  }
};
