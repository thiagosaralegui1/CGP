// src/routes/eventos.routes.js
import { Router } from "express";
import {
  agregarEvento,
  listarEventos,
} from "../controllers/eventos.controller.js";

const router = Router();

router.get("/", listarEventos);
router.post("/", agregarEvento);

export default router;
