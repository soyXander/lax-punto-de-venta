import express from "express";

const router = express.Router();

let usuarios = [];

//Obtenemos todos los usuarios
router.get("/", (req, res) => {
  res.send(usuarios);
});

export default router;
