// src/app.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
//import eventosRoutes from "./routes/eventos.routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
//app.use("/api/eventos", eventosRoutes);

export default app;
