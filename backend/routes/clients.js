import express from "express"
import Client from "../model/clients.js"

const router = express.Router()


// Obtenemos todos los clientes
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los clientes: " + error.message });
  }
});

// Crear un nuevo cliente
router.post("/", async(req, res) => {
  const {
  name,
  lastname,
  email,
  phone,
  } = req.body

  
  try{
    const e_mail = await Client.findOne({email})

    if(e_mail){
      return res.status(400).json({error: "Email ya regustrado"})
    }

    const client = new Client({
      name,
      lastname,
      email,
      phone,
    })
    await client.save();

    res.status(201).json({ message: "Cliente creado con éxito", client });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear el cliente: " + error.message });
  }
})

// Actualizar cliente por ID
// router.put("/:id", (req, res) => {})

// Eliminar cliente por ID
// router.delete("/:id", (req, res) => {})

export default router
