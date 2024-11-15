import express from "express"
import Client from "../model/clients.js"

const router = express.Router()


// Obtenemos todos los clientes
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener los clientes: " + error.message });
  }
});

// Crear un nuevo cliente
router.post("/", (req, res) => {
  const {
    nombre,
    fecha_creacion,
    fecha_modificacion,
    telefono,
    correo_electronico
  } = req.body
  if (
    !nombre ||
    !fecha_creacion ||
    !fecha_modificacion ||
    !telefono ||
    !correo_electronico
  ) {
    res.status(400).json({ error: "Datos incompletos" })
    return
  }
  if (
    clientes.some(
      (cliente) => cliente.correo_electronico === correo_electronico
    )
  ) {
    res
      .status(400)
      .json({ error: "Ya existe un cliente con el mismo correo electrónico" })
    return
  }
  const cliente = {
    nombre,
    fecha_creacion,
    fecha_modificacion,
    telefono,
    correo_electronico
  }
  clientes.push(cliente)
  res.status(201).json(cliente)


})

// Actualizar cliente por ID
// router.put("/:id", (req, res) => {})

// Eliminar cliente por ID
// router.delete("/:id", (req, res) => {})

export default router
