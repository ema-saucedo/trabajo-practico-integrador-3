import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { startDB } from "./src/config/database.js";
import { UserModel } from "./src/models/user.model.js";
import { eventModel } from "./src/models/event.model.js";
import { CategoryModel } from "./src/models/category.model.js";
import { adminMiddleware } from "./src/middlewares/admin.middleware.js";
import { authMiddleware } from "./src/middlewares/auth.middleware.js";
import { ownerMiddleware } from "./src/middlewares/owner.middleware.js";
import { validator } from "./src/middlewares/validator.middleware.js";

dotenv.config(); // carga el .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos
app.use(cookieParser());   // para leer req.cookies.token (JWT)
app.use(cors({            // CORS con credentials para que viajen cookies
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());  // parsea JSON del body

// Mensaje de salud
app.get("/", (req, res) => {
  res.json({ msg: "API funcionando correctamente" });
});

// Conexión a Mongo y encendido del server
app.listen(PORT, () => {
  startDB();
  console.log(`Servidor corriendo correctamente en el puerto ${PORT}`);
});