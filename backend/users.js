import express from "express"
import User from "./models/user.js"
import Role from "./models/role.js"

const router = express.Router()

//Obtenemos todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al obtener los usuarios: " + error.message })
  }
})

//Crear usuario nuevo
router.post("/", async (req, res) => {
  const { name, lastName, username, password, email, role = "cashier" } = req.body

  try {
    const user = new User({
      name,
      lastName,
      username,
      password,
      email,
      role_id: await Role.findOne({ name: role })
    })
    user.save()
    res.status(201).json(user)
    console.log("Usuario creado:", user.name)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al crear el usuario: " + error.message })
  }
})

//Actualizar ususario por Id
router.put("/:id", (req, res) => {})

// Eliminar un usuario por Id
router.delete("/:id", (req, res) => {})

export default router
