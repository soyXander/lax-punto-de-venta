import express from "express";

const router = express.Router();

let usuarios = [];
let id = 0;

//Obtenemos todos los usuarios
router.get("/", (req, res) => {
  res.send(usuarios);
});

//Crear usuario nuevo
router.post("/", (req, res) => {
  const { nombre, apellido, nombre_usuario, contraseña } = req.body;
  if (!nombre || !apellido || !nombre_usuario || !contraseña) {
    res.status(400).json({ error: "Datos incompletos" });
    return;
  }
});

export default router;
