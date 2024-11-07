import express from "express";

const router = express.Router();

let usuarios = [];
let id = 0;

//Obtenemos todos los usuarios
router.get("/", (req, res) => {
  res.send(usuarios);
});

//Crear usuario nuevo
router.post("/", (req, res) => {});

export default router;
