import bcrypt from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
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
  const {
    name,
    lastName,
    username,
    password,
    email,
    roleName = "cashier"
  } = req.body

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
    const token = jwt.sign(
      { id: user._id, role: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )
    res.status(201).json({ message: "Usuario creado con exito", token })
    console.log("Usuario creado:", user.name)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "Error al crear el usuario: " + error.message })
  }
})

// Actualizar usuario por Id
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" })
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    )
    res.json(updatedUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al actualizar el usuario: " + error })
  }
})

// Eliminar un usuario por Id
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" })
    }
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: "Usuario eliminado con éxito" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error al eliminar el usuario: " + error })
  }
})

export default router
