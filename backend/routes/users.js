import bcrypt from "bcrypt"
import express from "express"
import User from "../models/user.js"
import Role from "../models/role.js"

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
  const { name, lastName, username, password, email, roleName = "cashier" } = req.body

  try {
    const role = await Role.findOne({ name: roleName })

    if (!role) {
      return res.status(400).json({ error: "Rol no valido" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      name,
      lastName,
      username,
      password: hashedPassword,
      email,
      role_id: role._id
    })
    await user.save()
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
