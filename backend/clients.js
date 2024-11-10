import express from "express";

const router = express.Router();

let clientes = [];

// Obtenemos todos los clientes
router.get("/", (req, res) => {
  res.send(clientes);
});
