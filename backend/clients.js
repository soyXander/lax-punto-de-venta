import express from "express";

const router = express.Router();

let clientes = [];

// Obtenemos todos los clientes
router.get("/", (req, res) => {
  res.send(clientes);
});

// Crear un nuevo cliente
router.post("/", (req, res) => {
  const {
    nombre,
    fecha_creacion,
    fecha_modificacion,
    telefono,
    correo_electronico,
  } = req.body;
  if (
    !nombre ||
    !fecha_creacion ||
    !fecha_modificacion ||
    !telefono ||
    !correo_electronico
  ) {
    res.status(400).json({ error: "Datos incompletos" });
    return;
  }
  if (
    clientes.some(
      (cliente) => cliente.correo_electronico === correo_electronico
    )
  ) {
    res
      .status(400)
      .json({ error: "Ya existe un cliente con el mismo correo electrónico" });
    return;
  }
  const cliente = {
    id,
    nombre,
    fecha_creacion,
    fecha_modificacion,
    telefono,
    correo_electronico,
  };
  clientes.push(cliente);
  res.status(201).json(cliente);

  id++;
});
